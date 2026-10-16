/**
 * PromptForge PRO — Asset & Reference Studio Engine
 * Module for creating character/object multi-angle reference packages (1024px Face, Full Body, Detail, Location)
 * and 2K Graphic Production Contact Sheets (2048x1152 PNG).
 * Layout: Top Reference Slots (4-Column) + Bottom Graphic Production Card.
 */

(function () {
  'use strict';

  // --- MODULE STATE ---
  const ASSET_STATE = {
    entityType: 'character',
    id: 'CHAR_01',
    palette: ['#e4e4e7', '#4b6b94', '#1f2421', '#c47d38', '#2b2d42'],
    slots: {
      face: {
        id: 'face',
        img: null,
        zoom: 1.0,
        panX: 0,
        panY: 0,
        aspect: 1, // 1:1 square
        outWidth: 1024,
        outHeight: 1024,
        tag: '@Image1 // <Picture 1>',
        title: 'Портрет / Лицо (1:1, 1024px)'
      },
      fullbody: {
        id: 'fullbody',
        img: null,
        zoom: 1.0,
        panX: 0,
        panY: 0,
        aspect: 9 / 16,
        outWidth: 1080,
        outHeight: 1920,
        tag: '@Image2 // <Picture 2>',
        title: 'Полный рост (Анфас, 9:16)'
      },
      detail: {
        id: 'detail',
        img: null,
        zoom: 1.0,
        panX: 0,
        panY: 0,
        aspect: 1,
        outWidth: 1024,
        outHeight: 1024,
        tag: '@Image3 // <Picture 3>',
        title: 'Деталь / Принт / Профиль (1:1)'
      },
      location: {
        id: 'location',
        img: null,
        zoom: 1.0,
        panX: 0,
        panY: 0,
        aspect: 16 / 9,
        outWidth: 1920,
        outHeight: 1080,
        tag: '<Location 1> // @Image4',
        title: 'Локация / Окружение сцены (16:9)'
      }
    }
  };

  // --- INITIALIZATION ---
  function initAssetRefStudio() {
    setupTabNavigation();
    setupSlotHandlers();
    setupExportHandlers();
    setupComfyStatusChecker();

    // Initial render of empty card
    setTimeout(() => {
      renderAllSlotCanvases();
      renderMasterCard();
    }, 120);

    // Re-render preview canvas on window resize
    window.addEventListener('resize', debounce(() => {
      renderAllSlotCanvases();
      renderMasterCard();
    }, 150));
  }

  // --- TAB NAVIGATION BETWEEN STUDIO & ASSET REF ---
  function setupTabNavigation() {
    const tabStudioBtn = document.getElementById('tabStudioBtn');
    const tabAssetRefBtn = document.getElementById('tabAssetRefBtn');
    const studioView = document.getElementById('studioView');
    const assetStudioView = document.getElementById('assetStudioView');

    if (!tabStudioBtn || !tabAssetRefBtn) return;

    tabStudioBtn.addEventListener('click', () => {
      tabStudioBtn.classList.add('active');
      tabAssetRefBtn.classList.remove('active');
      if (studioView) studioView.style.display = 'grid';
      if (assetStudioView) assetStudioView.style.display = 'none';
    });

    tabAssetRefBtn.addEventListener('click', () => {
      tabAssetRefBtn.classList.add('active');
      tabStudioBtn.classList.remove('active');
      if (studioView) studioView.style.display = 'none';
      if (assetStudioView) {
        assetStudioView.style.display = 'flex';
        renderAllSlotCanvases();
        renderMasterCard();
      }
    });
  }

  // --- SLOT HANDLERS (Drag & Drop, Canvas Pan & Zoom, Sliders, Buttons) ---
  function setupSlotHandlers() {
    ['face', 'fullbody', 'detail', 'location'].forEach(slotId => {
      const dropzone = document.getElementById(`dropzone_${slotId}`);
      const fileInput = document.getElementById(`fileInput_${slotId}`);
      const zoomSlider = document.getElementById(`zoomSlider_${slotId}`);
      const clearBtn = document.getElementById(`clearBtn_${slotId}`);
      const slotCanvas = document.getElementById(`slotCanvas_${slotId}`);

      if (!dropzone || !fileInput) return;

      // Click to open file picker
      dropzone.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT' && !e.target.closest('.ref-slot-controls')) {
          fileInput.click();
        }
      });

      // File input change
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          loadSlotFile(slotId, e.target.files[0]);
        }
      });

      // Drag and drop events
      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('dragover');
        });
      });

      dropzone.addEventListener('drop', (e) => {
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          loadSlotFile(slotId, e.dataTransfer.files[0]);
        }
      });

      // Zoom slider
      if (zoomSlider) {
        zoomSlider.addEventListener('input', (e) => {
          ASSET_STATE.slots[slotId].zoom = parseFloat(e.target.value);
          renderSlotCanvas(slotId);
          renderMasterCard();
        });
      }

      // Clear button
      if (clearBtn) {
        clearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          clearSlot(slotId);
        });
      }

      // Pan by dragging on canvas
      if (slotCanvas) {
        let isPanning = false;
        let startX = 0;
        let startY = 0;

        slotCanvas.addEventListener('mousedown', (e) => {
          if (!ASSET_STATE.slots[slotId].img) return;
          isPanning = true;
          startX = e.clientX - ASSET_STATE.slots[slotId].panX;
          startY = e.clientY - ASSET_STATE.slots[slotId].panY;
          slotCanvas.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
          if (!isPanning) return;
          ASSET_STATE.slots[slotId].panX = e.clientX - startX;
          ASSET_STATE.slots[slotId].panY = e.clientY - startY;
          renderSlotCanvas(slotId);
          renderMasterCard();
        });

        window.addEventListener('mouseup', () => {
          if (isPanning) {
            isPanning = false;
            if (slotCanvas) slotCanvas.style.cursor = 'grab';
          }
        });
      }
    });

    // Load sample actor button
    const loadSampleBtn = document.getElementById('loadSampleActorBtn');
    if (loadSampleBtn) {
      loadSampleBtn.addEventListener('click', loadSampleActorData);
    }

    // Clear all slots button
    const clearAllBtn = document.getElementById('clearAllSlotsBtn');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', clearAllSlots);
    }
  }

  function loadSlotFile(slotId, file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        ASSET_STATE.slots[slotId].img = img;
        ASSET_STATE.slots[slotId].zoom = 1.0;
        ASSET_STATE.slots[slotId].panX = 0;
        ASSET_STATE.slots[slotId].panY = 0;

        const slider = document.getElementById(`zoomSlider_${slotId}`);
        if (slider) slider.value = 1.0;

        const wrap = document.getElementById(`slotCanvasWrap_${slotId}`);
        const empty = document.getElementById(`dropzoneEmpty_${slotId}`);
        if (wrap) wrap.style.display = 'block';
        if (empty) empty.style.display = 'none';

        renderSlotCanvas(slotId);
        extractColorPalette();
        renderMasterCard();

        if (window.showToast) {
          window.showToast(`Референс загружен: ${ASSET_STATE.slots[slotId].tag}`, 'success');
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function clearSlot(slotId) {
    ASSET_STATE.slots[slotId].img = null;
    ASSET_STATE.slots[slotId].zoom = 1.0;
    ASSET_STATE.slots[slotId].panX = 0;
    ASSET_STATE.slots[slotId].panY = 0;

    const slider = document.getElementById(`zoomSlider_${slotId}`);
    if (slider) slider.value = 1.0;

    const wrap = document.getElementById(`slotCanvasWrap_${slotId}`);
    const empty = document.getElementById(`dropzoneEmpty_${slotId}`);
    if (wrap) wrap.style.display = 'none';
    if (empty) empty.style.display = 'flex';

    renderSlotCanvas(slotId);
    extractColorPalette();
    renderMasterCard();
  }

  function clearAllSlots() {
    ['face', 'fullbody', 'detail', 'location'].forEach(slotId => {
      ASSET_STATE.slots[slotId].img = null;
      ASSET_STATE.slots[slotId].zoom = 1.0;
      ASSET_STATE.slots[slotId].panX = 0;
      ASSET_STATE.slots[slotId].panY = 0;

      const slider = document.getElementById(`zoomSlider_${slotId}`);
      if (slider) slider.value = 1.0;

      const wrap = document.getElementById(`slotCanvasWrap_${slotId}`);
      const empty = document.getElementById(`dropzoneEmpty_${slotId}`);
      if (wrap) wrap.style.display = 'none';
      if (empty) empty.style.display = 'flex';

      renderSlotCanvas(slotId);
    });

    ASSET_STATE.palette = ['#e4e4e7', '#4b6b94', '#1f2421', '#c47d38', '#2b2d42'];
    renderMasterCard();

    if (window.showToast) {
      window.showToast('Все слоты референсов очищены', 'info');
    }
  }

  function renderAllSlotCanvases() {
    ['face', 'fullbody', 'detail', 'location'].forEach(renderSlotCanvas);
  }

  function renderSlotCanvas(slotId) {
    const canvas = document.getElementById(`slotCanvas_${slotId}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const slot = ASSET_STATE.slots[slotId];

    canvas.width = canvas.parentElement.clientWidth || 300;
    canvas.height = canvas.parentElement.clientHeight || 220;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!slot.img) return;

    ctx.save();
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = slot.img.width;
    const ih = slot.img.height;

    // Cover scale calculation
    const baseScale = Math.max(cw / iw, ch / ih);
    const finalScale = baseScale * slot.zoom;

    const drawW = iw * finalScale;
    const drawH = ih * finalScale;
    const drawX = (cw - drawW) / 2 + slot.panX;
    const drawY = (ch - drawH) / 2 + slot.panY;

    ctx.drawImage(slot.img, drawX, drawY, drawW, drawH);
    ctx.restore();
  }

  // --- SAMPLE ACTOR LOADER ---
  function loadSampleActorData() {
    const samples = [
      { id: 'face', src: 'assets/samples/sample_face.jpg' },
      { id: 'fullbody', src: 'assets/samples/sample_fullbody.jpg' },
      { id: 'detail', src: 'assets/samples/sample_detail.jpg' },
      { id: 'location', src: 'assets/samples/sample_profile.jpg' }
    ];

    let loadedCount = 0;
    samples.forEach(item => {
      const img = new Image();
      img.onload = () => {
        ASSET_STATE.slots[item.id].img = img;
        ASSET_STATE.slots[item.id].zoom = 1.0;
        ASSET_STATE.slots[item.id].panX = 0;
        ASSET_STATE.slots[item.id].panY = 0;

        const slider = document.getElementById(`zoomSlider_${item.id}`);
        if (slider) slider.value = 1.0;

        const wrap = document.getElementById(`slotCanvasWrap_${item.id}`);
        const empty = document.getElementById(`dropzoneEmpty_${item.id}`);
        if (wrap) wrap.style.display = 'block';
        if (empty) empty.style.display = 'none';

        renderSlotCanvas(item.id);
        loadedCount++;
        if (loadedCount === samples.length) {
          extractColorPalette();
          renderMasterCard();
          if (window.showToast) {
            window.showToast('Демо-референсы успешно загружены во все 4 слота!', 'success');
          }
        }
      };
      img.onerror = () => {
        console.warn('Sample image load fallback for:', item.src);
      };
      img.src = item.src;
    });
  }

  // --- COLOR PALETTE AUTO-EXTRACTION ---
  function extractColorPalette() {
    const sourceSlots = [ASSET_STATE.slots.fullbody, ASSET_STATE.slots.face, ASSET_STATE.slots.detail].filter(s => s.img);
    if (sourceSlots.length === 0) return;

    const sampleCanvas = document.createElement('canvas');
    sampleCanvas.width = 64;
    sampleCanvas.height = 64;
    const sctx = sampleCanvas.getContext('2d');

    sctx.drawImage(sourceSlots[0].img, 0, 0, 64, 64);
    const imgData = sctx.getImageData(0, 0, 64, 64).data;

    const points = [
      { x: 32, y: 12 }, // Face/Hair
      { x: 32, y: 28 }, // Upper outfit
      { x: 44, y: 34 }, // Detail/accent
      { x: 26, y: 46 }, // Trousers/denim
      { x: 32, y: 58 }  // Footwear
    ];

    points.forEach((pt, idx) => {
      const pixelIndex = (pt.y * 64 + pt.x) * 4;
      const r = imgData[pixelIndex] || 120;
      const g = imgData[pixelIndex + 1] || 120;
      const b = imgData[pixelIndex + 2] || 120;
      const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
      ASSET_STATE.palette[idx] = hex;
    });
  }

  // Helper: crop a slot cleanly to offscreen canvas
  function getCroppedSlotCanvas(slotId, targetW, targetH) {
    const slot = ASSET_STATE.slots[slotId];
    const canvas = document.createElement('canvas');
    canvas.width = targetW || slot.outWidth;
    canvas.height = targetH || slot.outHeight;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#090a10';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!slot.img) return canvas;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = slot.img.width;
    const ih = slot.img.height;

    const baseScale = Math.max(cw / iw, ch / ih);
    const finalScale = baseScale * slot.zoom;

    const drawW = iw * finalScale;
    const drawH = ih * finalScale;

    // Map pan ratio from preview canvas (220px height) to target export canvas
    const previewCanvas = document.getElementById(`slotCanvas_${slotId}`);
    const previewH = previewCanvas ? previewCanvas.height : 220;
    const panRatio = ch / (previewH || 220);

    const drawX = (cw - drawW) / 2 + slot.panX * panRatio;
    const drawY = (ch - drawH) / 2 + slot.panY * panRatio;

    ctx.drawImage(slot.img, drawX, drawY, drawW, drawH);
    return canvas;
  }

  // --- 2K PRODUCTION ASSET CARD RENDERER (2048 x 1152) ---
  function renderMasterCard() {
    const previewCanvas = document.getElementById('cardDisplayCanvas');
    if (!previewCanvas) return;

    const cardCanvas = document.createElement('canvas');
    cardCanvas.width = 2048;
    cardCanvas.height = 1152;
    const ctx = cardCanvas.getContext('2d');

    // 1. Background
    const bgGradient = ctx.createLinearGradient(0, 0, 2048, 1152);
    bgGradient.addColorStop(0, '#0a0b10');
    bgGradient.addColorStop(0.5, '#101118');
    bgGradient.addColorStop(1, '#08090d');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 2048, 1152);

    // Tech Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 2048; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1152);
      ctx.stroke();
    }
    for (let y = 0; y < 1152; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(2048, y);
      ctx.stroke();
    }

    // Outer Border Frame
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 3;
    ctx.strokeRect(32, 32, 2048 - 64, 1152 - 64);

    // Corner Brackets
    drawCornerBrackets(ctx, 32, 32, 2048 - 64, 1152 - 64, 28, 4);

    // 2. Header
    ctx.fillStyle = '#f59e0b';
    ctx.font = '700 32px "JetBrains Mono", monospace';
    ctx.fillText('PROMPTFORGE PRO // PRODUCTION REFERENCE SHEET', 64, 88);

    ctx.fillStyle = '#a1a1aa';
    ctx.font = '500 17px "Roboto", sans-serif';
    ctx.fillText('CANONICAL MULTI-ANGLE REFERENCE PACKAGE // MINIMAX H3 (REF2VA) • GOOGLE VEO 3.1 • OMNI FLASH', 64, 118);

    // Header Right Meta
    ctx.textAlign = 'right';
    ctx.fillStyle = '#f4f4f6';
    ctx.font = '700 24px "JetBrains Mono", monospace';
    ctx.fillText(`ASSET ID: ${ASSET_STATE.id || 'REF_01'}`, 2048 - 64, 88);
    ctx.fillStyle = '#d97706';
    ctx.font = '600 16px "JetBrains Mono", monospace';
    ctx.fillText(new Date().toISOString().split('T')[0] + ' // 2048×1152 MASTER', 2048 - 64, 116);
    ctx.textAlign = 'left';

    // Header Separator Line
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(64, 138);
    ctx.lineTo(2048 - 64, 138);
    ctx.stroke();

    // 3. Four Prominent Reference Slots across the canvas
    // Slot 1: Face Anchor (1:1 Square)
    const s1X = 64;
    const s1Y = 165;
    const s1W = 540;
    const s1H = 540;
    drawSlotOnCard(ctx, 'face', s1X, s1Y, s1W, s1H, '@Image1 // <Picture 1>', 'PORTRAIT & FACIAL GEOMETRY (1024×1024)');

    // Slot 1 Technical Sub-Card
    const sub1Y = s1Y + s1H + 16;
    const sub1H = 175;
    drawSpecBlock(ctx, s1X, sub1Y, s1W, sub1H, 'FACE RETENTION DIRECTIVE', 'Strict 1:1 facial identity lock to @Image1: preserve exact eye shape, eyelid folds, natural under-eye contours, nose bridge geometry, authentic bone structure, beard grooming and skin micro-texture without AI beautification.');

    // Slot 2: Full Body & Posture (9:16 Vertical)
    const s2X = s1X + s1W + 24; // 628
    const s2Y = 165;
    const s2W = 410;
    const s2H = 730; // 410 * 16 / 9 ≈ 729
    drawSlotOnCard(ctx, 'fullbody', s2X, s2Y, s2W, s2H, '@Image2 // <Picture 2>', 'FULL BODY & OUTFIT (1080×1920)');

    // Slot 3: Detail / Print / Profile (1:1 Square)
    const s3X = s2X + s2W + 24; // 1062
    const s3Y = 165;
    const s3W = 410;
    const s3H = 410;
    drawSlotOnCard(ctx, 'detail', s3X, s3Y, s3W, s3H, '@Image3 // <Picture 3>', 'DETAIL & PRINTS (1024×1024)');

    // Slot 3 Technical Sub-Card
    const sub3Y = s3Y + s3H + 16;
    const sub3H = 304;
    drawSpecBlock(ctx, s3X, sub3Y, s3W, sub3H, 'TEXTURE & ACCESSORIES SPECIFICATION', 'Tactile micro-detail preservation: garment cotton weave, crisp typography & graphic print geometry, wristwear/watch craftsmanship, footwear texture, natural shadow rolloff.');

    // Slot 4: Location / Environment (16:9 Landscape)
    const s4X = s3X + s3W + 24; // 1496
    const s4Y = 165;
    const s4W = 488;
    const s4H = 275; // 488 * 9 / 16 ≈ 275
    drawSlotOnCard(ctx, 'location', s4X, s4Y, s4W, s4H, '<Location 1> // @Image4', 'ENVIRONMENT & LIGHTING (1920×1080)');

    // Slot 4 Technical Sub-Card
    const sub4Y = s4Y + s4H + 16;
    const sub4H = 439;
    drawSpecBlock(ctx, s4X, sub4Y, s4W, sub4H, 'CINEMATOGRAPHY & LIGHTING ARCHITECTURE', 'Spatial background geometry: directional key lighting, volumetric atmospheric falloff, authentic optical focal depth blur, organic color grading harmonized to scene references.');

    // 4. Bottom Zone: Palette & Target Models (y = 930 to 1100)
    const bottomY = 940;

    // Palette Bar
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '700 14px "JetBrains Mono", monospace';
    ctx.fillText('COLOR PALETTE HARMONY (AUTO-EXTRACTED FROM REFS):', 64, bottomY);

    ASSET_STATE.palette.forEach((color, idx) => {
      const px = 64 + idx * 185;
      const py = bottomY + 16;

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(px, py, 165, 46, 8);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = getContrastColor(color);
      ctx.font = '700 13px "JetBrains Mono", monospace';
      ctx.fillText(color.toUpperCase(), px + 38, py + 29);
    });

    // Model Compatibility Badges
    const badgeStartX = 1062;
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '700 14px "JetBrains Mono", monospace';
    ctx.fillText('AI VIDEO MODELS REFERENCE SUPPORT:', badgeStartX, bottomY);

    const badges = [
      { name: 'MINIMAX H3 REF2VA', status: 'NATIVE 1:1' },
      { name: 'GOOGLE VEO 3.1', status: 'ANCHOR READY' },
      { name: 'GEMINI OMNI FLASH', status: 'COMPATIBLE' },
      { name: 'WAN 2.1 / KLING', status: 'SUPPORTED' }
    ];

    badges.forEach((b, i) => {
      const bx = badgeStartX + i * 228;
      const by = bottomY + 16;

      ctx.fillStyle = '#14141c';
      ctx.beginPath();
      ctx.roundRect(bx, by, 216, 46, 6);
      ctx.fill();
      ctx.strokeStyle = 'rgba(217, 119, 6, 0.45)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.fillStyle = '#f59e0b';
      ctx.font = '700 12px "JetBrains Mono", monospace';
      ctx.fillText(b.name, bx + 12, by + 28);
    });

    // 5. Draw to visible preview canvas (scales responsively)
    const parentW = previewCanvas.parentElement.clientWidth || 1000;
    previewCanvas.width = parentW;
    previewCanvas.height = parentW * (1152 / 2048);
    const pctx = previewCanvas.getContext('2d');
    pctx.drawImage(cardCanvas, 0, 0, previewCanvas.width, previewCanvas.height);

    // Cache cardCanvas for one-click PNG download
    window._lastRenderedCardCanvas = cardCanvas;
  }

  // Draw corner brackets on canvas
  function drawCornerBrackets(ctx, x, y, w, h, len, lw) {
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = lw;
    ctx.beginPath();
    // Top-left
    ctx.moveTo(x, y + len); ctx.lineTo(x, y); ctx.lineTo(x + len, y);
    // Top-right
    ctx.moveTo(x + w - len, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w, y + len);
    // Bottom-left
    ctx.moveTo(x, y + h - len); ctx.lineTo(x, y + h); ctx.lineTo(x + len, y + h);
    // Bottom-right
    ctx.moveTo(x + w - len, y + h); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w, y + h - len);
    ctx.stroke();
  }

  // Draw slot image with viewfinder styling on master card
  function drawSlotOnCard(ctx, slotId, x, y, w, h, tag, title) {
    const slot = ASSET_STATE.slots[slotId];

    // Background box
    ctx.fillStyle = '#12131a';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#2b2b36';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, w, h);

    if (slot.img) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(x + 2, y + 2, w - 4, h - 4);
      ctx.clip();

      const iw = slot.img.width;
      const ih = slot.img.height;
      const baseScale = Math.max(w / iw, h / ih);
      const finalScale = baseScale * slot.zoom;

      const drawW = iw * finalScale;
      const drawH = ih * finalScale;

      const previewCanvas = document.getElementById(`slotCanvas_${slotId}`);
      const previewH = previewCanvas ? previewCanvas.height : 220;
      const panRatio = h / (previewH || 220);

      const drawX = x + (w - drawW) / 2 + slot.panX * panRatio;
      const drawY = y + (h - drawH) / 2 + slot.panY * panRatio;

      ctx.drawImage(slot.img, drawX, drawY, drawW, drawH);
      ctx.restore();
    } else {
      // Empty slot placeholder
      ctx.fillStyle = '#52525b';
      ctx.font = '500 16px "Roboto", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('[ СЛОТ НЕ ЗАПОЛНЕН ]', x + w / 2, y + h / 2 - 10);
      ctx.font = '400 13px "JetBrains Mono", monospace';
      ctx.fillText('Перетащите фото в слот референса', x + w / 2, y + h / 2 + 16);
      ctx.textAlign = 'left';
    }

    // Viewfinder Corner Ticks
    drawCornerBrackets(ctx, x + 6, y + 6, w - 12, h - 12, 16, 2);

    // Crosshairs in Center
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + w / 2 - 12, y + h / 2);
    ctx.lineTo(x + w / 2 + 12, y + h / 2);
    ctx.moveTo(x + w / 2, y + h / 2 - 12);
    ctx.lineTo(x + w / 2, y + h / 2 + 12);
    ctx.stroke();

    // Top Tag Overlay Pill
    ctx.fillStyle = 'rgba(10, 11, 16, 0.9)';
    ctx.beginPath();
    ctx.roundRect(x + 10, y + 10, 220, 28, 4);
    ctx.fill();
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#f59e0b';
    ctx.font = '700 12px "JetBrains Mono", monospace';
    ctx.fillText(tag, x + 18, y + 29);

    // Bottom Title Bar
    ctx.fillStyle = 'rgba(10, 11, 16, 0.9)';
    ctx.fillRect(x + 2, y + h - 34, w - 4, 32);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 2, y + h - 34);
    ctx.lineTo(x + w - 2, y + h - 34);
    ctx.stroke();

    ctx.fillStyle = '#e4e4e7';
    ctx.font = '600 12px "Roboto", sans-serif';
    ctx.fillText(title, x + 12, y + h - 13);
  }

  // Draw specification block
  function drawSpecBlock(ctx, x, y, w, h, title, text) {
    ctx.fillStyle = '#12131a';
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 6);
    ctx.fill();
    ctx.strokeStyle = '#2b2b36';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Header label
    ctx.fillStyle = '#f59e0b';
    ctx.font = '700 12px "JetBrains Mono", monospace';
    ctx.fillText(`// ${title}`, x + 14, y + 24);

    // Divider line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 14, y + 34);
    ctx.lineTo(x + w - 14, y + 34);
    ctx.stroke();

    // Body text
    ctx.fillStyle = '#d4d4d8';
    ctx.font = '400 14px "Roboto", sans-serif';
    wrapText(ctx, text, x + 14, y + 58, w - 28, 22, 10);
  }

  // Helper text wrapping on canvas
  function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 8) {
    if (!text) return;
    const words = text.split(' ');
    let line = '';
    let lineCount = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
        lineCount++;
        if (lineCount >= maxLines - 1 && n < words.length - 1) {
          ctx.fillText(line + '...', x, y);
          return;
        }
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

  function getContrastColor(hex) {
    if (!hex || hex[0] !== '#') return '#000';
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000' : '#ffffff';
  }

  // --- EXPORT HANDLERS (Card PNG & Individual Reference PNGs) ---
  function setupExportHandlers() {
    const downloadCardBtn = document.getElementById('downloadCardBtn');
    if (downloadCardBtn) {
      downloadCardBtn.addEventListener('click', downloadProductionCard);
    }

    const downloadRefsBtn = document.getElementById('downloadRefsBtn');
    if (downloadRefsBtn) {
      downloadRefsBtn.addEventListener('click', downloadAllReferences);
    }
  }

  function downloadProductionCard() {
    const canvas = window._lastRenderedCardCanvas;
    if (!canvas) {
      if (window.showToast) {
        window.showToast('Карточка еще не сгенерирована', 'warning');
      }
      return;
    }

    const link = document.createElement('a');
    const safeName = (ASSET_STATE.id || 'REF_01').replace(/[^a-zA-Z0-9_-]/g, '_');
    link.download = `production_card_${safeName}_2k.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    if (window.showToast) {
      window.showToast('Графическая карточка 2K успешно скачана (PNG)!', 'success');
    }
  }

  function downloadAllReferences() {
    const refSlots = [
      { id: 'face', name: 'ref1_face_1024x1024.png', w: 1024, h: 1024 },
      { id: 'fullbody', name: 'ref2_fullbody_1080x1920.png', w: 1080, h: 1920 },
      { id: 'detail', name: 'ref3_detail_1024x1024.png', w: 1024, h: 1024 },
      { id: 'location', name: 'ref4_location_1920x1080.png', w: 1920, h: 1080 }
    ];

    let downloadedCount = 0;
    refSlots.forEach((ref, index) => {
      const slot = ASSET_STATE.slots[ref.id];
      if (slot.img) {
        setTimeout(() => {
          const cropCanvas = getCroppedSlotCanvas(ref.id, ref.w, ref.h);
          const link = document.createElement('a');
          link.download = ref.name;
          link.href = cropCanvas.toDataURL('image/png');
          link.click();
        }, index * 250);
        downloadedCount++;
      }
    });

    if (downloadedCount > 0) {
      if (window.showToast) {
        window.showToast(`Выгрузка ${downloadedCount} файлов референсов запущена!`, 'success');
      }
    } else {
      if (window.showToast) {
        window.showToast('Загрузите хотя бы одно фото в слоты для экспорта', 'warning');
      }
    }
  }

  // --- LOCAL COMFYUI CHECKER ---
  function setupComfyStatusChecker() {
    const statusPill = document.getElementById('comfyStatusPill');
    if (!statusPill) return;

    checkComfyHealth();
    statusPill.addEventListener('click', checkComfyHealth);
  }

  async function checkComfyHealth() {
    const statusPill = document.getElementById('comfyStatusPill');
    const statusText = document.getElementById('comfyStatusText');
    if (!statusPill || !statusText) return;

    try {
      const res = await fetch('http://127.0.0.1:8188/system_stats', { method: 'GET', mode: 'cors' });
      if (res.ok) {
        statusPill.classList.add('online');
        statusText.textContent = 'ComfyUI 8188: Online';
      } else {
        statusPill.classList.remove('online');
        statusText.textContent = 'ComfyUI 8188: Offline';
      }
    } catch {
      statusPill.classList.remove('online');
      statusText.textContent = 'ComfyUI 8188: Offline';
    }
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Expose to window & boot
  window.initAssetRefStudio = initAssetRefStudio;
  window.ASSET_STATE = ASSET_STATE;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAssetRefStudio);
  } else {
    initAssetRefStudio();
  }
})();

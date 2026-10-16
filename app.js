/**
 * PromptForge PRO — Google AI Studio (Imagen 3 & Veo 2)
 * Core Application Logic & Live Prompt Engine
 */

// --- DATA DICTIONARIES & PRESETS ---

let CAMERA_BODIES = [], LENSES = [], LIGHTING = [], STYLES = [], COMPOSITIONS = [], VIDEO_MOTIONS = [], COLOR_PALETTES = [], CLIP_DURATIONS = [], CLIP_FRAMERATES = [], ASPECT_RATIOS = [], QUICK_TAGS = [], PRESET_RECIPES = [], RANDOM_IDEAS = [], DEFAULT_SNAPSHOTS = [], AI_MODELS = [], NEGATIVE_QUICK_TAGS = [];

// ==========================================================================
// AI MODEL SKILLS & SPECIFICATIONS ENGINE
// ==========================================================================

const DEFAULT_MODEL_SKILLS = {
  'veo-3.1': {
    modelId: 'veo-3.1',
    fileName: 'veo-3-1.md',
    title: 'Google Veo 3.1',
    mediaType: '🎬 Видео + Звук',
    ruleCount: '4 правила',
    description: 'Спецификация кинематографического видео и звука для Google Veo 3.1 (1080p/4K 24fps). Непрерывный план, точная физика оптики, синхронная аудиосреда.',
    rules: [
      '✔ Непрерывный кинематографический план (Continuous Unbroken Shot)',
      '✔ Оптика ARRI/Cooke, фокусные расстояния и глубина резкости',
      '✔ Встроенный нативный синхронный саунд-дизайн и фоли',
      '✔ Физическая динамика среды, частиц и материалов'
    ],
    content: `---
name: veo-3-1-cinematic
model: veo-3.1
description: Спецификация генерации кинематографического видео и звука для Google Veo 3.1 (1080p/4K 24fps). Непрерывный план, точная физика оптики, синхронизированная аудиосреда и фоли.
version: 1.0.0
media_type: video
---

# Google Veo 3.1 — Cinematic Video & Audio Specification

## 1. Базовые параметры модели
- **Модель:** Google DeepMind Veo 3.1 (\`veo-3.1\`)
- **Разрешение:** До 4K (1080p / 2160p)
- **Частота кадров:** 24 fps (кинематографический стандарт)
- **Длительность:** 4–10 секунд (оптимально 8 секунд)
- **Аудио:** Встроенный нативный синхронный саунд-дизайн (дистанционные шумы, фоли, акустика помещения, речевые паттерны)
- **Поддерживаемые форматы кадра:** 16:9 (кино / ландшафт), 9:16 (вертикальный рилс/шортс), 2.39:1 (анаморфот), 4:3, 1:1

---

## 2. Архитектура и структура промпта

Для получения максимального фотореализма и плавности движения каждый промпт для Veo 3.1 формируется по следующей кинематографической формуле:

\`\`\`
[Объект и центральное действие] + [Окружение, архитектура и физика среды] + [Оптика, камера и траектория движения] + [Светотеневой рисунок и цветокоррекция] + [Синхронный звуковой дизайн (Audio Foley)]
\`\`\`

### Пример идеальной структуры:
> "A master craftsman in his 50s carefully examines an antique brass mechanical clock with intricate gears under warm workbench illumination. The camera performs a smooth, continuous dolly-in on an ARRI Alexa with an anamorphic 50mm T1.5 lens, producing creamy bokeh and shallow depth-of-field. Subtle dust motes float through the volumetric tungsten rays. Authentic fluid micro-movements, realistic skin subsurface scattering. Audio: delicate metallic ticking, faint creak of wooden floorboards, soft breathing, distant city hum outside."

---

## 3. Ключевые правила и ограничения (Hard Rules)

1. **Единый непрерывный план (Continuous Unbroken Shot):**
   - Veo 3.1 идеально удерживает один непрерывный кадр. Никогда не используйте фразы "cuts to", "then switches to", "fast montage". Вместо склеек используйте внутрикадровый монтаж (панорама, наезд, переход фокуса).
2. **Точная терминология движения камеры:**
   - Используйте профессиональные термины: Smooth Dolly In, Slow Tracking Shot, Orbit Arc 45°, Pan Right, Handheld Shaky-Cam, Crane Boom Down, FPV Glide.
3. **Физическая оптика вместо "мусорных слов":**
   - Запрещены слова-паразиты: photorealistic, 8k, hyper-detailed, masterpiece, trending on artstation.
   - Вместо них указывайте оптику: ARRI Alexa Mini LF, 35mm Anamorphic, Cooke S4/i prime, f/1.8 aperture, natural chromatic aberration, realistic optical flare.
4. **Синхронизированное аудио:**
   - Всегда описывайте акустику пространства: эхо в зале, шуршание гравия, плеск воды, глухой бас мотора.

---

## 4. Негативные ограничения по умолчанию
- unnatural morphing, sudden camera cuts, multiple scenes, floating disjointed limbs, flickering artifacts, oversaturated digital glow, CGI plastic look, amateur shutter speed`
  },
  'omni-1.1-flash': {
    modelId: 'omni-1.1-flash',
    fileName: 'omni-1-1-flash.md',
    title: 'Gemini Omni 1.1 Flash',
    mediaType: '🎬 Видео + Звук',
    ruleCount: '4 правила',
    description: 'Спецификация для Gemini Omni 1.1 Flash: темпоральные таймкоды, непрерывное динамическое движение, референс-теги и саундскейп.',
    rules: [
      '✔ Темпоральная разметка таймкодами [0-3s], [3-6s]',
      '✔ Ролевые референс-теги (<FIRST_FRAME>, <IMAGE_REF_0>)',
      '✔ Выделенный блок саунд-дизайна [Sound Design]',
      '✔ Высокоскоростная кинетическая динамика'
    ],
    content: `---
name: omni-1-1-flash-director
model: omni-1.1-flash
description: Спецификация генерации видео и звука для Gemini Omni 1.1 Flash. Темпоральные таймкоды, непрерывное динамическое движение, референс-теги и встроенный звуковой ландшафт.
version: 1.0.0
media_type: video
---

# Gemini Omni 1.1 Flash — High-Speed Video & Soundscape Specification

## 1. Базовые параметры модели
- **Модель:** Google DeepMind Gemini Omni 1.1 Flash (\`omni-1.1-flash\`)
- **Ключевое преимущество:** Сверхбыстрая генерация слитного видео и звука, превосходное понимание темпоральной динамики и референсных изображений.
- **Длительность:** 4–8 секунд
- **Звук:** Глубокий звуковой дизайн (Soundscape & Foley), синхронизированный с физикой движения на экране.
- **Поддержка референсов:** Теги <FIRST_FRAME>, <IMAGE_REF_0>, <IMAGE_REF_1> для бесшовного продолжения или редактирования кадров.

---

## 2. Темпоральная архитектура промпта

Omni 1.1 Flash наилучшим образом реагирует на четкую разметку времени в промпте с явным разделением на визуальный ряд и саунд-дизайн:

\`\`\`
[Continuous Shot Overview]
[0-3s]: [Начальное состояние сцены, фокус и начальное движение камеры]
[3-6s]: [Развитие действия, кульминация динамики, изменение траектории]
[Sound Design]: [Точные окружающие шумы, контактный звук, атмосферный низкочастотный гул]
\`\`\`

### Пример промпта для Omni 1.1 Flash:
> "Continuous unbroken shot.
> [0-2s]: A matte-black cybernetic vehicle accelerates across wet asphalt in heavy rain, headlights slicing through misty neon reflections, camera tracks low from the rear bumper.
> [2-5s]: The vehicle drifts sharply around a tight industrial corner, tires churning up misty water sprays, camera performs a dynamic low-angle orbit into a three-quarter frontal perspective.
> [Sound Design]: Wet tire screech with hydroplaning slosh, deep resonant electric motor whine, thunderous exhaust rumble, heavy raindrops drumming on aluminum hood."

---

## 3. Рекомендации и правила
1. **Динамика движения:** Модель великолепно обрабатывает быстрые кинетические сцены — скорость, порывы ветра, летящие искры, всплески жидкостей.
2. **Никаких фальшивых склеек:** Обязательно фиксируйте "Continuous unbroken shot", чтобы исключить мерцание между кадрами.
3. **Физическая плотность среды:** Указывайте атмосферные взвеси (туман, дым, пар, дождь, неоновый смог) для придания пространственной глубины.`
  },
  'imagen-3': {
    modelId: 'imagen-3',
    fileName: 'imagen-3.md',
    title: 'Google Imagen 3',
    mediaType: '📸 Фото',
    ruleCount: '4 правила',
    description: 'Спецификация генерации фотореалистичных изображений для Google Imagen 3: оптический реализм, микротекстуры, естественный свет.',
    rules: [
      '✔ Физическая оптика (Hasselblad, Leica, primes)',
      '✔ Микротекстуры кожи, ткани и поверхностей',
      '✔ Полный запрет мусорных слов (8k, photorealistic)',
      '✔ Естественное рассеивание света и подповерхностное свечение'
    ],
    content: `---
name: imagen-3-photorealism
model: imagen-3
description: Спецификация генерации фотореалистичных изображений для Google Imagen 3. Физическая оптика, микротекстуры, естественное освещение, удаление паразитных слов (buzzwords).
version: 1.0.0
media_type: image
---

# Google Imagen 3 — Optical Photorealism Specification

## 1. Базовые параметры модели
- **Модель:** Google DeepMind Imagen 3 (\`imagen-3\`)
- **Тип генерации:** Статичные фотореалистичные кадры, концепт-арт, предметная и портретная фотография.
- **Главная сила:** Исключительная детализация текстур кожи, ткани, дерева, стекла, волос и мелких надписей без галлюцинаций.
- **Понимание естественного языка:** Модель обучена на глубоком семантическом понимании естественной речи и презирает списки бессвязных тегов через запятую.

---

## 2. Структура промпта

Для Imagen 3 эффективнее всего работает связный описательный абзац, построенный по принципу описания реальной фотосъемки:

\`\`\`
[Объект съёмки и его поза/эмоция] + [Материалы и микротекстуры] + [Окружение и глубина сцены] + [Камера, сенсор, фокусное расстояние и диафрагма] + [Освещение: направление, температура кельвинов, тени]
\`\`\`

### Пример промпта:
> "Close-up cinematic portrait of an elderly watchmaker with weathered skin, deep laugh lines, and focused hazel eyes. Wearing a charcoal wool vest and rolled-up linen sleeves. In the background, softly blurred wooden shelves with tiny brass gears and vintage horology tools in warm amber bokeh. Captured on a Hasselblad H6D-100c medium format camera with an 80mm f/2.2 prime lens. Natural directional daylight spilling through a northern window with subtle gold reflector fill, crisp optical clarity, authentic pore texture."

---

## 3. Табуированные слова (Anti-Buzzwords)
Следующие слова строго запрещены в промптах для Imagen 3, так как они ухудшают генерацию и делают изображение пластиковым:
- photorealistic, ultra realistic, hyperrealistic, 8k, 4k, octane render, unreal engine 5, masterpiece, award winning, best quality.

Вместо них используйте точные физические термины: natural subsurface scattering, tactile weave of heavy linen, medium format chromatic fidelity, soft shadow falloff, subtle film grain.`
  },
  'minimax-h3': {
    modelId: 'minimax-h3',
    fileName: 'minimax-h3.md',
    title: 'MiniMax-H3 (Hailuo)',
    mediaType: '🎬 2K Видео + Звук',
    ruleCount: '4 правила',
    description: 'Спецификация 2K видео и 32kHz звука для MiniMax-H3 (Hailuo): трехблочная архитектура, импульс движения и саундскейп.',
    rules: [
      '✔ 2K 24fps кинематографическая физика движения',
      '✔ Трехблочная архитектура промпта',
      '✔ Стереозвук 32 кГц с пространственным позиционированием',
      '✔ Поддержка референсных тегов (@Image1, @Video1)'
    ],
    content: `---
name: minimax-h3-cinematic
model: minimax-h3
description: Спецификация 2K кинематографического видео и 32kHz синхронизированного аудио для MiniMax-H3 (Hailuo). Трехблочная архитектура, таймкоды, физический импульс и референсы.
version: 1.0.0
media_type: video
---

# MiniMax-H3 — 2K Video & 32kHz Synchronized Audio Specification

## 1. Базовые параметры модели
- **Модель:** MiniMax-H3 (\`minimax-h3\` / Hailuo)
- **Разрешение:** Родные 2K (2048x1080) при 24fps
- **Аудио:** 32 кГц кристально чистый синхронизированный стереозвук (шумы, диалоги, фоли, эмбиент)
- **Поддержка референсов:** Теги @Image1, @Video1 для точного удержания персонажа и окружения

---

## 2. Формула промпта
Промпт MiniMax-H3 строится по 3 ключевым блокам:
1. **[Core Action & Subject]:** Ядро сцены, персонаж или объект, физическое действие и импульс.
2. **[Camera Dynamics & Atmosphere]:** Траектория движения камеры, глубина резкости, освещение и частицы.
3. **[Soundscape]:** Детализированный звуковой слой.

### Пример:
> "Medium tracking shot following a runner through a rain-slicked neon alley in Tokyo. Camera glides alongside at waist height on a stabilized gimbal. Cinematic 2K anamorphic lighting with cyan and magenta lens flares reflecting in wet puddles. Pacing accelerates smoothly. Synchronized audio: rhythmic sneaker splashes in standing water, heavy breathing, muffled distant bass rhythm from an underground club, gentle rainfall patter on metal awnings."`
  },
  'gemini-flash': {
    modelId: 'gemini-flash',
    fileName: 'gemini-flash.md',
    title: 'Gemini 2.5 Flash',
    mediaType: '📸 Концепт',
    ruleCount: '3 правила',
    description: 'Спецификация для Gemini 2.5 Flash: мультимодальный сторителлинг, детальные концепт-кадры и композиция.',
    rules: [
      '✔ Мультимодальная концептуальная композиция',
      '✔ Четкая проработка объекта и окружения',
      '✔ Художественное и оптическое направление'
    ],
    content: `---
name: gemini-flash-multimodal
model: gemini-flash
description: Спецификация концептуальной генерации для Gemini 2.5 Flash. Мультимодальный сторителлинг, детальные концепт-кадры, символизм и композиция.
version: 1.0.0
media_type: image
---

# Google Gemini 2.5 Flash — Multimodal Concept Specification

## 1. Базовые параметры модели
- **Модель:** Google Gemini 2.5 Flash (\`gemini-flash\`)
- **Специализация:** Высокая семантическая плотность, сложные мультимодальные ассоциации, концепт-арт и художественное направление.

---

## 2. Формула промпта
- **Центральная идея:** Концептуальный смысл сцены и ключевые метафоры.
- **Объект и масштаб:** Взаимодействие персонажей с окружением, композиционный баланс.
- **Цветовая палитра:** Символические цвета, настроение, контраст.
- **Оптика и освещение:** Рассеянный свет, кинематографическая глубина.`
  },
  'gpt-image-2.5': {
    modelId: 'gpt-image-2.5',
    fileName: 'gpt-image-2-5.md',
    title: 'GPT Image 2.5',
    mediaType: '📸 Фото',
    ruleCount: '3 правила',
    description: 'Спецификация реалистичных изображений для GPT Image 2.5 (OpenAI): оптическая глубина, физика светотени и текстуры.',
    rules: [
      '✔ Натуральные световые блики (flare & sunburst)',
      '✔ Текстурная плотность поверхностей',
      '✔ Физически корректное размытие боке'
    ],
    content: `---
name: gpt-image-2-5-optics
model: gpt-image-2.5
description: Спецификация генерации реалистичных изображений для GPT Image 2.5 (OpenAI). Глубокая текстурная архитектура, физика светотени, оптика диафрагмы.
version: 1.0.0
media_type: image
---

# GPT Image 2.5 — Photographic Narrative Specification

## 1. Базовые параметры модели
- **Модель:** GPT Image 2.5 (\`gpt-image-2.5\` / OpenAI)
- **Специализация:** Высокоточная передача оптических эффектов, лучи солнца (sunburst), блики (anamorphic flare), глубина резкости и органическая текстура материалов.

---

## 2. Структура промпта
- **Тема и фокус:** Четко сформулированный визуальный центр притяжения.
- **Освещение:** Физика направления света, объемный свет (god rays), контровой свет (rim lighting).
- **Материальность:** Описание поверхностей — полированный металл, шершавый бетон, шероховатый хлопок, влажная кора.
- **Камера:** Оптические искажения, виньетирование, фокусное расстояние (35mm, 50mm, 85mm).`
  },
  'imagine-image-2': {
    modelId: 'imagine-image-2',
    fileName: 'imagine-image-2.md',
    title: 'Grok Imagine 2.0',
    mediaType: '📸 FRAME Фото',
    ruleCount: '3 правила',
    description: 'Спецификация генерации изображений для Grok Imagine 2.0 (xAI): архитектура FRAME, контраст и кинематографичность.',
    rules: [
      '✔ Строгий 5-блочный стандарт FRAME',
      '✔ [Focus] + [Realm] + [Angle]',
      '✔ [Mood] + [Execution]'
    ],
    content: `---
name: imagine-image-2-frame
model: imagine-image-2
description: Спецификация генерации изображений для Grok Imagine 2.0 (xAI). Строгий 5-блочный стандарт FRAME (Focus, Realm, Angle, Mood, Execution).
version: 1.0.0
media_type: image
---

# Grok Imagine 2.0 — FRAME Standard Specification

## 1. Базовые параметры модели
- **Модель:** Grok Imagine 2.0 (\`imagine-image-2\` / xAI)
- **Специализация:** Высококонтрастные, смелые и фотореалистичные композиции с идеальным следованием 5-блочной архитектуре FRAME.

---

## 2. Архитектура FRAME
Для наивысшего качества промпт форматируется строго по пяти блокам:
- **[Focus]:** Главный объект съемки, его детали, поза, эмоция и масштаб в кадре.
- **[Realm]:** Пространство, окружение, архитектурные или природные декорации.
- **[Angle]:** Ракурс камеры, наклон голландского угла (Dutch angle), уровень глаз или вид снизу (low-angle).
- **[Mood]:** Настроение, цветовая температура, драматизм освещения.
- **[Execution]:** Технические параметры съемки, сенсор, линза, зернистость плёнки или чистота цифровой матрицы.`
  },
  'seedance-2.5': {
    modelId: 'seedance-2.5',
    fileName: 'seedance-2-5.md',
    title: 'Seedance 2.5',
    mediaType: '🎬 Видео 30s',
    ruleCount: '4 правила',
    description: 'Спецификация 30-секундного непрерывного видео для Seedance 2.5: единый непрерывный сегмент, нарративный арк.',
    rules: [
      '✔ Hard Lock: 30-секундный нарративный арк (0-5s, 5-20s, 20-30s)',
      '✔ Один непрерывный сегмент (без сплитов)',
      '✔ Описание визуального стиля и драматургии',
      '✔ Чисто визуальная генерация (аудио в посте)'
    ],
    content: `---
name: seedance-2-5-30s
description: Specialized video generation using the Seedance 2.5 model with hard-locked single-segment 30-second output. Use when the user requests Seedance 2.5, 30-second videos, longer-form cinematic video, or high-quality animation/film-style output. Always generates one single complete 30-second video in one call.
---

# Seedance 2.5 – 30s Hard Lock

## Hard Lock (non-negotiable, overrides everything below)
- Duration is locked at 30 seconds. Always pass duration: 30.
- One single continuous segment. One tool call = one complete 30-second video.
- Model is locked to Seedance 2.5. Always pass model_version: "seedance_2.5" explicitly.

## Workflow
1. Planning Phase: Design the concept as one cohesive 30-second narrative arc:
- Opening (0–5s): establish subject, scene, atmosphere.
- Development (5–20s): main action, escalation, camera movement.
- Resolution (20–30s): climax, payoff, closing shot.
2. Deliver one call. One 30-second video. No splitting.`
  }
};

// --- APPLICATION STATE ---

const state = {
  mode: 'image', // 'image' or 'video'
  promptFormat: 'master', // 'master' (ready-to-use cohesive prompt) or 'structured' (spec tags)
  promptDisplayLang: 'en', // 'en' or 'ru'
  idea: '',
  onlineTranslatedIdea: '',
  selectedCamera: 'arri-alexa',
  selectedLens: 'lens-50mm',
  selectedLighting: 'cinematic',
  selectedStyle: 'photorealistic',
  selectedComposition: 'eye-level',
  selectedVideoMotion: 'static-shot',
  selectedDuration: '8s',
  selectedFramerate: '24fps cinematic',
  selectedAspect: '9:16',
  selectedColor: '',
  selectedModel: 'imagen-3',
  activeQuickTags: new Set(),
  activeNegativeTags: new Set(),
  customNegative: '',
  history: JSON.parse(localStorage.getItem('promptforge_history') || '[]'),
  
  // Reverse Video AI & LLM API Keys
  geminiApiKey: localStorage.getItem('promptforge_gemini_api_key') || '',
  openRouterApiKey: localStorage.getItem('promptforge_openrouter_api_key') || '',
  customDirectorPrompt: '',
  lastBreakdownText: '',
  videoAnalysis: {
    sourceUrl: '',
    fileName: '',
    duration: 0,
    width: 0,
    height: 0,
    frames: [], // [{ time, dataUrl, base64 }]
    directorPrompt: '',
    isAnalyzing: false
  },

  // AI Director (OpenRouter) State
  directorMode: 'scene',
  directorSelectedModel: localStorage.getItem('promptforge_director_model') || 'google/gemma-4-31b-it:free',
  directorSelectedGenre: 'cinematic',
  directorResults: [],
  directorActiveVarIdx: 0,
  isDirectorGenerating: false,

  // AI Model Skills & Specifications State
  activeSkillModelId: 'veo-3.1',
  customModelSkills: JSON.parse(localStorage.getItem('promptforge_model_skills') || '{}'),

  // Snapshots State
  snapshots: JSON.parse(localStorage.getItem('promptforge_snapshots') || 'null'),
  activeSnapshotId: null,

  // Identity Lock (Face & Features Preservation)
  identityLock: false
};

// --- DOM ELEMENTS ---

const el = {
  // Navigation
  statusBadge: document.getElementById('statusBadge'),
  statusText: document.getElementById('statusText'),
  openGalleryBtn: document.getElementById('openGalleryBtn'),
  clearAllBtn: document.getElementById('clearAllBtn'),

  // Reverse Video AI (Analyzer)
  videoAnalyzerCard: document.getElementById('videoAnalyzerCard'),
  visionBadge: document.getElementById('visionBadge'),
  analyzerSettingsBtn: document.getElementById('analyzerSettingsBtn'),
  analyzerCollapseBtn: document.getElementById('analyzerCollapseBtn'),
  analyzerBody: document.getElementById('analyzerBody'),
  videoUrlInput: document.getElementById('videoUrlInput'),
  pasteUrlBtn: document.getElementById('pasteUrlBtn'),
  loadUrlBtn: document.getElementById('loadUrlBtn'),
  videoDropZone: document.getElementById('videoDropZone'),
  videoFileInput: document.getElementById('videoFileInput'),
  loadSampleVideoBtn: document.getElementById('loadSampleVideoBtn'),
  videoPreviewContainer: document.getElementById('videoPreviewContainer'),
  videoFileInfo: document.getElementById('videoFileInfo'),
  previewFileName: document.getElementById('previewFileName'),
  previewFileMeta: document.getElementById('previewFileMeta'),
  removeVideoBtn: document.getElementById('removeVideoBtn'),
  analyzerVideoPlayer: document.getElementById('analyzerVideoPlayer'),
  laserScannerOverlay: document.getElementById('laserScannerOverlay'),
  framesCountBadge: document.getElementById('framesCountBadge'),
  extractedFramesStrip: document.getElementById('extractedFramesStrip'),
  autoFillParamsCheck: document.getElementById('autoFillParamsCheck'),
  updateTerminalPromptCheck: document.getElementById('updateTerminalPromptCheck'),
  analyzeVideoBtn: document.getElementById('analyzeVideoBtn'),
  analyzeVideoBtnText: document.getElementById('analyzeVideoBtnText'),
  analyzerStatusBar: document.getElementById('analyzerStatusBar'),
  statusProgressFill: document.getElementById('statusProgressFill'),
  statusStepText: document.getElementById('statusStepText'),
  statusPercentage: document.getElementById('statusPercentage'),
  // AI Director PRO (OpenRouter Module)
  aiDirectorCard: document.getElementById('aiDirectorCard'),
  directorActiveModelBadge: document.getElementById('directorActiveModelBadge'),
  directorResetBtn: document.getElementById('directorResetBtn'),
  modeSceneBtn: document.getElementById('modeSceneBtn'),
  modeVariationsBtn: document.getElementById('modeVariationsBtn'),
  modeShotsBtn: document.getElementById('modeShotsBtn'),
  modePolishBtn: document.getElementById('modePolishBtn'),
  directorThemeInput: document.getElementById('directorThemeInput'),
  directorRandomThemeBtn: document.getElementById('directorRandomThemeBtn'),
  directorModelSelect: document.getElementById('directorModelSelect'),
  directorGenreSelect: document.getElementById('directorGenreSelect'),
  directorGenerateBtn: document.getElementById('directorGenerateBtn'),
  directorGenerateBtnText: document.getElementById('directorGenerateBtnText'),
  directorProgressBar: document.getElementById('directorProgressBar'),
  directorProgressLabel: document.getElementById('directorProgressLabel'),
  directorResultCard: document.getElementById('directorResultCard'),
  directorResultText: document.getElementById('directorResultText'),
  directorVarTabs: document.getElementById('directorVarTabs'),
  directorCopyBtn: document.getElementById('directorCopyBtn'),
  directorApplyBtn: document.getElementById('directorApplyBtn'),
  directorModeGuide: document.getElementById('directorModeGuide'),
  directorGuideBadge: document.getElementById('directorGuideBadge'),
  directorGuideTitle: document.getElementById('directorGuideTitle'),
  directorGuideDesc: document.getElementById('directorGuideDesc'),
  directorGuideTip: document.getElementById('directorGuideTip'),

  // Video Breakdown & API Banner (Split Gemini & OpenRouter)
  videoBreakdownCard: document.getElementById('videoBreakdownCard'),
  restoreDirectorPromptBtn: document.getElementById('restoreDirectorPromptBtn'),
  copyBreakdownBtn: document.getElementById('copyBreakdownBtn'),
  breakdownContent: document.getElementById('breakdownContent'),
  apiKeyBanner: document.getElementById('apiKeyBanner'),
  geminiBannerSubItem: document.getElementById('geminiBannerSubItem'),
  apiKeyBannerText: document.getElementById('apiKeyBannerText'),
  openRouterBannerSubItem: document.getElementById('openRouterBannerSubItem'),
  openRouterBannerText: document.getElementById('openRouterBannerText'),
  openKeyFromBannerBtn: document.getElementById('openKeyFromBannerBtn'),

  // API Keys Modal (Gemini & OpenRouter)
  apiKeyModal: document.getElementById('apiKeyModal'),
  closeApiKeyModalBtn: document.getElementById('closeApiKeyModalBtn'),
  geminiApiKeyInput: document.getElementById('geminiApiKeyInput'),
  toggleKeyVisibilityBtn: document.getElementById('toggleKeyVisibilityBtn'),
  openRouterApiKeyInput: document.getElementById('openRouterApiKeyInput'),
  toggleOpenRouterKeyBtn: document.getElementById('toggleOpenRouterKeyBtn'),
  clearApiKeyBtn: document.getElementById('clearApiKeyBtn'),
  saveApiKeyBtn: document.getElementById('saveApiKeyBtn'),
  useDemoOfflineBtn: document.getElementById('useDemoOfflineBtn'),

  // Idea
  modeImageBtn: document.getElementById('modeImageBtn'),
  modeVideoBtn: document.getElementById('modeVideoBtn'),
  ideaInput: document.getElementById('ideaInput'),
  charCounter: document.getElementById('charCounter'),
  randomIdeaBtn: document.getElementById('randomIdeaBtn'),
  aiEnhanceBtn: document.getElementById('aiEnhanceBtn'),
  aiEnhanceText: document.getElementById('aiEnhanceText'),
  quickTagsCloud: document.getElementById('quickTagsCloud'),
  presetButtonsContainer: document.getElementById('presetButtonsContainer'),

  // AI Model Skills & Specifications Section
  modelSkillsSection: document.getElementById('modelSkillsSection'),
  skillModelSelect: document.getElementById('skillModelSelect'),
  skillFileName: document.getElementById('skillFileName'),
  skillSourceTag: document.getElementById('skillSourceTag'),
  skillDescription: document.getElementById('skillDescription'),
  skillRuleCount: document.getElementById('skillRuleCount'),
  skillMediaType: document.getElementById('skillMediaType'),
  skillSizePill: document.getElementById('skillSizePill'),
  skillFileInput: document.getElementById('skillFileInput'),
  uploadSkillBtn: document.getElementById('uploadSkillBtn'),
  viewSkillBtn: document.getElementById('viewSkillBtn'),
  resetSkillBtn: document.getElementById('resetSkillBtn'),
  skillRulesList: document.getElementById('skillRulesList'),
  skillEditorModalBackdrop: document.getElementById('skillEditorModalBackdrop'),
  skillEditorModal: document.getElementById('skillEditorModal'),
  skillEditorTitle: document.getElementById('skillEditorTitle'),
  skillEditorMeta: document.getElementById('skillEditorMeta'),
  skillEditorTextarea: document.getElementById('skillEditorTextarea'),
  closeSkillEditorBtn: document.getElementById('closeSkillEditorBtn'),
  cancelSkillEditorBtn: document.getElementById('cancelSkillEditorBtn'),
  saveSkillEditorBtn: document.getElementById('saveSkillEditorBtn'),
  copySkillContentBtn: document.getElementById('copySkillContentBtn'),
  downloadSkillFileBtn: document.getElementById('downloadSkillFileBtn'),

  // Snapshots Bar
  snapshotsBar: document.getElementById('snapshotsBar'),
  identityLockBtn: document.getElementById('identityLockBtn'),
  saveSnapshotBtn: document.getElementById('saveSnapshotBtn'),
  snapshotsChipsContainer: document.getElementById('snapshotsChipsContainer'),

  // Parameters (Camera & Lens in one row, Dropdowns for Lighting, Style, Composition)
  cameraCustomSelect: document.getElementById('cameraCustomSelect'),
  cameraSelectedVal: document.getElementById('cameraSelectedVal'),
  cameraSelectedText: document.getElementById('cameraSelectedText'),
  cameraSelectedTooltip: document.getElementById('cameraSelectedTooltip'),
  cameraOptionsList: document.getElementById('cameraOptionsList'),
  lensCustomSelect: document.getElementById('lensCustomSelect'),
  lensSelectedVal: document.getElementById('lensSelectedVal'),
  lensSelectedText: document.getElementById('lensSelectedText'),
  lensSelectedTooltip: document.getElementById('lensSelectedTooltip'),
  lensOptionsList: document.getElementById('lensOptionsList'),
  lightingCustomSelect: document.getElementById('lightingCustomSelect'),
  lightingSelectedVal: document.getElementById('lightingSelectedVal'),
  lightingSelectedText: document.getElementById('lightingSelectedText'),
  lightingSelectedTooltip: document.getElementById('lightingSelectedTooltip'),
  lightingOptionsList: document.getElementById('lightingOptionsList'),
  styleCustomSelect: document.getElementById('styleCustomSelect'),
  styleSelectedVal: document.getElementById('styleSelectedVal'),
  styleSelectedText: document.getElementById('styleSelectedText'),
  styleSelectedTooltip: document.getElementById('styleSelectedTooltip'),
  styleOptionsList: document.getElementById('styleOptionsList'),
  compositionCustomSelect: document.getElementById('compositionCustomSelect'),
  compositionSelectedVal: document.getElementById('compositionSelectedVal'),
  compositionSelectedText: document.getElementById('compositionSelectedText'),
  compositionSelectedTooltip: document.getElementById('compositionSelectedTooltip'),
  compositionOptionsList: document.getElementById('compositionOptionsList'),
  accordionVideoDynamics: document.getElementById('accordionVideoDynamics'),
  videoMotionCustomSelect: document.getElementById('videoMotionCustomSelect'),
  videoMotionSelectedVal: document.getElementById('videoMotionSelectedVal'),
  videoMotionSelectedText: document.getElementById('videoMotionSelectedText'),
  videoMotionSelectedTooltip: document.getElementById('videoMotionSelectedTooltip'),
  videoMotionOptionsList: document.getElementById('videoMotionOptionsList'),
  durationCustomSelect: document.getElementById('durationCustomSelect'),
  durationSelectedVal: document.getElementById('durationSelectedVal'),
  durationSelectedText: document.getElementById('durationSelectedText'),
  durationSelectedTooltip: document.getElementById('durationSelectedTooltip'),
  durationOptionsList: document.getElementById('durationOptionsList'),
  framerateCustomSelect: document.getElementById('framerateCustomSelect'),
  framerateSelectedVal: document.getElementById('framerateSelectedVal'),
  framerateSelectedText: document.getElementById('framerateSelectedText'),
  framerateSelectedTooltip: document.getElementById('framerateSelectedTooltip'),
  framerateOptionsList: document.getElementById('framerateOptionsList'),
  aspectCustomSelect: document.getElementById('aspectCustomSelect'),
  aspectSelectedVal: document.getElementById('aspectSelectedVal'),
  aspectSelectedText: document.getElementById('aspectSelectedText'),
  aspectSelectedTooltip: document.getElementById('aspectSelectedTooltip'),
  aspectOptionsList: document.getElementById('aspectOptionsList'),
  aspectRatioContainer: document.getElementById('aspectRatioContainer'),
  colorCustomSelect: document.getElementById('colorCustomSelect'),
  colorSelectedVal: document.getElementById('colorSelectedVal'),
  colorSelectedText: document.getElementById('colorSelectedText'),
  colorSelectedTooltip: document.getElementById('colorSelectedTooltip'),
  colorOptionsList: document.getElementById('colorOptionsList'),
  negativeTagsContainer: document.getElementById('negativeTagsContainer'),
  negativeCustomInput: document.getElementById('negativeCustomInput'),

  // Models & Result
  modelsGrid: document.getElementById('modelsGrid'),
  terminalModelBadge: document.getElementById('terminalModelBadge'),
  formatMasterBtn: document.getElementById('formatMasterBtn'),
  formatStructuredBtn: document.getElementById('formatStructuredBtn'),
  finalPromptDisplay: document.getElementById('finalPromptDisplay'),
  resultCharCount: document.getElementById('resultCharCount'),
  strengthPill: document.getElementById('strengthPill'),
  strengthText: document.getElementById('strengthText'),
  negativePromptDisplay: document.getElementById('negativePromptDisplay'),
  negativePromptText: document.getElementById('negativePromptText'),
  promptLangSelect: document.getElementById('promptLangSelect'),
  quickCopyBtn: document.getElementById('quickCopyBtn'),
  copyPromptBtn: document.getElementById('copyPromptBtn'),
  resetBtn: document.getElementById('resetBtn'),
  modelHintCard: document.getElementById('modelHintCard'),
  hintTitle: document.getElementById('hintTitle'),
  hintDesc: document.getElementById('hintDesc'),

  // Gallery Drawer
  galleryDrawer: document.getElementById('galleryDrawer'),
  closeGalleryDrawer: document.getElementById('closeGalleryDrawer'),
  galleryItemsContainer: document.getElementById('galleryItemsContainer'),
  clearGalleryBtn: document.getElementById('clearGalleryBtn'),
  toastContainer: document.getElementById('toastContainer')
};

// --- INITIALIZATION ---

async function init() {
  try {
    const response = await fetch('presets.json');
    const presets = await response.json();

    CAMERA_BODIES = presets.CAMERA_BODIES || [];
    LENSES = presets.LENSES || [];
    LIGHTING = presets.LIGHTING || [];
    STYLES = presets.STYLES || [];
    COMPOSITIONS = presets.COMPOSITIONS || [];
    VIDEO_MOTIONS = presets.VIDEO_MOTIONS || [];
    COLOR_PALETTES = presets.COLOR_PALETTES || [];
    CLIP_DURATIONS = presets.CLIP_DURATIONS || [];
    CLIP_FRAMERATES = presets.CLIP_FRAMERATES || [];
    ASPECT_RATIOS = presets.ASPECT_RATIOS || [];
    QUICK_TAGS = presets.QUICK_TAGS || [];
    PRESET_RECIPES = presets.PRESET_RECIPES || [];
    RANDOM_IDEAS = presets.RANDOM_IDEAS || [];
    DEFAULT_SNAPSHOTS = presets.DEFAULT_SNAPSHOTS || [];
    AI_MODELS = presets.AI_MODELS || [];
    NEGATIVE_QUICK_TAGS = presets.NEGATIVE_QUICK_TAGS || [];

    if (!Array.isArray(state.snapshots) || state.snapshots.length === 0) {
      state.snapshots = [...DEFAULT_SNAPSHOTS];
    }

    attachEventListeners();
    setMode(state.mode || 'image');
    renderPresets();
    renderSnapshots();
    renderCameraOptions();
    renderLensOptions();
    renderLightingOptions();
    renderStyleOptions();
    renderCompositionOptions();
    renderVideoMotionOptions();
    renderDurationOptions();
    renderFramerateOptions();
    renderColorOptions();
    renderChips();
    renderAspectRatios();
    renderNegativeTags();
    initModelSkills();
    initAiDirector();
    initVideoAnalyzer();
    console.log('PromptForge Google AI Studio successfully initialized!');
  } catch (err) {
    console.error('PromptForge Init Error:', err);
  }
}

// --- RENDERERS ---

function renderQuickTags() {
  if (!el.quickTagsCloud) return;
  el.quickTagsCloud.innerHTML = QUICK_TAGS.map(tag => {
    const isVideoTag = tag.mediaType === 'video';
    const isDisabled = state.mode === 'image' && isVideoTag;
    const isActive = state.activeQuickTags.has(tag.id) && !isDisabled;

    return `
      <button class="tag-chip ${isActive ? 'active' : ''} ${isDisabled ? 'disabled-tag' : ''}" 
              data-tag="${tag.id}" 
              data-disabled="${isDisabled ? 'true' : 'false'}"
              title="${isDisabled ? 'Доступно в режиме «Видео»' : tag.ru}">
        <span class="tag-chip-plus">${isDisabled ? '🔒' : '+'}</span>
        <span>${tag.ru}</span>
      </button>
    `;
  }).join('');
}

function renderPresets() {
  if (!el.presetButtonsContainer) return;
  el.presetButtonsContainer.innerHTML = PRESET_RECIPES.map((recipe, index) => `
    <button class="preset-btn" data-preset-idx="${index}">
      <span>${recipe.title}</span>
      <span class="preset-btn-tag">${recipe.tag}</span>
    </button>
  `).join('');
}

function renderSnapshots() {
  if (!el.snapshotsChipsContainer) return;
  const list = state.snapshots || [];
  if (list.length === 0) {
    el.snapshotsChipsContainer.innerHTML = '<span class="snapshots-empty-hint">Нет сохраненных связок. Нажмите «+ Сохранить текущую»</span>';
    return;
  }

  el.snapshotsChipsContainer.innerHTML = list.map(snap => {
    const isActive = snap.id === state.activeSnapshotId;
    return `
      <div class="snapshot-chip ${isActive ? 'active' : ''}" data-snap-id="${snap.id}" title="Применить связку: ${escapeHtml(snap.name)}">
        <span class="snapshot-chip-title">${escapeHtml(snap.name)}</span>
        ${!snap.isDefault ? `<button type="button" class="snapshot-del-btn" data-snap-del="${snap.id}" title="Удалить эту связку">&times;</button>` : ''}
      </div>
    `;
  }).join('');
}

function applySnapshot(snapId) {
  const snap = (state.snapshots || []).find(s => s.id === snapId);
  if (!snap) return;

  if (snap.camera) state.selectedCamera = snap.camera;
  if (snap.lens) state.selectedLens = snap.lens;
  if (snap.lighting) state.selectedLighting = snap.lighting;
  if (snap.style) state.selectedStyle = snap.style;
  if (snap.composition) state.selectedComposition = snap.composition;
  if (snap.motion) state.selectedVideoMotion = snap.motion;
  if (snap.color !== undefined) state.selectedColor = snap.color;
  if (snap.aspect) state.selectedAspect = snap.aspect;

  renderCameraOptions();
  renderLensOptions();
  renderLightingOptions();
  renderStyleOptions();
  renderCompositionOptions();
  renderVideoMotionOptions();
  renderColorOptions();
  renderChips();
  renderAspectRatios();
  releaseCustomDirectorPrompt();
  state.activeSnapshotId = snap.id;
  renderSnapshots();
  updateLivePrompt();

  showToast(`Связка "${snap.name}" применена!`, '⚡');
}

function saveCurrentSnapshot() {
  const name = window.prompt('Название связки параметров:');
  if (!name || !name.trim()) return;

  const newSnap = {
    id: 'snap-' + Date.now(),
    name: name.trim(),
    camera: state.selectedCamera,
    lens: state.selectedLens,
    lighting: state.selectedLighting,
    style: state.selectedStyle,
    composition: state.selectedComposition,
    motion: state.selectedVideoMotion,
    color: state.selectedColor,
    aspect: state.selectedAspect,
    isDefault: false
  };

  if (!Array.isArray(state.snapshots)) {
    state.snapshots = [...DEFAULT_SNAPSHOTS];
  }

  state.snapshots.push(newSnap);
  state.activeSnapshotId = newSnap.id;
  try {
    localStorage.setItem('promptforge_snapshots', JSON.stringify(state.snapshots));
  } catch (e) {
    console.warn('Failed to save snapshots to localStorage', e);
  }

  renderSnapshots();
  showToast(`Связка "${newSnap.name}" сохранена!`, '💾');
}

function deleteSnapshot(snapId) {
  if (!Array.isArray(state.snapshots)) return;
  state.snapshots = state.snapshots.filter(s => s.id !== snapId);
  if (state.activeSnapshotId === snapId) {
    state.activeSnapshotId = null;
  }
  try {
    localStorage.setItem('promptforge_snapshots', JSON.stringify(state.snapshots));
  } catch (e) {
    console.warn('Failed to save snapshots to localStorage', e);
  }
  renderSnapshots();
  showToast('Связка параметров удалена', '🗑️');
}

function renderCameraOptions() {
  const currentCam = CAMERA_BODIES.find(c => c.id === state.selectedCamera);
  if (el.cameraSelectedText) {
    el.cameraSelectedText.textContent = currentCam ? currentCam.label : 'Выберите камеру...';
    el.cameraSelectedText.title = currentCam ? currentCam.label : 'Выберите камеру...';
  } else if (el.cameraSelectedVal) {
    el.cameraSelectedVal.textContent = currentCam ? currentCam.label : 'Выберите камеру...';
  }
  if (el.cameraSelectedTooltip) {
    el.cameraSelectedTooltip.textContent = currentCam ? currentCam.desc : 'Нажмите, чтобы выбрать модель камеры.';
  }

  if (el.cameraOptionsList) {
    const groups = [
      {
        title: '📸 Фотофлагманы',
        items: [
          CAMERA_BODIES.find(c => c.id === 'canon-r5'),
          CAMERA_BODIES.find(c => c.id === 'sony-a7rv'),
          CAMERA_BODIES.find(c => c.id === 'nikon-z9'),
          CAMERA_BODIES.find(c => c.id === 'leica-m11')
        ].filter(Boolean)
      },
      {
        title: '🎬 Кинематограф и СФ',
        items: [
          CAMERA_BODIES.find(c => c.id === 'arri-alexa'),
          CAMERA_BODIES.find(c => c.id === 'red-raptor'),
          CAMERA_BODIES.find(c => c.id === 'sony-fx3'),
          CAMERA_BODIES.find(c => c.id === 'hasselblad')
        ].filter(Boolean)
      },
      {
        title: '🚀 Экшн, дрон и пленка',
        items: [
          CAMERA_BODIES.find(c => c.id === 'iphone16'),
          CAMERA_BODIES.find(c => c.id === 'dji-mavic'),
          CAMERA_BODIES.find(c => c.id === 'vintage-film'),
          CAMERA_BODIES.find(c => c.id === 'gopro13')
        ].filter(Boolean)
      }
    ];

    let html = `
      <div class="comp-dropdown-header">
        <div class="comp-header-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
          <span>КАМЕРА • 12 МОДЕЛЕЙ КИНЕМАТОГРАФА И ФОТО</span>
        </div>
        <div class="select-item select-item-none comp-reset-item ${!state.selectedCamera ? 'same-as-selected' : ''}" data-cam-id="">
          <span class="lens-title-text">— Сбросить (очистить) —</span>
        </div>
      </div>
      <div class="lighting-columns-grid">
    `;

    groups.forEach((grp, colIdx) => {
      const colAlignClass = colIdx === 2 ? 'tooltip-align-right' : 'tooltip-align-left';
      html += `
        <div class="comp-grid-col camera-col-${colIdx}">
          <div class="comp-col-title">
            <span>${grp.title}</span>
          </div>
      `;
      grp.items.forEach((cam, idx) => {
        const isSelected = cam.id === state.selectedCamera;
        const tooltipPosClass = idx >= 2 ? 'tooltip-up' : 'tooltip-down';
        html += `
          <div class="select-item ${isSelected ? 'same-as-selected' : ''}" data-cam-id="${cam.id}">
            <div class="lens-item-left">
              <span class="lens-title-text">${cam.label}</span>
              <div class="lens-info-tooltip-wrap">
                <div class="lens-tooltip-content ${tooltipPosClass} ${colAlignClass}">
                  <div class="lens-preview-wrap">
                    <img class="lens-preview-img" src="cameras/${cam.id}.jpg?v=6.4" alt="${cam.label}" loading="lazy">
                  </div>
                  <div class="lighting-tooltip-text">${cam.desc}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    });

    html += `</div>`;
    el.cameraOptionsList.innerHTML = html;
  }
}

function renderLensOptions() {
  const currentLens = LENSES.find(l => l.id === state.selectedLens);
  if (el.lensSelectedText) {
    el.lensSelectedText.textContent = currentLens ? currentLens.label : 'Выберите объектив...';
    el.lensSelectedText.title = currentLens ? currentLens.label : 'Выберите объектив...';
  }
  if (el.lensSelectedTooltip) {
    if (currentLens) {
      el.lensSelectedTooltip.innerHTML = `
        <div class="lens-preview-wrap ${currentLens.id === 'anamorphic-cine' ? 'lens-preview-anamorphic' : ''}">
          <img class="lens-preview-img" src="lenses/${currentLens.id}.jpg?v=3.9" alt="${currentLens.label}">
        </div>
        <div class="lighting-tooltip-text">${currentLens.desc}</div>
      `;
    } else {
      el.lensSelectedTooltip.textContent = 'Нажмите, чтобы выбрать объектив.';
    }
  }

  if (el.lensOptionsList) {
    const groups = [
      {
        title: '📐 Широкий угол (до 35мм)',
        items: [
          LENSES.find(l => l.id === 'ultra-wide-14mm'),
          LENSES.find(l => l.id === 'ultra-wide-16mm'),
          LENSES.find(l => l.id === 'wide-24mm'),
          LENSES.find(l => l.id === 'wide-35mm')
        ].filter(Boolean)
      },
      {
        title: '👤 Портрет и арт (50–100мм)',
        items: [
          LENSES.find(l => l.id === 'lens-50mm'),
          LENSES.find(l => l.id === 'standard-85mm'),
          LENSES.find(l => l.id === 'macro-100mm'),
          LENSES.find(l => l.id === 'anamorphic-cine')
        ].filter(Boolean)
      },
      {
        title: '🔭 Телеобъективы (от 135мм)',
        items: [
          LENSES.find(l => l.id === 'tele-135mm'),
          LENSES.find(l => l.id === 'tele-70-200mm'),
          LENSES.find(l => l.id === 'super-tele-300mm')
        ].filter(Boolean)
      }
    ];

    let html = `
      <div class="comp-dropdown-header">
        <div class="comp-header-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
          <span>ОБЪЕКТИВ • 11 ФОКУСНЫХ РАССТОЯНИЙ И ТИПОВ</span>
        </div>
        <div class="select-item select-item-none comp-reset-item ${!state.selectedLens ? 'same-as-selected' : ''}" data-lens-id="">
          <span class="lens-title-text">— Сбросить (очистить) —</span>
        </div>
      </div>
      <div class="lighting-columns-grid">
    `;

    groups.forEach((grp, colIdx) => {
      const colAlignClass = colIdx === 2 ? 'tooltip-align-right' : 'tooltip-align-left';
      html += `
        <div class="comp-grid-col lens-col-${colIdx}">
          <div class="comp-col-title">
            <span>${grp.title}</span>
          </div>
      `;
      grp.items.forEach((lens, idx) => {
        const isSelected = lens.id === state.selectedLens;
        const tooltipPosClass = idx >= 2 ? 'tooltip-up' : 'tooltip-down';
        html += `
          <div class="select-item ${isSelected ? 'same-as-selected' : ''}" data-lens-id="${lens.id}">
            <div class="lens-item-left">
              <span class="lens-title-text">${lens.label}</span>
              <div class="lens-info-tooltip-wrap">
                <div class="lens-tooltip-content ${tooltipPosClass} ${colAlignClass}">
                  <div class="lens-preview-wrap ${lens.id === 'anamorphic-cine' ? 'lens-preview-anamorphic' : ''}">
                    <img class="lens-preview-img" src="lenses/${lens.id}.jpg?v=3.9" alt="${lens.label}" loading="lazy">
                  </div>
                  <div class="lighting-tooltip-text">${lens.desc}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    });

    html += `</div>`;
    el.lensOptionsList.innerHTML = html;
  }
}

function renderLightingOptions() {
  const current = LIGHTING.find(l => l.id === state.selectedLighting);
  if (el.lightingSelectedText) {
    el.lightingSelectedText.textContent = current ? current.label : 'Выберите освещение...';
    el.lightingSelectedText.title = current ? current.label : 'Выберите освещение...';
  } else if (el.lightingSelectedVal) {
    el.lightingSelectedVal.textContent = current ? current.label : 'Выберите освещение...';
  }
  if (el.lightingSelectedTooltip) {
    if (current) {
      el.lightingSelectedTooltip.innerHTML = `
        <div class="lighting-preview-wrap">
          <img class="lighting-preview-img" src="lighting/${current.id}.jpg" alt="${current.label}">
        </div>
        <div class="lighting-tooltip-text">${current.desc}</div>
      `;
    } else {
      el.lightingSelectedTooltip.textContent = 'Нажмите, чтобы выбрать схему освещения.';
    }
  }

  if (el.lightingOptionsList) {
    const groups = [
      {
        title: '🎬 Кино и атмосфера',
        items: LIGHTING.slice(0, 6)
      },
      {
        title: '🕯️ Художественный свет',
        items: LIGHTING.slice(6, 12)
      },
      {
        title: '⚡ Контраст и акценты',
        items: LIGHTING.slice(12, 18)
      }
    ];

    let html = `
      <div class="comp-dropdown-header">
        <div class="comp-header-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          <span>ОСВЕЩЕНИЕ • 18 СХЕМ СВЕТА</span>
        </div>
        <div class="select-item select-item-none comp-reset-item ${!state.selectedLighting ? 'same-as-selected' : ''}" data-lighting-id="">
          <span class="lens-title-text">— Сбросить (очистить) —</span>
        </div>
      </div>
      <div class="lighting-columns-grid">
    `;

    groups.forEach((grp, colIdx) => {
      const colAlignClass = colIdx === 2 ? 'tooltip-align-right' : 'tooltip-align-left';
      html += `
        <div class="comp-grid-col lighting-col-${colIdx}">
          <div class="comp-col-title">
            <span>${grp.title}</span>
          </div>
      `;
      grp.items.forEach((l, idx) => {
        const isSelected = l.id === state.selectedLighting;
        const tooltipPosClass = idx >= 3 ? 'tooltip-up' : 'tooltip-down';
        html += `
          <div class="select-item ${isSelected ? 'same-as-selected' : ''}" data-lighting-id="${l.id}">
            <div class="lens-item-left">
              <span class="lens-title-text">${l.label}</span>
              <div class="lens-info-tooltip-wrap">
                <div class="lens-tooltip-content ${tooltipPosClass} ${colAlignClass}">
                  <div class="lighting-preview-wrap">
                    <img class="lighting-preview-img" src="lighting/${l.id}.jpg" alt="${l.label}" loading="lazy">
                  </div>
                  <div class="lighting-tooltip-text">${l.desc}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    });

    html += `</div>`;
    el.lightingOptionsList.innerHTML = html;
  }
}

function renderStyleOptions() {
  const current = STYLES.find(s => s.id === state.selectedStyle);
  if (el.styleSelectedText) {
    el.styleSelectedText.textContent = current ? current.label : 'Выберите стиль...';
    el.styleSelectedText.title = current ? current.label : 'Выберите стиль...';
  } else if (el.styleSelectedVal) {
    el.styleSelectedVal.textContent = current ? current.label : 'Выберите стиль...';
  }
  if (el.styleSelectedTooltip) {
    if (current) {
      el.styleSelectedTooltip.innerHTML = `
        <div class="lighting-preview-wrap">
          <img class="lighting-preview-img" src="styles/${current.id}.jpg" alt="${current.label}">
        </div>
        <div class="lighting-tooltip-text">${current.desc}</div>
      `;
    } else {
      el.styleSelectedTooltip.textContent = 'Нажмите, чтобы выбрать стиль и эстетику.';
    }
  }

  if (el.styleOptionsList) {
    const groups = [
      {
        title: '📸 Реализм и кино',
        items: STYLES.slice(0, 6)
      },
      {
        title: '🎨 Живопись и 3D-арт',
        items: STYLES.slice(6, 12)
      },
      {
        title: '✨ Дизайн и авангард',
        items: STYLES.slice(12, 18)
      }
    ];

    let html = `
      <div class="comp-dropdown-header">
        <div class="comp-header-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
          <span>СТИЛЬ И ЭСТЕТИКА • 18 НАПРАВЛЕНИЙ</span>
        </div>
        <div class="select-item select-item-none comp-reset-item ${!state.selectedStyle ? 'same-as-selected' : ''}" data-style-id="">
          <span class="lens-title-text">— Сбросить (очистить) —</span>
        </div>
      </div>
      <div class="lighting-columns-grid">
    `;

    groups.forEach((grp, colIdx) => {
      const colAlignClass = colIdx === 2 ? 'tooltip-align-right' : 'tooltip-align-left';
      html += `
        <div class="comp-grid-col style-col-${colIdx}">
          <div class="comp-col-title">
            <span>${grp.title}</span>
          </div>
      `;
      grp.items.forEach((s, idx) => {
        const isSelected = s.id === state.selectedStyle;
        const tooltipPosClass = idx >= 3 ? 'tooltip-up' : 'tooltip-down';
        html += `
          <div class="select-item ${isSelected ? 'same-as-selected' : ''}" data-style-id="${s.id}">
            <div class="lens-item-left">
              <span class="lens-title-text">${s.label}</span>
              <div class="lens-info-tooltip-wrap">
                <div class="lens-tooltip-content ${tooltipPosClass} ${colAlignClass}">
                  <div class="lighting-preview-wrap">
                    <img class="lighting-preview-img" src="styles/${s.id}.jpg" alt="${s.label}" loading="lazy">
                  </div>
                  <div class="lighting-tooltip-text">${s.desc}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    });

    html += `</div>`;
    el.styleOptionsList.innerHTML = html;
  }
}

function renderCompositionOptions() {
  const current = COMPOSITIONS.find(c => c.id === state.selectedComposition);
  if (el.compositionSelectedText) {
    el.compositionSelectedText.textContent = current ? current.label : '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u043A\u0443\u0440\u0441...';
    el.compositionSelectedText.title = current ? current.label : '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u043A\u0443\u0440\u0441...';
  } else if (el.compositionSelectedVal) {
    el.compositionSelectedVal.textContent = current ? current.label : '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u043A\u0443\u0440\u0441...';
  }
  if (el.compositionSelectedTooltip) {
    if (current) {
      el.compositionSelectedTooltip.innerHTML = `
        <div class="comp-preview-wrap">
          <img class="comp-preview-img" src="compositions/${current.id}.jpg?v=3.4" alt="${current.label}">
        </div>
        <div class="comp-tooltip-text">${current.desc}</div>
      `;
    } else {
      el.compositionSelectedTooltip.textContent = '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0440\u0430\u043A\u0443\u0440\u0441 \u0438 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044E.';
    }
  }

  if (el.compositionOptionsList) {
    const categories = [
      { name: '\u041A\u0440\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u043F\u043B\u0430\u043D\u0430', icon: '\uD83D\uDCD0' },
      { name: '\u0420\u0430\u043A\u0443\u0440\u0441 \u0438 \u0443\u0433\u043E\u043B \u043A\u0430\u043C\u0435\u0440\u044B', icon: '\uD83C\uDFA5' },
      { name: '\u0422\u043E\u0447\u043A\u0430 \u043E\u0431\u0437\u043E\u0440\u0430 \u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442', icon: '\uD83D\uDC64' },
      { name: '\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0438 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u044F', icon: '\uD83C\uDFA8' }
    ];

    let html = `
      <div class="comp-dropdown-header">
        <div class="comp-header-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
          <span>\u0420\u0410\u041A\u0423\u0420\u0421 \u0418 \u041A\u041E\u041C\u041F\u041E\u0417\u0418\u0426\u0418\u042F \u2022 24 \u0420\u0415\u0416\u0418\u041C\u0410 \u041A\u0418\u041D\u0415\u041C\u0410\u0422\u041E\u0413\u0420\u0410\u0424\u0410</span>
        </div>
        <div class="select-item select-item-none comp-reset-item ${!state.selectedComposition ? 'same-as-selected' : ''}" data-comp-id="">
          <span class="lens-title-text">\u2014 \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C (\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E) \u2014</span>
        </div>
      </div>
      <div class="comp-columns-grid">
    `;

    categories.forEach(cat => {
      const catComps = COMPOSITIONS.filter(c => c.category === cat.name);
      html += `
        <div class="comp-grid-col">
          <div class="comp-col-title">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
          </div>
      `;
      catComps.forEach((c, idx) => {
        const isSelected = c.id === state.selectedComposition;
        const tooltipPosClass = idx >= 3 ? 'tooltip-up' : 'tooltip-down';
        html += `
          <div class="select-item ${isSelected ? 'same-as-selected' : ''}" data-comp-id="${c.id}">
            <div class="lens-item-left">
              <span class="lens-title-text">${c.label}</span>
              <div class="lens-info-tooltip-wrap">
                <div class="lens-tooltip-content ${tooltipPosClass}">
                  <div class="comp-preview-wrap">
                    <img class="comp-preview-img" src="compositions/${c.id}.jpg?v=3.4" alt="${c.label}" loading="lazy">
                  </div>
                  <div class="comp-tooltip-text">${c.desc}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    });

    html += `</div>`;
    el.compositionOptionsList.innerHTML = html;
  }
}

function renderVideoMotionOptions() {
  const current = VIDEO_MOTIONS.find(m => m.id === state.selectedVideoMotion);
  if (el.videoMotionSelectedText) {
    el.videoMotionSelectedText.textContent = current ? current.label : '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435...';
    el.videoMotionSelectedText.title = current ? current.label : '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435...';
  }
  if (el.videoMotionSelectedTooltip) {
    if (current) {
      el.videoMotionSelectedTooltip.innerHTML = `
        <div class="motion-preview-wrap">
          <video class="motion-preview-video" src="motions/${current.id}.mp4?v=3.6" autoplay muted loop playsinline preload="auto"></video>
        </div>
        <div class="motion-tooltip-text">${current.desc}</div>
      `;
    } else {
      el.videoMotionSelectedTooltip.textContent = 'Нажмите, чтобы выбрать кинематографичное движение камеры.';
    }
  }

  if (el.videoMotionOptionsList) {
    const categories = [
      { name: 'Панорама и наклон', icon: '↔️' },
      { name: 'Оптический зум', icon: '🔍' },
      { name: 'Тележка и наезд', icon: '🎬' },
      { name: 'Облет и слежение', icon: '🔄' },
      { name: 'Кран, дрон и экшн', icon: '🚁' }
    ];

    let html = `
      <div class="motion-dropdown-header">
        <div class="motion-header-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>
          <span>БИБЛИОТЕКА ДВИЖЕНИЙ КАМЕРЫ • 46 РЕЖИМОВ (AICAMERAMOVEMENTS.COM)</span>
        </div>
        <div class="select-item select-item-none motion-reset-item ${!state.selectedVideoMotion ? 'same-as-selected' : ''}" data-motion-id="">
          <span class="lens-title-text">— Сбросить (без движения) —</span>
        </div>
      </div>
      <div class="motion-columns-grid">
    `;

    categories.forEach(cat => {
      const catMotions = VIDEO_MOTIONS.filter(m => m.category === cat.name);
      html += `
        <div class="motion-grid-col">
          <div class="motion-col-title">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
          </div>
      `;

      catMotions.forEach((m, idx) => {
        const isSelected = m.id === state.selectedVideoMotion;
        const tooltipPosClass = idx >= 3 ? 'tooltip-up' : 'tooltip-down';
        html += `
          <div class="select-item ${isSelected ? 'same-as-selected' : ''}" data-motion-id="${m.id}">
            <div class="lens-item-left">
              <span class="lens-title-text" title="${m.label}">${m.label}</span>
              <div class="lens-info-tooltip-wrap">
                <div class="lens-tooltip-content ${tooltipPosClass}">
                  <div class="motion-preview-wrap">
                    <video class="motion-preview-video" src="motions/${m.id}.mp4?v=3.6" muted loop playsinline preload="metadata"></video>
                  </div>
                  <div class="motion-tooltip-text">${m.desc}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      });

      html += `</div>`;
    });

    html += `</div>`;
    el.videoMotionOptionsList.innerHTML = html;
  }
}

function renderDurationOptions() {
  const current = CLIP_DURATIONS.find(d => d.id === state.selectedDuration);
  if (el.durationSelectedText) {
    el.durationSelectedText.textContent = current ? current.label : 'Выберите длительность...';
    el.durationSelectedText.title = current ? current.label : 'Выберите длительность...';
  }
  if (el.durationSelectedTooltip) {
    el.durationSelectedTooltip.textContent = current ? current.desc : 'Нажмите, чтобы выбрать хронометраж клипа.';
  }

  if (el.durationOptionsList) {
    const unselectItem = `
      <div class="select-item select-item-none ${!state.selectedDuration ? 'same-as-selected' : ''}" data-duration-id="">
        <div class="lens-item-left">
          <span class="lens-title-text">— Не выбрано (очистить) —</span>
        </div>
      </div>
    `;
    el.durationOptionsList.innerHTML = unselectItem + CLIP_DURATIONS.map(d => `
      <div class="select-item ${d.id === state.selectedDuration ? 'same-as-selected' : ''}" data-duration-id="${d.id}">
        <div class="lens-item-left">
          <span class="lens-title-text">${d.label}</span>
          <div class="lens-info-tooltip-wrap">
            <div class="lens-tooltip-content">${d.desc}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function renderFramerateOptions() {
  const current = CLIP_FRAMERATES.find(f => f.id === state.selectedFramerate);
  if (el.framerateSelectedText) {
    el.framerateSelectedText.textContent = current ? current.label : 'Выберите частоту...';
    el.framerateSelectedText.title = current ? current.label : 'Выберите частоту...';
  }
  if (el.framerateSelectedTooltip) {
    el.framerateSelectedTooltip.textContent = current ? current.desc : 'Нажмите, чтобы выбрать кадровую частоту.';
  }

  if (el.framerateOptionsList) {
    const unselectItem = `
      <div class="select-item select-item-none ${!state.selectedFramerate ? 'same-as-selected' : ''}" data-framerate-id="">
        <div class="lens-item-left">
          <span class="lens-title-text">— Не выбрано (очистить) —</span>
        </div>
      </div>
    `;
    el.framerateOptionsList.innerHTML = unselectItem + CLIP_FRAMERATES.map(f => `
      <div class="select-item ${f.id === state.selectedFramerate ? 'same-as-selected' : ''}" data-framerate-id="${f.id}">
        <div class="lens-item-left">
          <span class="lens-title-text">${f.label}</span>
          <div class="lens-info-tooltip-wrap">
            <div class="lens-tooltip-content">${f.desc}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function renderColorOptions() {
  const current = COLOR_PALETTES.find(c => c.id === state.selectedColor);
  if (el.colorSelectedText) {
    el.colorSelectedText.textContent = current ? current.label : 'Выберите гамму...';
    el.colorSelectedText.title = current ? current.label : 'Выберите гамму...';
  }
  if (el.colorSelectedTooltip) {
    if (current) {
      el.colorSelectedTooltip.innerHTML = `
        <div class="color-preview-wrap">
          <img class="color-preview-img" src="colors/${current.id}.jpg?v=5.3" alt="${current.label}">
        </div>
        <div class="color-tooltip-text">${current.desc}</div>
      `;
    } else {
      el.colorSelectedTooltip.innerHTML = '<div class="color-tooltip-text">Нажмите, чтобы выбрать цветовую гамму и кинематографическое тонирование.</div>';
    }
  }

  if (el.colorOptionsList) {
    const unselectItem = `
      <div class="select-item select-item-none ${!state.selectedColor ? 'same-as-selected' : ''}" data-color-id="">
        <span class="lens-title-text">— Не выбрано (очистить) —</span>
      </div>
    `;
    el.colorOptionsList.innerHTML = unselectItem + COLOR_PALETTES.map(c => `
      <div class="select-item color-select-item ${c.id === state.selectedColor ? 'same-as-selected' : ''}" data-color-id="${c.id}">
        <span class="lens-title-text">${c.label}</span>
        <div class="lens-tooltip-content color-hover-tooltip">
          <div class="color-preview-wrap">
            <img class="color-preview-img" src="colors/${c.id}.jpg?v=5.4" alt="${c.label}" loading="lazy">
          </div>
          <div class="color-tooltip-text">${c.desc}</div>
        </div>
      </div>
    `).join('');
  }
}

function renderChips() {
  // Legacy / fallback chip renderer if needed
  if (el.colorChipsGrid) {
    el.colorChipsGrid.innerHTML = COLOR_PALETTES.map(c => `
      <button class="param-chip ${c.id === state.selectedColor ? 'active' : ''}" data-param="color" data-val="${c.id}">
        ${c.label}
      </button>
    `).join('');
  }
}


function renderAspectRatios() {
  // Clear selection if currently selected ratio is unsupported in this mode
  if (state.selectedAspect) {
    const selectedRatio = ASPECT_RATIOS.find(a => a.id === state.selectedAspect);
    if (selectedRatio && selectedRatio.supportedModes && !selectedRatio.supportedModes.includes(state.mode)) {
      state.selectedAspect = '16:9'; // default to widescreen
    }
  }

  const activeRatio = ASPECT_RATIOS.find(a => a.id === state.selectedAspect) || ASPECT_RATIOS[0];
  if (el.aspectSelectedText) {
    el.aspectSelectedText.textContent = `${activeRatio.label} (${activeRatio.sub})`;
  }
  const iconEl = document.getElementById('aspectSelectedIcon');
  if (iconEl) {
    iconEl.setAttribute('data-ratio', activeRatio.id);
  }
  if (el.aspectSelectedTooltip) {
    el.aspectSelectedTooltip.textContent = `${activeRatio.label} • ${activeRatio.sub} • ${activeRatio.ratioDesc}`;
  }

  if (el.aspectOptionsList) {
    el.aspectOptionsList.innerHTML = ASPECT_RATIOS.map(a => {
      const isSupported = !a.supportedModes || a.supportedModes.includes(state.mode);
      const isSelected = a.id === state.selectedAspect && isSupported;
      const disabledClass = !isSupported ? 'disabled-item' : '';
      const disabledTitle = !isSupported ? ' (недоступно для видео)' : '';
      return `
        <div class="select-item aspect-select-item ${isSelected ? 'same-as-selected' : ''} ${disabledClass}" 
             data-ratio="${a.id}" 
             data-disabled="${!isSupported ? 'true' : 'false'}">
          <div class="aspect-dropdown-item-wrap">
            <span class="aspect-rect-icon" data-ratio="${a.id}"></span>
            <span class="item-name">${a.label}</span>
            <span class="item-sub">${a.sub}</span>
          </div>
          <div class="lens-info-tooltip-wrap">
            <div class="lens-tooltip-content">
              <div class="lighting-tooltip-text"><strong>${a.label} (${a.sub})</strong><br>${a.ratioDesc}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  if (el.aspectRatioContainer) {
    el.aspectRatioContainer.innerHTML = ASPECT_RATIOS.map(a => {
      const isSupported = !a.supportedModes || a.supportedModes.includes(state.mode);
      const isActive = a.id === state.selectedAspect && isSupported;
      const disabledClass = !isSupported ? 'disabled-tag' : '';
      const disabledTitle = !isSupported ? 'Недоступно для видеомоделей (только 16:9 и 9:16)' : '';
      return `
      <button class="aspect-btn ${isActive ? 'active' : ''} ${disabledClass}" 
              data-ratio="${a.id}" 
              data-disabled="${!isSupported ? 'true' : 'false'}"
              title="${disabledTitle}">
        <div class="aspect-icon-box"></div>
        <div class="aspect-title">${a.label}</div>
        <div class="aspect-sub">${a.sub}</div>
      </button>
    `}).join('');
  }
}

function renderNegativeTags() {
  el.negativeTagsContainer.innerHTML = NEGATIVE_QUICK_TAGS.map(n => `
    <button class="neg-tag ${state.activeNegativeTags.has(n.id) ? 'active' : ''}" data-neg="${n.id}">
      ${n.text.split(',')[0]}
    </button>
  `).join('');
}

function renderModelsGrid() {
  const visibleModels = AI_MODELS.filter(m => {
    if (state.mode === 'video') return m.mediaType === 'video';
    return m.mediaType === 'image';
  });

  el.modelsGrid.innerHTML = visibleModels.map(m => {
    const isSelected = m.id === state.selectedModel;

    return `
      <div class="model-card ${isSelected ? 'active' : ''}" 
           data-model-id="${m.id}" 
           data-disabled="false"
           title="${m.tipTitle}">
        <div class="model-icon ${m.iconClass}">${m.logoSvg}</div>
        <div class="model-info">
          <div class="model-name-row">
            <span class="model-name">${m.name}</span>
          </div>
          <div class="model-badge">${m.badge.split('•')[1]?.trim() || m.badge}</div>
        </div>
      </div>
    `;
  }).join('');
}

// --- PROMPT COMPILER ENGINE ---

function normalizeRussianTypos(str) {
  if (!str) return '';
  return str
    .replace(/прортрет|протрет|портер|партет/gi, 'портрет')
    .replace(/девушкаа|девушк/gi, 'девушка')
    .replace(/женшина/gi, 'женщина')
    .replace(/мужчиа/gi, 'мужчина')
    .replace(/киберпанкк/gi, 'киберпанк')
    .replace(/фотографиа|фотографий/gi, 'фотография')
    .replace(/картинкаа/gi, 'картинка')
    .replace(/платьее/gi, 'платье');
}

// Smart heuristic keyword mapper for Russian concepts to English descriptors
const RU_EN_DICTIONARY = [
  // Multi-word and phrase matches (highest priority)
  { ru: /портрет дамы в белом|портрет девушки в белом|портрет женщины в белом/gi, en: 'detailed portrait of an elegant lady dressed in white' },
  { ru: /дама в белом|дамы в белом|девушка в белом|женщина в белом/gi, en: 'an elegant lady dressed in white' },
  { ru: /дама в черном|дамы в черном|девушка в черном|женщина в черном/gi, en: 'an elegant lady dressed in black' },
  { ru: /дама в красном|дамы в красном|девушка в красном|женщина в красном/gi, en: 'an elegant lady dressed in red' },
  { ru: /портрет дамы|портрет девушки|портрет женщины/gi, en: 'detailed portrait of an elegant woman' },
  { ru: /портрет мужчины|портрет парня/gi, en: 'detailed portrait of a handsome man' },
  { ru: /сидит на берегу моря|сидит на берегу океана/gi, en: 'sitting thoughtfully on a rocky seashore with rolling ocean waves' },
  { ru: /на берегу моря|на берегу океана|на берегу/gi, en: 'on a scenic coastal rocky seashore with ocean spray' },
  { ru: /сидит на скале|сидит на камнях/gi, en: 'sitting poised on coastal sea rocks' },
  { ru: /сидит на|сидит в/gi, en: 'sitting gracefully on' },
  { ru: /стоит на краю|стоит на/gi, en: 'standing heroically on' },
  { ru: /идет по ночному городу/gi, en: 'walking through an atmospheric night city' },
  { ru: /идет по улице|идет по/gi, en: 'walking down a city street' },
  { ru: /смотрит в камеру|взгляд в камеру/gi, en: 'looking directly into the camera lens with intense emotive gaze' },
  { ru: /смотрит вдаль|взгляд вдаль/gi, en: 'gazing thoughtfully into the distant horizon' },
  { ru: /на фоне ночного города/gi, en: 'with an illuminated futuristic nocturnal cityscape in the background' },
  { ru: /на фоне заката/gi, en: 'against a glowing golden sunset sky' },
  { ru: /на фоне города/gi, en: 'against a majestic modern city skyline backdrop' },
  { ru: /на фоне/gi, en: 'against the atmospheric backdrop of' },
  { ru: /ночной город|ночном городе/gi, en: 'vibrant nocturnal city street at night' },
  { ru: /футуристический город|город будущего/gi, en: 'futuristic sci-fi metropolis with towering glass spires' },
  { ru: /под дождем|в дождь/gi, en: 'under falling rain with glistening wet surfaces and puddle reflections' },
  { ru: /с зонтом|под зонтом/gi, en: 'holding a clear transparent umbrella' },
  { ru: /в куртке/gi, en: 'wearing a detailed stylish tactical jacket' },
  { ru: /в пальто/gi, en: 'wearing an elegant long tailored coat' },
  { ru: /в белом платье/gi, en: 'wearing a flowing white gown' },
  { ru: /в черном платье/gi, en: 'wearing an elegant black gown' },
  { ru: /в красном платье/gi, en: 'wearing a striking red dress' },
  { ru: /в платье/gi, en: 'wearing an elegant flowing gown' },
  { ru: /в белом|в белой|в белых/gi, en: 'dressed in elegant white' },
  { ru: /в черном|в черной|в черных/gi, en: 'dressed in sleek black' },
  { ru: /в красном|в красной|в красных/gi, en: 'dressed in striking red' },
  { ru: /в синем|в синей/gi, en: 'dressed in deep blue' },
  { ru: /в зеленом|в зеленой/gi, en: 'dressed in emerald green' },
  { ru: /в желтом|в золотом/gi, en: 'dressed in golden yellow' },
  { ru: /капли дождя|капли воды/gi, en: 'delicate water droplets and condensation' },
  { ru: /отражения неоновых вывесок|неоновые отражения/gi, en: 'vivid neon signage reflections on wet asphalt' },
  { ru: /золотой закат/gi, en: 'brilliant golden hour sunset' },
  { ru: /утренний рассвет/gi, en: 'serene misty morning sunrise' },

  // Base subjects & people
  { ru: /дама|дамы/gi, en: 'an elegant lady' },
  { ru: /девушка|девушки|девушек/gi, en: 'a stunning young woman' },
  { ru: /женщина|женщины|женщин/gi, en: 'a beautiful woman' },
  { ru: /парень|мужчина|мужчины/gi, en: 'a handsome man' },
  { ru: /город/gi, en: 'atmospheric cityscape' },
  { ru: /портрет/gi, en: 'portrait' },
  { ru: /дождь|дожде/gi, en: 'gentle rain with wet street reflections' },
  { ru: /неон|неоновый/gi, en: 'glowing neon lights' },
  { ru: /горы|горах/gi, en: 'majestic mist-shrouded mountain peaks' },
  { ru: /море|океан/gi, en: 'dramatic ocean waves' },
  { ru: /закат/gi, en: 'golden sunset' },
  { ru: /рассвет/gi, en: 'crisp sunrise' },
  { ru: /лес|лесу/gi, en: 'lush mystical forest' },
  { ru: /космос|космосе/gi, en: 'deep starry cosmic space' },
  { ru: /робот|киборг/gi, en: 'futuristic sleek android cyborg' },
  { ru: /машина|автомобиль/gi, en: 'aerodynamic luxury concept sports car' },
  { ru: /кошка|кот/gi, en: 'fluffy domestic cat' },
  { ru: /собака|пес/gi, en: 'playful loyal dog' },
  { ru: /цветы|цветок/gi, en: 'delicate blooming flowers with morning dew' },
  { ru: /небоскребы|небоскреб/gi, en: 'towering modern skyscrapers' },
  { ru: /скалы|скала/gi, en: 'rugged dramatic cliffs' },
  { ru: /пляж/gi, en: 'scenic shoreline' },
  { ru: /взгляд/gi, en: 'emotive gaze' },
  { ru: /лицо/gi, en: 'detailed face' },
  { ru: /глаза/gi, en: 'eyes' },
  { ru: /волосы/gi, en: 'hair' },
  { ru: /улыбка/gi, en: 'smile' }
];

// --- HIGH-PERFORMANCE GOOGLE TRANSLATE ENGINE ---

const TRANSLATION_PRESETS_CACHE = {
  // Pre-cached translations for instant 0ms responses on Random Ideas & Presets
  'Рыжая девушка в вязаном свитере гуляет по осеннему лесу, золотые листья кружатся в воздухе':
    'Red-haired girl in a knitted sweater walking through an autumn forest, golden leaves swirling in the air',
  'Футуристический космический корабль приземляется на пустынной песчаной планете с двумя лунами на горизонте':
    'Futuristic spaceship landing on a deserted sandy planet with two moons on the horizon',
  'Молодой ученый в лаборатории будущего изучает парящую светящуюся голографическую сферу':
    'Young scientist in a futuristic laboratory examining a floating glowing holographic sphere',
  'Уютная старинная кофейня в дождливом Париже, теплый свет ламп, капли на стекле, столик у окна':
    'Cozy vintage coffee shop in rainy Paris, warm lamp glow, droplets on window glass, table by the window',
  'Древний восточный храм на вершине заснеженной скалы, цветущая сакура на ветру':
    'Ancient oriental temple atop a snow-capped cliff, blooming cherry blossoms fluttering in the wind',
  'Робот-киборг с неоновыми синими линиями сидит на краю крыши небоскреба над облаками':
    'Cyborg robot with neon blue circuits sitting on the edge of a skyscraper rooftop above the clouds',
  'Белый тигр с ледяными голубыми глазами крадется сквозь заснеженную сибирскую тайгу':
    'White tiger with piercing ice-blue eyes stalking through a snow-covered Siberian taiga',
  'Магический светящийся кристалл в глубине темной пещеры в окружении бирюзовой воды':
    'Magical glowing crystal deep inside a dark cave surrounded by turquoise water',
  'Спортсмен бежит по пляжу на закате океана, брызги волн в лучах заходящего солнца':
    'Athlete running along an ocean beach at sunset, wave splashes in the rays of the setting sun',
  'Астронавт идет по зеркальной соляной пустыне Уюни, в которой отражаются миллиарды звезд Млечного Пути':
    'Astronaut walking across the mirror-like Salar de Uyuni salt flat reflecting billions of stars of the Milky Way',
  'Нордический фьорд в мягком утреннем тумане, зеркальная гладь воды, величественные заснеженные горы':
    'Nordic fjord in soft morning mist, mirror-smooth water, majestic snow-capped mountains',
  'Выразительный портрет девушки-киборга в неоновом дождливом переулке, светящиеся синие микросхемы на скуле':
    'Striking portrait of a cyborg girl in a neon rainy alleyway, glowing blue circuits on cheekbone',
  'Кинематографичный широкий план каньона с красными скалами, освещенного лучами предзакатного солнца':
    'Cinematic wide establishing shot of a rugged red rock canyon illuminated by golden hour sunset rays',
  'Школьница стоит на крыше небоскреба в Токио, розовые перистые облака, золотистые лучи заката':
    'Schoolgirl standing on a Tokyo skyscraper rooftop, pink cirrus clouds, golden sunset rays',
  'Элегантный флакон духов из граненого хрусталя на черном базальтовом камне с брызгами чистой воды':
    'Elegant faceted crystal perfume bottle resting on black basalt stone with splashes of pure water',
  'Футуристический суперкар мчится по мокрому хайвею ночного Нео-Токио, световые следы от фар':
    'Futuristic supercar speeding along a wet highway in nighttime Neo-Tokyo, light trails from headlights'
};

const translationCache = new Map(Object.entries(TRANSLATION_PRESETS_CACHE));
let translationDebounceTimer = null;

async function fetchGoogleTranslate(text) {
  const trimmed = text.trim();
  if (!trimmed || !/[а-яА-ЯёЁ]/.test(trimmed)) return trimmed;

  if (translationCache.has(trimmed)) {
    return translationCache.get(trimmed);
  }

  // 1. Primary: Official Google Translate API (fast, high-accuracy neural translation, no key required)
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=en&dt=t&q=${encodeURIComponent(trimmed)}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const translated = data[0].map(item => item[0]).filter(Boolean).join('').trim();
        if (translated && !/[а-яА-ЯёЁ]/.test(translated)) {
          translationCache.set(trimmed, translated);
          return translated;
        }
      }
    }
  } catch (err) {
    console.warn('Google Translate API error:', err);
  }

  // 2. Secondary fallback: MyMemory API
  try {
    const mmUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(trimmed)}&langpair=ru|en`;
    const mmRes = await fetch(mmUrl);
    if (mmRes.ok) {
      const mmData = await mmRes.json();
      const mmText = mmData?.responseData?.translatedText;
      if (mmText && !/[а-яА-ЯёЁ]/.test(mmText) && !mmText.includes('MYMEMORY') && !mmText.includes('QUOTA')) {
        translationCache.set(trimmed, mmText.trim());
        return mmText.trim();
      }
    }
  } catch (e) {}

  return null;
}

function scheduleOnlineTranslation(text) {
  if (translationDebounceTimer) clearTimeout(translationDebounceTimer);
  const trimmed = text.trim();
  if (!trimmed || !/[а-яА-ЯёЁ]/.test(trimmed)) {
    state.onlineTranslatedIdea = trimmed;
    updateLivePrompt();
    return;
  }

  // Instant cache hit
  if (translationCache.has(trimmed)) {
    state.onlineTranslatedIdea = translationCache.get(trimmed);
    updateLivePrompt();
    return;
  }

  // Fast network fetch via Google Translate
  translationDebounceTimer = setTimeout(async () => {
    const translated = await fetchGoogleTranslate(trimmed);
    if (translated && state.idea.trim() === trimmed) {
      state.onlineTranslatedIdea = translated;
      updateLivePrompt();
    }
  }, 120);
}

// --- ENGLISH TO RUSSIAN MASTER PROMPT TRANSLATOR ---
const enToRuCache = new Map();
let promptRuTranslateDebounce = null;

async function fetchEnglishToRussian(text) {
  const trimmed = text ? text.trim() : '';
  if (!trimmed) return '';
  if (enToRuCache.has(trimmed)) {
    return enToRuCache.get(trimmed);
  }

  // 1. Primary: Official Google Translate API (fast, high-accuracy neural translation, no key required)
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=${encodeURIComponent(trimmed)}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const translated = data[0].map(item => item[0]).filter(Boolean).join('').trim();
        if (translated) {
          enToRuCache.set(trimmed, translated);
          return translated;
        }
      }
    }
  } catch (err) {
    console.warn('Google Translate (EN->RU) error:', err);
  }

  // 2. Secondary fallback: MyMemory API
  try {
    const mmUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(trimmed)}&langpair=en|ru`;
    const mmRes = await fetch(mmUrl);
    if (mmRes.ok) {
      const mmData = await mmRes.json();
      const mmText = mmData?.responseData?.translatedText;
      if (mmText && !mmText.includes('MYMEMORY') && !mmText.includes('QUOTA')) {
        enToRuCache.set(trimmed, mmText.trim());
        return mmText.trim();
      }
    }
  } catch (e) {}

  return null;
}

function translateRussianIdea(ideaText) {
  if (!ideaText || ideaText.trim() === '') return '';
  const text = ideaText.trim();

  // If already pure English
  if (!/[а-яА-ЯёЁ]/.test(text)) {
    return text;
  }

  // If translation is in cache
  if (translationCache.has(text)) {
    return translationCache.get(text);
  }

  // If online Google Translate returned a result
  if (state.onlineTranslatedIdea && !/[а-яА-ЯёЁ]/.test(state.onlineTranslatedIdea)) {
    return state.onlineTranslatedIdea;
  }

  // Trigger Google Translate in background
  scheduleOnlineTranslation(text);

  // Clean dictionary replacement as immediate preview
  let translated = text;
  for (const item of RU_EN_DICTIONARY) {
    if (item.ru.test(translated)) {
      translated = translated.replace(item.ru, item.en);
    }
  }

  return translated.trim();
}

// --- MODEL-SPECIFIC COMPILERS & ADAPTERS ---

function cleanBuzzwords(text) {
  if (!text) return '';
  return text
    .replace(/\b8K(\s*ultra\s*high\s*fidelity)?\b/gi, 'crisp optical fidelity')
    .replace(/\bhyper-detailed\s*photorealism\b/gi, 'lifelike skin micro-textures, tactile authentic surfaces')
    .replace(/\bphotorealistic\b/gi, 'authentic photographic realism')
    .replace(/\bphotorealism\b/gi, 'authentic optical fidelity')
    .replace(/\boctane\s*(3D\s*)?render\b/gi, 'physically accurate light transport')
    .replace(/\bultra\s*high\s*fidelity\b/gi, 'authentic tactile details')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function generateOmniSoundscape(idea, motionId) {
  const text = (idea || '').toLowerCase();
  if (text.includes('лофт') || text.includes('loft') || text.includes('ремонт') || text.includes('renovation') || text.includes('интерьер') || text.includes('interior') || text.includes('таймлапс') || text.includes('timelapse') || text.includes('living space') || text.includes('комнат') || text.includes('architectur')) {
    return 'Natural room tone: subtle interior room acoustics, gentle synchronized timelapse assembly Foley, soft wood and metallic placement resonance, no dialogue';
  }
  if (text.includes('дожд') || text.includes('rain') || text.includes('луж') || text.includes('wet')) {
    return 'Gentle rhythmic rain patter on surfaces, distant wet street tire whoosh, atmospheric binaural acoustics';
  }
  if (text.includes('авто') || text.includes('машин') || text.includes('car') || text.includes('highway') || text.includes('киберпанк') || text.includes('cyberpunk') || text.includes('суперкар')) {
    return 'Deep throaty engine resonance, tire road friction, subtle futuristic electronic synthesizer drone, stereo panning';
  }
  if (text.includes('лес') || text.includes('природ') || text.includes('forest') || text.includes('дерев') || text.includes('ветер') || text.includes('wind') || text.includes('листь')) {
    return 'Organic nature ambiance: whispering wind rustling through foliage, crisp twigs, distant bird calls, pristine spatial acoustics';
  }
  if (text.includes('океан') || text.includes('пляж') || text.includes('мор') || text.includes('ocean') || text.includes('sea') || text.includes('wave') || text.includes('волн')) {
    return 'Rhythmic ocean surf crashing on shoreline, refreshing sea spray, distant coastal seabirds, expansive panoramic acoustics';
  }
  if (text.includes('город') || text.includes('токио') || text.includes('street') || text.includes('city') || text.includes('улиц') || text.includes('кофейн') || text.includes('cafe')) {
    return 'Rich urban environmental soundscape: gentle city rumble, muffled passing pedestrians, distant sirens, authentic spatial reverb';
  }
  if (/\b(outer space|deep space|cosmos|cosmic void|galaxy|interstellar|astronaut|spacesuit)\b/i.test(text) || text.includes('космос') || text.includes('планет') || text.includes('астронавт')) {
    return 'Ethereal cosmic sound design: low frequency sub-bass vibration, muffled spacesuit telemetry, deep interstellar drone';
  }
  if (motionId === 'fpv-drone') {
    return 'High-speed dynamic audio: rushing aerodynamic wind shear, high-pitch drone turbine harmonics, rapid Doppler shifts';
  }
  if (motionId === 'orbit-360' || motionId === 'dolly-in' || motionId === 'static-shot') {
    return 'Subtle focal Foley textures, natural room acoustics, atmospheric presence';
  }
  return 'Authentic ambient environmental acoustics, crisp synchronized Foley textures, natural acoustic presence';
}

function generateVeoAudio(idea, motionId) {
  const text = (idea || '').toLowerCase();
  let ambient = 'ambient environmental acoustics, natural room presence';
  let sfx = 'synchronized diegetic Foley movement';

  if (text.includes('лофт') || text.includes('loft') || text.includes('ремонт') || text.includes('renovation') || text.includes('интерьер') || text.includes('interior') || text.includes('таймлапс') || text.includes('timelapse') || text.includes('living space') || text.includes('комнат') || text.includes('architectur')) {
    ambient = 'warm architectural interior room tone, subtle natural room acoustics';
    sfx = 'rhythmic timelapse assembly Foley, soft wood and metallic placement resonance';
  } else if (text.includes('дожд') || text.includes('rain') || text.includes('луж') || text.includes('wet')) {
    ambient = 'steady rain patter falling on surfaces, distant wet pavement tire whoosh';
    sfx = 'footsteps splashing through puddles, water droplets dripping from edges';
  } else if (text.includes('авто') || text.includes('машин') || text.includes('car') || text.includes('highway') || text.includes('суперкар') || text.includes('road')) {
    ambient = 'highway wind rush, distant city hum, asphalt road friction';
    sfx = 'deep throaty engine acceleration, tire screech on pavement';
  } else if (text.includes('лес') || text.includes('природ') || text.includes('forest') || text.includes('дерев') || text.includes('ветер') || text.includes('wind') || text.includes('водопад')) {
    ambient = 'mountain breeze rustling through leafy trees, distant bird chirps';
    sfx = 'twigs snapping underfoot, rushing waterfall cascade acoustics';
  } else if (text.includes('океан') || text.includes('пляж') || text.includes('мор') || text.includes('ocean') || text.includes('sea') || text.includes('волна') || text.includes('волн')) {
    ambient = 'rhythmic ocean surf rolling onto sand, breezy coastal atmosphere';
    sfx = 'seafoam sizzle, water spray splashing on coastal sea rocks';
  } else if (text.includes('город') || text.includes('улиц') || text.includes('street') || text.includes('city') || text.includes('токио') || text.includes('кофейн')) {
    ambient = 'bustling nocturnal city soundscape, distant sirens, low frequency city rumble';
    sfx = 'muffled pedestrian footsteps, coffee cup clinking on saucer, neon sign electrical hum';
  } else if (/\b(outer space|deep space|cosmos|cosmic void|galaxy|interstellar|astronaut|spacesuit)\b/i.test(text) || text.includes('космос') || text.includes('планет') || text.includes('астронавт')) {
    ambient = 'deep ethereal cosmic void drone, low sub-bass vibration';
    sfx = 'spacesuit internal telemetry beeps, pressurized air hiss';
  }

  if (motionId === 'fpv-drone') {
    sfx = 'high-speed aerodynamic wind shear, high-pitch drone propeller turbine whine';
  }

  return {
    ambient,
    sfx,
    fullAudioText: `Ambient soundscape: ${ambient}. Synchronized SFX: ${sfx}. Dialogue: No dialogue`
  };
}

// --- IDENTITY LOCK (FACIAL PRESERVATION CONSTANTS) ---
const IDENTITY_LOCK_DIRECTIVE = 'Strict 1:1 facial identity lock to @Image1 reference: preserve exact eye shape, eyelid folds, natural under-eye contours, exact nose bridge geometry, authentic facial bone structure, and natural beard/hair density with visible skin micro-texture. Maintain frontal fill light on face and crisp locked garment typography';
const IDENTITY_LOCK_CONSTRAINTS = 'strict facial geometry lock to @Image1, no facial beautification, no eye widening, no cheek or jaw morphing, no beard thickening, no garment text garbling';

function compileImagen3(ctx) {
  const sections = [];
  if (!ctx.baseDescription && !ctx.activeCam && !ctx.activeLens && !ctx.activeLight && !ctx.activeStyle && !ctx.activeComp && !ctx.activeColor) {
    return { masterPrompt: '', sections: [] };
  }

  const opticsParts = [];
  if (ctx.activeCam) opticsParts.push(ctx.activeCam.prompt);
  if (ctx.activeLens) opticsParts.push(ctx.activeLens.prompt);

  // Build cohesive master photographic prompt
  const masterParts = [];
  if (ctx.activeComp) masterParts.push(ctx.activeComp.prompt);
  if (ctx.baseDescription) masterParts.push(`of ${ctx.baseDescription}`);
  if (opticsParts.length > 0) masterParts.push(`${opticsParts.join(', ')} with authentic optical focal depth`);
  if (ctx.activeLight) masterParts.push(ctx.activeLight.prompt);
  if (ctx.activeColor) masterParts.push(ctx.activeColor.prompt);
  if (ctx.activeStyle) masterParts.push(cleanBuzzwords(ctx.activeStyle.prompt));
  if (ctx.quickTags) masterParts.push(`featuring ${ctx.quickTags}`);
  if (state.identityLock) {
    masterParts.push('strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification');
  }
  if (ctx.activeAspect) masterParts.push(`aspect ratio ${ctx.activeAspect.id}`);

  const masterPrompt = masterParts.length > 0 ? masterParts.join(', ') + '.' : '';

  // Structured breakdown
  sections.push({
    uiTag: '🎬 Мастер-промпт (Imagen 3)',
    plainTag: 'Imagen 3 Master Prompt',
    val: masterPrompt
  });

  if (ctx.baseDescription) {
    sections.push({
      uiTag: '💡 Тема и объект (Subject)',
      plainTag: 'Subject',
      val: ctx.baseDescription
    });
  }

  if (ctx.quickTags) {
    sections.push({
      uiTag: '🏷️ Ключевые слова (Keywords)',
      plainTag: 'Keywords',
      val: ctx.quickTags
    });
  }

  if (opticsParts.length > 0) {
    const isPhotographicStyle = !ctx.activeStyle || ['photorealistic', 'editorial-fashion', 'minimalism', 'vintage-70s'].includes(ctx.activeStyle.id);
    const opticalSuffix = isPhotographicStyle ? ', true optical depth of field and authentic sensor clarity' : '';
    sections.push({
      uiTag: '📷 Оптика (Optics & Sensor)',
      plainTag: 'Photographic Setup',
      val: opticsParts.join(', ') + opticalSuffix
    });
  }

  if (ctx.activeLight) {
    sections.push({
      uiTag: '💡 Освещение (Lighting Architecture)',
      plainTag: 'Lighting Architecture',
      val: ctx.activeLight.prompt
    });
  }

  if (ctx.activeComp) {
    sections.push({
      uiTag: '📐 Композиция (Framing & Angle)',
      plainTag: 'Composition & Framing',
      val: ctx.activeComp.prompt
    });
  }

  if (ctx.activeColor) {
    sections.push({
      uiTag: '🌈 Цветопередача (Color Science)',
      plainTag: 'Color Science',
      val: ctx.activeColor.prompt
    });
  }

  if (ctx.activeStyle) {
    sections.push({
      uiTag: '🎨 Эстетика (Aesthetics & Textures)',
      plainTag: 'Visual Style',
      val: cleanBuzzwords(ctx.activeStyle.prompt)
    });
  }

  if (ctx.activeAspect) {
    sections.push({
      uiTag: '📐 Формат (Aspect Ratio)',
      plainTag: 'Aspect Ratio',
      val: `${ctx.activeAspect.id} (${ctx.activeAspect.ratioDesc})`
    });
  }

  if (state.identityLock) {
    sections.push({
      uiTag: '🔒 Фиксация лица (Identity Lock)',
      plainTag: 'Identity Lock',
      val: 'strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification'
    });
  }

  return { masterPrompt, sections };
}

function compileVeo31(ctx) {
  const sections = [];
  if (!ctx.baseDescription && !ctx.activeMotion && !ctx.activeCam && !ctx.activeLens && !ctx.activeLight && !ctx.activeStyle && !ctx.activeComp && !ctx.activeColor) {
    return { masterPrompt: '', sections: [] };
  }

  const audio = generateVeoAudio(ctx.baseDescription, ctx.activeMotion?.id);
  const durStr = ctx.activeDur ? ctx.activeDur.id : '8s';
  const aspectStr = ctx.activeAspect ? ctx.activeAspect.id : '16:9';

  // Build Master Cohesive Narrative Prompt (Veo 3.1)
  const masterParts = [];
  const compPrefix = ctx.activeComp ? ctx.activeComp.prompt : 'Cinematic establishing shot';
  masterParts.push(`A continuous, unbroken ${durStr} cinematic shot (${compPrefix}, aspect ratio ${aspectStr})`);

  if (ctx.baseDescription) {
    masterParts.push(` of ${ctx.baseDescription}`);
  }

  if (ctx.activeMotion) {
    const motionClean = ctx.activeMotion.prompt.trim().replace(/\.+$/, '');
    masterParts.push(`. The camera performs a ${motionClean}, maintaining a steady cinematic trajectory with natural optical motion blur at 24fps`);
  } else {
    masterParts.push(`. The camera maintains steady cinematic framing with natural optical motion blur at 24fps`);
  }

  const opticsList = [];
  if (ctx.activeCam) opticsList.push(ctx.activeCam.prompt);
  if (ctx.activeLens) opticsList.push(ctx.activeLens.prompt);
  if (opticsList.length > 0) {
    masterParts.push(`. Optics & Camera: ${opticsList.join(', ')} with authentic optical focal depth.`);
  }

  const moodList = [];
  if (ctx.activeLight) moodList.push(ctx.activeLight.prompt);
  if (ctx.activeColor) moodList.push(ctx.activeColor.prompt);
  if (ctx.activeStyle) moodList.push(cleanBuzzwords(ctx.activeStyle.prompt));
  if (moodList.length > 0) {
    masterParts.push(`. Lighting and visual atmosphere: ${moodList.join(', ')}`);
  }

  if (ctx.quickTags) {
    masterParts.push(`. Contextual details: ${ctx.quickTags}`);
  }

  if (state.identityLock) {
    masterParts.push(`. ${IDENTITY_LOCK_DIRECTIVE}`);
  }

  masterParts.push(`. Audio: ${audio.fullAudioText}`);
  if (state.identityLock) {
    masterParts.push(`. 1080p crisp master, 24fps, single unbroken take, no sudden scene cuts, no dialogue, no watermark, ${IDENTITY_LOCK_CONSTRAINTS}.`);
  } else {
    masterParts.push(`. 1080p crisp master, 24fps, single unbroken take, no sudden scene cuts, no dialogue, no watermark.`);
  }

  const masterPrompt = masterParts.join('');

  // Structured Sections
  sections.push({
    uiTag: '🎬 Мастер-промпт (Veo 3.1 Master)',
    plainTag: 'Veo 3.1 Master Prompt',
    val: masterPrompt
  });

  if (ctx.baseDescription) {
    sections.push({
      uiTag: '💡 Объект и сцена (Subject & Scene)',
      plainTag: 'Subject & Scene',
      val: ctx.baseDescription
    });
  }

  if (ctx.quickTags) {
    sections.push({
      uiTag: '🏷️ Ключевые слова (Keywords)',
      plainTag: 'Keywords',
      val: ctx.quickTags
    });
  }

  if (ctx.activeMotion) {
    sections.push({
      uiTag: '🎥 Движение камеры (Camera Motion)',
      plainTag: 'Camera Motion',
      val: `${ctx.activeMotion.prompt}, steady trajectory with organic 24fps optical motion blur`
    });
  }

  const rigParts = [];
  if (ctx.activeCam) rigParts.push(ctx.activeCam.prompt);
  if (ctx.activeLens) rigParts.push(ctx.activeLens.prompt);
  if (ctx.activeComp) rigParts.push(ctx.activeComp.prompt);
  if (rigParts.length > 0) {
    sections.push({
      uiTag: '📷 Операторский сетап (Cinematography & Lens)',
      plainTag: 'Cinematography & Rig',
      val: rigParts.join(', ')
    });
  }

  if (ctx.activeLight) {
    sections.push({
      uiTag: '💡 Освещение (Lighting Architecture)',
      plainTag: 'Lighting & Atmosphere',
      val: ctx.activeLight.prompt
    });
  }

  if (ctx.activeColor) {
    sections.push({
      uiTag: '🌈 Цветокоррекция (Color Grading)',
      plainTag: 'Color Grading',
      val: ctx.activeColor.prompt
    });
  }

  sections.push({
    uiTag: '🔊 Нативный звук (Veo 3.1 Audio: Ambient & SFX)',
    plainTag: 'Synchronized Audio',
    val: audio.fullAudioText
  });

  if (ctx.activeStyle) {
    sections.push({
      uiTag: '🎨 Киностиль (Production Style)',
      plainTag: 'Production Style',
      val: cleanBuzzwords(ctx.activeStyle.prompt)
    });
  }

  const specParts = [`duration ${durStr}`, '24fps cinematic', `aspect ratio ${aspectStr}`, 'native resolution 1080p / 4K'];
  sections.push({
    uiTag: '⏱ Спецификация клипа (Clip Specs)',
    plainTag: 'Clip Specifications',
    val: specParts.join(', ')
  });

  if (state.identityLock) {
    sections.push({
      uiTag: '🔒 Фиксация лица (Identity Lock)',
      plainTag: 'Identity Lock',
      val: `${IDENTITY_LOCK_DIRECTIVE}. Constraints: ${IDENTITY_LOCK_CONSTRAINTS}`
    });
  }

  return { masterPrompt, sections };
}

function compileOmniFlash(ctx) {
  const sections = [];
  if (!ctx.baseDescription && !ctx.activeMotion && !ctx.activeCam && !ctx.activeLens && !ctx.activeLight && !ctx.activeStyle && !ctx.activeComp && !ctx.activeColor) {
    return { masterPrompt: '', sections: [] };
  }

  const soundDesign = generateOmniSoundscape(ctx.baseDescription, ctx.activeMotion?.id);
  const durStr = ctx.activeDur ? ctx.activeDur.id : '8s';
  const aspectStr = ctx.activeAspect ? ctx.activeAspect.id : '16:9';

  // Build Master Prompt according to Gemini Omni Flash official guide:
  // Must use "Continuous, unbroken shot" to prevent unwanted automatic scene cuts!
  const masterParts = [];
  const compPrefix = ctx.activeComp ? ctx.activeComp.prompt : '';
  const specDetails = [compPrefix, durStr, aspectStr].filter(Boolean).join(', ');
  masterParts.push(`Continuous, unbroken shot in a single continuous take with no scene cuts (${specDetails}). `);

  if (ctx.baseDescription) {
    const descClean = ctx.baseDescription.trim().replace(/\.+$/, '');
    masterParts.push(`${descClean}. `);
  }

  if (ctx.activeMotion) {
    const motionClean = ctx.activeMotion.prompt.trim().replace(/\.+$/, '');
    masterParts.push(`The camera executes a ${motionClean}. `);
  }

  const opticsParts = [];
  if (ctx.activeCam) opticsParts.push(ctx.activeCam.prompt);
  if (ctx.activeLens) opticsParts.push(ctx.activeLens.prompt);
  if (opticsParts.length > 0) {
    masterParts.push(`Optics & Camera: ${opticsParts.join(', ')} with authentic optical focal depth. `);
  }

  const atmosphereParts = [];
  if (ctx.activeLight) atmosphereParts.push(ctx.activeLight.prompt);
  if (ctx.activeColor) atmosphereParts.push(ctx.activeColor.prompt);
  if (ctx.activeStyle) atmosphereParts.push(cleanBuzzwords(ctx.activeStyle.prompt));
  if (atmosphereParts.length > 0) {
    masterParts.push(`Lighting and visual atmosphere: ${atmosphereParts.join(', ')}. `);
  }

  if (ctx.quickTags) {
    masterParts.push(`Scene elements: ${ctx.quickTags}. `);
  }

  // Meta-prompting directive (DeepMind Omni recommended practice)
  masterParts.push(`Consider micro-detail, natural lighting falloff, realistic physical inertia, and timing to create a rich, cohesive scene. `);

  if (state.identityLock) {
    masterParts.push(`${IDENTITY_LOCK_DIRECTIVE} (<IMAGE_REF_0>). `);
  }

  // Dedicated Sound design directive
  masterParts.push(`Sound design: ${soundDesign}. `);

  // Negative directives supported by Omni
  if (state.identityLock) {
    masterParts.push(`No dialogue. No scene cuts. No embellishments. No extra sound effects. No facial drift or beautification.`);
  } else {
    masterParts.push(`No dialogue. No scene cuts. No embellishments. No extra sound effects.`);
  }

  const masterPrompt = masterParts.join('');

  // Structured Sections
  sections.push({
    uiTag: '🎬 Мастер-промпт (Omni 1.1 Flash Master)',
    plainTag: 'Omni 1.1 Flash Master Prompt',
    val: masterPrompt
  });

  if (ctx.baseDescription) {
    sections.push({
      uiTag: '💡 Визуальная сцена (Visual Scene)',
      plainTag: 'Visual Scene',
      val: ctx.baseDescription
    });
  }

  // Timecode breakdown for Omni 1.1 Flash
  const timecodeSequence = `[0-3s] Initiating frame: ${ctx.baseDescription || 'Subject in focus'}, camera begins ${ctx.activeMotion?.prompt || 'steady motion'} | [3-6s] Action develops with dynamic spatial depth and lighting interaction | [6-${durStr}] Scene completes with natural deceleration, rich textural fidelity and atmospheric presence`;
  sections.push({
    uiTag: '⏱ Таймкоды сцены (Timecode Sequence)',
    plainTag: 'Timecode Sequence',
    val: timecodeSequence
  });

  if (ctx.activeMotion) {
    sections.push({
      uiTag: '🎥 Движение камеры (Camera Dynamics)',
      plainTag: 'Camera Dynamics',
      val: ctx.activeMotion.prompt
    });
  }

  sections.push({
    uiTag: '🔊 Саунд-дизайн (Sound Design Block)',
    plainTag: 'Sound Design',
    val: `Sound design: ${soundDesign}. No dialogue.`
  });

  const cineParts = [];
  if (ctx.activeCam) cineParts.push(ctx.activeCam.prompt);
  if (ctx.activeLens) cineParts.push(ctx.activeLens.prompt);
  if (ctx.activeComp) cineParts.push(ctx.activeComp.prompt);
  if (cineParts.length > 0) {
    sections.push({
      uiTag: '📷 Кинооптика (Cinematography)',
      plainTag: 'Cinematography',
      val: cineParts.join(', ')
    });
  }

  if (ctx.activeLight) {
    sections.push({
      uiTag: '💡 Освещение (Lighting)',
      plainTag: 'Lighting',
      val: ctx.activeLight.prompt
    });
  }

  sections.push({
    uiTag: '🏷️ Ролевые теги Omni (Role Tags)',
    plainTag: 'Role Tags Support',
    val: '<FIRST_FRAME> (start frame), <LAST_FRAME> (transition end), <IMAGE_REF_0> (style/subject ref)'
  });

  const clipSpecs = [`duration ${durStr}`, '24fps cinematic', `aspect ratio ${aspectStr}`, 'supported resolution 720p / 1080p / 4K'];
  sections.push({
    uiTag: '⏱ Параметры клипа (Clip Specs)',
    plainTag: 'Clip Specifications',
    val: clipSpecs.join(', ')
  });

  if (state.identityLock) {
    sections.push({
      uiTag: '🔒 Фиксация лица (Identity Lock)',
      plainTag: 'Identity Lock',
      val: `${IDENTITY_LOCK_DIRECTIVE} (<IMAGE_REF_0>). Constraints: No facial drift or beautification.`
    });
  }

  return { masterPrompt, sections };
}

function compileMinimaxH3(ctx) {
  const sections = [];
  if (!ctx.baseDescription && !ctx.activeMotion && !ctx.activeCam && !ctx.activeLens && !ctx.activeLight && !ctx.activeStyle && !ctx.activeComp && !ctx.activeColor) {
    return { masterPrompt: '', sections: [] };
  }

  const durStr = ctx.activeDur ? ctx.activeDur.id : '8s';
  const aspectStr = ctx.activeAspect ? ctx.activeAspect.id : '16:9';
  const durSec = parseInt(durStr, 10) || 8;
  const soundscape = generateOmniSoundscape(ctx.baseDescription, ctx.activeMotion?.id);

  // 1. Core Concept Block (Clean concise narrative summary)
  const descClean = (ctx.baseDescription || 'Dynamic cinematic scene').trim().replace(/\.+$/, '');
  let coreConcept = `${descClean}. High-fidelity continuous 2K take (${durStr}, ${aspectStr}, 24fps).`;
  if (state.identityLock) {
    coreConcept += ` ${IDENTITY_LOCK_DIRECTIVE}.`;
  }

  // 2. Structured Temporal Decomposition [Xs-Ys]
  let timeline = '';
  const motionDesc = ctx.activeMotion ? ctx.activeMotion.prompt.trim().replace(/\.+$/, '') : 'smooth forward dolly push';
  if (durSec <= 6) {
    const half = Math.floor(durSec / 2);
    timeline = `[0s-${half}s] Initiating composition: camera executes a ${motionDesc}, establishing scene elements with pristine optical depth. [${half}s-${durSec}s] Kinetic progression develops with realistic physical inertia, natural lighting highlights, and cohesive settling into the final frame.`;
  } else if (durSec <= 10) {
    timeline = `[0s-3s] Initiating sequence: camera begins a ${motionDesc}, anchoring subject geometry with authentic perspective parallax. [3s-6s] Action deepens with rich atmospheric interaction, continuous kinetic flow, and authentic physical mass. [6s-${durSec}s] Sequence achieves smooth cinematic resolution with realistic optical motion blur and cohesive environment settling.`;
  } else {
    // 15s epic take
    timeline = `[0s-4s] Opening framing: camera executes a steady ${motionDesc}, revealing the architectural space and focal subjects. [4s-10s] Dynamic central arc: nuanced physical interactions unfold with rich ambient lighting falloff and environmental depth. [10s-${durSec}s] Epic cinematic culmination: smooth controlled deceleration, subtle spatial reverberation, and seamless narrative resolution.`;
  }

  // 3. Cinematography and optics
  const opticsList = [];
  if (ctx.activeCam) opticsList.push(ctx.activeCam.prompt);
  if (ctx.activeLens) opticsList.push(ctx.activeLens.prompt);
  if (ctx.activeComp) opticsList.push(ctx.activeComp.prompt);
  if (ctx.activeLight) opticsList.push(ctx.activeLight.prompt);
  if (ctx.activeColor) opticsList.push(ctx.activeColor.prompt);
  if (ctx.activeStyle) opticsList.push(cleanBuzzwords(ctx.activeStyle.prompt));

  // 4. Master Prompt Assembly (Following MiniMax-H3 official 3-block formula)
  const masterParts = [];
  masterParts.push(`[Core Concept]: ${coreConcept} `);
  masterParts.push(`[Temporal Progression]: ${timeline} `);

  if (opticsList.length > 0) {
    masterParts.push(`[Cinematography & Atmosphere]: ${opticsList.join(', ')}. True 2K clarity, volumetric atmospheric haze, natural optical bokeh. `);
  }

  if (ctx.quickTags) {
    masterParts.push(`[Scene Elements]: ${ctx.quickTags}. `);
  }

  masterParts.push(`[Audio Environment]: Synchronized 32kHz stereo audio: ${soundscape}. `);
  if (state.identityLock) {
    masterParts.push(`[Constraints]: Single continuous shot, no scene cuts, no morphing artifacts, no text watermark, no spoken dialogue, ${IDENTITY_LOCK_CONSTRAINTS}.`);
  } else {
    masterParts.push(`[Constraints]: Single continuous shot, no scene cuts, no morphing artifacts, no text watermark, no spoken dialogue.`);
  }

  const masterPrompt = masterParts.join('');

  // 5. Structured Sections for UI Terminal
  sections.push({
    uiTag: '🎬 Мастер-промпт (MiniMax-H3 Master)',
    plainTag: 'MiniMax-H3 Master Prompt',
    val: masterPrompt
  });

  sections.push({
    uiTag: '🎯 Концепт сцены (Core Concept)',
    plainTag: 'Core Concept',
    val: coreConcept
  });

  sections.push({
    uiTag: '⏱ Темпоральная декомпозиция (Temporal Progression)',
    plainTag: 'Temporal Progression',
    val: timeline
  });

  if (ctx.activeMotion) {
    sections.push({
      uiTag: '🎥 Кинематика камеры (Camera Motion)',
      plainTag: 'Camera Motion',
      val: `${ctx.activeMotion.prompt}, physical momentum with 24fps optical motion blur`
    });
  }

  if (opticsList.length > 0) {
    sections.push({
      uiTag: '📷 Операторский сетап (Cinematography & Rig)',
      plainTag: 'Cinematography',
      val: opticsList.join(', ')
    });
  }

  sections.push({
    uiTag: '🔊 Нативный звук 32kHz (Embedded Audio)',
    plainTag: 'Native 32kHz Audio',
    val: `32kHz stereo soundscape: ${soundscape}. Synchronized diegetic audio cues.`
  });

  sections.push({
    uiTag: '🏷️ Метки референсов H3 (Reference Tags)',
    plainTag: 'H3 Reference Taxonomy',
    val: '@Image1 (Subject reference) | @Video1 (Camera trajectory reference) | @Audio1 (Acoustic style reference)'
  });

  const specParts = [`duration ${durStr}`, '24fps cinematic', `aspect ratio ${aspectStr}`, 'native resolution 2K (open-weight)'];
  sections.push({
    uiTag: '⏱ Спецификация клипа (Clip Specs)',
    plainTag: 'Clip Specifications',
    val: specParts.join(', ')
  });

  if (state.identityLock) {
    sections.push({
      uiTag: '🔒 Фиксация лица (Identity Lock)',
      plainTag: 'Identity Lock',
      val: `${IDENTITY_LOCK_DIRECTIVE}. Constraints: ${IDENTITY_LOCK_CONSTRAINTS}`
    });
  }

  return { masterPrompt, sections };
}

function compileGeminiFlash(ctx) {
  const sections = [];
  if (!ctx.baseDescription && !ctx.activeCam && !ctx.activeLens && !ctx.activeLight && !ctx.activeStyle && !ctx.activeComp && !ctx.activeColor) {
    return { masterPrompt: '', sections: [] };
  }

  const masterParts = [];
  if (ctx.baseDescription) masterParts.push(ctx.baseDescription);
  if (ctx.activeComp) masterParts.push(ctx.activeComp.prompt);
  if (ctx.activeCam) masterParts.push(ctx.activeCam.prompt);
  if (ctx.activeLens) masterParts.push(ctx.activeLens.prompt);
  if (ctx.activeLight) masterParts.push(ctx.activeLight.prompt);
  if (ctx.activeColor) masterParts.push(ctx.activeColor.prompt);
  if (ctx.activeStyle) masterParts.push(cleanBuzzwords(ctx.activeStyle.prompt));
  if (ctx.quickTags) masterParts.push(ctx.quickTags);
  if (state.identityLock) {
    masterParts.push('strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification');
  }
  const masterPrompt = masterParts.join(', ') + '.';

  sections.push({
    uiTag: '🎬 Мастер-промпт (Gemini Flash)',
    plainTag: 'Gemini Flash Master Prompt',
    val: masterPrompt
  });

  if (ctx.baseDescription) {
    sections.push({
      uiTag: '💡 Главный объект (Primary Subject)',
      plainTag: 'Primary Subject',
      val: ctx.baseDescription
    });
  }

  const settingParts = [];
  if (ctx.activeComp) settingParts.push(ctx.activeComp.prompt);
  if (ctx.quickTags) settingParts.push(ctx.quickTags);
  if (settingParts.length > 0) {
    sections.push({
      uiTag: '🌍 Окружение и сцена (Scene Setting)',
      plainTag: 'Scene Setting',
      val: settingParts.join(' | ')
    });
  }

  const opticsParts = [];
  if (ctx.activeCam) opticsParts.push(ctx.activeCam.prompt);
  if (ctx.activeLens) opticsParts.push(ctx.activeLens.prompt);
  if (opticsParts.length > 0) {
    sections.push({
      uiTag: '📷 Оптическая спецификация (Optical Specs)',
      plainTag: 'Optical Setup',
      val: opticsParts.join(', ')
    });
  }

  if (ctx.activeLight) {
    sections.push({
      uiTag: '💡 Схема света (Illumination & Ambience)',
      plainTag: 'Illumination',
      val: ctx.activeLight.prompt
    });
  }

  if (ctx.activeColor) {
    sections.push({
      uiTag: '🌈 Цветовая гармония (Color Harmony)',
      plainTag: 'Color Harmony',
      val: ctx.activeColor.prompt
    });
  }

  if (ctx.activeStyle) {
    sections.push({
      uiTag: '🎨 Арт-дирекшн (Art Direction & Style)',
      plainTag: 'Art Direction',
      val: ctx.activeStyle.prompt
    });
  }

  if (ctx.activeAspect) {
    sections.push({
      uiTag: '📐 Формат (Aspect Ratio)',
      plainTag: 'Aspect Ratio',
      val: `${ctx.activeAspect.id} (${ctx.activeAspect.ratioDesc})`
    });
  }

  if (state.identityLock) {
    sections.push({
      uiTag: '🔒 Фиксация лица (Identity Lock)',
      plainTag: 'Identity Lock',
      val: 'strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification'
    });
  }

  return { masterPrompt, sections };
}

function compileGptImage(ctx) {
  const sections = [];
  if (!ctx.baseDescription && !ctx.activeCam && !ctx.activeLens && !ctx.activeLight && !ctx.activeStyle && !ctx.activeComp && !ctx.activeColor) {
    return { masterPrompt: '', sections: [] };
  }

  const opticsParts = [];
  if (ctx.activeCam) opticsParts.push(ctx.activeCam.prompt);
  if (ctx.activeLens) opticsParts.push(ctx.activeLens.prompt);

  const masterParts = [];
  if (ctx.baseDescription) masterParts.push(ctx.baseDescription);
  if (ctx.activeComp) masterParts.push(ctx.activeComp.prompt);
  if (opticsParts.length > 0) masterParts.push(opticsParts.join(', '));
  if (ctx.activeLight) masterParts.push(ctx.activeLight.prompt);
  if (ctx.activeColor) masterParts.push(ctx.activeColor.prompt);
  if (ctx.activeStyle) masterParts.push(cleanBuzzwords(ctx.activeStyle.prompt));
  if (ctx.quickTags) masterParts.push(ctx.quickTags);
  if (state.identityLock) {
    masterParts.push('strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification');
  }
  const masterPrompt = masterParts.join(', ') + '.';

  sections.push({
    uiTag: '🎬 Мастер-промпт (GPT Image 2.5)',
    plainTag: 'GPT Image Master Prompt',
    val: masterPrompt
  });

  if (ctx.baseDescription) {
    sections.push({
      uiTag: '💡 Объект и нарратив (Subject & Narrative)',
      plainTag: 'Subject & Narrative',
      val: ctx.baseDescription
    });
  }

  if (opticsParts.length > 0) {
    sections.push({
      uiTag: '📷 Фотографическая оптика (Optics & Depth)',
      plainTag: 'Photographic Optics',
      val: opticsParts.join(', ') + ', authentic focal falloff and natural aperture rendering'
    });
  }

  if (ctx.activeLight) {
    sections.push({
      uiTag: '💡 Светотень (Lighting Architecture)',
      plainTag: 'Lighting & Shadows',
      val: ctx.activeLight.prompt
    });
  }

  if (ctx.activeComp) {
    sections.push({
      uiTag: '📐 Ракурс и кадрирование (Composition)',
      plainTag: 'Composition & Angle',
      val: ctx.activeComp.prompt
    });
  }

  if (ctx.activeColor) {
    sections.push({
      uiTag: '🌈 Цветовая гамма (Color Science)',
      plainTag: 'Color Grading',
      val: ctx.activeColor.prompt
    });
  }

  if (ctx.activeStyle) {
    const isPhotoStyle = ['photorealistic', 'editorial-fashion', 'minimalism', 'vintage-70s'].includes(ctx.activeStyle.id);
    const textureSuffix = isPhotoStyle ? ', natural organic textures, authentic skin pore fidelity, no plastic retouching' : '';
    sections.push({
      uiTag: '🎨 Эстетика и фактуры (Aesthetics & Textures)',
      plainTag: 'Aesthetics & Texture',
      val: cleanBuzzwords(ctx.activeStyle.prompt) + textureSuffix
    });
  }

  if (ctx.activeAspect) {
    sections.push({
      uiTag: '📐 Соотношение сторон (Aspect Ratio)',
      plainTag: 'Aspect Ratio',
      val: `${ctx.activeAspect.id} (${ctx.activeAspect.ratioDesc})`
    });
  }

  if (state.identityLock) {
    sections.push({
      uiTag: '🔒 Фиксация лица (Identity Lock)',
      plainTag: 'Identity Lock',
      val: 'strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification'
    });
  }

  return { masterPrompt, sections };
}

function compileImagineFrame(ctx) {
  const sections = [];
  if (!ctx.baseDescription && !ctx.activeCam && !ctx.activeLens && !ctx.activeLight && !ctx.activeStyle && !ctx.activeComp && !ctx.activeColor) {
    return { masterPrompt: '', sections: [] };
  }

  const frameParts = [];
  if (ctx.baseDescription) frameParts.push(`[Focus]: ${ctx.baseDescription}`);

  const realmParts = [];
  if (ctx.activeComp) realmParts.push(ctx.activeComp.prompt);
  if (ctx.quickTags) realmParts.push(`contextual elements: ${ctx.quickTags}`);
  if (realmParts.length > 0) frameParts.push(`[Realm]: ${realmParts.join(', ')}`);

  const angleParts = [];
  if (ctx.activeCam) angleParts.push(ctx.activeCam.prompt);
  if (ctx.activeLens) angleParts.push(ctx.activeLens.prompt);
  if (angleParts.length > 0) frameParts.push(`[Angle]: ${angleParts.join(', ')}`);

  const moodParts = [];
  if (ctx.activeLight) moodParts.push(ctx.activeLight.prompt);
  if (ctx.activeColor) moodParts.push(ctx.activeColor.prompt);
  if (moodParts.length > 0) frameParts.push(`[Mood]: ${moodParts.join(', ')}`);

  const execParts = [];
  if (ctx.activeStyle) execParts.push(cleanBuzzwords(ctx.activeStyle.prompt));
  if (ctx.activeAspect) execParts.push(`aspect ratio ${ctx.activeAspect.id}`);
  if (execParts.length > 0) frameParts.push(`[Execution]: ${execParts.join(', ')}`);

  if (state.identityLock) {
    frameParts.push('[Identity]: strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification');
  }

  const masterPrompt = frameParts.join('\n');

  sections.push({
    uiTag: '🎬 FRAME Спецификация (Grok Imagine)',
    plainTag: 'Grok Imagine FRAME',
    val: masterPrompt
  });

  if (ctx.baseDescription) {
    sections.push({
      uiTag: '🎯 [Focus] Объект съемки',
      plainTag: '[Focus]',
      val: ctx.baseDescription
    });
  }

  if (realmParts.length > 0) {
    sections.push({
      uiTag: '🌍 [Realm] Окружение и сцена',
      plainTag: '[Realm]',
      val: realmParts.join(', ')
    });
  }

  if (angleParts.length > 0) {
    sections.push({
      uiTag: '📐 [Angle] Ракурс и оптика',
      plainTag: '[Angle]',
      val: angleParts.join(', ')
    });
  }

  if (moodParts.length > 0) {
    sections.push({
      uiTag: '🌓 [Mood] Свет и колористика',
      plainTag: '[Mood]',
      val: moodParts.join(', ')
    });
  }

  if (execParts.length > 0) {
    sections.push({
      uiTag: '⚡ [Execution] Стиль и рендер',
      plainTag: '[Execution]',
      val: execParts.join(', ')
    });
  }

  if (state.identityLock) {
    sections.push({
      uiTag: '🔒 [Identity] Фиксация лица',
      plainTag: '[Identity]',
      val: 'strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification'
    });
  }

  return { masterPrompt, sections };
}

function compilePrompt() {
  const rawIdea = state.idea.trim();
  const baseDescription = translateRussianIdea(rawIdea);

  const activeCam = CAMERA_BODIES.find(c => c.id === state.selectedCamera);
  const activeLens = LENSES.find(l => l.id === state.selectedLens);
  const activeLight = LIGHTING.find(l => l.id === state.selectedLighting);
  const activeStyle = STYLES.find(s => s.id === state.selectedStyle);
  const activeComp = COMPOSITIONS.find(c => c.id === state.selectedComposition);
  const activeMotion = VIDEO_MOTIONS.find(m => m.id === state.selectedVideoMotion);
  const activeColor = COLOR_PALETTES.find(c => c.id === state.selectedColor);
  const activeAspect = ASPECT_RATIOS.find(a => a.id === state.selectedAspect);

  const quickTagPrompts = Array.from(state.activeQuickTags)
    .map(tagId => QUICK_TAGS.find(t => t.id === tagId)?.en)
    .filter(Boolean);

  const isVideoMode = state.mode === 'video';

  // Scene-aware sanitization: if the scene is architectural, interior, landscape, or inanimate,
  // ensure no stray character/body/street phrases bleed into camera or composition prompts.
  const combinedDesc = `${rawIdea} ${baseDescription}`.toLowerCase();
  const hasHumanCharacter = /\b(person|people|character|actor|actress|man|woman|child|portrait|worker|dancer|model|face|human|человек|персонаж|актер|мужчина|женщина|девушка|парень|лицо|портрет)\b/i.test(combinedDesc);
  const isInanimateOrArchitecture = /\b(loft|renovation|interior|room|furniture|architecture|building|apartment|house|timelapse|nature|landscape|mountain|forest|product|still life|интерьер|лофт|ремонт|квартира|комната|мебель|архитектура|здание|таймлапс|пейзаж)\b/i.test(combinedDesc);

  let cleanComp = activeComp;
  let cleanLens = activeLens;

  if (isInanimateOrArchitecture && !hasHumanCharacter) {
    if (cleanComp && cleanComp.prompt) {
      let p = cleanComp.prompt
        .replace(/,\s*(?:actor visible|character framed|focusing strictly on eye reflections|holster and hands visible|heroic staging)[^,]*/gi, '')
        .replace(/\bcharacter\b/gi, 'subject')
        .replace(/\bactor\b/gi, 'subject')
        .trim();
      cleanComp = { ...cleanComp, prompt: p };
    }
    if (cleanLens && cleanLens.prompt) {
      let p = cleanLens.prompt
        .replace(/,\s*(?:natural flattering human perspective|versatile everyday portraiture)[^,]*/gi, '')
        .replace(/\bhuman eye perspective\b/gi, 'natural balanced perspective')
        .trim();
      cleanLens = { ...cleanLens, prompt: p };
    }
  }

  const ctx = {
    rawIdea,
    baseDescription,
    activeCam,
    activeLens: cleanLens,
    activeLight,
    activeStyle,
    activeComp: cleanComp,
    activeMotion,
    activeColor,
    activeAspect,
    activeDur: CLIP_DURATIONS.find(d => d.id === state.selectedDuration),
    activeFps: CLIP_FRAMERATES.find(f => f.id === state.selectedFramerate),
    quickTags: quickTagPrompts.join(', '),
    isVideoMode
  };

  let compiledResult = { masterPrompt: '', sections: [] };
  const modelId = state.selectedModel;

  switch (modelId) {
    case 'imagen-3':
      compiledResult = compileImagen3(ctx);
      break;
    case 'veo-3.1':
      compiledResult = compileVeo31(ctx);
      break;
    case 'omni-1.1-flash':
      compiledResult = compileOmniFlash(ctx);
      break;
    case 'minimax-h3':
      compiledResult = compileMinimaxH3(ctx);
      break;
    case 'gemini-flash':
      compiledResult = compileGeminiFlash(ctx);
      break;
    case 'gpt-image-2.5':
      compiledResult = compileGptImage(ctx);
      break;
    case 'imagine-image-2':
      compiledResult = compileImagineFrame(ctx);
      break;
    default:
      compiledResult = compileImagen3(ctx);
      break;
  }

  const { masterPrompt, sections } = compiledResult;
  const hasContent = (masterPrompt && masterPrompt.trim().length > 0) || (sections && sections.length > 0);

  // Negative Prompt Assembly
  const negativeList = [];
  state.activeNegativeTags.forEach(tagId => {
    const item = NEGATIVE_QUICK_TAGS.find(n => n.id === tagId);
    if (item) negativeList.push(item.text);
  });
  if (state.customNegative.trim()) {
    negativeList.push(state.customNegative.trim());
  }
  const finalNegativeText = negativeList.join(', ');

  // Output formatting based on format toggle
  let plainPrompt = '';
  let htmlPrompt = '';

  if (state.promptFormat === 'master') {
    plainPrompt = masterPrompt || sections.map(s => `${s.plainTag}: ${s.val}`).join('\n');
    
    if (state.promptDisplayLang === 'ru') {
      const isCached = enToRuCache.has(masterPrompt);
      const ruText = isCached ? enToRuCache.get(masterPrompt) : '';
      htmlPrompt = `
        <div class="master-prompt-display">
          <div class="master-prompt-header-row">
            <div class="master-prompt-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ПЕРЕВОД ПРОМПТА НА РУССКИЙ (${modelId.toUpperCase()})
            </div>
            ${isCached 
              ? '<span class="mp-lang-badge-active">🇷🇺 РУССКИЙ ТЕКСТ</span>' 
              : '<span class="mp-translating-pill">⏳ Переводим на русский...</span>'}
          </div>
          <div class="master-prompt-content ${isCached ? 'ru-translated-content' : 'ru-translating'}" id="masterPromptContentBox">${escapeHtml(isCached ? ruText : masterPrompt)}</div>
        </div>
        <div class="master-prompt-meta-hint">
          💡 Отображается перевод на русский для проверки смысла. Для генерации в моделях используется английский оригинал (скопируйте кнопкой ниже или переключите на EN).
        </div>
      `;
    } else {
      const highlightedMaster = formatHighlightedMasterPrompt(masterPrompt, ctx);
      htmlPrompt = `
        <div class="master-prompt-display">
          <div class="master-prompt-header-row">
            <div class="master-prompt-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ГОТОВЫЙ РАБОЧИЙ ПРОМПТ (${modelId.toUpperCase()})
            </div>
            <div class="mp-legend-bar">
              <span class="mp-legend-pill" data-target="mp-seg-motion" title="Наведите, чтобы выделить ракурс и движение">🎥 Ракурс/Камера</span>
              <span class="mp-legend-pill" data-target="mp-seg-optics" title="Наведите, чтобы выделить оптику">📷 Оптика</span>
              <span class="mp-legend-pill" data-target="mp-seg-light" title="Наведите, чтобы выделить свет и колористику">💡 Свет</span>
              ${ctx.isVideoMode ? '<span class="mp-legend-pill" data-target="mp-seg-audio" title="Наведите, чтобы выделить аудио">🔊 Звук</span>' : ''}
              <span class="mp-legend-pill" data-target="mp-seg-spec" title="Наведите, чтобы выделить стиль и спецификацию">🎨 Стиль/Спек</span>
            </div>
          </div>
          <div class="master-prompt-content" id="masterPromptContentBox">${highlightedMaster}</div>
        </div>
        <div class="master-prompt-meta-hint">
          💡 Наведите на теги сверху для проверки структуры или нажмите «Скопировать готовый промпт».
        </div>
      `;
    }
  } else {
    plainPrompt = sections.map(s => `${s.plainTag}: ${s.val}`).join('\n');
    if (state.promptDisplayLang === 'ru') {
      const isCached = enToRuCache.has(plainPrompt);
      const ruPlain = isCached ? enToRuCache.get(plainPrompt) : '';
      htmlPrompt = `
        <div class="master-prompt-display">
          <div class="master-prompt-header-row">
            <div class="master-prompt-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              СТРУКТУРА ПРОМПТА НА РУССКОМ (${modelId.toUpperCase()})
            </div>
            ${isCached 
              ? '<span class="mp-lang-badge-active">🇷🇺 РУССКИЙ ТЕКСТ</span>' 
              : '<span class="mp-translating-pill">⏳ Переводим на русский...</span>'}
          </div>
          <div class="master-prompt-content ${isCached ? 'ru-translated-content' : 'ru-translating'}" id="masterPromptContentBox" style="white-space: pre-wrap;">${escapeHtml(isCached ? ruPlain : plainPrompt)}</div>
        </div>
      `;
    } else {
      htmlPrompt = sections.map(s => {
        let tagClass = 'prompt-tag';
        if (s.plainTag.startsWith('[')) tagClass += ' prompt-tag-frame';
        else if (s.plainTag.includes('Audio') || s.plainTag.includes('Sound')) tagClass += ' prompt-tag-audio';
        else if (s.plainTag.includes('Motion') || s.plainTag.includes('Dynamics')) tagClass += ' prompt-tag-motion';
        return `<div class="prompt-line"><span class="${tagClass}">${s.uiTag}:</span> <span class="prompt-val">${escapeHtml(s.val)}</span></div>`;
      }).join('');
    }
  }

  return {
    prompt: plainPrompt,
    masterPrompt: masterPrompt,
    html: htmlPrompt,
    negative: finalNegativeText,
    hasContent: hasContent
  };
}

function formatHighlightedMasterPrompt(text, ctx) {
  if (!text) return '';
  let html = escapeHtml(text);

  // А) БЛОЧНЫЕ МОДЕЛИ: MiniMax-H3 и Grok Imagine 2.0 (FRAME)
  // Проверяем любой из тегов (даже если [Focus] пустой и промпт начинается с [Realm]:)
  if (/\[(Core Concept|Temporal Progression|Cinematography &amp; Atmosphere|Focus|Realm|Angle|Mood|Execution)\]:/.test(html)) {
    const sectionMap = {
      'Core Concept': { cls: 'mp-seg-subject', label: 'Концепт и сцена' },
      'Temporal Progression': { cls: 'mp-seg-motion', label: 'Таймлайн и движение камеры' },
      'Cinematography &amp; Atmosphere': { cls: 'mp-seg-optics', label: 'Оптика и камера' },
      'Scene Elements': { cls: 'mp-seg-light', label: 'Элементы сцены' },
      'Audio Environment': { cls: 'mp-seg-audio', label: 'Нативный звук 32kHz' },
      'Constraints': { cls: 'mp-seg-spec', label: 'Тех. ограничения' },
      'Focus': { cls: 'mp-seg-subject', label: 'Объект съемки' },
      'Realm': { cls: 'mp-seg-motion', label: 'Ракурс и пространство [Realm]' },
      'Angle': { cls: 'mp-seg-optics', label: 'Камера и оптика [Angle]' },
      'Mood': { cls: 'mp-seg-light', label: 'Свет и колористика [Mood]' },
      'Execution': { cls: 'mp-seg-spec', label: 'Стиль и формат [Execution]' }
    };

    const tagRegex = /\[(Core Concept|Temporal Progression|Cinematography &amp; Atmosphere|Scene Elements|Audio Environment|Constraints|Focus|Realm|Angle|Mood|Execution)\]:/g;
    const matches = [...html.matchAll(tagRegex)];

    if (matches.length > 0) {
      let resultHtml = '';
      let lastIdx = 0;

      for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        const tagName = match[1];
        const startIdx = match.index;
        const endIdx = (i + 1 < matches.length) ? matches[i + 1].index : html.length;

        if (startIdx > lastIdx) resultHtml += html.slice(lastIdx, startIdx);

        let chunk = html.slice(startIdx, endIdx).trim();
        const cfg = sectionMap[tagName] || { cls: 'mp-seg-subject', label: tagName };

        if (tagName === 'Cinematography &amp; Atmosphere' && ctx) {
          if (ctx.activeComp?.prompt) {
            const escComp = escapeHtml(ctx.activeComp.prompt);
            if (escComp && chunk.includes(escComp)) {
              chunk = chunk.replace(escComp, `</span><span class="mp-seg mp-seg-motion" data-seg="mp-seg-motion" title="Ракурс и композиция">${escComp}</span><span class="mp-seg mp-seg-optics" data-seg="mp-seg-optics" title="Оптика и камера">`);
            }
          }
          [ctx.activeLight?.prompt, ctx.activeColor?.prompt].filter(Boolean).forEach(p => {
            const esc = escapeHtml(p);
            if (esc && chunk.includes(esc)) {
              chunk = chunk.replace(esc, `</span><span class="mp-seg mp-seg-light" data-seg="mp-seg-light" title="Свет и атмосфера">${esc}</span><span class="mp-seg mp-seg-optics" data-seg="mp-seg-optics" title="Оптика и камера">`);
            }
          });
          const cleanStyle = ctx.activeStyle ? cleanBuzzwords(ctx.activeStyle.prompt) : '';
          if (cleanStyle) {
            const escStyle = escapeHtml(cleanStyle);
            if (escStyle && chunk.includes(escStyle)) {
              chunk = chunk.replace(escStyle, `</span><span class="mp-seg mp-seg-spec" data-seg="mp-seg-spec" title="Стиль и текстуры">${escStyle}</span><span class="mp-seg mp-seg-optics" data-seg="mp-seg-optics" title="Оптика и камера">`);
            }
          }
        }

        resultHtml += `<span class="mp-seg ${cfg.cls}" data-seg="${cfg.cls}" title="${cfg.label}">${chunk}</span> `;
        lastIdx = endIdx;
      }
      return resultHtml.trim();
    }
  }

  // Б) ВИДЕО-НАРРАТИВЫ: Veo 3.1 и Omni 1.1 Flash
  if (html.includes('continuous, unbroken') || html.includes('Continuous, unbroken shot')) {
    const narrativeRules = [
      {
        regex: /(A continuous, unbroken \d+s cinematic shot \([^)]+\)(?:\s+of\s+[^.]+)?\.|Continuous, unbroken shot in a single continuous take with no scene cuts \([^)]+\)\.)/gi,
        cls: 'mp-seg-motion',
        label: 'Формат плана и ракурс'
      },
      {
        regex: /(The camera (?:performs|executes|maintains)[\s\S]*?(?:at 24fps\.|(?=\s+(?:Optics &amp; Camera:|Filmed on|Cinematography and atmosphere:|Lighting and visual atmosphere:|Audio:|Sound design:))))/gi,
        cls: 'mp-seg-motion',
        label: 'Движение камеры'
      },
      {
        regex: /((?:Optics &amp; Camera:|Filmed on)[\s\S]*?focal depth\.)/gi,
        cls: 'mp-seg-optics',
        label: 'Камера и объектив'
      },
      {
        regex: /((?:Lighting and visual atmosphere:|Cinematography and atmosphere:)[\s\S]*?)(?=\s+(?:Contextual details:|Scene elements:|Consider micro-detail|Audio:|Sound design:|Strict 1:1|$))/gi,
        cls: 'mp-seg-light',
        label: 'Свет и атмосфера'
      },
      {
        regex: /(Strict 1:1 facial identity lock[\s\S]*?locked garment typography(?: \([^)]+\))?\.?)/gi,
        cls: 'mp-seg-subject',
        label: 'Фиксация лица Identity Lock'
      },
      {
        regex: /(Consider micro-detail[\s\S]*?cohesive scene\.)/gi,
        cls: 'mp-seg-spec',
        label: 'Директива детализации'
      },
      {
        regex: /((?:Audio|Sound design):[\s\S]*?)(?=\s+(?:1080p crisp master|No dialogue\.\s*No scene cuts)|$)/gi,
        cls: 'mp-seg-audio',
        label: 'Саунд-дизайн'
      },
      {
        regex: /((?:1080p crisp master|No dialogue\.\s*No scene cuts)[\s\S]*$)/gi,
        cls: 'mp-seg-spec',
        label: 'Тех. контроль и мастер'
      }
    ];

    narrativeRules.forEach(r => {
      html = html.replace(r.regex, `<span class="mp-seg ${r.cls}" data-seg="${r.cls}" title="${r.label}">$1</span>`);
    });
  }

  // В) ТОЧЕЧНАЯ ПОДСВЕТКА ВСЕХ КОМПОНЕНТОВ (для Imagen 3, Gemini 2.5 Flash, GPT Image 2.5 и остатков в Omni 1.1)
  if (ctx) {
    const cleanStylePrompt = ctx.activeStyle ? cleanBuzzwords(ctx.activeStyle.prompt) : '';
    const partsToHighlight = [
      // Фиксация лица -> Синий (🔒 Identity Lock)
      { text: IDENTITY_LOCK_DIRECTIVE, cls: 'mp-seg-subject', label: 'Фиксация лица Identity Lock' },
      { text: 'strict 1:1 facial identity lock to reference, preserving exact eye shape, nose geometry, and natural skin/beard texture without AI beautification', cls: 'mp-seg-subject', label: 'Фиксация лица Identity Lock' },
      // Ракурс и композиция -> Желтый (🎥 Камера/Ракурс)
      { text: ctx.activeComp?.prompt, cls: 'mp-seg-motion', label: 'Ракурс и композиция' },
      // Камера и объектив -> Голубой (📷 Оптика)
      { text: ctx.activeCam?.prompt ? `${ctx.activeCam.prompt}${ctx.activeLens ? ', ' + ctx.activeLens.prompt : ''} with authentic optical focal depth` : '', cls: 'mp-seg-optics', label: 'Оптика и сенсор' },
      { text: ctx.activeCam?.prompt, cls: 'mp-seg-optics', label: 'Камера' },
      { text: ctx.activeLens?.prompt, cls: 'mp-seg-optics', label: 'Объектив' },
      // Свет и цвет -> Фиолетовый (💡 Свет)
      { text: ctx.activeLight?.prompt, cls: 'mp-seg-light', label: 'Освещение' },
      { text: ctx.activeColor?.prompt, cls: 'mp-seg-light', label: 'Цветовая палитра' },
      // Стиль и формат -> Розовый (🎨 Стиль / Спек)
      { text: cleanStylePrompt ? `${cleanStylePrompt}${ctx.activeAspect ? ', aspect ratio ' + ctx.activeAspect.id : ''}` : '', cls: 'mp-seg-spec', label: 'Стиль и формат' },
      { text: cleanStylePrompt, cls: 'mp-seg-spec', label: 'Стиль и текстуры' },
      { text: ctx.activeStyle?.prompt, cls: 'mp-seg-spec', label: 'Стиль' },
      { text: ctx.activeAspect ? `aspect ratio ${ctx.activeAspect.id}` : '', cls: 'mp-seg-spec', label: 'Формат кадра' }
    ];

    partsToHighlight.forEach(item => {
      if (!item.text) return;
      const esc = escapeHtml(item.text);
      // Оборачиваем только если этот фрагмент еще не внутри span
      const safeRegex = new RegExp(`(?![^<]*>)(?<!\\w)(${esc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![^<]*<\\/span>)`, 'g');
      html = html.replace(safeRegex, `<span class="mp-seg ${item.cls}" data-seg="${item.cls}" title="${item.label}">$1</span>`);
    });
  }

  // Гарантированная подсветка IDENTITY_LOCK_DIRECTIVE если осталась без спана
  const escIdentity = escapeHtml(IDENTITY_LOCK_DIRECTIVE);
  if (escIdentity && html.includes(escIdentity)) {
    const safeRegex = new RegExp(`(?![^<]*>)(?<!\\w)(${escIdentity.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![^<]*<\\/span>)`, 'g');
    html = html.replace(safeRegex, `<span class="mp-seg mp-seg-subject" data-seg="mp-seg-subject" title="Фиксация лица Identity Lock">$1</span>`);
  }

  return html;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function calculateStrength(promptText) {
  if (!promptText || promptText.length < 5) return 0;
  let score = 0;
  if (state.idea.trim().length > 5) score += 25;
  if (state.idea.trim().length > 30) score += 15;
  if (state.activeQuickTags.size > 0) score += 10;
  if (state.selectedCamera) score += 10;
  if (state.selectedLens) score += 10;
  if (state.selectedLighting) score += 10;
  if (state.selectedStyle) score += 10;
  if (state.selectedComposition) score += 5;
  if (state.selectedColor) score += 5;
  return Math.min(score, 100);
}

function releaseCustomDirectorPrompt() {
  if (state.customDirectorPrompt) {
    state.customDirectorPrompt = '';
  }
  if (state.activeSnapshotId) {
    state.activeSnapshotId = null;
    renderSnapshots();
  }
}

function updateLivePrompt() {
  const currentModel = AI_MODELS.find(m => m.id === state.selectedModel) || AI_MODELS[0];

  if (el.terminalModelBadge) {
    el.terminalModelBadge.innerHTML = `
      <span class="terminal-model-logo">${currentModel.logoSvg}</span>
      <span class="terminal-model-name">${currentModel.displayName || currentModel.name}</span>
    `;
  }

  // If we have an AI-deconstructed Director Prompt from Gemini Vision / Demo and user is in Master format
  if (state.customDirectorPrompt && state.promptFormat === 'master') {
    let directorContent = state.customDirectorPrompt;
    let badgeHtml = '';
    if (state.promptDisplayLang === 'ru') {
      const isCached = enToRuCache.has(state.customDirectorPrompt);
      if (isCached) {
        directorContent = enToRuCache.get(state.customDirectorPrompt);
        badgeHtml = '<span class="mp-lang-badge-active">🇷🇺 РУССКИЙ ТЕКСТ</span>';
      } else {
        badgeHtml = '<span class="mp-translating-pill">⏳ Переводим на русский...</span>';
        if (promptRuTranslateDebounce) clearTimeout(promptRuTranslateDebounce);
        promptRuTranslateDebounce = setTimeout(async () => {
          const ru = await fetchEnglishToRussian(state.customDirectorPrompt);
          if (ru && state.promptDisplayLang === 'ru') updateLivePrompt();
        }, 80);
      }
    }

    const htmlPrompt = `
      <div class="master-prompt-display">
        <div class="master-prompt-header-row">
          <div class="master-prompt-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>AI REVERSE DIRECTOR MASTER PROMPT</span>
          </div>
          ${badgeHtml}
        </div>
        <div class="master-prompt-content ${state.promptDisplayLang === 'ru' ? 'ru-translated-content' : ''}">${escapeHtml(directorContent)}</div>
      </div>
      <div class="master-prompt-meta-hint" style="margin-top: 8px; font-size: 0.73rem; color: #a1a1aa; line-height: 1.4;">
        🎬 Промпт зафиксирован из деконструкции видео. Нажмите <b>«Улучшить с AI»</b> или измените параметры в конструкторе, чтобы переключиться на живой редактируемый режим.
      </div>
    `;
    el.finalPromptDisplay.innerHTML = htmlPrompt;
    el.resultCharCount.textContent = `${state.customDirectorPrompt.length} симв.`;
    if (el.negativePromptDisplay) el.negativePromptDisplay.style.display = 'none';

    el.strengthText.textContent = `Сила 100%`;
    const strengthDot = el.strengthPill ? el.strengthPill.querySelector('.strength-dot') : null;
    if (el.strengthPill) {
      el.strengthPill.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      el.strengthPill.style.background = 'rgba(16, 185, 129, 0.1)';
      el.strengthPill.style.color = '#34d399';
    }
    if (strengthDot) strengthDot.style.background = '#34d399';

    if (el.hintTitle) el.hintTitle.textContent = currentModel.tipTitle;
    if (el.hintDesc) el.hintDesc.textContent = currentModel.tipDesc;
    return;
  }

  const compiled = compilePrompt();

  if (compiled.hasContent) {
    el.finalPromptDisplay.innerHTML = compiled.html;
    el.resultCharCount.textContent = `${compiled.prompt.length} симв.`;

    // Asynchronously translate to Russian if RU mode is selected and not cached
    if (state.promptDisplayLang === 'ru') {
      const textToTranslate = state.promptFormat === 'master' ? compiled.masterPrompt : compiled.prompt;
      if (textToTranslate && !enToRuCache.has(textToTranslate)) {
        if (promptRuTranslateDebounce) clearTimeout(promptRuTranslateDebounce);
        promptRuTranslateDebounce = setTimeout(async () => {
          const ru = await fetchEnglishToRussian(textToTranslate);
          if (ru && state.promptDisplayLang === 'ru') {
            updateLivePrompt();
          }
        }, 80);
      }
    }
  } else {
    el.finalPromptDisplay.innerHTML = `<span class="placeholder-text">Заполните идею или выберите параметры слева для сборки промпта...</span>`;
    el.resultCharCount.textContent = `0 симв.`;
  }

  // Negative prompt display
  if (compiled.negative) {
    el.negativePromptDisplay.style.display = 'block';
    el.negativePromptText.textContent = compiled.negative;
  } else {
    el.negativePromptDisplay.style.display = 'none';
  }

  // Calculate Strength
  const strength = calculateStrength(compiled.prompt);
  el.strengthText.textContent = `Сила ${strength}%`;

  const strengthDot = el.strengthPill ? el.strengthPill.querySelector('.strength-dot') : null;
  if (strength >= 80) {
    el.strengthPill.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    el.strengthPill.style.background = 'rgba(16, 185, 129, 0.1)';
    el.strengthPill.style.color = '#34d399';
    if (strengthDot) strengthDot.style.background = '#34d399';
  } else if (strength >= 40) {
    el.strengthPill.style.borderColor = 'rgba(245, 158, 11, 0.4)';
    el.strengthPill.style.background = 'rgba(245, 158, 11, 0.1)';
    el.strengthPill.style.color = '#fbbf24';
    if (strengthDot) strengthDot.style.background = '#fbbf24';
  } else {
    el.strengthPill.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    el.strengthPill.style.background = 'transparent';
    el.strengthPill.style.color = '#94a3b8';
    if (strengthDot) strengthDot.style.background = '#64748b';
  }

  // Update Model Hint Card
  el.hintTitle.textContent = currentModel.tipTitle;
  el.hintDesc.textContent = currentModel.tipDesc;
}

// --- EVENT LISTENERS ---

function attachEventListeners() {
  // Mode Switcher
  el.modeImageBtn.addEventListener('click', () => setMode('image'));
  el.modeVideoBtn.addEventListener('click', () => setMode('video'));

  // Idea Input
  el.ideaInput.addEventListener('input', (e) => {
    state.idea = e.target.value;
    el.charCounter.textContent = `${state.idea.length} / 500`;
    scheduleOnlineTranslation(state.idea);
    releaseCustomDirectorPrompt();
    updateLivePrompt();
  });

  // Random Idea Button
  el.randomIdeaBtn.addEventListener('click', handleRandomIdea);

  // AI Enhance Button
  el.aiEnhanceBtn.addEventListener('click', handleAiEnhance);

  // Quick Tags
  if (el.quickTagsCloud) {
    el.quickTagsCloud.addEventListener('click', (e) => {
      const chip = e.target.closest('.tag-chip');
      if (!chip || chip.dataset.disabled === 'true' || chip.classList.contains('disabled-tag')) return;
      const tagId = chip.dataset.tag;
      if (state.activeQuickTags.has(tagId)) {
        state.activeQuickTags.delete(tagId);
        chip.classList.remove('active');
      } else {
        state.activeQuickTags.add(tagId);
        chip.classList.add('active');
      }
      releaseCustomDirectorPrompt();
      updateLivePrompt();
    });
  }

  // Presets
  if (el.presetButtonsContainer) {
    el.presetButtonsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.preset-btn');
      if (!btn) return;
      const idx = parseInt(btn.dataset.presetIdx, 10);
      applyPreset(PRESET_RECIPES[idx]);
    });
  }

  // Snapshots Bar Listeners
  if (el.identityLockBtn) {
    el.identityLockBtn.addEventListener('click', () => {
      state.identityLock = !state.identityLock;
      el.identityLockBtn.classList.toggle('active', state.identityLock);
      el.identityLockBtn.textContent = `🔒 Identity Lock: ${state.identityLock ? 'ВКЛ' : 'ВЫКЛ'}`;
      releaseCustomDirectorPrompt();
      updateLivePrompt();
      showToast(state.identityLock ? 'Фиксация лица (Identity Lock) ВКЛЮЧЕНА!' : 'Фиксация лица отключена', '🔒');
    });
  }

  if (el.saveSnapshotBtn) {
    el.saveSnapshotBtn.addEventListener('click', saveCurrentSnapshot);
  }
  if (el.snapshotsChipsContainer) {
    el.snapshotsChipsContainer.addEventListener('click', (e) => {
      const delBtn = e.target.closest('.snapshot-del-btn');
      if (delBtn) {
        e.stopPropagation();
        deleteSnapshot(delBtn.dataset.snapDel);
        return;
      }
      const chip = e.target.closest('.snapshot-chip');
      if (chip) {
        applySnapshot(chip.dataset.snapId);
      }
    });
  }

  // --- CUSTOM SELECTS MANAGEMENT (CAMERA, LENS, LIGHTING, STYLE, COMPOSITION, VIDEO MOTION, DURATION, FRAMERATE, COLOR) ---
  let activeCustomSelect = null;

  function closeAllCustomSelects() {
    activeCustomSelect = null;
    const selects = [
      { list: el.cameraOptionsList, val: el.cameraSelectedVal },
      { list: el.lensOptionsList, val: el.lensSelectedVal },
      { list: el.lightingOptionsList, val: el.lightingSelectedVal },
      { list: el.styleOptionsList, val: el.styleSelectedVal },
      { list: el.compositionOptionsList, val: el.compositionSelectedVal },
      { list: el.videoMotionOptionsList, val: el.videoMotionSelectedVal },
      { list: el.durationOptionsList, val: el.durationSelectedVal },
      { list: el.framerateOptionsList, val: el.framerateSelectedVal },
      { list: el.colorOptionsList, val: el.colorSelectedVal },
      { list: el.aspectOptionsList, val: el.aspectSelectedVal }
    ];
    selects.forEach(s => {
      if (s.list) s.list.classList.remove('select-open');
      if (s.val) {
        s.val.classList.remove('select-arrow-active');
        const parentCS = s.val.closest('.custom-select');
        if (parentCS) parentCS.classList.remove('select-open-parent');
        const parentCol = s.val.closest('.inline-select-col');
        if (parentCol) parentCol.classList.remove('select-open-col');
        const parentRow = s.val.closest('.inline-select-row');
        if (parentRow) parentRow.classList.remove('select-open-row');
        const parentAccordion = s.val.closest('.accordion-item');
        if (parentAccordion) parentAccordion.classList.remove('select-open-accordion');
      }
    });
  }

  function positionMultiColDropdown(listEl, valEl) {
    if (!listEl || !valEl) return;
    const moduleCard = valEl.closest('.panel-card') || valEl.closest('.accordion-item') || valEl.closest('.inline-selects-row');
    const moduleRect = moduleCard ? moduleCard.getBoundingClientRect() : valEl.getBoundingClientRect();

    // Ideal snug width based on number of columns (snug ~230-245px per column, fully visible text, no voids)
    let idealWidth = 760;
    let estimatedHeight = 330;

    if (
      listEl === el.cameraOptionsList ||
      listEl === el.lensOptionsList
    ) {
      idealWidth = 860; // 3 columns x ~275px
      estimatedHeight = 330;
    } else if (
      listEl === el.lightingOptionsList ||
      listEl === el.styleOptionsList
    ) {
      idealWidth = 760; // 3 columns x ~245px
      estimatedHeight = 330;
    } else if (listEl === el.compositionOptionsList) {
      idealWidth = 1040; // 4 columns x ~255px
      estimatedHeight = 330;
    } else if (listEl === el.videoMotionOptionsList) {
      idealWidth = 1120; // 5 columns x ~218px
      estimatedHeight = 460;
    }

    // Fit inside the module and viewport
    const maxAllowedWidth = Math.min(moduleRect.width - 20, window.innerWidth - 32);
    const dropdownWidth = Math.min(idealWidth, maxAllowedWidth);

    // Center horizontally inside the module "ПАРАМЕТРЫ ГЕНЕРАЦИИ"
    let leftPos = moduleRect.left + (moduleRect.width - dropdownWidth) / 2;

    // Safety clamp to window boundaries
    if (leftPos + dropdownWidth > window.innerWidth - 16) {
      leftPos = window.innerWidth - 16 - dropdownWidth;
    }
    if (leftPos < 16) {
      leftPos = 16;
    }

    listEl.style.left = `${Math.round(leftPos)}px`;
    listEl.style.right = 'auto';
    listEl.style.width = `${Math.round(dropdownWidth)}px`;
    listEl.style.maxWidth = `${Math.round(dropdownWidth)}px`;
    listEl.style.minWidth = '0px';

    const rect = valEl.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    if (spaceBelow < estimatedHeight && rect.top > estimatedHeight) {
      listEl.style.top = 'auto';
      listEl.style.bottom = `${Math.max(16, window.innerHeight - rect.top + 6)}px`;
    } else {
      listEl.style.top = `${Math.max(68, rect.bottom + 6)}px`;
      listEl.style.bottom = 'auto';
    }
  }

  function handleCustomSelectScroll() {
    if (!activeCustomSelect) return;
    const { listEl, valEl, isMultiCol } = activeCustomSelect;
    if (!listEl || !listEl.classList.contains('select-open')) {
      activeCustomSelect = null;
      return;
    }

    const rect = valEl.getBoundingClientRect();
    const scrollParent = valEl.closest('.scrollable-card') || valEl.closest('.panel-card');

    // If trigger button scrolled out of visible view of the card or off-screen, close cleanly
    if (scrollParent) {
      const parentRect = scrollParent.getBoundingClientRect();
      if (rect.bottom < parentRect.top + 36 || rect.top > parentRect.bottom - 20) {
        closeAllCustomSelects();
        return;
      }
    } else {
      if (rect.bottom < 40 || rect.top > window.innerHeight - 20) {
        closeAllCustomSelects();
        return;
      }
    }

    if (isMultiCol) {
      positionMultiColDropdown(listEl, valEl);
    }
  }

  function toggleCustomSelect(listEl, valEl) {
    if (!listEl || !valEl) return;
    const wasOpen = listEl.classList.contains('select-open');
    closeAllCustomSelects();
    if (!wasOpen) {
      const isMultiCol = (
        listEl === el.cameraOptionsList ||
        listEl === el.lensOptionsList ||
        listEl === el.lightingOptionsList ||
        listEl === el.styleOptionsList ||
        listEl === el.compositionOptionsList ||
        listEl === el.videoMotionOptionsList
      );

      if (isMultiCol) {
        positionMultiColDropdown(listEl, valEl);
      }

      listEl.classList.add('select-open');
      valEl.classList.add('select-arrow-active');
      activeCustomSelect = { listEl, valEl, isMultiCol };

      const parentCS = valEl.closest('.custom-select');
      if (parentCS) parentCS.classList.add('select-open-parent');
      const parentCol = valEl.closest('.inline-select-col');
      if (parentCol) parentCol.classList.add('select-open-col');
      const parentRow = valEl.closest('.inline-select-row');
      if (parentRow) parentRow.classList.add('select-open-row');
      const parentAccordion = valEl.closest('.accordion-item');
      if (parentAccordion) parentAccordion.classList.add('select-open-accordion');
    }
  }

  // 1. Camera Select
  if (el.cameraSelectedVal) {
    el.cameraSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.cameraOptionsList, el.cameraSelectedVal);
    });
  }
  if (el.cameraOptionsList) {
    el.cameraOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedCamera = item.dataset.camId;
      releaseCustomDirectorPrompt();
      renderCameraOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });
  }

  // 2. Lens Select
  if (el.lensSelectedVal) {
    el.lensSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.lensOptionsList, el.lensSelectedVal);
    });
  }
  if (el.lensOptionsList) {
    el.lensOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedLens = item.dataset.lensId;
      releaseCustomDirectorPrompt();
      renderLensOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });
  }

  // 3. Lighting Select
  if (el.lightingSelectedVal) {
    el.lightingSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.lightingOptionsList, el.lightingSelectedVal);
    });
  }
  if (el.lightingOptionsList) {
    el.lightingOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedLighting = item.dataset.lightingId;
      releaseCustomDirectorPrompt();
      renderLightingOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });
  }

  // 4. Style Select
  if (el.styleSelectedVal) {
    el.styleSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.styleOptionsList, el.styleSelectedVal);
    });
  }
  if (el.styleOptionsList) {
    el.styleOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedStyle = item.dataset.styleId;
      releaseCustomDirectorPrompt();
      renderStyleOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });
  }

  // 5. Composition Select
  if (el.compositionSelectedVal) {
    el.compositionSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.compositionOptionsList, el.compositionSelectedVal);
    });
  }
  if (el.compositionOptionsList) {
    el.compositionOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedComposition = item.dataset.compId;
      releaseCustomDirectorPrompt();
      renderCompositionOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });
  }

  // 6. Video Motion Select
  if (el.videoMotionSelectedVal) {
    el.videoMotionSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.videoMotionOptionsList, el.videoMotionSelectedVal);
    });
    el.videoMotionSelectedVal.addEventListener('mouseenter', () => {
      const vid = el.videoMotionSelectedVal.querySelector('.motion-preview-video');
      if (vid && vid.paused) {
        vid.play().catch(() => {});
      }
    });
  }
  if (el.videoMotionOptionsList) {
    el.videoMotionOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedVideoMotion = item.dataset.motionId;
      releaseCustomDirectorPrompt();
      renderVideoMotionOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });

    el.videoMotionOptionsList.addEventListener('mouseover', (e) => {
      const item = e.target.closest('.select-item');
      if (!item) return;

      const tooltip = item.querySelector('.lens-tooltip-content');
      if (tooltip) {
        const itemRect = item.getBoundingClientRect();
        const listRect = el.videoMotionOptionsList.getBoundingClientRect();
        const spaceBelow = listRect.bottom - itemRect.bottom;
        const spaceAbove = itemRect.top - listRect.top;
        if (spaceBelow < 280 && spaceAbove > spaceBelow) {
          tooltip.classList.add('tooltip-up');
          tooltip.classList.remove('tooltip-down');
        } else {
          tooltip.classList.add('tooltip-down');
          tooltip.classList.remove('tooltip-up');
        }
      }

      const vid = item.querySelector('.motion-preview-video');
      if (vid && vid.paused) {
        vid.play().catch(() => {});
      }
    });

    el.videoMotionOptionsList.addEventListener('mouseout', (e) => {
      const item = e.target.closest('.select-item');
      if (!item) return;
      const toEl = e.relatedTarget;
      if (toEl && item.contains(toEl)) return;
      const vid = item.querySelector('.motion-preview-video');
      if (vid && !vid.paused) {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }

  // 7. Video Duration Select
  if (el.durationSelectedVal) {
    el.durationSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.durationOptionsList, el.durationSelectedVal);
    });
  }
  if (el.durationOptionsList) {
    el.durationOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedDuration = item.dataset.durationId;
      releaseCustomDirectorPrompt();
      renderDurationOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });
  }

  // 8. Video Framerate Select
  if (el.framerateSelectedVal) {
    el.framerateSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.framerateOptionsList, el.framerateSelectedVal);
    });
  }
  if (el.framerateOptionsList) {
    el.framerateOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedFramerate = item.dataset.framerateId;
      releaseCustomDirectorPrompt();
      renderFramerateOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });
  }

  // 9. Color Palette Select
  if (el.colorSelectedVal) {
    el.colorSelectedVal.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) return;
      e.stopPropagation();
      toggleCustomSelect(el.colorOptionsList, el.colorSelectedVal);
    });
  }
  if (el.colorOptionsList) {
    el.colorOptionsList.addEventListener('click', (e) => {
      if (e.target.closest('.lens-info-icon')) {
        e.stopPropagation();
        return;
      }
      const item = e.target.closest('.select-item');
      if (!item) return;
      state.selectedColor = item.dataset.colorId;
      releaseCustomDirectorPrompt();
      renderColorOptions();
      closeAllCustomSelects();
      updateLivePrompt();
    });
  }

  // Close any select on document click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select') && !e.target.closest('#videoMotionOptionsList')) {
      closeAllCustomSelects();
    }
  });

  // Dynamic repositioning and smart auto-close on scroll/resize across entire window/containers
  let scrollTicking = false;
  function onScrollOrResize() {
    if (!activeCustomSelect) return;
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        handleCustomSelectScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  window.addEventListener('scroll', onScrollOrResize, true);
  window.addEventListener('resize', onScrollOrResize);

  // Prevent background wheel scroll when mouse is over a mega-dropdown that fits without scrollbars
  [
    el.cameraOptionsList,
    el.lensOptionsList,
    el.lightingOptionsList,
    el.styleOptionsList,
    el.compositionOptionsList
  ].forEach(list => {
    if (!list) return;
    list.addEventListener('wheel', (e) => {
      // If the list itself has no vertical scrollbar, prevent wheel from scrolling the background
      if (list.scrollHeight <= list.clientHeight + 6) {
        e.preventDefault();
      }
    }, { passive: false });
  });

  // Accordion Expand / Collapse
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      item.classList.toggle('open');
    });
  });

  // Chips click handlers (Lighting, Style, Composition, Motion, Color)
  document.addEventListener('click', (e) => {
    const chip = e.target.closest('.param-chip');
    if (!chip) return;
    const param = chip.dataset.param;
    const val = chip.dataset.val;

    if (param === 'lighting') state.selectedLighting = val;
    if (param === 'style') state.selectedStyle = val;
    if (param === 'composition') state.selectedComposition = val;
    if (param === 'motion') state.selectedVideoMotion = val;
    if (param === 'color') state.selectedColor = val;

    // Refresh active chips in grid
    const parent = chip.parentElement;
    parent.querySelectorAll('.param-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    releaseCustomDirectorPrompt();
    updateLivePrompt();
  });

  // Aspect Ratio (Dropdown Select)
  if (el.aspectSelectedVal) {
    el.aspectSelectedVal.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCustomSelect(el.aspectOptionsList, el.aspectSelectedVal);
    });
  }

  if (el.aspectOptionsList) {
    el.aspectOptionsList.addEventListener('click', (e) => {
      const item = e.target.closest('.select-item');
      if (!item || item.dataset.disabled === 'true' || item.classList.contains('disabled-item')) return;
      const ratio = item.dataset.ratio;
      state.selectedAspect = ratio;
      renderAspectRatios();
      closeAllCustomSelects();
      releaseCustomDirectorPrompt();
      updateLivePrompt();
    });
  }

  // Fallback for button container if exists
  if (el.aspectRatioContainer) {
    el.aspectRatioContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.aspect-btn');
      if (!btn || btn.dataset.disabled === 'true' || btn.classList.contains('disabled-tag')) return;
      const ratio = btn.dataset.ratio;
      state.selectedAspect = ratio;
      renderAspectRatios();
      releaseCustomDirectorPrompt();
      updateLivePrompt();
    });
  }

  // Negative Tags
  el.negativeTagsContainer.addEventListener('click', (e) => {
    const tag = e.target.closest('.neg-tag');
    if (!tag) return;
    const negId = tag.dataset.neg;
    if (state.activeNegativeTags.has(negId)) {
      state.activeNegativeTags.delete(negId);
      tag.classList.remove('active');
    } else {
      state.activeNegativeTags.add(negId);
      tag.classList.add('active');
    }
    releaseCustomDirectorPrompt();
    updateLivePrompt();
  });

  el.negativeCustomInput.addEventListener('input', (e) => {
    state.customNegative = e.target.value;
    releaseCustomDirectorPrompt();
    updateLivePrompt();
  });

  // Model Grid Cards
  el.modelsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.model-card');
    if (!card || card.dataset.disabled === 'true' || card.classList.contains('disabled-model')) return;
    el.modelsGrid.querySelectorAll('.model-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    state.selectedModel = card.dataset.modelId;
    if (el.skillModelSelect) {
      el.skillModelSelect.value = state.selectedModel;
    }
    updateSkillManagerUI(state.selectedModel);
    releaseCustomDirectorPrompt();
    updateLivePrompt();
  });

  // Action Buttons
  if (el.copyPromptBtn) el.copyPromptBtn.addEventListener('click', copyPromptToClipboard);
  if (el.quickCopyBtn) el.quickCopyBtn.addEventListener('click', copyPromptToClipboard);
  if (el.resetBtn) el.resetBtn.addEventListener('click', handleResetAll);
  if (el.clearAllBtn) el.clearAllBtn.addEventListener('click', handleResetAll);

  // Language Switcher Dropdown (EN / РУ)
  if (el.promptLangSelect) {
    el.promptLangSelect.addEventListener('change', (e) => {
      state.promptDisplayLang = e.target.value;
      updateLivePrompt();
    });
  }

  // Format Switcher Pills
  if (el.formatMasterBtn) {
    el.formatMasterBtn.addEventListener('click', () => {
      state.promptFormat = 'master';
      el.formatMasterBtn.classList.add('active');
      if (el.formatStructuredBtn) el.formatStructuredBtn.classList.remove('active');
      updateLivePrompt();
    });
  }
  if (el.formatStructuredBtn) {
    el.formatStructuredBtn.addEventListener('click', () => {
      state.promptFormat = 'structured';
      el.formatStructuredBtn.classList.add('active');
      if (el.formatMasterBtn) el.formatMasterBtn.classList.remove('active');
      updateLivePrompt();
    });
  }

  // Master Prompt Legend Pills Hover Delegation
  if (el.finalPromptDisplay) {
    el.finalPromptDisplay.addEventListener('mouseover', (e) => {
      const pill = e.target.closest('.mp-legend-pill');
      if (!pill) return;
      const targetClass = pill.dataset.target;
      const segs = el.finalPromptDisplay.querySelectorAll('.mp-seg');
      segs.forEach(seg => {
        if (seg.classList.contains(targetClass)) {
          seg.classList.add('focused');
          seg.classList.remove('dimmed');
        } else {
          seg.classList.add('dimmed');
          seg.classList.remove('focused');
        }
      });
    });

    el.finalPromptDisplay.addEventListener('mouseout', (e) => {
      const pill = e.target.closest('.mp-legend-pill');
      if (!pill) return;
      if (e.relatedTarget && pill.contains(e.relatedTarget)) return;
      const segs = el.finalPromptDisplay.querySelectorAll('.mp-seg');
      segs.forEach(seg => {
        seg.classList.remove('dimmed', 'focused');
      });
    });
  }

  // Gallery Drawer Handlers
  if (el.openGalleryBtn) el.openGalleryBtn.addEventListener('click', openGalleryDrawer);
  if (el.closeGalleryDrawer) el.closeGalleryDrawer.addEventListener('click', closeGalleryDrawer);
  if (el.clearGalleryBtn) el.clearGalleryBtn.addEventListener('click', clearGalleryHistory);

  // Close modals on backdrop click
  window.addEventListener('click', (e) => {
    if (e.target === el.galleryDrawer) closeGalleryDrawer();
  });
}

// --- LOGIC HANDLERS ---

function setMode(mode) {
  state.mode = mode;
  if (mode === 'image') {
    if (el.modeImageBtn) el.modeImageBtn.classList.add('active');
    if (el.modeVideoBtn) el.modeVideoBtn.classList.remove('active');

    // Remove video-only quick tags
    state.activeQuickTags.delete('drone4k');
    state.activeQuickTags.delete('slowmo');

    // If current model is a video model, switch to image model
    const currentModel = AI_MODELS.find(m => m.id === state.selectedModel);
    if (!currentModel || currentModel.mediaType === 'video') {
      state.selectedModel = 'imagen-3';
    }

    // Ensure image mode defaults
    state.selectedCamera = state.selectedCamera || 'arri-alexa';
    state.selectedLens = state.selectedLens || 'lens-50mm';
    state.selectedLighting = state.selectedLighting || 'cinematic';
    state.selectedStyle = state.selectedStyle || 'photorealistic';
    state.selectedComposition = state.selectedComposition || 'eye-level';
    state.selectedAspect = state.selectedAspect || '9:16';

    // Disable video dynamics columns (turn gray, lock inputs)
    if (el.accordionVideoDynamics) {
      el.accordionVideoDynamics.classList.add('disabled-video-section');
      el.accordionVideoDynamics.classList.add('open');
      const badge = document.getElementById('videoDynamicsBadge');
      if (badge) badge.textContent = 'Только для видео';
    }
    const videoCols = [
      document.getElementById('videoMotionCol'),
      document.getElementById('durationCol'),
      document.getElementById('framerateCol')
    ];
    videoCols.forEach(col => {
      if (col) col.classList.add('disabled-video-col');
    });
    const videoBadges = [
      document.getElementById('videoMotionBadge'),
      document.getElementById('durationBadge'),
      document.getElementById('framerateBadge')
    ];
    videoBadges.forEach(b => {
      if (b) b.textContent = 'Только для видео';
    });
  } else {
    if (el.modeVideoBtn) el.modeVideoBtn.classList.add('active');
    if (el.modeImageBtn) el.modeImageBtn.classList.remove('active');

    // If current model is an image-only model, switch to video model
    const currentModel = AI_MODELS.find(m => m.id === state.selectedModel);
    if (!currentModel || currentModel.mediaType === 'image') {
      state.selectedModel = 'veo-3.1';
    }

    // Ensure video mode defaults
    state.selectedCamera = state.selectedCamera || 'arri-alexa';
    state.selectedLens = state.selectedLens || 'lens-50mm';
    state.selectedLighting = state.selectedLighting || 'cinematic';
    state.selectedStyle = state.selectedStyle || 'photorealistic';
    state.selectedComposition = state.selectedComposition || 'eye-level';
    state.selectedVideoMotion = state.selectedVideoMotion || 'static-shot';
    state.selectedDuration = state.selectedDuration || '8s';
    state.selectedFramerate = state.selectedFramerate || '24fps cinematic';
    state.selectedAspect = state.selectedAspect || '9:16';

    // Enable video dynamics columns
    if (el.accordionVideoDynamics) {
      el.accordionVideoDynamics.classList.remove('disabled-video-section');
      el.accordionVideoDynamics.classList.add('open');
      const badge = document.getElementById('videoDynamicsBadge');
      if (badge) badge.textContent = 'Видео';
    }
    const videoCols = [
      document.getElementById('videoMotionCol'),
      document.getElementById('durationCol'),
      document.getElementById('framerateCol')
    ];
    videoCols.forEach(col => {
      if (col) col.classList.remove('disabled-video-col');
    });
    const videoBadges = [
      document.getElementById('videoMotionBadge'),
      document.getElementById('durationBadge'),
      document.getElementById('framerateBadge')
    ];
    videoBadges.forEach(b => {
      if (b) b.textContent = 'Видео';
    });
  }

  renderCameraOptions();
  renderLensOptions();
  renderLightingOptions();
  renderStyleOptions();
  renderCompositionOptions();
  renderVideoMotionOptions();
  renderDurationOptions();
  renderFramerateOptions();
  renderModelsGrid();
  renderQuickTags();
  renderAspectRatios();
  renderSkillModelOptions();
  updateLivePrompt();
}

function handleRandomIdea() {
  const randomIndex = Math.floor(Math.random() * RANDOM_IDEAS.length);
  const idea = RANDOM_IDEAS[randomIndex];
  state.idea = idea;
  el.ideaInput.value = idea;
  el.charCounter.textContent = `${idea.length} / 500`;

  // Immediately resolve translation (from cache or Google Translate)
  scheduleOnlineTranslation(idea);

  // Randomize some visual options for variety
  const randomLight = LIGHTING[Math.floor(Math.random() * LIGHTING.length)].id;
  const randomComp = COMPOSITIONS[Math.floor(Math.random() * COMPOSITIONS.length)].id;
  state.selectedLighting = randomLight;
  state.selectedComposition = randomComp;
  renderLightingOptions();
  renderCompositionOptions();
  renderChips();
  releaseCustomDirectorPrompt();
  updateLivePrompt();
  showToast('Сгенерирована новая идея сцены!', '🎲');
}

function applyPreset(preset) {
  // Apply all state values from the preset
  state.idea = preset.idea;
  el.ideaInput.value = preset.idea;
  el.charCounter.textContent = `${preset.idea.length} / 500`;
  scheduleOnlineTranslation(preset.idea);

  state.selectedCamera = preset.camera;
  if (preset.lens) state.selectedLens = preset.lens;
  state.selectedLighting = preset.lighting;
  state.selectedStyle = preset.style;
  state.selectedComposition = preset.composition;
  if (preset.motion) state.selectedVideoMotion = preset.motion;
  if (preset.duration) state.selectedDuration = preset.duration;
  if (preset.framerate) state.selectedFramerate = preset.framerate;
  state.selectedColor = preset.color;
  state.selectedAspect = preset.aspect;
  state.selectedModel = preset.model;

  // Use setMode() for consistent disabled states, model filtering, and quick tags
  setMode(preset.mode);

  // Re-render all parameter selectors with preset values
  renderCameraOptions();
  renderLensOptions();
  renderLightingOptions();
  renderStyleOptions();
  renderCompositionOptions();
  renderVideoMotionOptions();
  renderDurationOptions();
  renderFramerateOptions();
  renderColorOptions();
  renderChips();
  renderAspectRatios();
  releaseCustomDirectorPrompt();
  updateLivePrompt();

  showToast(`Загружен готовый сценарий: "${preset.title}"`, '✨');
}

async function handleAiEnhance() {
  const currentIdea = state.idea.trim();
  if (!currentIdea) {
    showToast('Сначала введите базовую идею сцены или нажмите "Случайная"', '⚠️');
    return;
  }

  el.aiEnhanceBtn.disabled = true;
  el.aiEnhanceText.textContent = 'Улучшаю...';

  try {
    // Smooth responsive animation UX
    await new Promise(r => setTimeout(r, 400));
    const translated = state.onlineTranslatedIdea || translateRussianIdea(currentIdea);
    let enhanced = '';

    if (state.openRouterApiKey) {
      try {
        const mediaContext = state.mode === 'video' ? 'generative video (Google Veo, Omni Flash)' : 'photorealistic image generation (Imagen 3)';
        const activeSkill = getActiveSkill(state.selectedModel);
        const skillSystemRule = activeSkill && activeSkill.content 
          ? `\n\nSTRICT ACTIVE MODEL SKILL SPECIFICATION (${activeSkill.fileName}):\n${activeSkill.content.slice(0, 1500)}` 
          : '';

        const messages = [
          {
            role: 'system',
            content: `You are an expert prompt engineer specializing in ${mediaContext}. Enhance the user's brief scene idea into an exquisite, sensorially detailed prompt of 35-50 words. Emphasize physical camera optics, volumetric lighting, rich textural materials, and dynamic movement.${skillSystemRule}\n\nReturn ONLY the enhanced prompt in English without introductory or concluding remarks.`
          },
          {
            role: 'user',
            content: currentIdea
          }
        ];
        enhanced = await callOpenRouterAPI(messages, state.directorSelectedModel || 'google/gemma-4-31b-it:free', state.openRouterApiKey);
      } catch (err) {
        console.warn('OpenRouter enhancement failed, falling back to local engine:', err);
      }
    }

    if (!enhanced) {
      if (state.mode === 'video') {
        if (state.selectedModel === 'omni-1.1-flash') {
          enhanced = `${translated}, captured in continuous unbroken motion, real-time kinetic progression, volumetric atmospheric haze, authentic physical mass and environmental responsiveness`;
        } else if (state.selectedModel === 'minimax-h3') {
          enhanced = `${translated}, structured temporal progression, continuous 2K camera trajectory, authentic physical momentum, rich environmental depth, and synchronized 32kHz diegetic acoustics`;
        } else {
          // Veo 3.1
          enhanced = `${translated}, natural physical dynamics, authentic fluid movement, subtle particulate atmosphere, crisp focal separation, lifelike material textures`;
        }
      } else {
        // Image mode
        enhanced = `${translated}, exquisitely rendered details, volumetric light dispersion, photorealistic texture fidelity, high dynamic range atmospheric depth, ultra-sharp optical clarity`;
      }
    }

    state.idea = enhanced;
    el.ideaInput.value = enhanced;
    el.charCounter.textContent = `${enhanced.length} / 500`;
    releaseCustomDirectorPrompt();
    updateLivePrompt();
    showToast('Идея обогащена и промпт в терминале обновлен!', '✨');
  } catch (err) {
    console.error('Enhance error:', err);
    showToast('Ошибка при обработке идеи', '❌');
  } finally {
    el.aiEnhanceBtn.disabled = false;
    el.aiEnhanceText.textContent = 'Улучшить с AI';
  }
}

function copyPromptToClipboard() {
  let textToCopy = '';
  if (state.customDirectorPrompt && state.promptFormat === 'master') {
    textToCopy = state.customDirectorPrompt;
  } else {
    const compiled = compilePrompt();
    if (!compiled.prompt) {
      showToast('Промпт пуст. Заполните параметры!', '⚠️');
      return;
    }
    textToCopy = compiled.prompt;
    if (compiled.negative) {
      textToCopy += `\n\nNegative Prompt: ${compiled.negative}`;
    }
  }

  navigator.clipboard.writeText(textToCopy).then(() => {
    let label = (state.customDirectorPrompt && state.promptFormat === 'master')
      ? 'Режиссерский AI-промпт'
      : (state.promptFormat === 'master' ? 'Готовый мастер-промпт' : 'Структурированный промпт');
    if (state.promptDisplayLang === 'ru') {
      label += ' (EN)';
    }
    showToast(`${label} скопирован в буфер обмена!`, '📋');
    saveToHistory({
      id: Date.now(),
      prompt: textToCopy,
      model: state.selectedModel,
      date: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    });
  }).catch(err => {
    console.error('Clipboard error:', err);
    showToast('Не удалось скопировать в буфер', '❌');
  });
}

function handleResetAll() {
  state.idea = '';
  state.onlineTranslatedIdea = '';
  state.customDirectorPrompt = '';
  state.videoAnalysis.directorPrompt = '';
  state.lastBreakdownText = '';
  if (el.videoBreakdownCard) el.videoBreakdownCard.style.display = 'none';
  if (el.ideaInput) el.ideaInput.value = '';
  if (el.charCounter) el.charCounter.textContent = '0 / 500';

  state.activeQuickTags.clear();
  renderQuickTags();

  // Reset to default presets matching the current mode
  state.selectedCamera = 'arri-alexa';
  state.selectedLens = 'lens-50mm';
  state.selectedLighting = 'cinematic';
  state.selectedStyle = 'photorealistic';
  state.selectedComposition = 'eye-level';
  state.selectedVideoMotion = 'static-shot';
  state.selectedDuration = '8s';
  state.selectedFramerate = '24fps cinematic';
  state.selectedAspect = '9:16';
  state.selectedColor = '';
  state.selectedModel = state.mode === 'video' ? 'veo-3.1' : 'imagen-3';
  state.customNegative = '';
  state.activeNegativeTags.clear();
  if (el.negativeCustomInput) el.negativeCustomInput.value = '';

  setMode(state.mode || 'image');

  renderColorOptions();
  renderChips();
  renderNegativeTags();

  state.identityLock = false;
  if (el.identityLockBtn) {
    el.identityLockBtn.classList.remove('active');
    el.identityLockBtn.textContent = '🔒 Identity Lock: ВЫКЛ';
  }

  showToast('Все параметры сброшены к значениям по умолчанию', '🧹');
}

// --- GALLERY & HISTORY ---

function saveToHistory(item) {
  state.history.unshift(item);
  if (state.history.length > 30) state.history.pop();
  localStorage.setItem('promptforge_history', JSON.stringify(state.history));
}

function openGalleryDrawer() {
  renderGallery();
  el.galleryDrawer.classList.add('open');
}

function closeGalleryDrawer() {
  el.galleryDrawer.classList.remove('open');
}

function renderGallery() {
  if (state.history.length === 0) {
    el.galleryItemsContainer.innerHTML = `<div class="empty-gallery">История генераций пока пуста. Сгенерируйте промпт или картинку!</div>`;
    return;
  }

  el.galleryItemsContainer.innerHTML = state.history.map(item => `
    <div class="gallery-item">
      <div class="gallery-item-header">
        <span class="gallery-item-model">${item.model}</span>
        <span class="gallery-item-date">${item.date}</span>
      </div>
      ${item.image ? `<img src="${item.image}" class="gallery-item-img" alt="Generated preview" />` : ''}
      <div class="gallery-item-prompt">${item.prompt}</div>
      <div class="gallery-item-actions">
        <button class="gallery-btn-use" onclick="window.useHistoryPrompt('${encodeURIComponent(item.prompt)}')">Копировать</button>
      </div>
    </div>
  `).join('');
}

window.useHistoryPrompt = function(encodedPrompt) {
  const prompt = decodeURIComponent(encodedPrompt);
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('Промпт из истории скопирован!', '📋');
  });
};

window.copyCurrentPrompt = function() {
  copyPromptToClipboard();
};

function clearGalleryHistory() {
  state.history = [];
  localStorage.removeItem('promptforge_history');
  renderGallery();
  showToast('История генераций очищена', '🧹');
}

// ==========================================================================
// AI DIRECTOR PRO (POWERED BY OPENROUTER LLM)
// ==========================================================================

const RANDOM_DIRECTOR_THEMES = [
  'Неоновый киберпанк рынок в дождливом Гонконге, торговец кибер-глазами в дыму уличных воков, блики луж, анаморфотные синие блики',
  'Глубоководный батискаф исследует светящиеся руины биомеханического города на дне Марианской впадины, биолюминесценция',
  'Одинокий странник в пыльном плаще посреди бескрайней терракотовой пустыни планеты Арракис, гигантская песчаная буря на горизонте',
  'Древняя обсерватория в шотландском высокогорье ночью, телескоп направлен в центр Млечного пути, мистический туман, северное сияние',
  'Медитативный японский сад камней в Киото, монах в темном кимоно смахивает бамбуковой метлой капли росы, мягкий утренний свет',
  'Винтажный автодром 1970-х, болид Формулы-1 в замедленной съемке входит в крутой поворот под проливным дождем, водяной шлейф',
  'Футуристическая лаборатория невесомости, биоинженер изучает левитирующую каплю кристаллической жидкости, теплый золотой контровой свет',
  'Скандинавский детектив: мрачный заснеженный сосновый лес, следы снегоходов, дым из трубы бревенчатого домика в синих сумерках',
  'Викторианский алхимик в тайной библиотеке Лондона XIX века, старинные фолианты, колбы с изумрудным паром, свет керосиновой лампы',
  'Космическая станция на орбите Сатурна, астронавт в открытом космосе ремонтирует панель на фоне колоссальных ледяных колец'
];

const DIRECTOR_MODEL_BADGES = {
  'google/gemma-4-31b-it:free': 'Gemma 4 31B • Free',
  'qwen/qwen3.8-27b:free': 'Qwen 3.8 27B • Free',
  'nvidia/nemotron-3-super-120b-a12b:free': 'Nemotron 3 120B • Free',
  'nvidia/nemotron-3.5-lightning:free': 'Nemotron 3.5 • Free',
  'openrouter/free': 'OpenRouter Free',
  'anthropic/claude-sonnet-5.5': 'Claude Sonnet 5.5',
  'openai/gpt-5.5': 'GPT-5.5',
  'deepseek/deepseek-v3.2': 'DeepSeek V3.2',
  'google/gemini-3.8-flash': 'Gemini 3.8 Flash'
};

const DIRECTOR_GENRE_PRESETS = {
  'cinematic': { camera: 'arri-alexa', lens: 'anamorphic-cine', lighting: 'cinematic', style: 'photorealistic' },
  'cyberpunk': { camera: 'red-raptor', lens: 'wide-35mm', lighting: 'cyberpunk-glow', style: 'cyberpunk' },
  'scifi': { camera: 'red-raptor', lens: 'ultra-wide-16mm', lighting: 'volumetric', style: 'unreal-engine' },
  'documentary': { camera: 'sony-fx3', lens: 'lens-50mm', lighting: 'natural-window', style: 'photorealistic' },
  'dark-fantasy': { camera: 'leica-m11', lens: 'standard-85mm', lighting: 'chiaroscuro', style: 'dark-fantasy' },
  'minimalism': { camera: 'hasselblad', lens: 'wide-24mm', lighting: 'natural-window', style: 'minimalism' }
};

async function callOpenRouterAPI(messages, model = 'google/gemma-4-31b-it:free', apiKey = '') {
  if (!apiKey) {
    throw new Error('API ключ OpenRouter не указан в настройках');
  }

  const endpoint = 'https://openrouter.ai/api/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'HTTP-Referer': window.location.origin || 'http://localhost',
    'X-Title': 'PromptForge AI Studio Pro'
  };

  const payload = {
    model: model,
    messages: messages,
    temperature: 0.7,
    max_tokens: 1200
  };

  // Try primary model
  let response = await fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  });

  // Fallback to openrouter/free if primary model has rate-limits or issues and is free
  if (!response.ok && model !== 'openrouter/free' && model.includes(':free')) {
    console.warn(`Model ${model} returned ${response.status}, trying fallback to openrouter/free...`);
    payload.model = 'openrouter/free';
    response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });
  }

  if (!response.ok) {
    let errMsg = `Ошибка OpenRouter API (${response.status})`;
    try {
      const errJson = await response.json();
      if (errJson && errJson.error && errJson.error.message) {
        errMsg += `: ${errJson.error.message}`;
      }
    } catch (_) {}
    throw new Error(errMsg);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '';
  if (!content) {
    throw new Error('Модель OpenRouter вернула пустой ответ');
  }
  return content.trim();
}

const DIRECTOR_MODE_INFOS = {
  scene: {
    badge: '🎬 Сцена',
    title: 'Генерация целостной киносцены',
    desc: 'Опишите краткую идею, персонажа, действие или локацию. Нейросеть развернет её в единый сбалансированный мастер-промпт с голливудской оптикой (ARRI, Anamorphic), светом, динамикой и текстурами.',
    tip: '💡 <em>Совет:</em> Достаточно 1-2 предложений. Жанровый тон ниже задаст цветовую гамму и оптический сетап.',
    placeholder: 'Например: Неоновый дождь в трущобах Токио, киборг-самурай у палатки с раменом...'
  },
  variations: {
    badge: '⚡ 3 Вариации',
    title: '3 авторские концепции на выбор',
    desc: 'Введите центральную тему сцены. Режиссер создаст 3 принципиально разных художественных решения: 1 — Эпический фотореализм, 2 — Атмосферный нуар/контраст, 3 — Динамичный экшен. Переключайтесь между ними по вкладкам.',
    tip: '💡 <em>Совет:</em> Идеально для быстрого брейншторма, поиска оригинальных ракурсов и неожиданных идей.',
    placeholder: 'Например: Заброшенная космическая оранжерея на спутнике Юпитера, парящие капли воды...'
  },
  shots: {
    badge: '📐 Раскадровка',
    title: 'Покадровая режиссерская раскадровка (3 плана)',
    desc: 'Опишите ключевое событие или сюжет. AI разложит действие на трехкадровую кино-последовательность: [Кадр 1: Сверхширокий общий план] → [Кадр 2: Средний план действия] → [Кадр 3: Макро-деталь/эмоция] с движением камеры.',
    tip: '💡 <em>Совет:</em> Отлично подходит для сборки связных видеороликов и согласованных кадров.',
    placeholder: 'Например: Внезапная погоня ретро-кара по ночному осеннему Парижу 1960-х годов...'
  },
  polish: {
    badge: '🌟 Доработать',
    title: 'Профессиональный кинематографический тюнинг',
    desc: 'Вставьте ваш черновой текст или оставьте поле пустым (AI возьмет текущий промпт из конструктора). Нейросеть удалит клише (8k, photorealistic) и обогатит текст реальной оптикой, объемным светом и кино-колористикой.',
    tip: '💡 <em>Совет:</em> Нажмите кнопку генерации без ввода текста для мгновенной прокачки текущего промпта конструктора.',
    placeholder: 'Введите черновой набросок или оставьте поле пустым для тюнинга текущего промпта...'
  }
};

function updateDirectorModeGuide(mode) {
  const info = DIRECTOR_MODE_INFOS[mode] || DIRECTOR_MODE_INFOS['scene'];
  if (el.directorGuideBadge) el.directorGuideBadge.textContent = info.badge;
  if (el.directorGuideTitle) el.directorGuideTitle.textContent = info.title;
  if (el.directorGuideDesc) el.directorGuideDesc.textContent = info.desc;
  if (el.directorGuideTip) el.directorGuideTip.innerHTML = info.tip;
  if (el.directorThemeInput) el.directorThemeInput.placeholder = info.placeholder;
}

// ==========================================================================
// AI MODEL SKILLS & SPECIFICATIONS CONTROLLER
// ==========================================================================

const SKILLS_BY_MODE = {
  image: [
    { id: 'imagen-3', label: 'Google Imagen 3 (Фотореализм)' },
    { id: 'gemini-flash', label: 'Gemini 2.5 Flash (Мультимодал)' },
    { id: 'gpt-image-2.5', label: 'GPT Image 2.5 (Реалистичное фото)' },
    { id: 'imagine-image-2', label: 'Grok Imagine 2.0 (FRAME спецификация)' }
  ],
  video: [
    { id: 'veo-3.1', label: 'Google Veo 3.1 (Кинематографичное 4K видео)' },
    { id: 'omni-1.1-flash', label: 'Gemini Omni 1.1 Flash (Быстрое видео со звуком)' },
    { id: 'minimax-h3', label: 'MiniMax-H3 (2K Open-Weight со звуком)' },
    { id: 'seedance-2.5', label: 'Seedance 2.5 (30s Arc • Опционально)' }
  ]
};

function renderSkillModelOptions() {
  if (!el.skillModelSelect) return;
  const modeKey = state.mode === 'video' ? 'video' : 'image';
  const list = SKILLS_BY_MODE[modeKey] || SKILLS_BY_MODE.image;

  el.skillModelSelect.innerHTML = list.map(item => `
    <option value="${item.id}">${item.label}</option>
  `).join('');

  // Auto-sync with current selectedModel if available in this list
  const matchesCurrent = list.some(item => item.id === state.selectedModel);
  if (matchesCurrent) {
    el.skillModelSelect.value = state.selectedModel;
  } else {
    // If not matching, select the first model of this mode
    el.skillModelSelect.value = list[0].id;
    state.selectedModel = list[0].id;
  }

  updateSkillManagerUI(el.skillModelSelect.value);
}

function getActiveSkill(modelId) {
  const targetId = modelId || state.selectedModel || 'veo-3.1';
  const custom = state.customModelSkills ? state.customModelSkills[targetId] : null;
  if (custom && custom.content) {
    return {
      modelId: targetId,
      fileName: custom.fileName || `${targetId}-custom.md`,
      title: custom.title || targetId,
      mediaType: custom.mediaType || (['imagen-3', 'gemini-flash', 'gpt-image-2.5', 'imagine-image-2'].includes(targetId) ? '📸 Фото' : '🎬 Видео + Звук'),
      ruleCount: custom.ruleCount || 'Пользовательские правила',
      description: custom.description || 'Пользовательская спецификация для модели.',
      rules: custom.rules || ['✔ Пользовательская спецификация активна'],
      content: custom.content,
      isCustom: true
    };
  }

  const fallback = DEFAULT_MODEL_SKILLS[targetId] || DEFAULT_MODEL_SKILLS['veo-3.1'];
  return {
    ...fallback,
    isCustom: false
  };
}

function updateSkillManagerUI(modelId) {
  const targetId = modelId || state.selectedModel || 'veo-3.1';
  state.activeSkillModelId = targetId;

  if (el.skillModelSelect && el.skillModelSelect.value !== targetId) {
    const hasOption = Array.from(el.skillModelSelect.options).some(opt => opt.value === targetId);
    if (hasOption) {
      el.skillModelSelect.value = targetId;
    }
  }

  const skill = getActiveSkill(targetId);

  if (el.skillFileName) el.skillFileName.textContent = skill.fileName;
  if (el.skillSourceTag) {
    el.skillSourceTag.textContent = skill.isCustom ? 'Пользовательская' : 'Встроенная';
    el.skillSourceTag.classList.toggle('is-custom', Boolean(skill.isCustom));
  }
  if (el.skillDescription) el.skillDescription.textContent = skill.description;
  if (el.skillRuleCount) el.skillRuleCount.textContent = `⚡ ${skill.ruleCount}`;
  if (el.skillMediaType) el.skillMediaType.textContent = skill.mediaType;
  if (el.skillSizePill) {
    const bytes = new Blob([skill.content || '']).size;
    el.skillSizePill.textContent = bytes > 1024 ? `~${(bytes / 1024).toFixed(1)} КБ` : `${bytes} Б`;
  }

  if (el.skillRulesList && Array.isArray(skill.rules)) {
    el.skillRulesList.innerHTML = skill.rules.map(r => `<li>${r}</li>`).join('');
  }
}

function initModelSkills() {
  if (!el.modelSkillsSection) return;

  // 1. Model Selection Dropdown inside Skills card
  if (el.skillModelSelect) {
    el.skillModelSelect.addEventListener('change', (e) => {
      const chosenModelId = e.target.value;
      const matchingModel = AI_MODELS.find(m => m.id === chosenModelId);
      if (matchingModel) {
        state.selectedModel = chosenModelId;
        if (el.modelsGrid) {
          el.modelsGrid.querySelectorAll('.model-card').forEach(c => {
            c.classList.toggle('active', c.dataset.modelId === chosenModelId);
          });
        }
        releaseCustomDirectorPrompt();
        updateLivePrompt();
      }
      updateSkillManagerUI(chosenModelId);
    });
  }

  // 2. Upload Custom .md File
  if (el.uploadSkillBtn && el.skillFileInput) {
    el.uploadSkillBtn.addEventListener('click', () => {
      el.skillFileInput.value = '';
      el.skillFileInput.click();
    });

    el.skillFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        if (!text || !text.trim()) {
          showToast('Файл пуст или повреждён', '⚠️');
          return;
        }

        const currentModelId = el.skillModelSelect ? el.skillModelSelect.value : state.selectedModel;

        // Parse description
        let parsedDesc = 'Пользовательская спецификация для модели.';
        const descMatch = text.match(/description:\s*([^\r\n]+)/i);
        if (descMatch && descMatch[1]) {
          parsedDesc = descMatch[1].trim();
        }

        // Extract key bullet rules
        const bullets = [];
        const lines = text.split('\n');
        for (const line of lines) {
          const trimmed = line.trim();
          if ((trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^[0-9]+\.\s+/.test(trimmed)) &&
              trimmed.length > 5 && !trimmed.includes('---')) {
            const clean = trimmed.replace(/^[-*0-9.]+\s*/, '').replace(/\*\*/g, '').slice(0, 80);
            bullets.push(`✔ ${clean}`);
            if (bullets.length >= 4) break;
          }
        }
        if (bullets.length === 0) {
          bullets.push('✔ Пользовательская инструкция активна');
        }

        if (!state.customModelSkills) state.customModelSkills = {};
        state.customModelSkills[currentModelId] = {
          fileName: file.name,
          content: text,
          description: parsedDesc,
          ruleCount: `${bullets.length} правила`,
          rules: bullets,
          isCustom: true,
          updatedAt: Date.now()
        };

        try {
          localStorage.setItem('promptforge_model_skills', JSON.stringify(state.customModelSkills));
        } catch (storageErr) {
          console.warn('LocalStorage save error:', storageErr);
        }

        updateSkillManagerUI(currentModelId);
        showToast(`Загружена спецификация: ${file.name}`, '📄');
      };
      reader.readAsText(file);
    });
  }

  // 3. View & Edit Skill Modal
  if (el.viewSkillBtn) {
    el.viewSkillBtn.addEventListener('click', () => {
      const currentModelId = el.skillModelSelect ? el.skillModelSelect.value : state.selectedModel;
      const skill = getActiveSkill(currentModelId);

      if (el.skillEditorTitle) el.skillEditorTitle.textContent = `Спецификация модели: ${skill.title || currentModelId}`;
      if (el.skillEditorMeta) el.skillEditorMeta.textContent = `${skill.fileName} (${skill.isCustom ? 'Пользовательская' : 'Встроенная'})`;
      if (el.skillEditorTextarea) el.skillEditorTextarea.value = skill.content;
      if (el.skillEditorModalBackdrop) el.skillEditorModalBackdrop.style.display = 'flex';
    });
  }

  // Modal Close Handlers
  function closeSkillModal() {
    if (el.skillEditorModalBackdrop) el.skillEditorModalBackdrop.style.display = 'none';
  }
  if (el.closeSkillEditorBtn) el.closeSkillEditorBtn.addEventListener('click', closeSkillModal);
  if (el.cancelSkillEditorBtn) el.cancelSkillEditorBtn.addEventListener('click', closeSkillModal);
  if (el.skillEditorModalBackdrop) {
    el.skillEditorModalBackdrop.addEventListener('click', (e) => {
      if (e.target === el.skillEditorModalBackdrop) closeSkillModal();
    });
  }

  // Save Edits inside Modal
  if (el.saveSkillEditorBtn) {
    el.saveSkillEditorBtn.addEventListener('click', () => {
      const currentModelId = el.skillModelSelect ? el.skillModelSelect.value : state.selectedModel;
      const newText = el.skillEditorTextarea ? el.skillEditorTextarea.value : '';
      if (!newText.trim()) {
        showToast('Текст спецификации не может быть пустым', '⚠️');
        return;
      }

      if (!state.customModelSkills) state.customModelSkills = {};
      const prev = state.customModelSkills[currentModelId] || {};
      const active = getActiveSkill(currentModelId);

      state.customModelSkills[currentModelId] = {
        fileName: prev.fileName || active.fileName || `${currentModelId}-edited.md`,
        content: newText,
        description: prev.description || active.description,
        ruleCount: prev.ruleCount || active.ruleCount,
        rules: prev.rules || active.rules,
        isCustom: true,
        updatedAt: Date.now()
      };

      try {
        localStorage.setItem('promptforge_model_skills', JSON.stringify(state.customModelSkills));
      } catch (storageErr) {
        console.warn('LocalStorage save error:', storageErr);
      }

      updateSkillManagerUI(currentModelId);
      closeSkillModal();
      showToast('Спецификация успешно сохранена!', '💾');
    });
  }

  // Copy Markdown Content
  if (el.copySkillContentBtn) {
    el.copySkillContentBtn.addEventListener('click', () => {
      const text = el.skillEditorTextarea ? el.skillEditorTextarea.value : '';
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('Markdown скопирован в буфер обмена', '📋');
        }).catch(() => {
          showToast('Не удалось скопировать', '⚠️');
        });
      }
    });
  }

  // Export / Download .md File
  if (el.downloadSkillFileBtn) {
    el.downloadSkillFileBtn.addEventListener('click', () => {
      const currentModelId = el.skillModelSelect ? el.skillModelSelect.value : state.selectedModel;
      const skill = getActiveSkill(currentModelId);
      const text = (el.skillEditorTextarea && el.skillEditorModalBackdrop && el.skillEditorModalBackdrop.style.display !== 'none')
        ? el.skillEditorTextarea.value
        : skill.content;
      const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = skill.fileName || `${currentModelId}-skill.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(`Файл ${a.download} сохранён!`, '💾');
    });
  }

  // Reset to Default Bundled Spec
  if (el.resetSkillBtn) {
    el.resetSkillBtn.addEventListener('click', () => {
      const currentModelId = el.skillModelSelect ? el.skillModelSelect.value : state.selectedModel;
      if (state.customModelSkills && state.customModelSkills[currentModelId]) {
        delete state.customModelSkills[currentModelId];
        localStorage.setItem('promptforge_model_skills', JSON.stringify(state.customModelSkills));
        updateSkillManagerUI(currentModelId);
        showToast('Спецификация сброшена к стандартной', '🔄');
      } else {
        showToast('Уже используется стандартная спецификация', 'ℹ️');
      }
    });
  }

  // Initial UI Render
  renderSkillModelOptions();
}

function initAiDirector() {
  // 1. Initial State & Badge Sync
  const savedModel = localStorage.getItem('promptforge_director_model');
  if (savedModel && el.directorModelSelect) {
    state.directorSelectedModel = savedModel;
    el.directorModelSelect.value = savedModel;
  }
  updateDirectorModelBadge();

  // 2. Mode Buttons
  const modeButtons = [
    { btn: el.modeSceneBtn, mode: 'scene' },
    { btn: el.modeVariationsBtn, mode: 'variations' },
    { btn: el.modeShotsBtn, mode: 'shots' },
    { btn: el.modePolishBtn, mode: 'polish' }
  ];

  modeButtons.forEach(({ btn, mode }) => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      state.directorMode = mode;
      modeButtons.forEach(b => {
        if (b.btn) b.btn.classList.toggle('active', b.mode === mode);
      });
      updateDirectorModeGuide(mode);
    });
  });

  // Initial guide sync
  updateDirectorModeGuide(state.directorMode || 'scene');

  // 3. Model Selector Change
  if (el.directorModelSelect) {
    el.directorModelSelect.addEventListener('change', (e) => {
      state.directorSelectedModel = e.target.value;
      localStorage.setItem('promptforge_director_model', e.target.value);
      updateDirectorModelBadge();
      showToast(`Выбрана модель: ${DIRECTOR_MODEL_BADGES[e.target.value] || e.target.value}`, '⚡');
    });
  }

  // 4. Genre Selector Change
  if (el.directorGenreSelect) {
    el.directorGenreSelect.addEventListener('change', (e) => {
      state.directorSelectedGenre = e.target.value;
    });
  }

  // 5. Random Theme Button
  if (el.directorRandomThemeBtn) {
    el.directorRandomThemeBtn.addEventListener('click', handleDirectorRandomTheme);
  }

  // 6. Reset Button
  if (el.directorResetBtn) {
    el.directorResetBtn.addEventListener('click', handleDirectorReset);
  }

  // 7. Generate Button
  if (el.directorGenerateBtn) {
    el.directorGenerateBtn.addEventListener('click', handleDirectorGenerate);
  }

  // 8. Copy Button
  if (el.directorCopyBtn) {
    el.directorCopyBtn.addEventListener('click', handleDirectorCopy);
  }

  // 9. Apply to Constructor Button
  if (el.directorApplyBtn) {
    el.directorApplyBtn.addEventListener('click', handleDirectorApplyToConstructor);
  }

  // 10. Variation Tabs Switching
  if (el.directorVarTabs) {
    el.directorVarTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.director-var-tab');
      if (!tab) return;
      const idx = parseInt(tab.dataset.varIdx, 10);
      if (isNaN(idx) || !state.directorResults[idx]) return;

      state.directorActiveVarIdx = idx;
      el.directorVarTabs.querySelectorAll('.director-var-tab').forEach((t, i) => {
        t.classList.toggle('active', i === idx);
      });
      renderDirectorResult(state.directorResults[idx]);
    });
  }
}

function updateDirectorModelBadge() {
  if (el.directorActiveModelBadge) {
    const label = DIRECTOR_MODEL_BADGES[state.directorSelectedModel] || 'OpenRouter LLM';
    el.directorActiveModelBadge.textContent = label;
  }
}

function handleDirectorRandomTheme() {
  const current = el.directorThemeInput?.value.trim() || '';
  const pool = RANDOM_DIRECTOR_THEMES.filter(t => t !== current);
  const picked = pool[Math.floor(Math.random() * pool.length)] || RANDOM_DIRECTOR_THEMES[0];
  if (el.directorThemeInput) {
    el.directorThemeInput.value = picked;
    el.directorThemeInput.focus();
  }
}

function handleDirectorReset() {
  if (el.directorThemeInput) el.directorThemeInput.value = '';
  state.directorResults = [];
  state.directorActiveVarIdx = 0;
  state.directorMode = 'scene';
  [el.modeSceneBtn, el.modeVariationsBtn, el.modeShotsBtn, el.modePolishBtn].forEach(b => {
    if (b) b.classList.toggle('active', b === el.modeSceneBtn);
  });
  updateDirectorModeGuide('scene');
  if (el.directorResultCard) el.directorResultCard.style.display = 'none';
  if (el.directorProgressBar) el.directorProgressBar.style.display = 'none';
  if (el.directorVarTabs) el.directorVarTabs.style.display = 'none';
  showToast('AI Director: очищено', '🧹');
}

function handleDirectorCopy() {
  let text = '';
  if (state.directorMode === 'variations' && state.directorResults[state.directorActiveVarIdx]) {
    text = state.directorResults[state.directorActiveVarIdx];
  } else if (el.directorResultText) {
    text = el.directorResultText.innerText || el.directorResultText.textContent;
  }

  if (!text) {
    showToast('Нет текста для копирования', '⚠️');
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    showToast('Сгенерированный промпт скопирован!', '📋');
  }).catch(err => {
    console.error('Copy error:', err);
    showToast('Не удалось скопировать', '❌');
  });
}

function handleDirectorApplyToConstructor() {
  let text = '';
  if (state.directorMode === 'variations' && state.directorResults[state.directorActiveVarIdx]) {
    text = state.directorResults[state.directorActiveVarIdx];
  } else if (el.directorResultText) {
    text = el.directorResultText.innerText || el.directorResultText.textContent;
  }

  if (!text) {
    showToast('Сначала сгенерируйте концепт', '⚠️');
    return;
  }

  // Set idea
  state.idea = text;
  if (el.ideaInput) {
    el.ideaInput.value = text;
  }
  if (el.charCounter) {
    el.charCounter.textContent = `${text.length} / 500`;
  }

  // Auto-apply matching genre preset parameters
  const genreKey = state.directorSelectedGenre || 'cinematic';
  const preset = DIRECTOR_GENRE_PRESETS[genreKey] || DIRECTOR_GENRE_PRESETS['cinematic'];

  if (preset.camera && CAMERA_BODIES.some(c => c.id === preset.camera)) {
    state.selectedCamera = preset.camera;
    renderCameraOptions();
  }
  if (preset.lens && LENSES.some(l => l.id === preset.lens)) {
    state.selectedLens = preset.lens;
    renderLensOptions();
  }
  if (preset.lighting && LIGHTING.some(li => li.id === preset.lighting)) {
    state.selectedLighting = preset.lighting;
    renderLightingOptions();
  }
  if (preset.style && STYLES.some(s => s.id === preset.style)) {
    state.selectedStyle = preset.style;
    renderStyleOptions();
  }

  // Switch to video mode for cinematic camera dynamics
  setMode('video');
  releaseCustomDirectorPrompt();
  updateLivePrompt();

  // Highlight effect on Idea Box & Terminal
  const ideaCard = document.querySelector('.idea-card') || el.ideaInput;
  if (ideaCard) {
    ideaCard.style.transition = 'box-shadow 0.3s ease';
    ideaCard.style.boxShadow = '0 0 25px rgba(200, 255, 0, 0.5)';
    setTimeout(() => { ideaCard.style.boxShadow = ''; }, 1200);
  }

  showToast('⚡ Концепт режиссера перенесен в конструктор! Параметры синхронизированы.', '🎬');
}

function renderDirectorResult(rawText) {
  if (!el.directorResultText) return;
  // Format markdown bold and linebreaks nicely
  const html = rawText
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  el.directorResultText.innerHTML = html;
}

async function handleDirectorGenerate() {
  let concept = (el.directorThemeInput?.value || '').trim();

  // If polish mode and empty, pull from current idea or prompt
  if (state.directorMode === 'polish' && !concept) {
    concept = state.idea.trim() || state.customDirectorPrompt.trim();
    if (!concept) {
      const compiled = compilePrompt();
      concept = compiled.prompt || '';
    }
    if (concept && el.directorThemeInput) {
      el.directorThemeInput.value = concept;
    }
  }

  if (!concept) {
    showToast('Введите тему сцены или нажмите "🎲 Случайная"', '⚠️');
    if (el.directorThemeInput) el.directorThemeInput.focus();
    return;
  }

  state.isDirectorGenerating = true;
  if (el.directorGenerateBtn) el.directorGenerateBtn.disabled = true;
  if (el.directorGenerateBtnText) el.directorGenerateBtnText.textContent = 'Режиссер думает...';
  if (el.directorProgressBar) el.directorProgressBar.style.display = 'block';
  if (el.directorProgressLabel) el.directorProgressLabel.textContent = 'AI режиссер анализирует драматургию и оптику...';
  if (el.directorResultCard) el.directorResultCard.style.display = 'none';
  if (el.directorVarTabs) el.directorVarTabs.style.display = 'none';

  const mode = state.directorMode;
  const genre = state.directorSelectedGenre;
  const model = state.directorSelectedModel;
  const hasKey = Boolean(state.openRouterApiKey);

  try {
    let resultText = '';

    if (hasKey) {
      // Live OpenRouter Generation
      const systemPrompt = 'You are an elite Hollywood Director and Master Cinematographer. Your task is to generate ultra-vivid, highly cinematic, physically grounded video/image generation prompts optimized for state-of-the-art generative video models (Google Veo 3.1, Omni 1.1 Flash, Sora, Kling, MiniMax). Write prompts in rich English with precise optical language, camera movements, lighting, and textures. Always respond directly with the formatted content without meta-commentary, introductory remarks, or conversational filler.';

      let userPrompt = '';
      if (mode === 'scene') {
        userPrompt = `Expand the following concept into a single comprehensive Master Cinematic Prompt in genre: "${genre}".\nConcept: "${concept}"\nStructure:\n- Primary Subject & Action\n- Environment & Atmosphere\n- Camera, Lens & Movement (ARRI Alexa, Anamorphic, specific focal length)\n- Lighting & Color Grading (volumetric, color temperature, shadows)\n- Texture & Optical Details`;
      } else if (mode === 'variations') {
        userPrompt = `Generate exactly 3 distinctly different creative interpretations and cinematic prompts for this concept in genre: "${genre}".\nConcept: "${concept}"\nSeparate each variation strictly with "===VARIATION 2===" and "===VARIATION 3===" delimiters.\nVariation 1: Epic Hyper-Realistic Cinematic\nVariation 2: Moody High-Contrast Atmospheric Noir\nVariation 3: Dynamic Kinetic Action / Visceral Motion`;
      } else if (mode === 'shots') {
        userPrompt = `Generate a professional 3-shot cinematic storyboard sequence for this concept in genre: "${genre}".\nConcept: "${concept}"\nFormat as:\n[SHOT 1: EXTREME WIDE ESTABLISHING]\nCamera: ...\nAction: ...\nLighting: ...\n\n[SHOT 2: MEDIUM ACTION / DIALOGUE]\nCamera: ...\nAction: ...\nLighting: ...\n\n[SHOT 3: MACRO / CLOSE-UP DETAIL]\nCamera: ...\nAction: ...\nLighting: ...`;
      } else if (mode === 'polish') {
        userPrompt = `Take this raw idea/prompt and elevate it to Hollywood cinematography standard in genre: "${genre}". Eliminate generic buzzwords (like 'photorealistic, 8k, highly detailed') and replace them with physical optical descriptors, lens specifications, atmospheric volumetric dispersion, micro-textures, and precise color grading.\nOriginal Idea/Prompt: "${concept}"`;
      }

      if (el.directorProgressLabel) el.directorProgressLabel.textContent = `Запрос к ${DIRECTOR_MODEL_BADGES[model] || model}...`;
      resultText = await callOpenRouterAPI(
        [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        model,
        state.openRouterApiKey
      );
    } else {
      // High-Fidelity Offline Generator with informative guidance
      await new Promise(r => setTimeout(r, 700));
      resultText = generateOfflineDirectorContent(mode, genre, concept);
    }

    // Process output per mode
    if (mode === 'variations') {
      const parts = resultText.split(/===VARIATION \d+===/i).map(s => s.trim()).filter(Boolean);
      if (parts.length >= 3) {
        state.directorResults = parts.slice(0, 3);
      } else {
        // Fallback split by double newlines or numbered list
        const altParts = resultText.split(/(?:^|\n)(?:Вариант \d|Variation \d|\d\.)[:\s]/i).map(s => s.trim()).filter(Boolean);
        state.directorResults = altParts.length >= 3 ? altParts.slice(0, 3) : [resultText, resultText, resultText];
      }
      state.directorActiveVarIdx = 0;
      if (el.directorVarTabs) {
        el.directorVarTabs.style.display = 'flex';
        el.directorVarTabs.querySelectorAll('.director-var-tab').forEach((t, i) => {
          t.classList.toggle('active', i === 0);
        });
      }
      renderDirectorResult(state.directorResults[0]);
    } else {
      state.directorResults = [resultText];
      state.directorActiveVarIdx = 0;
      if (el.directorVarTabs) el.directorVarTabs.style.display = 'none';
      renderDirectorResult(resultText);
    }

    if (el.directorResultCard) {
      el.directorResultCard.style.display = 'block';
      el.directorResultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const toastMsg = hasKey
      ? `🎬 Сгенерировано через ${DIRECTOR_MODEL_BADGES[model] || 'OpenRouter'}!`
      : '🎬 Сгенерировано демо! Подключите OpenRouter API Key для неограниченной генерации через живые LLM.';
    showToast(toastMsg, hasKey ? '⚡' : 'ℹ️');

  } catch (err) {
    console.error('Director generation error:', err);
    showToast(`Ошибка генерации: ${err.message}`, '❌');
  } finally {
    state.isDirectorGenerating = false;
    if (el.directorGenerateBtn) el.directorGenerateBtn.disabled = false;
    if (el.directorGenerateBtnText) el.directorGenerateBtnText.textContent = 'Сгенерировать с AI';
    if (el.directorProgressBar) el.directorProgressBar.style.display = 'none';
  }
}

function generateOfflineDirectorContent(mode, genre, concept) {
  const cleanConcept = concept.replace(/[«»"]/g, '');
  const translated = translateRussianIdea(cleanConcept);

  if (mode === 'scene') {
    return `Cinematography Master Scene: ${translated}. Filmed on ARRI Alexa Mini LF paired with Cooke Anamorphic 35mm T2.3 prime lens. Volumetric atmospheric haze with natural directional key lighting and subtle rim separation. Rich organic color grading with deep shadow rolloff, authentic 35mm Kodak 5219 film grain, tactile micro-textures, and high dynamic range highlights.`;
  }

  if (mode === 'variations') {
    return `${translated}. Epic wide establishing shot captured on IMAX 70mm, 24mm wide angle, colossal volumetric scale and dramatic god rays cutting through low-hanging atmospheric clouds.
===VARIATION 2===
${translated}. Moody neo-noir intimate close-up on Leica M11 with Summilux 50mm f/1.4, high-contrast chiaroscuro shadows, subtle neon rim light, rain-slicked glistening surfaces.
===VARIATION 3===
${translated}. Dynamic handheld action tracking on RED V-Raptor 8K, 35mm anamorphic, energetic kinetic momentum, motion blur streaks, tactile particulate dust in the air.`;
  }

  if (mode === 'shots') {
    return `[SHOT 1: EXTREME WIDE ESTABLISHING]
Camera: DJI Mavic 3 Cine Hasselblad 24mm, slow sweeping crane descent from 50ft.
Action: Vast environmental panorama of ${translated}, establishing spatial geometry and massive scale.
Lighting: Cool pre-dawn ambient blue hour with warm amber highlights in the distance.

[SHOT 2: MEDIUM ACTION TRACKING]
Camera: ARRI Alexa Mini LF on Steadicam with Cooke 40mm Anamorphic lens, f/2.0.
Action: Dynamic lateral track keeping pace with the central subject moving through the environment.
Lighting: Directional volumetric key light with subtle rim edge separation and haze.

[SHOT 3: MACRO DETAIL CLOSE-UP]
Camera: Sony FX3 Cinema Line with 100mm f/2.8 Macro lens, razor-thin depth of field.
Action: Extreme focus on tactile micro-texture, eye reflections, and environmental particulate moisture.
Lighting: Soft directional Rembrandt illumination with rich velvety shadow falloff.`;
  }

  // Polish mode
  return `Master Cinematography Prompt: ${translated}. Captured on ARRI Alexa 35 with Panavision Primo 70 optics. Authentic optical depth of field with organic bokeh circles, subtle halation on highlight edges, volumetric particulate suspension, and rich Kodak Vision3 color science without digital over-sharpening.`;
}

// ==========================================================================
// REVERSE VIDEO AI (DECONSTRUCTION ENGINE & GEMINI VISION)
// ==========================================================================

function initVideoAnalyzer() {
  updateVisionBadge();

  // 1. Collapse Toggle
  if (el.analyzerCollapseBtn && el.analyzerBody) {
    el.analyzerCollapseBtn.addEventListener('click', () => {
      const isCollapsed = el.analyzerBody.classList.toggle('collapsed');
      el.analyzerCollapseBtn.classList.toggle('collapsed', isCollapsed);
      el.analyzerCollapseBtn.title = isCollapsed ? 'Развернуть модуль' : 'Свернуть модуль';
    });
  }

  // 2. Settings Modal
  if (el.analyzerSettingsBtn) {
    el.analyzerSettingsBtn.addEventListener('click', openApiKeyModal);
  }
  if (el.visionBadge) {
    el.visionBadge.addEventListener('click', openApiKeyModal);
  }
  if (el.closeApiKeyModalBtn) {
    el.closeApiKeyModalBtn.addEventListener('click', closeApiKeyModal);
  }
  if (el.apiKeyModal) {
    el.apiKeyModal.addEventListener('click', (e) => {
      if (e.target === el.apiKeyModal) closeApiKeyModal();
    });
  }
  if (el.toggleKeyVisibilityBtn && el.geminiApiKeyInput) {
    el.toggleKeyVisibilityBtn.addEventListener('click', () => {
      const isPass = el.geminiApiKeyInput.type === 'password';
      el.geminiApiKeyInput.type = isPass ? 'text' : 'password';
      el.toggleKeyVisibilityBtn.textContent = isPass ? '🔒' : '👁️';
    });
  }
  if (el.toggleOpenRouterKeyBtn && el.openRouterApiKeyInput) {
    el.toggleOpenRouterKeyBtn.addEventListener('click', () => {
      const isPass = el.openRouterApiKeyInput.type === 'password';
      el.openRouterApiKeyInput.type = isPass ? 'text' : 'password';
      el.toggleOpenRouterKeyBtn.textContent = isPass ? '🔒' : '👁️';
    });
  }
  if (el.saveApiKeyBtn) {
    el.saveApiKeyBtn.addEventListener('click', () => {
      const geminiKey = (el.geminiApiKeyInput?.value || '').trim();
      const openRouterKey = (el.openRouterApiKeyInput?.value || '').trim();
      state.geminiApiKey = geminiKey;
      state.openRouterApiKey = openRouterKey;

      if (geminiKey) {
        localStorage.setItem('promptforge_gemini_api_key', geminiKey);
      } else {
        localStorage.removeItem('promptforge_gemini_api_key');
      }

      if (openRouterKey) {
        localStorage.setItem('promptforge_openrouter_api_key', openRouterKey);
      } else {
        localStorage.removeItem('promptforge_openrouter_api_key');
      }

      showToast('Настройки API-ключей успешно сохранены!', '🔑');
      updateVisionBadge();
      closeApiKeyModal();
    });
  }
  if (el.clearApiKeyBtn) {
    el.clearApiKeyBtn.addEventListener('click', () => {
      state.geminiApiKey = '';
      state.openRouterApiKey = '';
      if (el.geminiApiKeyInput) el.geminiApiKeyInput.value = '';
      if (el.openRouterApiKeyInput) el.openRouterApiKeyInput.value = '';
      localStorage.removeItem('promptforge_gemini_api_key');
      localStorage.removeItem('promptforge_openrouter_api_key');
      updateVisionBadge();
      closeApiKeyModal();
      showToast('Все API-ключи удалены', '🧹');
    });
  }
  if (el.useDemoOfflineBtn) {
    el.useDemoOfflineBtn.addEventListener('click', () => {
      closeApiKeyModal();
      runReverseVideoAnalysis(true);
    });
  }

  // 3. Banner & Breakdown Buttons
  if (el.openKeyFromBannerBtn) {
    el.openKeyFromBannerBtn.addEventListener('click', openApiKeyModal);
  }
  if (el.restoreDirectorPromptBtn) {
    el.restoreDirectorPromptBtn.addEventListener('click', () => {
      const p = state.videoAnalysis.directorPrompt;
      if (!p) {
        showToast('Нет сохраненного режиссерского AI-промпта из видео', '⚠️');
        return;
      }
      state.customDirectorPrompt = p;
      state.promptFormat = 'master';
      if (el.formatMasterBtn) el.formatMasterBtn.classList.add('active');
      if (el.formatStructuredBtn) el.formatStructuredBtn.classList.remove('active');
      updateLivePrompt();
      const terminal = document.querySelector('.terminal-card');
      if (terminal) {
        terminal.style.transition = 'box-shadow 0.3s ease';
        terminal.style.boxShadow = '0 0 35px rgba(245, 158, 11, 0.6)';
        setTimeout(() => { terminal.style.boxShadow = ''; }, 1000);
      }
      showToast('Режиссерский AI-промпт перенесен в окно терминала!', '🎬');
    });
  }
  if (el.copyBreakdownBtn) {
    el.copyBreakdownBtn.addEventListener('click', () => {
      if (!state.lastBreakdownText) {
        showToast('Нет данных разбора для копирования', '⚠️');
        return;
      }
      navigator.clipboard.writeText(state.lastBreakdownText).then(() => {
        showToast('Разбор видеоряда скопирован в буфер!', '📋');
      }).catch(err => {
        console.error('Clipboard error:', err);
        showToast('Не удалось скопировать разбор', '❌');
      });
    });
  }

  // 4. URL Loading
  if (el.pasteUrlBtn) {
    el.pasteUrlBtn.addEventListener('click', async () => {
      try {
        const clipText = await navigator.clipboard.readText();
        if (clipText) {
          el.videoUrlInput.value = clipText.trim();
          showToast('Ссылка вставлена из буфера', '📋');
        }
      } catch (err) {
        if (el.videoUrlInput) el.videoUrlInput.focus();
        showToast('Вставьте ссылку с помощью Ctrl+V', 'ℹ️');
      }
    });
  }
  if (el.loadUrlBtn) {
    el.loadUrlBtn.addEventListener('click', handleLoadVideoUrl);
  }
  if (el.videoUrlInput) {
    el.videoUrlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleLoadVideoUrl();
      }
    });
  }

  // 5. File Drag & Drop
  if (el.videoDropZone) {
    el.videoDropZone.addEventListener('click', () => {
      if (el.videoFileInput) el.videoFileInput.click();
    });
    el.videoDropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      el.videoDropZone.classList.add('dragover');
    });
    el.videoDropZone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
      el.videoDropZone.classList.remove('dragover');
    });
    el.videoDropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      el.videoDropZone.classList.remove('dragover');
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleVideoFile(files[0]);
      }
    });
  }

  if (el.videoFileInput) {
    el.videoFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleVideoFile(e.target.files[0]);
      }
    });
  }

  // 6. Test Sample Video
  if (el.loadSampleVideoBtn) {
    el.loadSampleVideoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      loadSampleVideo();
    });
  }

  // 7. Remove Video
  if (el.removeVideoBtn) {
    el.removeVideoBtn.addEventListener('click', resetVideoAnalyzer);
  }

  // 8. Run Analysis
  if (el.analyzeVideoBtn) {
    el.analyzeVideoBtn.addEventListener('click', () => runReverseVideoAnalysis(false));
  }
}

function updateVisionBadge() {
  const hasGemini = Boolean(state.geminiApiKey);
  const hasOpenRouter = Boolean(state.openRouterApiKey);
  const hasAnyKey = hasGemini || hasOpenRouter;

  // 1. Gemini Vision Badge (in Video Analyzer header)
  if (el.visionBadge) {
    if (hasGemini) {
      el.visionBadge.classList.add('has-key');
      el.visionBadge.textContent = 'Gemini Flash ✓';
      el.visionBadge.title = 'Gemini Flash Vision подключен • Нажмите для настроек';
    } else {
      el.visionBadge.classList.remove('has-key');
      el.visionBadge.textContent = 'Gemini Vision';
      el.visionBadge.title = 'Нажмите для ввода Gemini API Key (для реального зрения)';
    }
  }

  // 2. Gemini Sub-Item in Banner (removed long parenthesis text per user request)
  if (el.geminiBannerSubItem) {
    if (hasGemini) {
      el.geminiBannerSubItem.classList.add('is-connected');
    } else {
      el.geminiBannerSubItem.classList.remove('is-connected');
    }
  }
  if (el.apiKeyBannerText) {
    el.apiKeyBannerText.textContent = hasGemini ? 'Gemini Vision' : 'Gemini: нет';
  }

  // 3. OpenRouter Sub-Item in Banner
  if (el.openRouterBannerSubItem) {
    if (hasOpenRouter) {
      el.openRouterBannerSubItem.classList.add('is-connected');
    } else {
      el.openRouterBannerSubItem.classList.remove('is-connected');
    }
  }
  if (el.openRouterBannerText) {
    el.openRouterBannerText.textContent = hasOpenRouter ? 'OpenRouter' : 'OpenRouter: нет';
  }

  // 4. Overall Banner Status & Settings Buttons
  if (el.apiKeyBanner) {
    if (hasAnyKey) {
      el.apiKeyBanner.classList.add('is-connected');
    } else {
      el.apiKeyBanner.classList.remove('is-connected');
    }
  }

  if (el.openKeyFromBannerBtn) {
    el.openKeyFromBannerBtn.textContent = 'Настройки';
    if (hasAnyKey) {
      el.openKeyFromBannerBtn.classList.add('is-connected');
      el.openKeyFromBannerBtn.classList.remove('is-disconnected');
      el.openKeyFromBannerBtn.title = 'API активен • Нажмите для изменения настроек или ключей';
    } else {
      el.openKeyFromBannerBtn.classList.remove('is-connected');
      el.openKeyFromBannerBtn.classList.add('is-disconnected');
      el.openKeyFromBannerBtn.title = 'Ключи не подключены • Нажмите для ввода API-ключей';
    }
  }

  if (el.analyzerSettingsBtn) {
    if (hasAnyKey) {
      el.analyzerSettingsBtn.classList.add('is-connected');
      el.analyzerSettingsBtn.classList.remove('is-disconnected');
    } else {
      el.analyzerSettingsBtn.classList.remove('is-connected');
      el.analyzerSettingsBtn.classList.add('is-disconnected');
    }
  }
}

function openApiKeyModal() {
  if (!el.apiKeyModal) return;
  if (el.geminiApiKeyInput) el.geminiApiKeyInput.value = state.geminiApiKey || '';
  if (el.openRouterApiKeyInput) el.openRouterApiKeyInput.value = state.openRouterApiKey || '';
  el.apiKeyModal.style.display = 'flex';
}

function closeApiKeyModal() {
  if (!el.apiKeyModal) return;
  el.apiKeyModal.style.display = 'none';
}

function handleLoadVideoUrl() {
  const url = (el.videoUrlInput?.value || '').trim();
  if (!url) {
    showToast('Введите ссылку на видеофайл или соцсеть', '⚠️');
    return;
  }

  const isSocial = /instagram\.com|tiktok\.com|youtube\.com\/shorts|youtu\.be/i.test(url);
  if (isSocial) {
    showToast('Ссылки соцсетей защищены CORS. Сохраните ролик на ПК и перетащите в Drag & Drop!', '⚠️');
    return;
  }

  const name = url.split('/').pop().split('?')[0] || 'online-video.mp4';
  loadVideoSource(url, name);
  showToast('Загрузка видео по ссылке...', '🌐');
}

function handleVideoFile(file) {
  if (!file) return;
  const isVideo = file.type.startsWith('video/') || /\.(mp4|mov|webm|m4v)$/i.test(file.name);
  if (!isVideo) {
    showToast('Пожалуйста, выберите видео (.mp4, .mov, .webm)', '⚠️');
    return;
  }

  if (file.size > 120 * 1024 * 1024) {
    showToast('Файл больше 100 МБ. Рекомендуется использовать видео до 100 МБ', '⚠️');
  }

  state.videoAnalysis.file = file;
  const blobUrl = URL.createObjectURL(file);
  loadVideoSource(blobUrl, file.name);
  showToast(`Загружен файл: ${file.name}`, '📹');
}

function loadSampleVideo() {
  const samplePath = 'motions/dolly-in.mp4';
  loadVideoSource(samplePath, 'demo-dolly-in-cinematic.mp4');
  showToast('Загружено демонстрационное видео «Dolly-In»', '🎬');
}

function loadVideoSource(sourceUrl, name) {
  state.videoAnalysis.sourceUrl = sourceUrl;
  state.videoAnalysis.fileName = name;
  state.videoAnalysis.frames = [];

  if (el.previewFileName) el.previewFileName.textContent = name;
  if (el.previewFileMeta) el.previewFileMeta.textContent = 'Подготовка...';
  if (el.videoPreviewContainer) el.videoPreviewContainer.style.display = 'flex';
  if (el.videoDropZone) el.videoDropZone.style.display = 'none';
  if (el.videoBreakdownCard) el.videoBreakdownCard.style.display = 'none';
  if (el.extractedFramesStrip) {
    el.extractedFramesStrip.innerHTML = '<div style="font-size:0.72rem; color:var(--text-muted); padding:6px;">Извлечение кадров...</div>';
  }
  if (el.framesCountBadge) el.framesCountBadge.textContent = '0 кадров';

  if (!el.analyzerVideoPlayer) return;
  el.analyzerVideoPlayer.src = sourceUrl;
  el.analyzerVideoPlayer.load();

  el.analyzerVideoPlayer.onloadedmetadata = async () => {
    const dur = el.analyzerVideoPlayer.duration || 5;
    const w = el.analyzerVideoPlayer.videoWidth || 1920;
    const h = el.analyzerVideoPlayer.videoHeight || 1080;
    state.videoAnalysis.duration = dur;
    state.videoAnalysis.width = w;
    state.videoAnalysis.height = h;

    const mins = Math.floor(dur / 60);
    const secs = Math.floor(dur % 60).toString().padStart(2, '0');
    if (el.previewFileMeta) {
      el.previewFileMeta.textContent = `${mins}:${secs} • ${w}x${h}`;
    }

    await extractKeyframesFromVideo(el.analyzerVideoPlayer, 5);
  };
}

async function extractKeyframesFromVideo(videoEl, count = 5) {
  try {
    const duration = videoEl.duration;
    if (!duration || isNaN(duration)) return;

    const timestamps = [];
    for (let i = 1; i <= count; i++) {
      timestamps.push((duration / (count + 1)) * i);
    }

    const canvas = document.createElement('canvas');
    const origW = videoEl.videoWidth || 640;
    const origH = videoEl.videoHeight || 360;
    const scale = Math.min(1, 480 / origW);
    canvas.width = Math.round(origW * scale);
    canvas.height = Math.round(origH * scale);
    const ctx = canvas.getContext('2d');

    const frames = [];
    const savedTime = videoEl.currentTime;
    videoEl.muted = true;

    for (const t of timestamps) {
      await new Promise(resolve => {
        const onSeeked = () => {
          videoEl.removeEventListener('seeked', onSeeked);
          resolve();
        };
        videoEl.addEventListener('seeked', onSeeked);
        videoEl.currentTime = t;
      });

      ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.70);
      const m = Math.floor(t / 60);
      const s = Math.floor(t % 60).toString().padStart(2, '0');
      const timeLabel = `${m}:${s}`;
      frames.push({
        time: t,
        timeLabel,
        dataUrl,
        base64: dataUrl.split(',')[1]
      });
    }

    videoEl.currentTime = savedTime;
    state.videoAnalysis.frames = frames;

    if (el.extractedFramesStrip) {
      el.extractedFramesStrip.innerHTML = frames.map(f => `
        <div class="frame-thumb-card">
          <img src="${f.dataUrl}" alt="Кадр ${f.timeLabel}">
          <span class="frame-time-chip">${f.timeLabel}</span>
        </div>
      `).join('');
    }

    if (el.framesCountBadge) {
      el.framesCountBadge.textContent = `${frames.length} кадров готовы`;
    }

    showToast(`Извлечено ${frames.length} ключевых кадров для анализа`, '🎞️');
  } catch (err) {
    console.error('Frame extraction error:', err);
    if (el.extractedFramesStrip) {
      el.extractedFramesStrip.innerHTML = '<div style="font-size:0.72rem; color:var(--text-muted); padding:6px;">Кадры готовы к анализу</div>';
    }
  }
}

function resetVideoAnalyzer() {
  state.videoAnalysis = {
    sourceUrl: '',
    fileName: '',
    duration: 0,
    width: 0,
    height: 0,
    frames: [],
    directorPrompt: '',
    isAnalyzing: false
  };
  state.customDirectorPrompt = '';
  state.lastBreakdownText = '';

  if (el.videoBreakdownCard) el.videoBreakdownCard.style.display = 'none';
  if (el.analyzerVideoPlayer) {
    el.analyzerVideoPlayer.pause();
    el.analyzerVideoPlayer.src = '';
  }
  if (el.videoPreviewContainer) el.videoPreviewContainer.style.display = 'none';
  if (el.videoDropZone) el.videoDropZone.style.display = 'flex';
  if (el.extractedFramesStrip) el.extractedFramesStrip.innerHTML = '';
  if (el.framesCountBadge) el.framesCountBadge.textContent = '0 кадров';
  if (el.laserScannerOverlay) el.laserScannerOverlay.style.display = 'none';
  if (el.analyzerStatusBar) el.analyzerStatusBar.style.display = 'none';
  if (el.videoAnalyzerCard) el.videoAnalyzerCard.classList.remove('active-analyzing');
  if (el.analyzeVideoBtn) el.analyzeVideoBtn.disabled = false;
  if (el.analyzeVideoBtnText) el.analyzeVideoBtnText.textContent = 'AI-анализ';
  if (el.videoUrlInput) el.videoUrlInput.value = '';
  if (el.videoFileInput) el.videoFileInput.value = '';
  updateLivePrompt();
  showToast('Видео сброшено', '🧹');
}

async function runReverseVideoAnalysis(isOfflineDemo = false) {
  if (!state.videoAnalysis.frames || state.videoAnalysis.frames.length === 0) {
    showToast('Сначала загрузите видеофайл или нажмите «Загрузить пример»', '⚠️');
    return;
  }

  // If no API key and NOT an explicit offline demo:
  if (!state.geminiApiKey && !isOfflineDemo) {
    showToast('Для анализа реального видео подключите бесплатный Google Gemini API Key', '🔑');
    openApiKeyModal();
    return;
  }

  state.videoAnalysis.isAnalyzing = true;
  el.analyzeVideoBtn.disabled = true;
  el.analyzeVideoBtnText.textContent = isOfflineDemo ? 'Офлайн демо-анализ...' : 'Gemini AI Анализ в процессе...';
  if (el.laserScannerOverlay) el.laserScannerOverlay.style.display = 'block';
  if (el.analyzerStatusBar) el.analyzerStatusBar.style.display = 'flex';
  if (el.videoAnalyzerCard) el.videoAnalyzerCard.classList.add('active-analyzing');

  function setProgress(pct, msg) {
    if (el.statusProgressFill) el.statusProgressFill.style.width = pct + '%';
    if (el.statusPercentage) el.statusPercentage.textContent = pct + '%';
    if (el.statusStepText) el.statusStepText.textContent = msg;
  }

  try {
    setProgress(15, '1/4 Извлечение и калибровка 5 ключевых кадров...');
    await new Promise(r => setTimeout(r, 400));

    let analysisResult = null;

    if (!isOfflineDemo && state.geminiApiKey) {
      setProgress(40, '2/4 Передача кадров в Gemini Vision...');
      
      const dynamicSteps = [
        { pct: 52, msg: '2/4 Анализ геометрии помещения, стен и отделки...' },
        { pct: 68, msg: '2/4 Определение траектории камеры и оптики...' },
        { pct: 82, msg: '3/4 Декомпозиция освещения и динамики сцены...' },
        { pct: 92, msg: '4/4 Синтез режиссерского мастер-промпта...' }
      ];
      let stepIdx = 0;
      const progressTimer = setInterval(() => {
        if (stepIdx < dynamicSteps.length) {
          const s = dynamicSteps[stepIdx++];
          setProgress(s.pct, s.msg);
        }
      }, 1000);

      try {
        analysisResult = await callGeminiVisionAPI(state.geminiApiKey, state.videoAnalysis.frames);
      } catch (apiErr) {
        clearInterval(progressTimer);
        console.error('Gemini Vision API error:', apiErr);
        const errMsg = apiErr.message || 'Ошибка сети/ключа';
        showToast(`Ошибка Gemini API: ${errMsg}`, '⚠️');
        
        const proceedWithOffline = confirm(`Gemini Vision API вернул ошибку:\n"${errMsg}"\n\nЖелаете запустить тестовый офлайн-демо разбор?`);
        if (proceedWithOffline) {
          isOfflineDemo = true;
          analysisResult = generateHeuristicVideoDeconstruction();
        } else {
          openApiKeyModal();
          return;
        }
      } finally {
        clearInterval(progressTimer);
      }
    } else {
      setProgress(40, '2/4 Офлайн-эвристика метаданных видеофайла...');
      await new Promise(r => setTimeout(r, 600));
      analysisResult = generateHeuristicVideoDeconstruction();
    }

    setProgress(75, '3/4 Декомпозиция локации, оптики и динамики сцены...');
    await new Promise(r => setTimeout(r, 450));

    setProgress(95, '4/4 Синтез режиссерского мастер-промпта...');
    await new Promise(r => setTimeout(r, 350));

    setProgress(100, 'Анализ завершен!');
    await new Promise(r => setTimeout(r, 250));

    applyDeconstructedVideoResult(analysisResult, isOfflineDemo);
  } catch (err) {
    console.error('Video Analysis Error:', err);
    showToast('Ошибка при анализе видео: ' + (err.message || 'Сбой'), '❌');
  } finally {
    setTimeout(() => {
      if (el.laserScannerOverlay) el.laserScannerOverlay.style.display = 'none';
      if (el.analyzerStatusBar) el.analyzerStatusBar.style.display = 'none';
      if (el.videoAnalyzerCard) el.videoAnalyzerCard.classList.remove('active-analyzing');
      el.analyzeVideoBtn.disabled = false;
      el.analyzeVideoBtnText.textContent = 'AI-анализ';
      state.videoAnalysis.isAnalyzing = false;
    }, 800);
  }
}

async function callGeminiVisionAPI(apiKey, frames) {
  // Candidate list of active Google Flash Vision models (prioritizing the latest gemini-3.8-flash)
  const candidateModels = [
    'gemini-3.8-flash',
    'gemini-3.7-flash',
    'gemini-3.5-flash',
    'gemini-3.5-flash-lite'
  ];

  const systemInstruction = `You are a world-class Hollywood Director of Photography, Cinematographer, and AI Video Generation Prompt Master (expert in Google Veo 3.1, Gemini Omni 1.1, MiniMax-H3, Runway Gen-3, Sora, and Kling).
Carefully analyze all the provided video keyframes in chronological sequence.
Deconstruct what is ACTUALLY happening in the video: the exact environment/room, objects, architectural details, transformation/renovation progress, camera movement trajectory, focal length, lighting architecture, colors, and physical dynamics.

You MUST respond ONLY with a raw JSON object with this EXACT structure (no markdown fences, no explanatory text):
{
  "breakdown": {
    "format": "Формат и тип видеоряда (например: 3D-анимация / таймлапс ремонта / гиперлапс интерьера / натурная съемка)",
    "location": "Подробное описание локации и интерьера/окружения (материалы, цвета стен/пола, мебель, техника, планировка)",
    "camera": "Движение камеры, ракурс и угол съемки (например: Плавный пролет вперед с нижнего яруса на мезонин, легкий панорамный разворот)",
    "lighting": "Схема освещения и атмосфера (естественный дневной свет из окон, мягкое рассеянное заполнение, теплые акцентные светильники)",
    "dynamics": "Динамика изменений и действия в кадре (постепенная трансформация отделки, монтаж кухни, обустройство мебелью)"
  },
  "idea": "2-3 детальных предложения на русском языке, точно и емко описывающие происходящее в ролике (что за сцена, пространство, объекты и трансформация)",
  "camera": "arri-alexa",
  "lens": "wide-35mm",
  "lighting": "cinematic",
  "style": "photorealistic",
  "composition": "medium-shot",
  "motion": "dolly-in",
  "director_prompt": "A comprehensive, production-ready English text-to-video master prompt specifically engineered for Veo 3.1 / Gemini Omni / MiniMax-H3 / Runway Gen-3 / Sora. Describe the exact scene, subject, architecture, materials, lighting, fluid transformation dynamics, camera move, and physics in a continuous unbroken shot without any cuts or watermarks.",
  "sound_design": "Specific ambient audio and synchronized diegetic sound matching this actual scene"
}

Available IDs for fields:
- camera: canon-r5, sony-a7rv, sony-fx3, leica-m11, hasselblad, nikon-z9, arri-alexa, red-raptor, iphone16, dji-mavic, vintage-film, gopro13
- lens: ultra-wide-14mm, ultra-wide-16mm, wide-24mm, wide-35mm, lens-50mm, standard-85mm, tele-135mm, tele-70-200mm, super-tele-300mm, macro-100mm, anamorphic-cine
- lighting: cinematic, natural-window, studio-softbox, chiaroscuro, rembrandt, golden-hour, blue-hour, neon-glow, volumetric, cyberpunk-glow, high-key, foggy-overcast
- style: photorealistic, editorial-fashion, cyberpunk, hyperrealism, vintage-70s, analog-film, minimalism, dark-fantasy, retro-synthwave, anime, moody-noir, concept-art
- composition: close-up, medium-shot, cowboy-shot, full-shot, extreme-wide, dutch-angle, eye-level, high-angle, birds-eye, over-the-shoulder, ground-level
- motion: dolly-in, dolly-out, orbit-clockwise, tracking-shot, crane-up, chase-shot, handheld-shot, fast-zoom-in`;

  // Build standard multi-part payload according to official Gemini REST API spec
  const parts = [
    { text: systemInstruction },
    ...frames.slice(0, 5).map(f => ({
      inlineData: {
        mimeType: 'image/jpeg',
        data: f.base64
      }
    }))
  ];
  const contents = [{ parts }];

  let lastError = null;

  for (const model of candidateModels) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const abortCtrl = new AbortController();
    const timeoutTimer = setTimeout(() => abortCtrl.abort(), 60000);

    // Build model-specific generationConfig (camelCase per Google REST API v1beta spec)
    const primaryConfig = {
      temperature: 0.2,
      responseMimeType: 'application/json',
      thinkingConfig: {
        thinkingLevel: 'LOW'
      }
    };

    try {
      // Step 1: Send with low thinking latency & JSON output
      let response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: abortCtrl.signal,
        body: JSON.stringify({
          contents,
          generationConfig: primaryConfig
        })
      });

      // Step 2: Fallback if thinkingConfig is rejected by this model version
      if (!response.ok && response.status === 400) {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: abortCtrl.signal,
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.2,
              responseMimeType: 'application/json'
            }
          })
        });
      }

      // Step 3: Raw fallback if responseMimeType is rejected
      if (!response.ok && response.status === 400) {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: abortCtrl.signal,
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.2
            }
          })
        });
      }

      clearTimeout(timeoutTimer);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errMsg = errorData?.error?.message || `HTTP ${response.status}`;
        lastError = new Error(errMsg);

        if (errMsg.includes('API key not valid') || (response.status === 400 && errMsg.includes('API_KEY_INVALID'))) {
          throw lastError;
        }
        console.warn(`Model ${model} failed (${response.status}):`, errMsg);
        continue;
      }

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      if (!rawText) throw new Error('Пустой ответ от Gemini Vision');

      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('Не удалось извлечь JSON из ответа Gemini');

      const parsed = JSON.parse(jsonMatch[0]);
      return parsed;
    } catch (err) {
      clearTimeout(timeoutTimer);
      lastError = err;
      if (err.name === 'AbortError') {
        console.warn(`Timeout waiting for model ${model}, proceeding to next model...`);
        lastError = new Error('Превышено время ожидания ответа от нейросети (таймаут 60с).');
        continue;
      }
      if (err.message && (err.message.includes('API key not valid') || err.message.includes('API_KEY_INVALID'))) {
        throw err;
      }
    }
  }

  throw lastError || new Error('Не удалось получить ответ от Gemini Vision');
}

function generateHeuristicVideoDeconstruction() {
  const isVertical = state.videoAnalysis.height > state.videoAnalysis.width;
  const fileName = (state.videoAnalysis.fileName || '').toLowerCase();

  let detectedMotion = 'dolly-in';
  if (fileName.includes('orbit')) detectedMotion = 'orbit-clockwise';
  else if (fileName.includes('crane')) detectedMotion = 'crane-up';
  else if (fileName.includes('tracking') || fileName.includes('chase')) detectedMotion = 'chase-shot';
  else if (fileName.includes('handheld')) detectedMotion = 'handheld-shot';
  else if (fileName.includes('zoom')) detectedMotion = 'fast-zoom-in';

  let detectedCamera = isVertical ? 'iphone16' : 'arri-alexa';
  let detectedLens = isVertical ? 'wide-35mm' : 'anamorphic-cine';
  let detectedLighting = 'cinematic';
  let detectedStyle = 'photorealistic';
  let detectedComposition = isVertical ? 'medium-shot' : 'close-up';

  const defaultRussianDesc = isVertical
    ? 'Демо-режим: Вертикальный динамичный видеоряд с выразительным акцентом на центральном объекте в теплом кинематографическом свете.'
    : 'Демо-режим: Горизонтальный кинематографичный план с глубокой проработкой атмосферы, объемным светом и плавным движением камеры вперед.';

  const directorPrompt = `Cinematic ${isVertical ? 'vertical 9:16 portrait frame' : 'widescreen 16:9 cinematic shot'}, filmed on ${detectedCamera === 'arri-alexa' ? 'ARRI Alexa Mini LF' : 'iPhone 16 Pro Max 48MP'} with ${detectedLens === 'anamorphic-cine' ? 'Cooke Anamorphic 2x cine lens, subtle horizontal streak flares and soft oval bokeh' : '35mm prime lens, natural optical clarity'}. Camera executes a smooth ${detectedMotion.replace('-', ' ')} with realistic physical inertia. Atmospheric volumetric lighting, authentic tactile micro-textures, 4K resolution, color graded with warm organic film tone. Single unbroken take, no sudden scene cuts, no watermark.`;

  return {
    breakdown: {
      format: isVertical ? 'Мобильный вертикальный формат (9:16)' : 'Кинематографичный широкоэкранный формат (16:9)',
      location: 'Офлайн демо-эвристика: подключите Gemini API Key для глубокого распознавания реальной сцены и объектов',
      camera: `Камера ${detectedCamera}, движение ${detectedMotion}`,
      lighting: 'Объемное кинематографическое освещение с мягким заполнением',
      dynamics: 'Плавное непрерывное перемещение камеры без монтажных склеек'
    },
    idea: defaultRussianDesc,
    camera: detectedCamera,
    lens: detectedLens,
    lighting: detectedLighting,
    style: detectedStyle,
    composition: detectedComposition,
    motion: detectedMotion,
    director_prompt: directorPrompt,
    sound_design: 'Ambient room presence, subtle cinematic motion whoosh'
  };
}

function applyDeconstructedVideoResult(result, isOfflineDemo = false) {
  if (!result) return;

  const autoFill = el.autoFillParamsCheck ? el.autoFillParamsCheck.checked : true;
  const updatePrompt = el.updateTerminalPromptCheck ? el.updateTerminalPromptCheck.checked : true;

  // 1. Build and Display Visual Breakdown Card
  if (el.videoBreakdownCard && el.breakdownContent) {
    const bd = result.breakdown || {};
    const formatVal = bd.format || 'Видеоряд';
    const locVal = bd.location || result.idea || 'Сцена';
    const camVal = bd.camera || (result.motion ? `Движение: ${result.motion}` : 'Плавная камера');
    const lightVal = bd.lighting || (result.lighting ? `Свет: ${result.lighting}` : 'Кинематографичный свет');
    const dynVal = bd.dynamics || 'Непрерывное развитие сцены';

    el.breakdownContent.innerHTML = `
      <div class="breakdown-item">
        <span class="breakdown-label">🎬 Формат:</span>
        <span class="breakdown-val">${escapeHtml(formatVal)}</span>
      </div>
      <div class="breakdown-item">
        <span class="breakdown-label">📍 Локация и окружение:</span>
        <span class="breakdown-val">${escapeHtml(locVal)}</span>
      </div>
      <div class="breakdown-item">
        <span class="breakdown-label">🎥 Камера и ракурс:</span>
        <span class="breakdown-val">${escapeHtml(camVal)}</span>
      </div>
      <div class="breakdown-item">
        <span class="breakdown-label">💡 Освещение:</span>
        <span class="breakdown-val">${escapeHtml(lightVal)}</span>
      </div>
      <div class="breakdown-item">
        <span class="breakdown-label">⚡ Динамика трансформации:</span>
        <span class="breakdown-val">${escapeHtml(dynVal)}</span>
      </div>
      ${result.sound_design ? `
      <div class="breakdown-item">
        <span class="breakdown-label">🔊 Саунд-дизайн:</span>
        <span class="breakdown-val" style="color:#a1a1aa; font-style:italic;">${escapeHtml(result.sound_design)}</span>
      </div>
      ` : ''}
    `;

    state.lastBreakdownText = `РАЗБОР ВИДЕОРЯДА (${isOfflineDemo ? 'ОФЛАЙН ДЕМО' : 'GEMINI VISION'}):\n` +
      `• Формат: ${formatVal}\n` +
      `• Локация: ${locVal}\n` +
      `• Камера: ${camVal}\n` +
      `• Освещение: ${lightVal}\n` +
      `• Динамика: ${dynVal}\n` +
      (result.sound_design ? `• Звук: ${result.sound_design}\n` : '') +
      `\nРЕЖИССЕРСКИЙ ПРОМПТ:\n${result.director_prompt || ''}`;

    el.videoBreakdownCard.style.display = 'block';
  }

  // 2. Auto-fill Constructor Inputs
  if (autoFill) {
    if (result.idea) {
      state.idea = result.idea;
      if (el.ideaInput) el.ideaInput.value = result.idea;
      if (el.charCounter) el.charCounter.textContent = `${result.idea.length} / 500`;
      scheduleOnlineTranslation(result.idea);
    }

    if (result.camera && CAMERA_BODIES.some(c => c.id === result.camera)) {
      state.selectedCamera = result.camera;
      renderCameraOptions();
    }
    if (result.lens && LENSES.some(l => l.id === result.lens)) {
      state.selectedLens = result.lens;
      renderLensOptions();
    }
    if (result.lighting && LIGHTING.some(li => li.id === result.lighting)) {
      state.selectedLighting = result.lighting;
      renderLightingOptions();
    }
    if (result.style && STYLES.some(s => s.id === result.style)) {
      state.selectedStyle = result.style;
      renderStyleOptions();
    }
    if (result.composition && COMPOSITIONS.some(cp => cp.id === result.composition)) {
      state.selectedComposition = result.composition;
      renderCompositionOptions();
    }
    if (result.motion && VIDEO_MOTIONS.some(m => m.id === result.motion)) {
      state.selectedVideoMotion = result.motion;
      renderVideoMotionOptions();
    }
  }

  // 3. Update Prompt in Terminal
  if (updatePrompt) {
    setMode('video');
    if (result.director_prompt) {
      state.videoAnalysis.directorPrompt = result.director_prompt;
      state.customDirectorPrompt = result.director_prompt;
      updateLivePrompt();
    } else {
      state.videoAnalysis.directorPrompt = '';
      state.customDirectorPrompt = '';
      updateLivePrompt();
    }
  } else {
    state.videoAnalysis.directorPrompt = result.director_prompt || '';
    state.customDirectorPrompt = '';
    updateLivePrompt();
  }

  // Visual amber flash on the terminal to indicate update
  const terminal = document.querySelector('.terminal-card');
  if (terminal) {
    terminal.style.transition = 'box-shadow 0.3s ease';
    terminal.style.boxShadow = '0 0 35px rgba(245, 158, 11, 0.6)';
    setTimeout(() => {
      terminal.style.boxShadow = '';
    }, 1200);
  }

  const toastMsg = isOfflineDemo
    ? '⚠️ Офлайн-демо завершено. Для анализа реальных видео подключите Gemini API Key!'
    : '🎬 Видео деконструировано через Gemini Vision! Разбор и промпт готовы.';
  showToast(toastMsg, isOfflineDemo ? 'ℹ️' : '✨');
}

// --- TOAST UTILITY ---

function showToast(message, icon = 'ℹ️') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  el.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// Initialize on DOM load or immediately if already ready
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

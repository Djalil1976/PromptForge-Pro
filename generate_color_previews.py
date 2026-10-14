import os
from PIL import Image, ImageEnhance, ImageOps
import numpy as np

src_path = 'compositions/side-profile.jpg'
if not os.path.exists(src_path):
    raise FileNotFoundError(f"Source not found: {src_path}")

base_img = Image.open(src_path).convert('RGB')
# Resize to a clean 640x360 (16:9)
target_w, target_h = 640, 360
base_img = base_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
arr = np.array(base_img, dtype=np.float32)

def clamp(a):
    return np.clip(a, 0, 255).astype(np.uint8)

# 1. teal-orange
# Rich complementary hues: teal in shadows/darks, warm orange/amber in highlights/skin
def grade_teal_orange(img_arr):
    out = img_arr.copy()
    lum = 0.299 * out[:, :, 0] + 0.587 * out[:, :, 1] + 0.114 * out[:, :, 2]
    norm_lum = lum / 255.0
    
    # Shadows: teal (blue + green boost, red reduce)
    shadow_mask = np.clip(1.0 - norm_lum * 1.5, 0.0, 1.0)
    out[:, :, 0] -= shadow_mask * 35.0
    out[:, :, 1] += shadow_mask * 15.0
    out[:, :, 2] += shadow_mask * 45.0
    
    # Highlights: warm orange (red + yellow boost, blue reduce)
    high_mask = np.clip(norm_lum * 1.4 - 0.2, 0.0, 1.0)
    out[:, :, 0] += high_mask * 35.0
    out[:, :, 1] += high_mask * 10.0
    out[:, :, 2] -= high_mask * 35.0
    
    # Contrast S-curve
    res = Image.fromarray(clamp(out))
    res = ImageEnhance.Contrast(res).enhance(1.22)
    res = ImageEnhance.Color(res).enhance(1.25)
    return res

# 2. monochrome (Moody Noir B&W)
def grade_monochrome(img_arr):
    # Dramatic high-contrast black and white
    lum = 0.35 * img_arr[:, :, 0] + 0.55 * img_arr[:, :, 1] + 0.10 * img_arr[:, :, 2]
    mono = np.stack([lum, lum, lum], axis=-1)
    # Deep crushed blacks, crisp silvers
    mono = (mono - 20) * 1.25
    res = Image.fromarray(clamp(mono))
    res = ImageEnhance.Contrast(res).enhance(1.35)
    return res

# 3. warm-kodak (Warm Kodak Portra)
def grade_warm_kodak(img_arr):
    out = img_arr.copy()
    lum = (0.299 * out[:, :, 0] + 0.587 * out[:, :, 1] + 0.114 * out[:, :, 2]) / 255.0
    
    # Kodak Portra: warm golden amber, gentle lifted shadows, gentle magenta in midtones
    out[:, :, 0] = out[:, :, 0] * 1.12 + 10.0
    out[:, :, 1] = out[:, :, 1] * 1.04 + 4.0
    out[:, :, 2] = out[:, :, 2] * 0.88 - 5.0
    
    # Lift shadows slightly for analog milky black
    lift = np.clip(1.0 - lum * 2.0, 0.0, 1.0) * 12.0
    out[:, :, 0] += lift
    out[:, :, 1] += lift * 0.7
    out[:, :, 2] += lift * 0.3
    
    res = Image.fromarray(clamp(out))
    res = ImageEnhance.Contrast(res).enhance(1.08)
    res = ImageEnhance.Color(res).enhance(1.15)
    return res

# 4. pastel (Pastel Dreamscape)
def grade_pastel(img_arr):
    out = img_arr.copy()
    lum = (0.299 * out[:, :, 0] + 0.587 * out[:, :, 1] + 0.114 * out[:, :, 2]) / 255.0
    
    # Soft lifted airy look, low contrast, delicate powder blue and soft peach
    out = out * 0.75 + 65.0  # compress contrast and lift shadows
    out[:, :, 0] += 12.0     # peach warmth
    out[:, :, 1] += 4.0
    out[:, :, 2] += 18.0     # powder blue tone
    
    res = Image.fromarray(clamp(out))
    res = ImageEnhance.Contrast(res).enhance(0.9)
    res = ImageEnhance.Color(res).enhance(0.85)
    res = ImageEnhance.Brightness(res).enhance(1.08)
    return res

# 5. vivid-neon (Vivid Neon Noir)
def grade_vivid_neon(img_arr):
    out = img_arr.copy()
    lum = (0.299 * out[:, :, 0] + 0.587 * out[:, :, 1] + 0.114 * out[:, :, 2]) / 255.0
    
    # Dark shadows, vivid fuchsia, ultraviolet and neon blue
    out = (out - 30) * 1.15
    # Boost magenta/fuchsia and neon blue
    out[:, :, 0] = out[:, :, 0] * 1.15 + (1.0 - lum) * 15.0  # red/magenta in shadows
    out[:, :, 1] = out[:, :, 1] * 0.85                      # reduce green
    out[:, :, 2] = out[:, :, 2] * 1.35 + 25.0               # strong electric blue
    
    res = Image.fromarray(clamp(out))
    res = ImageEnhance.Contrast(res).enhance(1.4)
    res = ImageEnhance.Color(res).enhance(1.7)
    return res

# 6. muted-nordic (Muted Scandinavian)
def grade_muted_nordic(img_arr):
    out = img_arr.copy()
    lum = (0.299 * out[:, :, 0] + 0.587 * out[:, :, 1] + 0.114 * out[:, :, 2]) / 255.0
    
    # Cool slate blues, desaturated greens and reduced warmth
    out[:, :, 0] = out[:, :, 0] * 0.78                      # cut red/orange
    out[:, :, 1] = out[:, :, 1] * 0.92 + 8.0                # cold greenish-slate
    out[:, :, 2] = out[:, :, 2] * 1.15 + 18.0               # cold blue wash
    
    res = Image.fromarray(clamp(out))
    res = ImageEnhance.Contrast(res).enhance(1.1)
    res = ImageEnhance.Color(res).enhance(0.68)             # desaturated Scandinavian mood
    return res

# 7. golden-hour (Golden Hour Glow)
def grade_golden_hour(img_arr):
    out = img_arr.copy()
    lum = (0.299 * out[:, :, 0] + 0.587 * out[:, :, 1] + 0.114 * out[:, :, 2]) / 255.0
    
    # Radiant rich honey sunbeams, amber warm glow
    out[:, :, 0] = out[:, :, 0] * 1.36 + 28.0
    out[:, :, 1] = out[:, :, 1] * 1.02 + 4.0
    out[:, :, 2] = out[:, :, 2] * 0.78 - 10.0
    
    # Extra honey warmth in midtones and highlights
    high_mask = np.clip(lum * 1.3 - 0.1, 0.0, 1.0)
    out[:, :, 0] += high_mask * 20.0
    out[:, :, 1] += high_mask * 8.0
    
    res = Image.fromarray(clamp(out))
    res = ImageEnhance.Contrast(res).enhance(1.15)
    res = ImageEnhance.Color(res).enhance(1.3)
    return res

# 8. cyber-green (Cyber Green & Emerald / Matrix)
def grade_cyber_green(img_arr):
    out = img_arr.copy()
    lum = (0.299 * out[:, :, 0] + 0.587 * out[:, :, 1] + 0.114 * out[:, :, 2]) / 255.0
    
    # Matrix emerald green wash across shadows and midtones
    out[:, :, 0] = out[:, :, 0] * 0.65 - 10.0               # suppress red
    out[:, :, 1] = out[:, :, 1] * 1.35 + 28.0               # strong emerald green
    out[:, :, 2] = out[:, :, 2] * 0.75                      # suppress blue
    
    res = Image.fromarray(clamp(out))
    res = ImageEnhance.Contrast(res).enhance(1.25)
    res = ImageEnhance.Color(res).enhance(1.2)
    return res

# 9. vintage-sepia (Sepia Antique)
def grade_vintage_sepia(img_arr):
    # Sepia toning on black & white base
    lum = 0.299 * img_arr[:, :, 0] + 0.587 * img_arr[:, :, 1] + 0.114 * img_arr[:, :, 2]
    out = np.zeros_like(img_arr)
    # Warm antique brown/amber sepia tone
    out[:, :, 0] = np.clip(lum * 1.15 + 25.0, 0, 255)
    out[:, :, 1] = np.clip(lum * 0.95 + 12.0, 0, 255)
    out[:, :, 2] = np.clip(lum * 0.70 - 5.0, 0, 255)
    
    res = Image.fromarray(clamp(out))
    res = ImageEnhance.Contrast(res).enhance(1.15)
    return res

grades = {
    'teal-orange': grade_teal_orange,
    'monochrome': grade_monochrome,
    'warm-kodak': grade_warm_kodak,
    'pastel': grade_pastel,
    'vivid-neon': grade_vivid_neon,
    'muted-nordic': grade_muted_nordic,
    'golden-hour': grade_golden_hour,
    'cyber-green': grade_cyber_green,
    'vintage-sepia': grade_vintage_sepia
}

for pal_id, func in grades.items():
    graded = func(arr)
    out_file = f'colors/{pal_id}.jpg'
    graded.save(out_file, 'JPEG', quality=92)
    print(f"Generated {out_file} ({os.path.getsize(out_file)} bytes)")

print("All 9 color grades generated successfully!")

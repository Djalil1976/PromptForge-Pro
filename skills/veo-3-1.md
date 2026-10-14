---
name: veo-3-1-cinematic
model: veo-3.1
description: Спецификация генерации кинематографического видео и звука для Google Veo 3.1 (1080p/4K 24fps). Непрерывный план, точная физика оптики, синхронизированная аудиосреда и фоли.
version: 1.0.0
media_type: video
---

# Google Veo 3.1 — Cinematic Video & Audio Specification

## 1. Базовые параметры модели
- **Модель:** Google DeepMind Veo 3.1 (`veo-3.1`)
- **Разрешение:** До 4K (1080p / 2160p)
- **Частота кадров:** 24 fps (кинематографический стандарт)
- **Длительность:** 4–10 секунд (оптимально 8 секунд)
- **Аудио:** Встроенный нативный синхронный саунд-дизайн (дистанционные шумы, фоли, акустика помещения, речевые паттерны)
- **Поддерживаемые форматы кадра:** 16:9 (кино / ландшафт), 9:16 (вертикальный рилс/шортс), 2.39:1 (анаморфот), 4:3, 1:1

---

## 2. Архитектура и структура промпта

Для получения максимального фотореализма и плавности движения каждый промпт для Veo 3.1 формируется по следующей кинематографической формуле:

```
[Объект и центральное действие] + [Окружение, архитектура и физика среды] + [Оптика, камера и траектория движения] + [Светотеневой рисунок и цветокоррекция] + [Синхронный звуковой дизайн (Audio Foley)]
```

### Пример идеальной структуры:
> "A master craftsman in his 50s carefully examines an antique brass mechanical clock with intricate gears under warm workbench illumination. The camera performs a smooth, continuous dolly-in on an ARRI Alexa with an anamorphic 50mm T1.5 lens, producing creamy bokeh and shallow depth-of-field. Subtle dust motes float through the volumetric tungsten rays. Authentic fluid micro-movements, realistic skin subsurface scattering. Audio: delicate metallic ticking, faint creak of wooden floorboards, soft breathing, distant city hum outside."

---

## 3. Ключевые правила и ограничения (Hard Rules)

1. **Единый непрерывный план (Continuous Unbroken Shot):**
   - Veo 3.1 идеально удерживает один непрерывный кадр. Никогда не используйте фразы "cuts to", "then switches to", "fast montage". Вместо склеек используйте внутрикадровый монтаж (панорама, наезд, переход фокуса).
2. **Точная терминология движения камеры:**
   - Используйте профессиональные термины: *Smooth Dolly In, Slow Tracking Shot, Orbit Arc 45°, Pan Right, Handheld Shaky-Cam, Crane Boom Down, FPV Glide*.
3. **Физическая оптика вместо "мусорных слов":**
   - Запрещены слова-паразиты: `photorealistic, 8k, hyper-detailed, masterpiece, trending on artstation`.
   - Вместо них указывайте оптику: *ARRI Alexa Mini LF, 35mm Anamorphic, Cooke S4/i prime, f/1.8 aperture, natural chromatic aberration, realistic optical flare*.
4. **Синхронизированное аудио:**
   - Всегда описывайте акустику пространства: эхо в зале, шуршание гравия, плеск воды, глухой бас мотора.

---

## 4. Негативные ограничения по умолчанию
- `unnatural morphing, sudden camera cuts, multiple scenes, floating disjointed limbs, flickering artifacts, oversaturated digital glow, CGI plastic look, amateur shutter speed`

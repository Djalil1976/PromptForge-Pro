---
name: imagen-3-photorealism
model: imagen-3
description: Спецификация генерации фотореалистичных изображений для Google Imagen 3. Физическая оптика, микротекстуры, естественное освещение, удаление паразитных слов (buzzwords).
version: 1.0.0
media_type: image
---

# Google Imagen 3 — Optical Photorealism Specification

## 1. Базовые параметры модели
- **Модель:** Google DeepMind Imagen 3 (`imagen-3`)
- **Тип генерации:** Статичные фотореалистичные кадры, концепт-арт, предметная и портретная фотография.
- **Главная сила:** Исключительная детализация текстур кожи, ткани, дерева, стекла, волос и мелких надписей без галлюцинаций.
- **Понимание естественного языка:** Модель обучена на глубоком семантическом понимании естественной речи и презирает списки бессвязных тегов через запятую.

---

## 2. Структура промпта

Для Imagen 3 эффективнее всего работает связный описательный абзац, построенный по принципу описания реальной фотосъемки:

```
[Объект съёмки и его поза/эмоция] + [Материалы и микротекстуры] + [Окружение и глубина сцены] + [Камера, сенсор, фокусное расстояние и диафрагма] + [Освещение: направление, температура кельвинов, тени]
```

### Пример промпта:
> "Close-up cinematic portrait of an elderly watchmaker with weathered skin, deep laugh lines, and focused hazel eyes. Wearing a charcoal wool vest and rolled-up linen sleeves. In the background, softly blurred wooden shelves with tiny brass gears and vintage horology tools in warm amber bokeh. Captured on a Hasselblad H6D-100c medium format camera with an 80mm f/2.2 prime lens. Natural directional daylight spilling through a northern window with subtle gold reflector fill, crisp optical clarity, authentic pore texture."

---

## 3. Табуированные слова (Anti-Buzzwords)
Следующие слова **строго запрещены** в промптах для Imagen 3, так как они ухудшают генерацию и делают изображение пластиковым:
- `photorealistic, ultra realistic, hyperrealistic, 8k, 4k, octane render, unreal engine 5, masterpiece, award winning, best quality`.

Вместо них используйте точные физические термины: *natural subsurface scattering, tactile weave of heavy linen, medium format chromatic fidelity, soft shadow falloff, subtle film grain*.

---
name: minimax-h3-cinematic
model: minimax-h3
description: Спецификация 2K кинематографического видео и 32kHz синхронизированного аудио для MiniMax-H3 (Hailuo). Трехблочная архитектура, таймкоды, физический импульс и референсы.
version: 1.0.0
media_type: video
---

# MiniMax-H3 — 2K Video & 32kHz Synchronized Audio Specification

## 1. Базовые параметры модели
- **Модель:** MiniMax-H3 (`minimax-h3` / Hailuo)
- **Разрешение:** Родные 2K (2048x1080) при 24fps
- **Аудио:** 32 кГц кристально чистый синхронизированный стереозвук (шумы, диалоги, фоли, эмбиент)
- **Поддержка референсов:** Теги `@Image1`, `@Video1` для точного удержания персонажа и окружения

---

## 2. Формула промпта
Промпт MiniMax-H3 строится по 3 ключевым блокам:
1. **[Core Action & Subject]:** Ядро сцены, персонаж или объект, физическое действие и импульс.
2. **[Camera Dynamics & Atmosphere]:** Траектория движения камеры, глубина резкости, освещение и частицы.
3. **[Soundscape]:** Детализированный звуковой слой.

### Пример:
> "Medium tracking shot following a runner through a rain-slicked neon alley in Tokyo. Camera glides alongside at waist height on a stabilized gimbal. Cinematic 2K anamorphic lighting with cyan and magenta lens flares reflecting in wet puddles. Pacing accelerates smoothly. Synchronized audio: rhythmic sneaker splashes in standing water, heavy breathing, muffled distant bass rhythm from an underground club, gentle rainfall patter on metal awnings."

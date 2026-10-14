---
name: omni-1-1-flash-director
model: omni-1.1-flash
description: Спецификация генерации видео и звука для Gemini Omni 1.1 Flash. Темпоральные таймкоды, непрерывное динамическое движение, референс-теги и встроенный звуковой ландшафт.
version: 1.0.0
media_type: video
---

# Gemini Omni 1.1 Flash — High-Speed Video & Soundscape Specification

## 1. Базовые параметры модели
- **Модель:** Google DeepMind Gemini Omni 1.1 Flash (`omni-1.1-flash`)
- **Ключевое преимущество:** Сверхбыстрая генерация слитного видео и звука, превосходное понимание темпоральной динамики и референсных изображений.
- **Длительность:** 4–8 секунд
- **Звук:** Глубокий звуковой дизайн (Soundscape & Foley), синхронизированный с физикой движения на экране.
- **Поддержка референсов:** Теги `<FIRST_FRAME>`, `<IMAGE_REF_0>`, `<IMAGE_REF_1>` для бесшовного продолжения или редактирования кадров.

---

## 2. Темпоральная архитектура промпта

Omni 1.1 Flash наилучшим образом реагирует на четкую разметку времени в промпте с явным разделением на визуальный ряд и саунд-дизайн:

```
[Continuous Shot Overview]
[0-3s]: [Начальное состояние сцены, фокус и начальное движение камеры]
[3-6s]: [Развитие действия, кульминация динамики, изменение траектории]
[Sound Design]: [Точные окружающие шумы, контактный звук, атмосферный низкочастотный гул]
```

### Пример промпта для Omni 1.1 Flash:
> "Continuous unbroken shot.
> [0-2s]: A matte-black cybernetic vehicle accelerates across wet asphalt in heavy rain, headlights slicing through misty neon reflections, camera tracks low from the rear bumper.
> [2-5s]: The vehicle drifts sharply around a tight industrial corner, tires churning up misty water sprays, camera performs a dynamic low-angle orbit into a three-quarter frontal perspective.
> [Sound Design]: Wet tire screech with hydroplaning slosh, deep resonant electric motor whine, thunderous exhaust rumble, heavy raindrops drumming on aluminum hood."

---

## 3. Рекомендации и правила
1. **Динамика движения:** Модель великолепно обрабатывает быстрые кинетические сцены — скорость, порывы ветра, летящие искры, всплески жидкостей.
2. **Никаких фальшивых склеек:** Обязательно фиксируйте "Continuous unbroken shot", чтобы исключить мерцание между кадрами.
3. **Физическая плотность среды:** Указывайте атмосферные взвеси (туман, дым, пар, дождь, неоновый смог) для придания пространственной глубины.

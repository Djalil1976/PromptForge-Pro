@echo off
title PromptForge PRO - Google AI Studio (Veo 3.1 & Omni 1.1 Flash)
cd /d "%~dp0"
echo ========================================================
echo   PromptForge PRO - Google AI Studio Prompt Generator
echo   Models: Google Veo 3.1, Omni 1.1 Flash & Imagen 3
echo ========================================================
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    echo Zapusk lokalnogo HTTP-servera na http://127.0.0.1:8088...
    start "" "http://127.0.0.1:8088/index.html"
    python -m http.server 8088 --bind 127.0.0.1
) else (
    echo Zapusk cherez pryamoy fayl index.html...
    start "" "%~dp0index.html"
    exit
)

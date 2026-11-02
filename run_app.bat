@echo off
title PromptForge PRO - AI Prompt Studio (Omni 1.1 Flash, MiniMax-H3 & Imagen 3)
cd /d "%~dp0"
echo ========================================================
echo   PromptForge PRO - AI Prompt Studio Generator
echo   Models: Gemini Omni 1.1 Flash, MiniMax-H3 & Imagen 3
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

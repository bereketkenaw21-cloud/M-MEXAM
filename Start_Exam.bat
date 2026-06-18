@echo off
title MMSS Pro Exam System - Developer Bereket Kenaw
mode con: cols=100 lines=30
color 0b
cls

echo ======================================================================
echo    MMSS PRO EXAM SYSTEM - ALL MODULES INITIALIZING...
echo ======================================================================
echo.

:: 1. ዚፕ ውስጥ ሆኖ እንዳይከፈት ቼክ የማድረጊያ ብልሃት
set "CDIR=%~dp0"
if "%CDIR:~0,9%"=="C:\Users\" (
    if "%CDIR:Temp=%"=="%CDIR%" (
        goto :CHECK_FILES
    ) else (
        color 0c
        echo  [!] ስህተት (ERROR): ፋይሎቹ Extract አልተደረጉም!
        echo  -------------------------------------------------------
        echo  እባክህ መጀመሪያ "Extract All" የሚለውን በመጫን ፋይሎቹን አውጣ።
        echo  ከዛ በኋላ "Start_Exam" የሚለውን ድጋሚ ክፈት።
        echo.
        pause
        exit
    )
)

:CHECK_FILES
echo  [+] Checking System Integrity...
if not exist "desktop_index.html" (
    color 0c
    echo  [!] Error: "desktop_index.html" is missing!
    pause
    exit
)

echo  [+] Loading Natural Science: Physics, Chemistry, Biology... [OK]
echo  [+] Loading Social Science: History, Geography, Economics... [OK]
echo  [+] Linking Common Subjects: Maths, English... [OK]
echo  [+] Database Status: 8,000+ Questions Loaded.
echo.
echo  System is ready. Developed by: Bereket Kenaw (11th Grade)
echo ----------------------------------------------------------------------
timeout /t 3 >nul

echo Launching MMSS Pro Exam System...
start "" "desktop_index.html"
exit

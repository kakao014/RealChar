@echo off
setlocal enabledelayedexpansion

set "eslintPath=C:\Users\UserName\AppData\Roaming\npm\eslint"  
set "projectPath=D:\Yc\Projects\AI\RealChar\ycChar\RealChar\client\web\src"  

for /r "%projectPath%" %%F in (*.js) do (
    "%eslintPath%" --fix "%%F"
)

echo 文件修复完成！



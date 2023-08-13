#!/bin/bash

FOR /R %%F IN (*.js) DO (
    eslint --fix "%%F"
)

# 这个脚本使用 `find` 命令来查找项目中的所有 `.js` 文件，并对每个文件应用 `eslint --fix` 命令来自动修复代码。
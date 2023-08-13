const fs = require('fs');
const path = require('path');
const { format } = require('prettier');

// 遍历目录下的所有文件
function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 如果是目录，则递归遍历
      traverseDirectory(filePath);
    } else if (path.extname(file) === '.js') {
      // 如果是JavaScript文件，则修复格式错误
      fixFormat(filePath);
    }
  });
}

// 修复格式错误
async function fixFormat(filePath) {
  const code = await fs.promises.readFile(filePath, 'utf-8');
  const formattedCode = format(code, { parser: 'babel' });

  await fs.promises.writeFile(filePath, formattedCode.toString(), 'utf-8');
}

// 指定要遍历的目录
const directoryPath = './src/utils';

// 开始遍历
traverseDirectory(directoryPath);
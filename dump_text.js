const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/sections');
const files = fs.readdirSync(dir);

let output = '';

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    // Extract everything that looks like a JSX text node or string literal in tags.
    // Actually, just dumping the whole file is fine, but maybe too large.
    // Let's just output the file name and its contents.
    output += `\n\n--- ${file} ---\n`;
    output += content;
  }
});

fs.writeFileSync(path.join(__dirname, 'all_text.txt'), output);
console.log('Dumped to all_text.txt');

const glob = require('glob');
const fs = require('fs');
const pwd = process.cwd();

const MDFiles = glob.sync(pwd + '/articles/**/*.md');
const items = [];

MDFiles.forEach((filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  console.log(filePath);
  const filename = filePath.match(/articles\/(.*).md/)[1];
  const text = ((fileContent.match(/^#\s*(.*)/m) || [])[1] || '').trim();

  if (!text) {
    throw new Error('No #title found in file: ' + filePath)
  }
  
  const obj = { text, link: `/articles/${filename}.md` };
  items.push(obj);
});

fs.writeFileSync(pwd + '/.vitepress/sidebar.json', JSON.stringify(items));

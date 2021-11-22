/* eslint-disable */
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const SVGSpriter = require('svg-sprite');
const readline = require('readline');

console.log('Script running');
const ICONS_PATH = 'src-icons';
const spriter = new SVGSpriter({
  dest: 'src/common',
  mode: {
    symbol: {
      dest: '',
      sprite: 'icons-sprite',
    },
  },
});

const icons = fs.readdirSync(ICONS_PATH);

const printProgress = (progress) => {
  readline.clearLine(progress.stdout);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(progress);
};

console.log('Resolving icons...');
icons.forEach((icon, index) => {
  try {
    printProgress(`Resolved ${index + 1} icons of ${icons.length}`);
    spriter.add(path.resolve(`${ICONS_PATH}/${icon}`), icon, fs.readFileSync(`${ICONS_PATH}/${icon}`, { encoding: 'utf-8' }));
  } catch (e) {
    console.error(e);
  }
});

console.log('Compiling sprite...');
spriter.compile((error, result, data) => {
  try {
    for (const type in result.symbol) {
      mkdirp.sync(path.dirname(result.symbol[type].path));
      fs.writeFileSync(result.symbol[type].path, result.symbol[type].contents);
    }
    console.log('Done');
  } catch (e) {
    console.error(e);
  }
});

/* eslint-disable */
const path = require('path');
const fs = require('fs');

function readSrcIcons() {
  const iconFilenames = fs.readdirSync(path.resolve(__dirname, '../src-icons'));
  const iconFilenameWithoutExt = iconFilenames.map((ic) => ic.replace('.svg', ''));
  fs.writeFileSync(`src/common/iconNameList.ts`, `export default ${JSON.stringify(iconFilenameWithoutExt)}`);
}

readSrcIcons();

import fs from 'fs';
import path from 'path';

import { fileTypes } from './solid-icons/src/build/file-types';
import { getIcons } from './solid-icons/src/build/get-icons';

const assetsDir = `../../src/assets`;
const svgIconsPath = `${assetsDir}/svg-icons`;
const iconsPath = `${process.cwd()}/${assetsDir}/icons`;
const iconsFilePath = path.resolve(iconsPath, 'index.js');
const iconsTypesFilePath = path.resolve(iconsPath, 'index.d.ts');

const pkg = {
  shortName: '',
  packName: 'Common',
  license: 'MIT',
  url: '',
  path: svgIconsPath,
  folderName: 'icons',
};

const icons = getIcons(pkg);

const { template: mjsTemplate } = fileTypes.find(({ type }) => type === 'mjs');
const { template: typesTemplate } = fileTypes.find(
  ({ type }) => type === 'types',
);

fs.mkdirSync(iconsPath, { recursive: true });

icons.then(async (r) => {
  const mjsContents = r.map((i) => mjsTemplate(i));
  const typesContents = r.map((i) => typesTemplate(i));

  fs.writeFileSync(
    iconsFilePath,
    'import { IconTemplate } from "solid-icons";',
  );
  fs.appendFileSync(iconsFilePath, mjsContents.join('\n'));

  fs.writeFileSync(
    iconsTypesFilePath,
    `import type { IconTypes } from "solid-icons"\n`,
  );
  fs.appendFileSync(iconsTypesFilePath, typesContents.join('\n'));
});

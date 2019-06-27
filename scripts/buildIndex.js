console.time('done');
const path = require('path');
const { readdirSync, writeFileSync } = require('fs');

const srcRoot = path.resolve(__dirname, '..', 'src');
const outPath = path.join(srcRoot, 'index.ts');
const srcFiles = readdirSync(srcRoot);
const componentFiles = srcFiles.filter(file => /\.tsx$/.test(file));
const componentNames = componentFiles.map(file => file.replace(/\.tsx$/, ''));

const importLines = componentNames.map(
  name => `import ${name} from './${name}';`
);
const exportLines = componentNames.map(
  name => `export { default as ${name} } from './${name}';`
);

const indexSrc = `${importLines.join('\n')}

${exportLines.join('\n')}

export default {
  ${componentNames.join(',\n  ')}
};
`;

writeFileSync(outPath, indexSrc);
console.timeEnd('done');

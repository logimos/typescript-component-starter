module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only JSON, Markdown, YAML files
  '**/*.(json|md|mdx|yml|yaml)': (filenames) => [
    `npx prettier --write ${filenames.join(' ')}`,
  ],
};

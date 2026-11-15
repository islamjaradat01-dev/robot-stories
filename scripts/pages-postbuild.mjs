// After building into docs/ for GitHub Pages:
// - 404.html = index.html, so direct links like /robot-stories/mission/spirit open the app instead of a GitHub 404 page
// - .nojekyll, so GitHub serves the files as they are
import { copyFileSync, writeFileSync } from 'node:fs';
copyFileSync('docs/index.html', 'docs/404.html');
writeFileSync('docs/.nojekyll', '');
console.log('docs/404.html and docs/.nojekyll written');

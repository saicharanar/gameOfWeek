const fs = require('fs');

const generateTag = function (tag, content, className) {
  return '<' + tag + ' class="' + className + '">' + content + '</' + tag + '>';
};

const generateLink = function (tag, content, reference, relation) {
  return '<' + tag + ' rel="' + relation + '"' + ' href="' + reference + '">' + content + '</' + tag + '>';
};

const generateHead = function () {
  const link = generateLink('link', '', 'style.css', 'stylesheet');
  const h1 = generateTag('h1', 'Top game of the week', '');
  return generateTag('head', link + h1, '');
};

const generatePage = function () {
  const head = generateHead();
  return generateTag('html', head, '');
};

const main = function () {
  const page = generatePage();
  fs.writeFileSync('./hello.html', page, 'utf-8');
};

console.log(main());;
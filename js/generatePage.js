const fs = require('fs');

const generateTag = function (tag, content, className) {
  return '<' + tag + ' class="' + className + '">' + content + '</' + tag + '>';
};

const generateLink = function (tag, content, reference, target, relation) {
  return '<' + tag + ' rel="' + relation + '"' + ' href="' + reference + '" target="' + target + '"' + '">' + content + '</' + tag + '>';
};

const generateImg = function (source, width, height) {
  return '<img' + ' width="' + width + '" height="' + height + '" src="' + source + '">';
};

const generateHead = function () {
  const link = generateLink('link', '', 'style.css', '', 'stylesheet');
  const h1 = generateTag('h1', 'Top game of the week', '');
  return generateTag('head', link + h1, '');
};

const generateFigure = function () {
  const img = generateImg(
    'http://s01.riotpixels.net/data/6b/51/6b51250c-3809-490f-be01-0d352a19983a.jpg.1080p.jpg/cover.halo-infinite.849x1080.2020-07-22.10.jpg',
    '280', '350'
  );
  const anchor = generateLink('a', img, 'http://s01.riotpixels.net/data/6b/51/6b51250c-3809-490f-be01-0d352a19983a.jpg.1080p.jpg/cover.halo-infinite.849x1080.2020-07-22.10.jpg', '_blank', '');

  return generateTag('figure', anchor, '');
};

const generateHeader = function () {
  return generateTag('header', generateFigure(), 'best game');
};

const generateList = function (developer, publisher) {
  const dev = generateTag('li', 'Developer : ' + developer, '');
  const publish = generateTag('li', 'Publisher : ' + publisher, '');

  return generateTag('ul', dev + publish, '')
};

const generateDetails = function (developer, publisher) {
  const list = generateList(developer, publisher);
  return generateTag('div', list, 'details');
};

const generateArticle = function () {
  const header = generateHeader();
  const details = generateDetails('343i', 'Microsoft');
  const rating = generateTag(
    'div',
    'Rating : ' + '9.5/10',
    'rating'
  );

  return generateTag('article', header + details + rating, '');
};

const generateBody = function () {
  const article = generateArticle();
  const main = generateTag('main', article, 'billboard');

  return generateTag('body', main, '');
};

const generatePage = function () {
  const head = generateHead();
  const body = generateBody();
  return generateTag('html', head + body, '');
};

const main = function () {
  const page = generatePage();
  fs.writeFileSync('./hello.html', page, 'utf-8');
};

console.log(main());;
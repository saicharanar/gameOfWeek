const fs = require('fs');

const generateTag = function (tag, content, className) {
  return '<' + tag + ' class="' + className + '">' + content + '</' + tag + '>';
};

const generateLink = function (tag, content, reference, target, relation) {
  return '<' + tag + ' rel="' + relation + '"' + ' href="' + reference + '" target="' + target + '">' + content + '</' + tag + '>';
};

const generateImg = function (source, width, height) {
  return '<img' + ' width="' + width + '" height="' + height + '" src="' + source + '">';
};

const generateHead = function () {
  const link = generateLink('link', '', 'style.css', '', 'stylesheet');
  const h1 = generateTag('h1', 'Top game of the week', '');
  return generateTag('head', link + h1, '');
};

const generateFigure = function (imgSrc) {
  const img = generateImg(
    imgSrc,
    '280', '350'
  );
  const anchor = generateLink('a', img, imgSrc, '_blank', '');

  return generateTag('figure', anchor, '');
};

const generateHeader = function (imgSrc) {
  return generateTag('header', generateFigure(imgSrc), 'best game');
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

const generateArticle = function (game) {
  const header = generateHeader(game.imgSrc);
  const details = generateDetails(game.developer, game.publisher);
  const rating = generateTag(
    'div',
    'Rating : ' + game.rating,
    'rating'
  );

  return generateTag('article', header + details + rating, '');
};

const generateBody = function (game) {
  const article = generateArticle(game);
  const main = generateTag('main', article, 'billboard');

  return generateTag('body', main, '');
};

const generatePage = function (game) {
  const head = generateHead();
  const body = generateBody(game);
  return generateTag('html', head + body, '');
};

const generateSite = function (game) {
  const page = generatePage(game);
  fs.writeFileSync('./index.html', page, 'utf-8');
};

exports.generateSite = generateSite;

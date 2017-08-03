var convert = require('./convert');

var map = {
  'q': 'й',
  'w': 'ц',
  'e': 'у',
  'r': 'к',
  't': 'е',
  'y': 'н',
  'u': 'г',
  'i': 'ш',
  'o': 'щ',
  'p': 'з',
  '[': 'х',
  '{': 'Х',
  ']': 'ї',
  '}': 'Ї',
  '|': '/',
  '`': 'ё',
  '~': 'Ё',
  'a': 'ф',
  's': 'і',
  'd': 'в',
  'f': 'а',
  'g': 'п',
  'h': 'р',
  'j': 'о',
  'k': 'л',
  'l': 'д',
  ';': 'ж',
  ':': 'Ж',
  "'": 'є',
  '"': 'Є',
  'z': 'я',
  'x': 'ч',
  'c': 'с',
  'v': 'м',
  'b': 'и',
  'n': 'т',
  'm': 'ь',
  ',': 'б',
  '<': 'Б',
  '.': 'ю',
  '>': 'Ю',
  '/': '.',
  '?': ',',
  '@': '"',
  '#': '№',
  '$': ';',
  '^': ':',
  '&': '?'
};

module.exports = convert(map);

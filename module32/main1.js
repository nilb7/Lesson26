var text = 'abcdef';
var regex = new RegExp('abc')
console.log(regex.test(text))

var text1 = 'My school is the best school in the world';
var regex=/school/g;
console.log(text1.match(regex))

var regex1= /[abc]/g;
console.log(text1.match(regex1))

var regex2=/[0-9]/g;
console.log(text.match(regex2))
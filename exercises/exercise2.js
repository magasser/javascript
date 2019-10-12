var alphabetString =
"a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
"y=-.-;z=--..; =/;.=.-.-.-;,=--..--;?=..--..;!=-.-.--";


function Char(value, string) {
  this.value = value;
  this.string = string;
}

function Font(name, chars) {
  this.name = name;
  this.chars = chars;
}

Font.prototype.render = function (text) {
  var res = '';
  that = this;
  
  text.split('').forEach(function(l) {
    if(that.chars[l] === undefined) {
      res += '?'
    } else {
      res += that.chars[l].string + '/';
    }
  });

  return res;
};

Font.prototype.write = function(text, to) {
  to = to || console.log;
  to(this.render(text));
}

var chars = alphabetString.split(';');
var charMap = [];

chars.forEach(function(item) {
  var res = item.split('=');
  charMap[res[0]] = new Char(res[0], res[1]);
});

var morse = new Font('morse', charMap);

morse.write('hello world');

console.log('Done!');

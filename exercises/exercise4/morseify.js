(function($) {
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

  function createMap(alphabetString) {
    var chars = alphabetString.split(';');
    var charMap = [];

    chars.forEach(function(item) {
      var res = item.split('=');
      charMap[res[0]] = new Char(res[0], res[1]);
    });

    return charMap;
  }

  Font.prototype.render = function (text) {
    var res = '';
    that = this;

    text.split('').forEach(function(l) {
      l = l.toLowerCase();
      if(that.chars[l] === undefined) {
        res += '?'
      } else {
        res += that.chars[l].string + '/';
      }
    });

    return res;
  };

  Font.prototype.convert = function(text) {
    return this.render(text);
  }

  var morseFont = new Font('morse', createMap(alphabetString));

  $.fn.morseify = function(options) {
    return this.each(function() {
      this.innerHTML = morseFont.convert(this.innerHTML);
    });
  }

})(jQuery);

$('h1, h2, p').css('color', 'green').morseify();

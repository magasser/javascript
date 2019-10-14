var alphabetString =
		"a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;"+
		"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;"+
		"y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

function charToMorseCode(char) {
	char = char.toLowerCase();
	var res = alphabetString.match(char+'=[-./]*');

	if(res !== null){
		// res[0] is the actual result of the regex match
		return res[0].substring(res[0].indexOf('=') + 1);
	}

	return '?';
}

function convertToMorseCode(input) {
	var res = '';
	for(var i = 0; i < input.length; i++){
		res += charToMorseCode(input.charAt(i)) + ' ';
	}

	return res;
}


console.log(charToMorseCode('q'));
console.log(convertToMorseCode('Hello i am a guy. #'));
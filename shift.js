
//https://github.com/karina001/caesarCipher
//Modified by DeEn

const len = process.argv[2];
//const key = process.argv[2];

function shift_letter(letter, x){
  	var asciiVal = letter.charCodeAt(0);
  	if(asciiVal >= 65 && asciiVal <= 90){
      	asciiVal = ((asciiVal - 65 + x) % 26) + 65;
    }
  	if(asciiVal >= 97 && asciiVal <= 122){
      	asciiVal = ((asciiVal - 97 + x) % 26) + 97;
    }
  	return String.fromCharCode(asciiVal);
}

function code(text, shift){
    var codedText = "";
    for (var i=0; i<text.length; i++){
      	codedText += shift_letter(text[i], shift);
    }
	return codedText;
}

uncoded = "ZNLNFRIRA GRNZ VF URER!";
//coded = code(uncoded, key);
//console.log(coded);


for(var x = 1; x < len; x++) {
  coded = code(uncoded, x);
    console.log("Key " + x + " = " + coded);
}



//Un tout bête helloworld
alert('Hello World!')

//Existence de variable
var number = 2;
alert(typeof number); // Affiche : « number »

var text = 'Mon texte';
alert(typeof text); // Affiche : « string »

var aBoolean = false;
alert(typeof aBoolean); // Affiche : « boolean »

//intéraction avec l'utilisateur
var start = 'Bonjour ', name, end = ' !', result;
name   = prompt('Quel est votre prénom ?');
result = start + name + end;
alert(result);

var first, second, result;
first  = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = first + second;
alert(result);

//conversion avec parseint
var first, second, result;
first = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = parseInt(first) + parseInt(second);
alert(result);
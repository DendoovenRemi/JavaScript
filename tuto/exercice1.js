var age = parseInt(prompt('Quel est ton âge ?'));



if (age <= 0) { 

    alert("Tu le prends pour un c** ou t'as fait une faute de frappe?");

} else if (1 <= age && age < 18) {

    alert("T'es encore un enfant");

} else if (18 <= age && age < 50) {

    alert("T'es en âge de travailler");

} else if (50 <= age && age < 60) {

    alert("Vivement la retraite");

} else if (60 <= age && age <= 120) {

    alert("Maintenant que tu es à la retraite et que ton corp ne suis plus tu t'embette à mourir");

} else if (age > 120) { 

    alert("T'as battu Jeanne Calmant, balèze!");

} else { 

    alert("Vous n'avez pas entré d'âge !");

}
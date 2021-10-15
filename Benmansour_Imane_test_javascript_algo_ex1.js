var array_number = new Array(9);
array_number[0]= ["10","2","7","3","0","1","9","8","6"];
array_number[1]= ["9","8","3","7","6","2","5","1","4"];
array_number[2]= ["1","5","6","8","9","4","7","2","3"];
array_number[3]= ["2","3","9","1","8","5","4","6","7"];
array_number[4]= ["7","4","1","6","3","9","2","5","8"];
array_number[5]= ["5","6","8","2","4","7","1","3","9"];
array_number[6]= ["8","7","2","9","1","3","6","4","5"];
array_number[7]= ["3","9","5","4","2","6","8","7","1"];
array_number[8]= ["6","1","4","5","7","8","3","9","6"];

const divResultat = document.querySelector("#resultat")

//1)
//Tableau qui contient toutes les lignes
const to_verify = [];
//creation grille vide de 9lignes et 9colonnes
for (var ligne = 0; ligne < 9; ligne++) {
	const to_verifyLigne = []
	for (var col = 0; col < 9; col++) {
		const nombre = ''
		//Ajout val à ligne
		to_verifyLigne.push(nombre)
	}
	//Ajouter ligne dans le tab
	to_verify.push(to_verifyLigne)
}
console.log(to_verify)

//2)
const to_check = [];
F11();

//remplir grille avec tableau donnée
function F11(){
	for (var ligne = 0; ligne < array_number.length; ligne++) {
		const to_checkLigne = []
		for (var col = 0; col < array_number[ligne].length; col++) {
			//Ajout val à ligne
			if(array_number[ligne][col] !== " "){
				to_checkLigne.push(array_number[ligne][col])
			}
		}
		//Ajouter ligne dans le tab
		to_check.push(to_checkLigne)
	}
	console.log(to_check)
}

afficherGrille()

//3)
//remplir grille html 
function afficherGrille(){
	var txt = "<table><tbody>";

	for (var i = 0; i < 9; i++) {
		txt += "<tr>";
		for (var j = 0; j < 9; j++) {
			txt += "<td>"
			txt += to_check[i][j]
			txt += "</td>"
		}
		txt += "</tr>";
	}
	divResultat.innerHTML = txt;
}

F31(to_check);
F32(to_check);
F33(to_check);
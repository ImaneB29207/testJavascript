//Vérifier ligne
function F31() {
	for (var ligne=0; ligne<9; ligne++){
		const to_checkLigne = []
		for (var col=0; col<9; col++){
			to_checkLigne.push(to_check[ligne][col])
		}
		if (F21(to_checkLigne)==false){
			console.log('Line ' +ligne+' incorrect')
			console.log(to_checkLigne)
		}
	}	 
}
//Vérifier colonne
function F32() {
	for (var col=0; col<9; col++){
		const to_checkCol = []
		for (var ligne=0; ligne<9; ligne++){
			to_checkCol.push(to_check[ligne][col])
		}
		if (F21(to_checkCol)==false){
			console.log('Column ' +col+' incorrect')
			console.log(to_checkCol);
		}
	}	 
}

//Indice carré
const carres = [
	    [
	      [0, 0], [0, 1], [0, 2],
	      [1, 0], [1, 1], [1, 2],
	      [2, 0], [2, 1], [2, 2],
	    ],
	    [
	      [0, 3], [0, 4], [0, 5],
	      [1, 3], [1, 4], [1, 5],
	      [2, 3], [2, 4], [2, 5],
	    ],
	    [
	      [0, 6], [0, 7], [0, 8],
	      [1, 6], [1, 7], [1, 8],
	      [2, 6], [2, 7], [2, 8],
	    ],
	    [
	      [3, 0], [3, 1], [3, 2],
	      [4, 0], [4, 1], [4, 2],
	      [5, 0], [5, 1], [5, 2],
	    ],
	    [
	      [3, 3], [3, 4], [3, 5],
	      [4, 3], [4, 4], [4, 5],
	      [5, 3], [5, 4], [5, 5],
	    ],
	    [
	      [3, 6], [3, 7], [3, 8],
	      [4, 6], [4, 7], [4, 8],
	      [5, 6], [5, 7], [5, 8],
	    ],
	    [
	      [6, 0], [6, 1], [6, 2],
	      [7, 0], [7, 1], [7, 2],
	      [8, 0], [8, 1], [8, 2],
	    ],
	    [
	      [6, 3], [6, 4], [6, 5],
	      [7, 3], [7, 4], [7, 5],
	      [8, 3], [8, 4], [8, 5],
	    ],
	    [
	      [6, 6], [6, 7], [6, 8],
	      [7, 6], [7, 7], [7, 8],
	      [8, 6], [8, 7], [8, 8],
	    ],
	]
//Vérifier carré
function F33() {
	// Parcourir les carrés
	let indice = 0;
  	for (const carre of carres) {
    	const to_checkCarre = []
	    // Pour chaque carré
	    for (const element of carre) {
	      const ligne = element[0]
	      const col = element[1]
	      to_checkCarre.push(to_check[ligne][col])
	    }
	    if (F21(to_checkCarre)==false){
			console.log('Region ' +indice+' incorrect')
			console.log(to_checkCarre)
		}
		indice++;
	} 
}   
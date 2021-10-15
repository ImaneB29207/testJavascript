function F21(table){
	//verifier element sont des chiffres compris entre 1 et 9
	for (let item = 0; item < 9; item += 1) {
    	const val = parseInt(table[item], 10)
    	// Vérifier que le nombre est compris entre 1 et 9
    	if (val >= 1 && val <= 9){
    		const liste = new Set()
		    // Vérifier qu'il n'y a pas de doublons
		    // Parcourir les éléments
		    for (let item = 0; item < 9; item += 1){
		    	const valeur = table[item]
			     const valeurExiste = liste.has(valeur)
			     // Vérifier que l'élément n'est pas dans la liste
			     if (valeurExiste) {
			     	return false;
			     } else {
			     	// Ajouter l'élément à une liste
			        liste.add(valeur)
			     }
		    }
		    return true;
    	}else {
    		console.log('Pas compris entre 1 et 9')
    		return false;
    	}
    }

}
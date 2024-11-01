function llegirProductes() {
    try {
        const jsonData = require('./productes.json');
        return Array.isArray(jsonData) ? jsonData : [];
    } catch (error) {
        console.error('Error a la lectura del fitxer:', error.message);
        return [];
    }
}
//exercici2:

function mostrarProducte(producte) {
    console.log('Detalls del Producte:');
    console.log('-------------------');
    console.log('Nom: ' + producte.nom);
    console.log('Marca: ' + producte.marca);
    console.log('Categoria: ' + producte.categoria);
    console.log('Preu: ' + producte.preu + '€');
    if (producte.disponible) {
        console.log('Disponible: Sí');
    } else {
        console.log('Disponible: No');
    }
    console.log('Característiques:');
    const caracteristiques = producte.caracteristiques;
    for (let clau in caracteristiques) {
        console.log('- ' + clau + ': ' + caracteristiques[clau]);
    }
}

//exercici 3:
function mostrarProductes(productes) {
    if (!Array.isArray(productes) || productes.length === 0) {
        console.log('No hi ha productes');
        return;
    }

    console.log('llista:');
    
    productes.forEach(producte => {
        mostrarProducte(producte);
    });
}

//exercici 4:
function mostrarProducteID(productes, id) {
    if (!Array.isArray(productes) || productes.length === 0) {
        console.log('No hi ha productes');
        return;
    }

    const producte = productes.find(p => p.id === id);
    
    if (!producte) {
        console.log('No sha trobat cap producte amb lID: ' + id);
        return;
    }

    mostrarProducte(producte);
}


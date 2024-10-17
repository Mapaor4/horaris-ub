
// URL de la qual vols obtenir dades
const url = 'https://www.ub.edu/guiaacademica/?codEnsenyament=TG1035&curs=2024&idioma=CAT';

// Opcions per simular una sol·licitud GET
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
};

// Funció per obtenir les dades
async function obtenirAssignatura(idAssignatura) {
  try {
    const response = await fetch(`${url}&idAssignatura=${idAssignatura}`, options);
    const data = await response.json();
    
    if (data.errors === null) {
      mostrarDades(data.datos.assignatura);
    } else {
      console.error('Error obtenint dades: ', data.errors);
    }
  } catch (error) {
    console.error('Error en la petició: ', error);
  }
}

// Funció per mostrar les dades a la pàgina
function mostrarDades(assignatura) {
  const horarisDiv = document.getElementById('horaris');
  horarisDiv.innerHTML = `
    <h2>${assignatura.descAssignatura}</h2>
    <p>Ensenyament: ${assignatura.descEnsenyament}</p>
    <p>Curs: ${assignatura.curs}</p>
    <p>Crèdits: ${assignatura.creditsAssignatura}</p>
    <p>Tipus: ${assignatura.tipusAssignatura[0].descTipusAssignatura}</p>
  `;
}

// Exemple per obtenir dades d'una assignatura concreta
obtenirAssignatura('360589'); // Id de "Astrofísica i Cosmologia"

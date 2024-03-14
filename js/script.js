const getInfoBanderas = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3/all");
    if (!response.ok) {
      throw new Error("ha surgido un error", response.status);
    }

    const data = await response.json();
    const dataFilterPaises = data.filter(
      (pais) => pais.name && pais.name.common
    );
    //console.log(data)
    return dataFilterPaises;
  } catch (error) {
    console.log("error al obtener los datos", error);
  }
};

const nuevaInfo = (name, pais) => {
  let container = document.getElementById(name);
  //ordenar
  pais.sort((a, b) => a.name.common.localeCompare(b.name.common));

  //filtrar/DOM
  pais.forEach((pais) => {
    let InfoPais = `<div>
        <img src='${pais.flags[1]}' alt='Flag of ${pais.name.common}'>
        <h2>${pais.name.common}</h2>
        <h3>Capital:${pais.capital}</h3>
        <p>Población: ${pais.population}</p>
        <p>Lado de conducción: ${pais.car.side}</p>
        
        </div>`;

    container.innerHTML += InfoPais;

    // console.log(pais)
  });
};
//ordenar Cadena.prototipo.localeCompare()

getInfoBanderas().then((data) => nuevaInfo("countries-list", data));
//no se como guardar info para que se vea cuando haces click con event click 
// //ocultar
// const visible =()=>{
//   let div = document.getElementById('etiqueta');
//   div.style.visibility= 'visible';
// }
// const oculto=()=>{
//   let div = document.getElementById('etiqueta');
//   div.style.visibility ='hidden';
// }

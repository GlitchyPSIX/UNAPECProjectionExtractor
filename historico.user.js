// ==UserScript==
// @name         Extractor de Proyección UNAPEC
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Porque esta gente decidió cambiar el sistema sin más y no retornar la funcionalidad que tanto nos gustaba
// @author       GlitchyPSI
// @match        https://sso.unapec.edu.do/PROD/bwskotrn.P_ViewTran
// @icon         https://unapec.edu.do/media/1431/favicon.ico
// @grant        none
// ==/UserScript==


const descargarStr = (filename, text) => {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const exportarHistoricoJson = (carrera) => {
    if (carrera.length < 4 || typeof(carrera) != "string"){
        alert("Inserta el ID del pénsum de tu carrera");
        return;
    }
const strAprobaciones = ["A", "B", "C", "E", "L"];
    // Dame todos los elementos en el body que muestra los datos de las materias
    let nodearr = [...document.querySelector("table.datadisplaytable tbody").childNodes];
    // Extraer todos los tablerow
    let trarr = [...nodearr.filter(x => x.nodeName == "TR")];
    // Extraer todas las celdas que tengan como texto algo con 3 caracteres de longitdu (Una materia)
    let tdarr = trarr.map(x => x.firstChild.nextSibling).filter(x => x.nodeName == "TD" && x.textContent.length == 3);
    // Ay mi madre.
    // Buscar las materias que tengan como cuarto elemento (calificación) cada una de las letras que estén en strAprobaciones
    // L a mi parecer es Convalidación pero no estoy seguro
    let tdarrAprobadas = tdarr.filter(x => strAprobaciones.includes(x.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent) );
    // Ay mi madre x2
    // Buscar las materias que tengan como cuarto elemento (horas de calidad) un número float
    // Esto es porque en el espacio donde normalmente hay una calificación, hay un número aquí
    let tdArrCursando = tdarr.filter(x => !isNaN(parseFloat(x.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent)) );
    let materias = tdarrAprobadas.map(x => `${x.textContent}${x.nextElementSibling.textContent}`);
    let materiasCursando = tdArrCursando.map(x => `${x.textContent}${x.nextElementSibling.textContent}`);

    // en PensumExtractor, Optativa Deporte es genérica
    for(var i=0; i < materias.length; i++) {
        materias[i] = materias[i].replace(/DEP\d+/g, 'OPTDEP');
    };

    for(var j=0; j < materiasCursando.length; j++) {
        materiasCursando[j] = materiasCursando[j].replace(/DEP\d+/g, 'OPTDEP');
    };

    let pExtractorData = {
        saveVer: 6,
        currentCodeAtInputForm: carrera.toUpperCase(),
        userData: {
            passed: materias,
            onCourse: materiasCursando
        },
        filterMode: { pending: true, onCourse: true, passed: true },
        selectMode: 1
    }
    descargarStr("pensumextractordata.json", JSON.stringify(pExtractorData));
}


(function() {
    let button = document.createElement("button");
    let input = document.createElement("input");
    let msg = document.createElement("span");
    let container = document.createElement("div");
    input.id = "PSIX_carrera";
    container.style="padding: 0.5em; background-color: #366FFF; border-radius:0.25em; display:inline;";
    msg.textContent="Escriba aquí el código de su carrera: ";
    msg.style="color: #FFF;";
    button.textContent = "Descargar JSON para PensumExtractor";
    button.onclick = () => {
        let carrera = document.querySelector("#PSIX_carrera").value;
        exportarHistoricoJson(carrera);
    }
    container.appendChild(msg);
    container.appendChild(input);
    container.appendChild(button);
    document.querySelector("table .captiontext").appendChild(container);
})();


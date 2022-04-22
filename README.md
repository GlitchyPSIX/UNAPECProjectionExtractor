# UNAPECProjectionExtractor

Extractor de datos de Histórico Académico (Banner) para uso en el [PensumExtractor de Fernando Rivas (scydact)](https://scydact.github.io/pensum-extractor/)

Hecho porque a la gente de allá les dio con cambiar el sistema al que todo el mundo está acostumbrado y no implementaron nada de lo bueno que tenía el antiguo.

# Instrucciones de instalación
## 1. Requisitos
Si usas **Firefox**: [GreaseMonkey](https://addons.mozilla.org/es/firefox/addon/greasemonkey/)
Si usas **Chrome, Edge, Brave, Opera** u otro navegador basado en **Chromium**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=es) o [Violentmonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)

## 2. Instalación
Haz click en el siguiente enlace para instalar el userscript:
### [Descargar](https://raw.githubusercontent.com/GlitchyPSIX/UNAPECProjectionExtractor/dominant/historico.user.js)

 
# Instrucciones de uso
1. **Con el Userscript instalado y encendido**, entra al Dashboard Estudiantil y selecciona la opción de Histórico Académico en el panel izquierdo.
2. Selecciona "Todos Los Niveles" y luego haz clic en Enviar para mostrar la página del histórico académico.
3. Escribe el código de tu pensum (p.ej. ISO10, puedes obtener esto desde el [PensumExtractor](https://scydact.github.io/pensum-extractor/)), y haz clic en el botón que dice `"Descargar JSON par PensumExtractor"`
4. Ve a PensumExtractor e introduce el código de carrera si no lo has hecho, luego haz clic en el botón de **Guardar/Cargar selección**
5. Presiona el botón `Importar progreso.json` y selecciona ahí el archivo que descargaste en el paso 3.
6. Presiona Confirmar, y las materias en el PensumExtractor reflejarán el progreso del Histórico académico.
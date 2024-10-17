document.addEventListener("DOMContentLoaded", function () {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const url = corsProxy + "https://www.ub.edu/guiaacademica/rest/guiaacademica/getPlanificacioAssignatura/360589/TG1035/2024/1/CAT";

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
      })
      .catch(error => {
          console.error("Error en la petició:", error);
      });
});

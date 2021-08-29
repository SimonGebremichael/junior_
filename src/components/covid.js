import $ from "jquery";
export default function start() {
  CovidNotification();
  return (
    <div id="covid">
      <i id="covidImg" className="fas fa-virus fa-2x"></i>
      <p>
        <label>Covid Alert:</label> Please follow Covid distancing standards &
        face coverings
      </p>
      <i id="covidDismiss" className="fas fa-times fa-2x"></i>
    </div>
  );
}

function CovidNotification() {
  $("#covidDismiss").click(() => {
    $("#covid").fadeOut();
  });

  var covidAlert = localStorage.getItem("covidAlert");
  if (covidAlert == null) sendIt();
  else {
    var mins = Math.round(
      ((Date.now() - (parseInt(covidAlert) % 86400000)) % 3600000) / 60000
    );
    if (mins >= 15) sendIt();
  }
  function sendIt() {
    $("#covid").css("display", "flex");
    localStorage.setItem("covidAlert", Date.now());
  }
}

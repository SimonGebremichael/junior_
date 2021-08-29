import CovidIMG from "../img/covid2.png";
export default function start() {
  return (
    <div id="covid2" className="section">
      <img src={CovidIMG} />
      <div id="covidInfo">
        <i id="titleTage" class="fas fa-viruses fa-1x"></i>
        <h1>Covid-19 Safty</h1>
        <br />
        <p>
          Due to the Covid-19 Pandemic in Canada, We recommend that you please
          takes the steps to ensure the safty of both you and the Technitian.
          Thank you for your understanding.
        </p>
        <br />
        <i class="fas fa-people-arrows fa-1x"></i>
        <label>Social Distance</label>
        <br />
        <br />
        <i class="fas fa-head-side-mask fa-1x"></i>
        <label>Wear Face Mask</label>
        <br />
        <br />
        <i class="fas fa-handshake-slash  fa-1x"></i>
        <label>Avoid Close Contact</label>
        <br />
        <br />
        <i class="fas fa-pump-soap  fa-1x"></i>
        <label>Clean Surfaces</label>
      </div>
    </div>
  );
}

import ServicesPNG from "../img/services.jpg";

export default function start() {
  return (
    <div id="about" className="section">
      <div>
        <i id="titleTage" class="fas fa-concierge-bell fa-1x"></i>
        <h1>Our Services</h1>
        <br />
        <p id="about_des">
          We provide top of the line repairs and installations. We offer a
          varity of services to meet your needs. Built with your satisfaction in
          mind. With a high satisfaction rating and great customer reviews JSHS
          is deticated to providing you with the best services we are able to
          offer.
          <br />
          <br />
          Fill the contact form below and one of our members will be happy to
          reach out to you. Please allow up 2-5 business for a response. We
          appriciate your time and business. Below are the services we offer.
        </p>

        <PrntServices Servs={Servs} />
      </div>
      <img src={ServicesPNG} />
    </div>
  );
}

const PrntServices = (props) => {
  return (
    <div id="about_services">
      {props.Servs.map((element, i) => (
        <label>{element}</label>
      ))}
    </div>
  );
};

var Servs = [
  "Framing",
  "Plumbing",
  "Lights",
  "Floor Tiles",
  "Shower Tiles",
  "Doors",
  "Windows",
  "Renovations",
  "Repairs",
  "Drywalls",
  "Electrical Wiring",
  "Installations",
  "Leaks",
];

import React from "react";
import Form from "./Form";
import $ from "jquery";
import "./slide.css";
import "./style.css";
import "./animate.min.css";
import Geolocation from "./geo.PNG";
import Services from "./services.jpg";
import CovidIMG from "./covid2.png";

export default class Home extends React.Component {
  componentDidMount() {
    hoverImgAnimation();
    CovidNotification();
  }

  render() {
    return (
      <>
        <CovidAlert />
        <header>
          <div id="logo">
            <label>
              <i className="fas fa-toolbox"></i>
            </label>
          </div>
          <a href="#about">Services &darr;</a>
          <a href="#location">Location &darr;</a>
          <a href="#form">Contact Us &darr;</a>
        </header>

        <div id="intro">
          <div id="slide1">
            <h1>
              JS
              <br />
              HANDYMAN
              <br />
              SERVICE
            </h1>
            <br />
            <label>Book A Service</label>
            <select id="bookservice" href="#form">
              <option defaultValue="Framing">Framing</option>
              <option value="Plubming">Plubming</option>
              <option value="Electrical">Electrical</option>
              <option value="Repair">Repair</option>
              <option value="Other">Other</option>
            </select>
            <div id="socials">
              <i className="fab fa-facebook-square fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
              <i className="fab fa-twitter-square fa-2x"></i>
              <i className="fas fa-envelope fa-2x"></i>
              <i className="fas fa-phone-square-alt fa-2x"></i>
              <i className="fas fa-tools fa-2x"></i>
              <i className="fas fa-home fa-2x"></i>
              <i className="fas fa-plug fa-2x"></i>
            </div>
          </div>
          <IntroSlideShow data={data} />
        </div>

        <div id="about" className="section">
          <div>
            <i id="titleTage" class="fas fa-concierge-bell fa-1x"></i>
            <h1>Our Services</h1>
            <br />
            <p id="about_des">
              We provide top of the line repairs and installations. We offer a
              varity of services to meet your needs. Built with your
              satisfaction in mind. With a high satisfaction rating and great
              customer reviews JSHS is deticated to providing you with the best
              services we are able to offer.
              <br />
              <br />
              Fill the contact form below and one of our members will be happy
              to reach out to you. Please allow up 2-5 business for a response.
              We appriciate your time and business. Below are the services we
              offer.
            </p>

            <PrntServices Servs={Servs} />
          </div>
          <img src={Services} />
        </div>

        <div id="location" className="section">
          <div>
            <i id="titleTage" class="fas fa-search-location fa-1x"></i>
            <br />
            <label>You can find us @</label>
            <select id="goto_city">
              <option defaultValue="Kitchener">Kitchener</option>
              <option value="Waterloo">Waterloo</option>
              <option value="Guelph">Quelph</option>
              <option value="Cambridge">Cambridge</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <br />
            <p>
              We provide our services accross southern ontario! The nearest
              cities are listed above. If you require services outside these
              cities an exception could be made. We are tailored to your
              prefernces & proudly Canadian.
              <br />
              <br />
              Expanding to a city near you!
              <br />
              <br />
              <ul>
                <li>Stratford</li>
                <li>Hamilton</li>
                <li>Milton</li>
                <li>London</li>
              </ul>
            </p>
            <br />
            <a href="#form">
              <button>Book A Service</button>
            </a>
          </div>
          <img src={Geolocation} />
        </div>

        <div className="section">
          <i id="titleTage" class="fas fa-comments fa-1x"></i>
          <h2>What people had to say:</h2>
        </div>
        <br />
        <PrintReviews reviews={reviews} />

        <Covid2 />

        <div id="preview" className="section">
          <div className="container previews" id="1">
            <img src="imgs/pic35.jpg" alt="Before" />
            <h3>Before</h3>
          </div>
          <div className="container previews" id="2">
            <img src="imgs/pic34.jpg" />
            <h3>After</h3>
          </div>
          <div className="container previews" id="3">
            <img src="imgs/pic15.jpg" />
            <h3>Before</h3>
          </div>
          <div className="container previews" id="4">
            <img src="imgs/pic25.jpg" />
            <h3>After</h3>
          </div>
          <div id="preData">
            <h2>
              Begining at &nbsp;
              <font color="lightgreen">
                $12.<sup>99</sup>/SQ Foot
              </font>
            </h2>
            <br />
            <p>
              Top quality and long lasting tiles made for your satisfaction.
              Book a Flooring service now.
            </p>
            <br />
            <a href="#form">
              <button>Book</button>
            </a>
          </div>
        </div>

        <Form />
        {/* <Footer /> */}
      </>
    );
  }
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

const Covid2 = () => {
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
};

const PrntServices = (props) => {
  return (
    <div id="about_services">
      {props.Servs.map((element, i) => (
        <label>{element}</label>
      ))}
    </div>
  );
};

function IntroSlideShow(props) {
  return (
    <div id="slideshow">
      <div id="show_display">
        {props.data[0].map((element, i) => Item(element, i))}
      </div>
      <div id="show_display">
        {props.data[1].map((element, i) => Item(element, i))}
      </div>
      <div id="show_display">
        {props.data[2].map((element, i) => Item(element, i))}
      </div>
    </div>
  );

  function Item(element, i) {
    return (
      <div id="slide_item" class="hvrbox">
        <img
          src={"./imgs/pic" + element.img + ".jpg"}
          alt="promo"
          class="hvrbox-layer_bottom"
        />
        <h3>{element.name}</h3>
        <p id={"inner" + i}>{element.des}</p>
        <div class="hvrbox-layer_top">
          <div class="hvrbox-text">
            <a href="#form">
              <button id={"innerLink" + i}>Book {element.name} Service</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function PrintReviews(props) {
  return (
    <div id="review" className="section">
      {props.reviews.map((element, i) => (
        <div key={i}>
          <p>{element.review + "-" + element.from}</p>
        </div>
      ))}
    </div>
  );
}

function hoverImgAnimation() {
  let pre = document.getElementsByClassName("previews");
  for (var i = 0; i < pre.length; i++) {
    pre[i].addEventListener("mouseover", (data) => {
      var id = parseInt(data.target.id);
      switch (id) {
        case 1:
          $("#preview").css(
            "gridTemplateColumns",
            "25% 16.66% 16.66% 16.66% 25%"
          );
          break;

        case 2:
          $("#preview").css(
            "gridTemplateColumns",
            "16.66% 25% 16.66% 16.66% 25%"
          );
          break;

        case 3:
          $("#preview").css(
            "gridTemplateColumns",
            "16.66% 16.66% 25% 16.66% 25%"
          );
          break;

        default:
          $("#preview").css(
            "gridTemplateColumns",
            "16.66% 16.66% 16.66% 25% 25%"
          );
          break;
      }
    });

    pre[i].addEventListener(
      "mouseout",
      () =>
        (document.getElementById("preview").style.gridTemplateColumns =
          "18.75% 18.75% 18.75% 18.75% 25%")
    );
  }
}

const Footer = () => {
  return (
    <footer>
      <p>Contact us:</p>
      {/* <i className="fas fa-phone-alt"></i>
      <p>(647) 888-3079</p> */}

      <i className="fas fa-envelope"></i>
      <p>
        <a href="mailto:Trades.man@outlook.com">Trades.man@outlook.com</a>
      </p>

      <i className="fas fa-business-time"></i>
      <p>Business hours: mon-fri: 7am - 5pm | sat-sun: 9am - 6pm</p>
    </footer>
  );
};

const CovidAlert = () => {
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
};

const data = [
    [
      {
        name: "Framing",
        des: "Reliable, long lasting wood frames to keep your frames intact. Available various types of wood of your choice!",
        img: "14",
      },
      {
        name: "Flooring",
        des: "Repared and rebuilt with a varity of styles and qualities made for your satisfaction, contac us to learn a bit more!",
        img: "19",
      },
      {
        name: "Plumbing",
        des: "Wheather pipes, baths, sinks, toilets we can help you get you items back in working order",
        img: "26",
      },
    ],
    [
      {
        name: "Electrical",
        des: "Be it a power outage, outlet shortcuits, or decayed breakers we can get your place back online",
        img: "38",
      },
      {
        name: "Shower Tiles",
        des: "Water resistent and beautiful tiles for your showers. ",
        img: "39",
      },
      {
        name: "Renovations",
        des: "Reinvent, rearage and rebuild your place into the place of your dreams. Give your living space a new remodel!",
        img: "12",
      },
    ],
    [
      {
        name: "Floor Tiles",
        des: "Durable and in variuse qualities for your floor needs, The next step is to book a floor renovations",
        img: "22",
      },
      {
        name: "Repairs",
        des: "Get your item back to order order, We repair plumbing, electrical, infurstructure issues. Contact us for more information",
        img: "18",
      },
      {
        name: "Doors & Windows",
        des: "Strong Doors and beautiful Windows, We service a varity of what you may need. Contact us to learn a bit more.",
        img: "7",
      },
    ],
  ],
  reviews = [
    {
      review: "Long lasting tiles for our kitchen, great work.",
      from: "james",
    },
    {
      review:
        "Pricing is low for the quality of service and expertise that you receive.",
      from: "katie",
    },
    {
      review:
        "I cant even begin to express how happy we were with the incredible job that was done.",
      from: "Rishi",
    },
  ],
  Servs = [
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

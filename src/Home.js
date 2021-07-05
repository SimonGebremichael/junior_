import React from "react";
import Form from "./Form";
import "./style.css";

export default class Home extends React.Component {
  componentDidMount() {
    let pre = document.getElementsByClassName("previews");
    for (var i = 0; i < pre.length; i++) {
      pre[i].addEventListener("mouseover", (data) => {
        var id = data.target.id;
        if (id == "1")
          document.getElementById("preview").style.gridTemplateColumns =
            "25% 16.66% 16.66% 16.66% 25%";
        else if (id == "2")
          document.getElementById("preview").style.gridTemplateColumns =
            "16.66% 25% 16.66% 16.66% 25%";
        else if (id == "3")
          document.getElementById("preview").style.gridTemplateColumns =
            "16.66% 16.66% 25% 16.66% 25%";
        else
          document.getElementById("preview").style.gridTemplateColumns =
            "16.66% 16.66% 16.66% 25% 25%";
      });

      pre[i].addEventListener(
        "mouseout",
        () =>
          (document.getElementById("preview").style.gridTemplateColumns =
            "18.75% 18.75% 18.75% 18.75% 25%")
      );
    }

    function val() {
      var name = document.getElementById("name");
      alert(name.value);
      return false;
    }
  }

  render() {
    return (
      <>
        <header>
          <h1>Junior'S HMS</h1>
          <a href="#about">
            <p>Services &darr;</p>
          </a>
          <a href="#form">
            <p>Location &darr;</p>
          </a>
          <a href="#form">
            <p>Contact Us &darr;</p>
          </a>
          <a href="#review">
            <p>Reviews &darr;</p>
          </a>
        </header>

        <div id="intro">
          <div id="slide1">
            <h1>
              JS <br />
              HANDYMAN
              <br />
              SERVICE
            </h1>
            <div id="socials">
              <i className="fab fa-facebook-square fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
              <i className="fab fa-twitter-square fa-2x"></i>
              <i className="fas fa-envelope fa-2x"></i>
              <i className="fas fa-phone-square-alt fa-2x"></i>
            </div>
            <br />
            <a href="#form">
              <button>Book A Service</button>
            </a>
          </div>
          <div id="images">
            <PrettyPrint data={data} />
          </div>
        </div>

        <div id="about">
          <center>
            <h1>What We Do</h1>
          </center>
          <br />
          <br />
          <center>
            <p id="about_des">
              We provide top of the line repairs and installations. We offer a
              varity of services to meet your needs. Built with your
              satisfaction in mind. Book a service and we will get back to you
              ASAP.
            </p>
          </center>
          <div id="about_bottom">
            <div>
              <i className="fas fa-tools fa-5x"></i>
              <br />
              <p>Repairs / Plumbing</p>
              <br />
              <a href="#form">
                <button>Book</button>
              </a>
            </div>
            <div>
              <i className="fas fa-home fa-5x"></i>
              <br />
              <p>Framing</p>
              <br />
              <a href="#form">
                <button>Book</button>
              </a>
            </div>
            <div>
              <i className="fas fa-plug fa-5x"></i>
              <br />
              <p>Electrical Work</p>
              <br />
              <a href="#form">
                <button>Book</button>
              </a>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Hear from our Clients:</h2>
        </div>
        <br />
        <PrintReviews reviews={reviews} />

        <div id="preview" className="section">
          <div className="container previews" id="1">
            <img src="imgs/pic35.jpg" alt="Before" />
            <div className="text-block">
              <h3>Before</h3>
            </div>
          </div>
          <div className="container previews" id="2">
            <img src="imgs/pic34.jpg" />
            <div className="text-block">
              <h3>After</h3>
            </div>
          </div>
          <div className="container previews" id="3">
            <img src="imgs/pic15.jpg" />
            <div className="text-block">
              <h3>Before</h3>
            </div>
          </div>
          <div className="container previews" id="4">
            <img src="imgs/pic25.jpg" />
            <div className="text-block">
              <h3>After</h3>
            </div>
          </div>
          <div id="preData">
            <h2>
              Flooring Starting at{" "}
              <font color="lightgreen">
                $199.<sup>99</sup>
              </font>
            </h2>
            <br />
            <p>
              Top quality and long lasting tiles made for your satisfaction.
              Book a Flooring service now
            </p>
            <br />
            <a href="#form">
              <button>Book</button>
            </a>
          </div>
        </div>

        <Form />

        <footer>
          <p>Contact us:</p>
          <i className="fas fa-phone-alt"></i>
          <p>(647) 888-3079</p>

          <i className="fas fa-envelope"></i>
          <p>
            <a href="mailto:Trades.man@outlook.com">Trades.man@outlook.com</a>
          </p>

          <i className="fas fa-business-time"></i>
          <p>Business hours: mon-fri: 7am - 5pm | sat-sun: 9am - 6pm</p>
        </footer>
      </>
    );
  }
}

function PrettyPrint(props) {
  return (
    <>
      {props.data.map((element, i) => (
        <div
          className="container"
          id={"cont" + i}
          onMouseOver={() => shoePromoText(i, true)}
          onMouseOut={() => shoePromoText(i, false)}
          key={i}
        >
          <img src={"./imgs/pic" + element.img + ".jpg"} alt="promo" />
          <div className="text-block" id={"text" + i}>
            <h3>{element.name}</h3>
            <p id={"inner" + i}>{element.des}</p>
            <a href="#form">
              <button id={"innerLink" + i}>Book</button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

function shoePromoText(pos, type) {
  var innerLink = document.getElementById("innerLink" + pos);
  var text = document.getElementById("text" + pos);
  var innerText = document.getElementById("inner" + pos);
  if (type) {
    text.style.height = "80%";
    innerLink.style.display = "block";
    innerText.style.display = "block";
  } else {
    text.style.height = "15%";
    innerLink.style.display = "none";
    innerText.style.display = "none";
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

const data = [
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
    {
      name: "Framing",
      des: "Reliable, long lasting wood frames to keep your frames intact. Available various types of wood of your choice!",
      img: "14",
    },
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
      name: "Floor Tiles",
      des: "Durable and in variuse qualities for your floor needs, The next step is to book a floor renovations",
      img: "22",
    },

    {
      name: "Renovations",
      des: "Reinvent, rearage and rebuild your place into the place of your dreams. Give your living space a new remodel!",
      img: "12",
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
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

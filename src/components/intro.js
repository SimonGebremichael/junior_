export default function start() {
  return (
    <div id="intro">
      <div id="slide1">
        <h1>
          4GEN
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
  );
}

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
];

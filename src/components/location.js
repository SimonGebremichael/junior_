import Geolocation from "../img/geo.PNG";
export default function start() {
  return (
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
          We provide our services accross southern ontario! The nearest cities
          are listed above. If you require services outside these cities an
          exception could be made. We are tailored to your prefernces & proudly
          Canadian.
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
        <br/>
        <p>Reach us</p>
        <ul id="reach">
          <li>
            <i className="fas fa-phone-square-alt fa-1x"></i>
            <p>+1 (647) 888 - 3079</p>
          </li>
          <li>
            <i className="fas fa-envelope fa-1x"></i>
            <p>4genhandymanservice@mail.com</p>
          </li>
        </ul><br/>
        <a href="#form">
          <button>Book A Service</button>
        </a>
      </div>
      <img src={Geolocation} />
    </div>
  );
}

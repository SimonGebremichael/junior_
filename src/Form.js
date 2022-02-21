import React from "react";

export default class Form extends React.Component {
  constructor(props) { super(props);}
  componentDidMount() {}
  render() {
    return (
      <div id="form" className="section">
        <div id="qoutes">
          <h3>
            Let us know you need & we'll get to you{" "}
            <font color="lightgreen">ASAP</font>
          </h3>
          <br />
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>mon</td>
                <td>7am - 5pm</td>
              </tr>
              <tr>
                <td>tue</td>
                <td>7am - 5pm</td>
              </tr>
              <tr>
                <td>wed</td>
                <td>7am - 5pm</td>
              </tr>
              <tr>
                <td>thr</td>
                <td>7am - 5pm</td>
              </tr>
              <tr>
                <td>fri</td>
                <td>7am - 5pm</td>
              </tr>
              <tr>
                <td>sat</td>
                <td>9am - 6pm</td>
              </tr>
              <tr>
                <td>sun</td>
                <td>9am - 6pm</td>
              </tr>
            </tbody>
          </table>

          <h3>
            Residential <font color="lightgreen">+</font> Commerical
          </h3>
          <h3>
            <font color="lightgreen">100%</font> Satisfaction Rate
          </h3>
        </div>
        <div id="formFeild">
          <h1>Contact Form</h1>
          <br />
          <div id="form_top">
            <p>Name:</p>
            <p>Email:</p>
            <input type="text" placeholder="Name" name="name" id="name" />
            <input type="email" placeholder="email" name="email" id="email" />
            <p>Phone Number:</p>
            <p>Desired Date:</p>
            <input
              type="text"
              placeholder="(123)-456-7890"
              name="phonenumber"
              id="phonenumber"
            />
            <input type="date" name="dateOfService" id="dateOfService" />
            <div>
              <p>City:</p>
              <select id="city" name="city">
                <option value="Kitchener" selected>Kitchener</option>
                <option value="Waterloo">Waterloo</option>
                <option value="Guelph">Quelph</option>
                <option value="Cambridge">Cambridge</option>
                <option value="Other">Other</option>
              </select>
              <p>Service:</p>
              <select id="service" name="service">
                <option value="Framing" selected>Framing</option>
                <option value="Plubming">Plubming</option>
                <option value="Electrical">Electrical</option>
                <option value="Repair">Repair</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <p>Description:</p>
              <textarea
                rows="5px"
                name="des"
                id="des"
                placeholder="Any more information..."
              ></textarea>
            </div>
          </div>
          <input type="submit" onClick={sendEmail} id="formSubmitBTN" value="SEND" />
        </div>
        <div id="formOver">
            <center>
              <i class="far fa-check-circle fa-5x"></i>
            </center>
            <br />
            <br />
            <center>
              <p>We appriciate your time & business</p>
              <br />
              <br />
              <p>You will hear from us within 2 business days.</p>
            </center>
          </div>
      </div>
    );
  }
}
var formSend = false;
async function sendEmail() {
  if (validateForm() && !formSend) {
      formSend = true;
      let xhr = new XMLHttpRequest();
      // xhr.open('POST', 'http://localhost:3001/4gen');
      xhr.open('POST', 'https://tsukiyome.herokuapp.com/4gen');
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.responseType = 'json';
      xhr.onload = function() {
        let responseObj = xhr.response;
        console.log(responseObj);
      };
      await xhr.send(JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        dateOfService: document.getElementById("dateOfService").value,
        des: document.getElementById("des").value,
        service: document.getElementById("service").value,
        city: document.getElementById("city").value,
        phonenumber: document.getElementById("phonenumber").value }));
      setTimeout(() => {
        formSend = false;
        document.getElementById("formOver").style.display = "block";
        document.getElementById("formFeild").style.display = "none";
      }, 3000);
  } else console.log("*invalid form*");
}

function validateForm() {
  var pass = true;
  document.getElementById("name").style.border = "none";
  document.getElementById("email").style.border = "none";
  document.getElementById("dateOfService").style.border = "none";
  if (!document.getElementById("name").value) {
    document.getElementById("name").style.border = "1px solid red";
    pass = false;
  } 
  if (!isEmail(document.getElementById("email").value)) {
    document.getElementById("email").style.border = "1px solid red";
    pass = false;
  } 
  if (!cvtDate(document.getElementById("dateOfService").value)) {
    document.getElementById("dateOfService").style.border = "1px solid red";
    pass = false;
  }
  return pass;
}

function cvtDate(date) {
  if (date == "" || !date) return false;
  try {
    var d = new Date(date);
    return `${d.toLocaleString("default", { month: "short"})} ${d.getDate()}, ${d.getFullYear()}`;
  } catch(e) {return false};
}

function isEmail(email) {
  if (!email || email == "") return false;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

import React from "react";

export default class Form extends React.Component {
  constructor(props) { super(props);}
  componentDidMount() {}
  render() {
    return (
      <div id="form" className="section">
        <div id="qoutes">
          <h3>
            Let us know what you need & we'll get to you{" "}
            <font color="lightgreen">ASAP</font>
          </h3>
          <br />
          <div id="cont">
            <p>mon</p><p>7am - 5pm</p>
            <p>tue</p><p>7am - 5pm</p>
            <p>wed</p><p>7am - 5pm</p>
            <p>thr</p><p>7am - 5pm</p>
            <p>fri</p><p>7am - 5pm</p>
            <p>sat</p><p>9am - 6pm</p>
            <p>sun</p><p>9am - 6pm</p>
          </div>
          <h3>
            Residential <font color="lightgreen">+</font> Commerical
          </h3>
          <h3>
            <font color="lightgreen">99%</font> Satisfaction Rate
          </h3>
        </div>
        <div id="formFeild">
          <h1>Contact Form</h1>
          <br />
          <div id="form_top">
            <p>Name:</p>
            <p>Email:</p>
            <input type="text" placeholder="Name" id="name" />
            <input type="text" type="email" placeholder="email" id="email" />
            <p>Phone Number:</p>
            <p>Desired Date:</p>
            <input type="text" placeholder="(123)-456-7890" id="phonenumber"/>
            <input type="date" id="dateOfService" />
            <div>
              <p>City:</p>
              <select id="city">
                <option value="Kitchener" selected>Kitchener</option>
                <option value="Waterloo">Waterloo</option>
                <option value="Guelph">Quelph</option>
                <option value="Cambridge">Cambridge</option>
                <option value="Other">Other</option>
              </select>
              <p>Service:</p>
              <select id="service">
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
function sendEmail() {
  if (validateForm() && !formSend) {
      formSend = true;
      var data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        dateOfService: document.getElementById("dateOfService").value,
        des: document.getElementById("des").value,
        service: document.getElementById("service").value,
        city: document.getElementById("city").value,
        phonenumber: document.getElementById("phonenumber").value 
      };
      let str = Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
      var url = `https://tsukiyome.herokuapp.com/4gen?${str}`;
      console.log(url);
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      // xhr.setRequestHeader("Content-type", "application/json");
      // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.responseType = 'json';
      xhr.onload = function() {
        let responseObj = xhr.response;
        console.log(responseObj);
        formSend = false;
        document.getElementById("formOver").style.display = "block";
        document.getElementById("formFeild").style.display = "none";
      };
      xhr.send();
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

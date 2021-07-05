import React from "react";
import emailjs, { init } from "emailjs-com";
init("user_rbuVxVRzM6JZvEhg86QKF");

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
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

        <form id="formFeild" onSubmit={sendEmail}>
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
                <option defaultValue="Kitchener">Kitchener</option>
                <option value="Waterloo">Waterloo</option>
                <option value="Guelph">Quelph</option>
                <option value="Cambridge">Cambridge</option>
                <option value="Other">Other</option>
              </select>
              <p>Service:</p>
              <select id="service" name="service">
                <option defaultValue="Framing">Framing</option>
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
          <input type="submit" id="formSubmitBTN" value="SEND" />
        </form>
        <div>
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
      </div>
    );
  }
}

function sendEmail(e) {
  e.preventDefault();
  if (validate())
    emailjs
      .sendForm(
        "service_zokpqci",
        "template_950qq1e",
        e.target,
        "user_rbuVxVRzM6JZvEhg86QKF"
      )
      .then(
        (result) => {
          console.log("email status: " + result.text);
          if (result.text == "OK") {
            document.getElementById("formFeild").style.display = "none";
            document.getElementById("formOver").style.display = "block";
          }
        },
        (error) => console.log("email status: " + error.text)
      );
}

function validate() {
  var pass = true,
    feilds = [
      document.getElementById("name"),
      document.getElementById("email"),
      document.getElementById("dateOfService"),
      document.getElementById("des"),
    ];
  for (var i = 0; i < feilds.length; i++) {
    if (feilds[i].value.length <= 0) {
      pass = false;
      feilds[i].style.border = "1px solid red";
    } else feilds[i].style.border = "none";
  }
  return pass;
}

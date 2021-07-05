import React from "react";
import emailjs, { init } from "emailjs-com";
init("user_rbuVxVRzM6JZvEhg86QKF");

export default class PageView extends React.Component {
  componentDidMount() {
    document.getElementById("viewForm").addEventListener("submit", (data) => {
      //   alert(data.target.id);
    });
  }
  render() {
    return (
      <>
        <h3>got it</h3>
        <form id="viewForm">
          <input type="text" name="name" value="jeff" />
          <input type="submit" value="send" />
        </form>
      </>
    );
  }
}

function sendEmail(e) {
  //   var form = document.getElementById("viewForm");
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_zokpqci",
  //       "template_950qq1e",
  //       e.target,
  //       "user_rbuVxVRzM6JZvEhg86QKF"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("email status: " + result.text);
  //         if (result.text == "OK") {
  //           document.getElementById("formFeild").style.display = "none";
  //           document.getElementById("formOver").style.display = "block";
  //         }
  //       },
  //       (error) => console.log("email status: " + error.text)
  //     );
}

import $ from "jquery";
export default function start() {
  hoverImgAnimation();
  return (
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
          Top quality and long lasting tiles made for your satisfaction. Book a
          Flooring service now.
        </p>
        <br />
        <a href="#form">
          <button>Book</button>
        </a>
      </div>
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

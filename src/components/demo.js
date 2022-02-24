import $ from "jquery";
export default function start() {
  hoverImgAnimation();
  return (
    <div id="preview" className="section">
      <div className="container previews" id="1">
        <img src="imgs/pr_pic1.jpg" alt="Before" />
        <h3>Previous customers</h3>
      </div>
      <div className="container previews" id="2">
        <img src="imgs/pr_pic2.jpg" />
      </div>
      <div className="container previews" id="3">
        <img src="imgs/pr_pic3.jpg" />
      </div>
      <div className="container previews" id="4">
        <img src="imgs/pr_pic4.jpg" />
      </div>
      <div className="container previews" id="4">
        <img src="imgs/pr_pic5.jpg" />
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

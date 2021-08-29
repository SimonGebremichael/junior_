export default function start() {
  return (
    <>
      <div className="section">
        <i id="titleTage" class="fas fa-comments fa-1x"></i>
        <h2>What people had to say:</h2>
      </div>
      <br />
      <PrintReviews reviews={reviews} />
    </>
  );
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

var reviews = [
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
];

function FeedbackCard({ item, onViewMore }) {
  return (
    <div className="feedback-card">
      <div className="feedback-left">
        <h3>{item.school}</h3>

        <p className="trip-info">
          {item.trip} | {item.date}
        </p>

        <div className="feedback-quote">
          <p>"{item.feedbacks[0].text}"</p>

          <span>— {item.feedbacks[0].author}</span>
        </div>
      </div>

      <div className="feedback-right">
        <div className="feedback-images">
          <img src={item.images[0]} alt="" />

          <img src={item.images[1]} alt="" />
        </div>

        <button onClick={() => onViewMore(item)}>View More</button>
      </div>
    </div>
  );
}

export default FeedbackCard;

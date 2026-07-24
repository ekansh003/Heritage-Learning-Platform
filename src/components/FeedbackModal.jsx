function FeedbackModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="feedback-modal-overlay" onClick={onClose}>
      <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
        {/* FIXED HEADER */}
        <div className="feedback-modal-header">
          <div className="feedback-modal-title">
            <h2>{item.school}</h2>

            <p className="feedback-modal-meta">
              {item.trip} • {item.date}
            </p>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="feedback-modal-content">
          <div className="feedback-modal-body">
            <h3>Feedback</h3>

            <div className="all-feedbacks">
              {item.feedbacks.map((feedback, index) => (
                <div key={index} className="feedback-quote modal-quote">
                  <p>"{feedback.text}"</p>

                  <span>— {feedback.author}</span>
                </div>
              ))}
            </div>

            <div className="feedback-modal-gallery">
              {item.images.map((img, index) => (
                <img key={index} src={img} alt={`${item.school}-${index}`} />
              ))}
            </div>
          </div>
        </div>

        {/* FIXED FOOTER */}
        <div className="modal-footer">
          <button className="modal-close-bottom" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackModal;

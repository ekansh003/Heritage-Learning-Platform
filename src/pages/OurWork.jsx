import { useState } from "react";
import feedbackData from "../data/feedbackData";
import FeedbackCard from "../components/FeedbackCard";
import FeedbackModal from "../components/FeedbackModal";

function OurWork() {
  const INITIAL_COUNT = 2;
  const LOAD_COUNT = 2;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_COUNT, feedbackData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);

    window.scrollTo({
      top: document.getElementById("our-work").offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <section id="our-work" className="container">
      <h1 className="section-title">OUR WORK & FEEDBACKS</h1>

      <div className="feedback-list">
        {feedbackData.slice(0, visibleCount).map((item) => (
          <FeedbackCard
            key={item.id}
            item={item}
            onViewMore={setSelectedItem}
          />
        ))}
      </div>

      <div className="load-more-wrapper">
        {visibleCount < feedbackData.length && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            View More Feedbacks
          </button>
        )}

        {visibleCount > INITIAL_COUNT && (
          <button className="show-less-btn" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>

      <FeedbackModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}

export default OurWork;

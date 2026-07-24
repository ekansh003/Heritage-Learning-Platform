import { useState } from "react";

const faqData = [
  {
    question: "What age groups are Exploristory programs designed for?",
    answer:
      "Programs are customized for students from primary school through higher secondary levels, with activities adapted to age and curriculum requirements.",
  },

  {
    question: "Can expeditions be customized for our school curriculum?",
    answer:
      "Yes. Programs can be tailored to specific learning objectives, grade levels, board requirements, and school preferences.",
  },

  {
    question: "Which cities does Exploristory currently operate in?",
    answer:
      "Exploristory conducts programs across multiple cities including Chennai, Bengaluru, Hyderabad, Mumbai, Pune, Delhi, Ahmedabad, Surat, and several heritage-rich destinations across India.",
  },

  {
    question: "Are transportation and meals included?",
    answer:
      "For multi-day expeditions, accommodation, transportation, meals, and educational materials can be included depending on the selected program package.",
  },

  {
    question: "Do students receive learning materials?",
    answer:
      "Yes. Students receive specially curated worksheets, activity booklets, observation tasks, and reflection exercises designed to enhance learning outcomes.",
  },

  {
    question: "Who conducts the programs?",
    answer:
      "Programs are led by heritage educators, archaeologists, historians, subject experts, and trained facilitators.",
  },

  {
    question: "How many students can participate?",
    answer:
      "Programs can be conducted for small groups, individual classes, or entire grade levels depending on school requirements and logistics.",
  },

  {
    question: "How can schools book a program?",
    answer:
      "Schools can contact Exploristory directly through the website to discuss dates, locations, customization options, and program requirements.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="subsection-title">FREQUENTLY ASKED QUESTIONS</h2>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

import { useState } from "react";

function TeamCard({ person }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`team-card ${expanded ? "expanded" : ""}`}>
      <div className="team-card-front">
        <img src={person.image} alt={person.name} />

        <div className="team-info">
          <h3>{person.name}</h3>

          <p className="role">{person.role}</p>

          <p className="preview">{person.preview}</p>

          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less ↑" : "Read Bio →"}
          </button>
        </div>
      </div>

      <div className={`team-card-bio ${expanded ? "show" : ""}`}>
        <p>{person.bio}</p>
      </div>
    </div>
  );
}

export default TeamCard;

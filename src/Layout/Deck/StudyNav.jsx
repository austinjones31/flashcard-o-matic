import React from "react";
import { Link } from "react-router-dom";
import { home } from "../../images/icons";
export default function StudyNav({ deck, deckId }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">{home} Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Study</li>
      </ol>
    </nav>
  );
}

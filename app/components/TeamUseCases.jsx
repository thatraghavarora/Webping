import { Children, isValidElement } from "react";

export default function TeamUseCases({ children }) {
  const cards = Children.toArray(children).filter(isValidElement);
  const midpoint = Math.ceil(cards.length / 2);
  const rows = [cards.slice(0, midpoint), cards.slice(midpoint)];

  return (
    <div className="wp-team-cases">
      {rows.map((row, index) => (
        <div key={index} className="case-marquee" tabIndex={0}
          aria-label={`Team workflows, row ${index + 1}`}>
          <div className={`case-track${index ? " rev" : ""}`}>
            <div className="wp-team-case-group">{row}</div>
            <div className="wp-team-case-group" aria-hidden="true" inert>{row}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

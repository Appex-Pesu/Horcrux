import React from "react";
import "./Prize.css";
import { cardData } from "./data";

const Prize = () => {
  return (
    <div id="Prize">
      <div className="dd_heading">
        <h3 className="heading-tag-line">P R I Z E S</h3>
        <hr className="heading-underline" />
      </div>
      <main className="page-content">
        {cardData.map((card, index) => (
          <div className="d_card" key={index}>
            <div className="prize-content">
              <h2 className="heading"><span className="color-head">{card.heading}</span></h2>
              <p className="data-content">{card.content}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Prize;

import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";
function Explore() {
  return (
    <section className="explore">
      <h2>Explore a selection of the special movement</h2>
      <div className="explore-grid">
        <div className="explore-item">
         
          <img src="images/Ring.jpg" alt="Rings" />
          <p>Rings</p>
        </div>
        <div className="explore-item">
          <img src="images/Neckless.jpg" alt="Necklace" />
          <p>Necklace</p>
        </div>
        <div className="explore-item">
          <img src="images/Earring.jpg" alt="Earrings" />
          <p>Earrings</p>
        </div>
        <div className="explore-item">
          <img src="images/Bracelet.jpg" alt="Diamond Bracelet" />
          <p>Diamond Bracelet</p>
        </div>
      </div>
    </section>
  );
}

export default Explore;

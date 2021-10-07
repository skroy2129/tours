import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, removetour }) => {
  const [read, setread] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setread(!read)}>
            {read ? `Show Less` : `Show More`}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removetour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

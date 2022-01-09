import React from "react";

export const AxieFinder = ({ axiesArray, selected, setSelected }) => {
  const handleSelection = (axie) => {
    if (selected.includes(axie.id)) {
      setSelected(selected.filter((id) => id !== axie.id));
    } else if (selected.length < 2) {
      setSelected([...selected, axie.id]);
    }
  };

  return (
    <>
      <div className="axie-selection-container">
        {axiesArray.map((axie) => (
          <div
            className={`axie-selection${
              selected.includes(axie.id) ? " axie-selected-color" : ""
            }`}
            key={axie.id}
            onClick={() => handleSelection(axie)}
          >
            <img
              src={axie.image}
              alt={axie.name}
              className="axie-selection-image"
            />
            <span className="axie-selection-id">{axie.id}</span>
          </div>
        ))}
      </div>
    </>
  );
};

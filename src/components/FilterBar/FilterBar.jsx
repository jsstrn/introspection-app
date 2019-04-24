import React from "react";

const FilterBar = props => {
  const { offices, selected, handleClick } = props;
  const getClass = (office, selected) => {
    return office === selected ? "btn btn-primary" : "btn btn-outline-primary";
  };

  return (
    <div className="btn-group" role="group">
      {offices.map((office, index) => (
        <button
          key={index}
          type="button"
          className={getClass(office, selected)}
          onClick={() => handleClick(office)}
        >
          {office}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

import React from "react";

const PriorityLevel = ({ id, state, onClick }) => {
  const className = `level ${state}`;
  return (
    <div
      className={className}
      onClick={onClick}
    >
    </div>
  );
};

export default PriorityLevel;
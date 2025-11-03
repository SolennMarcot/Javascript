import React, { useState } from "react";
import PriorityLevel from "./priorityLevel.component.jsx";

const PriorityScale = ({priority, onPriorityChange}) => {
  const initialLevels = [0, 1, 2, 3, 4, 5].map((elt) => ({
    id: elt,
    state: elt <= priority ? "on" : "off",
  }));

  const [levels, setLevels] = useState(initialLevels);

  const countPrio = () =>
    levels.reduce((count, elt) => (elt.state === "on" ? count + 1 : count), 0);

  const handleClick = (clickedId) => {
    const updatedLevels = levels.map((item) =>
      item.id <= clickedId ? { ...item, state: "on" } : { ...item, state: "off" }
    );
    setLevels(updatedLevels);
    onPriorityChange(clickedId);
  };

  return (
    <div className="scale">
      {levels.map((level) => (
        <PriorityLevel
          key={level.id}
          id={level.id}
          state={level.state}
          onClick={() => handleClick(level.id)}
        />
      ))}
      ({countPrio()})
    </div>
  );
};

export default PriorityScale;
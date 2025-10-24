import React, { useState } from "react";
import Tours from "./components/Tours.jsx";
import data from "./data.js";

const App = () => {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-5 h-screen w-screen ">
        <p className="text-2xl font-bold">No Tours Left</p>
        <button onClick={() => setTours(data)} className="bg-gray-300 py-3 px-20 rounded-md hover:bg-gray-400 transition-all">Refresh</button>
      </div>
    );
  }
  return (
    <div className="w-screen h-screen p-5 overflow-x-hidden">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;

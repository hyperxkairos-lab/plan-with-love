import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="flex flex-col justify-center items-center p-7 gap-[3.3rem]">
      <div>
        <h2 className="font-bold text-[3rem] border-[7px] rounded-2xl border-dashed border-[rgb(1,17,160)] py-[1vh] px-[5vw] text-center">
            Plan With Love
          </h2>
      </div>
      <div className="flex justify-center items-start flex-wrap gap-[0.1rem] h-max">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;

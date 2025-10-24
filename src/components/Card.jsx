import React, { useState } from "react";

const Card = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  let description = readMore ? info : info.substring(0, 200) + "...";

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="flex flex-col  items-center shadow-[0_0_15px_rgba(0,0,0,0.24)] px-[0.65rem] py-[1rem] w-[400px]  rounded-md m-[1rem] gap-5">
      <div className="w-[100%] h-[60%]">
        <img
          src={image}
          alt={name}
          className="object-cover w-[380px] aspect-square"
        />
      </div>
      <div className="px-[0.7rem] flex flex-col justify-evenly gap-[0.3rem]">
        <h4 className="text-green-600 font-bold text-xl">{"₹" + price}</h4>
        <h3 className="font-bold text-2xl">{name}</h3>
        <p>
          {description}{" "}
          <button onClick={handleReadMore} className="text-blue-400">
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <div
        className="bg-[#b4161b21] py-2 px-14 font-semibold text-lg rounded-md border-[#b4161b] border hover:cursor-pointer hover:bg-red-600 hover:text-white transition-all mt-5"
        onClick={() => removeTour(id)}
      >
        <button>Not interested</button>
      </div>
    </div>
  );
};

export default Card;

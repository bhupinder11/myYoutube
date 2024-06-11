import React from "react";

const ShimmerBlock = () => {
  const componentArray = Array.from({ length: 12 }, (_, index) => (
    <div
      key={index}
      className="p-4 m-2 w-80 h-40 bg-gray-200 flex-wrap rounded-lg shadow-lg"
    ></div>
  ));
  return <div className="flex  flex-wrap justify-center">{componentArray}</div>;
};

export default ShimmerBlock;

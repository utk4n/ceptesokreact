import React from "react";
import OpportunityCards from "../OpportunityCards/OpportunityCards";
const Section = () => {
  return (
    <div className="bg-secondary w-full h-[234px] p-4 flex flex-col items-center justify-center">
      <div className=" w-full flex items-center">
        <div className="flex items-center justify-around w-full">
          <p className="font-bold text-lg">Bunları Kaçırmayın</p>
          <p className="text-sm text-secondary">Tüm Ürünler</p>
        </div>
      </div>
      <OpportunityCards />
    </div>
  );
};

export default Section;

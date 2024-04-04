import React, { ReactNode } from "react";

interface GameCardProps {
  title: string;
  total?: string;
  head: string;
  children: ReactNode;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  total,
  head,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
      {/* <h2 className="flex text-center justify-center">
        {head}({title})
      </h2> */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full ">
          {children}
        </div>
        <strong>{title}</strong>

      {
        total && 
        (
          <div className=" flex items-center justify-between">
              <h4 className="text-title-md font-bold text-black dark:text-white">
                {total}
              </h4>
          </div>
        )
      }
      </div>
    </div>
  );
};

export default GameCard;

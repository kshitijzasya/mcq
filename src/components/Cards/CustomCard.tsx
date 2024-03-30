import React, { ReactNode } from "react";

interface CustomCardProps {
  title: string;
  total?: string;
  head: string;
  children: ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  total,
  head,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <h2 className="flex text-center justify-center">
        {head}({title})
      </h2>
      <div className="grid grid-cols-2 items-center">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>

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

export default CustomCard;

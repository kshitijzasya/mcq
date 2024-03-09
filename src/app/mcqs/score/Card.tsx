import React from "react";
import Image from "next/image"
import Link from "next/link";


interface ScoreCardProps {
    score: number;
    total: number
}

interface PercentageData {
    barColor: string;
    image: string;
}

const getDataForPercentage: (percentage: number) => PercentageData = (percentage) => {
    let result: PercentageData = {
        barColor: '',
        image: ''
    };
    if (percentage >=0 && percentage <= 40) {
        result = {
            'barColor': 'bg-yellow-300',
            'image': 'sad.gif'
        }
    } else if(percentage > 40 && percentage <= 75) {
        result = {
            'barColor': 'bg-yellow-300',
            'image': 'neutral.gif'
        }
    } else {
        result = {
            'barColor': 'bg-yellow-300',
            'image': 'happy.gif'
        }
    }
    return result;
}

const ScoreCard: React.FC<ScoreCardProps> = ({score, total}) => {
    const percentage: number = (score/total)*100;
    const {
        barColor,
        image
    } = getDataForPercentage(percentage)

    return (
        <div className="mx-auto max-w-242.5">

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className=" z-30 mx-auto h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className=" drop-shadow-2">
                <Image
                  // src={"/images/score/sad.gif"}
                  src={`/images/score/${image}`}
                  width={176}
                  height={32}
                  alt="score"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                You scored {score} out of { total }
              </h3>

              <div className="mt-6.5">
              <Link
                    href="/mcqs"
                    className="hover:text-primary"
                    aria-label="social-icon"
                  >
                <h4 className="mb-3.5 font-medium text-black dark:text-white">
                  Get Back
                </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

ScoreCard.displayName = "ScoreCard";

export default ScoreCard;
"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Grant, GrantTypes, Source } from "./models";

interface TypeBoxProps {
  type: GrantTypes;
}

const TypeBox: React.FC<TypeBoxProps> = ({ type }) => {
  let boxColor = "";

  switch (type) {
    case "Loan":
      boxColor = "bg-blue-100";
      break;
    case "Incentive":
      boxColor = "bg-purple-100";
      break;
    case "Rebate":
      boxColor = "bg-yellow-100";
      break;
    default:
      boxColor = "bg-gray-200";
  }

  return (
    <div
      className={`inline-block  rounded-full ${boxColor} ${boxColor} my-2 p-2`}
    >
      <p>{type}</p>
    </div>
  );
};

const GrantCard: React.FC<Grant> = ({
  name,
  description,
  type,
  active,
  source,
  bulletPoints,
}) => {
  const [localBulletPoints, setLocalBulletPoints] = useState<string[]>(
    bulletPoints || []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [helpText, setHelpText] = useState<string>("");
  
  const getBulletPoints = useCallback(async () => {
    if (isLoading) return
    if (!description) {
      setHelpText("No description for this grant.")
      return
    }
    setIsLoading(true)

    const res = await fetch("/api/bulletPoints", {
      method: "POST",
      body: JSON.stringify({ description }),
    })
    setIsLoading(false)

    if (!res.ok) {
      setHelpText("Unknown error occurred, please try again later.")
      return
    }

    const result = await res.json()
    const bulletPoints = JSON.parse(result)
    setLocalBulletPoints(bulletPoints)
  }, [isLoading])

  const handleRefreshClick = () => {
    getBulletPoints();
  };
  return (
    <div className="w-full border border-gray-300 my-10 p-6 flex flex-col bg-white">
      <div className="flex items-start mb-2">
        <div className="flex-grow">
          <h1 className="text-lg mr-5">{name}</h1>
        </div>
        <div className="ml-auto text-sm border-transparent">
          <TypeBox type={type} />
        </div>
      </div>
      <div className="mt-2">
        <ul className="list-inside">
          {localBulletPoints.map((point, index) => (
            <li key={index}>&#8226; {point}</li>
          ))}
        </ul>
        <button
          className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleRefreshClick}
        >
          Refresh
          {isLoading && <LoadingAnimation />}
        </button>
      </div>
    </div>
  );
};

interface GrantsCardListProps {
  grants: Grant[];
}
const GrantCardList = ({ grants }: GrantsCardListProps) => {
  return (
    <div>
      {grants.map((grant, index) => (
        <GrantCard key={grant.id} {...grant} />
      ))}
    </div>
  );
};

export default GrantCardList;

const LoadingAnimation = () => {
  return (
    <div role="status">
        <svg aria-hidden="true" className=" ml-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
  )
}
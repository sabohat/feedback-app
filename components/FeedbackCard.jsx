import React from "react";

export default function FeedbackCard({ data }) {
  return (
    <div className="flex flex-col p-4 border rounded-xl w-full md:w-[526px] items-center justify-between space-y-3 shadow-md hover:cursor-pointer hover:shadow-xl transition-all">
      <span className="font-bold italic my-2">{`"${data?.text}"`}</span>
      <div className="w-full flex space-x-4 text-gray-500 text-sm items-center">
        <span>Date: {data?.created_at}</span>
      </div>
    </div>
  );
}

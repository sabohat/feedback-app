import React from "react";
import Button from "./common/Button";

export default function ModuleCard({ title, description }) {
  return (
    <div className="flex flex-col p-4 border rounded-xl w-full md:w-[526px] items-center justify-between space-y-3 shadow-md hover:cursor-pointer hover:scale-105 transition-all">
      <span className="font-bold">{title}</span>
      <p className="line-clamp-3">{description}</p>
      <div className="flex space-x-4">
        <Button title="Give Feedback" styles="bg-primaryGreen px-10" />
        <Button title="All Reviews" styles="bg-primaryBlue px-10" />
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import React from "react";
import Button from "./common/Button";

export default function ModuleCard({ data }) {
  const router = useRouter();
  return (
    <div className="flex flex-col p-4 border rounded-xl w-full max-w-[526px] items-center justify-between space-y-3 shadow-md hover:cursor-pointer hover:shadow-xl transition-all">
      <span className="font-bold">{data.title}</span>
      <p className="line-clamp-3">{data.description}</p>
      <div className="flex space-x-4">
        <Button
          title="Give Feedback"
          styles="bg-primaryGreen px-12"
          onClick={() => router.push("/feedback/[id]", `/feedback/${data.guid}`)}
        />
        <Button title="All Reviews" styles="bg-primaryBlue px-14" />
      </div>
    </div>
  );
}

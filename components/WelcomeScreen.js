import Link from "next/link";
import React from "react";
import Button from "./common/Button";

export default function WelcomeScreen() {
  return (
    <section>
      <div className="wrapper flex items-center justify-between flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center space-y-3 text-center items-center md:items-start md:text-left">
          <h2 className="section-title md:w-[400px] text-fontBlue">
            Your feedback matters to improve our university!
          </h2>
          <p className="leading-5">
            Share your honest feedback to improve teaching quality at WIUT.
            Also, explore the module and teacher rankings if you are planning to
            choose your optional modules for the upcoming year.
          </p>
          <div className="flex space-x-4">
            <Button title="For teachers" styles="bg-primaryGreen px-10" />
            <Link href="/modules">
              <Button title="For modules" styles="bg-primaryBlue px-10" />
            </Link>
          </div>
        </div>
        <div className="bg-welcome w-[260px] h-[228px] md:w-[520px] md:h-[456px] bg-contain bg-center"></div>
      </div>
    </section>
  );
}

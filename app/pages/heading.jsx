import React from "react";
import { FlipWords } from "../components/flipwords";

export default function FlipWordsDemo() {
  const words = ["Branding", "Experiences", "Product"];

  return (
    <div className="m-auto flex justify-center mb-[4vw] ">
      <div className="text-sm  font-normal text-center  ">
        We make digital (and magical)...
        <br />
        <FlipWords words={words}  className={"text-[6vw] text-center text-black dark:text-black pt-10  font-serif "}/>
      </div>
    </div>
  );
}

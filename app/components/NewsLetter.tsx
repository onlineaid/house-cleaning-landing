import React from "react";
import HeadingComponent from "./Heading";

type Props = {};

function NewsLetter({}: Props) {
  return (
    <div className="container mx-auto ">
      <div className="py-16 bg-slate-100 mt-16 card">
        <HeadingComponent text={"News letter"} align="text-center" marginBottom="mb-0" />
        <p className="text-center text-2xl py-4">Online aid collect email for promotion offer you don't get any spam from our site.</p>
        <form className="flex gap-3 justify-center px-2">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;

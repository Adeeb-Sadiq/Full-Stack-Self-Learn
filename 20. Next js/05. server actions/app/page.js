"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  
  const ref = useRef()

  return (
    <div>
      {/* sends a post request when submitted */}
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div className="w-1/3 m-auto flex justify-between my-2">
          <label htmlFor="name">Name</label>
          <input className="text-black px-1" name="name" type="text" />
        </div>
        <div className="w-1/3 m-auto flex justify-between my-2">
          <label htmlFor="address">Address</label>
          <input className="text-black px-1" name="address" type="text" />
        </div>
        <div className="w-1/3 m-auto flex justify-between my-2">
          <button className="p-1 border-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

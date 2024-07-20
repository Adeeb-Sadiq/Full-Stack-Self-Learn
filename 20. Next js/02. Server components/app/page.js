// [by default it's a server component]

// [this makes it a client component]
// "use client"

// [can only import in server ]
// import fs from 'fs'

// [can only import when on client ]
// import { useEffect, useState } from "react";

//------------------------------------------------------------------------------------------------------
import Navbar from "@/components/Navbar";

export default function Home() {
  console.log("Hello world")
  return (
    <div>
      <Navbar />
      This is a component 
    </div>
  );
}

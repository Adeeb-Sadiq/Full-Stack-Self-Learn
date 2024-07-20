"use client"

export default function Home() {
  const request = {
    name: "next.js", 
    role: "framework"
  }
  const handleClick = async () => {
    let data = await fetch('/api/', {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(request)})
    data = await data.json();
    console.log(data);
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Next js api routes demo</h1>
      <button onClick={handleClick} className="text-md p-3 border-2 border-white rounded-xl m-3">click me</button>
    </div>
  );
}

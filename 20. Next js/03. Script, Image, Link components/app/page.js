import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      {/* <Script>{`alert('welcome to home page')`}</Script> */}
      <Image src={"https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=600"} width={200} height={200}/>
      This is main
    </div>
  );
}

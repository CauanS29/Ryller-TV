import { Inter } from "next/font/google";
import NavBar from "../../components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {

  return (

    <div className="relative bg-black">

      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src='../../../../img/background.png'
          alt='backgroundImage'
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/10 to-black" />
      <div className="relative">
        <NavBar></NavBar>
      </div>

    </div>

  );

}
import Image from "next/image";
import Maincon from "./components/maincontent";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden flex ">
      <Sidebar />
      <Maincon />
    </main>
  );
}

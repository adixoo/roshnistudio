import Image from "next/image";
import logo from "../../public/logo.png";

export default function Loader() {
  return (
    <div className="bg-sand-50 flex h-screen w-full items-center justify-center">
      <Image
        src={logo}
        alt="Roshni Studio Logo"
        priority
        className="h-auto w-40"
      />
    </div>
  );
}

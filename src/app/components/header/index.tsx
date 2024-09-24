import Image from "next/image";
import Link from "next/link";
import logoMintum from "@/assets/images/logo-mintum.png";
import configPath from "@/utils/configPath.json";
function Header() {
  return (
    <header className="flex flex-row justify-between items-center bg-black px-4">
      <Link href={configPath.home}>
        <Image
          className="w-48"
          src={logoMintum}
          alt={"logoMintum"}
        />
      </Link>
      <nav className="flex flex-row gap-4">
        <Link
          className="text-white"
          href={configPath.dashboard._}>
          Dashboard
        </Link>
        <Link
          className="text-white"
          href={configPath.dashboard._}>
          Demos
        </Link>
      </nav>
    </header>
  );
}

export default Header;

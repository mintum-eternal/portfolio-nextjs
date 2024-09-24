import Link from "next/link";
import configPath from "@/utils/configPath.json";
function Header() {
  return (
    <header className="flex flex-row justify-end items-center bg-black px-4 rounded-lg m-1">
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

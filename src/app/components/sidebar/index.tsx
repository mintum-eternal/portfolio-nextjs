import Image from "next/image";
import Link from "next/link";
import configPath from "@/utils/configPath.json";
import logoMintum from "@/assets/images/logo-mintum.png";
import DashboardIcon from "./components/icons/dashboard";
import "./index.scss";
function Sidebar() {
  return (
    <div className="w-64 h-full overflow-y-auto flex flex-col bg-secondary">
      <Link href={configPath.home}>
        <Image
          className="w-48 mx-auto rounded-lg my-2"
          src={logoMintum}
          alt={"logoMintum"}
        />
      </Link>
      <nav className="w-full flex flex-col py-6">
        <Link
          className="flex flex-row gap-2 items-center pl-6 w-56 rounded-r-full py-1 item-nav"
          href={configPath.home}>
          <DashboardIcon />
          <span>Test</span>
        </Link>
        <Link
          className="flex flex-row gap-2 items-center pl-6 w-56 rounded-r-full py-1 item-nav"
          href={configPath.home}>
          <DashboardIcon />
          <span>Test</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;

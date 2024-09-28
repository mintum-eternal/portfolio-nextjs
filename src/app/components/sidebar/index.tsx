'use client'
import Image from "next/image";
import Link from "next/link";
import configPath from "@/utils/configPath.json";
import logoMintum from "@/assets/images/logo-mintum.png";
import "./index.scss";
import { listSidebar } from "./config";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname()
  console.log('check pathname', pathname);
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
        {listSidebar.map((sidebarItem) => (
          <Link
            key={sidebarItem.url}
            className={`flex flex-row gap-2 items-center pl-6 w-56 rounded-r-full py-2 ${pathname.includes(sidebarItem.url) ? 'selectedItem' : "item-nav"}`}
            href={sidebarItem.url}>
            {sidebarItem.icon()}
            <span>{sidebarItem.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;

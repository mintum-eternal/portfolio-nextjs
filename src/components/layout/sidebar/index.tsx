"use client";
import Image from "next/image";
import Link from "next/link";
import configPath from "@/utils/configPath.json";
import logoMintum from "@/assets/images/logo-mintum.png";
import "./index.scss";
import { listSidebar } from "./config";
import { usePathname } from "next/navigation";
import {
  Fragment,
  useEffect,
  useState,
} from "react";
import DropdownIcon from "./components/icons/dropdown";

function Sidebar() {
  const pathname = usePathname();
  const [toggled, setToggled] =
    useState<string>();
  useEffect(() => {
    const currentSidebar = listSidebar.find((s) =>
      pathname.includes(s.url)
    );
    if (
      currentSidebar?.subSidebar &&
      currentSidebar.subSidebar.length > 0
    ) {
      setToggled(currentSidebar.url);
      return;
    }
    setToggled(undefined);
  }, [pathname]);
  return (
    <div className="w-64 h-full flex flex-col bg-secondary">
      <Link href={configPath.home}>
        <Image
          className="w-48 mx-auto rounded-lg my-1"
          src={logoMintum}
          alt={"logoMintum"}
          lazyBoundary=""
          priority={false}
        />
      </Link>
      <nav className="w-full flex flex-col py-4">
        {listSidebar.map((sidebarItem) => (
          <Fragment key={sidebarItem.url}>
            <div
              className={`flex flex-row items-center justify-between pl-6 w-56 pr-2 rounded-r-full py-2 ${
                pathname.includes(sidebarItem.url)
                  ? "selectedItem"
                  : "item-nav"
              }`}>
              <Link href={sidebarItem.url}>
                <div className="flex flex-row flex-1 items-center gap-2">
                  {sidebarItem.icon?.()}
                  <span>{sidebarItem.title}</span>
                </div>
              </Link>
              {sidebarItem.subSidebar && (
                <div
                  onClick={() => {
                    if(toggled === sidebarItem.url){
                      return toggled ? setToggled(undefined) : setToggled(sidebarItem.url)
                    }
                    setToggled(sidebarItem.url)
                  }}
                  className={`duration-500 cursor-pointer ${
                    toggled !== sidebarItem.url
                      ? "rotate-180"
                      : ""
                  }`}>
                  <DropdownIcon />
                </div>
              )}
            </div>
            {
              toggled === sidebarItem.url && (
                <nav className="border-l-2 border-white ml-12">
                  {sidebarItem.subSidebar?.map(
                    (subItem) => (
                      <Link
                        className={`flex flex-row gap-2 items-center pl-6 w-[170px] rounded-r-full py-2 border-none ${
                          pathname.includes(
                            subItem.url
                          )
                            ? "selectedItem"
                            : "item-nav"
                        }`}
                        key={subItem.url}
                        href={subItem.url}>
                        <span>
                          {subItem.title}
                        </span>
                      </Link>
                    )
                  )}
                </nav>
              )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;

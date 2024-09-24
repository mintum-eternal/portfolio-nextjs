import Image from "next/image";
import Link from "next/link";
import configPath from "@/utils/configPath.json";
import logoMintum from "@/assets/images/logo-mintum.png";
function Sidebar() {
  return (
    <div className="w-[300px] h-full overflow-y-auto flex flex-col bg-black">
      <Link href={configPath.home}>
        <Image
          className="w-48"
          src={logoMintum}
          alt={"logoMintum"}
        />
      </Link>
    </div>
  );
}

export default Sidebar;

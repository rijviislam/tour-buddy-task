import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/tour buddy.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between px-10 h-[90px] items-center border-b border-[#E6E6E6] bg-[#FFFFFF]">
        <div className="cursor-pointer">
          <Image alt="Logo" src={Logo} width={194} height={22} quality={100} />
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-[30px] text-[15px] font-semibold font-mulish">
            <li>
              <Link href="#" className="text-[#495560]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#495560]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#495560]">
                Our Most Rated Guides
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#495560]">
                Our Packages
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#495560]">
                Most Desired Places
              </Link>
            </li>
          </ul>
          <button className="text-[#1C2B38] w-[140px] py-[14px] rounded-[3px] bg-[#FFDA32] font-extrabold text-bas font-mulish">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

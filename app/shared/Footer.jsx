import Image from "next/image";
import Logo from "../../public/tour buddy.svg";

export default function Footer() {
  return (
    <footer className="bg-[#13253F] w-full h-[418px]">
      <div>
        <div>
          <Image src={Logo} alt="Footer Logo" />
          <div className="flex flex-col gap-5">
            <select
              name=""
              id=""
              className="w-[210px] h-[46px] bg-transparent border border-blue-50 text-white pl-5 pr-[15px] outline-none"
            >
              <option value="English (UK)">English (UK)</option>
              <option value="Uk">Uk</option>
              <option value="Uk">Uk</option>
            </select>
            <select
              name=""
              id=""
              className="bg-transparent w-[210px] h-[46px] border border-white text-white outline-none"
            >
              <option value="US Dollar ($)">US Dollar ($)</option>
              <option value="Uk">Uk</option>
              <option value="Uk">Uk</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

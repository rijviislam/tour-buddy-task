import Image from "next/image";
import Link from "next/link";
import FooterIoon from "../../public/footer-icon.png";
import PaymentMethod1 from "../../public/image 27.png";
import PaymentMethod2 from "../../public/image 28.png";
import PaymentMethod3 from "../../public/image 29.png";
import PaymentMethod4 from "../../public/image 30.png";
import PaymentMethod5 from "../../public/image 31.png";
import PaymentMethod7 from "../../public/image 33.png";
import PaymentMethod8 from "../../public/image 34.png";
import PaymentMethod9 from "../../public/image 35.png";
import Logo from "../../public/tour buddy.svg";

export default function Footer() {
  return (
    <footer className="bg-[#13253F] w-full h-[418px]">
      <div className="pt-[88px] flex justify-around">
        <div className="">
          <Image src={Logo} alt="Footer Logo" />
          <div className="flex flex-col gap-10 mt-[30px] ml-10">
            <div className="relative w-[210px]">
              <select className="w-full h-[46px] bg-transparent border border-[#FFFFFF33] text-[#FFFFFF99] text-[14px] font-mulish pl-5  outline-none appearance-none">
                <option value="English (UK)"> English (UK)</option>
              </select>

              {/* Custom Dropdown Icon */}
              <div className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M11.4899 4.10156H2.51023C2.24089 4.10156 2.0905 4.38594 2.2573 4.58008L6.74714 9.78633C6.87566 9.93535 7.12312 9.93535 7.253 9.78633L11.7428 4.58008C11.9096 4.38594 11.7593 4.10156 11.4899 4.10156Z"
                    fill="#778088"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-[210px]">
              <select className="w-full h-[46px] bg-transparent border border-[#FFFFFF33] text-[#FFFFFF99] text-[14px] font-mulish pl-5  outline-none appearance-none">
                <option value="U.S. Dollar ($)"> U.S. Dollar ($)</option>
              </select>

              {/* Custom Dropdown Icon */}
              <div className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M11.4899 4.10156H2.51023C2.24089 4.10156 2.0905 4.38594 2.2573 4.58008L6.74714 9.78633C6.87566 9.93535 7.12312 9.93535 7.253 9.78633L11.7428 4.58008C11.9096 4.38594 11.7593 4.10156 11.4899 4.10156Z"
                    fill="#778088"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <p className="text-[#FFFFFFCC] font-mulish font-bold text-[15px] mb-1">
              Payment
            </p>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              Press Room
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              Careers
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <p className="text-[#FFFFFFCC] mb-1 font-mulish font-bold text-[15px]">
              Help
            </p>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              Contact us
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              Terms and conditions
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF99] font-mulish font-normal text-[15px]"
            >
              Sitemap
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-[#FFFFFFCC] font-mulish font-bold text-[15px] ">
            Payment methods possible
          </h2>
          <div className="mt-10">
            <div className="flex gap-[5px]">
              <Image src={PaymentMethod1} alt="payment method" />
              <Image src={PaymentMethod2} alt="payment method" />
              <Image src={PaymentMethod3} alt="payment method" />
              <Image src={PaymentMethod4} alt="payment method" />
            </div>
            <div className="flex gap-[5px] mt-[5px]">
              <Image src={PaymentMethod5} alt="payment method" />
              <Image src={PaymentMethod7} alt="payment method" />
              <Image src={PaymentMethod8} alt="payment method" />
              <Image src={PaymentMethod9} alt="payment method" />
            </div>
          </div>
          <p className="text-[15px] mt-4 text-[#FFFFFF99] font-mulish font-normal">
            Become a Tour guide for Us
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between px-[135px] mt-[86px]">
        <p className="text-[15px] text-[#FFFFFF99] font-mulish font-normal">
          Copyright 2025 Tour Buddy. All Rights Reserved
        </p>
        <div>
          <Image src={FooterIoon} alt="Footer icon" />
        </div>
      </div>
    </footer>
  );
}

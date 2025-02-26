import Image from "next/image";
import Pro from "../../public/Ellipse 60 (1).svg";
import Pro1 from "../../public/Ellipse 60.svg";

import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import Star from "../../public/Group 229.svg";
import Profile from "../../public/image.png";
import Car from "../../public/Vector (1).svg";
import People from "../../public/Vector (2).svg";
import Time from "../../public/Vector.svg";

export default function GuideProfile() {
  return (
    <section>
      <div className="w-full flex items-center justify-center ">
        <div className="mt-[191px]  max-w-[1440px] mx-auto ">
          <h1 className="text-black ml-[110px] text-xl font-normal leading-6">
            Your Selected Guide:
          </h1>
          <div className="mt-[68px] flex gap-[110px] max-w-[1250px]">
            <div className=" bg-[#FFF] shadow-[0px_8px_34px_0px_rgba(0,0,0,0.06)] rounded-[4px] w-[870px] h-[140px] flex gap-5 ">
              <Image
                src={Profile}
                alt="Profile"
                width={150}
                height={140}
                quality={100}
              />
              <div className="flex justify-between w-full items-center">
                <div className="mt-5">
                  <div className="flex gap-[15px] items-center">
                    <button className="bg-[#7BBCB0] text-[#FFFFFF] uppercase font-mulish text-[11px] font-extrabold rounded-[30px] py-[6px] px-5">
                      Kuakata
                    </button>
                    <div className="w-[1px] h-[14px] bg-[#C7CDD0]"></div>
                    <div className="flex gap-1">
                      <Image src={Star} alt="review star" />
                      <p className="text-[#778088] font-mulish font-semibold text-[12px]">
                        (584 reviews)
                      </p>
                    </div>
                  </div>
                  <h2 className="text-[#1C2B38] font-volkhov font-bold text-xl leading-[22px] shadow-[0px_5px_13px_rgba(255,255,255,0.40)] mt-[11px]">
                    Raihan Ahmad
                  </h2>
                  <div className="mt-[15px] flex items-center">
                    <div className="font-mulish text-sm font-semibold text-[#495560] flex gap-[7px]">
                      <Image src={Time} alt="time" />2 hours
                    </div>
                    <div className="w-[1px] h-[14px] bg-[#C7CDD0] mx-[15px]"></div>
                    <div className="font-mulish text-sm font-semibold text-[#495560] flex gap-[5px]">
                      <Image src={Car} alt="time" />2 Transport
                    </div>
                    <div className="w-[1px] h-[14px] bg-[#C7CDD0] mx-[15px]"></div>
                    <div className="font-mulish text-sm font-semibold text-[#495560] flex gap-1">
                      <Image src={People} alt="time" />2 Family Plan
                    </div>
                  </div>
                </div>
                <div className="mr-[30px] flex flex-col items-end">
                  <h3 className="text-[#7BBCB0] font-volkhov text-xl font-bold leading-6 shadow-[0px_5px_13px_rgba(255,255,255,0.40)]">
                    Tk 250.00
                  </h3>
                  <p className="font-mulish font-semibold text-xs text-[#778088]">
                    per person
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-[#13253F] rounded-[42px] w-[261px] h-[96px] text-white font-normal text-[26px] leading-[22px]">
              Hire me
            </button>
          </div>

          {/* Reviews */}

          <div className="w-full flex items-center justify-center">
            <div className=" mt-[38px] w-[1200px]">
              <div className="flex items-end gap-[42px] ">
                <h4 className="text-[#1C2B38] font-mulish font-black text-[48px]">
                  4.0
                </h4>
                <p className="text-[#778088] text-[23px] font-light font-mulish">
                  14 Reviews
                </p>
              </div>
              <div className="flex items-start justify-between">
                <Image src={Star} width={250} height={50} alt="revivew" />
                <div className="flex flex-col items-end gap-5">
                  <div className="text-[#000000] font-mulish text-[16px] font-normal leading-[30px] w-[359px] h-[100px]  rounded-[33px] bg-[#E6E6E6] text-wrap">
                    <p className="ml-[60px] mt-[26px]">
                      {" "}
                      Proficiency in: English, Bangla, and French.Guided: Nearly
                      20 individuals.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFD] w-[459px] h-[100px] rounded-[13px] shadow-md flex flex-wrap p-5 gap-3 ">
                    <div className="flex items-center gap-3 text-sm font-mulish font-semibold text-[#495560] ">
                      <GiGraduateCap className="text-[22px] text-[#000]" /> 2
                      year Expeirence
                    </div>
                    <div className="flex items-center gap-3 text-sm font-mulish font-semibold text-[#495560]">
                      <HiLocationMarker className="text-[22px] text-[#000]" />{" "}
                      Dhaka Bangladesh
                    </div>
                    <div className="flex items-center gap-3 text-sm font-mulish font-semibold text-[#495560]">
                      <FaPhone className="text-[18px] text-[#000]" />
                      +8801723451144
                    </div>
                    <div className="ml-2">
                      <select
                        data-placeholder="Choose a Language..."
                        className="bg-transparent outline-none font-mulish w-[200px]"
                      >
                        <option value="AF">Choose a Language</option>
                        <option value="SQ">Albanian</option>
                        <option value="AR">Arabic</option>
                        <option value="HY">Armenian</option>
                        <option value="EU">Basque</option>
                        <option value="BN">Bengali</option>
                        <option value="BG">Bulgarian</option>
                        <option value="CA">Catalan</option>
                        <option value="KM">Cambodian</option>
                        <option value="ZH">Chinese (Mandarin)</option>
                        <option value="HR">Croatian</option>
                        <option value="CS">Czech</option>
                        <option value="DA">Danish</option>
                        <option value="NL">Dutch</option>
                        <option value="EN">English</option>
                        <option value="ET">Estonian</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finnish</option>
                        <option value="FR">French</option>
                        <option value="KA">Georgian</option>
                        <option value="DE">German</option>
                        <option value="EL">Greek</option>
                        <option value="GU">Gujarati</option>
                        <option value="HE">Hebrew</option>
                        <option value="HI">Hindi</option>
                        <option value="HU">Hungarian</option>
                        <option value="IS">Icelandic</option>
                        <option value="ID">Indonesian</option>
                        <option value="GA">Irish</option>
                        <option value="IT">Italian</option>
                        <option value="JA">Japanese</option>
                        <option value="JW">Javanese</option>
                        <option value="KO">Korean</option>
                        <option value="LA">Latin</option>
                        <option value="LV">Latvian</option>
                        <option value="LT">Lithuanian</option>
                        <option value="MK">Macedonian</option>
                        <option value="MS">Malay</option>
                        <option value="ML">Malayalam</option>
                        <option value="MT">Maltese</option>
                        <option value="MI">Maori</option>
                        <option value="MR">Marathi</option>
                        <option value="MN">Mongolian</option>
                        <option value="NE">Nepali</option>
                        <option value="NO">Norwegian</option>
                        <option value="FA">Persian</option>
                        <option value="PL">Polish</option>
                        <option value="PT">Portuguese</option>
                        <option value="PA">Punjabi</option>
                        <option value="QU">Quechua</option>
                        <option value="RO">Romanian</option>
                        <option value="RU">Russian</option>
                        <option value="SM">Samoan</option>
                        <option value="SR">Serbian</option>
                        <option value="SK">Slovak</option>
                        <option value="SL">Slovenian</option>
                        <option value="ES">Spanish</option>
                        <option value="SW">Swahili</option>
                        <option value="SV">Swedish </option>
                        <option value="TA">Tamil</option>
                        <option value="TT">Tatar</option>
                        <option value="TE">Telugu</option>
                        <option value="TH">Thai</option>
                        <option value="BO">Tibetan</option>
                        <option value="TO">Tonga</option>
                        <option value="TR">Turkish</option>
                        <option value="UK">Ukrainian</option>
                        <option value="UR">Urdu</option>
                        <option value="UZ">Uzbek</option>
                        <option value="VI">Vietnamese</option>
                        <option value="CY">Welsh</option>
                        <option value="XH">Xhosa</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Review */}
          <div className="flex flex-col items-center justify-center">
            <div className=" mt-[90px] mb-12 max-w-[1170px]">
              <h5 className="text-[#1C2B38] font-volkhov font-bold text-[22px]">
                Customer Review
              </h5>
              <div className=" flex items-end justify-end mb-[28px]">
                <div className="flex items-center gap-[29px]">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#495560] font-mulish font-bold text-sm">
                      Guide
                    </p>
                    <p className="text-[#495560] font-mulish font-bold text-sm">
                      Transportation
                    </p>
                    <p className="text-[#495560] font-mulish font-bold text-sm">
                      Value for money
                    </p>
                    <p className="text-[#495560] font-mulish font-bold text-sm">
                      Safety
                    </p>
                  </div>
                  <div className=" flex gap-[10px]">
                    <div className="flex flex-col gap-[5px]">
                      <div className="flex gap-[10px] items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="220"
                          height="6"
                          viewBox="0 0 220 6"
                          fill="none"
                        >
                          <rect
                            y="0.524292"
                            width="220"
                            height="5.32132"
                            rx="2.66066"
                            fill="#E8EAEB"
                          />
                          <rect
                            y="0.524292"
                            width="200"
                            height="5.32132"
                            rx="2.66066"
                            fill="#FFDA32"
                          />
                        </svg>
                        <p className="text-[#778088] text-sm font-bold font-mulish">
                          4.8
                        </p>
                      </div>
                      <div className="flex gap-[10px] items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="220"
                          height="6"
                          viewBox="0 0 220 6"
                          fill="none"
                        >
                          <rect
                            y="0.48822"
                            width="220"
                            height="5.32132"
                            rx="2.66066"
                            fill="#E8EAEB"
                          />
                          <rect
                            y="0.48822"
                            width="137"
                            height="5.32132"
                            rx="2.66066"
                            fill="#FFDA32"
                          />
                        </svg>
                        <p className="text-[#778088] text-sm font-bold font-mulish">
                          30
                        </p>
                      </div>
                      <div className="flex gap-[10px] items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="220"
                          height="6"
                          viewBox="0 0 220 6"
                          fill="none"
                        >
                          <rect
                            y="0.452209"
                            width="220"
                            height="5.32132"
                            rx="2.66066"
                            fill="#E8EAEB"
                          />
                          <rect
                            y="0.452209"
                            width="193"
                            height="5.32132"
                            rx="2.66066"
                            fill="#FFDA32"
                          />
                        </svg>
                        <p className="text-[#778088] text-sm font-bold font-mulish">
                          4.5
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="220"
                          height="6"
                          viewBox="0 0 220 6"
                          fill="none"
                        >
                          <rect
                            y="0.416138"
                            width="220"
                            height="5.32132"
                            rx="2.66066"
                            fill="#E8EAEB"
                          />
                          <rect
                            y="0.416138"
                            width="179"
                            height="5.32132"
                            rx="2.66066"
                            fill="#FFDA32"
                          />
                        </svg>
                        <p className="text-[#778088] text-sm font-bold font-mulish">
                          4.0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex w-[1140px] gap-[22px] border-b border-[#E8EAEB]">
                  <div className="flex gap-5 items-center justify-center">
                    <Image src={Pro1} alt="profile" quality={100} />
                    <div className="w-[203px]">
                      <Image src={Star} alt="review" quality={100} />
                      <div className="flex gap-[5px ] font-mulish font-bold text-[15px] text-[#1C2B38] mt-[6px] mb-[9px]">
                        Arlene McCoy{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M11.2125 6.62576C11.3885 6.45812 11.6229 6.36545 11.866 6.36728C12.1091 6.36912 12.342 6.46534 12.5155 6.63562C12.689 6.80591 12.7896 7.03694 12.7961 7.27998C12.8025 7.52302 12.7142 7.75905 12.55 7.93826L7.56245 14.1758C7.47669 14.2681 7.37318 14.3423 7.25812 14.3937C7.14305 14.4452 7.01879 14.4729 6.89277 14.4752C6.76674 14.4776 6.64154 14.4545 6.52465 14.4073C6.40776 14.3601 6.30158 14.2899 6.21245 14.2008L2.90495 10.8933C2.81284 10.8074 2.73897 10.7039 2.68773 10.5889C2.63649 10.4739 2.60893 10.3498 2.60671 10.2239C2.60449 10.098 2.62765 9.973 2.6748 9.85626C2.72195 9.73953 2.79213 9.63349 2.88115 9.54446C2.97018 9.45544 3.07622 9.38526 3.19296 9.33811C3.30969 9.29096 3.43473 9.2678 3.56061 9.27002C3.68648 9.27224 3.81063 9.2998 3.92563 9.35104C4.04062 9.40228 4.14413 9.47615 4.22995 9.56826L6.84745 12.1845L11.1875 6.65326C11.1952 6.64361 11.2036 6.63443 11.2125 6.62576ZM10.0625 13.0508L11.2125 14.2008C11.3016 14.2897 11.4077 14.3598 11.5244 14.4068C11.6412 14.4539 11.7663 14.4769 11.8921 14.4746C12.018 14.4723 12.1421 14.4446 12.2571 14.3932C12.372 14.3419 12.4755 14.2679 12.5612 14.1758L17.5512 7.93826C17.6408 7.84976 17.7117 7.74411 17.7596 7.62761C17.8075 7.5111 17.8315 7.38614 17.83 7.26019C17.8285 7.13423 17.8017 7.00986 17.7511 6.89451C17.7005 6.77916 17.6271 6.67518 17.5355 6.5888C17.4438 6.50241 17.3356 6.43539 17.2175 6.39173C17.0993 6.34807 16.9736 6.32867 16.8478 6.33469C16.7219 6.34071 16.5986 6.37202 16.4852 6.42675C16.3717 6.48149 16.2705 6.55852 16.1875 6.65326L11.8462 12.1845L11.24 11.577L10.0612 13.0508H10.0625Z"
                            fill="#7BBCB0"
                          />
                        </svg>
                      </div>
                      <p className="text-[#778088] text-[13px] font-semibold font-mulish">
                        2 October 2012
                      </p>
                    </div>
                  </div>
                  <div className=" w-[1200px]">
                    <div className="flex justify-between">
                      <h6 className="text-[#1C2B38] font-bold text-[15px] font-mulish leading-[18px]">
                        Good tour, really well organised
                      </h6>
                      <p className="text-[#778088] font-mulish text-[13px] font-semibold flex gap-[10px]">
                        Helpful?{" "}
                        <span className="text-[#7BBCB0] font-bold">Yes</span>
                      </p>
                    </div>
                    <p className="flex flex-col text-[#000] font-mulish font-normal text-sm leading-6 mt-2">
                      <span> "Amazing Guide!"</span>
                      Our tour guide in Kuakata was fantastic! They showed us
                      the best spots for sunrise and sunset, shared fascinating
                      local stories, and made the trip smooth and enjoyable.
                      Their friendly attitude and attention to detail truly made
                      our visit unforgettable. Highly recommend!
                    </p>
                  </div>
                </div>
                <div className="flex w-[1140px] gap-[22px] border-b border-[#E8EAEB]">
                  <div className="flex gap-5 items-center justify-center">
                    <Image src={Pro} alt="profile" quality={100} />
                    <div className="w-[203px]">
                      <Image src={Star} alt="review" quality={100} />
                      <div className="flex gap-[5px ] font-mulish font-bold text-[15px] text-[#1C2B38] mt-[6px] mb-[9px]">
                        Jenny Wilson{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M11.2125 6.62576C11.3885 6.45812 11.6229 6.36545 11.866 6.36728C12.1091 6.36912 12.342 6.46534 12.5155 6.63562C12.689 6.80591 12.7896 7.03694 12.7961 7.27998C12.8025 7.52302 12.7142 7.75905 12.55 7.93826L7.56245 14.1758C7.47669 14.2681 7.37318 14.3423 7.25812 14.3937C7.14305 14.4452 7.01879 14.4729 6.89277 14.4752C6.76674 14.4776 6.64154 14.4545 6.52465 14.4073C6.40776 14.3601 6.30158 14.2899 6.21245 14.2008L2.90495 10.8933C2.81284 10.8074 2.73897 10.7039 2.68773 10.5889C2.63649 10.4739 2.60893 10.3498 2.60671 10.2239C2.60449 10.098 2.62765 9.973 2.6748 9.85626C2.72195 9.73953 2.79213 9.63349 2.88115 9.54446C2.97018 9.45544 3.07622 9.38526 3.19296 9.33811C3.30969 9.29096 3.43473 9.2678 3.56061 9.27002C3.68648 9.27224 3.81063 9.2998 3.92563 9.35104C4.04062 9.40228 4.14413 9.47615 4.22995 9.56826L6.84745 12.1845L11.1875 6.65326C11.1952 6.64361 11.2036 6.63443 11.2125 6.62576ZM10.0625 13.0508L11.2125 14.2008C11.3016 14.2897 11.4077 14.3598 11.5244 14.4068C11.6412 14.4539 11.7663 14.4769 11.8921 14.4746C12.018 14.4723 12.1421 14.4446 12.2571 14.3932C12.372 14.3419 12.4755 14.2679 12.5612 14.1758L17.5512 7.93826C17.6408 7.84976 17.7117 7.74411 17.7596 7.62761C17.8075 7.5111 17.8315 7.38614 17.83 7.26019C17.8285 7.13423 17.8017 7.00986 17.7511 6.89451C17.7005 6.77916 17.6271 6.67518 17.5355 6.5888C17.4438 6.50241 17.3356 6.43539 17.2175 6.39173C17.0993 6.34807 16.9736 6.32867 16.8478 6.33469C16.7219 6.34071 16.5986 6.37202 16.4852 6.42675C16.3717 6.48149 16.2705 6.55852 16.1875 6.65326L11.8462 12.1845L11.24 11.577L10.0612 13.0508H10.0625Z"
                            fill="#7BBCB0"
                          />
                        </svg>
                      </div>
                      <p className="text-[#778088] text-[13px] font-semibold font-mulish">
                        2 October 2012
                      </p>
                    </div>
                  </div>
                  <div className=" w-[1200px]">
                    <div className="flex justify-between">
                      <h6 className="text-[#1C2B38] font-bold text-[15px] font-mulish leading-[18px]">
                        Informative but disappointed not seeing changing of the
                        guards
                      </h6>
                      <p className="text-[#778088] font-mulish text-[13px] font-semibold flex gap-[10px]">
                        Helpful?{" "}
                        <span className="text-[#7BBCB0] font-bold">Yes</span>
                      </p>
                    </div>
                    <p className="flex flex-col text-[#000] font-mulish font-normal text-sm leading-6 mt-2">
                      <span> "Fantastic Experience!"</span>
                      Our visit to Kuakata was unforgettable, thanks to our
                      amazing guide. They were knowledgeable, friendly, and went
                      above and beyond to ensure we enjoyed every moment. From
                      exploring the beach to learning about local culture,
                      everything was perfect. Highly recommended!
                    </p>
                  </div>
                </div>
                <div className="mt-[90px] flex items-center justify-center w-full border-b border-[#E8EAEB]">
                  <Link href="#" className="text-[#7BBCB0] text-sm font-bold">
                    View More Comments
                  </Link>
                </div>
                <div className="mt-[90px] flex items-center justify-center w-full border-b border-[#E8EAEB]"></div>
                <div className="mt-[90px] flex items-center justify-center w-full border-b border-[#E8EAEB]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

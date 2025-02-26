import Image from "next/image";
import Pay from "../../public/payment 1.png";
import SSL from "../../public/ssl2 1.png";
export default function Payment() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-mulish text-2xl font-bold mt-[53px] w-[1120px]">
          Payment{" "}
        </h1>
        <div className="bg-[#F9FAFD] w-full flex flex-col items-center justify-center">
          <div className="  flex  justify-start items-start gap-[115px] pt-[79px]">
            <div className="">
              <h2 className="text-[#000] h-[81px] font-inria font-normal text-[36px]">
                Choose Payment Method
              </h2>
              <div className="flex gap-[115px] mt-6">
                <form action="" className="w-[690px] ">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-[15px] text-[#1C2B38] font-mulish font-bold"
                    >
                      Nmae:
                    </label>
                    <input
                      type="text"
                      placeholder="Ahnaf Amer"
                      className="bg-[#F4F4F5]  h-[54px] outline-none p-5 mt-[10px] text-[#495560] text-sm font-mulish font-semibold"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label
                      htmlFor="Transaction"
                      className="text-[15px] text-[#1C2B38] font-mulish font-bold"
                    >
                      Transaction Id:
                    </label>
                    <input
                      type="text"
                      placeholder="...."
                      className="bg-[#F4F4F5]  h-[54px] outline-none p-5 mt-[10px] text-[#495560] text-sm font-mulish font-semibold"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label
                      htmlFor="PhoneNumber:"
                      className="text-[15px] text-[#1C2B38] font-mulish font-bold"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="number"
                      placeholder="+8801321454687"
                      className="bg-[#F4F4F5] h-[54px] outline-none p-5 mt-[10px] text-[#495560] text-sm font-mulish font-semibold [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label
                      htmlFor="name"
                      className="text-[15px] text-[#1C2B38] font-mulish font-bold"
                    >
                      Pin Code:
                    </label>
                    <input
                      type="text"
                      placeholder="...."
                      className="bg-[#F4F4F5]  h-[54px] outline-none p-5 mt-[10px] text-[#495560] text-sm font-mulish font-semibold"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-[20px]">
              <Image src={Pay} width={303} height={248} alt="payment" />
            </div>
          </div>
          <div className="w-[1070px] mt-12">
            <h3 className="text-[#000000] font-mulish text-[15px] font-bold">
              Select Method :
            </h3>
            <div className="flex flex-col items-center  gap-6 mt-[10px]">
              <div className="flex items-start  w-full gap-[32px] pl-[29px]">
                <div className="w-[100px] h-[35px] bg-[#37B1E2] flex items-center justify-center gap-[11px] rounded-[17.5px] cursor-pointer">
                  <label
                    htmlFor="bkash"
                    className="w-[100px] h-[35px] flex items-center justify-center gap-[8px] rounded-[17.5px] cursor-pointer  transition-all duration-200 bg-[#37B1E2] "
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="bkash"
                      className="hidden peer"
                    />
                    <div className="w-3 h-3 border bg-white rounded-full peer-checked:bg-[#000]"></div>
                    <span className="text-white font-mukta text-[13px] font-bold">
                      Bkash
                    </span>
                  </label>
                </div>
                <div className="w-[100px] h-[35px] bg-[#37B1E2] flex items-center justify-center gap-[11px] rounded-[17.5px] cursor-pointer">
                  <label
                    htmlFor="nagad"
                    className="w-[100px] h-[35px] flex items-center justify-center gap-[8px] rounded-[17.5px] cursor-pointer  transition-all duration-200 bg-[#37B1E2] "
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="nagad"
                      className="hidden peer"
                    />
                    <div className="w-3 h-3 border bg-white rounded-full peer-checked:bg-[#000]"></div>
                    <span className="text-white font-mukta text-[13px] font-bold">
                      Nagad
                    </span>
                  </label>
                </div>
                <div className="w-[100px] h-[35px] bg-[#37B1E2] flex items-center justify-center gap-[11px] rounded-[17.5px] cursor-pointer">
                  <label
                    htmlFor="upay"
                    className="w-[100px] h-[35px] flex items-center justify-center gap-[8px] rounded-[17.5px] cursor-pointer  transition-all duration-200 bg-[#37B1E2] "
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="upay"
                      className="hidden peer"
                    />
                    <div className="w-3 h-3 border bg-white rounded-full peer-checked:bg-[#000]"></div>
                    <span className="text-white font-mukta text-[13px] font-bold">
                      UPAY
                    </span>
                  </label>
                </div>
                <div className="w-[100px] h-[35px] bg-[#37B1E2] flex items-center justify-center gap-[11px] rounded-[17.5px] cursor-pointer">
                  <label
                    htmlFor="visa"
                    className="w-[100px] h-[35px] flex items-center justify-center gap-[8px] rounded-[17.5px] cursor-pointer  transition-all duration-200 bg-[#37B1E2] "
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="visa"
                      className="hidden peer"
                    />
                    <div className="w-3 h-3 border bg-white rounded-full peer-checked:bg-[#000]"></div>
                    <span className="text-white font-mukta text-[13px] font-bold">
                      Visa
                    </span>
                  </label>
                </div>
                <div className="min-w-[100px] h-[35px] bg-[#37B1E2] flex items-center justify-center gap-[11px] rounded-[17.5px] cursor-pointer px-3">
                  <label
                    htmlFor="master"
                    className="w-[100px] h-[35px] flex items-center justify-center gap-[8px] rounded-[17.5px] cursor-pointer  transition-all duration-200 bg-[#37B1E2] "
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="master"
                      className="hidden peer"
                    />
                    <div className="w-3 h-3 border bg-white rounded-full peer-checked:bg-[#000]"></div>
                    <span className="text-white font-mukta text-[13px] font-bold">
                      Master Card
                    </span>
                  </label>
                </div>
                <div className="w-[100px] h-[35px] bg-[#37B1E2] flex items-center justify-center gap-[11px] rounded-[17.5px] cursor-pointer ">
                  <label
                    htmlFor="others"
                    className="w-[100px] h-[35px] flex items-center justify-center gap-[8px] rounded-[17.5px] cursor-pointer  transition-all duration-200 bg-[#37B1E2] "
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="others"
                      className="hidden peer"
                    />
                    <div className="w-3 h-3 border bg-white rounded-full peer-checked:bg-[#000]"></div>
                    <span className="text-white font-mukta text-[13px] font-bold">
                      Others
                    </span>
                  </label>
                </div>
              </div>
              <button className="text-[#FFF] inline-flex items-center justify-center font-mulish text-[15px] font-bold leading-[18px] w-[240px] py-[21px] bg-[#13253F] rounded-[78px] ">
                Confirm Payment
              </button>
            </div>
          </div>
          <div className="mt-6 mb-10">
            <Image src={SSL} alt="ssl" />
          </div>
        </div>
      </div>
    </section>
  );
}

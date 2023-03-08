import React, { useEffect, useState } from "react";
import PricingArea from "./PricingArea.css";
import Aos from "aos";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import "aos/dist/aos.css";

const Pricing = () => {
  const [on, setOn] = useState(false);
  console.log(on);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="fullBody min-h-[700px] p-20">
      <div className="fullBody2">
        <header>
          <h1 className="text-4xl text-[#6F728E] font-bold">Our Pricing</h1>
          <div>
            <h3 className="my-7 flex justify-center items-center">
              <span className="text-[#B8B7C7]">Annually</span>
              <span onClick={() => setOn(!on)} className="text-3xl mx-2">
                {on ? <FaToggleOff /> : <FaToggleOn />}
              </span>
              <span className="text-[#B8B7C7]">Monthly</span>
            </h3>
          </div>
        </header>
        <main>
          <div>
            {on === false && (
              <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1">
                <div
                  className="p-8 bg-[#FFFFFF] rounded-lg my-8 shadowColor"
                  data-aos="fade-right"
                >
                  <h3 className="text-xl text-[#6B6E7F] mt-5">Basic</h3>
                  <h2 className="text-3xl font-semibold py-2 text-[#45495D]">
                    $19.99
                  </h2>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">500 GB Storage</h4>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">2 users Allowed</h4>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">Send up to 3 GB</h4>
                  <hr />
                  <button className="border border-[#7276BC] text-[#7276BC] py-2 w-full rounded-lg hover:bg-[#7276BC] hover:text-[#FFFFFF] duration-300 ease-out mt-7">
                    LEARN MORE
                  </button>
                </div>
                <div
                  className="py-16  bg-[#8E92E9] rounded-lg shadowColor"
                  data-aos="zoom-in"
                >
                  <div className="my-5 mx-7">
                    <h3 className="text-xl text-[#FBFFFF]">Professional</h3>
                    <h2 className="text-3xl font-semibold py-2 text-[#FBFFFF]">
                      $19.99
                    </h2>
                    <hr />
                    <h4 className="py-2 text-[#FBFFFF]">1 TB Storage</h4>
                    <hr />
                    <h4 className="py-2 text-[#FBFFFF]">5 users Allowed</h4>
                    <hr />
                    <h4 className="py-2 text-[#FBFFFF]">Send up to 10 GB</h4>
                    <hr />
                    <button className="border border-white text-white py-2 w-full rounded-lg hover:bg-white hover:text-[#7276BC] duration-300 ease-out mt-7">
                      LEARN MORE
                    </button>
                  </div>
                </div>
                <div
                  className="p-8 bg-[#FFFFFF] my-8 shadowColor rounded-lg"
                  data-aos="fade-left"
                >
                  <h3 className="text-xl text-[#6B6E7F] mt-5">Master</h3>
                  <h2 className="text-3xl font-semibold py-2 text-[#45495D]">
                    $19.99
                  </h2>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">2 TB Storage</h4>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">10 users Allowed</h4>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">Send up to 20 GB</h4>
                  <hr />
                  <button className="border border-[#7276BC] text-[#7276BC] py-2 w-full rounded-lg hover:bg-[#7276BC] hover:text-[#FFFFFF] duration-300 ease-out mt-7">
                    LEARN MORE
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            {on === true && (
              <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1">
                <div
                  className="p-8 bg-[#FFFFFF] rounded-lg my-8 shadowColor"
                  data-aos="fade-right"
                >
                  <h3 className="text-xl text-[#6B6E7F] mt-5">Basic</h3>
                  <h2 className="text-3xl font-semibold py-2 text-[#45495D]">
                    $199.99
                  </h2>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">500 GB Storage</h4>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">2 users Allowed</h4>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">Send up to 3 GB</h4>
                  <hr />
                  <button className="border border-[#7276BC] text-[#7276BC] py-2 w-full rounded-lg hover:bg-[#7276BC] hover:text-[#FFFFFF] duration-300 ease-out mt-7">
                    LEARN MORE
                  </button>
                </div>
                <div
                  className="py-16  bg-[#8E92E9] rounded-lg shadowColor"
                  data-aos="zoom-in"
                >
                  <div className="my-5 mx-7">
                    <h3 className="text-xl text-[#FBFFFF]">Professional</h3>
                    <h2 className="text-3xl font-semibold py-2 text-[#FBFFFF]">
                      $249.99
                    </h2>
                    <hr />
                    <h4 className="py-2 text-[#FBFFFF]">1 TB Storage</h4>
                    <hr />
                    <h4 className="py-2 text-[#FBFFFF]">5 users Allowed</h4>
                    <hr />
                    <h4 className="py-2 text-[#FBFFFF]">Send up to 10 GB</h4>
                    <hr />
                    <button className="border border-white text-white py-2 w-full rounded-lg hover:bg-white hover:text-[#7276BC] duration-300 ease-out mt-7">
                      LEARN MORE
                    </button>
                  </div>
                </div>
                <div
                  className="p-8 bg-[#FFFFFF] my-8 shadowColor rounded-lg"
                  data-aos="fade-left"
                >
                  <h3 className="text-xl text-[#6B6E7F] mt-5">Master</h3>
                  <h2 className="text-3xl font-semibold py-2 text-[#45495D]">
                    $399.99
                  </h2>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">2 TB Storage</h4>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">10 users Allowed</h4>
                  <hr />
                  <h4 className="py-2 text-[#6B6E7F]">Send up to 20 GB</h4>
                  <hr />
                  <button className="border border-[#7276BC] text-[#7276BC] py-2 w-full rounded-lg hover:bg-[#7276BC] hover:text-[#FFFFFF] duration-300 ease-out mt-7">
                    LEARN MORE
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pricing;

import Image from "next/image";
import React from "react";
import img1 from "../assets/img/nft.png";
import img2 from "../assets/img/binance-pay.png";
import img3 from "../assets/img/binance-earn.png";

const WhyChooseUs = () => {
  const data = [
    {
      id: 1,
      title: "Connect accounts",
      desc: "Integrate Facebook & Google Ads accounts easily",
    },
    {
      id: 2,
      title: "Optimize & Analysis",
      desc: "Integrate Facebook & Google Ads accounts easily",
    },
    {
      id: 3,
      title: "Maximize Your Results",
      desc: "Integrate Facebook & Google Ads accounts easily",
    },
  ];
  return (
    <div className="w-[65%] mx-auto py-24">
      <h1 className="text-4xl font-semibold">
        Explore endless possibilities with Binance
      </h1>
      <div className="grid grid-cols-3 gap-8 my-10">
        {/* {data.map((data) => ( */}
          <div className="flex flex-col justify-between bg-primary p-4 h-[550px] rounded-md">
            <div className="flex justify-center">
              <Image src={img1} className="w-[350px]" alt="nft" />
            </div>
            <div className="mt-24">
              <h1 className="text-3xl my-3 font-semibold">
                Dive into the world of NFTs
              </h1>
              <p className="mb-3">
                Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with
                Binance NFT.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-primary p-4 h-[550px] rounded-md">
            <div className="mt-24">
              <h1 className="text-3xl font-semibold">
                Dive into the world of NFTs
              </h1>
              <p className="">
                Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with
                Binance NFT.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src={img2} className="w-[350px]" alt="nft" />
            </div>
          </div>

          <div className="flex flex-col justify-between bg-primary p-4 h-[550px] rounded-md">
            <div className="flex justify-center">
              <Image src={img3} className="w-[350px]" alt="nft" />
            </div>
            <div className="mt-24">
              <h1 className="text-3xl my-3 font-semibold">
                Dive into the world of NFTs
              </h1>
              <p className="mb-3">
                Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with
                Binance NFT.
              </p>
            </div>
          </div>

        {/* ))} */}
      </div>
    </div>
  );
};

export default WhyChooseUs;

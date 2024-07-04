import React from "react";
import aboutImg from "../assets/aboutImg.png"

const AboutUs = () => {
  return (
    <div className="h-screen w-full ">
      <h1 className="text-center p-4 text-[18px]   font-semibold">About Us</h1>
      <div className="h-screen w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <p className="p-2 md:p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi
            quas explicabo nam, laboriosam cumque doloremque fuga non nemo nihil
            mollitia vel. Exercitationem maiores recusandae rem! Placeat a optio
            recusandae? Modi vel voluptates hic nostrum officiis, alias, iusto
            voluptatem veniam dicta molestiae accusantium. Commodi autem amet
            perspiciatis a alias tempora!
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={aboutImg} className="w-2/3 h-2/3 md:h-1/2 md:w-1/2" alt="water wash bike" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

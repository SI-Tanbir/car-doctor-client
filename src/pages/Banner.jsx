import React from "react";

import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import img5 from "../assets/images/banner/5.jpg";
import img6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl  ">
      <div id="slide1" className="carousel-item  relative w-full h-[600px] ">
        <img src={img1} className="w-full " />
        <div className="text-white absolute  w-full space-y-8 bg-gradient-to-r from-[#151515] to-[#15151500] h-full p-32">
          <h3 className="text-4xl font-extrabold">Affordable Price For Car Servicing</h3>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
         <div className="flex  gap-10 ">
         <button className="btn" >Discover more</button>
         <button className="btn btn-primary btn-outline" >Latest Project</button>
         </div>
        </div>
        <div className="absolute  bottom-1 right-0 transform -translate-y-1/2   flex ">
      

          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full" />
        <div className="absolute  bottom-1 right-0 gap-5  flex -translate-y-1/2 transform ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
          
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src={img3} className="w-full" />
        <div className="absolute  bottom-1 right-0 gap-5  flex -translate-y-1/2 transform ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src={img4} className="w-full" />
        <div className="absolute  bottom-1 right-0 gap-5  flex -translate-y-1/2 transform ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full h-[600px]">
        <img src={img5} className="w-full" />
        <div className="absolute  bottom-1 right-0 gap-5  flex -translate-y-1/2 transform ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full h-[600px]">
        <img src={img6} className="w-full " />
        <div className="absolute  bottom-1 right-0 gap-5  flex -translate-y-1/2 transform ">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

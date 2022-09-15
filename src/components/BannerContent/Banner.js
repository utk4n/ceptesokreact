import { useEffect, useRef } from "react";
import banner1 from "../../assets/banners/banner1.jpg";
import banner2 from "../../assets/banners/banner2.jpg";
import banner3 from "../../assets/banners/banner3.jpg";
import banner4 from "../../assets/banners/banner4.jpg";
import banner5 from "../../assets/banners/banner5.jpg";
import useModal from "../../hooks/useModal";
const Banner = () => {
  const ref = useRef();

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imagesSlideShow = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current == total - 1 ? 0 : current + 1;
    };
    imagesSlideShow();
    let interval = setInterval(imagesSlideShow, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className="flex relative h-[520px] border border-l-rose-600"

    >
      <img
        className="absolute w-full h-full block object-fill  transition-all duration-400 ease-in"
        src={banner1}
        alt=""
      />
      <img
        className="absolute w-full h-full block object-fill  transition-all duration-400 ease-in"
        src={banner2}
        alt=""
      />
      <img
        className="absolute w-full h-full block object-fill  transition-all duration-400 ease-in"
        src={banner3}
        alt=""
      />
      <img
        className="absolute w-full h-full block object-fill  transition-all duration-400 ease-in"
        src={banner4}
        alt=""
      />
      <img
        className="absolute w-full h-full block object-fill  transition-all duration-400 ease-in"
        src={banner5}
        alt=""
      />
    </div>
  );
};

export default Banner;

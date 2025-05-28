import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const ImageClipBox = ({ src, clipClass, srcClass }) => (
  <div className={clipClass}>
    <img className={srcClass} src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-5 w-screen px-4 sm:px-10">
      <div className="relative rounded-lg bg-background-b py-20 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-stretch justify-between">
          {/* Left image — top aligned */}
          {/* <div className="flex-1 hidden sm:flex flex-col justify-start items-start relative h-72">
            <div className="relative w-64 h-64">
              <ImageClipBox
                src="./img/flower2b.webp"
                clipClass="absolute top-0 left-0 w-full h-full xl:translate-x-[50px]"
                srcClass="object-cover w-full h-full rounded-full scale-150 xl:scale-250"
              />
              <ImageClipBox
                src="./img/flower2.webp"
                clipClass="flower-clip-path-2 w-full h-full xl:translate-x-[50px]"
                srcClass="object-cover w-full h-full rounded-full scale-150 xl:scale-250"
              />
            </div> */}
        </div>

        {/* Center text */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <p className="mb-10 font-inter md:text-xl text-background">
            Feel free to reach out
          </p>
          <Button
            href="https://q-desabre.github.io/qtech-portfolio/#contact"
            id="watch-trailer"
            title="Get in touch"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-accent flex-center gap-1"
          />
        </div>

        {/* Right image — bottom aligned */}
        {/* <div className="flex-1 hidden sm:flex flex-col justify-end items-end relative h-72">
            <div className="relative w-64 h-64">
              <ImageClipBox
                src="./img/flowerb.webp"
                clipClass="absolute bottom-0 right-0 w-full h-full translate-x-[-10px] xl:translate-x-[-100px]  2xl:scale-150"
                srcClass="object-cover w-full h-full rounded-full"
              />
              <ImageClipBox
                src="./img/flower.webp"
                clipClass="flower-clip-path w-full h-full translate-x-[-10px] xl:translate-x-[-100px]"
                srcClass="object-cover w-full h-full rounded-full 2xl:scale-150 "
              />
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Contact;

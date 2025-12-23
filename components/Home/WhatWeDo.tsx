import SplitText from "../ui/SplitText";
import AnimatePara from "../ui/AnimatePara";

const WhatWeDo = () => {
  return (
    <section className="w-full  flex flex-col items-center h-fit relative sm:pb-[10vh] xl:pb-[5vh] my-[5vh] px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
        <SplitText text="What We Do" highlight="Consulting" />
      </h2>
      <div className="w-[90%] lg:w-[70%] mt-2 xl:mt-8">
        <AnimatePara
          text={`AVTARAN CAPITAL specializes in providing a complete range of consulting, compliance, and business-support services designed to help companies set up, operate, and scale effortlessly in India's fast-growing market.`}
          className=" mb-3 "
        />
        <AnimatePara
          text={`We help businesses simplify their journey in India. Our experts focus on making every step — from setup to compliance — easier, clearer, and more efficient, allowing clients to concentrate on growth and decision-making.`}
          className=" -mb-1 "
        />
      </div>
    </section>
  );
};

export default WhatWeDo;

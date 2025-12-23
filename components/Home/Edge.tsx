import SplitText from "../ui/SplitText";
import AnimatePara from "../ui/AnimatePara";

const Edge = () => {
  return (
    <section className="w-full  flex flex-col items-center h-fit relative sm:pb-[10vh] xl:pb-[5vh] my-[5vh] px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
        <SplitText text="The AVTARAN Edge" highlight="Consulting" />
      </h2>
      <div className="w-[90%] lg:w-[70%] mt-2 xl:mt-8">
        <AnimatePara
          text={`With a strong reputation and years of industry experience, AVTARAN CAPITAL offers integrated, transparent, and trustworthy consulting services under one roof. Our goal is to simplify complex processes, reduce operational burdens, and create a smooth pathway for companies to establish and grow their presence in India.`}
          className=" mb-3 "
        />
      </div>
    </section>
  );
};

export default Edge;

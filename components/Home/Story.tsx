import SplitText from "../ui/SplitText";
import AnimatePara from "../ui/AnimatePara";

function Story({ noHeading = false }: { noHeading?: boolean }) {
  return (
    <section className="w-full min-h-[70vh] h-fit py-[4vh] text-center flex flex-col gap-1.5 relative px-4 md:px-1">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[calc(50%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {!noHeading && (
        <>
          <h2 className="text-[24px] leading-[130%] tracking-[-1]  md:text-[36px] lg:text-[40px] font-semibold">
            <SplitText text="Our Story" highlight="Story" />
          </h2>
          <AnimatePara
            text='"More Than Managing Assets—We Build Relationships"'
            className=" mb-2 xl:-mb-[40px]"
          />
        </>
      )}
      <div className="w-[calc(100%-8vw)] h-fit flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-3 px-[1vw] sm:px-[4vw] md:px-[0vw] text-start mx-auto md:justify-between">
        <div className="flex flex-col gap-4 items-start justify-center w-full md:w-[55%] lg:w-[52%] h-fit">
          <div className="flex items-start justify-between gap-2 h-fit">
            <img
              src="/logo2.png"
              alt="logo"
              className="w-8 h-8 md:w-10 md:h-10 aspect-square"
            />
            <p className="font-normal brandColor text-xl md:text-xl lg:text-2xl ">
              AVTARAN CAPITAL is a boutique global consulting firm offering
              multi-disciplinary professional services to businesses across the
              world. We bring together a team of highly qualified, optimistic,
              and solution-driven professionals who deliver reliable,
              high-quality support to clients to achieve their strategic goals
              with confidence.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center relative w-full md:w-[40%]">
          <img
            src="/hand.png"
            alt="hand"
            className="w-full max-w-[520px] md:max-w-[45vw] relative z-20"
          />
          <div
            style={{
              position: "absolute",
              width: "40%",
              height: "40%",
              left: "30%",
              top: "52%",
              borderRadius: "999px",
              background: "#0F608970",
              boxShadow: "0px 4px 142px 17px #0F6089",
              transform: "translate(-50%,-50%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Story;

import SplitText from "../ui/SplitText";
import AnimatePara from "../ui/AnimatePara";

const data = [
  "Deep understanding of the Indian legal, regulatory, compliance, and tax environment",
  "End-to-end assistance for business setup in India",
  "Tailored solutions for foreign companies entering the Indian market",
  "Back-office support across Accounts, Taxation, and Finance functions",
  "Regulatory guidance to ensure organizations stay compliant, structured, and future-ready",
];
const Expertise = () => {
  return (
    <section className="w-full  flex flex-col items-center h-fit relative sm:pb-[10vh] xl:pb-[5vh] my-[5vh] px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
        <SplitText
          text="Our Expertise
"
          highlight="Consulting"
        />
      </h2>
      <div className="w-[90%] lg:w-[70%] mt-2 xl:mt-8">
        <ul>
          {data.map((item, i) => (
            <li key={i} className="list-disc">
              <AnimatePara text={item} className=" mb-3  " />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Expertise;

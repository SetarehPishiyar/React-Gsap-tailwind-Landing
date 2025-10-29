import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width : 768px)",
  });
  const [lists, setLists] = useState(nutrientLists);
  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 60%",
      },
    });

    contentTl
      .from(titleSplit.chars, {
        yPercent: 200,
        stagger: 0.05,
        ease: "power2.out",
        marker: true,
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.02,
      });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section">
      <img src="images\slider-dip.png" alt="" className="w-full object-cover" />
      <img src="images\big-img.png" alt="" className="big-img" />
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-5">
          <div className="general-title relative felx flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">it still does</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start translate-y-0 inline-block"
            >
              <div className="bg-yellow-brown md:pb-5 pb-2 md:pt-0 pt-2 md:px-5 px-3 inline-block">
                <h2 className="text-milk-yellow">body good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md ">
            <p className="text-lg md:text-right text-balance font-paragraph">
              milk contains a wide array of nutritions, including vitamins,
              minerals, and protein, and this is lactose free.
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="text-sm font-paragraph mt-2">up to</p>
                  <p className="text-xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>
                {index !== lists.length - 1 && (
                  <div className="spacer-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;

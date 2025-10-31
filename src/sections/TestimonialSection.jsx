import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const TestimonialSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: isMobile ? "0vh" : "-140vh",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 50,
    })
      .to(
        ".testimonials-section .second-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -70,
        },
        "<"
      );

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  }, [isMobile]);
  const vdRef = useRef([]);

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };
  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className={`vd-card ${card.translation} ${card.rotation}`}
              onMouseEnter={() => handlePlay(index)}
              onMouseLeave={() => handlePause(index)}
            >
              <video
                ref={(el) => (vdRef.current[index] = el)}
                src={card.src}
                playsInline
                muted
                loop
                className="size-full object-cover"
              ></video>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialSection;

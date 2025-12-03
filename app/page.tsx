"use client";
import { hover, motion, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import { useRef } from "react";

export default function Home() {
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 400], ["100vw", "30vw"], { clamp: true });
  const height = useTransform(scrollY, [0, 400], ["100vh", '85vh'], { clamp: true });
  const y = useTransform(scrollY, [0, 200], ['0vh', '5vh']);
  const textScale = useTransform(scrollY, [0, 20], [1, 0.8]);
  const textOpacity = useTransform(scrollY, [0, 500], [1.0, 0.0]);

  const img1x = useTransform(scrollY, [100, 200, 700], ['-100%', '-20%', '4%'])
  const img1y = useTransform(scrollY, [100, 200, 700], ['200%', '100%', '-50%'])
  const x1 = useSpring(img1x, { stiffness: 50, damping: 15 })
  const y1 = useSpring(img1y, { stiffness: 50, damping: 15 })

  const img2x = useTransform(scrollY, [100, 300, 700], ['-100%', '-60%', '12%'])
  const img2y = useTransform(scrollY, [100, 300, 700], ['200%', '100%', '70%'])
  const x2 = useSpring(img2x, { stiffness: 50, damping: 15 })
  const y2 = useSpring(img2y, { stiffness: 50, damping: 15 })

  const img3x = useTransform(scrollY, [150, 325, 800], ['150%', '70%', '67%'])
  const img3y = useTransform(scrollY, [150, 325, 800], ['60%', '40%', '100%'])
  const x3 = useSpring(img3x, { stiffness: 60, damping: 30 })
  const y3 = useSpring(img3y, { stiffness: 60, damping: 30 })

  const img4x = useTransform(scrollY, [150, 325, 800], ['150%', '70%', '67%'])
  const img4y = useTransform(scrollY, [150, 325, 800], ['60%', '40%', '0%'])
  const x4 = useSpring(img4x, { stiffness: 50, damping: 15 })
  const y4 = useSpring(img4y, { stiffness: 50, damping: 15 })

  const textRef = useRef(null);
  const atmosRef = useRef(null);
  const carouselRef = useRef(null);

  const { scrollYProgress: cardScroll1 } = useScroll( { target: atmosRef, offset: [ 'start end', 'end start'] });
  const {scrollYProgress: carouselScroll} = useScroll({ target: carouselRef, offset: [ 'start end', 'end start']})

  const img5x = useTransform(carouselScroll, [0, 1], ['-100%', '100%']);
  const x5 = useSpring(img5x, { stiffness: 50, damping: 15 });

  const card1Scale = useTransform(cardScroll1, [0.5, 1], ['100%', '40%'])
  const card2Y = useTransform(cardScroll1, [0, 1], ["200px", "1200px"]);

  return (
    <div className="h-[400vh] w-full relative">
      <div className="fixed top-2 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="relative h-[300vh] w-full">
        <section className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-start">
          <motion.div
            className="w-full h-full relative overflow-hidden rounded-2xl z-0 flex justify-center items-center bg-white"          >
            <motion.div className="inset-0 overflow-hidden rounded-xl" style={{ y, width, height }}>
              <motion.video
                src="site-vid.mp4"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                loop
                playsInline
                muted
                autoPlay
            />
              <motion.div className="absolute inset-0 bg-black opacity-20 pointer-events-none z-10" />
              <motion.div
                style={{ scale: textScale, opacity: textOpacity }}
                className="fixed bottom-[-100] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none z-20 border-b-2 border-white"
              >
                <motion.h1 className="text-white text-[19em] leading-none"
                  initial={{
                    y: 300
                  }}
                  animate={{
                    y: 0
                  }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    ease: 'easeInOut'
                  }}
                >Go Further</motion.h1>
              </motion.div>
            </motion.div>

              <motion.div className="absolute z-10" style={{ left: x1, y: y1 }}>
                <img className="rounded-xl w-[28vw]" src="/image1.jpg" />
              </motion.div>
              <motion.div className="absolute z-10" style={{ left: x2, y: y2 }}>
                <img className="rounded-xl w-[20vw]" src="/image2.jpg" />
              </motion.div>
              <motion.div className="absolute z-10" style={{ left: x3, y: y3 }}>
                <img className="rounded-xl w-[28vw]" src="/image3.jpg" />
              </motion.div>
              <motion.div className="absolute z-10" style={{ left: x4, y: y4 }}>
                <img className="rounded-xl w-[20vw] object-cover" src="/image4.jpg" />
              </motion.div>
          </motion.div>
        </section>
    </div>

    {/* spacer */}
    <div className="h-[15vh]">

    </div>

      <div className="h-[60vh] w-full bg-white" ref={textRef}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="text-center text-7xl tracking-normal leading-[1] mt-40"
        >
          {["All-electric,", "aerodynamic", "and adventure-ready."].map((line, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    staggerChildren: 0.02, 
                  },
                },
              }}
            >
              {line.split("").map((letter, j) => (
                <motion.span
                  key={j}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: 5 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative h-[300vh]" ref={atmosRef}>
        <section className="relative">
          <div className="h-[100vh] sticky top-0">
            <div className={`flex justify-center`}>
            <h1
              className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] xl:text-[15rem]">
              Meet the AE.1
            </h1>
            </div>
          </div>

          <div className="h-[200vh] relative">
            <div className="grid grid-cols-[0.5fr_1fr_0.5fr] gap-4 sticky top-50">
              <div className="flex flex-col gap-2 flex-wrap max-w-[350px] justify-self-end self-center">
                <h3 className="font-bold">
                  Unique by design. Connected by adventure.
                </h3>
                <span className="text-xl text-gray-400">
                  Go further, stay longer and share it with those who matter most.
                </span>
              </div>

              <motion.div className="max-h-[700px] max-w-[700px] relative text-white rounded-lg" style={{scale: card1Scale}}>
                <span className="absolute top-[45%] left-[40%] text-4xl font-weight-400">
                  Atmos<sup className="font-normal text-[1rem]">AE.1</sup>
                </span>
                <img
                  src="/panos1.jpg"
                  alt="image"
                  className="object-contain rounded-lg"
                />
              </motion.div>
            </div>


            <motion.div 
              style={{ y: card2Y, zIndex: 20 }}
              className="grid grid-cols-[0.5fr_1fr_0.5fr] gap-4 mt-[-50px] absolute top-0 w-full">
              <div></div>
              <div className="max-h-[700px] max-w-[700px] relative text-white rounded-lg">
                <span className="absolute top-[45%] left-[40%] text-4xl font-weight-400">
                  Atmos<sup className="font-normal text-[1rem]">AE.1</sup>
                </span>
                <img
                  src="/panos2.jpg"
                  alt="image"
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 flex-wrap max-w-[350px] self-center">
                <h3 className="font-bold">
                  For journeys near and far.
                </h3>
                <span className="text-xl text-gray-400">
                  No matter where you're going, every Lightship is designed to make travel feel easier, and the destination even better.
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="h-[120vh] pt-[70vh] flex flex-col items-center">
          <h1 className="text-center text-7xl tracking-normal leading-[1]">Smarter Systems<br/> Smoother Journeys.</h1>
          <motion.div 
            initial="rest"
            whileHover="hover"
            animate="rest"
            className=" mt-12 p-3 px-4 rounded-2xl bg-gray-100 flex items-center justify-center cursor-pointer relative overflow-hidden"
            variants={{
              hover: {
                background: 'hsl(0, 86%, 61%)'
              }
            }}>
            <motion.span
              variants={{
                 hover: {
                  y: '-150%',
                  opacity: 0
                 },
                 rest: {
                  y: '0%',
                  opacity: 1,
                 }
              }}
              transition={{duration: 0.2}}
            >Technology</motion.span>

            <motion.span
              className="absolute self-center text-white"
              variants={{
                rest: { y: "150%", opacity: 0 },
                hover: { y: "0%", opacity: 1 }
              }}
              transition={{ duration: 0.2 }}
            >
              Technology
            </motion.span>
          </motion.div>
        </section>

        <section className="h-[100vh] flex flex-col items-center gap-4" ref={carouselRef}>
          <motion.div 
            style={{
              x: x5
            }}
            className="rounded-box grid grid-cols-3 gap-2">
              <img src="image1.jpg" alt="" className="rounded-xl"/>
              <img src="image2.jpg" alt="" className="rounded-xl"/>
              <img src="image3.jpg" alt="" className="rounded-xl"/>
          </motion.div>
            <motion.div className="pt-10"
            >
              <motion.button className="relative overflow-hidden px-6 py-3 rounded-xl font-bold cursor-pointer"
                whileHover="hover"
                drag
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                dragElastic={1}
                dragMomentum={true}
                dragTransition={{ bounceStiffness: 50, bounceDamping: 15 }}
                variants={{
                  hover: {
                    scale: 1.1
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gray-300"
                  variants={{
                    hover: { backgroundColor: '#7bf1a8' }
                  }}
                  transition={{
                    duration: 1, ease: 'easeInOut',
                    type: 'tween'
                  }}
                >
                </motion.div>
                <span className="relative z-10 text-black text-2xl font-light">Order Your RV Now!</span>
              </motion.button>
            </motion.div>
        </section>
      </div>
    </div>
  );
}
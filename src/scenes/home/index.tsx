import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import useMediaQuery from "../hooks/useMediaQuery";
import wt from "./src/assets/wundertrading2.webp";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <div className="relative h-screen">
      <h1 className="relative flex items-center justify-center text-6xl font-bold text-center text-white uppercase top-3 md:top-16 md:text-7xl">
        Crypto Trading Flow
      </h1>
      <div className="flex flex-col items-center justify-center md:mt-24 mt-7">
        <h2 className="mb-3 text-2xl font-bold text-white md:text-4xl">
          Automated Trading Bots
        </h2>
        <h3 className="mt-3 text-lg text-white bg-black md:text-3xl md:bg-transparent bg-opacity-35 ">
          <TypeAnimation
            sequence={[
              "Start trading without having to trade",
              1000,
              "Start making money work for you",
              1000,
              "Start your retirement plan",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h3>
      </div>

      <div className="absolute top-[60%] left-7 md:left-52 text-white">
        <h6 className="text-sm text-white md:text-base">Supports</h6>
        <div className="flex items-center mt-3 text-white">
          <a
            href="https://accounts.binance.com/register?ref=DWHURPU7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Icon
              icon="simple-icons:binance"
              width={isAboveMediumScreens ? "2.5em" : "2em"}
              className="pl-2 mr-6"
            />
            <p className="hidden md:flex">Binance</p>
          </a>
        </div>
        <div className="flex items-center mt-3 text-white">
          <a
            href="https://wundertrading.com/en/trader/register?ref=wbt82e47df7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={wt}
              className={isAboveMediumScreens ? "w-12" : "w-10"}
              alt="WunderTrading"
            />
            <span className="flex items-center justify-center">
              <p className="hidden ml-4 md:flex">WunderTrading</p>
            </span>
          </a>
        </div>
      </div>

      <div className="absolute top-[60%] right-7 md:right-64 text-white">
        {isAboveMediumScreens ? (
          <h2 className="">Supported Currencies</h2>
        ) : (
          <div className="text-xs">
            <h2>Supported</h2>
            <h2>Currencies</h2>
          </div>
        )}
        <Icon
          icon="bxl:bitcoin"
          width={isAboveMediumScreens ? "4em" : "3em"}
          height={isAboveMediumScreens ? "4em" : "3em"}
          className="float-right mt-3"
        />
      </div>

      <div className="absolute bottom-0 w-full text-center transform -translate-x-1/2 mb-7 md:mb-10 left-1/2">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-white md:text-3xl">
            Join the Community
          </h1>
          <a
            href="https://discord.gg/fxNe2x8SCD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Icon
              icon="bi:discord"
              width="3em"
              height="3em"
              className="p-0 mt-2 text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { NavLink, Outlet } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowLeftIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import useMediaQuery from "../hooks/useMediaQuery";

import logo from "./assets/CTF_Logo.png";

export default function Root() {
  const [open, setOpen] = useState(false);

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <div className="flex h-screen overflow-hidden ">
      {isAboveMediumScreens ? (
        /* Vertical Menu */
        <div
          className={`min-h-screen transition-width duration-500  text-white p-7 shadow-2xl shadow-inherit pt-7 flex flex-col fixed ${open ? "w-1/6" : "w-[7%]"} relative`}
        >
          {/* Menu Links with Hero Icons */}
          <ArrowLeftIcon
            className={`w-9 rounded-full absolute shadow-xl border border-black text-black bg-white -right-4 p-1 cursor-pointer duration-700 z-40 ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className={`flex-col ${open && "flex"}`}>
            <NavLink
              className={`py-4 px-4 inline-flex  items-center transition-colors duration-300 hover:bg-light-white mb-2 ${open ? "rounded-3xl" : "rounded-full"} `}
              to="/"
            >
              <span>
                <HomeIcon
                  className={`block float-left duration-300 cursor-pointer ${open ? "w-5 mr-2" : "w-7"} `}
                />
              </span>
              <h1 className={`origin-left duration-300  ${!open && "hidden"}`}>
                Home
              </h1>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return `py-4 px-4 inline-flex items-center transition-colors duration-300 hover:bg-light-white mb-2 ${open ? "rounded-3xl " : "rounded-full"} ${
                  isActive ? "bg-light-white" : "bg-none"
                }`;
              }}
              to="results"
            >
              <span>
                <ChartBarIcon
                  className={`block float-left cursor-pointer duration-300 ${open ? "w-5 mr-2" : "w-7"} `}
                />
              </span>
              <h1 className={`origin-left duration-300 ${!open && "hidden"}`}>
                Results
              </h1>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return `py-4 px-4 inline-flex items-center transition-colors duration-300 hover:bg-light-white mb-2 ${open ? "rounded-3xl " : "rounded-full"} ${
                  isActive ? "bg-light-white" : "bg-none"
                }`;
              }}
              to="HowToInstall"
            >
              <span>
                <DocumentTextIcon
                  className={`block float-left cursor-pointer duration-300 ${open ? "w-5 mr-2" : "w-7"} `}
                />
              </span>
              <h1 className={`origin-left duration-300 ${!open && "hidden"}`}>
                How To Install
              </h1>
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                return `py-4 px-4 inline-flex items-center transition-colors duration-300 hover:bg-light-white mb-2 ${open ? "rounded-3xl " : "rounded-full"} ${
                  isActive ? "bg-light-white" : "bg-none"
                }`;
              }}
              to="Support"
            >
              <span>
                <InformationCircleIcon
                  className={`block float-left cursor-pointer  duration-300 ${open ? "w-5 mr-2" : "w-7"} `}
                />
              </span>
              <h1 className={`origin-left duration-300 ${!open && "hidden"}`}>
                FAQ
              </h1>
            </NavLink>
            <a
              href="https://discord.gg/fxNe2x8SCD"
              target="_blank"
              rel="noopener noreferrer"
              className={`py-4 px-4 inline-flex  cursor-pointer  transition-colors duration-300 hover:bg-light-white mb-2 ${open ? "rounded-3xl " : "rounded-full"} `}
            >
              <span>
                <Icon
                  icon="logos:discord-icon"
                  width="1.6em"
                  height="1.6em"
                  className={`block float-left cursor-pointer duration-300 ${open ? "w-5 mr-2" : "w-7"} `}
                />
              </span>
              <h1
                className={`origin-left duration-300 text-discord ${!open && "hidden"}`}
              >
                Discord
              </h1>
            </a>
          </div>
          {/* Logo at the bottom */}
          <div
            className={`mt-auto duration-500 overflow-hidden ${!open && "rotate-[360deg]"}`}
          >
            <NavLink to="/">
              <img
                alt="logo"
                className="w-full hover:animate-spin"
                src={logo}
              />
            </NavLink>
          </div>
        </div>
      ) : (
        <div>
          {!isAboveMediumScreens && (
            <div
              className={`fixed left-0 top-0 z-40 flex h-full w-[50%] ${open ? " bg-white" : "0"} flex-col space-y-7 self-center overflow-y-auto text-center drop-shadow-xl transition-width duration-500`}
            >
              {/* CLOSE ICON */}
              <button
                onClick={() => setOpen(!open)}
                className="p-1 ml-5 bg-white rounded-full cursor-pointer mt-7 w-fit "
              >
                {open ? (
                  <XMarkIcon className="text-black border border-black rounded-full h-7 w-7" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-black" />
                )}
              </button>

              {/* MENU ITEMS */}
              <NavLink
                to="/"
                className={`text-lg  uppercase tracking-wider  ${open ? "md:text-xl" : "hidden"}`}
                onClick={() => setOpen(!open)}
              >
                Home
              </NavLink>

              <NavLink
                to="results"
                className={`text-lg  uppercase tracking-wider  ${open ? "md:text-xl" : "hidden"}`}
                onClick={() => setOpen(!open)}
              >
                Results
              </NavLink>

              <NavLink
                to="HowToInstall"
                className={`text-lg  uppercase tracking-wider  ${open ? "md:text-xl" : "hidden"}`}
                onClick={() => setOpen(!open)}
              >
                How To Install
              </NavLink>

              <a
                href="https://www.binance.com/en/support/faq/how-to-transfer-funds-to-the-futures-wallet-360033773532"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg  uppercase tracking-wider  ${open ? "md:text-xl" : "hidden"}`}
              >
                Discord
              </a>

              <NavLink
                to="Support"
                className={`text-lg  uppercase tracking-wider  ${open ? "md:text-xl" : "hidden"}`}
                onClick={() => setOpen(!open)}
              >
                FAQ
              </NavLink>
            </div>
          )}
        </div>
      )}
      {/* Main Content */}
      <main className="w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

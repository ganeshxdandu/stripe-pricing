import { RiArrowDropDownLine, RiArrowRightSLine } from "@remixicon/react";
import Logo from "./assets/stripe-logo.png";
import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const LINKS = ["Products", "Solutions", "Developers", "Resources", "Pricing"];

  return (
    <header className="mt-4 flex items-center justify-center">
      <div
        className={`hover:shadow-nav group group container mx-auto h-full max-w-316 rounded-lg transition-all duration-300 hover:bg-white`}
      >
        <div className="nav-container mx-auto flex h-full max-w-270 items-center justify-between px-4 py-3">
          <div className="left flex items-center gap-5">
            <div className="logo transition-brightness w-20 duration-300 group-hover:brightness-0">
              <img src={Logo} alt="" />
            </div>
            <div className="menu-links group flex">
              {LINKS.map((item, idx) => {
                const isActive = activeLink === item;

                return (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveLink(item)}
                    onMouseLeave={() => setActiveLink(null)}
                    className={`text-body flex cursor-pointer items-center gap-px p-3 leading-none font-normal transition-colors duration-200 ${
                      !isActive && activeLink
                        ? "text-[#8898AA]"
                        : "text-[#0A2540]"
                    } `}
                  >
                    {item}
                    {item !== "Pricing" && (
                      <span>
                        <RiArrowDropDownLine size={16} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="right flex items-center gap-4">
            <button className="text-body text-heading cursor-pointer">
              Sign In
            </button>
            <button className="text-body bg-primary p-button transition-bg flex cursor-pointer items-center justify-center gap-px rounded-full leading-1 text-white duration-200 group-hover:bg-black hover:bg-neutral-700">
              <span>Contact Sales</span>
              <RiArrowRightSLine size={18} />
            </button>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setShowDropDown(true);
          }}
          onMouseLeave={() => {
            setShowDropDown(false);
          }}
          className={`drop-down w-full overflow-hidden rounded-b-lg bg-white ${(activeLink && activeLink !== "Pricing") || showDropDown ? "h-100 border-t border-neutral-200 opacity-100" : "h-0 border-0 border-neutral-200 opacity-0"} transition-all duration-500`}
        >
          Ganesh
        </div>
      </div>
    </header>
  );
};

export default Header;

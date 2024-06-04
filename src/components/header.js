import React from "react";

import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

import useWindowDimensions from "../hooks/useWindowDimensions";

import "./../styles/header.scss";

const Header = () => {
  const { screenWidth } = useWindowDimensions();

  return (
    <>
      <div className="header-background"></div>

      <header className="header-container">
        <div className="header__cta">
          <a
            href="https://www.github.com/LoneHippie"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"static/github.svg"} alt="github" />
          </a>
          <h1 className="header--logo">
            <a
              href="https://www.github.com/LoneHippie"
              target="_blank"
              rel="noreferrer"
            >
              LONE&nbsp;HIPPIE
            </a>
          </h1>
        </div>

        {screenWidth > 750 ? <DesktopNav /> : <MobileNav />}
      </header>
    </>
  );
};

export default Header;

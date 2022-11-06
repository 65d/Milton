import React from "react";
import "./style.css";

// import "../../App.css";
let imgs = [
    'https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491addf265a8e_social-03.svg',
    'https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491834e265b00_social-07.svg',
    'https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491586a265ad4_social-18.svg',
    'https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e4914f3a265ae5_social-09.svg',
    'https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e4912fad265ab9_social-30.svg',
  ];
function Nav() {
    return (
        <div className="nav">
            <div className="logo">
                Milton
            </div>
            <hr className="h1" />
            <div className="text3">
                Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.
            </div>
            <hr className="h1" />
            <nav class="navigation"><a href="/" class="nav-link">home</a><a href="/about" class="nav-link">about</a><a href="/contact" class="nav-link">contact</a><div class="grey-rule w-hidden-small w-hidden-tiny"></div></nav>
            <hr className="h1" />
            <div class="social-link-group">
            <a href="#" class="social-icon-link w-inline-block">
                    <img src={imgs[0]} width={20} />
                </a>
                <a href="#" class="social-icon-link w-inline-block">
                    <img src={imgs[1]} width={20} />
                </a>
                <a href="#" class="social-icon-link w-inline-block">
                    <img src={imgs[2]} width={20} />
                </a>
                <a href="#" class="social-icon-link w-inline-block">
                    <img src={imgs[3]} width={20} />
                </a>
                <a href="#" class="social-icon-link w-inline-block">
                    <img src={imgs[4]} width={20} />
                </a>
            </div>
            <p className="pb">
                BUILT WITH WEBFLOW
            </p>
        </div>
    )
}

export default Nav;
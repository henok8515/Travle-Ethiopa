import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div>
      <header>
        <div classNameName="overlay">
          <h1>Vist Ethiopa</h1>
          <h3>Reasons for Choosing US</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum quis, odio veniam itaque ullam debitis qui magnam
            consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis
            qui magnam consequatur ab.
          </p>
          <br />
          <button>READ MORE</button>
        </div>
      </header>
      <div className="card-container">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <img
                src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                alt="rover"
              />
            </div>
            <div className="card-body">
              <span className="tag tag-teal">Technology</span>
              <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
              <p>An exploration into the truck's polarising design</p>
              <div className="user"></div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img
                src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
                alt="ballons"
              />
            </div>
            <div className="card-body">
              <span className="tag tag-purple">Popular</span>
              <h4>How to Keep Going When You Don’t Know What’s Next</h4>
              <p>
                The future can be scary, but there are ways to deal with that
                fear.
              </p>
              <div className="user"></div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img
                src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                alt="city"
              />
            </div>
            <div className="card-body">
              <span className="tag tag-purple">Popular</span>
              <h4>How to Keep Going When You Don’t Know What’s Next</h4>
              <p>
                The future can be scary, but there are ways to deal with that
                fear.
              </p>
              <div className="user"></div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img
                src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                alt="city"
              />
            </div>
            <div className="card-body">
              <span className="tag tag-pink">Design</span>
              <h4>10 Rules of Dashboard Design</h4>
              <p>Dashboard Design Guidelines</p>
              <div className="user"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

import React from "react";
import "./Cards.css";
import tvLogo from "../../assets/icon/tv-logo.png";
import baseBall from "../../assets/icon/baseball-logo.png";
import tradeLogo from "../../assets/icon/trade-logo.png";
import cardLogo from "../../assets/icon/card-logo.png";

function Cards() {
  return (
    <>
      <div className="cards container-fluid p-0">
        <div className="row g-2 m-0">
          <div className="col-12 col-md-6">
            <div className="border-0 card card1 d-flex flex-column justify-content-end">
              <div className="descriptions container text-center text-dark mb-5">
                <div className="w-75 mx-auto">
                  <p>
                    Apple Worldwide Developers Conference. Join us online june
                    9-13.
                  </p>
                </div>

                <div className="links">
                  <button
                    className="btn btn-primary rounded-pill px-3"
                    type="button"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="border-0 card card2 d-flex flex-column justify-content-between">
              <div className="descriptions container text-center text-dark mt-5">
                <h1>MacBook Air</h1>
                <div className="mx-auto w-50">
                  <p>Sky blue color. Sky high performance with M4.</p>
                </div>
                <div className="links">
                  <button
                    className="btn btn-primary rounded-pill px-3"
                    type="button"
                  >
                    Learn more
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-pill px-3"
                  >
                    Buy
                  </button>
                </div>
              </div>
              <div className="text-center mb-4">
                <p className="intel">Built for Apple Intelligence</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="border-0 card card3 d-flex flex-column justify-content-between">
              <div className="descriptions container text-center text-dark mt-5">
                <h1>
                  iPad<span>Air</span>
                </h1>
                <h6>New supercharged by the M3 chip.</h6>
                <div className="links">
                  <button
                    className="btn btn-primary rounded-pill px-3"
                    type="button"
                  >
                    Learn more
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-pill px-3"
                  >
                    Buy
                  </button>
                </div>
              </div>
              <div className="text-center mb-4">
                <p className="intel">Built for Apple Intelligence</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="border-0 card card4">
              <div className="descriptions container text-center text-white mt-5 w-75">
                <div className="tv-logo w-75 mx-auto">
                  <img className="img-fluid w-25" src={tvLogo} alt="TV Logo" />
                </div>
                <div className="baseball-logo my-3">
                  <img
                    className="img-fluid"
                    src={baseBall}
                    alt="Baseball Logo"
                  />
                </div>
                <div className="w-75 mx-auto">
                  <p>
                    Home runs. Diving catches. Baseball returns. Live this
                    Friday.
                  </p>
                </div>
                <div className="links">
                  <button className="btn btn-light rounded-pill" type="button">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="border-0 card card5">
              <div className="descriptions container text-center text-dark mt-5 w-75">
                <div className="tv-logo w-75 mx-auto">
                  <img
                    className="img-fluid w-50"
                    src={tradeLogo}
                    alt="TV Logo"
                  />
                </div>
                <div className="w-75 mx-auto">
                  <p>
                    Home runs. Diving catches. Baseball returns. Live this
                    Friday.
                  </p>
                </div>
                <div className="links">
                  <button
                    className="btn btn-primary rounded-pill"
                    type="button"
                  >
                    Get your estimate
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="border-0 card card6">
              <div className="descriptions container text-center text-dark mt-5 w-75">
                <div className="tv-logo w-50 mx-auto">
                  <img
                    className="img-fluid w-50"
                    src={cardLogo}
                    alt="TV Logo"
                  />
                </div>
                <div className="w-75 mx-auto">
                  <p>
                    Home runs. Diving catches. Baseball returns. Live this
                    Friday.
                  </p>
                </div>
                <div className="links">
                  <button
                    className="btn btn-primary rounded-pill"
                    type="button"
                  >
                    Learn more
                  </button>

                  <button
                    className="btn btn-outline-primary rounded-pill"
                    type="button"
                  >
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

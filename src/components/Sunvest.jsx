import React from "react";
import "./Sunvest.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import BodyFlex from "../components/common/BodyFlex";
import { ReactComponent as Bitcoin } from "../components/assets/bitcoin.svg";
import { ReactComponent as Ball } from "../components/assets/ball.svg";
import { ReactComponent as Down } from "../components/assets/downarrow.svg";
import { ReactComponent as Open } from "../components/assets/open-source.svg";


function Sunvest() {
  return (
    <div>
      <div>
        <div className="bg-env">
          <Header />
          <div className="group-side">
            <BodyFlex />
          </div>
        </div>
        <div className="center-text">
          <Bitcoin className="bit"/>
          <div>
            <h2>SunVest</h2>
            <p>
              SunVest is a digital crowdfunding web and mobile platform that
              provides distributed finance for commercial and industrial (C&I)
              scale projects development and ownership
            </p>
            <p>Learn more</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <Open />
                <h5 className="card-title">Sign Up</h5>
                <p className="card-text">
                  Sign up with your details choose a project from the market
                  place, select the number of units you would like to find and
                  own a part of them proceed to make cryptocurrency or normal
                  currency. You can invest from anywhere in the world
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <Ball />
                <h5 className="card-title">Power a business</h5>
                <p className="card-text">
                  Your investments goes into developing solar power
                  infrastructure for malls, small business, schools hospital, as
                  station and industries.beneficiary development phases on a
                  personalised dashboard via or web and mobile platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <Down />
                <h5 className="card-title">Earn a Profit</h5>
                <p className="card-text">
                  You earn a guaranteed return on investment when you invest on
                  SunVest. Upon solar project installation and commissioning the
                  project beneficiary development phases on a personalised
                  dashboard via or web and mobile platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div-center">
          <h2>
            Let's Explore the Investments that <br /> are top-sellings
          </h2>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Commercial Projects
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Industrial Project
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Capital Projects
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="set-div">
        <h3>Working with us are the path to success</h3>
        <p>
          Get updated and news on all the new investments for free and enjoy our
          platform <br />
          with the support of our professional onboarding team.{" "}
        </p>
        <div className="flex-form">
          <input
            type="email"
            class="form-control"
            id="validationFormCheck2"
            placeholder="name@example.com"
            required
          />
          <button className="btn btn-primary" type="submit" disabled>
            Sign Up
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sunvest;

import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import bg from "../assets/image.avif";
import verge from "../assets/the-verge_gdh1dw.png";
import pcmag from "../assets/wirecutter_blf8c5.png";
import pcmag2 from "../assets/pc-mag_ak9mna.png";
import pcmag3 from "../assets/techradar_qt0nt6.png";
import pcmag4 from "../assets/img.avif";
import logo2 from "../assets/44245fc51c3e2ab05ee6d92c13e2e08a.png";
import ma1 from "../assets/box.avif";
import ma2 from "../assets/boxi.avif";
import ma3 from "../assets/boxita.avif";
// import ma4 from "../assets/boxitato.avif";

const Home = () => {
  return (
    <div>
      {/* "Hero" */}
      <div
        style={{
          width: "100%",
          height: `calc(100vh - 80px)`,
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <div
          style={{
            width: "95%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "35%",
              paddingTop: "75px",
              fontWeight: "600",
              fontSize: "30px",
              paddingLeft: "60px",
              fontFamily: "Helvetica, serif",
              marginBottom: "40px",
            }}
          >
            <h1>
              Organize your work and <br />
              life, finally.
            </h1>
            <p
              style={{
                color: "rgba(37, 34, 30, 0.66)",
                fontWeight: "475",
                fontSize: "20.5px",
                marginTop: "-10px",
              }}
            >
              Simplify life for both you and your team. The world’s #1 task
              manager and to-do list app.
            </p>
            <p
              style={{
                fontSize: "15.5px",
                fontWeight: "600",
                color: "RGBA(37, 34, 30, 0.66)",
                marginTop: "-10px",
              }}
            >
              374K+ ★★★★★ reviews from
            </p>
            <button
              style={{
                backgroundColor: "RGB(227, 68, 50)",
                color: "white",
                border: "none",
                padding: "22px 17px",
                borderRadius: "15px",
                fontSize: "18.5px",
                fontWeight: "600",
                boxShadow: "#FFB8A0 0px 5px",
                marginTop: "15px",
              }}
            >
              Start for free
            </button>
          </div>
          <div
            style={{
              width: "50%",
              backgroundColor: "rgb(254,216,201)",
              height: "70%",
              position: "relative",
              borderRadius: "30px",
            }}
          >
            <img
              style={{ height: "100%", width: "100%" }}
              src={pcmag4}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* End of hero */}
      <div
        style={{
          width: "100%",
          height: "67vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "90%",
            backgroundImage: `URL(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "22%",
              height: "70%",
              fontSize: "19.90px",
              marginLeft: "30px",
              // fontStyle: "italic",
            }}
          >
            <blockquote style={{ marginTop: "100px" }}>
              “Simple, straightforward, and super powerful”
            </blockquote>
            <img
              style={{ height: "20px", marginTop: "30px", marginLeft: "60px" }}
              src={verge}
              alt=""
            />
          </div>
          <div
            style={{
              width: "1px",
              height: "170px",
              backgroundColor: "lightgray",
              marginTop: "50px",
            }}
          />
          <div
            style={{
              width: "22%",
              height: "70%",
              fontSize: "19.90px",
            }}
          >
            <blockquote style={{ marginTop: "100px" }}>
              “Simply a joy to use”
            </blockquote>
            <img
              style={{ height: "20px", marginTop: "40px", marginLeft: "60px" }}
              src={pcmag}
              alt=""
            />
          </div>
          <div
            style={{
              width: "1px",
              height: "170px",
              backgroundColor: "lightgray",
              marginTop: "40px",
            }}
          />
          <div
            style={{
              width: "22%",
              height: "70%",
              fontSize: "19.90px",
            }}
          >
            <blockquote style={{ marginTop: "100px" }}>
              “The best to-do list app <br />
              <span style={{ marginLeft: "50px" }}>on the market”</span>
            </blockquote>
            <img
              style={{ height: "40px", marginTop: "20px", marginLeft: "120px" }}
              src={pcmag2}
              alt=""
            />
          </div>
          <div
            style={{
              width: "1px",
              height: "170px",
              backgroundColor: "lightgray",
              marginTop: "50px",
            }}
          />

          <div
            style={{
              width: "25%",
              height: "70%",
              fontSize: "19.90px",
            }}
          >
            <blockquote style={{ marginTop: "100px" }}>
              “Nothing short of stellar”
            </blockquote>
            <img
              style={{ height: "20px", marginTop: "40px", marginLeft: "60px" }}
              src={pcmag3}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* HERO THREE */}
      <div
        style={{
          width: "98%",
          height: "300vh",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* HERO THREE WRAPPER */}
        <div
          style={{
            width: "95%",
            height: "100%",
            display: "flex",
          }}
        >
          {/* HERO THREE LEFT */}
          <div
            style={{
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  color: "#CD8A1E",
                }}
              >
                Clear your mind
              </p>
              <h1
                style={{
                  fontSize: "40px",
                  width: "80%",
                }}
              >
                The fastest way to get tasks out of your head.
              </h1>
              <p
                style={{
                  fontSize: "22px",
                  marginTop: "-5px",
                  width: "80%",
                  color: "black",
                  lineHeight: "35px",
                }}
              >
                Type just about anything into the task field and Todoist’s
                one-of-its-kind natural language recognition will instantly fill
                your to-do list.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  color: "rgb(73,125,126)",
                }}
              >
                Focus on what’s important
              </p>
              <h1
                style={{
                  fontSize: "40px",
                  width: "80%",
                  marginTop: "-0px",
                }}
              >
                Reach that mental clarity you’ve been longing for.
              </h1>
              <p
                style={{
                  fontSize: "22px",
                  marginTop: "-5px",
                  width: "80%",
                  color: "black",
                  lineHeight: "35px",
                }}
              >
                Your tasks are automatically sorted into Today, Upcoming, and
                custom filter views to help you prioritize your most important
                work.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  color: "rgb(86,130,80)",
                }}
              >
                Organize your teamwork, too
              </p>
              <h1
                style={{
                  fontSize: "40px",
                  width: "80%",
                }}
              >
                Where all your tasks can finally coexist.
              </h1>
              <p
                style={{
                  fontSize: "22px",
                  marginTop: "-5px",
                  width: "80%",
                  color: "black",
                  lineHeight: "35px",
                }}
              >
                Give your team a shared space to collaborate and stay on top of
                it all – alongside but separate from your personal tasks and
                projects.
              </p>
              <p
                style={{
                  color: "rgb(15, 102, 174)",
                  fontSize: "17px",
                  fontWeight: "475",
                  marginTop: "-5px",
                }}
              >
                Learn more about teams {">"}
              </p>
            </div>
          </div>
          {/* HERO THREE RIGHT */}
          <div
            style={{
              width: "50%",
              height: "90vh",
              backgroundColor: "pink",
              position: "sticky",
              top: "70px",
              border: "1px solid silver",
              borderRadius: "30px",
              backgroundImage: `url(${logo2})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div style={{ width: "95%", height: "80vh", display: "flex" }}>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "35px",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                color: "rgb(207,53,32)",
                fontSize: "17px",
                marginBottom: "-10px",
              }}
            >
              In it for the long haul
            </p>
            <h1
              style={{
                fontSize: "40px",
                width: "80%",
              }}
            >
              A task manager you can trust for life
            </h1>
            <p
              style={{
                fontSize: "22px",
                marginTop: "-5px",
                width: "80%",
                color: "black",
                lineHeight: "35px",
              }}
            >
              We’ve been building Todoist for 17 years and 220 days. Rest
              assured that we’ll never sell out to the highest bidder.
            </p>
            <p style={{ color: "rgb(15, 102, 174)", fontSize: "17px" }}>
              Read about our long-term mission
            </p>
          </div>
          <div
            style={{
              width: "50%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "60px",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "78px",
            }}
          >
            <marquee>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    height: "40vh",
                    width: "40%",
                    display: "block",
                  }}
                >
                  <img style={{ width: "100%", height: "90%" }} src={ma1}></img>
                  <div
                    style={{
                      height: "50%",
                      width: "60%",
                      textAlign: "center",
                      marginLeft: "35px",
                    }}
                  >
                    30+ million
                  </div>
                </div>
                <div
                  style={{
                    height: "40vh",
                    width: "40%",
                    display: "block",
                  }}
                >
                  <img style={{ width: "100%", height: "90%" }} src={ma2}></img>
                  <div
                    style={{
                      height: "50%",
                      width: "60%",
                      textAlign: "center",
                      marginLeft: "35px",
                    }}
                  >
                    1+ million
                  </div>
                </div>
                <div
                  style={{
                    height: "40vh",
                    width: "40%",
                    display: "block",
                  }}
                >
                  <img style={{ width: "100%", height: "90%" }} src={ma3}></img>
                  <div
                    style={{
                      height: "50%",
                      width: "60%",
                      textAlign: "center",
                      marginLeft: "35px",
                    }}
                  >
                    15+ million
                  </div>
                </div>
                <div
                  style={{
                    height: "40vh",
                    width: "40%",
                    display: "block",
                  }}
                >
                  {/* <img style={{ width: "100%", height: "90%" }} src={two}></img> */}
                  <div
                    style={{
                      height: "50%",
                      width: "60%",
                      textAlign: "center",
                      marginLeft: "35px",
                    }}
                  >
                    15+ million
                  </div>
                </div>
              </div>
            </marquee>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          flexDirection: "column",
          color: "black",
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            width: "70%",
            textAlign: "center",
          }}
        >
          Gain calmness and clarity with the world’s most beloved productivity
          app
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "black",
          }}
        >
          374000+ ★★★★★ reviews on Google Play and App Store
        </p>
        <div
          style={{
            backgroundColor: "pink",
            border: "none",
            borderRadius: "15px",
            width: "140px",
            height: "70px",
            cursor: "pointer",
          }}
        >
          <button
            style={{
              backgroundColor: "#CF3520",
              border: "none",
              borderRadius: "15px",
              fontSize: "18px",
              width: "140px",
              height: "65px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              boxShadow: "0px 0px 10px 0px pink solid",
            }}
          >
            Start for free
          </button>
        </div>
        <p
          style={{
            fontSize: "18px",
            color: "black",
          }}
        >
          Download apps
        </p>
      </div>
    </div>
  );
};

export default Home;

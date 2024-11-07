import heroimage from "../assets/https___todoist.com_static_features-teams_header-illustration.avif";
import logo2 from "../assets/https___todoist.com_static_product-ui_backgrounds_wave-one-red (1).avif";
import pix from "../assets/imagebhik.avif";
import pic from "../assets/https___todoist.com_static_apps-section_en_desktop (3).png";

const Features = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: `calc(100vh - 30px)`,
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          backgroundColor: "rgb(254,253,252)",
        }}
      >
        <div
          style={{
            width: "95%",
            height: "100%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "95%", height: "50vh", paddingTop: "80px" }}
              src={heroimage}
              alt=""
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "50vh",
              lineHeight: "10px",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "70px",
            }}
          >
            <h1
              style={{
                fontSize: "55px",
                // lineHeight: "64px",
                fontWeight: "600",
                marginTop: "70px",
                // marginLeft: "25%",
              }}
            >
              <s style={{ color: "COLOR(SRGB 0.570588 0.562745 0.552941)" }}>
                Overwhelmed
              </s>{" "}
              On top of it
            </h1>
            <p
              style={{
                lineHeight: "33px",
                // marginLeft: "25%",
                width: "48%",
                fontSize: "21px",
                fontWeight: "475",
                color: "rgba(37, 34, 30, 0.66)",
                // width: "70%",
              }}
            >
              Todoist makes it frictionless to get all your tasks out of your
              head{" "}
              <span style={{ textAlign: "center" }}>
                and organized in one trusted place.
              </span>
            </p>
            <button
              style={{
                marginTop: "50px",
                backgroundColor: "RGB(227, 68, 50)",
                color: "white",
                border: "none",
                padding: "22px 17px",
                borderRadius: "15px",
                fontSize: "18.5px",
                fontWeight: "600",
                boxShadow: "#FFB8A0 0px 5px",
                zIndex: "10",
              }}
            >
              Start for free
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "98%",
          minHeight: "00vh",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "200px",
        }}
      >
        {/* HERO THREE WRAPPER */}
        <div
          style={{
            width: "95%",
            height: "100%",
            display: "flex",
            // marginTop: "50px",
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
                marginTop: "120px",
              }}
            >
              <h2
                style={{
                  fontWeight: "600",
                  fontSize: "40px",
                  margin: "0px 0px 32px",
                  lineHeight: "49px",
                }}
              >
                Capture tasks at the speed of thought
              </h2>
              <p
                style={{
                  fontSize: "21px",
                  fontWeight: "475",
                  margin: "0px 0px 40px",
                  lineHeight: "33px ",
                  fontFamily: "sans-serif",
                }}
              >
                We’ve spent over a decade refining how people add tasks to
                Todoist. Our goal? To make a to-do list that feels like a
                natural extension of your mind..
              </p>
              <p
                style={{
                  width: "80%",
                  height: "20%",
                  marginTop: "-5px",
                  backgroundColor: "rgb(255,239,229)",
                  padding: "16px 24px",
                  fontSize: "20px",
                  borderRadius: "20px",
                  lineHeight: "32px",
                }}
              >
                <span style={{ fontWeight: "600" }}> Quick add</span> will
                quickly become your superpower. Capture and organize tasks the
                moment they come to you with easy-flowing, natural language.
              </p>
              <p
                style={{
                  width: "80%",
                  height: "5%",
                  marginTop: "-5px",
                  backgroundColor: "rgb(249,247,246)",
                  padding: "16px 24px",
                  fontSize: "20px",
                  borderRadius: "20px",
                  lineHeight: "32px",
                  fontWeight: "600",
                }}
              >
                Recurring due dates
              </p>
              <p
                style={{
                  width: "80%",
                  height: "5%",
                  marginTop: "-5px",
                  backgroundColor: "rgb(249,247,246)",
                  padding: "16px 24px",
                  fontSize: "20px",
                  borderRadius: "20px",
                  lineHeight: "32px",
                  fontWeight: "600",
                }}
              >
                80+ integration
              </p>
              <p
                style={{
                  width: "80%",
                  height: "5%",
                  marginTop: "-5px",
                  backgroundColor: "rgb(249,247,246)",
                  padding: "16px 24px",
                  fontSize: "20px",
                  borderRadius: "20px",
                  fontWeight: "600",
                  lineHeight: "32px",
                }}
              >
                Reminders
              </p>
            </div>
            <div
              style={{
                width: "100%",
                height: "90vh",
                backgroundColor: "white",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <blockquote
                style={{
                  fontSize: "22px",
                  // fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight: "40px",
                  fontFamily: "sans-serif",
                  marginRight: "100px",
                }}
              >
                “Todoist gives me the peace of mind knowing I am doing exactly
                what I need to do, exactly when I need to do it.”
              </blockquote>
              <div
                style={{
                  width: "50%",
                  height: "10%",
                  marginLeft: "30px",
                  // flexDirection: "column",
                  // backgroundColor: "yellow",
                  display: "flex",
                  // justifyContent: "space-between",
                  // alignItems: "center",
                  lineHeight: "16px",
                }}
              >
                <img
                  style={{
                    width: "15%",
                    backgroundColor: "red",
                    height: "70%",
                    borderRadius: "90px",
                    marginTop: "20px",
                  }}
                  src=""
                  alt=""
                />
                <div
                  style={{
                    flexDirection: "column",
                    // textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginBottom: "30px",
                    // backgroundColor: "green",
                    width: "100%",
                    marginLeft: "10px",
                    height: "100%",
                    // paddingBottom: "50px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      lineHeight: "24px",

                      marginLeft: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    Ashley W.
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "22px",
                      fontWeight: "400",
                      marginTop: "-30px",
                    }}
                  >
                    Head of Leadership & Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* HERO THREE RIGHT */}
          <div
            style={{
              width: "40%",
              backgroundImage: `url(${logo2})`,
              height: "70vh",
              position: "sticky",
              marginLeft: "100px",
              top: "70px",
              border: "1px solid silver",
              borderRadius: "30px",
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
          height: "100vh",
          // backgroundColor: "green",
          // flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "80%", height: "100%" }}>
          <img
            style={{ marginTop: "180px", width: "80%", marginLeft: "80px" }}
            src={pix}
            alt=""
          />
          <h3
            style={{
              textAlign: "center",
              width: "36%",
              height: "18% ",
              lineHeight: "49px",
              fontWeight: "700",
              fontSize: "38px",
              marginTop: "-5px",
              marginLeft: "300px",
            }}
          >
            In perfect sync across all your devices
          </h3>
          <p
            style={{
              fontWeight: "475",
              color: "rgba(37, 34, 30, 0.66)",
              width: "53%",
              textAlign: "center",
              marginLeft: "250px",
              marginTop: "-50px",
              fontSize: "21px",
              lineHeight: "33px ",
            }}
          >
            With 10+ apps and add-ons, you’ll be able to review your upcoming
            tasks – and jot down new ones – no matter where you happen to be.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          // backgroundColor: "gold",
          marginTop: "50px",
          flexDirection: "column",
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            width: "80%",
            height: "30%",
            // backgroundColor: "gray",
            display: "flex",
            // justifyContent: "space-between",
            gap: "8px",
            marginLeft: "180px",
          }}
        >
          <div
            style={{
              width: "8%",
              padding: "20px 24px",
              height: "17%",
              backgroundColor: "rgb(255, 245, 219)",
              borderRadius: "20px",
              textAlign: "center",
              // marginRight: "150px",
            }}
          >
            <label
              style={{
                fontWeight: "600",
                lineHeight: "21px",
                fontSize: "16px",
                // padding: "20px 24px",
              }}
            >
              Desktop
            </label>
          </div>
          <div
            style={{
              width: "8%",
              padding: "20px 24px",
              height: "17%",
              backgroundColor: "rgb(242, 239, 237)",
              borderRadius: "20px",
              textAlign: "center",
              // marginRight: "150px",
            }}
          >
            <label
              style={{
                fontWeight: "600",
                lineHeight: "21px",
                fontSize: "16px",
                // padding: "20px 24px",
              }}
            >
              Android
            </label>
          </div>
          <div
            style={{
              width: "4%",
              padding: "20px 24px",
              height: "17%",
              backgroundColor: "rgb(242, 239, 237)",
              borderRadius: "20px",
              textAlign: "center",
              // marginRight: "150px",
            }}
          >
            <label
              style={{
                fontWeight: "600",
                lineHeight: "21px",
                fontSize: "16px",
                // padding: "20px 24px",
              }}
            >
              iOS
            </label>
          </div>
          <div
            style={{
              width: "8%",
              padding: "20px 24px",
              height: "17%",
              backgroundColor: "rgb(242, 239, 237)",
              borderRadius: "20px",
              textAlign: "center",
              // marginRight: "150px",
            }}
          >
            <label
              style={{
                fontWeight: "600",
                lineHeight: "21px",
                fontSize: "16px",
                // padding: "20px 24px",
              }}
            >
              Wearables
            </label>
          </div>
          <div
            style={{
              width: "13%",
              padding: "20px 24px",
              height: "17%",
              backgroundColor: "rgb(242, 239, 237)",
              borderRadius: "20px",
              textAlign: "center",
              // marginRight: "150px",
            }}
          >
            <label
              style={{
                fontWeight: "600",
                lineHeight: "21px",
                fontSize: "16px",
                // padding: "20px 24px",
              }}
            >
              Browser Extensions
            </label>
          </div>
          <div
            style={{
              width: "10%",
              padding: "20px 24px",
              height: "17%",
              backgroundColor: "rgb(242, 239, 237)",
              borderRadius: "20px",
              textAlign: "center",
              // marginRight: "150px",
            }}
          >
            <label
              style={{
                fontWeight: "600",
                lineHeight: "21px",
                fontSize: "16px",
                // padding: "20px 24px",
              }}
            >
              Email add-ons
            </label>
          </div>
        </ul>
        <div
          style={{
            position: "relative",
            width: "80%",
            height: "80vh",
            backgroundColor: "rgb(252,243,218)",
            border: "1px solid silver",
            borderRadius: "20px",
            boxShadow: "#FEECC2",
            marginBottom: "1%",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            src={pic}
            alt=""
          />
        </div>
        <div
          style={{
            width: "35%",
            height: "5vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 16px",
            fontSize: "16px",
            backgroundColor: "rgb(255, 246, 240)",
            fontWeight: "500",
            borderRadius: "10px",
            marginBottom: "13%",
          }}
        >
          <p style={{ lineHeight: "21px" }}>
            Searching for SOC2?{" "}
            <span style={{ textDecoration: "underline", color: "blue" }}>
              Share your team's compliance requirements
            </span>
          </p>
        </div>
      </div>
      <div
        style={{
          width: "98%",
          height: "300vh",
          // flexDirection: "column-reverse",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* HERO THREE WRAPPER */}
        <div
          style={{
            width: "98%",
            height: "100%",
            // FlexDirection: "column-reverse",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* HERO THREE RIGHT */}
          <div
            style={{
              width: "40%",
              height: "80vh",
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
        </div>
      </div>
    </div>
  );
};

export default Features;

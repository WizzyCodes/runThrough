import bg from "./assets/image.avif";
import verge from "./assets/the-verge_gdh1dw.png";
import pcmag from "./assets/wirecutter_blf8c5.png";
import pcmag2 from "./assets/pc-mag_ak9mna.png";
import pcmag3 from "./assets/techradar_qt0nt6.png";
import pcmag4 from "./assets/img.avif";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          width: "100%",
          height: "80px",
          display: "flex",
          padding: "0px, 24px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "97%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "10%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px", height: "50px" }} src={logo} alt="" />
            <h1
              style={{
                color: "rgb(222,72,58)",
                fontSize: "30px",
                fontWeight: "600",
              }}
            >
              todoist
            </h1>
          </div>
          <div
            style={{
              width: "47%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
                fontFamily: "Inter,HelveticNeue,Helvetica,Arial,sans-serif",
                fontWeight: "500",
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              <nav>Features</nav>
              <nav>For Teams</nav>
              <nav>Resources</nav>
              <nav>Pricing</nav>
            </div>
            <div
              style={{
                width: "1px",
                height: "30px",
                backgroundColor: "slategray",
                marginBottom: "10px",
              }}
            />
            <div
              style={{
                width: "35%",
                display: "flex",
                // gap: "30px",
                marginBottom: "10px",
              }}
            >
              <button
                style={{
                  fontSize: "16px",
                  width: "40%",
                  height: "40px",
                  border: "none",
                  outline: "none",
                  background: "none",
                  // padding: "9px, 14px",
                }}
              >
                Login
              </button>
              <button
                style={{
                  width: "80%",
                  border: "none",
                  height: "35px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  backgroundColor: "rgb(207, 53, 32)",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                Start for free
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* "Hero" */}
      <div
        style={{
          width: "100%",
          height: `calc(100vh - 80px)`,
          display: "flex",
          justifyContent: "center",
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
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "95%", height: "97%" }}>
          <div
            style={{
              width: "100%",
              height: "650px",
              backgroundColor: "green",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div style={{ width: "46%", height: "100%" }}>Content</div>
            <div
              style={{
                width: "46%",
                height: "100%",
                position: "fixed",
                backgroundColor: "gray",
              }}
            >
              Video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;

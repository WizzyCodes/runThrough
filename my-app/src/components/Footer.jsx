import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        borderTop: "1px solid black",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "100%",
          backgroundColor: "white",
          color: "black",
          display: "flex",
          marginTop: "50px",
        }}
      >
        {/* FOOTER LEFT */}
        <div
          style={{
            width: "40%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "150px",
            }}
          >
            <img
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgb(255,246,240)",
              }}
              src={logo}
              alt=""
            />
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
          <p
            style={{
              width: "70%",
              fontSize: "20px",
              color: "black",
              fontWeight: "600",
            }}
          >
            Join millions of people who organize work and life with Todoist.
          </p>
        </div>
        {/* FOOTER RIGHT */}
        <div
          style={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "600",
          }}
        >
          {/* 1 */}
          <div>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Features
            </h1>
            <p
              style={{
                color: "black",
              }}
            >
              How It Works
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              For Teams
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Pricing
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Templates
            </p>
          </div>
          {/* 2 */}
          <div>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Resources
            </h1>
            <p
              style={{
                color: "black",
              }}
            >
              Download Apps
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Help Center
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Productivity Methods
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Integrations
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Channel Partners
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Developer API
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Integrations
            </p>
          </div>
          {/* 3 */}
          <div>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Company
            </h1>
            <p
              style={{
                color: "black",
              }}
            >
              About us
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Careers
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Inspiration Hub
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Press
            </p>
            <p
              style={{
                color: "black",
              }}
            >
              Twist
            </p>
          </div>
          {/* 4 */}
          <div
            style={{
              width: "2%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

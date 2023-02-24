import React from "react";

const Thirdpage = () => {
  return (
    <div>
      <div className="container">
        <div className="left">
          <h1>Design faster</h1>
          <div className="card1">
            <div className="progress">
              <div
                style={{
                  width: "130px",
                  height: "130px",
                  border: "4.89873px solid #FF708B",
                  borderRadius: "50%",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "4.89873px solid #FFBA69",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "4.89873px solid #DBDFF1",
                      borderRadius: "50%",
                      background: "#F4F6FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        border: "4.89873px solid #8676FF",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content1">
              <p style={{ fontSize: "15px" }}>Total Earning</p>
              <h1 style={{ fontSize: "20px" }}>$12,875</h1>
              <p style={{ fontSize: "10px" }}>Compare to $10,765 last year</p>
            </div>
            <div className="content2">
              <div>
                <span>Presentation</span>
                <span>862</span>
              </div>
              <div>
                <span>Development</span>
                <span>753</span>
              </div>
              <div>
                <span>Reasearch</span>
                <span>553</span>
              </div>
            </div>
          </div>

          <div className="card2">
            <div>
              <p style={{ fontSize: "15px" }}>Total earning</p>
              <h1 style={{ fontSize: "20px", color: "#ffffff" }}>$12,875</h1>
              <p style={{ fontSize: "10px" }}>Compared to $21,490 last year</p>
            </div>
            <hr style={{ width: "80%", margin: "0px auto" }} />
            <div>
              <p style={{ fontSize: "15px" }}>Sales</p>
              <h1 style={{ fontSize: "20px", color: "#ffffff" }}>$43,123</h1>
              <p style={{ fontSize: "10px" }}>Compared to $21,490 last year</p>
            </div>
          </div>
          <div className="card3">
            <div>
              <span>Travel</span>
              <span>760</span>
              <span>2540</span>
            </div>
            <div>
              <span>Presentation</span>
              <span>760</span>
              <span>2540</span>
            </div>
            <div>
              <span>Busieness</span>
              <span>760</span>
              <span>2540</span>
            </div>
          </div>
        </div>
        <div className="right">
          <h1 className="time">Timeline</h1>
          <ul className="list">
            <li>1W</li>
            <li>1M</li>
            <li
              style={{
                background: "#3247E6",
                borderRadius: "16px",
                color: "#ffffff",
                padding: "3px 10px",
              }}
            >
              3M
            </li>
            <li>1Y</li>
            <li>ALL</li>
          </ul>
          <div className="circles">
            <div className="inner1">
              <div>
                <p>Investments</p>
                <h1 style={{ fontSize: "15px" }}>$76,644</h1>
                <span>3 month</span>
              </div>
              <div className="sub-inner">
                <p>Development</p>
                <h1 style={{ fontSize: "12px" }}>$31,647</h1>
              </div>
              <div className="sub-inner" style={{ left: "42%", top: "8.41%" }}>
                <p>Design</p>
                <h1 style={{ fontSize: "12px" }}>$32,984</h1>
              </div>
              <div
                className="sub-inner"
                style={{
                  left: "17%",
                  top: "65%",
                  width: "110px",
                  height: "110px",
                }}
              >
                <p>Finance</p>
                <h1 style={{ fontSize: "12px" }}>$23,657</h1>
              </div>
              <div
                className="sub-inner"
                style={{
                  left: "75%",
                  top: "41%",
                  width: "80px",
                  height: "80px",
                }}
              >
                <p>Bussiness</p>
                <h1 style={{ fontSize: "11px" }}>$76,644</h1>
              </div>
              <div
                className="sub-inner"
                style={{
                  left: "60%",
                  top: "68%",
                  width: "80px",
                  height: "80px",
                }}
              ></div>
            </div>
          </div>
          <div className="icons-box">
            <div>
              <div className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 5.05L14.95 10L10 14.95L5.05 10L10 5.05ZM10 7.879L7.879 10L10 12.121L12.121 10L10 7.879Z"
                    fill="#023AFF"
                  />
                </svg>
              </div>
              <span>Trend goods</span>
              <h1>204</h1>
            </div>
            <div>
              <div className="icon">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.819 0C16.211 0 20.697 3.88 21.638 9C20.698 14.12 16.211 18 10.819 18C5.427 18 0.941 14.12 0 9C0.94 3.88 5.427 0 10.819 0ZM10.819 16C12.8585 15.9996 14.8374 15.3068 16.4319 14.0352C18.0263 12.7635 19.1419 10.9883 19.596 9C19.1402 7.0133 18.0239 5.24 16.4296 3.97003C14.8353 2.70005 12.8573 2.00853 10.819 2.00853C8.7807 2.00853 6.80269 2.70005 5.20838 3.97003C3.61406 5.24 2.49777 7.0133 2.042 9C2.4961 10.9883 3.61167 12.7635 5.20614 14.0352C6.80061 15.3068 8.77953 15.9996 10.819 16ZM10.819 13.5C9.62553 13.5 8.48093 13.0259 7.63702 12.182C6.79311 11.3381 6.319 10.1935 6.319 9C6.319 7.80653 6.79311 6.66193 7.63702 5.81802C8.48093 4.97411 9.62553 4.5 10.819 4.5C12.0125 4.5 13.1571 4.97411 14.001 5.81802C14.8449 6.66193 15.319 7.80653 15.319 9C15.319 10.1935 14.8449 11.3381 14.001 12.182C13.1571 13.0259 12.0125 13.5 10.819 13.5ZM10.819 11.5C11.482 11.5 12.1179 11.2366 12.5868 10.7678C13.0556 10.2989 13.319 9.66304 13.319 9C13.319 8.33696 13.0556 7.70107 12.5868 7.23223C12.1179 6.76339 11.482 6.5 10.819 6.5C10.156 6.5 9.52007 6.76339 9.05123 7.23223C8.58239 7.70107 8.319 8.33696 8.319 9C8.319 9.66304 8.58239 10.2989 9.05123 10.7678C9.52007 11.2366 10.156 11.5 10.819 11.5Z"
                    fill="#023AFF"
                  />
                </svg>
              </div>
              <span>Shopping Views</span>
              <h1>65,540</h1>
            </div>
            <div>
              <div className="icon">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10H4V19H0V10ZM14 6H18V19H14V6ZM7 0H11V19H7V0Z"
                    fill="#023AFF"
                  />
                </svg>
              </div>
              <span>Store Dynamics</span>
              <h1>324</h1>
            </div>
          </div>

          <div className="blue-bubble"></div>
          <div
            className="blue-bubble"
            style={{
              width: "40px",
              height: "40px",
              left: "calc(20% - 90px / 2 + 80px)",
              top: "calc(80% - 90px / 2 - 127.5px)",
            }}
          ></div>
          <div
            className="blue-bubble"
            style={{
              width: "50px",
              height: "50px",
              left: "calc(10% - 100px / 2 + 149.5px)",
              top: "calc(50% - 90px / 2 - 227.5px)",
            }}
          ></div>
          <div
            className="blue-bubble"
            style={{
              width: "30px",
              height: "30px",
              left: "calc(30% - 100px / 2 + 549.5px)",
              top: "calc(75% - 50px / 2 - 50px)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;

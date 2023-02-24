import React from 'react'

const CommentBox = () => {
  return (
    <div>
      <div className="set-pos">
        <div className="comment-box">
          <div className="icon">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H22V5H21V16H22V18H0V16H1V5H0V3H3V1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0H18C18.2652 0 18.5196 0.105357 18.7071 0.292893C18.8946 0.48043 19 0.734784 19 1V3ZM19 5H3V16H6V9H8V16H10V9H12V16H14V9H16V16H19V5ZM5 2V3H17V2H5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text">
            <p>Chicago</p>
            <h1>98,320,300</h1>
          </div>
        </div>
      </div>
      <div className="set-pos1">
        <div className="comment-box">
          <div className="icon" style={{ background: "#7BDDA2" }}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 5.98703e-09 17.2652 5.98703e-09 17V9.487C-1.56288e-05 9.34411 0.0305909 9.20288 0.0897577 9.07281C0.148924 8.94275 0.235277 8.82688 0.343 8.733L4 5.544V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18ZM7 16H10V9.942L6 6.454L2 9.942V16H5V12H7V16ZM12 16H18V2H6V4.127C6.234 4.127 6.469 4.209 6.657 4.374L11.657 8.733C11.7647 8.82688 11.8511 8.94275 11.9102 9.07281C11.9694 9.20288 12 9.34411 12 9.487V16ZM14 8H16V10H14V8ZM14 12H16V14H14V12ZM14 4H16V6H14V4ZM10 4H12V6H10V4Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text">
            <p>Berlin</p>
            <h1>98,320,300</h1>
          </div>
        </div>
      </div>
      <div className="set-pos2">
        <div className="comment-box">
          <div className="icon" style={{ background: "#F8A243" }}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18V4.70002C1.99994 4.49474 2.06305 4.29442 2.18077 4.12625C2.29849 3.95809 2.4651 3.83022 2.658 3.76002L12.329 0.244017C12.4045 0.216523 12.4856 0.20765 12.5653 0.218151C12.645 0.228651 12.721 0.258216 12.7869 0.304337C12.8527 0.350459 12.9065 0.411778 12.9436 0.483095C12.9807 0.554413 13 0.633625 13 0.714017V5.66702L19.316 7.77202C19.5152 7.83837 19.6885 7.96573 19.8112 8.13607C19.934 8.3064 20.0001 8.51105 20 8.72102V18H22V20H0V18H2ZM4 18H11V2.85502L4 5.40102V18ZM18 18V9.44202L13 7.77502V18H18Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text">
            <p>Manaus</p>
            <h1>98,320,300</h1>
          </div>
        </div>
      </div>
      <div className="set-pos3">
        <div className="comment-box">
          <div className="icon" style={{ background: "#FF7E7E" }}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 18H0V16H1V1C1 0.734784 1.10536 0.48043 1.29289 0.292893C1.48043 0.105357 1.73478 0 2 0H16C16.2652 0 16.5196 0.105357 16.7071 0.292893C16.8946 0.48043 17 0.734784 17 1V6H19V16H20V18ZM15 16H17V8H11V16H13V10H15V16ZM15 6V2H3V16H9V6H15ZM5 8H7V10H5V8ZM5 12H7V14H5V12ZM5 4H7V6H5V4Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text">
            <p>Giza</p>
            <h1>10,547,980</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentBox
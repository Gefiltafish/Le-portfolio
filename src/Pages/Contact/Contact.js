import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <p>Contact</p>
      </div>
      <div className="contact-text-container">
        <a className="contact-text" href="sth">
          Contact
        </a>
        <a
          className="contact-text"
          href="https://www.google.se/maps/place/Stockholm/@59.3261232,17.9120139,12z/data=!3m1!4b1!4m5!3m4!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808"
        >
          Stockholm | Sweden
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            stroke="#ffffff00"
            x="0px"
            y="0px"
            width="800px"
            height="800px"
            viewBox="0 0 800 800"
            id="map"
          >
            <path
              id="map-base"
              class="st0"
              d="M267.6,460.2L159.4,460.2L27,700.8L400,700.8L773,700.8L640.6,460.2L532.4,460.2"
              fill="none"
              stroke="#8D8D8D"
            />
            <path
              id="marker"
              class="st0"
              d="M487.2,454.9c-41.9,70.1-87.4,125.6-87.4,125.6s-156.2-192-156.2-312.6c0-93.2,70-168.7,156.4-168.7  s156,75.5,156.4,168.7C556.6,323.6,523.2,394.7,487.2,454.9"
              fill="none"
              stroke="#8D8D8D"
            />
            <path
              id="circle"
              class="st0"
              d="M351.9,256.6A48.1,48.1 0,1,1 448.1,256.6A48.1,48.1 0,1,1 351.9,256.6"
              fill="none"
              stroke="#8D8D8D"
            />
          </svg>
        </a>
        <a className="contact-text" href="sth">
          Contact
          <svg
            width="400"
            height="268"
            viewBox="0 0 400 268"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="mail">
              <g id="mail-top">
                <line
                  id="Line 1"
                  x1="122.295"
                  y1="85.5963"
                  x2="200.295"
                  y2="142.596"
                  stroke="#8D8D8D"
                />
                <line
                  id="Line 2"
                  x1="199.705"
                  y1="142.596"
                  x2="277.705"
                  y2="85.5963"
                  stroke="#8D8D8D"
                />
              </g>
              <g id="mail-bottom">
                <line
                  id="Line 3"
                  x1="121.713"
                  y1="181.591"
                  x2="188.713"
                  y2="134.591"
                  stroke="#8D8D8D"
                />
                <line
                  id="Line 4"
                  x1="277.713"
                  y1="181.409"
                  x2="210.713"
                  y2="134.409"
                  stroke="#8D8D8D"
                />
              </g>
              <g id="mail-outline">
                <line
                  id="Line 5"
                  x1="120"
                  y1="84.5"
                  x2="280"
                  y2="84.5"
                  stroke="#8D8D8D"
                />
                <line
                  id="Line 6"
                  x1="120.5"
                  y1="84"
                  x2="120.5"
                  y2="183"
                  stroke="#8D8D8D"
                />
                <line
                  id="Line 7"
                  x1="120"
                  y1="182.5"
                  x2="280"
                  y2="182.5"
                  stroke="#8D8D8D"
                />
                <line
                  id="Line 8"
                  x1="279.5"
                  y1="182"
                  x2="279.5"
                  y2="84"
                  stroke="#8D8D8D"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

import './Home.css';
import blueSmoke from './blueSmoke.mov';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className="video-container">
        <video
          className="video"
          src={blueSmoke}
          autoPlay
          muted
          loop
          playsinline
        ></video>
        <div className="knockout-text">
          <p>
            teodor <br></br> jonsson
          </p>
        </div>
        <div className="text">
          <Link className="link" to="/contact">
            teodor jonsson | front-end developer
          </Link>
        </div>
      </div>
    </>
  );
};

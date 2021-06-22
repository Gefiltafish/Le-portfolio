import './Home.css';
import { NavigationBar } from '../Components/Navigation/NavigationBar';

function Home() {
  return (
    <>
      <NavigationBar />
      <div className="flex-container">
        <h1>Teodor Jonsson</h1>
      </div>
    </>
  );
}

export default Home;

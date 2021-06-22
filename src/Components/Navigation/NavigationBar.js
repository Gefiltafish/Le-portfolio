import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <>
      <div className="header">
        <h3 className="home-text">Teodor Jonsson</h3>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

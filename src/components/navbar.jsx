export default function Navbar() {
  return (
    <header>
      <div className="navbar-container">
        <a
          className="home"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Jatin Kalsi
        </a>
      </div>
    </header>
  );
}

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
        <nav class="topnav">
          <ul>
            <li>
              <a
                onClick={() => {
                  window.scrollTo({ top: 731, left: 0, behavior: "smooth" });
                }}
              >
                Tools
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scrollTo({ top: 1684, left: 0, behavior: "smooth" });
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scrollTo({
                    top: 5555555,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

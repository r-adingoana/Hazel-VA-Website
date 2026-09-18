function Header() {
  return (
    <header id="home" className="hero">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">
          Hi, I'm <span className="text-highlight">Hazel Radingoana</span> — Your Virtual Assistant
        </h1>
        <p className="lead mb-4">
          I help anyone looking for a Virtual Assistant save time, stay organized, and focus on what matters most.
          From entrepreneurs to busy professionals, I provide reliable, professional support tailored to your needs.
        </p>
        <button
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
          className="btn btn-cta btn-lg shadow-sm"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
}

export default Header;

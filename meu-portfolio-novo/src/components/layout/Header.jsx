import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <span className="text-light">Nadiah</span>
            <span className="text-primary"> M.</span>
          </Link>
        </div>

        {/* Menu para desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/")
                    ? "text-primary"
                    : "text-light hover:text-primary"
                }`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={`transition-colors ${
                  isActive("/sobre")
                    ? "text-primary"
                    : "text-light hover:text-primary"
                }`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                className={`transition-colors ${
                  isActive("/projetos")
                    ? "text-primary"
                    : "text-light hover:text-primary"
                }`}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/competencias"
                className={`transition-colors ${
                  isActive("/competencias")
                    ? "text-primary"
                    : "text-light hover:text-primary"
                }`}
              >
                Competências
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`transition-colors ${
                  isActive("/contacto")
                    ? "text-primary"
                    : "text-light hover:text-primary"
                }`}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-light focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md">
          <ul className="py-4 px-4 space-y-4">
            <li>
              <Link
                to="/"
                className={`block py-2 ${
                  isActive("/") ? "text-primary" : "text-light"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={`block py-2 ${
                  isActive("/sobre") ? "text-primary" : "text-light"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                className={`block py-2 ${
                  isActive("/projetos") ? "text-primary" : "text-light"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/competencias"
                className={`block py-2 ${
                  isActive("/competencias") ? "text-primary" : "text-light"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Competências
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`block py-2 ${
                  isActive("/contacto") ? "text-primary" : "text-light"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

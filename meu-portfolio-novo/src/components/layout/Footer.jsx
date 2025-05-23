const Footer = () => {
  return (
    <footer className="bg-dark/80 text-light py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-light">Nadiah</span>
              <span className="text-primary"> Mauricio</span>
            </h3>
            <p className="text-sm mt-2 text-gray-400">
              Desenvolvedora Full Stack Web | Analista de Dados
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h4 className="text-primary font-medium mb-3">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="/sobre"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="/projetos"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="/competencias"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Competências
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-3">Redes Sociais</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/Nad1ah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nadiahmauricio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nadiah Mauricio. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

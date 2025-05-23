import { Link } from "react-router-dom";
import profileImage from "/src/images/profile.jpg";

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <p className="text-primary mb-2 text-lg">Olá, eu sou</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-light">Nadiah</span>
                <span className="text-primary"> Mauricio</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mb-6">
                Desenvolvedora <span className="text-primary">Full Stack</span>{" "}
                Web & Analista de Dados
              </h2>
              <p className="text-gray-400 mb-8 text-lg max-w-lg">
                Desenvolvedora com foco em criar soluções web inovadoras e
                análise de dados. Procuro oportunidades para aplicar minhas
                competências técnicas e contribuir com projetos desafiadores.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/projetos"
                  className="bg-primary text-dark px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Meus Projetos
                </Link>
                <Link
                  to="/contacto"
                  className="border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/10 transition-colors"
                >
                  Contactar
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Círculo decorativo externo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-primary blur-md opacity-30 scale-110"></div>

                {/* Borda gradiente */}
                <div className="relative z-10 bg-gradient-to-br from-secondary to-primary p-1 rounded-full">
                  <div className="bg-dark rounded-full p-2">
                    <div className="rounded-full h-64 w-64 md:h-80 md:w-80 overflow-hidden">
                      <img
                        src={profileImage}
                        alt="Nadiah Mauricio"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full border-2 border-primary opacity-20 animate-pulse"></div>
                <div
                  className="absolute bottom-10 left-10 w-10 h-10 rounded-full bg-secondary opacity-20 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Formas decorativas de fundo */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary opacity-5"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-secondary opacity-5"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-primary opacity-5"></div>
      </section>

      {/* Seção de projetos em destaque */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <div className="bg-dark/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg font-medium">
                  Sistema de Gestão de Tarefas
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Sistema de Gestão de Tarefas
                </h3>
                <p className="text-gray-400 mb-4">
                  Aplicação web full stack para gestão de tarefas pessoais e
                  profissionais.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>
                <Link
                  to="/projetos/1"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Ver detalhes →
                </Link>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="bg-dark/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg font-medium">
                  Dashboard Desportivo
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Dashboard de Análise Desportiva
                </h3>
                <p className="text-gray-400 mb-4">
                  Plataforma para visualização e análise de estatísticas
                  desportivas.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    Flask
                  </span>
                </div>
                <Link
                  to="/projetos/2"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Ver detalhes →
                </Link>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="bg-dark/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg font-medium">
                  E-commerce Artesanal
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Plataforma de E-commerce
                </h3>
                <p className="text-gray-400 mb-4">
                  Loja online completa para produtos artesanais.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>
                <Link
                  to="/projetos/3"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Ver detalhes →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projetos"
              className="inline-block border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/10 transition-colors"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de habilidades */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Minhas Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-light font-medium">HTML/CSS</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-light font-medium">JavaScript</span>
                  <span className="text-primary">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-light font-medium">React</span>
                  <span className="text-primary">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-light font-medium">Node.js</span>
                  <span className="text-primary">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-light font-medium">Python</span>
                  <span className="text-primary">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-light font-medium">SQL</span>
                  <span className="text-primary">65%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

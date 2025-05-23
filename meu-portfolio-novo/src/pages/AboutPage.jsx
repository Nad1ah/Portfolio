const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Sobre Mim</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative z-10 bg-gradient-to-br from-secondary to-primary p-1 rounded-full">
            <div className="bg-dark rounded-full p-2">
              <div className="rounded-full h-64 w-64 overflow-hidden">
                <img
                  src="src\images\profile.jpg"
                  alt="Nadiah Mauricio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">
            Biografia Profissional
          </h2>
          <p className="text-lg text-gray-400 mb-4">
            Desde 2023, tenho me dedicado a aprender e aprimorar minhas
            habilidades na área de tecnologia. Minha jornada começou com cursos
            de desenvolvimento web e análise de dados, e desde então tenho
            trabalhado em projetos pessoais para aplicar e expandir meus
            conhecimentos.
          </p>
          <p className="text-lg text-gray-400">
            Estou em transição de carreira, buscando oportunidades para aplicar
            minhas novas competências em ambientes profissionais desafiadores e
            inovadores.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Formação</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-4">
          <h3 className="text-xl font-medium text-primary">
            Desenvolvimento Web Full Stack
          </h3>
          <p className="text-gray-600 mb-2">2023 - 2024</p>
          <p className="text-gray-700">
            HTML, CSS, JavaScript, React, Node.js, Express, MongoDB
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-primary">
            Análise de Dados com Python
          </h3>
          <p className="text-gray-600 mb-2">2023 - 2024</p>
          <p className="text-gray-700">
            Python, Pandas, NumPy, visualização de dados, estatística
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

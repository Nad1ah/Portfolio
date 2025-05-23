const SkillsPage = () => {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
    backend: ["Node.js", "Express", "Python", "Flask"],
    database: ["MongoDB", "SQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    dataAnalysis: ["Python", "Pandas", "NumPy", "Tableau"],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">
        Minhas Competências
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Desenvolvimento Frontend
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Desenvolvimento Backend
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.backend.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Banco de Dados
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.database.map((skill, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Ferramentas
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Análise de Dados
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.dataAnalysis.map((skill, index) => (
              <span
                key={index}
                className="bg-red-100 text-red-800 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

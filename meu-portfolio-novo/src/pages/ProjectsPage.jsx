const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão de Tarefas",
      description:
        "Aplicação web full stack para gestão de tarefas pessoais e profissionais.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "task-manager.jpg",
    },
    {
      id: 2,
      title: "Dashboard de Análise de Dados Desportivos",
      description:
        "Plataforma para visualização e análise de estatísticas desportivas.",
      technologies: ["React", "Python", "Flask", "PostgreSQL"],
      image: "sports-dashboard.jpg",
    },
    {
      id: 3,
      title: "Plataforma de E-commerce",
      description: "Loja online completa para produtos artesanais.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "ecommerce.jpg",
    },
    {
      id: 4,
      title: "Aplicação de Recomendação de Filmes",
      description: "Sistema de recomendação personalizada de filmes e séries.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
      image: "movie-recommender.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Meus Projetos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Imagem do Projeto</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={`/projetos/${project.id}`}
                className="text-primary hover:underline"
              >
                Ver detalhes
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

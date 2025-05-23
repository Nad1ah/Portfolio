import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você adicionaria a lógica para enviar o formulário
    alert("Mensagem enviada com sucesso!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Contacto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Envie uma mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Informações de Contacto
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-primary">Email</h3>
              <p className="text-gray-700">nadiahmauricio@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-primary">Telefone</h3>
              <p className="text-gray-700">(+351) 920 012 739</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-primary">Localização</h3>
              <p className="text-gray-700">Lisboa, Portugal</p>
              <p className="text-gray-700">Póvoa de St. Iria, 2625-138</p>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium text-primary mb-2">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Nad1ah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nadiahmauricio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

"use client"

export default function TechStack() {
  const categories = [
    {
      "name": "Languages",
      "technologies": ["Java", "Python", "TypeScript", "JavaScript", "SQL"]
    },
    {
      "name": "Frontend",
      "technologies": ["React", "Next.js", "Tailwind CSS", "Shadcn/UI", "Vite"]
    },
    {
      "name": "Backend",
      "technologies": ["Spring Boot", "FastAPI", "Node.js", "Express.js", "Flask", "LangChain"]
    },
    {
      "name": "Databases",
      "technologies": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"]
    },
    {
      "name": "AI & Machine Learning",
      "technologies": ["TensorFlow", "PyTorch", "Scikit-learn", "BERT", "NLP", "RAG"]
    },
    {
      "name": "Tools & DevOps",
      "technologies": ["Docker", "Celery", "RabbitMQ", "Git", "Linux", "Maven"]
    }
  ]

  return (
    <section id="tech" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Tech <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Technologies and tools I use to build modern applications, from web development to machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.name}
              className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.name}</h3>
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/80">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

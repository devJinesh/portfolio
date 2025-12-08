"use client"

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm a passionate developer just starting my journey in tech. I love building applications and
                solving problems through code. My focus is on learning modern technologies and creating projects that
                showcase my growing skills.
              </p>
              <p>
                I'm driven by curiosity and a desire to continuously improve. I enjoy exploring new frameworks,
                contributing and collaborating with other developers to build amazing things.
              </p>
              <p>
                When I'm not coding, you'll find me learning new technologies, reading tech blogs, or working on side
                projects to strengthen my portfolio and expand my knowledge.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "5+", label: "Projects Built" },
              { number: "10+", label: "Technologies" },
              { number: "100%", label: "Dedication" },
              { number: "∞", label: "Learning Curve" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

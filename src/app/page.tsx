import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "PerfOps / QA Load Platform",
    description: "Разработка и поддержка платформы для нагрузочного тестирования для внутренних и внешних проектов.",
    tags: ["k6", "JMeter", "Grafana", "CI/CD"]
  },
  {
    title: "Krave Mart",
    description: "Проведение комплексного нагрузочного тестирования для e-commerce приложения.",
    tags: ["Performance Testing", "API"]
  },
  {
    title: "Автоматизация на Go и n8n",
    description: "Создание Telegram-ботов и воркфлоу для автоматизации рутинных задач и отчетности.",
    tags: ["Go", "Telegram API", "n8n", "Automation"]
  }
];

const techStack = ["JMeter", "k6", "Kafka", "Prometheus", "Grafana", "GitHub Actions", "Docker", "Go", "Telegram Bot API", "n8n"];

export default function Home() {
  return (
    <main className="d-flex flex-column h-100">
      <div className="bg-dark">
        <Header />
        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0 text-white">Ключевые проекты</h2></div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  {projects.map(p => <div key={p.title} className="col mb-5 h-100"><ProjectCard {...p} /></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="text-center">
                    <h2 className="fw-bolder text-white">Технологический стек</h2>
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                        {techStack.map(tech => <div key={tech} className="badge bg-primary bg-gradient rounded-pill fs-6 p-2">{tech}</div>)}
                    </div>
                </div>
            </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

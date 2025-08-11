import { HeroSection } from "./section/hero/hero.section";
import { ProjectSection } from "./section/project/project.section";

export const HomePage = () => {
  return (
    <main className="home">
      <HeroSection />
      <ProjectSection />
    </main>
  );
};

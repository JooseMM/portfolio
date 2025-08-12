import { AboutSection } from "./section/about/about.section";
import { CTASection } from "./section/cta/cta.section";
import { ExperienceSection } from "./section/experiece/experience.section";
import { HeroSection } from "./section/hero/hero.section";
import { ProjectSection } from "./section/project/project.section";

export const HomePage = () => {
 // create a useEffect to handle scrolling here
  return (
    <main className="home">
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <AboutSection />
       <CTASection />
    </main>
  );
};

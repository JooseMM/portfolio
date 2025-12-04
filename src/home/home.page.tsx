import { AboutSection } from "./section/about/about.section";
import { CTASection } from "./section/cta/cta.section";
import { ExperienceSection } from "./section/experiece/experience.section";
import { HeroSection } from "./section/hero/hero.section";
import { ProjectSection } from "./section/project/project.section";
import { useScrollToHash } from "../shared/utils/customHooks/useScrollTo.hook";
import { PDFButton } from "../pdf/components/pdf-button/PDFButton.component";

export const HomePage = () => {
  useScrollToHash();

  return (
    <main className="home">
      <HeroSection id="hero" />
      <ProjectSection id="projects" />
      <ExperienceSection id="experience" />
      <AboutSection id="about" />
      <CTASection />
      <PDFButton />
    </main>
  );
};

import { TitleWrapper } from "../../../shared/titleWrapper/titleWrapper.component";
import { useUI } from "../../../shared/utils/context/hook.context";
import { ThemeOptions } from "../../../shared/utils/interfaces/Theme.enum";
import AboutDark from "../../../assets/about-image-dark.png";
import AboutLight from "../../../assets/about-image-light.png";
import "./about.style.css";
import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";
import type { SectionId } from "../../../shared/utils/interfaces/SectionId.type";

export const AboutSection = ({ id }: SectionId) => {
  const { currentTheme, preferredLanguage } = useUI();
  return (
    <section className="about" id={id}>
      <img src={currentTheme === ThemeOptions.DARK ? AboutDark : AboutLight} />
      <div className="about__description">
        <TitleWrapper className="about__title">
          {preferredLanguage === LanguageOptions.ES ? "Sobre Mi" : "About Me"}
        </TitleWrapper>
        <div
          className="about__paragraph"
          style={{
            border:
              currentTheme === ThemeOptions.DARK ? "" : "0.1rem solid #97bfbf",
          }}
        >
          {preferredLanguage === LanguageOptions.ES ? (
            <>
              <p>
                Me considero <b>apasionado por la tecnología</b> en general, los
                conceptos complejos y la resolución de problemas. Desde muy
                pequeño desperté una fascinación por los computadores, a tal
                punto que en mis tiempos libres, de manera autodidacta, aprendí
                conceptos técnicos avanzados sobre hardware y software .
              </p>
              <p>
                Actualmente, disfruto mucho de programar utilizando <b>Vim</b>{" "}
                como IDE y <b>Linux</b> como sistema operativo principal. Aparte
                de mi afán por lo digital, en mis tiempos libres disfruto de
                instrumentos musicales y el ejercicio físico.
              </p>
            </>
          ) : (
            <>
              <p>
                I consider myself <b>passionate about technology</b> in general,
                complex concepts, and problem-solving. Since I was very young, I
                developed a fascination for computers, to the point that in my
                free time, self-taught, I learned advanced technical concepts
                about hardware and software.
              </p>
              <p>
                Currently, I really enjoy programming using <b>Vim</b> as my IDE
                and <b>Linux</b> as my main operating system. Aside from my
                enthusiasm for digital things, in my free time I enjoy playing
                musical instruments and physical exercise.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

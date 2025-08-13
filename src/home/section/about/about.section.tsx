import { TitleWrapper } from "../../../shared/titleWrapper/titleWrapper.component";
import { useUI } from "../../../shared/utils/context/hook.context";
import { ThemeOptions } from "../../../shared/utils/interfaces/Theme.enum";
import AboutDark from "../../../assets/about-image-dark.png";
import AboutLight from "../../../assets/about-image-light.png";
import "./about.style.css";

export const AboutSection = () => {
  const { currentTheme } = useUI();
  return (
    <section className="about">
      <img src={currentTheme === ThemeOptions.DARK ? AboutDark : AboutLight} />
      <div className="about__description">
        <TitleWrapper className="about__title">Sobre Mi</TitleWrapper>
        <div
          className="about__paragraph"
          style={{
            border:
              currentTheme === ThemeOptions.DARK ? "" : "0.1rem solid #97bfbf",
          }}
        >
          <p>
            Me considero <b>apasionado por la tecnología</b> en general, los
            conceptos complejos y la resolución de problemas. Desde muy pequeño
            desperté una fascinación por los computadores, a tal punto que en
            mis tiempos libres, de manera autodidacta, aprendí conceptos
            técnicos avanzados sobre hardware y software .
          </p>
          <p>
            Actualmente, disfruto mucho de programar utilizando <b>Vim</b> como
            IDE y <b>Linux</b> como sistema operativo principal. Aparte de mi
            afán por lo digital, en mis tiempos libres disfruto de instrumentos
            musicales y el ejercicio físico.
          </p>
        </div>
      </div>
    </section>
  );
};

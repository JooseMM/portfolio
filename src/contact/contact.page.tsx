import "./contact.style.css";
import AboutDark from "../assets/about-image-dark.png";
import AboutLight from "../assets/about-image-light.png";
import { useUI } from "../shared/utils/context/hook.context";
import { ThemeOptions } from "../shared/utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import { CONTACT_LIST, type ContactInfo } from "./contact.utils";
import { useDeviceType } from "../shared/utils/customHooks/useCurrentDeviceType.hook";
import { DeviceTypeOptions } from "../shared/utils/interfaces/DeviceTypeOptions.enum";
import { LanguageOptions } from "../shared/utils/interfaces/LanguageOptions.enum";
import { useScrollToHash } from "../shared/utils/customHooks/useScrollTo.hook";

export const ContactPage = () => {
  const { currentTheme, preferredLanguage } = useUI();
  const deviceType = useDeviceType();
  useScrollToHash({ block: "center" });

  return (
    <section className="contact" id="contact">
      <img src={currentTheme === ThemeOptions.DARK ? AboutDark : AboutLight} />
      <h1>
        {preferredLanguage === LanguageOptions.ES ? (
          <>
            ¡Pongámonos en <b>contacto</b>!
          </>
        ) : (
          <>
            Let's get in <b>contact</b>!
          </>
        )}
      </h1>
      <p>
        {preferredLanguage === LanguageOptions.ES ? (
          <>
            Puedo ser de <b>gran ayuda para tu empresa o proyecto</b>, por lo
            que acá abajo te dejo todos los medios por los cuales me puedes
            contactar.
          </>
        ) : (
          <>
            I can be of <b>great help to your company or project</b>, so below
            I’m sharing all the ways you can contact me.
          </>
        )}
      </p>
      <ul className="contact__list">
        {CONTACT_LIST.map(({ link, Icon, visible, name }: ContactInfo) => (
          <li
            key={name}
            className="contact__box"
            style={{ backgroundColor: ThemeCSSColorOptions.PRIMARY }}
          >
            <a href={link} target="_blank">
              <div className="contact__icon">
                <Icon
                  fillColor={ThemeCSSColorOptions.PRIMARY}
                  style={{ width: "2rem" }}
                />
              </div>
              <span>
                {deviceType === DeviceTypeOptions.MOBILE ? name : visible}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

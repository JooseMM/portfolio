import AboutDark from "../assets/about-image-dark.png";
import AboutLight from "../assets/about-image-light.png";
import "./contact.style.css";
import { useUI } from "../shared/utils/context/hook.context";
import { ThemeOptions } from "../shared/utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import { CONTACT_LIST, type ContactInfo } from "./contact.utils";
import { useDeviceType } from "../shared/utils/customHooks/useCurrentDeviceType.hook";
import { DeviceTypeOptions } from "../shared/utils/interfaces/DeviceTypeOptions.enum";

export const ContactPage = () => {
  const { currentTheme } = useUI();
  const deviceType = useDeviceType();

  return (
    <section className="contact">
      <img src={currentTheme === ThemeOptions.DARK ? AboutDark : AboutLight} />
      <h1>
        ¡Pongámonos en <b>contacto</b>!
      </h1>
      <p>
        Puedo ser de <b>gran ayuda para tu empresa o proyecto</b>, por lo que
        acá abajo te dejo todos los medios por los cuales me puedes contactar.
      </p>
      <ul className="contact__list">
        {CONTACT_LIST.map(({ link, Icon, visible, name }: ContactInfo) => (
          <li
            key={name}
            className="contact__box"
            style={{ backgroundColor: ThemeCSSColorOptions.PRIMARY }}
          >
            <a href={link}>
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

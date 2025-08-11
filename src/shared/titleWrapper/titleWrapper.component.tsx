import "./titleWrapper.style.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const TitleWrapper = ({ children, style }: Props) => {
  return (
    <div className="title" style={style}>
      {children}
    </div>
  );
};

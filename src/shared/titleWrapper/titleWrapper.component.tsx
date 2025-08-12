import "./titleWrapper.style.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TitleWrapper = ({ children, style, className }: Props) => {
  return (
    <div className={`title ${className}`} style={style}>
      {children}
    </div>
  );
};

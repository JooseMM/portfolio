export interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  isSecundary?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export type AnchorEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

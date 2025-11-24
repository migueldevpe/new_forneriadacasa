import "./Tooltip.css";

interface TooltipProps {
  children: React.ReactNode;
  label: string;
  style: React.CSSProperties;
  content_classStyle?: string;
  tArrow?: string;
}

export default function Tooltip({ children, label, style, content_classStyle, tArrow="t-arrow" }: TooltipProps) {

  return (

    <div className={`tooltip-content relative ${content_classStyle ?? ""}`}>
      {children}
      <div className={`tooltip absolute !p-1.5 ${tArrow}`} style={style}>{label}</div>
    </div>
    
  )

}
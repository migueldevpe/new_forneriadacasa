import "./Tooltip.css";

interface TooltipProps {
  children: React.ReactNode;
  label: string;
  style: React.CSSProperties;
  content_classStyle?: string;
}

export default function Tooltip({ children, label, style, content_classStyle }: TooltipProps) {

  return (

    <div className={`tooltip-content relative ${content_classStyle ?? ""}`}>
      {children}
      <div className="tooltip absolute !p-1.5 t-arrow" style={style}>{label}</div>
    </div>
    
  )

}
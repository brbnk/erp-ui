interface TemplateProps {
  children: JSX.Element[] | JSX.Element,
  slot: string,
  className?: string
}

const Template = ({ children, slot, className }: TemplateProps) => {
  return (
    <div slot={slot} className={className}>
      { children }
    </div>
  )
}

export default Template
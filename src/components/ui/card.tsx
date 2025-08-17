import { ReactNode } from "react"
import { cn } from "@/lib/utils"  

type CardProps = {
  children: ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn("bg-card", className)}>
      {children}
    </div>
  )
}

export default Card

import { ButtonVariants } from './index.css'

interface ButtonProps {
  text: string
  variant: ButtonVariants
  customStyle?: string
  startIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  endIcon?: React.FC<React.SVGProps<SVGSVGElement>>
}

export type CustomButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

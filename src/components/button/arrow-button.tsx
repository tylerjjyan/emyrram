import Button from './button'
import { CustomButtonProps } from './types'
import { ReactComponent as ArrowRight } from './arrow-right.svg'

interface IArrowButtonProps {
  arrowVariant: 'right' | 'left'
}

const ArrowButton: React.FC<CustomButtonProps & IArrowButtonProps> = ({
  arrowVariant,
  ...rest
}) => {
  const iconProps =
    arrowVariant === 'right'
      ? { endIcon: ArrowRight }
      : { startIcon: ArrowRight }

  return <Button {...rest} {...iconProps}></Button>
}

export default ArrowButton

import { motion, MotionConfig } from 'framer-motion'
import useAnimateOnInView from '@/hooks/use-animate-on-in-view'

const fadeInVariants = {
  top: {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      y: 0,
      opacity: 1
    }
  },
  bottom: {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      y: 0,
      opacity: 1
    }
  },
  right: {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      x: 0,
      opacity: 1
    }
  },
  left: {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      x: 0,
      opacity: 1
    }
  }
}

interface AnimateInProps {
  direction?: keyof typeof fadeInVariants
}

const AnimateIn: React.FC<AnimateInProps> = ({
  direction = 'bottom',
  children
}): JSX.Element => {
  const { ref: containerRef, controls } = useAnimateOnInView()

  return (
    <MotionConfig transition={{ duration: 1 }} reducedMotion="user">
      <motion.div
        ref={containerRef}
        variants={fadeInVariants[direction]}
        animate={controls}
        initial="hidden"
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}

export default AnimateIn

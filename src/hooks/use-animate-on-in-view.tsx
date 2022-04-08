import { useAnimation, AnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type isInView = {
  ref: (node?: Element | null | undefined) => void
  controls: AnimationControls
}

const useAnimateOnInView = (): isInView => {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) controls.start('visible')
    else if (!inView) controls.start('hidden')
  }, [inView, controls])

  return { ref, controls }
}

export default useAnimateOnInView

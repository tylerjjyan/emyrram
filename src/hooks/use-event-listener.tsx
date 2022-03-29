import { useRef, useEffect } from 'react'

interface Options {
  element?: Window | undefined
  enabled?: boolean
}

const useEventListener = <K extends keyof WindowEventMap>(
  eventName: K,
  handler: (this: Window, ev: WindowEventMap[K]) => any,
  options: Options = {}
): void => {
  const {
    element = typeof window !== 'undefined' ? window : undefined,
    enabled = true
  } = options
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!element || !element.addEventListener || !enabled) return
    element.addEventListener(eventName, savedHandler.current)
    return () => {
      element.removeEventListener(eventName, savedHandler.current)
    }
  }, [eventName, element, enabled])
}

export default useEventListener

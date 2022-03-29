import { useEffect, useState } from 'react'

let hydrationCompleted = false

interface OptionsType {
  defaultMatches?: boolean
  noSsr?: boolean
  ssrMatchMedia?: (a: string) => MediaQueryList
}

function useMediaQuery(queryInput: string, options?: OptionsType): boolean {
  const query = queryInput.replace('@media ', '')
  const {
    defaultMatches = false,
    noSsr = false,
    ssrMatchMedia = null
  } = options || {}

  const [matches, setMatches] = useState(() => {
    if (hydrationCompleted || noSsr) {
      return window.matchMedia(query).matches
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches
    }

    return defaultMatches
  })

  useEffect(() => {
    hydrationCompleted = true

    const queryList = window.matchMedia(query)
    setMatches(queryList.matches)

    function handleMatchesChange(event: any): void {
      setMatches(event.matches)
    }

    queryList.addListener(handleMatchesChange)
    return () => {
      queryList.removeListener(handleMatchesChange)
    }
  }, [query])

  return matches
}

export const withMediaQuery =
  (query: string, key = 'mediaQuery') =>
  (MainComponent: any) => {
    const X = (props: any): JSX.Element => {
      const result = useMediaQuery(query)
      return <MainComponent {...props} {...{ [key]: result }} />
    }
    return X
  }

export default useMediaQuery

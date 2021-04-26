import { useState, useEffect, MutableRefObject, useCallback } from 'react'

export function useElementDimensions(ref: MutableRefObject<HTMLElement>) {
  const [ dimensions, setDimension ] = useState<DOMRect>()
  const [ timeout, setTimeoutID ] = useState<NodeJS.Timeout>()

  const getElementDimension = useCallback(() => {
    clearTimeout(timeout)

    setTimeoutID(
      setTimeout(() => {
        setDimension(ref.current.getBoundingClientRect())
      }, 300)
    )
  }, [ setTimeout, setDimension, timeout, ref ])

  useEffect(() => {
    if (ref) setDimension(ref.current.getBoundingClientRect())

    window.addEventListener('resize', getElementDimension)
    return () => window.removeEventListener('resize', getElementDimension)
  }, [])

  return { dimensions }
}
import { useEffect, useCallback } from 'react'

export const useKeyPress = (targetKey: string, callback: () => void) => {
  const keyHandler = useCallback(
    event => {
      if (event.key === targetKey) callback()
    },
    [callback, targetKey],
  )

  useEffect(() => {
    window.addEventListener('keydown', keyHandler)

    return () => void window.removeEventListener('keydown', keyHandler)
  }, [keyHandler])
}

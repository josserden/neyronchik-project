import { useLayoutEffect, useState } from 'react'
import { isBrowser } from '@/utils'

const STORAGE_KEY = 'show-banner'
const defaultValue = true

export const useSessionStorage = (): {
  isHidden: boolean
  handleClick: () => void
} => {
  const [isHidden, setHidden] = useState<boolean>(defaultValue)

  isBrowser &&
    useLayoutEffect(() => {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        setHidden(!defaultValue)
      }
    }, [])

  const handleClick = () => {
    sessionStorage.setItem(STORAGE_KEY, isHidden.toString())
    setHidden(!defaultValue)
  }

  return { isHidden, handleClick }
}

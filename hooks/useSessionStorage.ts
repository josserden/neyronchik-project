import { useLayoutEffect, useState } from 'react'
import { isBrowser } from '@/utils'

const STORAGE_KEY = 'show-banner'
const defaultValue = true

interface IStorage {
  isHidden: boolean
  handleClick: () => void
}

export const useSessionStorage = (): IStorage => {
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

import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="border py-5">
      <div className="container flex items-center justify-between">
        <p className="text-4xl font-black">Neuronchik.</p>
      </div>
    </header>
  )
}

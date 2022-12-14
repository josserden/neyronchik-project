import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="border-t-2 border-slate-200 py-6">
      <div className="container flex items-center justify-center">
        <p className=" text-base font-light leading-6 text-gray-700">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

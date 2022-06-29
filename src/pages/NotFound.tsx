import { Logo } from "./../components/Logo";
import {IconNotFound} from "./../components/IconNotFound";
import { Link } from "react-router-dom";
export function Notfound(){
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center justify-center gap-4">
      <Logo />
      <div className="max-w-[640px] flex items-center justify-center flex-col">
        <h1 className="mt-8 text-[5rem] leading-tight flex items-center justify-center">
          <strong className="text-blue-500">OPS!!!</strong>
        </h1>
        <p className="mt-4 text-gray-200 leading-relaxad text-center">
          A pagina que você está procurando não existe.
        </p>
        <Link to={'/'}>
            <button
              className="mt-4 bg-green-500 rounded uppercase p-4 text-sm font-bold hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit" 
            >
              Me tire daqui!
            </button>
        </Link>
      </div>
    </div>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Errimage from '../app/assets/404-computer.svg'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex flex-col ml-auto items-center justify-center p-1">
      <div className="max-w-2xl w-full text-center">
        <Image
          src={Errimage}
          alt="404 Error Illustration"
          width={300}
          height={200}
          className="w-fit h-auto ml-auto mr-auto "
        />
        <h1 className="text-blue-500 text-3xl md:text-4xl font-bold mb-2">
          404 Not Found
        </h1>
        <p className="text-black text-4xl md:text-5xl font-bold mb-2">
          Whoops! That page doesn't exist.
        </p>
        <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <Link href="/">
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
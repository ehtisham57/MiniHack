import Image from 'next/image'
import { Inter } from 'next/font/google'
import BlogPost from '@/components/Blog'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main>
          <div className="max-w-screen-2xl px-24  py-5 mx-auto">
          <BlogPost/>
        </div> 
      </main>
    </div>
  )
}

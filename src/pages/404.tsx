import Link from 'next/link'
 import { useRouter } from 'next/router'
export default function NotFound() {
  const {asPath} = useRouter()
  
  return (
    <div className='mx-auto mt-20'>
      <h2 className='text-5xl'>{asPath.slice(1,)} Not Found</h2>
      <p className='text-2xl'>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
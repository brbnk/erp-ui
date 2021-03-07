import HelloWorld from '../components/helloworld'
import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <div> Test Next.js page </div>
      <HelloWorld/>
      <Link href="/about">
        <a> About </a>
      </Link>
    </div>
  )
}

export default HomePage
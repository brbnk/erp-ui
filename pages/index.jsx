import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <div> Test Next.js page </div>
      <Link href="/login">
        <a> Login </a>
      </Link>
    </div>
  )
}

export default HomePage
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <ul className='p-5 text-center'>
        <li className='m-5 p-2'>
          <Link href='/next-fetch'>Next JSfetch</Link>
        </li>
        <li className='m-5 p-2'>
          <Link href='/axios-fetch'>Axios</Link>
        </li>
      </ul>
    </>
  )
}

export default Home

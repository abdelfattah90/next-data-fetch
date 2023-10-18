'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

interface Product {
  id: number
  title: string
  image: string
  price: number
}

const AxiosFetchpage = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        if (response.status === 200) {
          setProducts(response.data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='p-4 m-5'>
      <h1 className='text-2xl  mb-4'>
        Fake Store Products | Axios
        <p className='text-sky-500'>
          <a href='https://fakestoreapi.com/products' target='_blanck'>
            fakestoreapi.com/products
          </a>
        </p>
      </h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
          <li key={product.id} className='border rounded-md p-4'>
            <Image
              src={product.image}
              alt={product.title}
              className='w-40 h-40 object-cover mb-2'
              width={100}
              height={100}
            />
            <h2 className='text-lg font-semibold'>{product.title}</h2>
            <p className='text-gray-600'>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AxiosFetchpage

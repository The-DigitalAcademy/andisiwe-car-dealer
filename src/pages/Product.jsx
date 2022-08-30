import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Cars from '../folderCars/cars'

const Product = () => {

  const {id} = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    let car = Cars.find((car) => car.id === Number(id))
    setProduct(car)
  }, [])

  return (

    
    <div className="row detail">
      <div className='card col-md-6 text-center mx-auto mt-5 detailHieght'>
      <img src={product?.image} alt="" />
      <h2>{product?.name}</h2>
      <h1>{product?.price}</h1>
    </div>
    </div>

  )
}

export default Product

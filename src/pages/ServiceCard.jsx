
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ServiceCard({data}) {
  const {_id,image, title,  desc, category, price} =data || {}
  return (
    <div className="card  my-4 w-[280px] card-compact bg-base-50 border-2 border-gray-100  shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:scale-100 ">
    <figure>
      <img className='w-full h-52 overflow-hidden px-2 py-2 rounded-2xl'
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-green-950">{title}</h2>
     <div className='flex justify-between'>
     <p className='text-green-800 font-semibold my-1 border-2 px-3 py-1 rounded-xl'>{category}</p>
     <p className='ml-20 font-semibold'>${price}</p>
     
     </div>
     <p className='text-gray-500 my-3'> {desc}</p>
    
      <div className="card-actions">
        <Link to={`/details/${_id}`} className="btn bg-lime-300 text-black  font-bold">See Details</Link>
      </div>
    </div>
  </div>
  )
}

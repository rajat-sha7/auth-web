import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function header() {
  const {currentUser} = useSelector( (state) => state.user)
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to="/"><h1 className='font-bold'>Auth Web</h1></Link> 
           <ul className='flex gap-4'>
           <Link to="/">   <li className='hover:text-blue-300'>Home</li></Link>
           <Link to="/about"> <li className='hover:text-blue-300'>About</li></Link>
           <Link to="/profile">
             {currentUser ?  (
              <img className='h-7 w-7 rounded-full object-cover' src={currentUser.profilePicture} alt='user img'></img>
             ) : (
              <li className='hover:text-blue-300'>Sign In</li>
              )}
            </Link>
           </ul>
        </div>
    </div>
  )
}

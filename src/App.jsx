
import './App.css'
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

function App() {

  //public routes  login register linkpage unauthorized

  //protected routes  admin edit
  //catch all 

  return (
 <>

 <main>
  <nav className='flex'>
    <NavLink to="/login">login</NavLink>
    
    <NavLink to="/register">register</NavLink>
    <NavLink to="/unautharized">unauthorized</NavLink>
    <NavLink to="/admin">admin</NavLink>
    <NavLink to="/edit">edit</NavLink>
  </nav>


<p> this is  layout </p>
<Outlet/>
  
 </main>
 
 </>
  )
}

export default App

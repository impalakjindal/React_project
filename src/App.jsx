import React, {useContext, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const handleLogin= (email,password)=>{
 if(email=='admin@me.com'&&password=='123'){
 setUser('Admin')
 }else if(authData && authData.employees.find((e)=>e.email==email && e.password==password)){
  setUser('employee')
 }else{
  alert('invalid credentials')
 }
 }

  return (
    <>
     {!user?<Login handleLogin={handleLogin} />: ''}
     {user=='Admin'?<AdminDashboard /> :<EmployeeDashboard />}
    </>
  )
}

export default App

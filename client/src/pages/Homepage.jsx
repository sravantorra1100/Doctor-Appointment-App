import React,{useEffect} from 'react'
import axios from 'axios'

const Homepage = () => {
//login user data
const getUserData=async()=>{
 try{
const res=await axios.post('/api/v1/user/getUserData',{},{
  headers:{
    Authorization:"Bearer " +localStorage.getItem('token')
  }
})
 }catch(error){
  console.log(error)
 } 
}

useEffect(() => {
  getUserData()
},[])

  return (
    <div>Homepage</div>
  )
}

export default Homepage
import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'

const Home = () => {
  const { currentUser } = useContext(AuthContext) || {};
  useEffect(()=>(
    console.log(currentUser)
  ))
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
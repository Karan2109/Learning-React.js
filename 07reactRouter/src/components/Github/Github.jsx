import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Karan2109')
    //    .then((response) => response.json())
    //    .then((data) => {
    //         console.log(data);
    //         setData(data);
    //    });
    // }, [])

  return (
    <div className='text-center m-4 p-4 bg-gray-600 text-white text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={250} className='rounded-4xl' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Karan2109')
    return response.json() 
}

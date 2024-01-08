import React from 'react'

const getData = async () => {
  const data = await fetch("http://localhost:3001", {
    next: {
      revalidate: 10
    }
  })
  console.log(data);
  
  if (!(data.status === 200)) {
    throw new Error('WTF')
  }
  return data.json()
}

const Page = async () => {

  const data = await getData()

  return (
    <div>
      {
        data.msg
      }
    </div>
  )
}

export default Page
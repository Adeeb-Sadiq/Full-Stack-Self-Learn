import React from 'react'

const page = ({params}) => {
    console.log(params);
    console.log(params.val[1]);
  return (
    <div>
      checking the params
    </div>
  )
}

export default page

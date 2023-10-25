import React from 'react'
import { Typography } from '@material-tailwind/react'

function Home() {
  return (
    <div>
      {' '}
      <Typography variant="h2" color="blue-gray" className="mb-2">
        What is Arco?
      </Typography>
      <Typography color="blue-gray" className="font-normal">
        Discuss your project idea and requirements with our business expert. We would analyze and
        derive technical factors to align it with your purpose and scope of your project. This will
        be critical in framing the technological framework, resource engagement, cost parameters,
        and delivery timelines to best compliment your perspective and idea of the solution.
      </Typography>
    </div>
  )
}

export default Home

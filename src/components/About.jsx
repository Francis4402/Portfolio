import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className=' text-lg text-gray-500'>
                They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the console in faded pinks and yellows. Then a mist closed over the black water and the robot gardener.
            </p>
        </div>
    </div>
  )
}

export default About
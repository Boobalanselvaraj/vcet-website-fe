import React from 'react'
import './WhychooseStyle.css'
import why from './Images/why.jpg'
import Facluty from './Images/Facluty.png'
import courses from './Images/courses.png'
import Gaurantee from './Images/Gaurantee.png'

const Whychoose = () => {
  return (
    <div className='whyChoose'>
        <div className='whyImage'>
            <img src={why}/>
        </div>
        <div className='whyContent'>
            <h1>Why Choose Us ?</h1>
            <p>
                The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his wife. These days are all Happy and Free. These days are all share them with me.
            </p>
            <p>
                It's time to put on makeup. It's time to dress up right. It's time to raise the curtain on the Muppet Show tonight.
            </p>
            <div className='whylogo'>
                <div className='division'>
                    <img className='firimg' src={Facluty} alt="" />
                    <h3>Experienced Faculty</h3>
                </div>
                <div className='division'>
                    <img className='secimg' src={courses} alt="" />
                    <h3>Popular Courses</h3>
                </div>
                <div className='division'>
                    <img className='thirdimg' src={Gaurantee} alt="" />
                    <h3>Guaranteed Career</h3>
                </div>
                             
            </div>
        </div>
    </div>
  )
}

export default Whychoose

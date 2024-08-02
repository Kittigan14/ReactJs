import React from 'react'
import { SlControlPlay } from "react-icons/sl";

function Content() {
  return (

    <div>

        <div className="content">

            <div className="content-text">

                <h1 className='title'> Design System for React JS </h1>
                <p className='subtitles'>
                    Atomize React is a UI framework that helps developers collaborate with <br />
                    designers and build consistent user interfaces effortlessly.
                </p>

            </div>

            <div className="btn-content">
                <button className='btn-get' >Get Started Now</button>
                <button className='btn-watch' >
                    <SlControlPlay className='icon-watch' />
                    Watch Video
                </button>
            </div>

        </div>

    </div>

  )
}

export default Content

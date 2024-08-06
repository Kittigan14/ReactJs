import React from 'react'
import { SlClose } from "react-icons/sl";
import { SlCheck } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";

function Content() {
  return (

    <div>

        <div className="content">

            <div className="content-text">

                <h1 className='title'> To Do List </h1>

                <input type="text" placeholder='Add a new tack...' />
                

            </div>

            <div className="btn-content">
                <button className='btn-get' >
                    <SlCheck className='icon'/>
                    Complete
                </button>

                <button className='btn-watch' >
                    <SlClose className='icon' />
                    Incomplete
                </button>
            </div>

        </div>

    </div>

  )
}

export default Content

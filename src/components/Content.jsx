import React from 'react';
import { SlClose } from "react-icons/sl";
import { SlCheck } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";

function Content() {
  const contentStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentTextStyle = {
    width: '600px',
    textAlign: 'center',
  };

  const titleStyle = {
    margin: '10px 0 20px 0',
    fontSize: '40px',
  };

  const inputStyle = {
    width: '380px',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    outline: '1px solid #dfdfdf',
    transition: 'all 0.5s ease',
  };

  const btnContentStyle = {
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
  };

  const btnStyle = {
    width: '180px',
    height: '50px',
    border: 'none',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'all 0.5s ease',
  };

  const btnGetStyle = {
    ...btnStyle,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
    color: '#fff',
  };

  const btnWatchStyle = {
    ...btnStyle,
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '1px solid #dfdfdf',
  };

  const btnIconStyle = {
    margin: '0 5px',
  };

  const btnGetHoverStyle = {
    backgroundColor: '#6494edc2',
  };

  const btnWatchHoverStyle = {
    backgroundColor: '#f6f6f6',
  };

  const toDoListStyle = {
    width: '100%',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const bgToDoStyle = {
    width: '380px',
    height: '50px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#f6f6f6',
    transition: 'all 0.5s ease',
  };

  const bgToDoHoverStyle = {
    transform: 'scale(1.01)',
  };

  return (
    <div style={contentStyle}>
      <div style={contentTextStyle}>
        <h1 style={titleStyle}>To Do List</h1>
        <input type="text" placeholder="Add a new task..." style={inputStyle} />
      </div>
      <div style={btnContentStyle}>
        <button 
          style={btnGetStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = btnGetHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = btnGetStyle.backgroundColor}
        >
          <SlCheck style={btnIconStyle} />
          Complete
        </button>
        <button 
          style={btnWatchStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = btnWatchHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <SlClose style={btnIconStyle} />
          Incomplete
        </button>
      </div>
      <div style={toDoListStyle}>
        <div 
          style={bgToDoStyle}
          onMouseOver={(e) => e.target.style.transform = bgToDoHoverStyle.transform}
          onMouseOut={(e) => e.target.style.transform = 'none'}
        >
          <p>Project React Js</p>
          <div style={btnIconStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
            </svg>
          </div>
        </div>
        <div 
          style={bgToDoStyle}
          onMouseOver={(e) => e.target.style.transform = bgToDoHoverStyle.transform}
          onMouseOut={(e) => e.target.style.transform = 'none'}
        >
          <p>Project Laravel</p>
          <div style={btnIconStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-x-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

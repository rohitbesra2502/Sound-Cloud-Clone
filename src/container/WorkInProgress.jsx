import React from 'react'

const WorkInProgress = () => {
  return (
    <div className='workingPage' style={{
      width:"100%",
      height:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      justifyItems:"center",
      border:"1px solid red",
    }}>
      <div className='progress-container'>
        <h1 className='heading-working' style={{color:"#fff" , fontSize:"20px",fontWeight:"100",background:"#333333" , padding:"6px 18px",}}>
          Work In Progress ...
        </h1>
      </div>
    </div>
  )
}

export default WorkInProgress
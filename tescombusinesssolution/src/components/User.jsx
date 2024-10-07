import React from 'react'

const User = ({ img, name }) => {
    return (
        <div className='userContainer' style={{width:'200px', height:'200px', backgroundColor:'red', display:'flex', flexDirection:'column',justifyContent:'center', margin:'10px'}}>
            <div className='circle' style={{display:'flex', justifyContent:'center', margin:'auto'}}><img src={img} className='imageCircle' style={{width:'150px', height:'150px', margin:'auto', borderRadius:'50%', position:"relative",zIndex:5}} alt="user" /></div>
            <div className='userDetails' style={{ width:'200px', height:'200px', borderRadius:'10px', backgroundColor:'yellow', textAlign: 'center', position:"relative", bottom:'20px', padding:'15px', fontSize:'1.25em',zIndex:10 }}><b>{name}</b></div>
        </div>
    )
}

export default User
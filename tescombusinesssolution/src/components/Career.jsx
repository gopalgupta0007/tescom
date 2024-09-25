import React from 'react'
import img from '../image/careerImg.webp'

const Career = () => {
  return (
    // <div style={{ position: 'relative', padding:'70px 0', width: '100%', backgroundImage:'linear-gradient(135deg, rgb(0, 191, 255) 50%, rgb(255, 145, 0) 50%)' }}>
    <div style={{ position: 'relative', padding:'100px 0', width: '100%' }}>
      <div id='left-bottom-circle'></div>
      <div id='top-right-circle'></div>
      <h1 style={{ textAlign: 'center', fontWeight:'bolder' }} id='tescomTxtStyle'>Career</h1>
      <div style={{width:'60%',display:'flex', overflow:'hidden', flexDirection:document.body.offsetWidth>900?'row':'column',padding:0, margin:'auto', borderRadius:'10px',justifyContent:'center', alignItems:'center', boxShadow:' 0 0 20px 0 #aaa',backgroundColor:'rgba(255,255,255,0.1)', backdropFilter:'blur(50px)'}}>
        <div style={{ display:'flex',justifyContent:'center', alignItems:'center', margin:document.body.offsetWidth>786?'0 0 100px':'0'}}>
          <img src={img} width="300vw" style={{position:'relative', top:'30px',left:'5%', animation:'scaleAnimation 3s infinite alternate ease-in-out'}} alt="image" />
        </div>
        {/* <form action="" style={{ display: 'flex',flexDirection: 'column', width: document.body.offsetWidth>786?'40%':'90%', margin: 'auto', border: '2px solid #aaa', padding:'30px', borderRadius:'10px', backgroundColor:'rgba(255,255,255,0.1)', backdropFilter:'blur(25px)', border:'none', boxShadow:' 0 0 20px 0 #aaa' }}> */}
        <form action="" style={{ display: 'flex',flexDirection: 'column', width: document.body.offsetWidth>786?'60%':'90%', padding:'30px' }}>
          <input type="text" style={{ border: 'none', outline: 'none', backgroundColor: '#ddd', borderRadius: '10px', padding: '10px' }} id='name' placeholder='name' /><br />
          <input type="text" style={{ border: 'none', outline: 'none', backgroundColor: '#ddd', borderRadius: '10px', padding: '10px' }} id='phone' placeholder='phone' /><br />
          <input type="text" style={{ border: 'none', outline: 'none', backgroundColor: '#ddd', borderRadius: '10px', padding: '10px' }} id='email' placeholder='email' /><br />
          <input type="text" style={{ border: 'none', outline: 'none', backgroundColor: '#ddd', borderRadius: '10px', padding: '10px' }} id='stream' placeholder='stream' /><br />
          <textarea type="text" style={{ border: 'none', outline: 'none', backgroundColor: '#ddd', borderRadius: '10px', padding: '10px' }} id='message' placeholder='message' />
          <input type="file" style={{ border: 'none', outline: 'none', backgroundColor: '#ddd', borderRadius: '10px', padding: '10px', marginTop: '20px' }} id='email' placeholder='Attech Resume' /><br />
          <button className='btn' style={{ width: '20%', margin: 'auto', marginTop:'10px', padding:'7px 5px', border:'1px solid black' }}>Submit</button>
        </form>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Career




// founder - 2
// directors - 3
// co-founder - 3
// hr - 
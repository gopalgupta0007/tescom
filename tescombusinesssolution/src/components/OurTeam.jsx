import React from 'react'
import User from './User'
import userImg from "../image/ourTeam/dummyimg.jpg"

const OurTeam = () => {
    return (
        <div style={{ position: 'relative' }}>
            <section style={{ position: 'relative', paddingTop: '100px', margin: '0 10px 10px' }}>
                <h1>Meet Our Team</h1>
                <div id='founderNdirectors' style={{ width: 'fit-content', display: 'flex', padding:'50px', flexDirection: 'row', rowGap: '10px', margin: 'auto', border: '3px solid black', borderRadius: '20px' }}>
                    <h1 style={{position:'absolute', zIndex:20,left:'45%', bottom:'50%', padding:'5px 10px', borderRadius:'20px', fontWeight:'bolder', backgroundImage:'linear-gradient(90deg, rgb(0, 191, 255), rgb(255, 255, 255), rgb(255, 145, 0))'}}>Founders</h1>
                    <User img={userImg} name="Vivek Bhattacharya" />
                    <User img={userImg} name="Pravin Kumar Pujari" />
                </div>
            </section>
        </div>
    )
}

export default OurTeam
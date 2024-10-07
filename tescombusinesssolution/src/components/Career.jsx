import React, { useEffect, useState } from 'react'
import img from '../image/careerImg.webp'
import axios from 'axios';
import { toast } from 'react-toastify';

const Career = () => {

  const [file, setFile] = useState(null);
  const [career, setCareer] = useState({
    name: '',
    phone: !localStorage.getItem("phone") ? '' : localStorage.getItem("phone"),
    email: !localStorage.getItem("email") ? '' : localStorage.getItem("email"),
    stream: '',
    msg: '',
  })

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth behavior
    }
  }, []);

  const setCareerData = (e, setUseState) => {
    setUseState((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('name', career.name);
    formData.append('phone', career.phone);
    formData.append('email', career.email);
    formData.append('stream', career.stream);
    formData.append('msg', career.msg);
    formData.append('resume', file);

    console.log("formData => ", formData);
    try {
      // Send POST request to the backend
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle response
      toast.success('Resume uploaded and email sent successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading resume: ', error);
      toast.error('Resume not uploaded.');
    }
  };

  function onchangedone(event) {
    setFile(event.target.files[0]);
    let customTxt = document.getElementById("custom-txt");
    let uploadedFile = document.getElementById("excel_file");
    let path;
    if (uploadedFile.value) {
      path = uploadedFile.value;
      console.log(path.split("\\")[path.split("\\").length - 1])
      customTxt.innerText = path.split("\\")[path.split("\\").length - 1];
      customTxt.style.display = "block"
    } else {
      customTxt.innerText = "&nbsp;&nbsp;No file Choosen yet"
    }
  }

  return (
    // <div style={{ position: 'relative', padding:'70px 0', width: '100%', backgroundImage:'linear-gradient(135deg, rgb(0, 191, 255) 50%, rgb(255, 145, 0) 50%)' }}>
    <div style={{ position: 'relative', padding: '100px 0', width: '100%' }}>
      <div id='left-bottom-circle'></div>
      <div id='top-right-circle'></div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '50px' }} id='tescomTxtStyle'>Career</h1>
      {/* <div style={{ width: '60%', display: 'flex', overflow: 'hidden', flexDirection: document.body.offsetWidth > 900 ? 'row' : 'column', padding: 0, margin: 'auto', borderRadius: '10px', justifyContent: 'center', alignItems: 'center', boxShadow: ' 0 0 20px 0 #aaa', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(50px)' }}> */}
      <div id='careerFormContainer'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={img} width="300vw" style={{ position: 'relative', top: '0px', left: '5%', animation: 'scaleAnimation 3s infinite alternate ease-in-out' }} alt="image" />
        </div>
        {/* <form action="" style={{ display: 'flex',flexDirection: 'column', width: document.body.offsetWidth>786?'40%':'90%', margin: 'auto', border: '2px solid #aaa', padding:'30px', borderRadius:'10px', backgroundColor:'rgba(255,255,255,0.1)', backdropFilter:'blur(25px)', border:'none', boxShadow:' 0 0 20px 0 #aaa' }}> */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: document.body.offsetWidth > 1024 ? '60%' : '95%', margin: '-5px 0', padding: '50px 0' }}>
          <input type="text" style={{ border: 'none', backgroundColor: '#ddd', borderRadius: '10px', margin: '-5px 0', padding: '10px', fontWeight: 'bolder' }} name='name' value={career.name} onChange={e => setCareerData(e, setCareer)} id='name' placeholder='name' required /><br />
          <input type="text" style={{ border: 'none', backgroundColor: '#ddd', borderRadius: '10px', margin: '-5px 0', padding: '10px', fontWeight: 'bolder' }} name='phone' value={career.phone} onChange={e => setCareerData(e, setCareer)} id='phone' placeholder='phone' required /><br />
          <input type="text" style={{ border: 'none', backgroundColor: '#ddd', borderRadius: '10px', margin: '-5px 0', padding: '10px', fontWeight: 'bolder' }} name='email' value={career.email} onChange={e => setCareerData(e, setCareer)} id='email' placeholder='email' required /><br />
          <input type="text" style={{ border: 'none', backgroundColor: '#ddd', borderRadius: '10px', margin: '-5px 0', padding: '10px', fontWeight: 'bolder' }} name='stream' value={career.stream} onChange={e => setCareerData(e, setCareer)} id='stream' placeholder='stream' required /><br />
          <textarea type="text" style={{ border: 'none', backgroundColor: '#ddd', borderRadius: '10px', margin: '-5px 0 20px', padding: '10px', fontWeight: 'bolder' }} name='msg' value={career.msg} onChange={e => setCareerData(e, setCareer)} id='message' placeholder='message' required />
          <div id='upload-resume'>
            <center style={{ display: 'flex', justifyContent: 'center' }}>
              <label for="excel_file" id="lbl-input-file"><i class="fa-solid fa-upload"></i>&nbsp;Attech Resume</label>
              <span
                id="custom-txt"
                className='hide'
                style={{ fontSize: 'light', fontWeight: 700, opacity: .75, marginLeft: '10px' }}>No file
                Choosen</span>
              <input type="file" id="excel_file" onChange={e => onchangedone(e)} required hidden />
              {/* <input type="file" style={{ border: 'none', outline: 'none', backgroundColor: '#ddd', borderRadius: '10px', padding: '10px', marginTop: '20px' }} id='email' placeholder='Attech Resume' /><br /> */}
            </center>
          </div>
          <button className='btn' id='career-submit-btn' type='submit'>Submit</button>
        </form>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Career
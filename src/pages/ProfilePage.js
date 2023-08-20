import React, { useEffect } from 'react'
import Image from 'next/image'
import img from "../images/myimg.jpg"
import Link from 'next/link'

const ProfilePage = () => {

  useEffect(() => {
    console.log(showDetails())
  }, [])

  const showDetails = async () => {
    try {
      const response = await fetch("/api/users/");
      if (response.ok) {
        const data = await response.json();
        setlistdata(data);
        console.log("Fetched data:", data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }



  return (
    <div className='max-w-screen-2xl px-20 py-10 mx-auto'>
      <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '50px auto', padding: '30px', border: '2px solid #fff', borderRadius: '10px', backgroundColor: '#000', boxShadow: '5px 10px 18px rgba(255, 255, 255)' }}>
          <Image style={{ maxWidth: '150px', borderRadius: '50%', margin: '0 auto 20px', display: 'block' }} src={img} alt="Profile Picture" />

          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Syed Ehtisham Uddin Balkhi</h1>
          <p style={{ fontSize: '16px', marginBottom: '20px' }}>Frontend Developer | UI/UX Enthusiast</p>
          <p>Hey there! A Full Stack developer with more than 3 years of experience. A solid understanding of HTML, CSS, REACT, NEXT, TAILWIND, and BOOTSTRAP technologies. Firebase, Nodejs, and MongoDB for the backend. Over 250 Figma designs converted to HTML CSS, React, or Next websites. I am extremely passionate about what I do. My commitment to any work is wholehearted. I appreciate your time and wish you a good day.</p>
          <Link
            href="/profile"
            class="hover:text-amber-400 outline-double w-fit p-2 my-3 text-white font-bold flex items-center">
            Go to Dash Board 
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ProfilePage

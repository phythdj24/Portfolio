import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
     <Navbar />

     <div className='main'>
      
      <div className='headline'>
         <h1>Hello My, Name Is Atharv</h1>
        
         
         <img className='port' src="https://e0.pxfuel.com/wallpapers/270/651/desktop-wallpaper-prabhas-prabhas-in-2019-prabhas-pics-prabhas-actor-thumbnail.jpg" alt="" />
      </div>

      <h1>Skills</h1>
      
        <div className='Box'>
            <div className='box1'>
               <h2>Frontend</h2>
               <p>React js</p>
               <p>React js</p>
               <p>React js</p>
               <p>React js</p>
            </div>
            <div className='box2'>
               <h2>TOOls</h2>
               <p>GIt js</p>
               <p>Figma js</p>
               <p>Adobe js</p>
               <p> Vs code js</p>
            </div>
            <div className='box2'>
               <h2>Backend</h2>
               <p>React js</p>
               <p>React js</p>
               <p>React js</p>
               <p>React js</p>
            </div>
         
        </div>

        <h1>Projects</h1>

           <div className='section'>

           
           <div className='project1'>
              <div>
                <img className='track1' src="https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png" alt="" />
              </div>
              <h2>Track file</h2>

           </div>

           
          <a href="https://rishavchanda.github.io/">
           <div className='project2'>
              <div>
                <img className='track2' src="https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png" alt="" />
              </div>
              <h2>Track file</h2>
              

           </div>
           </a>
         
           <div className='project3'>
              <div>
                <img className='track3' src="https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png" alt="" />
              </div>
              <h2>Track file</h2>

           </div>
           </div>

           <h1>Conact</h1>
        
    <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit" />
  </form>
           

        <div>
        </div>

        


         
      </div>


     
    
    
    </>
       
        

    
  )
}

export default Hero
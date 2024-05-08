import { Scroll } from "@react-three/drei"
import "../App.css"
import Marquee from "./Marquee"
import { animate, easeInOut, motion, stagger } from "framer-motion"
import { Power4 } from "gsap/all"

export function LandingPageContent() {
  return (
    <>
      <Scroll html style={{ width: '100%', height:'100%' }}>

        {/* <motion.h1 className="heading"
                  initial={{rotate:-15, y:'-55%', opacity:0, }}  
                  whileInView={{rotate: 0 , y: 0, opacity: 1}}
                  
                  transition={{ease:[0.22, 1, 0.36, 1],duration:3}}
                  style={{ position: 'absolute', top: `4vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white'}}>
                
                     Agnas Media&#174; <br/>
                     Digital Design <br/>
                     Boutique with Focus <br/>
                     on Aesthetics      
        </motion.h1> */}
        <motion.div
          className="heading"
          initial={{ rotate: -15, y: '-55%', opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 4, delay: 0 }}
          style={{
            position: 'absolute',
            top: '4vh',
            left: '3vw',
            transform: `translate3d(0,-100%,0)`,
            color: 'white'
          }}
        >
          <motion.span
            style={{ margin: 0 }}
            initial={{ opacity: 0, y: '-15px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Agnas Media® <br />
          </motion.span>
          <motion.span
            style={{ margin: 0 }}
            initial={{ opacity: 0, y: '-15px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Digital Design <br />
          </motion.span>
          <motion.span
            style={{ margin: 0 }}
            initial={{ opacity: 0, y: '-15px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            Boutique with Focus <br />
          </motion.span>
          <motion.span
            style={{ margin: 0 }}
            initial={{ opacity: 0, y: '-15px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            on Aesthetics
          </motion.span>
        </motion.div>



        <div className="elem1" style={{ position: 'absolute', top: `8vh`, right: '20vw', transform: `translate3d(0,-100%,0)`, color:'white', }}>Portfolio</div>
        <div className="elem2" style={{ position: 'absolute', top: `8vh`, right: '15vw', transform: `translate3d(0,-100%,0)`, color:'white', }}>Agency</div>
        <div className="elem3" style={{ position: 'absolute', top: `8vh`, right: '10vw', transform: `translate3d(0,-100%,0)`, color:'white', }}>Services</div>
        <div className="elem4" style={{ position: 'absolute', top: `8vh`, right: '5vw', transform: `translate3d(0,-100%,0)`, color:'white', }}>Contact</div> 
        <div className="menu" style={{ position: 'absolute', top: `8vh`, right: '5vw', transform: `translate3d(0,-100%,0)`, color:'white',  }}>

          <h3>Menu</h3>
        </div>

        <div className="para1" style={{ position: 'absolute', top: `90vh`, left: '11vw', transform: `translate3d(0,-100%,0)`, color:'white',  }}>
        We pride ourselves on our ability to craft digital products that <br />
        not only meet but exceed the expectations of our clients. <br />
        With a wealth of experience and expertise in the field of <br />
        digital product development, we understand how to design <br />
        user-friendly interfaces that captivate and engage audiences.
        </div>

        <div className="marquee" style={{ width: "100%", position: 'absolute', top: `550vh`, transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Marquee first={"Showreel"} second={"Showreel"}/>
        </div>

        <div style={{ width: "100%", position: 'absolute', top: `880vh`, transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{width:'60%' , textAlign:'start'}}>
            Every project made by advanced 
            team is created at the intersection
            between design and technology,
            making the future — today
          </div>
        </div>

        <div style={{ display: 'flex', alignItems:'center',flexDirection:'column',width: '50%', position: 'absolute', top: `910vh`, right: '0', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.3em' }}>
        <div style={{width:'80%' ,textAlign:'start'}}>
        With over 200 projects completed, our team has gained a comprehensive understanding
        of user behavior patterns. This knowledge allows us to provide our clients with efficient
        and effective solutions to their digital challenges. By leveraging our experience, we are
        able to achieve maximum efficiency in solving client problems and delivering successful
        outcomes.
        </div>
        <svg style={{ width:'80%',marginTop:'2em'}} width="100%" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="4" />
        </svg>
        </div>

        <div style={{ width:'100%', display: 'flex' ,position: 'absolute', top: `1020vh`, transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.2em', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{width: '60%'}}>
            <p >Our Services:</p>
            <div style={{fontSize: '7em' }}>
            UX Strategy<br />
            UI Design <br />
            Development <br />
            Communication<br />
            Example<br />
            Example<br />
            </div>
          </div>
        </div>

        <div style={{ width: "100%", position: 'absolute', top: `1080vh`, transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{width:'60%' , textAlign:'start'}}>
            We believe that the power of design,
            creativity, and emotion helps large and
            middle businesses to involve people in their
            products and services, multiplying their
            consumer characteristics
          </div>
        </div>

        <div style={{ width: "100%", position: 'absolute', top: `1080vh`, transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{width:'60%' , textAlign:'start'}}>
            We believe that the power of design,
            creativity, and emotion helps large and
            middle businesses to involve people in their
            products and services, multiplying their
            consumer characteristics
          </div>
        </div>

        <div style={{ display: 'flex', alignItems:'center',flexDirection:'column',width: '50%', position: 'absolute', top: `1120vh`, right: '0', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.3em' }}>
          <div style={{width:'80%' ,textAlign:'start'}}>
            We keep looking towards the future, at the same time recognizing 
            that behavior change takes place only with a clear awareness of the
            current state. Before we get down to the design, our team conducts
            a thorough audit of how your audience feels. Then we implement an
            emotional solution, attracting Customers to make a click. In this way,
            you stay unique today and will be of current interest no matter what
            awaits you in the future.
            outcomes.
          </div>
          <svg style={{ width:'80%',marginTop:'2em'}} width="100%" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="4" />
          </svg>
        </div>
        <div style={{width: "100%", textAlign:'center',position: 'absolute', top: `1160vh`, transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '10.3em' }}>
        Recent Works
        </div>

        <div className='work' style={{height:"90vh", width:"33vw", position:'absolute', left:"35%",bottom:"-30%", overflow:"hidden", top: "1180vh" }}>
             <img style={{objectFit:"cover", width:"100%", height:"81%"}} src="https://advanced.team/image/project/Alef/alef-preview.jpg" alt="" srcset="" />

              <div style={{height:"20%", width:"100%",color:"whitesmoke", position:"relative", padding:"0.2vw" }}>
                  <h3 style={{fontSize:"2.5vw",position: "absolute", display:"inline-block", bottom:"30%"}} >Alef Estate</h3>
                  <h5 style={{fontSize:"1vw",position: "absolute", display:"inline-block", bottom:"15%"}}>The site of the day by Awwards
                   <span style={{marginLeft:"15vw", fontSize:"1vw"}}>2021</span></h5>
              </div>
        </div> 

        <div className='work' style={{height:"90vh", width:"33vw", position:'absolute', left:"9%", overflow:"hidden", top: "1280vh" }}>
             <img style={{objectFit:"cover", width:"100%", height:"81%"}} src="https://advanced.team/image/project/ProtoHomes/protohome-cover-min.jpg" alt="" srcset="" />

              <div style={{height:"20%", width:"100%",color:"whitesmoke", position:"relative", padding:"0.2vw" }}>
                  <h3 style={{fontSize:"2.5vw",position: "absolute", display:"inline-block", bottom:"30%"}} >Alef Estate</h3>
                  <h5 style={{fontSize:"1vw",position: "absolute", display:"inline-block", bottom:"15%"}}>The site of the day by Awwards
                   <span style={{marginLeft:"15vw", fontSize:"1vw"}}>2021</span></h5>
              </div>
        </div>

        <div className='work' style={{height:"90vh", width:"33vw", position:'absolute', right:"11%",top:"1320vh", overflow:"hidden" }}>
             <img style={{objectFit:"cover", width:"100%", height:"81%"}} src="https://advanced.team/image/portfolio/depositprev-progressive.jpg" alt="" srcset="" />

              <div style={{height:"20%", width:"100%",color:"whitesmoke", position:"relative", padding:"0.2vw" }}>
                  <h3 style={{fontSize:"2.5vw",position: "absolute", display:"inline-block", bottom:"30%"}} >Alef Estate</h3>
                  <h5 style={{fontSize:"1vw",position: "absolute", display:"inline-block", bottom:"15%"}}>The site of the day by Awwards
                   <span style={{marginLeft:"15vw", fontSize:"1vw"}}>2021</span></h5>
              </div>
        </div>

        <div className='work' style={{height:"90vh", width:"33vw", position:'absolute', left:"9%", top: "1390vh", overflow:"hidden" }}>
             <img style={{objectFit:"cover", width:"100%", height:"81%"}} src="https://advanced.team/image/portfolio/depositprev-progressive.jpg" alt="" srcset="" />

              <div style={{height:"20%", width:"100%",color:"whitesmoke", position:"relative", padding:"0.2vw" }}>
                  <h3 style={{fontSize:"2.5vw",position: "absolute", display:"inline-block", bottom:"30%"}} >Alef Estate</h3>
                  <h5 style={{fontSize:"1vw",position: "absolute", display:"inline-block", bottom:"15%"}}>The site of the day by Awwards
                   <span style={{marginLeft:"15vw", fontSize:"1vw"}}>2021</span></h5>
              </div>
        </div>

        <div className='work' style={{height:"90vh", width:"33vw", position:'absolute', right:"11%",top:"1440vh", overflow:"hidden" }}>
             <img style={{objectFit:"cover", width:"100%", height:"81%"}} src="https://advanced.team/image/portfolio/depositprev-progressive.jpg" alt="" srcset="" />

              <div style={{height:"20%", width:"100%",color:"whitesmoke", position:"relative", padding:"0.2vw" }}>
                  <h3 style={{fontSize:"2.5vw",position: "absolute", display:"inline-block", bottom:"30%"}} >Alef Estate</h3>
                  <h5 style={{fontSize:"1vw",position: "absolute", display:"inline-block", bottom:"15%"}}>The site of the day by Awwards
                   <span style={{marginLeft:"15vw", fontSize:"1vw"}}>2021</span></h5>
              </div>
        </div>

        <div className="marquee" style={{ width: "100%", position: 'absolute', top: `1560vh`, transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Marquee first={"Awards"} second={"Recognition"}/>
        </div>

        <div style={{ position: 'absolute', top: `1610vh`, left: '14vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.7em', width:'54vw', lineHeight:'3.7vw'}}>
        <h1 style={{}}>We are proud to be the 2019 "Studio of the Year" at the CSS Design Awards.Our project was also honored as "E-Commerce of the Year" by the Awwwards in 2022.</h1>
       </div>

       <div style={{width:'55vw',position: 'absolute', top: `1650vh`, right: '0', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em'}}>

            <h1 style={{fontSize:'1.5em'}}>Awwwards <span style={{marginLeft:'24vw'}}>34</span></h1>
            <svg style={{ width:'80%',}} width="100%" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="4" />
           </svg>
           <h3 style={{fontSize:'0.8em'}}>Site of the Day <span style={{marginLeft:'27.7vw'}}>09</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Developer Award<span style={{marginLeft:'26.7vw'}}>04</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Honorable Mention <span style={{marginLeft:'25.4vw'}}>11</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Ecommerce of the year <span style={{marginLeft:'23.4vw'}}>05</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Mobile of the Week <span style={{marginLeft:'25.6vw'}}>01</span></h3>
       </div>

       <div style={{width:'55vw',position: 'absolute', top: `1685vh`,marginTop:'4.5vh', right: '0', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em'}}>

            <h1 style={{fontSize:'1.5em'}}>the CSS Design Awards <span style={{marginLeft:'11vw'}}>34</span></h1>
            <svg style={{ width:'80%',}} width="100%" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="4" />
           </svg>
           <h3 style={{fontSize:'0.8em'}}>Site of the Day <span style={{marginLeft:'27.7vw'}}>09</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Developer Award<span style={{marginLeft:'26.7vw'}}>04</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Honorable Mention <span style={{marginLeft:'25.4vw'}}>11</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Ecommerce of the year <span style={{marginLeft:'23.4vw'}}>05</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Mobile of the Week <span style={{marginLeft:'25.6vw'}}>01</span></h3>
       </div>

       <div style={{width:'55vw',position: 'absolute', top: `1725vh`,marginTop:'4.5vh', right: '0', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em'}}>

            <h1 style={{fontSize:'1.5em'}}>the FWA <span style={{marginLeft:'25.7vw'}}>34</span></h1>
            <svg style={{ width:'80%',}} width="100%" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="4" />
           </svg>
           <h3 style={{fontSize:'0.8em'}}>Site of the Day <span style={{marginLeft:'27.7vw'}}>09</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Developer Award<span style={{marginLeft:'26.7vw'}}>04</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Honorable Mention <span style={{marginLeft:'25.4vw'}}>11</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Ecommerce of the year <span style={{marginLeft:'23.4vw'}}>05</span></h3>
           <h3 style={{fontSize:'0.8em'}}>Mobile of the Week <span style={{marginLeft:'25.6vw'}}>01</span></h3>

       </div>

       <div className="marquee" style={{ width: "100%", position: 'absolute', top: `1950vh`, transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '4em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Marquee first={"Contact Us"} second={"Let's Talk"}/>
        </div>

       <div style={{width:'100%',position: 'absolute', padding:'1vw', display:'flex', gap:'2vw', top:'1989vh',transform: `translate3d(0,-100%,0)`, color:'white', fontSize:'0.88vw', lineHeight:'1vw' }}>
            <div style={{width:'20%', marginLeft:'1.3vw' }}>
               <h1>Heroes from Ukraine</h1>
               <h1>Main Office</h1>
               <h1>Dnipro, 49000</h1>
               <h2>hello@agnasmedia.team</h2>
            </div>
            <div style={{width:'20%', }}>
               <h1>Based in USA</h1>
               <h1>Los Angeles, 90210</h1>
               <h1>California</h1>
               <h2>la@agnasmedia.team</h2>
            </div>
            <div style={{width:'20%', }}>
               <h1>Support from Poland </h1>
               <h1>Los Angeles, 90210</h1>
               <h1>California</h1>
               <h2>la@agnasmedia.team</h2>
            </div>
            <div style={{width:'20%', paddingLeft:'2.5vw', marginLeft:'2vw' }}>
              <h1>Facebook</h1>
              <h1>Instagram</h1>
              <h1>Dribble</h1>
              <h1>Behance</h1>
            </div>
            <div style={{width:'20%', marginRight:'2vw' }}>
              <h2>Business inquiries</h2>
              <h2>hello@agnasmedia.com</h2>
              <h2 style={{marginTop:'4vw'}}>Be Advance</h2>
            </div>
       </div>
        
      </Scroll>
      
    </>
  )
}
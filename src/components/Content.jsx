import { Scroll } from "@react-three/drei"

export function LandingPageContent() {
  return (
    <>
      <Scroll html style={{ width: '100%', height:'100%' }}>
        <h1 style={{ position: 'absolute', top: `14vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '6em' }}>Agnas Media&#174;</h1>
        <h1 style={{ position: 'absolute', top: `25vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '6em' }}>Digital Design</h1>
        <h1 style={{ position: 'absolute', top: `36vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '6em' }}>Boutique with Focus</h1>
        <h1 style={{ position: 'absolute', top: `47vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '6em' }}>on Aesthetics</h1>

        <div style={{ position: 'absolute', top: `8vh`, right: '20vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>Portfolio</div>
        <div style={{ position: 'absolute', top: `8vh`, right: '15vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>Agency</div>
        <div style={{ position: 'absolute', top: `8vh`, right: '10vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>Services</div>
        <div style={{ position: 'absolute', top: `8vh`, right: '5vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>Contact</div>

        <div style={{ position: 'absolute', top: `86vh`, left: '14vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>
        We pride ourselves on our ability to craft digital products that <br />
        not only meet but exceed the expectations of our clients. <br />
        With a wealth of experience and expertise in the field of <br />
        digital product development, we understand how to design <br />
        user-friendly interfaces that captivate and engage audiences.
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

      

      </Scroll>
      
    </>
  )
}
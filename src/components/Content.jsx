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

        <div style={{ position: 'absolute', top: `480vh`, left: '30vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '4em' }}>
        Every project made by advanced  <br />
        team is created at the intersection <br />
        between design and technology, <br />
        making the future — today
        </div>

        <div style={{ position: 'absolute', top: `520vh`, right: '15vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.3em' }}>
        With over 200 projects completed, our team has gained a comprehensive understanding <br />
        of user behavior patterns. This knowledge allows us to provide our clients with efficient <br />
        and effective solutions to their digital challenges. By leveraging our experience, we are <br />
        able to achieve maximum efficiency in solving client problems and delivering successful <br />
        outcomes.
        </div>

        <svg style={{ position: 'absolute', right: '15vw', top: '525vh' }} width="800" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="800" y2="0" stroke="white" strokeWidth="4" />
          {/* <line y1="1.5" x2="74" y2="1.5" stroke="white" strokeWidth="3" />
          <line y1="1.5" x2="54" y2="1.5" stroke="white" strokeWidth="3" /> */}
        </svg>

        <p style={{position: 'absolute', top: `553vh`, left: '30.2vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.2em'}}>Our Services:</p>
        <div style={{ position: 'absolute', top: `655vh`, left: '30vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '7em' }}>
        UX Strategy<br />
        UI Design <br />
        Development <br />
        Communication<br />
        Example<br />
        Example<br />
        </div>

        <div style={{ position: 'absolute', top: `710vh`, left: '30vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '3em' }}>
        We believe that the power of design, <br />
        creativity, and emotion helps large and <br />
        middle businesses to involve people in their <br />
        products and services, multiplying their <br />
        consumer characteristics
        </div>

      </Scroll>
      
    </>
  )
}
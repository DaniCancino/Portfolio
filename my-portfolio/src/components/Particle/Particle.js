import React from 'react';
import Particles from "react-tsparticles";
import './Particle.css'


const Particle = () =>{
    return(
        <Particles
        className='tsparticles'
      options={{
        fpsLimit: 60,
        backgroundMode: {
          enable: true
        },
        particles: {
          // canvas borders bounce factors
          bounce: {
            horizontal: {
              value: 1
            },
            vertical: {
              value: 1
            }
          },
          onHover:{
            enable	:		true,
            mode	:	"repulse",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10
            },
            resize: true
          },

          color: {
            value: "#fff"
          },
          links: {
            color: "#C1C1C1",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1
          },
          collisions: {
            enable: true,
            // collisions bounce factors
            bounce: {
              horizontal: {
                value: 1.5
              },
              vertical: {
                value: 1.5
              }
            }
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 900
            },
            value: 80
          },
          opacity: {
            value: 0.1
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 4
          }
        },
        detectRetina: true
      }}
    />
    )
}

export default Particle;
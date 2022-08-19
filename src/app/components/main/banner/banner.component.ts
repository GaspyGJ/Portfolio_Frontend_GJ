import { Component, OnInit } from '@angular/core';

import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine"; //para las particulas
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /****************************** Para las Particulas *************************************/

  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: "#2596be"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 80,
          duration: 0.4
        }
      },
      onDiv: {
            selectors: "#repulse-div",
            enable: true,
            mode: "repulse",
            type:	"circle"
          }

    },
    particles: {
      color: {
        value: "#2596be"
      },
      links: {
        color: "#000000",
        distance: 200,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 3,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 100
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 0, max: 0 },
      }
    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    //console.log(container);
  }
  async particlesInit(engine: Engine): Promise<void> {
    //console.log(engine);
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

  /********************************Fin de las Particulas *****************************************************/


}

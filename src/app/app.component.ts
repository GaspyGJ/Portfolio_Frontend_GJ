import { Component } from '@angular/core';

import * as AOS from 'aos'  // para el scroll reveal

import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine"; //para las particulas
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  /****************************** Para las Particulas *************************************/

  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        //value: "#2596be"
        value:"transparent"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
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
          distance: 100,
          duration: 1
        }
      }
    },
    particles: {
      color: {
        value: "#000000"
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: {
        enable: false
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
        value: { min: 1, max: 2 },
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



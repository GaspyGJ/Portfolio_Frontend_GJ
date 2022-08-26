import { Component, OnInit } from '@angular/core';

import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine, Rectangle, Circle } from "tsparticles-engine"; //para las particulas
import { loadFull } from "tsparticles";


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  textAuto:string;

  constructor() { }

  ngOnInit(): void {

  }


  /****************************** Para las Particulas *************************************/

  id = "tsparticles";

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
        onDiv: {
          selectors: "#repulse-div",
          enable: true,
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
        value: "#FFFFFF",
        enable: false
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




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import estrella from './Estrellas.png'
import globo from './Globo.png'
import mona from './Mona.png'
import elefante from './Elefante.png'
import './App.css'
import Iframe from 'react-iframe'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer 
        offset={0} 
        speed={0.5} 
        factor={1}>
          <h1>Mi Baby Shower</h1>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0.8} 
        speed={0.5} 
        factor={1}>
          <h1>05 de agosto <br/>15:00hrs</h1>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={1.4} 
        speed={0.5} 
        factor={1.5}>
          <h1>
            Mi llegada está cerca, 
            que me encantaría acompañes a mis papis a celebrar, 
            rasca para descubrir qué género soy <br/>
            ¡No faltes!
          </h1>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={2} 
        speed={0.5} 
        factor={2}>
          <h1>
            ¡Toca la imagen para descubrir
            mi sexo!
          </h1>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={3} 
        speed={1} 
        factor={1}>
          <h1>
            Los esperamos en el terreno Padilla
          </h1>
          <Iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3705.4571066954786!2d-102.37794892392365!3d21.762562980076765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ1JzQ1LjIiTiAxMDLCsDIyJzMxLjQiVw!5e0!3m2!1ses-419!2smx!4v1686877052806!5m2!1ses-419!2smx" width="360" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:1.2, end: 1.3}}
        style={{textAlign: 'center'}}>
          <img src={elefante} id='elefante'/>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:0.15, end: 0.2}}
        style={{textAlign: 'left'}}>
          <img src={globo} id='globo-izq'/>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:0.40, end: 0.2}}
        style={{textAlign: 'left'}}>
          <img src={estrella} id='estrella-izq'/>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:0.50, end: 0.2}}
        style={{textAlign: 'right'}}>
          <img src={globo} id='globo-der'/>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:0.32, end: 0.2}}
        style={{textAlign: 'right'}}>
          <img src={estrella} id='estrella-der'/>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:2.05, end: 2}}
        style={{textAlign: 'center'}}>
          <img src={globo} id='globo-1'/>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:2.05, end: 2}}
        style={{textAlign: 'center'}}>
          <img src={globo} id='globo-3'/>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:2.05, end: 2}}
        style={{textAlign: 'center'}}>
          <img src={globo} id='globo-2'/>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start:2.6, end: 2.55 }}
        style={{textAlign: 'center'}}>
          <a href="https://oscar-padilla.github.io/Rasca/" target='_blank'>
            <img src={mona} id='mona'/>
          </a>
          <div id='scratch'></div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App
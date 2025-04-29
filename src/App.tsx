import { useState } from 'react';
import './App.css'
import StarsBackground from './components/StarsBackground'

function App() {
  const [clicked, setClicked] = useState(false);

  const handleNameClick = () => {
    setClicked(true);
  };
  return (
    <div className="App">
      <StarsBackground />
      <div className={`name ${clicked ? 'move' : ''}`} onClick={handleNameClick}>
        <h1>Aparna Arul</h1>
      </div>
      {clicked && (
        <div className="solar-system">
          <div className="sun"></div>

          <div className="orbit-ring orbit-ring1"></div>
          <div className="orbit-ring orbit-ring2"></div>
          <div className="orbit-ring orbit-ring3"></div>
          <div className="orbit-ring orbit-ring4"></div>
          <div className="orbit-ring orbit-ring5"></div>
          <div className="orbit-ring orbit-ring6"></div>

          <div className="orbit1">
            <div className="planet-wrapper planet1">
              <div className="planet">Projects</div>
            </div>
          </div>
          <div className="orbit2">
            <div className="planet-wrapper planet2">
              <div className="planet">Experience</div>
            </div>
          </div>
          <div className="orbit3">
            <div className="planet-wrapper planet3">
              <div className="planet">Skills</div>
            </div>
          </div>
          <div className="orbit4">
            <div className="planet-wrapper planet4">
              <div className="planet">Contact</div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App

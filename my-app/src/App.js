import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const circle = document.querySelector('.circle');
    
    const handleMouseMove = (e) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      const circleOffsetX = circle.offsetWidth / 2;
      const circleOffsetY = circle.offsetHeight / 2;

      circle.style.left = `${mouseX - circleOffsetX}px`;
      circle.style.top = `${mouseY - circleOffsetY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="space"></div>
      <div className="home">
        <h1>
          <span className="word">H</span>
          <span className="word">i</span>
          <span>&nbsp;</span>
          <span className="word">,</span>
          <span className="word">I</span>
          <span className="word">'</span>
          <span className="word">m</span>
          <span>&nbsp;&nbsp;</span>
          <span className="word">Y</span>
          <span className="word">o</span>
          <span className="word">g</span>
          <span className="word">e</span>
          <span className="word">s</span>
          <span className="word">h</span>
          <span className="word">.</span>
          <div></div>
          <span className="word">I</span>
          <span className="word">'</span>
          <span className="word">m</span>
          <span>&nbsp;</span>
          <span className="word">F</span>
          <span className="word">u</span>
          <span className="word">l</span>
          <span className="word">l</span>
          <span>&nbsp;</span>
          <span className="word">S</span>
          <span className="word">t</span>
          <span className="word">a</span>
          <span className="word">c</span>
          <span className="word">k</span>
          <span>&nbsp;&nbsp;</span>
          <span className="word">D</span>
          <span className="word">e</span>
          <span className="word">v</span>
          <span className="word">e</span>
          <span className="word">l</span>
          <span className="word">o</span>
          <span className="word">p</span>
          <span className="word">e</span>
          <span className="word">r</span>
        </h1>
      </div>
      <div className="thisa">
        <h1>THAT'S IT ??;</h1>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;

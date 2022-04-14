import React from 'react';
import './App.css';

const Movies = new Array(20).fill('12');

function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleNavigation = (dir: 'left' | 'right') => () => {
    console.log(window.innerWidth);
    containerRef.current?.scrollBy({
      left: dir === 'left' ? -window.innerWidth : window.innerWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container" ref={containerRef}>
      <button
        id="left"
        className="navigation"
        onClick={handleNavigation('left')}
      >
        &lt;
      </button>
      <button
        id="right"
        className="navigation"
        onClick={handleNavigation('right')}
      >
        &gt;
      </button>

      {Movies.map((_, index) => (
        <div
          className="scroll_item"
          style={{
            background: `var(--gradient-${index + 1})`,
            height: '10rem',
            width: '14rem',
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;

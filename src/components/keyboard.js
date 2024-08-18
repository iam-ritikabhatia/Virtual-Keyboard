import React from 'react';
import './keyboard.css';

const keyMap = {
  'alphabet': /^[a-zA-Z]$/,
  'numeric': /^[0-9]$/,
  'function': /^(F[1-9]|F1[0-2])$/,
  'num-pad': /^[0-9]$/,
};

const sounds = {
  'alphabet': new Audio('/sounds/alphabet-key.mp3'),
  'numeric': new Audio('/sounds/numeric-key.mp3'),
  'function': new Audio('/sounds/function-key.mp3'),
  'num-pad': new Audio('/sounds/num-pad-key.mp3'),
};

const Keyboard = () => {
  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    
    if (keyElement) {
      keyElement.classList.add('active');
      setTimeout(() => {
        keyElement.classList.remove('active');
      }, 100); // 0.1 seconds
    }
  
    // Handle key sounds
    if (keyMap.alphabet.test(key)) {
      sounds.alphabet.currentTime = 0;
      sounds.alphabet.play();
    } else if (keyMap.numeric.test(key)) {
      sounds.numeric.currentTime = 0;
      sounds.numeric.play();
    } else if (keyMap.function.test(key)) {
      sounds.function.currentTime = 0;
      sounds.function.play();
    } else if (keyMap['num-pad'].test(key)) {
      sounds['num-pad'].currentTime = 0;
      sounds['num-pad'].play();
    }
  };
  
  const handleMouseClick = (event) => {
    const keyElement = event.target;
    if (keyElement.classList.contains('key')) {
      keyElement.classList.add('active');
      setTimeout(() => {
        keyElement.classList.remove('active');
      }, 100); // 0.1 seconds
  
      // Trigger the sound associated with the clicked key
      const key = keyElement.getAttribute('data-key');
      if (keyMap.alphabet.test(key)) {
        sounds.alphabet.currentTime = 0;
        sounds.alphabet.play();
      } else if (keyMap.numeric.test(key)) {
        sounds.numeric.currentTime = 0;
        sounds.numeric.play();
      } else if (keyMap.function.test(key)) {
        sounds.function.currentTime = 0;
        sounds.function.play();
      } else if (keyMap['num-pad'].test(key)) {
        sounds['num-pad'].currentTime = 0;
        sounds['num-pad'].play();
      }
    }
  };
  
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleMouseClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div className="keyboard">
      <div className="main-keyboard">
        {/* Function Keys */}
        <div className="row">
          <div className="key function" data-key="ESC">Esc</div>
          <div className="key function" data-key="F1">F1</div>
          <div className="key function" data-key="F2">F2</div>
          <div className="key function" data-key="F3">F3</div>
          <div className="key function" data-key="F4">F4</div>
          <div className="key function" data-key="F5">F5</div>
          <div className="key function" data-key="F6">F6</div>
          <div className="key function" data-key="F7">F7</div>
          <div className="key function" data-key="F8">F8</div>
          <div className="key function" data-key="F9">F9</div>
          <div className="key function" data-key="F10">F10</div>
          <div className="key function" data-key="F11">F11</div>
          <div className="key function" data-key="F12">F12</div>
        </div>

        {/* Number Row */}
        <div className="row">
          <div className="key" data-key="~">~</div>
          <div className="key" data-key="1">1</div>
          <div className="key" data-key="2">2</div>
          <div className="key" data-key="3">3</div>
          <div className="key" data-key="4">4</div>
          <div className="key" data-key="5">5</div>
          <div className="key" data-key="6">6</div>
          <div className="key" data-key="7">7</div>
          <div className="key" data-key="8">8</div>
          <div className="key" data-key="9">9</div>
          <div className="key" data-key="0">0</div>
          <div className="key" data-key="-">-</div>
          <div className="key" data-key="=">=</div>
          <div className="key backspace" data-key="BACKSPACE">Backspace</div>
        </div>

        {/* QWERTY Row */}
        <div className="row">
          <div className="key tab" data-key="TAB">Tab</div>
          <div className="key" data-key="Q">Q</div>
          <div className="key" data-key="W">W</div>
          <div className="key" data-key="E">E</div>
          <div className="key" data-key="R">R</div>
          <div className="key" data-key="T">T</div>
          <div className="key" data-key="Y">Y</div>
          <div className="key" data-key="U">U</div>
          <div className="key" data-key="I">I</div>
          <div className="key" data-key="O">O</div>
          <div className="key" data-key="P">P</div>
          <div className="key" data-key="[">[</div>
          <div className="key" data-key="]">]</div>
          <div className="key backslash" data-key="BACKSLASH">\</div>
        </div>

        {/* ASDF Row */}
        <div className="row">
          <div className="key capslock" data-key="CAPSLOCK">Caps Lock</div>
          <div className="key" data-key="A">A</div>
          <div className="key" data-key="S">S</div>
          <div className="key" data-key="D">D</div>
          <div className="key" data-key="F">F</div>
          <div className="key" data-key="G">G</div>
          <div className="key" data-key="H">H</div>
          <div className="key" data-key="J">J</div>
          <div className="key" data-key="K">K</div>
          <div className="key" data-key="L">L</div>
          <div className="key semicolon" data-key="SEMICOLON">;</div>
          <div className="key quote" data-key="QUOTE">'</div>
          <div className="key enter" data-key="ENTER">Enter</div>
        </div>

        {/* ZXCV Row */}
        <div className="row">
          <div className="key shift" data-key="SHIFT">Shift</div>
          <div className="key" data-key="Z">Z</div>
          <div className="key" data-key="X">X</div>
          <div className="key" data-key="C">C</div>
          <div className="key" data-key="V">V</div>
          <div className="key" data-key="B">B</div>
          <div className="key" data-key="N">N</div>
          <div className="key" data-key="M">M</div>
          <div className="key comma" data-key=",">,</div>
          <div className="key period" data-key=".">.</div>
          <div className="key slash" data-key="/">/</div>
          <div className="key right-shift" data-key="RIGHTSHIFT">Shift</div>
        </div>

        {/* Control Keys Row */}
        <div className="row">
          <div className="key control" data-key="CTRL">Ctrl</div>
          <div className="key alt" data-key="ALT">Alt</div>
          <div className="key space" data-key="SPACE">Space</div>
          <div className="key altgr" data-key="ALTGR">AltGr</div>
          <div className="key fn" data-key="FN">Fn</div>
          <div className="key right-control" data-key="RIGHTCTRL">Ctrl</div>
        </div>
      </div>

      {/* Num Pad */}
      <div className="num-pad">
        <div className="key num" data-key="7">7</div>
        <div className="key num" data-key="8">8</div>
        <div className="key num" data-key="9">9</div>
        <div className="key num" data-key="4">4</div>
        <div className="key num" data-key="5">5</div>
        <div className="key num" data-key="6">6</div>
        <div className="key num" data-key="1">1</div>
        <div className="key num" data-key="2">2</div>
        <div className="key num" data-key="3">3</div>
        <div className="key num zero" data-key="0">0</div>
        <div className="key num" data-key=".">.</div>
        <div className="key num enter" data-key="ENTER">Enter</div>
      </div>
    </div>
  );
};

export default Keyboard;

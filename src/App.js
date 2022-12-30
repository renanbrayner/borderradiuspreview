import React, { useState } from 'react';
import './App.css';

function App() {
  // RX
  const [topLeftRx, setTopLeftRx] = useState('38')
  const [topRightRx, setTopRightRx] = useState('73')
  const [bottomLeftRx, setBottomLeftRx] = useState('36')
  const [bottomRightRx, setBottomRightRx] = useState('75')
  // RY
  const [topLeftRy, setTopLeftRy] = useState('65')
  const [topRightRy, setTopRightRy] = useState('69')
  const [bottomLeftRy, setBottomLeftRy] = useState('31')
  const [bottomRightRy, setBottomRightRy] = useState('47')

  // HANDLE INPUTS CHANGE
  const handleSliderChange = (e, setter) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setter(final);
  }

  //HANDLE COPY
  function copyHandleClick() {
    var copyText = document.getElementById("input");
    copyText.select();
    copyText.setSelectionRange(0, 99999); //FOR MOBILE DEVICES
    document.execCommand("copy");
    alert("Copied: " + copyText.value);
  }

  return (
    <div className='App'>
      <h1>Border Radius Previewer</h1>
      <h2>stop strugling with border radius.</h2>
      <p className='branding'>brought to you by <a href='https://renanbrayner.github.io/portfolio/' target='_blank' rel="noopener noreferrer">Renan Brayner.</a></p>

      <div className='div-sliders-container'>
        <div className='horizontal-sliders-container'>
          {/* sliders on top */}
          <input
            className='slider'
            type='range'
            min='0'
            max='100'
            onChange={(e) => handleSliderChange(e, setTopLeftRx)}
          />
          <input
            className='slider invert-horizontal'
            type='range'
            min='0'
            max='100'
            onChange={(e) => handleSliderChange(e, setTopRightRx)}
          />
        </div>
        <div className='vertical-sliders-div-container'>
          <div className='vertical-sliders-left'>
            {/* sliders on left */}
            <input
            className='slider vertical'
            type='range'
            min='0'
            max='100'
            onChange={(e) => handleSliderChange(e, setTopLeftRy)}
          />
          <input
            className='slider invert-vertical'
            type='range'
            min='0'
            max='100'
            onChange={(e) => handleSliderChange(e, setBottomLeftRy)}
          />
          </div>
          <div 
            className='the-div'
            style={{
              backgroundColor: '#00909e',
              margin: '10px',
              borderRadius: `${topLeftRx}% ${topRightRx}% ${bottomRightRx}% ${bottomLeftRx}% / ${topLeftRy}% ${topRightRy}% ${bottomRightRy}% ${bottomLeftRy}%`
            }}
          />
          <div className='vertical-sliders-right'>
            {/* sliders on right */}
            <input
            className='slider vertical'
            type='range'
            min='0'
            max='100'
            onChange={(e) => handleSliderChange(e, setTopRightRy)}
          />
          <input
            className='slider invert-vertical'
            type='range'
            min='0'
            max='100'
            onChange={(e) => handleSliderChange(e, setBottomRightRy)}
          />
          </div>
        </div>
        <div className='horizontal-sliders-container'>
          {/* sliders on bottom */}
          <input
            className='slider'
            type='range'
            min='0'
            max='100'
            onChange={(e) => handleSliderChange(e, setBottomLeftRx)}
          />
          <input
            className='slider invert-horizontal'
            type='range'
            min='0'
            max='100'
            onChange={(e) => handleSliderChange(e, setBottomRightRx)}
          />
        </div>
      </div>

      <div className='copy'>
        <p className='text'>border radius:</p>
        <input className='input' type='text' value={`${topLeftRx}% ${topRightRx}% ${bottomRightRx}% ${bottomLeftRx}% / ${topLeftRy}% ${topRightRy}% ${bottomRightRy}% ${bottomLeftRy}%`} id='input'/>
        <button className='button' onClick={copyHandleClick}>Copy text</button>
      </div>
    </div>
  );
}

export default App;

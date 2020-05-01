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
  const handleTopLeftRx = (e) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setTopLeftRx(final);
  }

  const handleTopRightRx = (e) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setTopRightRx(final);
  }

  const handleTopLeftRy = (e) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setTopLeftRy(final);
  }

  const handleBottomLeftRy = (e) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setBottomLeftRy(final);
  }

  const handleTopRightRy = (e) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setTopRightRy(final);
  }

  const handleBottomRightRy = (e) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setBottomRightRy(final);
  }

  const handleBottomLeftRx = (e) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setBottomLeftRx(final);
  }

  const handleBottomRightRx = (e) => {
    const textInput = e.target.value;
    const stringText = textInput.toString();
    const final = stringText;
    setBottomRightRx(final);
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
            onChange={handleTopLeftRx}
          />
          <input
            className='slider invert-horizontal'
            type='range'
            min='0'
            max='100'
            onChange={handleTopRightRx}
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
            onChange={handleTopLeftRy}
          />
          <input
            className='slider invert-vertical'
            type='range'
            min='0'
            max='100'
            onChange={handleBottomLeftRy}
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
            onChange={handleTopRightRy}
          />
          <input
            className='slider invert-vertical'
            type='range'
            min='0'
            max='100'
            onChange={handleBottomRightRy}
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
            onChange={handleBottomLeftRx}
          />
          <input
            className='slider invert-horizontal'
            type='range'
            min='0'
            max='100'
            onChange={handleBottomRightRx}
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

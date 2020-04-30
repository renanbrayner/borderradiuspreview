import React, { useState } from 'react';
import Slider from 'react-input-slider';
import './App.css';

function App() {
  // RX
  const [topLeftRx, setTopLeftRx] = useState('38%')
  const [topRightRx, setTopRightRx] = useState('73%')
  const [bottomLeftRx, setBottomLeftRx] = useState('36%')
  const [bottomRightRx, setBottomRightRx] = useState('75%')
  // RY
  const [topLeftRy, setTopLeftRy] = useState('65%')
  const [topRightRy, setTopRightRy] = useState('69%')
  const [bottomLeftRy, setBottomLeftRy] = useState('31%')
  const [bottomRightRy, setBottomRightRy] = useState('47%')

  // HANDLE INPUTS CHANGE
  const handleTopLeftRx = (e) => {
    const textInput = e.x;
    const stringText = textInput.toString();
    const final = stringText.concat('%');
    setTopLeftRx(final);
  }

  const handleTopRightRx = (e) => {
    const textInput = e.x;
    const stringText = textInput.toString();
    const final = stringText.concat('%');
    setTopRightRx(final);
  }

  const handleTopLeftRy = (e) => {
    const textInput = e.y;
    const stringText = textInput.toString();
    const final = stringText.concat('%');
    setTopLeftRy(final);
  }

  const handleBottomLeftRy = (e) => {
    const textInput = e.y;
    const stringText = textInput.toString();
    const final = stringText.concat('%');
    setBottomLeftRy(final);
  }

  const handleTopRightRy = (e) => {
    const textInput = e.y;
    const stringText = textInput.toString();
    const final = stringText.concat('%');
    setTopRightRy(final);
  }

  const handleBottomRightRy = (e) => {
    const textInput = e.y;
    const stringText = textInput.toString();
    const final = stringText.concat('%');
    setBottomRightRy(final);
  }

  const handleBottomLeftRx = (e) => {
    const textInput = e.x;
    const stringText = textInput.toString();
    const final = stringText.concat('%');
    setBottomLeftRx(final);
  }

  const handleBottomRightRx = (e) => {
    const textInput = e.x;
    const stringText = textInput.toString();
    const final = stringText.concat('%');
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
      <p className='branding'>brought to you by <a href='https://github.com/renanbrayner' target='_blank' rel="noopener noreferrer">Renan Brayner.</a></p>

      <div className='div-sliders-container'>
        <div className='horizontal-sliders-container'>
          <Slider
            styles={{
              active: {
                backgroundColor: '#27496d'
              }
            }}
            x={topLeftRx.slice(0, -1)}
            axis='x'
            onChange={handleTopLeftRx}
          />
          <Slider
            styles={{
              active: {
                backgroundColor: '#27496d'
              }
            }}
            x={topRightRx.slice(0, -1)}
            axis='x'
            xreverse={true}
            onChange={handleTopRightRx}
          />
        </div>
        <div className='vertical-sliders-div-container'>
          <div className='vertical-sliders'>
            <Slider 
              styles={{
                active: {
                  backgroundColor: '#27496d'
                }
              }}
              y={topLeftRy.slice(0, -1)}
              axis='y'
              onChange={handleTopLeftRy}
            />
            <Slider 
              styles={{
                active: {
                  backgroundColor: '#27496d'
                }
              }}
              y={bottomLeftRy.slice(0, -1)}
              axis='y'
              yreverse={true}
              onChange={handleBottomLeftRy}
            />
          </div>
          <div 
            style={{
              backgroundColor: '#00909e',
              height: '400px', width: '400px',
              margin: '10px',
              borderRadius: `${topLeftRx} ${topRightRx} ${bottomRightRx} ${bottomLeftRx} / ${topLeftRy} ${topRightRy} ${bottomRightRy} ${bottomLeftRy}`
            }}
          />
          <div className='vertical-sliders'>
            <Slider 
              styles={{
                active: {
                  backgroundColor: '#27496d'
                }
              }}
              y={topRightRy.slice(0, -1)}
              axis='y'
              onChange={handleTopRightRy}
            />
            <Slider 
              styles={{
                active: {
                  backgroundColor: '#27496d'
                }
              }}
              y={bottomRightRy.slice(0, -1)}
              axis='y'
              yreverse={true}
              onChange={handleBottomRightRy}
            />
          </div>
        </div>
        <div className='horizontal-sliders-container'>
          <Slider
            styles={{
              active: {
                backgroundColor: '#27496d'
              }
            }}
            x={bottomLeftRx.slice(0, -1)}
            axis='x'
            onChange={handleBottomLeftRx}
          />
          <Slider
            styles={{
              active: {
                backgroundColor: '#27496d'
              }
            }}
            x={bottomRightRx.slice(0, -1)}
            axis='x'
            xreverse={true}
            onChange={handleBottomRightRx}
          />
        </div>
      </div>

      <div className='copy'>
        <p className='text'>border radius:</p>
        <input className='input' type='text' value={`${topLeftRx} ${topRightRx} ${bottomRightRx} ${bottomLeftRx} / ${topLeftRy} ${topRightRy} ${bottomRightRy} ${bottomLeftRy}`} id='input'/>
        <button className='button' onClick={copyHandleClick}>Copy text</button>
      </div>
    </div>
  );
}

export default App;

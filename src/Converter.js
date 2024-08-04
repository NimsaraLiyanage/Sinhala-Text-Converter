import React, { useState } from 'react';
import sinhalaToRoman from './mapping';
import './Converter.css';

const Converter = () => {
  const [sinhalaText, setSinhalaText] = useState('');
  const [romanizedText, setRomanizedText] = useState('');

  const convertSinhalaToRoman = (text) => {
    let romanText = '';
    for (let char of text) {
      romanText += sinhalaToRoman[char] || char;
    }
    return romanText;
  };

  const handleConvert = () => {
    const convertedText = convertSinhalaToRoman(sinhalaText);
    setRomanizedText(convertedText);
  };

  return (
    <div className="converter">
      <h1>Sinhala Text Converter</h1>
      <textarea
        value={sinhalaText}
        onChange={(e) => setSinhalaText(e.target.value)}
        placeholder="Enter Sinhala text here"
      ></textarea>
      <button onClick={handleConvert}>Convert</button>
      <textarea
        value={romanizedText}
        readOnly
        placeholder="Romanized text will appear here"
      ></textarea>
    </div>
  );
};

export default Converter;

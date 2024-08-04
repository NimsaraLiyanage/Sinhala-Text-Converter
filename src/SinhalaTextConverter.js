// src/SinhalaTextConverter.js
import React, { useState } from 'react';

const SinhalaTextConverter = () => {
  const [sinhalaText, setSinhalaText] = useState('');
  const [romanizedText, setRomanizedText] = useState('');

  const convertToRomanized = (text) => {
    // Simplified conversion logic
    const conversionMap = {
      'අ': 'a',
      'ක': 'ka',
      'න': 'na',
      'බල': 'bala',
      'මහ': 'maha',
      'කන්ද': 'kanda',
      'රත්ත': 'ratta',
      'අම්මා': 'amma',
      'පපා': 'papa',
      'සිංහල': 'sinhala',
      'නිම්සර': 'nimsara',
    };
    return conversionMap[text] || text;
  };

  const handleConvert = () => {
    setRomanizedText(convertToRomanized(sinhalaText));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Sinhala Text Converter</h1>
      <textarea
        value={sinhalaText}
        onChange={(e) => setSinhalaText(e.target.value)}
        placeholder="Enter Sinhala text here"
        style={{ width: '80%', height: '100px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleConvert} style={{ marginBottom: '10px' }}>Convert</button>
      <br />
      <textarea
        value={romanizedText}
        readOnly
        placeholder="Romanized text will appear here"
        style={{ width: '80%', height: '100px' }}
      />
    </div>
  );
};

export default SinhalaTextConverter;

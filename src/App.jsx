import React, { useState } from 'react';
import './App.css';
function App() {
  const [side1, setSide1] = useState('');
  const [side2, setSide2] = useState('');
  const [side3, setSide3] = useState('');
  const [result, setResult] = useState('');
  const kiemTraTamGiac = () => {
    const a = parseFloat(side1);
    const b = parseFloat(side2);
    const c = parseFloat(side3);

    if (kiemTraTamGiacHopLe(a, b, c)) {
      setResult('Các giá trị tạo thành một tam giác.');
    } else {
      setResult('Các giá trị không tạo thành một tam giác.');
    }
  };

  const kiemTraTamGiacHopLe = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
  };

  return (
    <div className="Main">
      <h2>Nhập thông tin tam giác</h2>

      <label htmlFor="side1">Cạnh 1:</label>
      <input
        type="number"
        id="side1"
        placeholder="Nhập cạnh 1"
        value={side1}
        onChange={(e) => setSide1(e.target.value)}
      />

      <label htmlFor="side2">Cạnh 2:</label>
      <input
        type="number"
        id="side2"
        placeholder="Nhập cạnh 2"
        value={side2}
        onChange={(e) => setSide2(e.target.value)}
      />

      <label htmlFor="side3">Cạnh 3:</label>
      <input
        type="number"
        id="side3"
        placeholder="Nhập cạnh 3"
        value={side3}
        onChange={(e) => setSide3(e.target.value)}
      />

      <button id="button1"onClick={kiemTraTamGiac}>Kiểm tra</button>

      <div id="result">{result}</div>
    </div>
  );
}

export default App;

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


  export {kiemTraTamGiac,kiemTraTamGiacHopLe};
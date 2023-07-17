function countNumbersTV(input) {
    const vietTranText = {
      aw: 'ă',
      aa: 'â',
      dd: 'đ',
      ee: 'ê',
      oo: 'ô',
      ow: 'ơ',
      w: 'ư'
    };
  
    let numVietText = 0;
    // Nhan thay cac chu cai chuyen doi thuong bat dau bang a d e o w nen check moi cac tu nay cho nhanh 
    for (let i = 0; i < input.length; i++) {
      const currentText = input[i];
  
      if (currentText === 'a' || currentText === 'e' || currentText === 'o' || currentText === 'w' || currentText === 'd') {
        const bothText = currentText + input[i + 1];
  
        if (vietTranText.hasOwnProperty(bothText)) {
          numVietText++;
          i++; // Bỏ qua ký tự kết hợp đã tìm thấy
        } else if (vietTranText.hasOwnProperty(currentText)) {
          numVietText++;
        }
      }
    }
  
    return numVietText;
  }
  
  // Ví dụ sử dụng
  const input = 'hfdawhwhcoomdd';
  const numbers = countNumbersTV(input);
  console.log('Số lượng chữ cái Tiếng Việt:', numbers);
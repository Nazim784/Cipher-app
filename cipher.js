function encrypt(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode((charCode - 65 + parseInt(key)) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode((charCode - 97 + parseInt(key)) % 26 + 97);
      } else {
        result += text[i];
      }
    }
    return result;
  }

  function decrypt(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode((charCode - 65 - parseInt(key) + 26) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode((charCode - 97 - parseInt(key) + 26) % 26 + 97);
      } else {
        result += text[i];
      }
    }
    return result;
  }

  function handleEncrypt() {
    let text = document.getElementById("input-text").value;
    let key = document.getElementById("input-key").value;
    let result = encrypt(text, key);
    document.getElementById("output").value = result;
  }

  function handleDecrypt() {
    let text = document.getElementById("input-text").value;
    let key = document.getElementById("input-key").value;
    let result = decrypt(text, key);
    document.getElementById("output").value = result;
  }
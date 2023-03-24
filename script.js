document.getElementById('encode').onclick = () => {
  var str = document.getElementById('in-code').value;
  try {
    if (str.length > 0) {
      document.getElementById('out').innerText = btoa(unescape(encodeURIComponent(encode(str))));
    } else {
      document.getElementById('out').innerText = '[...]';
      document.getElementById('out').setAttribute("style", "color: #fff;")
    }
  } catch (error) {
    document.getElementById('out').innerText = '[No se admiten caracteres especiales]';
    document.getElementById('out').setAttribute("style", "color: orange;")
  }
}

document.getElementById('decode').onclick = () => {
  var str = document.getElementById('in-deco').value;
  try {
    if (str.length > 0) {
      document.getElementById('ini').innerText = decode(decodeURIComponent(escape(atob(str))));
    } else {
        document.getElementById('ini').innerText = '[...]';
        document.getElementById('ini').setAttribute("style", "color: #fff;")
    }
  } catch (error) {
    document.getElementById('ini').innerText = '[CADENA CORRUPTA]';
    document.getElementById('ini').setAttribute("style", "color: orange;")
  }
}

function encode (str) {
    let cad1 = ''
    let cad2 = ''

    for(let i = 0; i < str.length; i++) {
        if((i + 1) % 2 == 0) {
            cad1 = cad1 + str.charAt(i)
        }else {
            cad2 = cad2 + str.charAt(i)
        }
    }

    return cad2 + cad1
}

function decode(str) {
    let cad1 = str.substring(0, (str.length + 1) / 2)
    let cad2 = str.substring(cad1.length , str.length)

    let tc = str.length
    str = ''
    let c1 = 0
    let c2 = 0
    for(let i = 0; i < tc; i++) {
        if((i % 2) == 0) {
            str = str + cad1.charAt(c1)
            c1++
        }else {
            str = str + cad2.charAt(c2)
            c2++
        }
    }
    return str
}

function onCopy(str) {
    let text = document.querySelector(`#${str}`).innerText;

    if (text == '[...]') {
      text = 'EnKids 😊'
    }
  
    document.querySelector('#pop-copy').setAttribute('style', 'visibility: visible;')
  
    navigator.clipboard.writeText(text)
      .then(() => {
        
        document.querySelector('#pop-copy').classList.add('show');
        setTimeout(()=>{
          document.querySelector('#pop-copy').classList.remove('show');
          setTimeout(() => {
            document.querySelector('#pop-copy').setAttribute('style', 'visibility: hidden;')
          }, 500)
        }, 1000);
      }, (err) => {
        console.log('COPY: E-'+err);
      });
}
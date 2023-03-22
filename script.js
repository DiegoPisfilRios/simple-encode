document.getElementById('encode').onclick = () => {
    var str = document.getElementById('in-code').value
    document.getElementById('out').innerText =  btoa(encode(str));
}

document.getElementById('decode').onclick = () => {
    var str = document.getElementById('in-deco').value
    document.getElementById('ini').innerText = decode(atob(str));
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
            str = str +cad1.charAt(c1)
            c1++
        }else {
            str = str + cad2.charAt(c2)
            c2++
        }
    }
    return str
}
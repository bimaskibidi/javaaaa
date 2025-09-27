// untuk mengubah atau mengisi elemen menggunakan jv
// mengubah title
document.title = 'Kink Bima'
const body = document.body

body.append("hello world")
// mengubah isi note: kita harus pake body.append(isi)
const h1 = document.createElement("h1")
h1.textContent = 'helo world'

body.append(h1)
// note:untuk menambah elemen baru kita haeus pakr inner html
const myname = document.createElement('button')
myname.innerHTML = ' <marquee> buynow </marquee>'
body.append(myname)

// mengubah element menggunakan id atau styling
const btn = document.getElementById('btn')

btn.style.padding = '20px'

//styling pake class
const btn2 = document.querySelector('.btn2')
btn2.style.padding = '20px'

// event
function ganti() {
    btn.style.background = 'blue'
    const newt = document.createElement('h3')
    newt.textContent = 'anjai'
    body.append(newt)
}
// ganti ketika di klik 
function gantitext( ){
    btn.textContent = 'anjai'
}
// ubah text ketika di hover
function ubahtext() {
    btn.textContent = 'click me'
}
// ubah text ketika mouse di luar


// homework
const teks = document.createElement('h2')
teks.textContent = 'bimaganteng'
function munsulkantext( ){

    body.append(teks)

}
function warnateks() {
  btn2.style.background = 'red'
  teks.style.color = 'blue'
}
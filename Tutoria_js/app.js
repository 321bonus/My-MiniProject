// let name = prompt('Hey')
// console.log('120'+20)
// console.log(name)

let lotto_number = prompt ("กรอกเลข: ")
console.log(lotto_number)
console.log(Math.floor(Math.random() * 100)) // ถ้าหากrandom ไม่เกิน 9 ให้ใส่ 10 หากจะให้เกิน ให้ใส่ 11

// หากใส่Math.floor ข้างล่างอีกรอบจะเป็นการเรียกใช้ แต่จะเป็นสุ่มเลขใหม่ขึ้นอีกที ทั้ง console และ Website page

// innerHTML สามารถใส่ Code HTML ลงไปได้ และ ส่วน InnerText เราจะสามารถใส่ได้แค่ Text เท่านั้น
document.getElementById("result").innerHTML = Math.floor(Math.random() * 100);
document.getElementById("guess").innerHTML = lotto_number;

// วิธีทำให้เลขที่สุมนั้นเท่ากัน ทั้งในconsole และ หน้าเว็บเพจ
// const randoms = (Math.floor(Math.random() * 100))
// console.log(lotto_number)
// console.log(randoms)

// document.getElementById('result').innerHTML = randoms;
// document.getElementById('guess').innerHTML = lotto_number;
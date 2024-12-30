let paragraph = document.querySelector(".text")
let text = "Franco".repeat(400)
paragraph.textContent = text
paragraph.innerHTML = paragraph.textContent.replace(/\S/g,"<span>$&</span>")
// asd
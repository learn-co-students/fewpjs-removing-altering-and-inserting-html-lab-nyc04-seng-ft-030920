let main = document.querySelector("#main")
main.remove("main")

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)

newHeader.id = "victory"
newHeader.innerHTML = "is the champion"
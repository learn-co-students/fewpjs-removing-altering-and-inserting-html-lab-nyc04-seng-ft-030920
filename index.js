// No Longer Has DOM Node - Delete Main
document.querySelector('main#main').remove();

// Has a newHeader Variable that points to node 'h1#victory'
const newHeader = document.createElement("h1")
newHeader.id = "victory"
//Has a newHeader variable that points to node 'h1#victory' w/ Daryl is the champion
newHeader.innerHTML = "Daryl is the champion!";



let str = document.getElementById('Element');
let letter = "";
for(let i = 0; i < 100000; i++){
  letter += str.textContent + "\n";
}
document.body.textContent += letter;
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.color = "#B0C4DE";
document.body.style.backgroundColor = "#FFFDD0";
document.body.style.fontSize = "50px";

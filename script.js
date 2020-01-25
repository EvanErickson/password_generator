let generateBtn = document.querySelector("#generate");

let writePassword = function(){
  prompt('Password:', 
      Math.random().toString(36).slice(2) + 
      Math.random().toString(36).slice(2)
  );
}

generateBtn.addEventListener("click", writePassword);

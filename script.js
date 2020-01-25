let generateBtn = document.querySelector("#generate");

let writePassword = function(){
  prompt('Here is your shiny new password:', 
      Math.random().toString(36).slice(2) + 
      Math.random().toString(36).slice(2)
  );
}

generateBtn.addEventListener("click", writePassword);

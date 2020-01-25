let generateBtn = document.getElementById('generate');


function makeid(length) {
  //where did they get length from?
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$';
    var charactersLength = characters.length;
    //I'm confused about why you'd set charactersLength = characters.length
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
// document.addEventListener('click').getElementById('password').textContent = makeid(8);
document.getElementById('password').textContent = makeid(8);





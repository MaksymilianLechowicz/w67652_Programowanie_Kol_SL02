function requiredValidation(pole){
    console.log(`[name='${pole.name}'] + span.error`)
    const error = document.querySelector(`[name='${pole.name}'] + span.error`);
   
    console.log(error)
    if(!pole.value || pole.value == ''){
        error.innerHTML = 'Pole jest wymagane !!';
        return 0;
    }
    else{
        error.innerHTML = 'ok';
        return 1;
    }
}
const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
}
)
function lengValidation(pole){
    console.log(`[name='${pole.name}']+ span.lenError`)
    const lenError = document.querySelector(`[name='${pole.name}'] + span.error`);
    console.log(lenError)
    console.log(pole.value.length >= 3);
    if(pole.value.length >= 3){
        lenError.innerHTML = 'ok';
        return 1;
    }
    else{
        lenError.innerHTML = 'Długość Loginu jest za krótka';
        return 0;
    }
}

function emailValidation(pole){
    console.log(`[name='${pole.name}']+ span.EmError`)
    const EmError = document.querySelector(`[name='${pole.name}'] + span.error`);
    console.log(EmError)
    const reges = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if (reges.test(pole.value)){
        EmError.innerHTML = "ok"
        return 1;
    }
    else{
        EmError.innerHTML = "Niepoprawy Adres Email"
        return 0;
    }
}
function passValidation(pole){
    console.log(`[name='${pole.name}'+span.passError]`)
    const passError = document.querySelector(`[name='${pole.name}']+ span.error`);
    console.log(passError)
    const regexs =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    if (regexs.test(pole.value)){
        passError.innerHTML = "ok"
        return 1;
    }
    else{
        passError.innerHTML = "Hasło nie posiada wymaganych znaków takich jak np liczby lub znaku specjalnego lub jest za krótkie, hasło powinno być dłuższe niż 6 znaków"
        return 0;
    }
    }
function compareValidation(pole, pole2){
    console.log(`[name='${pole.name}'+span.pass2Error]`)
    const pass2Error = document.querySelector(`[name='${pole.name}']+ span.error`);
    console.log(pass2Error)
    if (pole.value == pole2.value){
        pass2Error.innerHTML = "ok"
        return 1;
    }
    else{
        pass2Error.innerHTML = "Hasła różnią się"
        return 0;
    }
}
const name = document.querySelector("[name='name']");
const email = document.querySelector("[name='email']")
const pass = document.querySelector("[name='pass']")
const pass2 = document.querySelector("[name='pass2']")

name.addEventListener('input', ()=>{    
    requiredValidation(name);
    lengValidation(name)
})

email.addEventListener('input', ()=>{ 
    requiredValidation(email);
    emailValidation(email);
})
pass.addEventListener('input',()=>{
    requiredValidation(pass)
    passValidation(pass)
})
pass2.addEventListener('input',()=>{
    compareValidation(pass2, pass)
})

const finish = document.getElementById("Bravo");
form.addEventListener('submit',()=>{
    event.preventDefault();
    if(lengValidation(name) && emailValidation(email) && passValidation(pass) && compareValidation(pass2, pass)){    
    finish.innerHTML ="Poprawnie";
}
     else{
    finish.innerHTML = "Nie wypełnione zostały odpowiednie pola";
     }
 })
const btnR = document.getElementById('red');
const btnY = document.getElementById('yellow');
const btnG = document.getElementById('green');
let activebtn;


    btnR.addEventListener('click', () => {
        if(activebtn){
            console.log(activebtn)
            activebtn.classList.remove('selectedRed');
            activebtn.classList.remove('selectedYellow');
            activebtn.classList.remove('selectedGreen');
        }
        btnR.classList.add('selectedRed');
        activebtn = btnR;
    })

    btnY.addEventListener('click', () => {
        if(activebtn){
            console.log(activebtn)
            activebtn.classList.remove('selectedRed');
            activebtn.classList.remove('selectedYellow');
            activebtn.classList.remove('selectedGreen');
        }
        btnY.classList.add('selectedYellow');
        activebtn = btnY;
    })
    btnG.addEventListener('click', () => {
        if(activebtn){
            console.log(activebtn)
            activebtn.classList.remove('selectedRed');
            activebtn.classList.remove('selectedYellow');
            activebtn.classList.remove('selectedGreen');
        }
        btnG.classList.add('selectedGreen');
        activebtn = btnG;
    })
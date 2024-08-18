const printotp = document.getElementById('print-otp');
const otpdisplay = document.getElementById('otp-display');

// function to generate random otp 

function generateOTP(length=6){
    let otp = '';
    const digits = '0123456789';
    for(let i=0; i<length; i++){
        otp+=digits[Math.floor(Math.random()*digits.length)]

    }
    return otp;
}

// button click handelling

printotp.addEventListener('click',()=>{
    const otp = generateOTP();
    otpdisplay.textContent = `your otp is :${otp}`
});




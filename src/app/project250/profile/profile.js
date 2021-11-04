const { url } = require("inspector");

let request =new XMLHttpRequest();
request.send('POST',url('http://localhost:50913/profile'))




const card = document.querySelector('h-100')
const fname=document.getElementById('fullName');
const mname=document.getElementById('middle_name');
const surname=document.getElementById('surname');
const dob=document.getElementById('dob');
const country=document.getElementById('country');
const passport_number=document.getElementById('PassPort');
const date_issued=document.getElementById('date_issued');
const expiration_date=document.getElementById('expiration_date');

request.responseType ='card'

card.onsubmit =function(e){
    if(fname.value ===''|| surname.value ===''){
        e.preventDefault();
        fname.textContent =request.response;
        surname.textContent =request.response;

    }else{
        if(mname.value ===''|| country.value ===''){
            e.preventDefault();
            mname.textContent =request.response;
            country.textContent =request.response;
        }
        if(dob.value ===''|| date_issued.value ==='' || expiration_date.value ===''||passport_number.value ===''){
            e.preventDefault();
            dob.textContent =request.response;
            expiration_date.textContent =request.response;
            date_issued.textContent =request.response;
            passport_number.textContent =request.response;
        }
    } 
           

}

 request.send();

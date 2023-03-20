const pwd = document.getElementById("pwd");
const rpwd = document.getElementById("rpwd");
const form = document.getElementById("form");
var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/;;

form.addEventListener("submit", (e) => {

    if(pwd.value.match(passw)){
        pwd.classList.remove("is-invalid");
    }
    else{
        e.preventDefault();
        pwd.classList.add("is-invalid");} 

    if (pwd.value !== rpwd.value) {
        rpwd.classList.add("is-invalid");
        e.preventDefault();
    }
});
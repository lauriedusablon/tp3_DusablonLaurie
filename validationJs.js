const validateForm = () => {

    let noError = true;

    let firstNameInput = document.getElementById('firstName')
    let nameInput = document.getElementById('name')
    let dateOfBirthInput = document.getElementById('dateOfBirth')
    let femaleInput = document.getElementById('female')
    let maleInput = document.getElementById('male')
    let adressInput = document.getElementById('adress')
    let cityInput = document.getElementById('city')
    let postalCodeInput = document.getElementById('postalCode')
    let emailInput = document.getElementById('email')
    let recetteInput= document.getElementById('recette')
    
    const firstName = firstNameInput.value.trim();
    const name = nameInput.value.trim();
    const dateOfBirth = dateOfBirthInput.value.trim();
    const adress = adressInput.value.trim();
    const city = cityInput.value.trim();
    const postalCode = postalCodeInput.value.trim();
    const email = emailInput.value.trim();
    const recette = recetteInput.value.trim();
    
    if (firstName == ''){
        setError(firstNameInput, "Le prénom ne peut pas être vide.")
        noError = false;
    }
    else if (firstName.length > 25){
        setError(firstNameInput, "Le prénom ne peut pas dépasser 25 caractères.")
        noError= false;
    }
    else{
        setSuccess(firstNameInput);
    }

if (name == ''){
    setError(nameInput, "Le nom de famille ne peut pas être vide.")
    noError = false;
}
else if (name.length > 25){
    setError(nameInput, "Le nom de famille ne peut pas dépasser 25 caractères.")
    noError= false;
}

else{
    setSuccess(nameInput);
}

if (dateOfBirth == ''){
    setError(dateOfBirthInput, "La date de naissance ne peut pas être vide.")
    noError = false;
}

else{
    setSuccess(dateOfBirthInput);
}

if (!maleInput.checked || !femaleInput.checked) {
    setError(femaleInput.closest('.form__input-control'), "Choisissez votre sexe");
    noError = false;
} else {
    setSuccess(femaleInput.closest('.form__input-control'));
}


if(!isValidEmail(email)){
    setError(emailInput, "Le courriel n'est pas valide.");
    noError = false;
}

else{
    setSuccess(emailInput);
}

if (adress == ''){
    setError(adressInput, "L'adresse ne peut pas être vide.")
    noError = false;
}
else if (adress.length > 60){
    setError(adressInput, "L'adresse' ne peut pas dépasser 60 caractères.")
    noError= false;
}
else{
    setSuccess(adressInput);
}

if (city == ''){
    setError(cityInput, "La ville ne peut pas être vide.")
    noError = false;
}
else if (city.length > 30){
    setError(cityInput, "La ville ne peut pas dépasser 60 caractères.")
    noError= false;
}
else{
    setSuccess(cityInput);
}

if (postalCode == ''){
    setError(postalCodeInput, "Le code postal ne peut pas être vide.")
    noError = false;
}
else if (postalCode.length > 7){
    setError(postalCodeInput, "Le code postal ne peut pas dépasser 7 caractères.")
    noError= false;
}
else{
    setSuccess(postalCodeInput);
}

if (recette==''){
    setError(recetteInput, "Le champs ne peut être vide.")
    noError = false;
}

else if (recette.length > 2000){
    setError(recetteInput, "Le message ne peut dépasser 2000 caractères.")
    noError= false;
}

else{
    setSuccess(recetteInput);
}

return noError;
}



const setError = (input, message) => {
    const inputControl =  input.parentElement;
    const errorDisplay = inputControl.querySelector('.form__error-message');  

    errorDisplay.innerText = message; 
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = input => {
    const inputControl =  input.parentElement;
    const errorDisplay = inputControl.querySelector('.form__error-message');  

    errorDisplay.innerText = '' ;
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
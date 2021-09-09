// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC0sISKisvjbKjnyXgLysMb75-0K-p2ZHY",
    authDomain: "myportfolio-form.firebaseapp.com",
    databaseURL: "https://myportfolio-form-default-rtdb.firebaseio.com",
    projectId: "myportfolio-form",
    storageBucket: "myportfolio-form.appspot.com",
    messagingSenderId: "203045126426",
    appId: "1:203045126426:web:026c9e5d92ee61d6a1aca3",
    measurementId: "G-B3ZFBQQPQG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections;
let contactInfo = firebase.database().ref('infos');

// Listen for a submit
const contactForm = document.querySelector('form');
const userName = document.querySelector('#nameInput');
const userEmail = document.querySelector('#emailInput');
const userMessage = document.querySelector('#messageInput');

contactForm.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    checkInputs();
}

// Check input values;
function checkInputs() {
    // Get input values;
    let nameValue = userName.value;
    let emailValue = userEmail.value;
    let messageValue = userMessage.value;

    if (nameValue === '' || nameValue === null || nameValue.length < 3) {
        // Show error;
        setErrorFor(userName);
        return false;
    }

    if (emailValue === '' || emailValue === null) {
         // Show error;
        setErrorFor(userEmail);
        return false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(userEmail);
        return false;
    }

    if (messageValue === '' || messageValue === null || messageValue.length < 8 || messageValue === ' ') {
        // Show error;
        setErrorFor(userMessage);
        return false;
    }

    saveContactInfo(nameValue, emailValue, messageValue);
    contactForm.reset(); 
}

function setErrorFor(input) {
    const inputGroup = input.parentElement // .input-group class;
    // Add error class;
    inputGroup.classList.toggle('error');

    //Remove error class after 2s;
    setTimeout(() => {
        inputGroup.classList.remove('error')
    }, 2000);
};

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Safe infos to firebase;
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set(
        {
            userName: name,
            userEmail: email,
            userMessage: message
        }
    )

    return showMessage();
};

// Showing message;
const success = document.querySelector('.success');

function showMessage() {
    success.classList.add('show');

    setTimeout(() => {
        success.classList.add('hide');
    }, 3000);

    success.classList.remove('hide');
};
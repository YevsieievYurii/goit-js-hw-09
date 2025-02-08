const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: ''
};

function handleInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        form.email.value = formData.email || '';
        form.message.value = formData.message || '';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    
    console.log('Form Data:', formData);
    
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
}

form.addEventListener('input', handleInput);

document.addEventListener('DOMContentLoaded', populateForm);

form.addEventListener('submit', handleSubmit);


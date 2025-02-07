const form = document.querySelector('.feedback-form'); // Знаходимо форму
const formData = { email: "", message: "" }; // Початковий об'єкт

const STORAGE_KEY = "feedback-form-state"; // Ключ для localStorage

// 🟢 Відстежуємо введення в поля форми
form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value; // Оновлюємо formData
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); // Зберігаємо у сховище
});

// 🟢 Завантажуємо збережені дані при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        Object.assign(formData, JSON.parse(savedData)); // Відновлюємо дані
        form.email.value = formData.email;
        form.message.value = formData.message;
    }
});


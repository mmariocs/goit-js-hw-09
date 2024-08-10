const formData = { email: '', message: '' };

const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const saveToLocalStorage = () => {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
};

loadFromLocalStorage();

form.addEventListener('input', evt => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  saveToLocalStorage();
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});

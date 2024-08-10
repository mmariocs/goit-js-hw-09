let formData = {
  email: '',
  message: '',
}

const form = document.querySelector('.feedback-form')
const emailInput = form.querySelector('input')
const messageInput = form.querySelector('textarea')

fillForm()

form.addEventListener('input', handleFormInpit)
form.addEventListener('submit', handleFormSubmit)

function handleFormInpit() {
  formData.email = emailInput.value.trim()
  formData.message = messageInput.value.trim()

  localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}

function handleFormSubmit(event) {
  event.preventDefault()

  const isEmptyField = Object.values(formData).some(
    value => value.trim() === ''
  )

  if (isEmptyField) {
    alert('Fill please all fields')
  } else {
    console.log(formData)
    event.currentTarget.reset()
    localStorage.removeItem('feedback-form-state')
    formData = { email: '', message: '' }
  }
}

function fillForm() {
  const savedData = localStorage.getItem('feedback-form-state')

  if (savedData) {
    formData = JSON.parse(savedData)

    emailInput.value = formData.email
    messageInput.value = formData.message
  }
}
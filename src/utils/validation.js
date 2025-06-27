export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password) => {
  return password.length >= 8
}

export const validatePhone = (phone) => {
  const phoneRegex = /^\+88\s01\d{9}$/
  return phoneRegex.test(phone)
}

export const validateRequired = (value) => {
  return value.trim().length > 0
}

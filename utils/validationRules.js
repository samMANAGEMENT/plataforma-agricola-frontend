// src/utils/validationrules.js
export const required = v => !!v || 'Campo obligatorio.'

export const email = v => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(v) || 'Correo electrónico inválido.'
}

export const minLength = length => v => {
  return (v && v.length >= length) || `Mínimo ${length} caracteres`
}

export const numeric = v => /^\d+$/.test(v) || 'Solo números permitidos.'


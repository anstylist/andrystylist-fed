import { http } from './http'
import { buildAndThrowProperError } from './AuthService'

export const newsletterSignup = async ({ email }) => {
  try {
    const { data } = await http.post(`/newsletter-emails-lists`, {
      data: {
        email
      }
    })
    
    return data
  } catch (error) {
    buildAndThrowProperError(error)
  }
}

export const contact = async ({ name, email, message }) => {
  try {
    const { data } = await http.post(`/contact`, {
      name,
      email,
      message
    })
    
    return data
  } catch (error) {
    buildAndThrowProperError(error)
  }
}
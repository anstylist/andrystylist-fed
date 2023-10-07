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


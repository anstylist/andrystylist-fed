import { http } from './http'

export const buildAndThrowProperError = (error) => {
  if ([401, 403, 400].includes(error.response.status)) {
    throw new Error('Invalid credentials — check your email and password out!')
  } else if (error.response.status === 500) {
    throw new Error('Server error — please try again later!')
  } else if (error.response?.data?.error?.message) {
    throw new Error(error.response.data.error.message)
  }

  throw error
}

export const login = async ({ identifier, password }) => {
  try {
    const { data } = await http.post('/auth/local', { identifier, password })
    
    return data
  } catch (error) {
    buildAndThrowProperError(error)
  }
}

export const getInitialUserData = async ({ token }) => {
  try {
    const { data } = await http.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
    return data
  } catch (error) {
    buildAndThrowProperError(error)
  }
}


export const signUp = async (newUser) => {
  try {
    const { data } = await http.post('/auth/local/register', newUser)

    return data?.user
  } catch ( error) {
    if (error.response?.data?.error?.message) {
      throw new Error(error.response.data.error.message)
    }
    throw error
  }
}

export const confirmEmail = async (confirmation) => {
  try {
    const { data } = await http.get(`/auth/email-confirmation?confirmation=${confirmation}`, {
      maxRedirects: 0
    })
    
    return data
  } catch (error) {
    buildAndThrowProperError(error)
  }
}

export const forgotPassword = async (email) => {
  try {
    const { data } = await http.post(`/auth/forgot-password`, {
      email
    })
    
    return data
  } catch (error) {
    buildAndThrowProperError(error)
  }
}
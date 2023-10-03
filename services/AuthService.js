import { http } from './http'

const buildAndThrowProperError = (error) => {
  console.log('--- AC - ', {
    error,
    status: error.response.status,
    message: error.response?.data?.error?.message,
  })
  
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
    console.log(error)
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

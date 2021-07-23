import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-62443-default-rtdb.firebaseio.com/'
})
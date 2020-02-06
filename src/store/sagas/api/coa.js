import Axios from './axios-instance'

const fetchCoaList = async () => {
  try {
    const { data } = await Axios({
      method: 'get',
      url: '/coa/list',
    })

    return data
  } catch (err) {
    return { ERROR: err }
  }
}

export default { fetchCoaList }

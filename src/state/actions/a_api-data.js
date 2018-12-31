import fetchWpDataController from '../../controllers/fetchWpDataController'

const apiData = (payload) => {
  return {
    type: 'apiData',
    payload
  }
}

export default () => {
  return (dispatch) => {
    const _dataHandler = (payload) => {
      dispatch(apiData(payload))
    }
    fetchWpDataController()
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
  }
}

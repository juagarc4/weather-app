const axios = require('axios')

class Searches {
  history = ['Madrid', 'barcelona']

  constructor() {
    // TODO: leer DB si  existe
  }

  get MapboxParams() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: 'es',
    }
  }

  async city(place = '') {
    //HTTP request
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.MapboxParams,
      })
      const resp = await instance.get()

      const { data } = resp
      if (resp.status === 200) {
        console.log(data)
      }

      // Return coincidences
      return []
    } catch (error) {
      return []
    }
  }
}

module.exports = Searches

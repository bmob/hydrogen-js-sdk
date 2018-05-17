const request = require('./request')
let Bmob = require('./bmob')
const error = require('./error')
const utils = require('./utils')
const { isObject, isString, isArray } = require('./dataType')
let list = []

class GeoPoint {
  constructor({ latitude, longitude }) {
    const point = this.validate(latitude, longitude)
    return {
      "__type": "GeoPoint",
      "latitude": latitude,
      "longitude": longitude
    }
  }
  validate(latitude, longitude) {
    if (latitude < -90.0) {
      throw new error(419)
    }
    if (latitude > 90.0) {
      throw new error(419)
    }
    if (longitude < -180.0) {
      throw new error(419)
    }
    if (longitude > 180.0) {
      throw new error(419)
    }
    return { latitude, longitude }
  }
}
module.exports = GeoPoint
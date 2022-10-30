export default class LocalStorage {
  /**
   * @param {string} name
   */
  constructor (name) {
    this.keyName = name
  }

  /**
   * @param {Object} data
   */
  save (data) {
    try {
      localStorage.setItem(this.keyName, JSON.stringify(data))
    } catch (e) {
      console.error(e.message)
    }
  }

  load () {
    let data = null
    try {
      data = JSON.parse(localStorage.getItem(this.keyName))
    } catch (e) {
      console.error(e.message)
      return null
    }

    return data
  }

  remove () {
    try {
      localStorage.removeItem(this.keyName)
    } catch (e) {
      console.error(e.message)
    }
  }
}

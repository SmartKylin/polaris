const storage = {
  set: (key, value) => {
    if (this.get(key) !== null) {
      this.remove(key)
      localStorage.setItem(key, JSON.stringify(value))
    }
  },
  get: key => {
    let val = JSON.parse(localStorage.getItem(key))
    return val || null
  },
  remove: key => {
    localStorage.removeItem(key)
  }
}

export default storage

/**
 * ローカルストレージへ保存
 * @param {string} name 保存するkey名
 * @param {Object} data
 */
function save (name, data) {
  try {
    localStorage.setItem(name, JSON.stringify(data))
  } catch (e) {
    console.error(e.message)
  }
}

/**
 * ローカルストレージから読み込み
 * @param {string} name 取り出すkey名
 */
function load (name) {
  let data = null
  try {
    data = JSON.parse(localStorage.getItem(name))
  } catch (e) {
    console.error(e.message)
    return null
  }

  return data
}

/**
 * ローカルストレージのキーを削除
 * @param {string} name
 */
function remove (name) {
  try {
    localStorage.removeItem(name)
  } catch (e) {
    console.error(e.message)
  }
}
module.exports = {
  save,
  load,
  remove
}

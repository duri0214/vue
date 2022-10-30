const LocalStorage = require('@/service/LocalStorage')

describe('LocalStorage.js', () => {
  const sampleValue = {'aaa': 'sample'}
  const keyName = 'item'
  beforeEach(() => {
    localStorage.clear()
  })
  it('存在しないキーを読み取ることはできません', () => {
    expect(LocalStorage.load(keyName)).toBeNull()
  })
  it('指定したキーで保存し、存在するキーで読み込む', () => {
    LocalStorage.save(keyName, sampleValue)
    LocalStorage.load(keyName)
    expect(LocalStorage.load(keyName)).toEqual(sampleValue)
  })
  it('存在するキーを削除することができる', () => {
    LocalStorage.save(keyName, sampleValue)
    LocalStorage.remove(keyName)
    expect(LocalStorage.load(keyName)).toBeNull()
  })
})

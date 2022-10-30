import LocalStorage from '@/service/LocalStorage'

describe('LocalStorage.js', () => {
  const sampleValue = {'aaa': 'sample'}
  afterEach(() => {
    localStorage.clear()
  })
  it('存在しないキーを読み取ることはできません', () => {
    const ls = new LocalStorage('item')
    expect(ls.load()).toBeNull()
  })
  it('指定したキーで保存し、存在するキーで読み込む', () => {
    const ls = new LocalStorage('item')
    ls.save(sampleValue)
    expect(ls.load()).toEqual(sampleValue)
  })
  it('存在するキーを削除することができる', () => {
    const ls = new LocalStorage('item')
    ls.save(sampleValue)
    ls.remove()
    expect(ls.load()).toBeNull()
  })
})

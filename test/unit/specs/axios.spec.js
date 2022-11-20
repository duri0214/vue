import { axiosWrapper } from '@/service/axios'
import MockAdapter from 'axios-mock-adapter'
import flushPromises from 'flush-promises'

describe('WeatherService.vue', () => {
  let mockAxios
  beforeEach(async () => {
    mockAxios = new MockAdapter(axiosWrapper)
  })

  it('axiosWrapperから /helloworld にgetアクセスして、期待したレスポンスを受け取る', async () => {
    const expectedValues = { id: '1234', name: 'test' }
    mockAxios.onGet('/helloworld').reply(200, {
      result: 0,
      message: 'success',
      detail: expectedValues
    })
    let response
    axiosWrapper.get('/helloworld').then(innerResponse => {
      response = innerResponse
    })
    await flushPromises()
    expect(mockAxios.history.get.length).toBe(1)
    expect(response.status).toBe(200)
    expect(response.data.detail).toEqual(expectedValues)
  })
})

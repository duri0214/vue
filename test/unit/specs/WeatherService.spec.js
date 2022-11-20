import { weatherService } from '@/service/WeatherService'

describe('WeatherService.vue', () => {
  it('getWeather関数が呼ばれたとき、期待したレスポンスを受け取る', async () => {
    const expectedValues = {
      'product': 'civillight',
      'init': '2022111918',
      'dataseries': [
        {
          'date': 20221120,
          'weather': 'lightrain',
          'temp2m': {
            'max': 14,
            'min': 12
          },
          'wind10m_max': 3
        }, {
          'date': 20221121,
          'weather': 'rain',
          'temp2m': {
            'max': 15,
            'min': 11
          },
          'wind10m_max': 3
        }, {
          'date': 20221122,
          'weather': 'cloudy',
          'temp2m': {
            'max': 17,
            'min': 12
          },
          'wind10m_max': 3
        }, {
          'date': 20221123,
          'weather': 'rain',
          'temp2m': {
            'max': 15,
            'min': 11
          },
          'wind10m_max': 4
        }, {
          'date': 20221124,
          'weather': 'clear',
          'temp2m': {
            'max': 20,
            'min': 12
          },
          'wind10m_max': 4
        }, {
          'date': 20221125,
          'weather': 'rain',
          'temp2m': {
            'max': 14,
            'min': 12
          },
          'wind10m_max': 2
        }, {
          'date': 20221126,
          'weather': 'clear',
          'temp2m': {
            'max': 16,
            'min': 10
          },
          'wind10m_max': 3
        }
      ]
    }
    const spy = jest.spyOn(weatherService, 'getWeather').mockReturnValue(expectedValues)

    await weatherService.getWeather(35.681147934006624, 139.76673203255143)

    // 関数は実行されたか？
    expect(spy).toHaveBeenCalled()
    // 引数の数は lat, lon の2つか？
    expect(spy.mock.calls[0].length).toBe(2)
    // 緯度は 0以上90以下か？
    expect(spy.mock.calls[0][0]).toBeGreaterThanOrEqual(0)
    expect(spy.mock.calls[0][0]).toBeLessThanOrEqual(90)
    // 経度は -180以上180以下か？
    expect(spy.mock.calls[0][1]).toBeGreaterThanOrEqual(-180)
    expect(spy.mock.calls[0][1]).toBeLessThanOrEqual(180)
    // 期待した戻り値か？
    expect(spy.mock.results[0]['value']).toEqual(expectedValues)

    spy.mockClear()
    spy.mockRestore()
  })
})

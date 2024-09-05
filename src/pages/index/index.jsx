import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    Taro.request({
      url: '/api/hsjry/easyflow/trade/product/queryDetail',
      data:{},
      header: {
        'Content-Type': 'application/json',
      },
      method: "POST",
    })
  })

  return (
    <View className='index'>
      <Text onClick={() => {
        Taro.request({
          url: '/api/hsjry/easyflow/trade/product/queryDetail',
          data:{},
          header: {
            'Content-Type': 'application/json',
          },
          method: "POST",
        })
      }}>Hello world!</Text>
    </View>
  )
}

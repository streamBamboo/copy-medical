import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text, Input} from '@tarojs/components'
import './index.scss'
import {AtRate} from 'taro-ui'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          shopName: 'U5 beauty日式美甲沙龙（正佳广场店）',
          image: require('../../../static/image/shop_image.png'),
          evaluate: 5,
          evaluates: '5.0分',
          shopDetail: '毛发，美甲，纹绣',
          distance: '<500m',
          setMealPrice: '￥ 118',
          setMealProductPrice: '￥208',
          setMealName: '单人日式单色超值芭比套餐',
          outPrint: '已售63',
        }, {
          shopName: 'U5 beauty日式美甲沙龙（正佳广场店）',
          image: require('../../../static/image/shop_image.png'),
          evaluate: 5,
          evaluates: '5.0分',
          shopDetail: '毛发，美甲，纹绣',
          distance: '<500m',
          setMealPrice: '￥ 118',
          setMealProductPrice: '￥208',
          setMealName: '单人日式单色超值芭比套餐',
          outPrint: '已售63',
        }, {
          shopName: 'U5 beauty日式美甲沙龙（正佳广场店）',
          image: require('../../../static/image/shop_image.png'),
          evaluate: 5,
          evaluates: '5.0分',
          shopDetail: '毛发，美甲，纹绣',
          distance: '<500m',
          setMealPrice: '￥ 118',
          setMealProductPrice: '￥208',
          setMealName: '单人日式单色超值芭比套餐',
          outPrint: '已售63',
        },
      ]
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const {list} = this.state;
    return (
      <View>
        <View className="list">
          <View className='list_search at-row at-row__align--center'>
            <View className='list_search-image'>
              <Image className='image-100' src={require('../../../static/image/search.png')}/>
            </View>
            <Input className='input' type='text' placeholder='美甲'/>
          </View>
        </View>
        <View style='border-top: 1px solid #dedede;margin-top: 24px'>
          {
            list.map((item, index) => {
              return (
                <View key={index} className='list_list'>
                  <View className='at-row'>
                    <View className='list_image'><Image className='image-100' src={item.image}/></View>
                    <View className='list_shop'>
                      <View className='fc-3 fw-bold'>{item.shopName}</View>
                      <View className='at-row at-row__align--center list_rate'>
                        <AtRate
                          value={item.evaluate}
                          size='14'
                        />
                        {item.evaluates}
                      </View>
                      <View className='at-row at-row__justify--between list_detail fc-3'>
                        <Text>{item.shopDetail}</Text>
                        <Text>{item.distance}</Text>
                      </View>
                    </View>
                  </View>
                  <View className='list_out-print at-row at-row__align--center'>
                    <View className='text-center'>
                      <View className='fc-c4b85c'>{item.setMealPrice}</View>
                      <View className='mar-t-20'>门市价 {item.setMealProductPrice}</View>
                    </View>
                    <View className='list_set-meal'>
                      <View className='fs-28'>{item.setMealName}</View>
                      <View className='mar-t-20'>{item.outPrint}</View>
                    </View>
                  </View>
                  <View className='fc-47ae38 text-center'>查看其余项目 ></View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}


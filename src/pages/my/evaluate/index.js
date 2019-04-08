import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import {AtRate, AtIcon} from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      evaluateList: [
        {
          userId: '用户ID',
          avatar: require('../../../static/image/shop_image.png'),
          evaluate: 4,
          time: '3月22日',
          content: '消除面部色斑，使皮肤变得细嫩、光滑消除面部色斑，使皮肤变得细嫩、光滑消除面部色斑，使皮肤变得细嫩、光滑消除面部色斑，使皮肤变得细嫩、光滑消除面部色斑，使皮肤变得细嫩、光滑消除面部色斑，使皮肤变得细嫩、光滑消除面部色斑，使皮肤变得细嫩、光滑消除面部色斑，使皮肤变得细嫩、光滑',
          image: require('../../../static/image/shop_image.png'),
          orderName: '订单名称',
          allPrice: '总价：￥999.00'
        }, {
          userId: '用户ID',
          avatar: require('../../../static/image/shop_image.png'),
          evaluate: 4,
          time: '3月22日',
          content: '消除面部色斑，使皮肤变得细嫩、光滑',
          image: require('../../../static/image/shop_image.png'),
          orderName: '订单名称',
          allPrice: '总价：￥999.00'
        }, {
          userId: '用户ID',
          avatar: require('../../../static/image/shop_image.png'),
          evaluate: 4,
          time: '3月22日',
          content: '消除面部色斑，使皮肤变得细嫩、光滑',
          image: require('../../../static/image/shop_image.png'),
          orderName: '订单名称',
          allPrice: '总价：￥999.00'
        }, {
          userId: '用户ID',
          avatar: require('../../../static/image/shop_image.png'),
          evaluate: 4,
          time: '3月22日',
          content: '消除面部色斑，使皮肤变得细嫩、光滑',
          image: require('../../../static/image/shop_image.png'),
          orderName: '订单名称',
          allPrice: '总价：￥999.00'
        },
      ],
      collectList: [
        {
          orderName: '订单名称',
          image: require('../../../static/image/shop_image.png'),
          allPrice: '￥999.00',
          state: '写评价'
        }, {
          orderName: '订单名称',
          image: require('../../../static/image/shop_image.png'),
          allPrice: '￥999.00',
          state: '写评价'
        }, {
          orderName: '订单名称',
          image: require('../../../static/image/shop_image.png'),
          allPrice: '￥999.00',
          state: '写评价'
        }, {
          orderName: '订单名称',
          image: require('../../../static/image/shop_image.png'),
          allPrice: '￥999.00',
          state: '写评价'
        }
      ],
      current: 0,
      tabList: [
        {
          title: '待评价',
          count: 5,
        }, {
          title: '已评价',
          count: 2,
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

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const {evaluateList, tabList, current, collectList} = this.state;
    return (
      <View className="evaluate">
        <View className='evaluate_head'>
          <Image className='image-100' src={require('../../../static/image/head_bg.png')}/>
          <View className='evaluate_head-content at-row '>
            <View className='evaluate_head-image'>
              <Image className='image-100' src={require('../../../static/image/user.png')}/>
            </View>
            <View>
              <View className='evaluate_head-id'>用户ID / 用户名</View>
              <View>会员等级： 4</View>
            </View>
          </View>
        </View>
        <View className='evaluate_list'>
          <View className='evaluate_list-content'>
            <View className='evaluate_list-tab at-row at-row__justify--between w-auto'>
              {
                tabList.map((item, index) => {
                  return (
                    <View
                      onClick={this.handleClick.bind(this, index)}
                      className={['evaluate_tab', current === index ? 'active' : '']}
                      key={index}
                    >
                      <View>{item.count}</View>
                      <View className='evaluate_tab-title'>{item.title}</View>
                    </View>
                  )
                })
              }
            </View>

            {
              current === 0 ? <View>
                {
                  collectList.map((item, index) => {
                    return (
                      <View key={index} className='collect_list-list at-row at-row__justify--between'>
                        <View className='at-row w-auto'>
                          <View className='collect_list-image'><Image className='image-100' src={item.image} /></View>
                          <View>
                            <View className='fw-bold fc-2'>{item.orderName}</View>
                            <View className='collect_list-price fc-6'>
                              {item.allPrice}
                            </View>
                          </View>
                        </View>
                        <view>
                          <AtIcon value='close' size='12' color='#b0b0b0'/>
                          <View className='collect_list-btn at-row w-auto'>
                            <AtIcon prefixClass='iconfont' value='write-a' size='12' color='#fff'/>
                            <View style='margin-left: 5px'>{item.state}</View>
                          </View>
                        </view>

                      </View>
                    )
                  })
                }
              </View> : null
            }

            {
              current === 1 ? <View>
                {
                  evaluateList.map((item, index) => {
                    return (
                      <View
                        key={index}
                        className='evaluate_list-list'
                      >
                        <View className='evaluate_list-head at-row at-row__justify--between'>
                          <View className='at-row at-row__align--center w-auto'>
                            <View className='evaluate_list-avatar'>
                              <Image className='image-100' src={item.avatar}/>
                            </View>
                            <View>
                              <View className='fs-30 fw-bold'>{item.userId}</View>
                              <View className='evaluate_list-rate'>
                                <AtRate
                                  value={item.evaluate}
                                />
                              </View>
                            </View>
                          </View>
                          <View className='fc-9'>{item.time}</View>
                        </View>
                        <View className='evaluate_list-evaluate textline-overflow4'>
                          {item.content}
                        </View>
                        <View className='evaluate_list-shop at-row at-row__justify--between at-row__align--center'>
                          <View className='at-row'>
                            <View className='evaluate_list-image'><Image className='image-100' src={item.image}/></View>
                            <View>
                              <View className='fw-bold fc-2'>{item.orderName}</View>
                              <View className='fc-6 mar-t-19'>{item.allPrice}</View>
                            </View>
                          </View>
                          <AtIcon prefixClass='iconfont' value='right' size='20' color='#ccc'/>
                        </View>
                      </View>
                    )
                  })
                }
              </View> : null

            }
            <View className='evaluate_list-footer'>已经到底了╮(╯_╰)╭</View>
          </View>
        </View>
      </View>
    )
  }
}


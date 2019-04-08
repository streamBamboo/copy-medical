import Taro, {Component} from '@tarojs/taro'
import {View, Image, Navigator, Input, Textarea, Text, Checkbox} from '@tarojs/components'
import './index.scss'
import {AtImagePicker} from 'taro-ui'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      evaluateLevel: [
        {
          text: '差',
          icon: require('../../../static/image/shop_image.png'),
        }, {
          text: '一般',
          icon: require('../../../static/image/shop_image.png'),
        }, {
          text: '还不错',
          icon: require('../../../static/image/shop_image.png'),
        }, {
          text: '很满意',
          icon: require('../../../static/image/shop_image.png'),
        }, {
          text: '强烈推荐',
          icon: require('../../../static/image/shop_image.png'),
        },
      ],
      files: [
        {
          url: require('../../../static/image/shop_image.png'),
        },
      ],


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

  onChange(files) {
    this.setState({
      files
    })
  }

  onFail(mes) {
    console.log(mes)
  }

  onImageClick(index, file) {
    console.log(index, file)
  }

  render() {
    const {evaluateLevel, files} = this.state;
    return (
      <View className="evaluate_user">
        <View className='evaluate_user-issue'>发布</View>
        <View className='evaluate_user-level at-row at-row__justify--between'>
          {
            evaluateLevel.map((item, index) => {
              return (
                <View className='evaluate_user-level--item' key={index}>
                  <Text>{item.text}</Text>
                  <View className='evaluate_user-image'><Image className='image-100' src={item.icon}/></View>
                </View>
              )
            })
          }
        </View>
        <View className='evaluate_user-evaluate'>
          <View className='evaluate_user-money at-row at-row__align--center w-auto'>
            <Text>人均</Text>
            <View className='evaluate_user-input at-row at-row__align--center w-auto'>
              <Text>￥</Text>
              <Input type='number' placeholder='请输入消费金额'/>
            </View>
          </View>
          <View className='evaluate_user-textarea'>
            <Textarea className='textarea' placeholderClass='placeholder_textarea'
                      placeholder='店家服务如何，服务周到吗，环境如何？(写够13字，才是好同志)'/>
          </View>
          <View className='issue'>加油，还差15个字即可发布！</View>
        </View>
        <View className='evaluate_user-uploading at-row'>
          <View className='uploading'><Image className='image-100' src={require('../../../static/image/shop_image.png')} /></View>
          <View>
            <AtImagePicker
              multiple
              files={files}
              showAddBtn={false}
              onChange={this.onChange.bind(this)}
              onFail={this.onFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
            />
          </View>
        </View>
        <View className='anonymous_evaluation at-row at-row__align--center'>
          <Checkbox />
          <Text>匿名评价</Text>
        </View>
      </View>
    )
  }
}


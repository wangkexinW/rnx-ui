/**
 * @component NavbNumericKeyboardar
 * @version 0.17.0
 * @description 虚拟数字键盘
 * 很多情况下系统的数字键盘不能满足我们的要求，比如不同平台数字键盘表现不一致，比如有的数字键盘存在小数点，比如需要配合虚拟输入框而系统的键盘又不易控制...
 *![NumericKeyboard](http://wx2.sinaimg.cn/mw690/4c8b519dly1fbztgpbw6gg20ho0wgx6p.gif)
 * @example
 * import NumericKeyboard from 'rnx-ui/NumericKeyboard';
 *  function Example(props) {
 *   return (
 *     <NumericKeyboard
 *       onPress={this.onInput}
 *     />
 *   );
 * }
 *

 */
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  Image,
} from 'react-native';

import Key from './Key';
import styles from './styles';

const delImgSource = require('./images/icon_delete.png');

const KEYS = [
  [{
    value: '1',
  }, {
    value: '2',
  }, {
    value: '3',
  }],
  [{
    value: '4',
  }, {
    value: '5',
  }, {
    value: '6',
  }],
  [{
    value: '7',
  }, {
    value: '8',
  }, {
    value: '9',
  }],
];

const DELETE_KEY = 'DELETE';

const NOOP = () => {};

class NumericKeyboard extends Component {
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          KEYS.map((line, lineLndex) => (
            <View
              key={lineLndex}
              style={styles.line}
            >
              {
                line.map((item, index) => {
                  const isFirst = index === 0;
                  return (
                    <Key
                      key={index}
                      isFirst={isFirst}
                      value={item.value}
                      onPress={this.props.onPress}
                    >
                      {item.value}
                    </Key>
                  );
                })
              }
            </View>
          ))
        }
        <View
          style={styles.line}
        >
          <Key
            isFirst
            disabled
            type="dark"
          />
          <Key
            value="0"
            onPress={this.props.onPress}
          >
            0
          </Key>
          <Key
            value={DELETE_KEY}
            type="dark"
            onPress={this.props.onPress}
          >
            {this.props.deleteKeyContent}
          </Key>
        </View>
      </View>
    );
  }
}

NumericKeyboard.propTypes = {
  /**
   * @property style
   * @type Object
   * @default Null
   * @description 自定义样式
   */
  style: View.propTypes.style,
  /**
   * @property onPress
   * @type Function
   * @default NOOP
   * @description 按键回调
   */
  onPress: PropTypes.func,
  /**
   * @property deleteKeyContent
   * @type Element
   * @default  <Image source={delImgSource} />
   * @description 删除键类型
   */
  deleteKeyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
};
NumericKeyboard.defaultProps = {
  style: null,
  onPress: NOOP,
  deleteKeyContent: <Image source={delImgSource} />,
};

export default NumericKeyboard;

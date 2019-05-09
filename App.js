import React from 'react';
import {
  Text, View, TextInput, Image, Keyboard, LayoutAnimation, ImageBackground, TouchableHighlight, StyleSheet,
} from 'react-native';

export default class ImportWallet extends React.Component {

  // state
  state = {
    counter: 1,
    word1: '',
    word2: '',
    word3: '',
    word4: '',
    word5: '',
    word6: '',
    word7: '',
    word8: '',
    word9: '',
    word10: '',
    word11: '',
    word12: '',
    topHeight: 150,
    complete: false,
    marginTop: 100,
    marginBottom: 30,
  }

  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  // add listeners on componentWillMount()
  componentWillMount () {
    Keyboard.addListener('keyboardDidShow', (e) => this.keyboardDidShow(e));
    Keyboard.addListener('keyboardDidHide', (e) => this.keyboardDidHide(e));
  }

  // remove listeners on componentWillUnmont()
  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  // fired when keybord appears
  keyboardDidShow (e) {
    let newSize = e.endCoordinates.height
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      marginTopMenu: 0,
      marginTop: 50,
      topHeight: 100,
      marginBottom: newSize
    })
  }

  // fired when keyboard disappears
  keyboardDidHide (e) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      marginTopMenu: 100, 
      marginTop: 100,
      topHeight: 150,
    })
  } 

  // will check the user input and create a new block when the user presses the [space] button
  _onMnemonicChange = (text) => {
    const lastChar = text[text.length - 1];
    // check for [space]
    if (lastChar === ' ') {
      this.textInput.clear()
      // update the state accordingly
      switch (this.state.counter) {
        case 1:
          this.setState({ word1: text, counter: this.state.counter + 1 });
          break;
        case 2:
          this.setState({ word2: text, counter: this.state.counter + 1 });
          break;
        case 3:
          this.setState({ word3: text, counter: this.state.counter + 1 });
          break;
        case 4:
          this.setState({ word4: text, counter: this.state.counter + 1 });
          break;
        case 5:
          this.setState({ word5: text, counter: this.state.counter + 1 });
          break;
        case 6:
          this.setState({ word6: text, counter: this.state.counter + 1 });
          break;
        case 7:
          this.setState({ word7: text, counter: this.state.counter + 1 });
          break;
        case 8:
          this.setState({ word8: text, counter: this.state.counter + 1 });
          break;
        case 9:
          this.setState({ word9: text, counter: this.state.counter + 1 });
          break;
        case 10:
          this.setState({ word10: text, counter: this.state.counter + 1 });
          break;
        case 11:
          this.setState({ word11: text, counter: this.state.counter + 1 });
          break;
        case 12:
          this.setState({word12: text, counter: this.state.counter + 1 , complete: true});
          break;
        default:
          break;
      }
    }
  }

  // render
  render() {
    return (
      <ImageBackground source={require('./resources/images/main_background.png')} style={{flex:1, height:this.state.topHeight }}>
        <View style={{height: 100, width: 360, borderRadius: 10, borderColor: 'black', alignSelf: 'center', marginTop: this.state.marginTop, backgroundColor: 'white', shadowColor: '#000000', shadowRadius: 10, shadowOpacity: 1.0, justifyContent: 'center' }}>
          <Text style={{textAlign: 'center', fontSize: 24}}>ENTER MNEMONIC</Text>
        </View>

        <View style={{flex:1,  marginTop: this.state.marginTopMenu}}>

          <View style={{flexDirection:'row'}}>
            {this.state.word1 != '' ? 
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word1}</Text>
              </View>
              :
              <View ></View>
            }

            {this.state.word2 != '' ?
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word2}</Text>
              </View>
              :
              <View></View>
            }

            {this.state.word3 != '' ? 
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word3}</Text>
              </View>
              :
              <View></View>
            }
          </View>

          <View style={{flexDirection:'row', height:70}}>
            {this.state.word4 != '' ? 
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word4}</Text>
              </View>
              :
              <View></View>
            }

            {this.state.word5 != '' ? 
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word5}</Text>
              </View>
              :
              <View></View>
            }

            {this.state.word6 != '' ? 
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word6}</Text>
              </View>
              :
              <View></View>
            }  
          </View>

          <View style={{flexDirection:'row', height:70 }}>
            {this.state.word7 != '' ? 
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word7}</Text>
              </View>
              :
              <View></View>
            }

            {this.state.word8 != '' ? 
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word8}</Text>
              </View>
              :
              <View></View>
            }

            {this.state.word9 != '' ? 
              <View style={styles.mnemonic_word}>
                <Text style={{color:'white'}}>{this.state.word9}</Text>
              </View>
              :
              <View></View>
            }
            </View>

            <View style={{flexDirection:'row', height:70}}>

              {this.state.word10 != '' ? 
                <View style={styles.mnemonic_word}>
                  <Text style={{color:'white'}}>{this.state.word10}</Text>
                </View>
                :
                null
              }

              {this.state.word11 != '' ? 
                <View style={styles.mnemonic_word}>
                  <Text style={{color:'white'}}>{this.state.word11}</Text>
                </View>
                :
                null
              }

              {this.state.word12 != '' ? 
                <View style={styles.mnemonic_word}>
                  <Text style={{color:'white'}}>{this.state.word12}</Text>
                </View>
                :
                null
              }
            </View>

          <View style={{flex:1, flexDirection:'row', alignItems:'flex-end'}}>
          {this.state.complete ? 
            <View style={{flex:1, bottom:50}}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("ProvidePwd") } underlayColor='#172D39' style={styles.action_button_above}>  
                <Text style={styles.button_text}>IMPORT</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.navigate("ProvidePwd") } underlayColor='#172D39' style={styles.action_button_second}> 
                <Text style={styles.button_text_second}>CLEAR</Text>
              </TouchableHighlight>
            </View>
          : 
            <View style={{flex:1, height:100, marginBottom: this.state.marginBottom}}>  
              <TextInput ref={input => { this.textInput = input }} onChangeText={ (text) => this._onMnemonicChange(text) } autoCapitalize='none'  style={{ marginTop: 10, backgroundColor: 'white', height: 70, borderColor: 'black', borderWidth:1, borderRadius:30}}/>
            </View>
          }
          </View>

        </View>
        </ImageBackground>
    );
  }
}


// styling
const styles = StyleSheet.create({
  action_button_above: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 270,
    height: 60,
    backgroundColor: '#172D39',
    borderRadius: 30,
    marginBottom: 20,
  },
  action_button_second: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 270,
    height: 60,
    backgroundColor: 'white',
    borderColor: '#172D39',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 20,
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  button_text_second: {
    color: '#172D39',
    textAlign: 'center',
    fontSize: 24,
  },
  mnemonic_word: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#6C5D81',
    borderRadius: 10,
    marginTop: 20
  },
});
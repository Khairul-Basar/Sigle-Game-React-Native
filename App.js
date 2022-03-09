import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function App() {
  const [isEnable, setIsEnable] = useState(false)
  const [inningsCount, setInningsCount] = useState(3)

  function toggleSwitch() {
    setIsEnable(previousValue => !previousValue)
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/backgroundSoccer.png')}>
      <SafeAreaView style={styles.safeView}>
        <Text style={styles.titleText}>Sigle Game</Text>

        <View style={styles.elementTitle}>
          <Text style={styles.homeTeam}>HOME TEAM</Text>
          <TouchableOpacity>
            <Text style={styles.addTeam}>ADD TEAM</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardHome}>
          <View style={styles.homeTeamBodyImg}>
            <View style={styles.lionImgBg}>
              <Image
                style={styles.lionImg}
                source={require('./assets/logoLion.png')}
              />
            </View>

            <View style={styles.userRow}>
              {new Array(3).fill(0).map(i => (
                <View style={styles.basicCol}>
                  <View style={styles.singleUserBg}>
                    <Image
                      style={styles.userOne}
                      source={require('./assets/asset6.png')}
                    />
                  </View>
                  <Text style={styles.singleUserName}>user213</Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={styles.homeTeamBodyText}>New Brunswick Lion</Text>
        </View>

        <View style={styles.elementTitle}>
          <Text style={styles.homeTeam}>Away Team</Text>
          <TouchableOpacity>
            <Text style={styles.addTeam}>ADD TEAM</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.awayTeamBody}>
          <Text style={styles.awayTeamText}>Add Team</Text>
        </View>

        <View style={styles.soundEffectContainer}>
          <Text style={styles.soundEffect}>Sound Effects</Text>
          <Switch
            trackColor={{ false: 'darkgray', true: 'lightgreen' }}
            ios_backgroundColor="darkgray"
            style={styles.switchStyle}
            value={isEnable}
            thumbColor={isEnable ? 'black' : 'white'}
            onValueChange={toggleSwitch}
          />
        </View>

        <View style={styles.inningsContainer}>
          <Text style={styles.soundEffect}>Innings</Text>
          <View style={styles.inningsCounts}>
            <TouchableOpacity
              style={styles.inningsCount}
              onPress={() => setInningsCount(3)}>
              <Text
                style={
                  inningsCount === 3
                    ? styles.activeInningsCountNum
                    : styles.inningsCountNum
                }>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.inningsCount}
              onPress={() => setInningsCount(5)}>
              <Text
                style={
                  inningsCount === 5
                    ? styles.activeInningsCountNum
                    : styles.inningsCountNum
                }>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.inningsCount}
              onPress={() => setInningsCount(7)}>
              <Text
                style={
                  inningsCount === 7
                    ? styles.activeInningsCountNum
                    : styles.inningsCountNum
                }>
                7
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.startGame}>
            <Text style={styles.startGameText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  safeView: {
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
  },
  elementTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('4%'),
    marginBottom: hp('2%'),
  },
  homeTeam: {
    fontWeight: 'bold',
    color: 'white',
  },
  addTeam: {
    color: 'white',
    opacity: 0.5,
  },
  cardHome: {
    overflow: 'hidden',
    width: wp('75%'),
    padding: wp('5%'),
    backgroundColor: 'black',
    opacity: 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: wp('3%'),
  },
  homeTeamBodyImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeTeamBodyText: {
    marginTop: wp('4%'),
    color: 'white',
    fontWeight: 'bold',
  },
  lionImg: {
    width: wp('18%'),
    height: wp('18%'),
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userOne: {
    width: wp('10%'),
    height: wp('10%'),
  },
  lionImgBg: {
    backgroundColor: 'gray',
    width: wp('21%'),
    height: wp('21%'),
    borderRadius: wp('10.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleUserBg: {
    backgroundColor: 'gray',
    marginHorizontal: wp('3%'),
    borderRadius: wp('10%'),
  },
  singleUserName: {
    marginTop: wp('2%'),
    color: 'white',
  },
  awayTeamBody: {
    borderRadius: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('50%'),
    height: wp('40%'),
    backgroundColor: 'black',
    opacity: 0.8,
  },
  awayTeamText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  soundEffectContainer: {
    marginTop: wp('10%'),
    paddingBottom: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
  soundEffect: {
    color: 'white',
    fontSize: 18,
  },
  inningsContainer: {
    marginTop: wp('3%'),
    paddingBottom: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
  inningsText: {
    fontWeight: 'bold',
  },
  btnContainer: {
    alignItems: 'center',
  },
  startGame: {
    width: wp('80%'),
    marginTop: wp('10%'),
    alignItems: 'center',
    borderRadius: wp('10%'),
    backgroundColor: 'black',
    opacity: 0.8,
  },
  startGameText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: wp('5%'),
  },
  basicCol: {
    alignItems: 'center',
  },
  inningsCounts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inningsCount: {
    marginHorizontal: wp('2%'),
  },
  activeInningsCountNum: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inningsCountNum: {
    color: 'white',
    fontSize: 15,
  },
})

{
  /* <View>
<View style={styles.singleUserBg}>
  <Image
    style={styles.userOne}
    source={require('./assets/asset6.png')}
  />
</View>
<Text style={styles.singleUserName}>user213</Text>
</View>
<View>
<View style={styles.singleUserBg}>
  <Image
    style={styles.userOne}
    source={require('./assets/asset2.png')}
  />
</View>
<Text style={styles.singleUserName}>user233</Text>
</View> */
}

import React, { Component, Fragment,useState,useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, TextInput } from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
//Importing the facebook login manager
import auth from '@react-native-firebase/auth';
import { LoginManager, LoginButton, AccessToken } from "react-native-fbsdk";

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function LoginController({ navigation }){
  const [userInfo, setUserInfo] = useState({});
  const [status, setStatus] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pushData: [],
  //     loggedIn: false
  //   }
  // }
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '563098186921-r28uog4nsnhi4ka0meqtkf4kt8tqcd31.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,

    });
  });
  // componentDidMount() {
  //   GoogleSignin.configure({
  //     webClientId: '563098186921-r28uog4nsnhi4ka0meqtkf4kt8tqcd31.apps.googleusercontent.com',
  //     offlineAccess: true,
  //     hostedDomain: '',
  //     forceConsentPrompt: true,

  //   });
  // }


  firebaseGoogleLogin = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential)
      .then((user) => {
        console.log("USER DATA ==> ", user);
        // this.setState({ userInfo: user })
        setUserInfo(user);
        setStatus(true);
        // navigation.navigate('Home');
      })
      .catch((err) => {
        console.log("Error=> ", err);
      })
  }


  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo: userInfo, loggedIn: true });
      setStatus(true);
      setUserInfo(userInfo);
      // navigation.navigate('Home')
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      // this.setState({ userInfo });
      setUserInfo(userInfo);
      setStatus(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        // this.setState({ loggedIn: false });
        setStatus(false);
      } else {
        // some other error
      setStatus(false);
      }
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
      setUserInfo(null);
      setStatus(false);
    } catch (error) {
      console.error(error);
    }
  };


  facebook_login = async () => {
    console.log("Now");
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    auth().signInWithCredential(facebookCredential)
      .then((user) => {
        console.log("USER DATA ==> ", user);
        // this.setState({ userInfo: user, loggedIn: true })
        setUserInfo(user);
        setStatus(true);
        // navigation.navigate('Home')
      })
      .catch((err) => {
        console.log("Error=> ", err);
        setStatus(false);
      })
  }

    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>

          <View style={styles.sectionContainer}>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: "https://i.pinimg.com/236x/ec/e1/80/ece1805ecd14f65d5a011a6e81d1448d.jpg" }}
            />

            <View style={styles.input}>
              <TextInput style={{ fontSize: 17 }} placeholder="Enter the email address" />
            </View>

            <View style={styles.input}>
              <TextInput style={{ fontSize: 17 }} placeholder="Enter the password" />
            </View>

            <View>
              <Text style={{textDecorationLine:'underline',marginLeft:90,color:'green'}}>Forgot Password</Text>
            </View>

            <View style={{paddingTop:25,paddingBottom:50}}>
            <Button  onPress={() => navigation.navigate('Home')} title="LOGIN"/>
            </View>

          </View>

          <View style={styles.sectionContainer}>

            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => firebaseGoogleLogin().then(() => console.log('Signed in with Google!'))}
              // disabled={isSigninInProgress} 
              />


          </View>
          <View style={styles.sectionContainer}>
            <LoginButton
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              title="Facebook Sign-In"
              onPress={() =>facebook_login().then(() => console.log('Signed in with Facebook!'))}
            />
          </View>

          <View style={{height:86}}>

          </View>



          {/* <View style={styles.buttonContainer}>
                {!this.state.loggedIn && <Text>You are currently logged out</Text>}
                {this.state.loggedIn && <Button onPress={this.signOut}
                  title="Signout"
                  color="#33acdd">
                </Button>}
              </View> */}

          {/* {!this.state.loggedIn}
              {this.state.loggedIn && <View>
                <View>
                  <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>{this.state.userInfo.user.name} You are signed In</Text>
                </View>
                <View style={styles.dp}>
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.photo }}
                  />
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.name}</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.title}>Email</Text>
                  <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.email}</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.title}>ID</Text>
                  <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.id}</Text>
                </View>
              </View>} */}
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  listHeader: {
    backgroundColor: '#eee',
    color: "#222",
    height: 44,
    padding: 12
  },
  detailContainer: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  },
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  dp: {
    marginTop: 3,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 2,
    paddingHorizontal: 84,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  input: {
    borderColor: "#00003f",
    borderRadius: 3,
    borderWidth: 1.1,
    height: 45,
    marginBottom: 5,

    shadowColor: "blue",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 4,
  }


});
export default LoginController;
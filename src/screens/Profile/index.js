import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
// import {Layout} from 'react-native-reanimated';
import {useState} from 'react/cjs/react.development';
import {supabase} from '../../../supabase';

const inputStyle = {
  marginVertical: 12,
  paddingVertical: 12,
  borderBottomColor: 'darkgrey',
  borderBottomWidth: 1,
  borderRadius: 4,
};

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const createUser = async () => {
    setLoading(true);
    const {user, error} = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      alert('Check your email for the login link!');
      setLogin(true);
      setRegister(false);
      setEmail('');
      setPassword('');
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  const loginUser = async () => {
    setLoading(true);
    const {user, error} = await supabase.auth.signIn({
      email: email,
      password: password,
    });

    if (user) {
      // console.log(user);
      setLoading(false);
      setEmail('');
      setPassword('');
      navigation.navigate('Explore');
    }

    if (!error && !user) {
      setLoading(false);
      alert('Check your email for the login link!');
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  // Get current user
  // const user = await supabase.auth.user();

  return (
    <KeyboardAvoidingView behavior="height" enabled style={{flex: 1}}>
      {/* <Layout> */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View
          style={{
            flex: 3,
            paddingHorizontal: 20,
            paddingBottom: 20,
            marginTop: 30,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              padding: 30,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            {login ? 'Login' : 'Register'}
          </Text>
          <Text>Email</Text>
          <TextInput
            containerStyle={{marginTop: 15}}
            style={inputStyle}
            placeholder="Enter your email"
            value={email}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
          />

          <Text style={{marginTop: 15}}>Password</Text>
          <TextInput
            containerStyle={{marginTop: 15}}
            style={inputStyle}
            placeholder="Enter your password"
            value={password}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />

          <Button
            title={loading ? 'Loading' : 'Continue'}
            onPress={() => {
              login ? loginUser() : createUser();
            }}
            style={{
              marginTop: 20,
            }}
            disabled={loading}></Button>

          {login ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                  justifyContent: 'center',
                }}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    setLogin(false);
                    setRegister(true);
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 5,
                    }}>
                    Register here
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                }}>
                {/* <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgetPassword');
                }}> */}
                <Text style={{fontWeight: 'bold'}}>Forget password</Text>
                {/* </TouchableOpacity> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 30,
                  justifyContent: 'center',
                }}>
                {/* <TouchableOpacity
                onPress={() => {
                  isDarkmode ? setTheme('light') : setTheme('dark');
                }}>
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}>
                  {isDarkmode ? '☀️ light theme' : '🌑 dark theme'}
                </Text>
              </TouchableOpacity> */}
              </View>
            </>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                justifyContent: 'center',
              }}>
              <Text size="md">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  setLogin(true);
                  setRegister(false);
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>
                  Login here
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
      {/* </Layout> */}
    </KeyboardAvoidingView>
  );
}

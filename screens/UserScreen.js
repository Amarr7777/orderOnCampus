import { View, Text, SafeAreaView, TouchableOpacity, Image, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";


export default function UserScreen() {

  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 mx-10'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: widthPercentageToDP('10%') }}
      >

        <Text className='text-black font-semibold text-4xl py-5'>My Profile</Text>

        <View className='px-5 py-2'>
          <View className='flex-row justify-between py-5'>
            <Text className="text-black font-semibold">Personal details</Text>
            <TouchableOpacity><Text className="text-green-900 font-semibold">Edit</Text></TouchableOpacity>
          </View>
          <View className="flex-row  p-5 shadow bg-white rounded-lg"
            style={{ width: wp('70%') }}
          >
            <Image
              className="rounded-lg"
              source={require('../assets/restaurant.jpg')}
              style={{ width: hp('10%'), height: hp('10%') }}
            />
            <View>
              <Text className="font-semi text-lg px-2 ">User 1</Text>
              <Text className="font-semi text-sm px-2 ">+91 9074205926</Text>
            </View>
          </View>
        </View>
        {/* order */}
        <View className='px-5 py-2'>
          <View className="flex-row justify-between  p-5 shadow bg-white rounded-lg"
            style={{ width: wp('70%') }}
          >
            <View>
              <Text className="font-semi text-lg px-2 ">Previous Orders</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Orders')}
            >
              <Icon.ChevronRight stroke='black' />
            </TouchableOpacity>
          </View>
        </View>
        {/*offers  */}
        <View className='px-5 py-2'>
          <View className="flex-row justify-between  p-5 shadow bg-white rounded-lg"
            style={{ width: wp('70%') }}
          >
            <View>
              <Text className="font-semi text-lg px-2 ">Offers and Promo</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Offers')}
            >
              <Icon.ChevronRight stroke='black' />
            </TouchableOpacity>
          </View>
        </View>
        {/*privacy policy  */}
        <View className='px-5 py-2'>
          <View className="flex-row justify-between  p-5 shadow bg-white rounded-lg"
            style={{ width: wp('70%') }}
          >
            <View>
              <Text className="font-semi text-lg px-2 ">Privacy Policy</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Orders')}
            >
              <Icon.ChevronRight stroke='black' />
            </TouchableOpacity>
          </View>
        </View>
        {/*security  */}
        <View className='px-5 py-2'>
          <View className="flex-row justify-between  p-5 shadow bg-white rounded-lg"
            style={{ width: wp('70%') }}
          >
            <View>
              <Text className="font-semi text-lg px-2 ">Security</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Orders')}
            >
              <Icon.ChevronRight stroke='black' />
            </TouchableOpacity>
          </View>
        </View>
        {/*Help  */}
        <View className='px-5 py-2'>
          <View className="flex-row justify-between  p-5 shadow bg-white rounded-lg"
            style={{ width: wp('70%') }}
          >
            <View>
              <Text className="font-semi text-lg px-2 ">Help</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Orders')}
            >
              <Icon.ChevronRight stroke='black' />
            </TouchableOpacity>
          </View>
        </View>
        {/* log out */}
        <View className='px-5 py-2'>
          <TouchableOpacity className="flex-row items-center justify-center bg-green-900  p-5 shadow rounded-lg"
            style={{ width: wp('70%') }}
            onPress={() => navigation.navigate('Login')}
          >
            <View>
              <Text className="font-semi text-lg px-2 ">Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
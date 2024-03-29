import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import DishRow from '../components/DishRow';
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { selectCanteen, setCanteen } from '../slices/canteenSlice';
import CartIcon from '../components/CartIcon';
export default function CanteenScreen() {
  const navigation = useNavigation()
  const { params } = useRoute();
  let item = params;

  const canteen = useSelector(selectCanteen);
  const dispatch = useDispatch()
  // console.log(item);
  useEffect(()=>{
    if(item && item.id){
      dispatch(setCanteen({...item}))
    }
  },[])
  let checkFav = item.favorite
  const [favorites, setFavorties] = useState(checkFav);
  console.log(checkFav)

  return (
    <View>
      <CartIcon />
      <StatusBar style='light' />
      <ScrollView>
        <View className="relative ">
          <Image
            source={require('../assets/restaurant.jpg')}
            style={{ height: hp('30%'), width: wp('100%') }} />
          <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50 rounded-full shadow p-2"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft height="20" width="20" stroke="black" strokeWidth={3} />
          </TouchableOpacity>
          <View className="-mt-10 bg-white px-5 pt-5"
          >
            <View className='flex-row justify-between items-center'>
              <Text className="font-bold text-3xl"> {item.name}</Text>
              <TouchableOpacity onPress={() =>
                favorites ? setFavorties(false) : setFavorties(true)
              }>
                <Icon.Heart height='20' width='20' stroke={favorites ? 'white' : 'black'} strokeWidth={1} fill={favorites ? 'red' : 'white'} />
              </TouchableOpacity>
            </View>
            <Text className="px-1 text-sm " > {item.location}</Text>
          </View>
          <View className="py-10 px-5 bg-white">
            <Text className="font-bold text-3xl">Menu</Text>
            {
              item.dishes.map((dish, index) => <DishRow item={{ ...dish }} key={index} />)
            }
          </View>
        </View>
      </ScrollView>

    </View>
  )
}
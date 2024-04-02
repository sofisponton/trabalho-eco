import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  Switch,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import styles from './styles';
import fundo from '../../assets/fundo.png';

export default function Home({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <View style={styles.padding}>
            <Pressable
              title="Eco"
              onPress={() => navigation.navigate('Eco')}
              style={styles.botao}>
              <Text style={styles.textoBotao}>Ecologia</Text>
            </Pressable>
            <Pressable
              title="Insetos"
              onPress={() => navigation.navigate('Insetos')}
              style={styles.botao}>
              <Text style={styles.textoBotao}>Insetos</Text>
            </Pressable>
            <Pressable
              title="Sobre"
              onPress={() => navigation.navigate('Sobre')}
              style={styles.botao}>
              <Text style={styles.textoBotao}>Sobre </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
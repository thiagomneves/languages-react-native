import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import './src/assets/i18n/i18n';
import {languages} from './src/assets/i18n/languages';

function App(): JSX.Element {
  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState<string>('en');

  const changeLanguage = (value: string) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.title}>{t('title')}</Text>
          <Text style={styles.description}>{t('description')}</Text>
          <Picker
            selectedValue={currentLanguage}
            onValueChange={changeLanguage}>
            <Picker.Item label="Select an language" value="" />
            {Object.values(languages).map(item => (
              <Picker.Item
                label={item.name_native}
                value={item.acronym}
                key={item.acronym}
              />
            ))}
          </Picker>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

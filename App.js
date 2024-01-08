import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    marginVertical: 40,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  languagetitle: {
    fontSize: 30,
    marginVertical: 10,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 75,
  },
  dropdown: {
    height: 50,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#47477b',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
});

const data = [
  {
    label: 'aa',
    value: 'Afar',
  },
  {
    label: 'ab',
    value: 'Abkhazian',
  },
  {
    label: 'ae',
    value: 'Avestan',
  },
  {
    label: 'af',
    value: 'Afrikaans',
  },
  {
    label: 'ak',
    value: 'Akan',
  },
  {
    label: 'am',
    value: 'Amharic',
  },
  {
    label: 'an',
    value: 'Aragonese',
  },
  {
    label: 'ar',
    value: 'Arabic',
  },
  {
    label: 'as',
    value: 'Assamese',
  },
  {
    label: 'av',
    value: 'Avaric',
  },
  {
    label: 'ay',
    value: 'Aymara',
  },
  {
    label: 'az',
    value: 'Azerbaijani',
  },
  {
    label: 'ba',
    value: 'Bashkir',
  },
  {
    label: 'be',
    value: 'Belarusian',
  },
  {
    label: 'bg',
    value: 'Bulgarian',
  },
  {
    label: 'bh',
    value: 'Bihari languages',
  },
  {
    label: 'bi',
    value: 'Bislama',
  },
  {
    label: 'bm',
    value: 'Bambara',
  },
  {
    label: 'bn',
    value: 'Bengali',
  },
  {
    label: 'bo',
    value: 'Tibetan',
  },
  {
    label: 'br',
    value: 'Breton',
  },
  {
    label: 'bs',
    value: 'Bosnian',
  },
  {
    label: 'ca',
    value: 'Catalan; Valencian',
  },
  {
    label: 'ce',
    value: 'Chechen',
  },
  {
    label: 'ch',
    value: 'Chamorro',
  },
  {
    label: 'co',
    value: 'Corsican',
  },
  {
    label: 'cr',
    value: 'Cree',
  },
  {
    label: 'cs',
    value: 'Czech',
  },
  {
    label: 'cu',
    value:
      'Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic',
  },
  {
    label: 'cv',
    value: 'Chuvash',
  },
  {
    label: 'cy',
    value: 'Welsh',
  },
  {
    label: 'da',
    value: 'Danish',
  },
  {
    label: 'de',
    value: 'German',
  },
  {
    label: 'dv',
    value: 'Divehi; Dhivehi; Maldivian',
  },
  {
    label: 'dz',
    value: 'Dzongkha',
  },
  {
    label: 'ee',
    value: 'Ewe',
  },
  {
    label: 'el',
    value: 'Greek, Modern (1453-)',
  },
  {
    label: 'en',
    value: 'English',
  },
  {
    label: 'eo',
    value: 'Esperanto',
  },
  {
    label: 'es',
    value: 'Spanish; Castilian',
  },
  {
    label: 'et',
    value: 'Estonian',
  },
  {
    label: 'eu',
    value: 'Basque',
  },
  {
    label: 'fa',
    value: 'Persian',
  },
  {
    label: 'ff',
    value: 'Fulah',
  },
  {
    label: 'fi',
    value: 'Finnish',
  },
  {
    label: 'fj',
    value: 'Fijian',
  },
  {
    label: 'fo',
    value: 'Faroese',
  },
  {
    label: 'fr',
    value: 'French',
  },
  {
    label: 'fy',
    value: 'Western Frisian',
  },
  {
    label: 'ga',
    value: 'Irish',
  },
  {
    label: 'gd',
    value: 'Gaelic; Scottish Gaelic',
  },
  {
    label: 'gl',
    value: 'Galician',
  },
  {
    label: 'gn',
    value: 'Guarani',
  },
  {
    label: 'gu',
    value: 'Gujarati',
  },
  {
    label: 'gv',
    value: 'Manx',
  },
  {
    label: 'ha',
    value: 'Hausa',
  },
  {
    label: 'he',
    value: 'Hebrew',
  },
  {
    label: 'hi',
    value: 'Hindi',
  },
  {
    label: 'ho',
    value: 'Hiri Motu',
  },
  {
    label: 'hr',
    value: 'Croatian',
  },
  {
    label: 'ht',
    value: 'Haitian; Haitian Creole',
  },
  {
    label: 'hu',
    value: 'Hungarian',
  },
  {
    label: 'hy',
    value: 'Armenian',
  },
  {
    label: 'hz',
    value: 'Herero',
  },
  {
    label: 'ia',
    value: 'Interlingua (International Auxiliary Language Association)',
  },
  {
    label: 'id',
    value: 'Indonesian',
  },
  {
    label: 'ie',
    value: 'Interlingue; Occidental',
  },
  {
    label: 'ig',
    value: 'Igbo',
  },
  {
    label: 'ii',
    value: 'Sichuan Yi; Nuosu',
  },
  {
    label: 'ik',
    value: 'Inupiaq',
  },
  {
    label: 'io',
    value: 'Ido',
  },
  {
    label: 'is',
    value: 'Icelandic',
  },
  {
    label: 'it',
    value: 'Italian',
  },
  {
    label: 'iu',
    value: 'Inuktitut',
  },
  {
    label: 'ja',
    value: 'Japanese',
  },
  {
    label: 'jv',
    value: 'Javanese',
  },
  {
    label: 'ka',
    value: 'Georgian',
  },
  {
    label: 'kg',
    value: 'Kongo',
  },
  {
    label: 'ki',
    value: 'Kikuyu; Gikuyu',
  },
  {
    label: 'kj',
    value: 'Kuanyama; Kwanyama',
  },
  {
    label: 'kk',
    value: 'Kazakh',
  },
  {
    label: 'kl',
    value: 'Kalaallisut; Greenlandic',
  },
  {
    label: 'km',
    value: 'Central Khmer',
  },
  {
    label: 'kn',
    value: 'Kannada',
  },
  {
    label: 'ko',
    value: 'Korean',
  },
  {
    label: 'kr',
    value: 'Kanuri',
  },
  {
    label: 'ks',
    value: 'Kashmiri',
  },
  {
    label: 'ku',
    value: 'Kurdish',
  },
  {
    label: 'kv',
    value: 'Komi',
  },
  {
    label: 'kw',
    value: 'Cornish',
  },
  {
    label: 'ky',
    value: 'Kirghiz; Kyrgyz',
  },
  {
    label: 'la',
    value: 'Latin',
  },
  {
    label: 'lb',
    value: 'Luxembourgish; Letzeburgesch',
  },
  {
    label: 'lg',
    value: 'Ganda',
  },
  {
    label: 'li',
    value: 'Limburgan; Limburger; Limburgish',
  },
  {
    label: 'ln',
    value: 'Lingala',
  },
  {
    label: 'lo',
    value: 'Lao',
  },
  {
    label: 'lt',
    value: 'Lithuanian',
  },
  {
    label: 'lu',
    value: 'Luba-Katanga',
  },
  {
    label: 'lv',
    value: 'Latvian',
  },
  {
    label: 'mg',
    value: 'Malagasy',
  },
  {
    label: 'mh',
    value: 'Marshallese',
  },
  {
    label: 'mi',
    value: 'Maori',
  },
  {
    label: 'mk',
    value: 'Macedonian',
  },
  {
    label: 'ml',
    value: 'Malayalam',
  },
  {
    label: 'mn',
    value: 'Mongolian',
  },
  {
    label: 'mr',
    value: 'Marathi',
  },
  {
    label: 'ms',
    value: 'Malay',
  },
  {
    label: 'mt',
    value: 'Maltese',
  },
  {
    label: 'my',
    value: 'Burmese',
  },
  {
    label: 'na',
    value: 'Nauru',
  },
  {
    label: 'nb',
    value: 'BokmÃ¥l, Norwegian; Norwegian BokmÃ¥l',
  },
  {
    label: 'nd',
    value: 'Ndebele, North; North Ndebele',
  },
  {
    label: 'ne',
    value: 'Nepali',
  },
  {
    label: 'ng',
    value: 'Ndonga',
  },
  {
    label: 'nl',
    value: 'Dutch; Flemish',
  },
  {
    label: 'nn',
    value: 'Norwegian Nynorsk; Nynorsk, Norwegian',
  },
  {
    label: 'no',
    value: 'Norwegian',
  },
  {
    label: 'nr',
    value: 'Ndebele, South; South Ndebele',
  },
  {
    label: 'nv',
    value: 'Navajo; Navaho',
  },
  {
    label: 'ny',
    value: 'Chichewa; Chewa; Nyanja',
  },
  {
    label: 'oc',
    value: 'Occitan (post 1500)',
  },
  {
    label: 'oj',
    value: 'Ojibwa',
  },
  {
    label: 'om',
    value: 'Oromo',
  },
  {
    label: 'or',
    value: 'Oriya',
  },
  {
    label: 'os',
    value: 'Ossetian; Ossetic',
  },
  {
    label: 'pa',
    value: 'Panjabi; Punjabi',
  },
  {
    label: 'pi',
    value: 'Pali',
  },
  {
    label: 'pl',
    value: 'Polish',
  },
  {
    label: 'ps',
    value: 'Pushto; Pashto',
  },
  {
    label: 'pt',
    value: 'Portuguese',
  },
  {
    label: 'qu',
    value: 'Quechua',
  },
  {
    label: 'rm',
    value: 'Romansh',
  },
  {
    label: 'rn',
    value: 'Rundi',
  },
  {
    label: 'ro',
    value: 'Romanian; Moldavian; Moldovan',
  },
  {
    label: 'ru',
    value: 'Russian',
  },
  {
    label: 'rw',
    value: 'Kinyarwanda',
  },
  {
    label: 'sa',
    value: 'Sanskrit',
  },
  {
    label: 'sc',
    value: 'Sardinian',
  },
  {
    label: 'sd',
    value: 'Sindhi',
  },
  {
    label: 'se',
    value: 'Northern Sami',
  },
  {
    label: 'sg',
    value: 'Sango',
  },
  {
    label: 'si',
    value: 'Sinhala; Sinhalese',
  },
  {
    label: 'sk',
    value: 'Slovak',
  },
  {
    label: 'sl',
    value: 'Slovenian',
  },
  {
    label: 'sm',
    value: 'Samoan',
  },
  {
    label: 'sn',
    value: 'Shona',
  },
  {
    label: 'so',
    value: 'Somali',
  },
  {
    label: 'sq',
    value: 'Albanian',
  },
  {
    label: 'sr',
    value: 'Serbian',
  },
  {
    label: 'ss',
    value: 'Swati',
  },
  {
    label: 'st',
    value: 'Sotho, Southern',
  },
  {
    label: 'su',
    value: 'Sundanese',
  },
  {
    label: 'sv',
    value: 'Swedish',
  },
  {
    label: 'sw',
    value: 'Swahili',
  },
  {
    label: 'ta',
    value: 'Tamil',
  },
  {
    label: 'te',
    value: 'Telugu',
  },
  {
    label: 'tg',
    value: 'Tajik',
  },
  {
    label: 'th',
    value: 'Thai',
  },
  {
    label: 'ti',
    value: 'Tigrinya',
  },
  {
    label: 'tk',
    value: 'Turkmen',
  },
  {
    label: 'tl',
    value: 'Tagalog',
  },
  {
    label: 'tn',
    value: 'Tswana',
  },
  {
    label: 'to',
    value: 'Tonga (Tonga Islands)',
  },
  {
    label: 'tr',
    value: 'Turkish',
  },
  {
    label: 'ts',
    value: 'Tsonga',
  },
  {
    label: 'tt',
    value: 'Tatar',
  },
  {
    label: 'tw',
    value: 'Twi',
  },
  {
    label: 'ty',
    value: 'Tahitian',
  },
  {
    label: 'ug',
    value: 'Uighur; Uyghur',
  },
  {
    label: 'uk',
    value: 'Ukrainian',
  },
  {
    label: 'ur',
    value: 'Urdu',
  },
  {
    label: 'uz',
    value: 'Uzbek',
  },
  {
    label: 've',
    value: 'Venda',
  },
  {
    label: 'vi',
    value: 'Vietnamese',
  },
  {
    label: 'vo',
    value: 'VolapÃ¼k',
  },
  {
    label: 'wa',
    value: 'Walloon',
  },
  {
    label: 'wo',
    value: 'Wolof',
  },
  {
    label: 'xh',
    value: 'Xhosa',
  },
  {
    label: 'yi',
    value: 'Yiddish',
  },
  {
    label: 'yo',
    value: 'Yoruba',
  },
  {
    label: 'za',
    value: 'Zhuang; Chuang',
  },
  {
    label: 'zh',
    value: 'Chinese',
  },
  {
    label: 'zu',
    value: 'Zulu',
  },
];

export default function App() {
  const [text, SetText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [languageCode, setlanguageCode] = useState();
  const [result, SetResult] = useState('');
  const [loading, SetLoading] = useState(false);

  async function GetResult() {
    if (languageCode === undefined || text.length === 0) {
      SetResult(
        'Make sure to add the text to convert and select the language to convert to',
      );
    } else {
      SetLoading(true);
      axios({
        method: 'get',
        url:
          'https://translation.googleapis.com/language/translate/v2?target=' +
          languageCode +
          'AIzaSyCb1qwxBf8xq87vbaUiZNQ6iEHKk0MHniw' +
          text,
      })
        .then(response => {
          SetResult(response.data.data.translations[0].translatedText);
          SetLoading(false);
        })
        .catch(error => {
          SetResult(
            'Bummer :( Error to translate , make sure the language is supported or internet connection is available',
          );
          SetLoading(false);
        });
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Translator</Text>
      <Text style={styles.subtitle}> Powered Translator</Text>

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Enter the text to translate"
        placeholderTextColor="#9a73ef"
        multiline={true}
        onChangeText={text => {
          SetText(text);
        }}
        autoCapitalize="none"
      />
      <View style={{padding: 20, alignSelf: 'stretch'}}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="value"
          valueField="label"
          placeholder={!isFocus ? 'Select language you want to convert' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.label);
            setlanguageCode(item.label);
            setIsFocus(false);
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={GetResult}>
            Translate your Text
          </Text>
        </TouchableOpacity>
      </View>
      {loading === false ? (
        <Text style={styles.subtitle}>{result}</Text>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </ScrollView>
  );
}

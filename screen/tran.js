// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';
// import axios from 'axios';

// const TranslationApp = () => {
//   const [text, setText] = useState('');
//   const [languageCode, setLanguageCode] = useState('fr'); // Set your desired target language code
//   const [translation, setTranslation] = useState('');

//   const translateText = async () => {
//     try {
//       const apiKey = 'AIzaSyCb1qwxBf8xq87vbaUiZNQ6iEHKk0MHniw'; // Replace with your Google Cloud Translation API key
//       const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&target=${languageCode}&q=${text}`;
      
//       const response = await axios.post(apiUrl);
//       const translatedText = response.data.data.translations[0].translatedText;
      
//       setTranslation(translatedText);
//     } catch (error) {
//       console.error('Error translating text:', error);
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Enter text to translate"
//         value={text}
//         onChangeText={(newText) => setText(newText)}
//       />
//       <Button title="Translate" onPress={translateText} />
//       {translation !== '' && <Text>Translation: {translation}</Text>}
//     </View>
//   );
// };

// export default TranslationApp;

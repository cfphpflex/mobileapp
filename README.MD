npm install -g expo-cli

expo init mobilesimpleapp

cd mobilesimpleapp

yarn start

npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-vector-icons --legacy-peer-deps

npx expo start --reset-cache

expo login
requires apple developer prog.

eas build -p ios 

git remote add origin https://github.com/yourusername/mobileapp.git

git branch -M main

git push -u origin main
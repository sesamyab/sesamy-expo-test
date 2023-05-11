import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [url, setUrl] = useState("https://www.sesamy.com");
  const [currentUrl, setCurrentUrl] = useState(url);

  const handleUrlChange = (text: string) => {
    setCurrentUrl(text);
  };

  const handleGoPress = () => {
    // Here you could add some URL validation before setting it
    setUrl(currentUrl);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.urlInputView}>
        <TextInput
          style={styles.urlInput}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleUrlChange}
          onSubmitEditing={handleGoPress}
          value={currentUrl}
          placeholder="Enter URL"
        />
        <Button title="Go" onPress={handleGoPress} />
      </View>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  urlInputView: {
    flexDirection: "row",
    padding: 10,
    height: 50,
  },
  urlInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
  },
  webview: {
    flex: 1,
  },
});

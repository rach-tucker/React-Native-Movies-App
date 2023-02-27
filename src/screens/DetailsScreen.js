import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ( {navigation, route} ) => {
    console.log(route);
    return (
      <View style={styles.mainView}>
        <Text>Details Screen</Text>
          <Button
            title="Go to Image"
            onPress={() => {navigation.navigate("Go to BigImageView")}}/>
          <Button
            title="More Details"
            //the 'push' below forces the stack navigator to create another instance of the detail screen (creates a new "key" each time user navigates from details to details.)
            onPress={() => {navigation.push("Details_To_Details")}}/>
          <Button
            title="Go Back a Screen"
            onPress={() => {navigation.popToTop()}}/>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;
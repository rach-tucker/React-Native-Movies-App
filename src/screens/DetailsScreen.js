import React, {useEffect} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ( {navigation, route} ) => {
    console.log(route);
    const movie = route.params.movie;
    useEffect(() => {
      const xhr = new XMLHttpRequest();
    //takes in 2 parameters, the method type and the URL of the request. 
      xhr.open('GET', "https://www.omdbapi.com/?apikey=92238e89&t=star+wars&y=1977");
      xhr.send();

      console.log(xhr.responseText);

    }, []); //empty array indicates the function should only be called once after the screen is loaded
    

    
    return (
      <View style={styles.mainView}>
        
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


import React, {useEffect} from 'react';
import {useState} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ( {navigation, route} ) => {
    console.log(route);
    const movie = route.params.movie;
    const [movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
      const xhr = new XMLHttpRequest();
    //takes in 2 parameters, the method type and the URL of the request. 
      xhr.open('GET', "https://www.omdbapi.com/?apikey=92238e89&t=star+wars&y=1977");
      xhr.send();
      xhr.onload = () => {
        if (xhr.status == 200){
          let response = JSON.parse(xhr.response);
          setMovieDetails(response);

        }else{
          console.log(`HTTP Request Failed ${xhr.status}`);
        }
      };
      xhr.onerror = () => {
        console.log("Error")
      };


    }, []); //empty array indicates the function should only be called once after the screen is loaded
    

    
    return (
      //values initially set to null so that when the screen is first accessed, there isn't an error since the information from the XHR has not been loaded.
      <View style={styles.mainView}>
        <Text>{
          (movieDetails == null ? "" : movieDetails.Title)
        }</Text>
        <Text>{
          (movieDetails == null ? "" : movieDetails.Released)
        }</Text>
        <Text>{
          (movieDetails == null ? "" : movieDetails.Plot)
        }</Text>
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


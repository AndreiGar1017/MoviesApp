import React, {useState} from "react";
import { Text, View, FlatList, Image, TextInput, TouchableOpacity, StyleSheet  } from "react-native";

export default App = () =>{
  const [movies, setMovies] = useState([
    {
      id: 1, name: 'Pinocho', director: 'Guillermo del Toro', url: 'https://pics.filmaffinity.com/Pinocho_de_Guillermo_del_Toro-534628657-large.jpg'
    },
    {
      id: 2, name: 'Goodfellas', director: 'Martin Scorsese', url: 'https://m.media-amazon.com/images/I/81uOV6oMYtL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 3, name:'Interestelar', director: 'Christopher Nolar', url: 'https://moviepostermexico.com/cdn/shop/products/interstellar_ver5_xxlg_530x@2x.jpg?v=1571092130'
    },
    {
      id: 4, name: 'El lobo de Wallstreet', director: 'Martin Scorsese', url: 'https://es.web.img3.acsta.net/pictures/210/615/21061596_20131129121836144.jpg'
    }
  ])
  return[
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Cinema App!</Text>
      <FlatList data={movies} renderItem = {({item}) =>(
      <>
        <Image style={styles.image} source={{uri: item.url}}/>
        <Text>{item.name}</Text>
        <Text>{item.director}</Text>
      </>
      )}
        keyExtractor={item => item.id}
      />
    </View>
  ]
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image:{
    width: 200,
    height: 300,
    marginBottom: 20
  }
}
)
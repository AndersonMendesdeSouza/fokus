import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
export default function Index() {
  return (
    <View style={estilizador.container}>
      <Image
        source={require('./pomodoro.png')}
        resizeMode="contain"
        style={{ width: 200, height: 200 }}
      />

      <View style={estilizador.actions}>
    <Text style={estilizador.timer}>25:00</Text>

<Pressable style={estilizador.button}>
  <Text style= {estilizador.textButton}>Começar</Text>
</Pressable>
      </View>
<View style={estilizador.footer}>
  <Text style={estilizador.footerText}>
    Projeto fictício e sem fins comerciais.
  </Text>

   <Text style={estilizador.footerText}>
  Desenvolvido por Anderson.
  </Text>
</View>
    </View>
  );
}

const estilizador = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  actions: {
    backgroundColor: "#14448080",
    paddingVertical: 24,
    paddingHorizontal: 24,
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap:32
   
  },
  timer:{
    fontSize: 54,
    color:"#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  button:{
    backgroundColor: "#bb72ff",
    padding:8,
    borderRadius:32,
  },
  textButton:{
    color: "#021132",
    textAlign:"center",
    fontSize:18
  },
  footer:{
 width:"80%"
  },
  footerText:{
    textAlign:"center",
    color:"white",
    fontSize:12.5
  }
});


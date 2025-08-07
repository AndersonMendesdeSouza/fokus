import { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
 
const pomodoro = [
  {
    id:'focus',
    initialvalue: 25,
    image: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
   id:'short',
   initialvalue: 5,
   image: require('./short.png'),
   display: 'Pausa Curta'
  },
  {
    id:'long',
    initialvalue: 15,
    image: require('./long.png'),
       display: 'Pausa Long'
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={estilizador.container}>
      <Image
        source={timerType.image}
        resizeMode="contain"
        style={{ width: 200, height: 200 }}
      />

      <View style={estilizador.actions}>
<View style={estilizador.context}>
{pomodoro.map(i => (

   <Pressable key={i.id}
style={
  timerType.id === i.id ? estilizador.focoactive : null}
  onPress={() => setTimerType(i)}
> <Text style={estilizador.focos}> {i.display}</Text></Pressable>
))}

</View>

    <Text style={estilizador.timer}>{ new Date(timerType.initialvalue * 1000).toLocaleTimeString('pt-BR', {minute: '2-digit',second: '2-digit'})}</Text>

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
  },
  context:{
    flexDirection: "row",
 justifyContent: "space-around",
 alignItems: "center"
 
  },
  focos:{
    fontSize:12.5,
    color:"#fff",
    padding: 8
  },
  focoactive:{
    backgroundColor:"#144480",
    borderRadius:8
  }
});


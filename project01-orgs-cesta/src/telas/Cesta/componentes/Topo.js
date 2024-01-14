import { Image, SafeAreaView, StyleSheet, Dimensions } from "react-native";

import Texto from "../../../componentes/Texto";

import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return (
    <SafeAreaView>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
    zIndex: 0,
    position: "relative",
  },
  titulo: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "bold",
    padding: 16,
    position: "absolute",
    color: "white"
  },
})
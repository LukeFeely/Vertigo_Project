import React, { PureComponent } from "react";
import { StyleSheet, View,Image } from "react-native";
import coin from "./coin.png"

class Coin extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let width = this.props.size[0];
    let height = this.props.size[1];
    let x = this.props.position[0];
    let y = this.props.position[1];
    //const angle = this.props.body.angle;



    return (
      <Image
        source={coin}
        style={[{
        left: x,
        top: y,
        width: width,
        height: height,
        position: "absolute",
      }]} />
      
      
    );
  }
}


export { Coin };

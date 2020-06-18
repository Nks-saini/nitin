import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  AsyncStorage,
  ScrollView,
  Modal,
  FlatList,
  Platform,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { View, Button } from "native-base";
import Gallery from "react-native-image-gallery";

export default class Img extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TempImageURL: "",
      isLoading: true,
      ModalVisibleStatus: false,
      data1: [],
    };
  }

  componentDidMount() {
    console.log(
      "https://api.tjori.com/api/v2/p/" +
        this.props.data.slug +
        "/" +
        this.props.data.id +
        "/?format=json"
    );

    fetch(
      "https://api.tjori.com/api/v2/p/" +
        this.props.data.slug +
        "/" +
        this.props.data.id +
        "/?format=json"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log();
        this.setState({
          data1: responseJson.product.images,
          isLoading: false,
        });
        // console.log(data1)
      });
  }

  ShowModalFunction(visible, imageURL) {
    this.setState({
      ModalVisibleStatus: visible,
      TempImageURL: imageURL,
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.data1}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
              <TouchableOpacity
                onPress={this.ShowModalFunction.bind(
                  this,
                  true,
                  item.cdn_url_image
                )}
              >
                <Image
                  style={styles.imageThumbnail}
                  source={{ uri: item.cdn_url_image }}
                />
              </TouchableOpacity>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />

        {this.state.ModalVisibleStatus ? (
          <Modal
            transparent={false}
            animationType={"fade"}
            visible={this.state.ModalVisibleStatus}
            onRequestClose={() => {
              this.ShowModalFunction(!this.state.ModalVisibleStatus);
            }}
          >
            <View style={styles.modalView}>
              <Image
                style={styles.mainImage}
                source={{ uri: this.state.TempImageURL }}
              />

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacity_Style}
                onPress={() => {
                  this.ShowModalFunction(!this.state.ModalVisibleStatus);
                }}
              >
                <Image
                  source={{
                    uri:
                      "https://reactnativecode.com/wp-content/uploads/2018/01/close_button.png",
                  }}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 255,
  },

  mainImage: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "98%",
    resizeMode: "contain",
  },

  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  TouchableOpacity_Style: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: "absolute",
  },
});

//  render(){

//   console.log(this.props.data.id)
//   return (
//     <ScrollView>
//       <Text style={{textAlign:"center",fontSize:25}}>Images Gallery</Text>

//       {this.state.data1.map((p, index) => (

//               <View style={{width: 200, height: 200, }}>
//                 <Image
//                   style={{width: 160, height: 180,marginTop:2,marginLeft:10}}
//                   source={{ uri:p.cdn_url_image}}
//                 />
//                 </View>

//             ))}

//     </ScrollView>

//   );
// }

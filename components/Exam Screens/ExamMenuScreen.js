import { Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView} from 'react-native';
import { colors } from '../utils/colors';

const ExamMenuScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
           <View>
            <Text style={styles.title}>EXAM</Text>
            <Text style={styles.description}>
              Find a workflow that works for you!
            </Text>
          </View>
        <ScrollView
        contentContainerStyle={{flexGrow : 1, alignItems : 'center'}}
        style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("InspectEyes")}>
            <Text style={styles.section}>
              Inspect eyelids and eyeballs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("TVFields")}>
            <Text style={styles.section}>
              Test visual fields
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("TestMovements")}>
            <Text style={styles.section}>
              Test extraocular movements
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("TestPupils")}>
            <Text style={styles.section}>
              Test pupils
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("TestVA")}>
            <Text style={styles.section}>
              Test visual acuity
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("AdministerDrops")}>
            <Text style={styles.section}>
              Administer eye drops
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: colors.bgwhite,
          alignItems: 'center',
      },
      scrollView: {
          marginBottom: 70,
      },
      description: {
        fontSize: Platform.OS === "android" ? 17: 17,
        fontFamily: 'OpenSansBold',
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
        marginRight: 30,
        marginLeft: 30,
      },
      section: {
          fontSize: Platform.OS === "android" ? 25: 25,
          color: colors.darkblue,
          fontFamily: 'OpenSansBold',
          textAlign: 'center',
          marginLeft: 2,
          marginRight: 2,
          marginVertical: Platform.OS === "android" ? 13: 16,
      },
      sectionBox: {
          borderWidth: 1,
          borderColor: colors.darkblue,
          backgroundColor: colors.lightblue,
          borderRadius: 5,
          width: 323,
          minHeight: 58,
          justifyContent: 'center',
          marginBottom: 20,

      },
      title: {
          fontSize: Platform.OS === "android" ? 50: 70,
          marginTop: Platform.OS === "android" ? 60: 30,
          marginBottom: 20,
          color: colors.darkerblue,
          fontFamily: 'Copperplate',
          textAlign: 'center'
      },
  });

const FadeInView = (props, { navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <Animated.View // Special animatable View
      style={{
        flex: 1,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};


export default ExamMenuScreen;

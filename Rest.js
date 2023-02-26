import { useNavigation } from "@react-navigation/native"
import { View, Text, Pressable } from 'react-native'
import OtherPage from "./OtherPage"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

const Rest = () => {

    // const nav = useNavigation();

    return (
        <Stack.Navigator
            initialRouteName="Yolo"
        >
            <Stack.Screen name="Yolo" component={({ navigation }) => (
                <Pressable
                    style={{
                        backgroundColor: "red",
                        width: 100,
                        height: 100,
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text>Settings</Text>
                </Pressable>
            )} />
            <Stack.Screen name="Home" component={OtherPage} />
        </Stack.Navigator>
    )
}
export default Rest
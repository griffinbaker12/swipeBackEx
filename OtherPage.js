import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
// create navigators
const Tab = createMaterialTopTabNavigator();

const OtherPage = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={() => {
                <View>
                    <Text>Home</Text>
                </View>
            }} />
            <Tab.Screen name="Settings" component={() => {
                <View>
                    <Text>Settings</Text>
                </View>
            }} />
        </Tab.Navigator>
    )
}
export default OtherPage
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home';
import Deposer from './Deposer';
import Demander from './Demander';
import Loading from './loading';

export default createAppContainer(AppNavigator)
const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    Despose: {
        screen: Deposer
    },
    Receive: {
        screen: Demander
    },
    Load: {
        screen: Loading
    } 
})



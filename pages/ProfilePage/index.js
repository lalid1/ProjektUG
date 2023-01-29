import { View, Text} from 'react-native';

import styles from './styles.js';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index';
import { users } from '../RegisterPage/index'



const ProfilePage = (props) => {

    var login = props.navigation.getParam('login', null)
    var user = users[login]

    return (
        <View style={[styles.container, { flexDirection: 'column', }]}>
            <Header style={{ flex: 1 }} />
            <View style={{ flex: 1, padding: 15, margin: 7}}>
                <Text style={{ color: '#000000', fontSize: 20 }}>USERNAME</Text>
                <Text style={{ color: '#000000', fontSize: 40 }}>{user.login}</Text>
                
                <Text style={{ color: '#000000', fontSize: 20 }}>EMAIL</Text>
                <Text style={{ color: '#000000', fontSize: 38 }}>{user.email}</Text>
                <Text
                    style={{ color: 'green',fontSize: 20 }}
                    onPress={() =>
                        props.navigation.navigate('ResetPassword', { 'navigation': props.navigation })
                    }>
                    Click to reset the password
                </Text>
            </View>
            <Footer style={{ flex: 1 }}
                profileType='primary'
                navigation={props.navigation}
                login={login} />
        </View>
    );
};

export default ProfilePage;
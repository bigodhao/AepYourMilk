import React, {Component} from 'react';
import {View} from 'react-native';

//import this
import ScrollingButtonMenu from 'react-native-scroll-menu';

//define menu
let menus = [
    {
        name: 'Cadastro',
        id: 1,
        backgroundColor: '#388E3C',
        borderColor: '#388E3C',
    },
    {
        text: 'Gráficos',
        id: 2,
    }
];

export default class MenuPrincipal extends Component {
    render() {
        return (
            <ScrollingButtonMenu
                items={[
                    {
                        id: 1,
                        name: 'Cadastro',
                    },
                    {
                        id: 2,
                        name: 'Gráficos',
                    },
                    {
                        id: 3,
                        name: 'Escanear Bovino',
                    },
                    {
                        id: 4,
                        name: 'Configurações',
                    },
                ]}
                onPress={(e) => {
                    console.log(e);
                }}
                selected={7}
            />
        );
    }
}

// const menuPincipal = new MenuPrincipal();
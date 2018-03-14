import React from 'react';
import { Button } from 'react-native';


const fetchLocation = (props) => {



    return (

        <Button 
            title="blast" 
            icon={{ name: 'lock' }} 
            color="red" 
            onPress={props.pressed}>
        </Button>
    )
}

export default fetchLocation;
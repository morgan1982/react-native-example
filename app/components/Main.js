import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Note from './Note'

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            noteArray: [],
            noteText: '',
        }
    }

    addNote() {

        if(this.state.noteText) {

            let d = new Date();
            const list = this.state.noteArray.slice()
            list.push({
                'date': d.getFullYear() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getDate(),
                'note': this.state.noteText
            })
            this.setState({
                noteArray: list,
                noteText: ''
            })
        }
        console.log(this.state.noteArray);
    }
    deleteNote(key) {
        const notes = this.state.noteArray.slice();
        notes.splice(key, 1);
        console.log(notes);
        this.setState({
            noteArray: notes
        })
    }



    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                         deleteMethod={ () => this.deleteNote(key) }/>
        })

        return (

            <View style={styles.container}>
                <View style={styles.header}>
                 <Text style={styles.headerText}>--NOTER--</Text>
               </View>
               <ScrollView style={styles.scrollContainer}>
                    {notes}
               </ScrollView>
               <View style={styles.footer}>
                 <TextInput style={styles.textInput}
                            placeholder='note'
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            underlineColorAndroid='transparent'
                            onChangeText={(noteText) => this.setState({
                                noteText
                            })}
                            value={this.state.noteText}                            
                             >

                 </TextInput>
               </View>
               <TouchableOpacity style={styles.addButton}
                                 onPress={ this.addNote.bind(this) }>
                   <Text style={styles.addButtonText}>+</Text>
               </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,

    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',

    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    }

});
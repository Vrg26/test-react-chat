import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";

const Chat = () => {

    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');
    }

    if(loading){
        return <Loader/>
    }

    return (
        <div>
            <div>
                {messages.map(message =>
                    <div>{message.displayName} - {message.text}</div>
                )}
            </div>
            <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
            <button onClick={sendMessage} >Отправить</button>
        </div>
    );
};

export default Chat;
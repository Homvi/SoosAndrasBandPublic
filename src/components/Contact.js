import React from 'react'
import "./Contact.scss"


const Contact = () => {
    return (
        <div id="contact" >
            <p className="kapcsolat">Kapcsolat</p>
            <div className="contacts-container">
                <p>Koncertszervezés:</p>
                <p>Email: czpetya@gmail.com</p>
                <p>Tel.: +36304022494</p>
            </div>
            <div className="contacts-container">
                <p>Sajtókapcsolat:</p>
                <p>czpetya@gmail.com</p>
            </div>
            <div className="contacts-container">
                <p>Egyéb infók:</p>
                <p>czpetya@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact

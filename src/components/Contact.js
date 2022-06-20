// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './contact.css';
import '../data/contacts.json'

const Contact = ({ data }) => {
    return (
        <div className="card">
            <div className="container">
                <img className='img' src={data.photo} alt={data.name} />
                <div className="content">
                    <h2>{data.name}</h2>
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                </div>
            </div>
        </div>

    )
}

export default Contact;
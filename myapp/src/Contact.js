import React from 'react';

const Contact = (props) => {
        const { contactForm } = props;
        const formList = contactForm.map(contact => {
            return (
                <div className="ContactFrom" key = {contact.id}>
                <div>{ contact.name }</div>
                <div>{ contact.age }</div>
                <div>{ contact.sex }</div>
            </div>
            )
        })
        // console.log(contactForm);
        return (
            <div className="formList">
                { formList }
            </div>
        )
    }


export default Contact
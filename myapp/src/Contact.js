import React from 'react';

const Contact = (props) => {
    const { contactForm } = props;
    // if条件语句
    // const formList = contactForm.map(contact => {
    //     if (contact.age >= 30) {
    //     return (
    //             <div className="ContactFrom" key = {contact.id}>
    //             <div>{ contact.name }</div>
    //             <div>{ contact.age }</div>
    //             <div>{ contact.sex }</div>
    //         </div>
    //         )
    //     } else {
    //         return null
    //         }
    //     })

    //三元运算符
    // const formList = contactForm.map(contact => {
    //     return contact.sex === 'Male' ? (
    //          <div className="ContactFrom" key = {contact.id}>
    //             <div>{ contact.name }</div>
    //             <div>{ contact.age }</div>
    //             <div>{ contact.sex }</div>
    //        </div>
    //     ) : null
    // })
        return (
            <div className="formList">
                {
                 contactForm.map(contact => {
                        return contact.sex === 'Male' ? (
                             <div className="ContactFrom" key = {contact.id}>
                                <div>{ contact.name }</div>
                                <div>{ contact.age }</div>
                                <div>{ contact.sex }</div>
                           </div>
                        ) : null
                    })
                }
            </div>
        )
    }


export default Contact
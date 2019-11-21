import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {

    state = {
        services:[
            {
                icon: <FaCocktail />,
                title: 'Free cocktails',
                info: 'Id duis aliqua tempor laboris dolore fugiat tempor dolore non tempo labore magna velit et. Voluptate id fugiat Lorem reprehenderit id Lorem dolor. Tempor incididunt eu proident deserunt consectetur velit id do. Aliqua nostrud amet dolor commodo.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless hiking',
                info: 'Id duis aliqua tempor laboris dolore fugiat tempor dolore non tempo labore magna velit et. Voluptate id fugiat Lorem reprehenderit id Lorem dolor. Tempor incididunt eu proident deserunt consectetur velit id do. Aliqua nostrud amet dolor commodo.'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'Free shuttle',
                info: 'Id duis aliqua tempor laboris dolore fugiat tempor dolore non tempo labore magna velit et. Voluptate id fugiat Lorem reprehenderit id Lorem dolor. Tempor incididunt eu proident deserunt consectetur velit id do. Aliqua nostrud amet dolor commodo.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Id duis aliqua tempor laboris dolore fugiat tempor dolore non tempo labore magna velit et. Voluptate id fugiat Lorem reprehenderit id Lorem dolor. Tempor incididunt eu proident deserunt consectetur velit id do. Aliqua nostrud amet dolor commodo.'
            }
        ]
    }

    render() {
        return (
            <section className="services">               
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map( (item,index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                        </article>
                    })}
                </div>                   
            </section>
        )
    }
}

import React from 'react'
import Room from './Room'
import { RoomConsumer } from '../context'

export default function RoomList({rooms}) {

    if(rooms.length === 0){
        return(
            <div className = "empty-search">
                <h3> unfortunately no rooms matched!</h3>
            </div>
        )
    }

    return (
        <section className='rooms-list'>
            <div className='roomslist-center'>
                {
                    rooms.map(item =>{
                        return <Room key={item.id} room={item}></Room>
                    })
                }
            </div>
        </section>
    )
}

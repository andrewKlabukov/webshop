import { useState, useEffect } from 'react'
import Card from './Card';

export default function Showcase() {

    const [showcase, setShowcase] = useState([]);

    useEffect(()=> {
        fetch('products.json')
        //fetch('http://localhost:4040/products')
            .then(res => res.json()) // res - response содержится сообщения об ошибках
            .then(arr => setShowcase(arr))
            .catch(err => setShowcase([]))
    }, [])

    return (
        <>  
        <h2>The Showcase</h2>      
        <div className="row">
          {
              showcase.map(card => {
                const props = {...card, key: card.id}
                return <Card {...props} />
              })
          }
        </div>
        </>
    );
}

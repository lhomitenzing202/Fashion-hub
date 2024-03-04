import './Newcollection.css'
import '../Assets/new_collections'
import new_collections from '../Assets/new_collections'
import Item from '../Items/Item'

export const Newcollection = () => {
  return (
    <div className="new-collection">
        <h1>Latest Arrivals</h1>
        <hr/>

        <div className="collection">
            {new_collections.map((item , i)=>{
                return <Item
                key={i}
                id = {item.id}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                image={item.image}
              />
            })}
        </div>
    </div>


  )
}

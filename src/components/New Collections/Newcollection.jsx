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
                itemName={item.name}
                newPrice={item.new_price}
                oldPrice={item.old_price}
                imageUrl={item.image}
              />
            })}
        </div>
    </div>


  )
}

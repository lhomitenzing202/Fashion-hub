import Hero from "../components/Hero/Hero"
import { Newcollection } from "../components/New Collections/Newcollection"
import Newsletter from "../components/Newsletter/Newsletter"
import Popular from "../components/Popular/Popular"
import Offers from "../components/offers/Offers"


const Shop = () => {
  return (
    <div>
      <Hero/>
    <Popular/>
    <Offers/>
    <Newcollection/>
    <Newsletter/>
    </div>
  )
}

export default Shop
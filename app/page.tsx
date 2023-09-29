import Nav from '@/components/header/Nav'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import OrderCategoryCard from '@/components/cards/ordercategory/OrderCategoryCard'
import CollectionCard from '@/components/cards/collection/CollectionCard'
import LocalityCard from '@/components/cards/localitycard/LocalityCard'
import ZomatoMobileApp from '@/components/zomato-app/ZomatoMobileApp'

// Order Category Images
import orderOnlineImg from '@/assets/order-category/orderonline.jpg'
import diningImg from '@/assets/order-category/dining.jpg'

// Collection Card Images

export default function Home() {
  return (
    <div className=''>
      <Nav />
      <Hero />

      {/* OrderType */}
      <section className="order-type grid grid-cols-2 md:grid-cols-3 px-5 pt-10 gap-3 lg:px-[20vw]">
        <OrderCategoryCard  className="col-span-2 md:col-span-1" img={orderOnlineImg} title="Order Online" subtitle="Stay home and order to ..." />
        <OrderCategoryCard img={diningImg} title="Dining" subtitle="View the city's facourite ..." />
        <OrderCategoryCard img={orderOnlineImg} title="Nightlife and Clubs" subtitle="Explore the city's top nig..." />
      </section>

      {/* Collections */}
      <section className="collections flex flex-col px-5 pt-10  lg:px-[20vw]">
        <p className="text-[50px]">Collections</p>
        <p className="text-lg">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
        </p>
        <div className="collection-cards-container  grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">

        <CollectionCard img={orderOnlineImg} title="24 places for ok..." subtitle="23 places" />
        <CollectionCard img={diningImg} title="24 places for ok..." subtitle="23 places" />
        <CollectionCard img={orderOnlineImg} title="24 places for ok..." subtitle="23 places" />
        <CollectionCard img={diningImg} title="24 places for ok..." subtitle="23 places" />
        </div>
      </section>

      {/* Localities */}
      <section className="localities px-5 pt-10  lg:px-[20vw]">
        <p className="text-[2rem]">Popular localities in and around <b>Delhi NCR</b></p>
        <div className="locality-cards-container grid grid-cols-1 gap-2 md:grid-cols-3">
          <LocalityCard title="RK Puram Sec-1" numPlaces={12} />
          <LocalityCard title="Hariom Nagar" numPlaces={53} />
          <LocalityCard title="Atul Vihar" numPlaces={123} />
          <LocalityCard title="Mohammadpur" numPlaces={79} />
          <LocalityCard title="Ambedkar Town" numPlaces={28} />
          <LocalityCard title="Gonda" numPlaces={46} />
        </div>
      </section>

      <section className='mobile-app px-5 mt-10 bg-[#FFFBF7]  lg:px-[20vw]'>
<ZomatoMobileApp />
      </section>
      <div className='bg-[#F9F9F9] lg:px-[20vw]'>

      <Footer />
      </div>
    </div>
  )
}

<template>
  <div id="app" class="antialiased text-gray-900 bg-gray-200 min-h-screen">
    <Navbar/>
    <div class="container">
      <Workcation />
      <PropertyCard :property="property"/>
    </div>
  </div>
</template>

<script>
import Workcation from './components/Workcation';
import PropertyCard from './components/PropertyCard';
import Navbar from './components/Navbar';
export default {
  name: 'app',
  components: {
    Workcation,
    PropertyCard,
    Navbar,
  },
    data: () => ({
    property: {
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: "Modern home in city center",
      priceInCents: 190000,
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    }
  })
}
</script>

<style src="./assets/tailwind.css"></style>

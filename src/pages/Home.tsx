import React from 'react';
import Layout from '../components/layout/Layout';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import BrandStory from '../components/home/BrandStory';
import JournalSection from '../components/home/JournalSection';
import Newsletter from '../components/home/Newsletter';
import InstagramFeed from '../components/home/InstagramFeed';
import { products, categories, blogPosts } from '../data';

const Home: React.FC = () => {
  const newArrivals = products.filter(product => product.isNewArrival);
  const bestsellers = products.filter(product => product.isBestseller);
  
  return (
    <Layout>
      <HeroBanner />
      
      <FeaturedProducts
        title="New Arrivals"
        subtitle="Our latest collection of handcrafted pieces made with love and natural fabrics"
        products={newArrivals}
      />
      
      <CategorySection
        title="Explore by Category"
        subtitle="Discover our curated collections of premium ethnic wear"
        categories={categories}
      />
      
      <BrandStory />
      
      <FeaturedProducts
        title="Bestsellers"
        subtitle="Our most loved pieces, cherished for their comfort, quality and timeless design"
        products={bestsellers}
      />
      
      <JournalSection
        title="The Journal"
        subtitle="Stories, styling inspiration, and a deeper look into our craft"
        posts={blogPosts}
      />
      
      <Newsletter />
      
      <InstagramFeed />
    </Layout>
  );
};

export default Home;
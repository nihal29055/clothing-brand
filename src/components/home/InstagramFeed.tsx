import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/7586107/pexels-photo-7586107.jpeg',
    caption: 'New arrivals from our Summer collection #karppasa #sustainablefashion'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/6213870/pexels-photo-6213870.jpeg',
    caption: 'Styling our favorite linen pieces for the season #naturalfabrics'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/4210850/pexels-photo-4210850.jpeg',
    caption: 'Behind the scenes with our artisan partners #handcrafted'
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
    caption: 'The making of our signature Kalamkari prints #traditionalcraft'
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/7682670/pexels-photo-7682670.jpeg',
    caption: 'Weekend vibes in our bestselling handloom dress #slowfashion'
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/7679724/pexels-photo-7679724.jpeg',
    caption: 'Celebrating the beauty of natural dyes #ecofriendly #karppasa'
  }
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-3">
            Follow Our Journey
          </h2>
          <p className="text-gray-600 flex items-center justify-center">
            <Instagram size={20} className="mr-2" />
            <span>@karppasa</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a 
              key={post.id} 
              href="#" 
              className="group relative block overflow-hidden"
              aria-label={post.caption}
            >
              <div className="aspect-square">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-white p-3 text-center">
                  <Instagram size={24} className="mx-auto mb-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
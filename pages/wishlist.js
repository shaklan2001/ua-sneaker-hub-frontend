import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import RelatedProducts from '@/components/RelatedProducts';
import { useSelector } from 'react-redux';
import { fetchDataFromApi } from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Wishlist = ({ product, products }) => {
  const { favouritesItems } = useSelector((state) => state.favourites);
  const [relatedProducts, setRelatedProducts] = useState(null);

  useEffect(() => {
    // Fetch related products when component mounts
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetchDataFromApi('/api/products?populate=*');
        setRelatedProducts(response);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchRelatedProducts();
  }, []); // Run the effect only once when component mounts

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {favouritesItems.length > 0 ? (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Favourites
              </div>
            </div>

            {/* products grid start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
              {favouritesItems.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex-[2] flex flex-col items-center pt-[90px] pb-[28px] md:-mt-14">
            <span className="text-xl font-bold">
              Your Favourites is empty
            </span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your Favourites.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
        {/* products grid end */}

        {relatedProducts && <RelatedProducts products={relatedProducts} />}
      </Wrapper>
    </div>
  );
};

export default Wishlist;

import React from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import LatestProducts from "@/components/LatestProducts.jsx";

const maxResult = 9;



export default function Home({ products, slug }) {

  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );



  return (
    <main className="">
      <HeroBanner />
      <Wrapper>
        <div className="pb-[80px]">
          < LatestProducts products={products} />
        </div>
      </Wrapper>

      <Wrapper>

        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]  pb-[10px]">
        <div className="text-[20px] md:text-[20px] font-semibold leading-tight">
            'Air Force 1'
          </div>
          <div className="text-[50px] md:text-[65px] mb-4 font-extrabold leading-tight ">
            TRIPLE WHITE
          </div>
          <div className="text-md md:text-xl pb-[30px]">
          The Nike Air Force 1 White '07 Triple White is a classic style that never gets old.
          </div>
          <Link href="/product/air-force-1">
            <button className="w-[120px] py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Shop Now
            </button>
          </Link>
        </div>
      </Wrapper>

      <div className="w-full max-w-[1440px] px-5 md:px-10 mx-auto pb-[60px]">
        <video className="w-90vw sm:w-80vw md:w-70vw lg:w-60vw xl:w-50vw" src="/videoplayback.mp4" autoPlay muted loop />
      </div>

      <Wrapper>
        {/* heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[50px] md:text-[65px] mb-5 font-extrabold leading-tight">
            UA's
          </div>
          <div className="text-md md:text-xl">
            Step into style and comfort with UA shoes - where every stride is a statement of performance and fashion.
          </div>
        </div>
        {/* heading and paragraph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        {/* products grid end */}

        {/* PAGINATION BUTTONS START */}

        {/* {data?.meta?.pagination?.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0 pb-10">
            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >

              <BiArrowBack className="text-sm md:text-lg" />
            </button>

            <span className="font-bold">{`${pageIndex} of ${data && data.meta.pagination.pageCount
              }`}</span>

            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >

              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </button>
          </div>
        )} */}

        {/* PAGINATION BUTTONS END */}
        < Link href="/allproduct">
          <div className="flex gap-3 items-center justify-center my-16 md:my-0 pb-10">
            <Button variant="link" className="font-bold text-[18px]">View All</Button>
          </div>
        </Link>

        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/logo.png" width={150} />
            <span className="text-3xl font-medium">Loading...</span>
          </div>
        )}

        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]  pb-[10px]">
        <div className="text-[20px] md:text-[20px] font-semibold leading-tight">
            'Air Jordan 1'
          </div>
          <div className="text-[50px] md:text-[65px] mb-4 font-extrabold leading-tight ">
            Lost and Found
          </div>
          <div className="text-md md:text-xl pb-[30px]">
            The AJ1 'Chicago' was inspired by the high -op Air Jordan 1 original colourway, first released in 1985. The shoe harkens back to a time when shoe boxes were often lost in inventory stockrooms, only to be found again years later.
          </div>
          <Link href="/product/air-jordan-1-lost-and-found">
            <button className="w-[120px] py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Shop Now
            </button>
          </Link>
        </div>
      </Wrapper>
      <div className="w-full max-w-[1440px] px-5 md:px-10 mx-auto pb-[60px]">
        <video className="w-90vw sm:w-80vw md:w-70vw lg:w-60vw xl:w-50vw" src="/videoplayback (2).mp4" autoPlay muted loop />
      </div>



    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi(
    `/api/products?populate=*&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
    props: { products },
  };
}

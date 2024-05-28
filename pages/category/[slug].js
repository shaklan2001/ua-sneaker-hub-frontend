import React, { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";
const maxResult = 30;

const Category = ({ category, products, slug }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { query } = useRouter();

  useEffect(() => {
    setPageIndex(1);
  }, [query]);

  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );
  

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[50px] md:text-[55px] mb-4 font-extrabold leading-tight">
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          
        </div>
        {/* products grid end */}
      
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");
  const paths = category?.data?.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}

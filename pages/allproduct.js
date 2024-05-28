import React from "react";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const maxResult = 15;

export default function allproduct({ products, slug }) {

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

            <Wrapper>
                {/* heading and paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[65px] mb-5 font-extrabold leading-tight">
                        All Collection's
                    </div>
                    <div className="text-md md:text-xl">

                        Stride in style with sneakers that make every step a statement.
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

                {data?.meta?.pagination?.total > maxResult && (
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
                )}

                {/*  PAGINATION BUTTONS END */}



                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.png" width={150} />
                        <span className="text-3xl font-medium">Loading...</span>
                    </div>
                )}


            </Wrapper>

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

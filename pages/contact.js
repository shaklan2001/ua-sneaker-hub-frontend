import Accordian from "@/components/Accordian";
import React, { useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";




const Contact = () => {
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    };

    const accordionData = [
        {
            title: "How do I return my order?",
            desc: "To facilitate the return process for your order, we kindly ask that you provide a comprehensive opening video of the parcel from all angles, ensuring a 360-degree view. In the event of any defects or receipt of the wrong product, rest assured that we will promptly replace the item within 10 business days. Our customer support team is dedicated to assisting you throughout the return process, ensuring a seamless experience. We prioritize your satisfaction and aim to provide you with the best possible service. Should you have any questions or concerns, please don't hesitate to reach out to us.",
        },
        {
            title: "Is COD available as a payment option?",
            desc: "Yes, cash on delivery (COD) is available as a payment option. However, for COD orders, we require a prepaid token amount of ₹500. For instance, if a product costs ₹4500 on prepaid, the total amount for COD would be ₹5000, with ₹4500 payable upon delivery and ₹500 prepaid. This ensures a smoother transaction process and helps us provide you with the best service possible.",
        },
        {
            title: "How many days does it take to deliver sneakers?",
            desc: "Our standard delivery time for product shipments is typically 5 to 7 business days. However, we're proud to offer expedited delivery services, with select cities enjoying delivery within just 48 hours. We prioritize timely delivery to ensure your satisfaction and convenience.",
        },
    ];

    return (
        <div className="text-center max-w-[1100px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Get Help
            </div>
            <div className="text-left max-w-[1500px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[27px] mb-1 font-semibold leading-tight">
                    Quick Assists
                </div>
                <div className="text-md md:text-[17px] border-b border-black pb-4">
                    Answers to our most frequently asked questions are just one click
                    away.
                </div>
                <div className="bg-white">
                    <div className="px-[10px]">
                        {accordionData.map((data, index) => {
                            return (
                                <Accordian
                                    key={index}
                                    open={index === open}
                                    title={data.title}
                                    desc={data.desc}
                                    toggle={() => toggle(index)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="text-left mt-10 text-[30px] md:text-[30px] mb-5 font-semibold leading-tight border-b border-black pb-4">
                Contact us
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[65px] pb-3">
                        <CiMobile1 />
                    </div>
                    <div className="font-semibold">
                        +91 8178517490
                    </div>
                    <div>
                    Contact on this number between 10.00 - 18.00, 6 days a week, sunday off
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[65px] pb-3">
                    <TbMessage />
                    </div>
                    <div className="font-semibold pb-1">
                        We'll reply within
                    </div>
                    <div>
                    five business days
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[65px] pb-3">
                    <FaInstagram />
                    </div>
                    <div className="font-semibold pb-1">
                        Contact us on Insta
                    </div>
                    <div>
                    In case of Emergency, message us on Instagram
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Contact;

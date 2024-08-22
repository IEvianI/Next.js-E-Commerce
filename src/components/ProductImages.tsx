"use client"

import Image from "next/image"
import { useState } from "react";

const images = [
    {
        id: 1,
        url:"https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        url:"https://images.pexels.com/photos/2155319/pexels-photo-2155319.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        url:"https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        url:"https://images.pexels.com/photos/1450083/pexels-photo-1450083.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
];

const ProductImages = () => {

    const [index, setIndex] = useState(0);
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image src={images[index].url}
                alt=""
                fill
                sizes="50vw"
                className="object-cover rounded-md"
                /> 
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                    <Image src={img.url}
                    alt=""
                    fill
                    sizes="30vw"
                    className="object-cover rounded-md"
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages
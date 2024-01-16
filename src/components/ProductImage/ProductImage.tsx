"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { useState } from "react"

interface ProductImageProps {
    name: string
    imageUrls: string[]
}

export default function ProductImage({ name, imageUrls }: ProductImageProps){

    const [ currentImage, setCurrentImage ] = useState(imageUrls[0])

    function handleClickImage(image: string){
        setCurrentImage(image)
    }

    return(
        <div>
            <div className="bg-accent h-[380px] flex items-center justify-center">
                <Image 
                    src={currentImage}
                    alt={name}
                    width={300}
                    height={300}
                />
            </div>

            <div className="grid grid-cols-4 gap-4 px-5 mt-8">
                {
                    imageUrls.map((image) => (
                        <Button 
                            onClick={() => handleClickImage(image)}
                            className={`bg-accent h-[80px] flex items-center justify-center rounded-lg
                                        ${currentImage === image && 'border-2 border-primary'}`}>
                             <Image 
                                src={image}
                                alt={name}
                                width={100}
                                height={100}
                            />
                        </Button>
                    ))
                }
            </div>
        </div>
    )
}
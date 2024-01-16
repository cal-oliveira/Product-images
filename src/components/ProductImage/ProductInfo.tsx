import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ProductInfoProps {
    name: string,
    available: boolean,
    totalPrice: number,
    basePrice: number,
    description: string
}

export default function ProductInfo({ name, available, totalPrice, basePrice, description }: ProductInfoProps){
    return(
        <div className="px-5 mt-8">
            <div>
                <h2 className="text-lg">{name}</h2>
                <p className={`text-xs ${available === true ? 'text-[#8162FF]' : 'text-[#FF0000]'}`}>{ available === true ? 'Disponível em estoque' : 'Esgotado' }</p>
            </div>

            <div className="mt-4">
                <h1 className="text-2xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
                <p className="text-sm line-through opacity-55">De: R$ {basePrice.toFixed(2)}</p>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <Button size='icon' variant='outline'>
                    <ArrowLeftIcon size={16} />
                </Button>

                <p className="text-sm">1</p>

                <Button size='icon' variant='outline'>
                    <ArrowRightIcon size={16} />
                </Button>
            </div>

            <div className="mt-8 flex flex-col gap-2">
                <h2 className="font-bold text-sm">Descrição</h2>

                <p className="text-justify text-xs opacity-50">{description}</p>
            </div>

            <Button className="w-full mt-8 font-bold text-sm">
                ADICIONAR AO CARRINHO
            </Button>

            <div className="bg-accent h-[60px] mt-5 mb-8 px-6 py-2 rounded-lg flex justify-between items-center">
                <div className="flex gap-3">
                    <Image 
                        src='/truck.png'
                        alt="truck"
                        width={30}
                        height={30}
                    />
                    <div>
                        <p className="text-xs">
                            Entrega via <span className="font-bold">Code Express®</span>
                        </p>

                        <p className="text-xs text-[#8162FF]">
                            Envio para <span className="font-bold">todo Brasil</span>
                        </p>
                    </div>
                </div>

                <p className="text-xs font-bold">Frete Grátis</p>
            </div>

            <div className="mt-8">
                <p></p>
            </div>
        </div>
    )
}
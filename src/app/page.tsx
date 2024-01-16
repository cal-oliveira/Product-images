import ProductImage from '@/components/ProductImage/ProductImage'
import ProductInfo from '@/components/ProductImage/ProductInfo'
import Image from 'next/image'

export default function Home() {

  const product = {
    name: 'Logitech MX Master 3s',
    available: true,
    totalPrice: 460.90,
    basePrice: 719.90,
    description: 'Esse produto é top, mano. Confia!',
    imageUrls: [
      "https://resource.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-pale-gray.png",
      "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-back-view-pale-gray.png?v=1",
      "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-3-4-view-pale-gray.png?v=1",
      "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-front-view-pale-gray.png?v=1",
    ],
  }

  return (
    <div>
      <ProductImage name={product.name} imageUrls={product.imageUrls}/>
      <ProductInfo 
        name={product.name}
        available={product.available}
        totalPrice={product.totalPrice}
        basePrice={product.basePrice}
        description={product.description}
      />
    </div>
  )
}

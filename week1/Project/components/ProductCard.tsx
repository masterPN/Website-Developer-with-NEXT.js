import React from "react"
import Image from "next/image"

const ProductCard = () => <div className='product-card'>
    <Image src={'/product.png'} width={250} height={250} />
    <div className='product-card-detail'>
        <h3>Product Name</h3>
        <p>$19.99</p>
    </div>
</div>

export default ProductCard
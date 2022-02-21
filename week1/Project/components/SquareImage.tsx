import React from 'react'
import Image from 'next/image'

const sizes = {
  small: 180,
  medium: 300,
  large: 480,
  xlarge: 960
}

interface SquareImage {
  size: 'small' | 'medium' | 'large'
}


const SquareImage: React.FC<SquareImage> = ({ size = 'medium' }) =>
  <div className={`img-${size}`} style={{
    width: sizes[size],
    height: sizes[size],
    position: 'relative'
  }}>
    <Image src={`/image-${size.substr(0,1)}.png`} layout={'fill'} objectFit={'cover'} />
</div>

export default SquareImage

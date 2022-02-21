import React from 'react'
import Image from 'next/image'

const width = {
  small: 500,
  medium: 900,
  large: 1440
}

const height = {
  small: 180,
  medium: 380,
  large: 480
}

interface ReactBannerProps {
  size: 'small' | 'medium' | 'large'
  autoWidth?: boolean
}

const RectBanner: React.FC<ReactBannerProps> = ({ size = 'medium', autoWidth = false }) => <div
  style={{ width: autoWidth ? 'auto' : width[size], height: height[size], position: 'relative' }}>
  <Image
    src={`/banner-${size.substr(0,1)}.png`}
    layout={'fill'} objectFit={'cover'}/>
</div>

export default RectBanner
import React from 'react'
import Image from 'next/image'

interface IconItemProps {
  icon: 'menu' | 'bag' | 'user'
}

const IconItem: React.FC<IconItemProps> = ({icon}) => {
 return <a className={'menu-item'} href="#">
   <Image src={`/${icon}.png`} width={32} height={32} />
  </a>
}

export default IconItem
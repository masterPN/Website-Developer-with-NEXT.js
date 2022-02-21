import React from 'react'
import Image from 'next/image'

interface MenuItemProps {
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return <a className={'menu-item'} href="#">
    {label}
  </a>
}

export default MenuItem
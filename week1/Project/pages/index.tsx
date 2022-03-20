import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import IconItem from '../components/IconItem'
import SearchInput from '../components/SearchInput'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Flex Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='header-nav'>
          <div className='container' id='flex-2'>
            <div id='flex-3'>
              <Image src={'/logo.svg'} width={36} height={36} alt={'logo'} />
              <nav>
                <a href="./" className='menu-item'>All</a>
                <a href="./" className='menu-item'>Apparel</a>
                <a href="./" className='menu-item'>Gadget</a>
              </nav>
              <div className={'icon-menu'}>
                <IconItem icon={'menu'}></IconItem>
              </div>
            </div>
            <SearchInput></SearchInput>
            <div id='flex-4'>
              <IconItem icon={'bag'}></IconItem>
              <IconItem icon={'user'}></IconItem>
            </div>
          </div>
        </div>

      <main className='main' id='flex-1'>
        <div className='banner-gallery' id='flex-5'>
        </div>
        <h1 className='heading'>Products</h1>
        <div className='product-list' id='flex-6'>
        </div>
        <div className='text-combo' id='flex-7'>
          <div className='paragraph-box' id='flex-8'>
            <h1 className='heading'>Best Seller</h1>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis pharetra metus, sed imperdiet libero elementum ac.
              Vestibulum egestas commodo arcu, id viverra nisi egestas quis.
              Nulla vel lorem in mauris molestie congue id a risus. Cras commodo arcu in libero consectetur faucibus.
              Curabitur ligula risus, varius a ante quis, vulputate porttitor est.
            </p>
            <button>See More</button>
          </div>
        </div>
        <div className='promotion-banner'>
          <div className={'promotion-banner-left'} id={'flex-9'}>
          </div>
          <div className={'promotion-banner-right'} id={'flex-10'}>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

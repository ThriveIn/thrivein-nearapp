import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <div className='bg-white'>
    <div className='max-w-[1920px] w-full px-10 py-8 flex items-center justify-between'>
      <div className='flex gap-40 items-center xl:gap-10'>
        <Link href='/'>
          <a className='flex items-center gap-3 text-3xl font-extrabold'>
            <img src='/assets/images/logo.png' alt='ThriveIN' />
            ThriveIN
          </a>
        </Link>
        <div className='grid grid-cols-3 gap-40 xl:gap-10'>
          <Link href='/'>
            <a href='/' className='text-black text-xl'>
              HOME
            </a>
          </Link>
          <Link href='/about'>
            <a className='text-black text-xl'>ABOUT US</a>
          </Link>
          <Link href='/contact'>
            <a href='/contact' className='text-black text-xl'>
              CONTACT
            </a>
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Link href='/login'>
          <a className='px-9 py-3 text-black text-xl leading-none font-semibold border-2 border-button rounded-full'>
            LOG IN
          </a>
        </Link>
        <Link href='/signup'>
          <a className='px-9 py-3 text-white text-xl leading-none font-semibold border-2 border-button bg-button rounded-full'>
            SIGN UP
          </a>
        </Link>
      </div>
    </div>
    <div className='px-96 pt-24 xl:px-32 xl:pt-16'>
      <p className='w-[600px] text-[#121010] text-5xl leading-normal capitalize'>
        next generation social platform designed <br />
        <span className='text-button'>for the creative economy</span>.
      </p>
      <p className='mt-3 text-gray text-base uppercase tracking-widest'>
        Create and have full autonomy on how you monetize your content
      </p>
    </div>
    <img
      className='w-full mt-auto fixed left-0 bottom-0 xl:h-[130px]'
      src='/assets/images/landing_bottom.png'
      alt='ThriveIN'
    />
  </div>
);

export default IndexPage;

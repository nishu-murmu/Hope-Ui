import { SuccessIcon } from "../../components/icons"
import Link from "next/link"

const Success: React.FC = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-start gap-[40px] relative w-[1920px] '>
      <section
        id='loginSection'
        className='w-[540px] h-[459px]  absolute left-[210px]  flex flex-col top-[310px]'
      >
        <div className='flex justify-center'>
          <SuccessIcon />
        </div>

        <div className='text-6xl font-bold text-[#0048B3] mx-auto'>
          Success!
        </div>
        <div className='text-center font-normal h-[84px] mx-auto'>
          A email has been send to your email@domain.com. Please check for an
          email from company and click on the included link to reset your
          password.
        </div>
        <Link href={"/"} className={" mx-auto "}>
          <button className='rounded text-white px-6 py-3 font-normal w-[188px] bg-[#0048B3]'>
            Back to home
          </button>
        </Link>
      </section>
      <section id='BackgroundImage'>
        <img
          src='/BackgroundImage.jpg'
          className='h-screen w-1/2 right-0 top-0 absolute'
        />
      </section>
    </div>
  )
}

export default Success

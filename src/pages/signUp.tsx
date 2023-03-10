import {
  HopeIcon,
  GoogleIcon,
  FaebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../../components/icons"
import Link from "next/link"

const SignUp: React.FC = () => {
  return (
    <div className='h-screen flex flex-row  items-start p-0 relative w-[1920px]'>
      <section id='backgroundImage'>
        <img
          className='h-screen w-1/2 left-0 top-0 absolute'
          src='/BackgroundImage.jpg'
          alt='Background Image'
        />
      </section>

      <section className='w-[960px] order-1 r-0 t-0' id='contents'>
        <div
          id='content'
          className='flex flex-col gap-6 absolute w-[516px] h-[649px] right-[211px] top-[237px]'
        >
          <div
            id='heading and logo'
            className='gap-x-2 flex w-[162px] h-[43px]'
          >
            <HopeIcon />
            <p className='font-Inter text-[#232D42] font-normal text-2xl non-italic'>
              Hope Ui
            </p>
          </div>
          <div id='signUp form' className='h-[391px] contents'>
            <div className='w-[197px] h-[87px] text-center mx-auto'>
              <div className=' h-[43px] font-semibold text-2xl'>Sign Up</div>
              <p className='text-md font-normal text-[#8A92A6]'>
                Create your Hope Ui Icon.
              </p>
            </div>
            <form
              id='form'
              className='gap-6 order-1 w-[436px] h-[288px] p-0 justify-center contents'
            >
              <div className='gap-2 h-20 contents'>
                <div className='flex flex-row gap-x-3'>
                  <div>
                    <label
                      className='w-[41px] h-7 leading-3'
                      htmlFor='firstname'
                    >
                      First Name
                    </label>
                    <input
                      id='firstname'
                      className='w-[250px] h-10 px-2 py-1 border border-solid border-[#3A57EB] rounded focus:border-[#3A57EB] focus:outline-none'
                      type={"email"}
                    />
                  </div>
                  <div>
                    <label
                      className='w-[41px] h-7 leading-3'
                      htmlFor='lastname'
                    >
                      Last Name
                    </label>
                    <input
                      id='lastname'
                      className='w-[250px] h-10 px-2 py-1 border border-solid border-[#3A57EB] rounded focus:border-[#3A57EB] focus:outline-none'
                      type={"email"}
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-x-3'>
                  <div>
                    <label className='w-[41px] h-7 leading-3' htmlFor='email'>
                      Email
                    </label>
                    <input
                      id='email'
                      className='w-[250px] h-10 px-2 py-1 border border-solid border-[#3A57EB] rounded focus:border-[#3A57EB] focus:outline-none'
                      type={"email"}
                    />
                  </div>
                  <div>
                    <label className='w-[41px] h-7 leading-3' htmlFor='phone'>
                      Phone No.
                    </label>
                    <input
                      id='phone'
                      className='w-[250px] h-10 px-2 py-1 border border-solid border-[#3A57EB] rounded focus:border-[#3A57EB] focus:outline-none'
                      type={"tel"}
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-x-3'>
                  <div>
                    <label
                      className='w-[41px] h-7 leading-3'
                      htmlFor='password'
                    >
                      Password
                    </label>
                    <input
                      id='password'
                      className='w-[250px] h-10 px-2 py-1 border border-solid border-[#3A57EB] rounded focus:border-[#3A57EB] focus:outline-none'
                      type={"password"}
                    />
                  </div>
                  <div>
                    <label
                      className='w-[41px] h-7 leading-3'
                      htmlFor='confirmpass'
                    >
                      Confirm Password
                    </label>
                    <input
                      id='confirmpass'
                      className='w-[250px] h-10 px-2 py-1 border border-solid border-[#3A57EB] rounded focus:border-[#3A57EB] focus:outline-none'
                      type={"password"}
                    />
                  </div>
                </div>
                <div className='h-7 mx-auto flex flex-row gap-[166px]'>
                  <span className='flex flex-row gap-2'>
                    <input type={"checkbox"} />
                    <p>I agree with the terms I use.</p>
                  </span>
                </div>
                <button className='bg-[#3A57EB] w-[188px] mx-auto px-6 py-2 text-white rounded border'>
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className='gap-4 contents text-center'>
            <p className='font-normal text-sm leading-7'>
              or sing in with othe accounts?
            </p>
            <div className='justify-center flex gap-2'>
              <a href=''>
                <GoogleIcon />
              </a>
              <a href=''>
                <FaebookIcon />
              </a>
              <a href=''>
                <InstagramIcon />
              </a>
              <a href=''>
                <LinkedInIcon />
              </a>
            </div>
            <div className='justify-center flex gap-3'>
              <p>Already have an account?</p>
              <Link href={"/"}>
                <p className='text-[#3A57EB]'>Sign In.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default SignUp

import { useState } from "react"
import CustomButton from "./customButton"
import {
  BulkCategoryIcon,
  ChevronIcon,
  DragInOutIcon,
  FilterIcon,
  HopeIcon,
} from "../icons"

const Sidebar: React.FC = () => {
    const [isValue, setIsValue] = useState<string>("")

  return (
    <div id='logo' className='absolute left-0 top-0 w-[277px]'>
      <div className='flex flex-row items-start p-0 gap-2.5 absolute w-7 left-[267px] cursor-pointer top-[22px] drop-shadow-xl'>
        <DragInOutIcon />
      </div>
      <div className='flex flex-row h-[76px] w-[257px] justify-center gap-x-3 mt-5 cursor-pointer'>
        <HopeIcon />
        <p className='font-Inter text-[#232D42] font-semibold text-3xl'>
          Hope Ui
        </p>
      </div>
      <hr className='w-full' />
      <div
        id='main frame'
        className='flex flex-col justify-center p-0 gap-2 w-[257px]'
      >
        <div id='heading section'>
          <div
            id='heding'
            className='text-[#ADB5BD] flex flex-row pl-6 pt-3 h-11 text-md '
          >
            <p className='gap-1'>Home</p>
          </div>
          <div className='w-[233px] mx-auto'>
            <button className='rounded w-full flex flex-row bg-[#3A57E8] gap-x-4 shadow-lg text-white px-6 py-2'>
              <BulkCategoryIcon />
              Dashhboard
            </button>
            <button className='px-6 py-2 flex text-[#8A92A6] flex-row gap-x-4 w-full'>
              <FilterIcon />
              Menu Style
              <ChevronIcon />
            </button>
            <hr />
          </div>
        </div>
        <div id='main section'>
          <div
            id='menu title'
            className='  text-[#ADB5BD] flex flex-row pl-6 pt-3 h-11 text-md '
          >
            <p className='gap-1'>Pages</p>
          </div>
          <div className='w-[233px] mx-auto'>
            <CustomButton isValue={isValue === "Example"} onClickChange={() => setIsValue("Example")} name='Example'/>
            <CustomButton name='Widgets' isValue={isValue === "Widgets"} onClickChange={() => setIsValue("Widgets")} />
            <CustomButton name='Authentication' isValue={isValue === "Authentication"} onClickChange={() => setIsValue("Authentication")}/>
            <CustomButton name='Users' isValue={isValue === "Users"} onClickChange={() => setIsValue("Users")}/>
            <CustomButton name='Error 404' isValue={isValue === "Error 404"} onClickChange={() => setIsValue("Error 404")}/>
            <CustomButton name='Error 505' isValue={isValue === "Error 505"} onClickChange={() => setIsValue("Error 505")}/>
            <CustomButton name='Maintainence' isValue={isValue === "Maintainence"} onClickChange={() => setIsValue("Maintainence")}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

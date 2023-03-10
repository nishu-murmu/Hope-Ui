import {
  BulkCategoryIcon,
  ChevronIcon,
  DragInOutIcon,
  FilterIcon,
  HopeIcon,
} from "../icons"

const Sidebar: React.FC = () => {
  return (
    <div id='logo' className='absolute left-0 top-0 w-[277px]'>
      <div className='flex flex-row items-start p-0 gap-2.5 absolute w-7 left-[267px] top-[22px] drop-shadow-xl'>
        <DragInOutIcon />
      </div>
      <div className='flex flex-row h-[76px] w-[257px] justify-center gap-x-3 mt-5'>
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
            <button className='px-6 py-2 flex flex-row gap-x-4 w-full'>
              <FilterIcon />
              Menu Style
              <ChevronIcon />
            </button>
            <hr />
          </div>
        </div>
        <div id='main section'>
          <div className='menu title'></div>
          <div className='menu list'></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

import icon from '../assets/icon.png'

const Header = () => {
  return (
    <header className='sticky top-0 flex py-2 items-center justify-center gap-4 border-b border-gray-300'>
        <img src={icon} className='h-12' />
        <p className='font-medium text-gray-800'>Weather App</p>
    </header>
  )
}

export default Header;
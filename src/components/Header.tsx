import icon from '../assets/icon.png'

const Header = () => {
  return (
    <header className='flex py-2 items-center justify-center gap-4'>
        <img src={icon} className='h-12' />
        <p className='font-medium text-text'>Weather App</p>
    </header>
  )
}

export default Header;
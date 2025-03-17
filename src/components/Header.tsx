import icon from '../assets/icon.png'

const Header = () => {
  return (
    <header className='flex items-center justify-center gap-4'>
        <img src={icon} className='h-15' />
        <p>Weather App</p>
    </header>
  )
}

export default Header;
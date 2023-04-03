import { Link, Outlet} from 'react-router-dom'
import './SportsHeader.css'

export default function SportsHeader(){
    return (
        <>
            <header className="sportsHeader">
                <ul className='menu'>
                    <Link to="/history" className='menu-item'>HISTORY</Link>
                    <Link to="/" className='menu-item'>HOME</Link>
                </ul>
            </header>
            <Outlet />
        </>
    )
}

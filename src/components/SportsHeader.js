import { Link, Outlet} from 'react-router-dom'
import './SportsHeader.css'
import Nav from 'react-bootstrap/Nav';

export default function SportsHeader(){
    return (
        <>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
           <Link className='link' to="/">HOME</Link>
            </Nav.Item>
            <Nav.Item>
           <Link className='link' to="/history">HISTORY</Link>
            </Nav.Item>
        </Nav>
        <Outlet />
        </>
    )
}

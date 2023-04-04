import { Link, Outlet} from 'react-router-dom'
import './SportsHeader.css'
import Nav from 'react-bootstrap/Nav';

export default function SportsHeader(){
    return (
        <>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
            <Nav.Link><Link className='link' to="/">HOME</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link className='link' to="/history">HISTORY</Link></Nav.Link>
            </Nav.Item>
        </Nav>
        <Outlet />
        </>
    )
}

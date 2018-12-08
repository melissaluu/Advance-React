import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/index"><a>Items</a></Link>
        <Link href="/sell"><a>Sell</a></Link>
        <Link href="/sell"><a>Sign up</a></Link>
        <Link href="/sell"><a>Orders</a></Link>
        <Link href="/sell"><a>Account</a></Link>
    </NavStyles>
)

export default Nav;
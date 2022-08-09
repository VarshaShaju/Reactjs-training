import logo from '../assets/kv logo.png'
import group from '../assets/List.png'

const SideNav = () => {
    return(
        <>
        <aside>
            <header>
                <img src={logo} />
            </header>
            <a href={'/list'}>
            <nav>
                <div id="list">
                   <img src={group} />
                </div>
                
                <p>Employee list</p>
            </nav>
            </a>
        </aside>
        </>
    )
}

export default SideNav;
import { connect } from "react-redux"
import { Link} from "react-router-dom"
import logo from 'assets/img/reddit-logo.png'
function Navbar(){

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-xl');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-xl');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    return(
        <nav id ='navbar' className="w-full py-1 top-0 fixed z-10 bg-white">
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
                    <Link to='/' className="ml-4 mt-2">
                    <img 
                        src={logo}
                        width={150}
                        className=""
                        alt="Logo"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProp = state => ({

})

export default connect(mapStateToProp, {

}) (Navbar)
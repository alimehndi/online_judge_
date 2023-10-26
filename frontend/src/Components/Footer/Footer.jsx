import { Link } from "react-router-dom"

const Footer = () =>{ 
  return ( 
  
  <footer className="page-footer font-small blue pt-4 flexible-bottom">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mx-auto mt-3">
                <h5 className="text-uppercase">Online Judge</h5>
                <p>The online coding platform</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
       </div>
    </div>
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="/Home">Online Judge</a>
    </div>
    </footer>
    )
};


export default Footer
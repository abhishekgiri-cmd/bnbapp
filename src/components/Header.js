
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "./css/Header.css"
function Header() {
    const { logOut, user } = useUserAuth();
         const navigate = useNavigate();
         const handleLogout = async () => {
             try {
                 await logOut();
                navigate("/");
            } catch (error) {
                 console.log(error.message);
             }
         };
    
    return (
        <>
        <marquee className="mar"> !!! Bikes related all services are just 1 click away from you !!! </marquee>
        
            <div className="main">
                <div href="#home" className="logo">
                <img src='https://www.bikenbiker.com/cdn/shop/files/BNB_LOGO_28July2022_white_color_04c0a575-569b-454d-8b40-0902377fd82d.png?v=1693215387&width=200' width={'180px'} height={"50px"} />
                </div>
               
                <div className="mybtn">
                    <div className="user1">
                        welcome: {user && user.email}
                    </div>
                    <div className="userbtn">
                        <Button variant="danger" onClick={handleLogout}>
                            Log out
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
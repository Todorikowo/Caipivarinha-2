import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

// função footer
function Footer(){
    return(
        <div className="footer">
            {/* botão redes sociais */}
            <div className="socialMedia">
                <Link to="https://instagram.com/smstudiosss"><SlSocialInstagram /></Link>
                <Link to="https://facebook.com/profile.php?id=61559520592319"><SlSocialFacebook /></Link>
            </div>
            {/* copyright */}
            <p> &copy; Caipivarinha 2024</p>
        </div>
    )
}

export default Footer;
import {React} from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="hugs-bottom colored-background footer">
            <p>
                &copy;
                {currentYear}
                {' '}
                Switchfully
            </p>
        </footer>);
}

export default Footer;
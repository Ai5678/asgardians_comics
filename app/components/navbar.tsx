import logo_stacked from "../../images/logo_stacked.png";
import logo_horizontal from "../../images/logo_horizontal.png";
import Image from "next/image";
export default function Navbar() {
    return(
        <nav className="flex justify-between items-center p-4">
            <Image src={logo_horizontal} alt="logo" width={200} height={150} />
            <ul className="flex gap-4">
                <li>Products</li>
                <li>Tournament Center</li>
                <li>Buying & Trading</li>
                <li>About</li>
            </ul>
        </nav>
    )
}
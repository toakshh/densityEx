import logo from "../../assets/logo/logo.png"
import Download from "../../assets/svg/Download_btn.svg"
const Footer = () => {
    return (
        <>
            <hr />
            <div className="flex flex-col justify-center items-center my-12 gap-8">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-20 w-20 rounded-full hover:scale-125 ease-in-out duration-500"
                />
                <p><span className="text-sm font-light mr-10">New York, 235234 USA</span><span className="text-sm font-light">toakshh@gmail.com</span></p>
                <img src={Download} alt="download button" />
                <p className="font-thin text-sm">2023 Ahead app. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer
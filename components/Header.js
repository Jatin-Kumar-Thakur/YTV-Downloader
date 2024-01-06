import Image from "next/image";
import logo from '../Assets/faviconYt.png'
export default function Header() {
    return (
        <header className="py-4">
            <div className="md:text-3xl text-xl flex justify-between">
                <h3 className="flex">
                    <Image src={logo}
                    width={40}
                    height={24}
                    alt="Logo"/>
                    <p className="leading-9 pl-2">YouTubeVD</p></h3>
                <div className="text-[16px]">ThankYou</div>
            </div>
        </header>
    )
}
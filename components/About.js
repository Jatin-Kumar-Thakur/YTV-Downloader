import Image from "next/image"
import window from '../Assets/windows.png'
import apple from '../Assets/apple-logo.png'
import andriod from '../Assets/android-logo.png'
export default function About(){
    return(
        <div className="text-center py-10">
            <p className="text-left">Explore the ultimate solution for easy and efficient video and music downloads from the internet: our YouTubeVD video downloader. This user-friendly, free tool simplifies the process of downloading your favorite videos and music with a single click, ensuring a seamless experience!</p>
            <h3 className="mt-5 text-lg text-light">Supported Platforms:</h3>
            <div className="flex justify-center mt-5 align-middle">
                <Image className="m-3" src={window} width={70} height={70} alt="Window Logo"/>
                <Image className="m-3" src={apple} width={70} height={70} alt="Window Logo"/>
                <Image className="m-3" src={andriod} width={70} height={70} alt="Window Logo"/>
            </div>
        </div>
    )
}
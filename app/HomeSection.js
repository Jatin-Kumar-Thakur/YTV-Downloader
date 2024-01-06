"use client";
// import api from '../app/api/downloader'
import { useState } from "react";
import axios from "axios";
export default function HomeSection() {
    const [link, setLink] = useState("");
    const [finalLink, setFinalLink] = useState();
    const [showDownload, setShowDownload] = useState(false);
    const handleDownload = async () => {
        try {
            const res = await axios.get(`/api/downloader?url=${link}`);
            setFinalLink(res.data.format.url);
            setShowDownload(true);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <section className=" min-h-80 flex flex-col justify-center w-full">
                <div className="">
                    <p className="text-center md:text-3xl text-xl font-extralight md:text-4xl">
                        Online Video Downloader
                    </p>
                </div>
                <div className="flex justify-center mt-5 w-full">
                    {/* <input type="text" className="text-black" name="" id="" /> */}
                    <input
                        className="md:p-3 p-1 rounded-md w-[80%] text-black outline-none"
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Paste your video link here ...."
                    />
                    <button onClick={handleDownload} className="bg-sky-500 rounded-md md:px-4 px-1 mx-2">Convert</button>

                </div>
            </section>
            <div className="flex justify-center">
                {
                    showDownload && (
                        <div className="">
                            <video src={finalLink} controls></video>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

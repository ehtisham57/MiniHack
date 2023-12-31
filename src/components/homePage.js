import { useRef, useState, useEffect } from "react";
import img from "../images/myimg.jpg"
import Image from "next/image";

const HomePage = () => {

    const options = { day: 'numeric', month: 'short',  year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);
    ////////////////////time

    const titleRef = useRef();
    const descriptionRef = useRef();
    const [listdata, setlistdata] = useState([])
    const [newitem, setnewitem] = useState(0)


    useEffect(() => {
        showDetails()
    }, [newitem])

    const showDetails = async () => {
        try {
            const response = await fetch("/api/blogs/");
            if (response.ok) {
                const data = await response.json();
                setlistdata(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    return (
        <div className='my-6'>
            {listdata?.map((row, index) => (

                <div key={index} className=" shadow-lg shadow-amber-600/50 mx-10 my-3 flex flex-col items-left justify-left p-8 text-left border-amazon_light rounded-b-lg ">
                    <div className="flex items-left justify-left space-x-3">
                        <Image className="rounded-full w-9 h-9" src={img} alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-black text-left">
                            <div>{row.title}</div>
                            <div className="text-sm text-amber-600 dark:text-gray-400">Date : {row.formattedDate}</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-left justify-left space-x-3 py-2 my-3">
                        <p className="text-sm font-normal text-amazon_blue dark:text-black my-2">{row.description}</p>
                    </div>
                    <p></p>
                </div>
            ))}
        </div>
    )
}

export default HomePage
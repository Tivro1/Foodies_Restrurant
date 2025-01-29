import { useEffect, useState } from "react";
import PopularItems from "../Sheared/PopularItems";

const Menue = () => {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetch('/menue.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            })
            .catch(err => console.error("Error loading menu:", err));
    }, []);

    return (
        <div className="flex flex-col items-center overflow-hidden">
            <span className="text-yellow-300 font-bold text-3xl"> --𝓞𝓾𝓻 𝓟𝓸𝓹𝓾𝓵𝓪𝓻 𝓘𝓽𝓮𝓶𝓼--</span>
            <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3"></hr>
            <span>ＦＲＯＭ ＯＵＲ ＭＥＮＵＥ</span>
            <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3"></hr>

            {/* Popular Items  */}
            <div>

                {
                    menu?.map(item => <PopularItems

                        key={item._id}
                        item={item}

                    ></PopularItems>)
                }
                <div className="flex items-center justify-center mt-3 mb-5">
                    <button className="p-4 border-b-2  rounded-md border-gray-500 hover:bg-green-400">VIEW FULL MENUE</button>
                </div>

            </div>
        </div>
    );
};

export default Menue;

import AKG from "../../public/AKGS.svg";
import Image from "next/image";

export default function Nav() {
    return (
        <div className="flex justify-between align-center max-w-7xl mx-auto relative top-34 max-h-[100px] mt-[40px] bg-white font-sans font-semibold">
            <div className="left-nav-list">
                <ul className="flex gap-4 p-[1.5rem] items-center">
                    <li>Stories</li>
                    <div className="w-[2px] h-[50px] bg-[rgb(196,196,196)]"></div>
                    <li>New In</li>
                     <div className="w-[2px] h-[50px] bg-[rgb(196,196,196)]"></div>
                    <li>All Products</li>
                </ul>
            </div>
            <div className="logo flex align-middle px-4">
                <h1 className="my-auto text-4xl "><Image src={AKG} alt="logo"/></h1>
            </div>
            <div className="right-nav-list">
                <ul className="flex gap-4 p-[1.5rem] items-center">
                    <li className="">Search</li>
                    <div className="w-[2px] h-[50px] bg-[rgb(196,196,196)]"></div>
                    <li>Wish List</li>
                    <div className="w-[2px] h-[50px] bg-[rgb(196,196,196)]"></div>
                    <li>Cart(0)</li>
                </ul>
            </div>
        </div>
    );
};

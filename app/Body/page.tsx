import { BsArrowRight } from "react-icons/bs";
import { g1, g2, g3, g4,bl,br,tl,tr, Men, Women } from "../../public";
import Image from "next/image";
export default function Body() {
    return (
    <main>
        <div className="flex items-center justify-center mt-[94px] flex-col px-[215px]">
            <h1 className="font-bebas text-[70px] max-w-[60rem] text-center">
                FASHIONABLE, QUALITY, DURABLE AND BEST SHOES FOR EVERYONE 
            </h1>

            <button className="text-[#FFFFFF] bg-[#D99655] text-[20px] font-bebas py-[15px] px-[34px] flex gap-[10px] items-center mt-[40px]" >
                <p>SHOP NOW</p>
                <BsArrowRight/>
            </button>

            <div className="flex items-baseline gap-[30px] mt-[105px]">
                <Image src={g3} alt="g3" width={240} />
                <Image src={bl} alt ="bl" className="absolute left-[27rem] bottom-[9rem]"/>
                <Image src={tl} alt ="bl" className="absolute  bottom-[20rem]"/>
            <Image src={g2} alt="g1" width={240}/>
                <Image src={g1} alt="g1"  width={240}/>
                <Image src={br} alt="br" className="absolute right-[8rem] bottom-[9rem] rotate-43" />
                <Image src={tr} alt ="tr" className="absolute right-[17rem] bottom-[20rem] "/>
            <Image src={g4} alt="g1" width={240}/>
            </div>
            </div>
            <div className="bg-white px-[215px] pb-[100px]">
                <p className="font-bebas text-[56px] pt-[140px]">2022 Collection</p>
                <p className="text-[18px] text-[#504C48] pt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc elit in porttitor tortor nulla.</p>
                <div className="flex pt-[60px] gap-[30px]">
                    <div>
                        <Image src={Men} alt="men" />
                    </div>
                    <div>
                        <Image src={Women} alt="women" />
                        
                    </div>
                </div>
            </div>
            <div className=" h-[1px] bg-[rgb(196,196,196)]"></div>
    </main>
    )
};
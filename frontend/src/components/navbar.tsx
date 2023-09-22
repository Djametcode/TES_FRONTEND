import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div className=" relative z-20 mt-[32px] mr-[120px] ml-[120px] flex items-center gap-[240px] h-[85px]">
      <div className=" flex gap-[8px] items-center bg-logo rounded-[40px] p-[16px]">
        <div className=" w-[99px] h-[35px]">
          <img className=" w-full h-full" src="/logos.png" alt="" />
        </div>
        <div className=" w-[109px] h-auto text-[14px] font-railway text-logo">
          <p>IT CONSULTANT</p>
        </div>
      </div>
      <div className=" inline-flex gap-[15px] text-white">
        <ul className=" w-full h-full flex items-center font-jost whitespace-nowrap font-[400px] text-navbar text-[18px]">
          <li className=" pt-[29px] pb-[29px] pr-[6.02px] pl-[7px] ml-[14px] mr-[14px]">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" pt-[29px] pb-[29px] pr-[6.02px] pl-[7px] ml-[14px] mr-[14px]">
            <Link to={"/"}>About</Link>
          </li>
          <li className=" pt-[29px] pb-[29px] pr-[6.02px] pl-[7px] ml-[14px] mr-[14px]">
            <Link to={"/"}>Services</Link>
          </li>
          <li className=" pt-[29px] pb-[29px] pr-[6.02px] pl-[7px] ml-[14px] mr-[13.73px]">
            <Link to={"/"}>Case Study</Link>
          </li>
          <li className=" pt-[29px] pb-[29px] pr-[6.02px] pl-[7px] ml-[14px] mr-[14px]">
            <Link to={"/"}>Blog</Link>
          </li>
          <li className="flex items-center justify-center pt-[29px] pb-[29px] pr-[6.02px] pl-[7px]">
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
        <div className=" flex items-center w-full">
          <div className=" talk pt-[11px] pb-[11px] pr-[35.44px] pl-[36px]">
            <Link to={"/"}>Let's Talk</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import FooterComponent from "./footer";
import NarasiHero from "./narasiHero";
import NavbarComponent from "./navbar";
import SectionTwo from "./section2";
import SectionFive from "./sectionFive";
import SectionFour from "./sectionFour";
import SectionOne from "./sectionOne";
import SectionSix from "./sectionSix";
import SectionThree from "./sectionThree";
import TrustBy from "./trustBy";

export default function LandingComponent() {
  return (
    <div className=" relative max-w-[1440px] h-[5075px] bg-white overflow-hidden">
      <div className=" relative h-[780px] flex flex-col gap-[117px] overflow-visible">
        <div className=" z-0 absolute decorOne top-0 translate-y-[35px]"></div>
        <div className=" absolute -right-[235px] -top-[175px]">
          <div className=" bg-eclipse2 w-[867px] h-[867px] rounded-full"></div>
        </div>
        <div className=" absolute -right-[270px] -top-[120px]">
          <div className=" bg-eclipse3 w-[867px] h-[867px] rounded-full"></div>
        </div>
        <div className=" absolute -right-[275px] -top-[150px]">
          <div className=" w-[867px] h-[867px]">
            <img
              className=" w-full h-full rounded-full object-cover"
              src="/laptop.jpeg"
              alt=""
            />
          </div>
        </div>
        <NavbarComponent />
        <div className=" z-20 relative flex gap-[135px]">
          <NarasiHero />
        </div>
      </div>
      <div className=" relative pr-[120px] pl-[120px] mt-[170px] flex flex-col gap-[108px]">
        <div className=" absolute translate-y-24 translate-x-[100px]">
          <div className=" flex justify-center">
            <div className=" translate-x-14" id="circleOne"></div>
            <div className=" -translate-x-14" id="circleTwo"></div>
          </div>
        </div>
        <SectionOne />
        <SectionTwo />
      </div>
      <div className=" pt-[63.72px]">
        <TrustBy />
      </div>
      <div className=" pr-[120px] pl-[120px] pt-[108px] flex flex-col gap-[108px]">
        <SectionThree />
        <SectionFour />
      </div>
      <div className=" pl-[284px] pr-[284px] pt-[108px]">
        <SectionFive />
      </div>
      <div className=" flex justify-center gap-[8px] pt-[24px]">
        <div className=" tablist-one w-[12px] h-[12px] rounded-full"></div>
        <div className=" tablist-two w-[9px] h-[9px] rounded-full"></div>
        <div className=" tablist-three w-[9px] h-[9px] rounded-full"></div>
      </div>
      <div className=" pt-[108px]">
        <SectionSix />
      </div>
      <FooterComponent />
    </div>
  );
}

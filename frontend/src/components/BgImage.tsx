export default function BgImage() {
  return (
    <div className=" absolute">
      <div className=" -translate-x-[40px] absolute w-[867px] h-[867px] rounded-full bg-eclipse2"></div>
      <div className=" translate-y-[45px] absolute h-[867px] w-[867px] rounded-full bg-eclipse3"></div>
      <div className=" z-40 absolute w-[867px] h-[867px]">
        <img
          className=" w-full h-full rounded-full object-cover"
          src="/laptop.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

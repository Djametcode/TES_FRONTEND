import { Link } from "react-router-dom";

export default function NarasiHero() {
  return (
    <div className=" ml-[120px] w-[645px] h-[385px] inline-flex flex-col justify-start gap-[49px]">
      <div className=" flex flex-col gap-[14px]">
        <div className=" w-[527px]">
          <h1 className=" font-nunito text-[58px]">
            Menghadirkan Aplikasi Untuk Kemajuan Bisnismu
          </h1>
        </div>
        <div className=" w-[480px]">
          <p className=" font-jost font-[400] text-[20px] text-navbar">
            Biaya Operasional Lebih Efisien, Informasi Dapat Diakses Real-time,
            Dan Mencegah Manipulasi Data
          </p>
        </div>
      </div>
      <div className=" flex">
        <Link
          className=" explore font-jost text-[18px] text-white font-[500]text-white pt-[15px] pr-[36px] pb-[15px] pl-[36px]"
          to={"/"}
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}

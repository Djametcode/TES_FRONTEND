export default function FooterComponent() {
  return (
    <div className=" bg-footer flex flex-col gap-[60px] items-center">
      <div className=" pt-[98px] w-[1200px] flex justify-around">
        <div className=" pl-[12px] pr-[12px] pb-[82.41px] flex flex-col gap-[32px]">
          <div className=" flex gap-[8px] items-center bg-logo rounded-[40px] p-[16px]">
            <div className=" w-[99px] h-[35px]">
              <img className=" w-full h-full" src="/logos.png" alt="" />
            </div>
            <div className=" w-[109px] h-auto text-[14px] font-railway text-logo">
              <p>IT CONSULTANT</p>
            </div>
          </div>
          <div>
            <div>
              <p className=" address">
                JMC IT Consultant Jl. Prapanca No.6a, Bantul,D.I.Yogyakarta
              </p>
            </div>
            <div className=" pt-[8px] pr-[5.1px] pb-[25px] flex gap-[14.8px] items-center">
              <div>
                <img src="/ig.png" alt="" />
              </div>
              <div>
                <img src="/fb.png" alt="" />
              </div>
              <div>
                <img src="/linkedin.png" alt="" />
              </div>
              <div>
                <img src="/youtube.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-[40px] items-start">
          <div>
            <h1 className="product">Produk</h1>
          </div>
          <div className=" flex flex-col gap-[15px]">
            <p className="info-product">Aplikasi E-Government</p>
            <p className="info-product">Aplikasi & Website</p>
            <p className="info-product">Aplikasi ERP</p>
          </div>
        </div>
        <div className=" flex flex-col gap-[40px] items-start">
          <div>
            <h1 className="product">Tentang Perusahaan</h1>
          </div>
          <div className=" flex flex-col gap-[15px]">
            <p className="info-product">Company Profile</p>
            <p className="info-product">Award & Success Story</p>
            <p className="info-product">Career</p>
          </div>
        </div>
        <div className=" flex flex-col gap-[40px] items-start">
          <div>
            <h1 className="product">Contact Us</h1>
          </div>
          <div className=" flex flex-col gap-[15px]">
            <p className="info-product">Customer Service</p>
            <p className="call-center">(0274) 588 599</p>
          </div>
        </div>
      </div>
      <div className="container-company">
        <p className="text-footer text-center">
          Copyright ©2023 All rights reserved | JMC IT Consultant - Jasa
          Pembuatan Software
        </p>
      </div>
    </div>
  );
}

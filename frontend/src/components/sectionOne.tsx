export default function SectionOne() {
  return (
    <div className=" z-20 right-[121px] w-full h-[500px] flex flex-col items-center gap-[44px]">
      <div className=" h-[138px] w-[953px] flex flex-col gap-[17px]">
        <h1 className="serving">Layanan Kami</h1>
        <div>
          <p className="intro">
            JMC menghadirkan layanan yang dapat membantu mengoptimalkan bisnis
            Anda.
          </p>
        </div>
      </div>
      <div className=" w-full h-full flex justify-start gap-[110px]">
        <div className=" secOne-container w-full p-[32px] flex flex-col gap-[56px]">
          <div className=" flex flex-col gap-[16px] h-[142.93px] w-[257px]">
            <div className=" ">
              <h1 className="secOne">Pembuatan Aplikasi & Website</h1>
            </div>
            <div className=" flex items-center">
              <div className="  pt-[18.27px] pr-[17.46px] pb-[15.66px] pl-[17.45px] bg-logosec rounded-full">
                <img className=" " src="/Rectangle 281.png" alt="" />
              </div>
            </div>
          </div>
          <div className="footerSecOne">
            <p>Jasa pembuatan aplikasi yang sesuai dengan kebutuhan Anda.</p>
          </div>
        </div>
        <div className=" secOne-container w-full p-[32px] flex flex-col gap-[56px]">
          <div className=" flex flex-col gap-[16px] h-[142.93px] w-[257px]">
            <div className=" h-[56px] w-[210px]">
              <h1 className="secOne">Aplikasi E-Gov</h1>
            </div>
            <div className=" flex items-center">
              <div className="  pt-[18.27px] pr-[17.46px] pb-[15.66px] pl-[17.45px] bg-logosec rounded-full">
                <img className=" " src="/Rectangle 280.png" alt="" />
              </div>
            </div>
          </div>
          <div className="footerSecOne">
            <p>
              Solusi kebutuhan software untuk optimasi kinerja di pemerintahan.
            </p>
          </div>
        </div>
        <div className=" secOne-container w-full border p-[32px] flex flex-col gap-[56px]">
          <div className=" flex flex-col gap-[16px] border h-[142.93px] w-[257px]">
            <div className=" h-[56px] w-[210px]">
              <h1 className="secOne">Aplikasi ERP</h1>
            </div>
            <div className=" flex items-center">
              <div className="  pt-[18.27px] pr-[17.46px] pb-[15.66px] pl-[17.45px] bg-logosec rounded-full">
                <img className=" " src="/Rectangle 282.png" alt="" />
              </div>
            </div>
          </div>
          <div className="footerSecOne">
            <p>Kumpulan aplikasi yang dapat mengoptimalkan perusahaan Anda.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

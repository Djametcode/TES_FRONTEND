export default function SectionFour() {
  return (
    <div className=" flex flex-col gap-[36px]">
      <div className=" flex flex-col gap-[16.5px] items-center">
        <h1 className=" why-text">Pekerjaan kami</h1>
        <p className=" build-text w-[670px] text-center">
          Beberapa Contoh Pekerjaan Yang Telah Kami Buat
        </p>
      </div>
      <div className=" flex gap-[17px]">
        <div className=" relative project w-[389px] h-[284px]">
          <img className=" w-full h-full" src="/rec236.png" alt="" />
          <div className=" absolute left-[24px] bottom-[20px]">
            <div className=" flex flex-col gap-[7.4px]">
              <p className="projectTextOne">E - Government</p>
              <div className=" flex flex-col gap-[2px]">
                <p className="projectTextTwo">Aplikasi Jogjaplan</p>
                <p className="projectTextOne">Client : BAPPEDA DIY</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative project w-[389px] h-[284px]">
          <img className=" w-full h-full" src="/rec287.png" alt="" />
          <div className=" absolute left-[24px] bottom-[20px]">
            <div className=" flex flex-col gap-[7.4px]">
              <p className="projectTextOne">Website</p>
              <div className=" flex flex-col gap-[2px]">
                <p className="projectTextTwo">Website CIU Insurance</p>
                <p className="projectTextOne">Client : CIU Insurance</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative project w-[389px] h-[284px]">
          <img className=" w-full h-full" src="/rec288.png" alt="" />
          <div className=" absolute left-[24px] bottom-[20px]">
            <div className=" flex flex-col gap-[7.4px]">
              <p className="projectTextOne">ERP</p>
              <div className=" flex flex-col gap-[2px]">
                <p className="projectTextTwo">Aplikasi KDPL Isuzu</p>
                <p className="projectTextOne">Client : Isuzu Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

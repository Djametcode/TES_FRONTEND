export default function SectionTwo() {
  return (
    <div className=" w-full">
      <div className=" flex flex-col gap-[16.5px] p-[12px] pt-[0px]">
        <div className=" pt-[3px]">
          <h1 className="why-text">mengapa memilih kami</h1>
        </div>
        <div className=" w-[670px]">
          <p className=" why-text2">
            The Reliable Consultant In Service Excellence
          </p>
        </div>
      </div>
      <div className=" flex gap-[48px] h-full items-end">
        <div className=" flex gap-[32px] h-full">
          <div className=" flex h-full flex-col gap-[4px]">
            <div className=" flex gap-[4.63px]">
              <p className="total">600</p>
              <p className=" total">+</p>
            </div>
            <div className=" w-[184px] h-[40px]">
              <p className="info">Project Pengembangan IT Indonesia.</p>
            </div>
          </div>
          <div className=" flex flex-col gap-[4px] h-full">
            <p className="total">50+</p>
            <p className=" info">Staff Ahli</p>
          </div>
        </div>
        <ol type="1" className=" why3-text ml-[75px]">
          <li>Sejak 2008 JMC Ikut Membangun Indonesia Melalui Teknologi.</li>
          <li>Telah Terlibat Ribuan Pengembangan IT Indonesia.</li>
          <li>
            Memiliki Layanan Lengkap Mulai Dari Pembuatan Aplikasi, Aplikasi
            E-Gov, Dan ERP.
          </li>
        </ol>
      </div>
    </div>
  );
}

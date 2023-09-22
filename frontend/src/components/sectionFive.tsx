export default function SectionFive() {
  return (
    <div className=" flex flex-col items-center gap-[24px]">
      <div className=" w-[76.9px] h-[64px]">
        <img src="/australian.png" alt="" />
      </div>
      <div className=" pl-[33.68px] pr-[33.68px]">
        <p className="australian-info">
          "AustralianAid melalui program Local Governance Innovations
          mengucapkan terima kasih atas kerjasamanya kepada JMC. Berorientasi
          kepada konsumen adalah hal yang dapat kami rasakan selama bekerja
          sama, sehingga semua proses dapat berjalan dengan lancar."
        </p>
      </div>
      <div className=" flex flex-col items-center gap-[16px]">
        <div className=" w-[56px] h-[56px] bg-cover">
          <img
            className=" w-full h-full object-cover object-top rounded-full"
            src="/sepuh.jpeg"
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-4 items-center">
          <div className="owner-container">
            <h1 className="australian-owner">Willy Brilianto</h1>
          </div>
          <p className=" australian-bio">
            Project Manager Local Governance Innovations Australian Aid
          </p>
        </div>
      </div>
    </div>
  );
}

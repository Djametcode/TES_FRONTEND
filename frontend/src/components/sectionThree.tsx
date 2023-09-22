export default function SectionThree() {
  return (
    <div className=" flex items-center gap-[74px]">
      <div className=" ml-[49px] z-10 relative w-[517px] h-[517px]">
        <img
          className=" relative z-10 w-full h-full object-cover rounded-full"
          src="/eclipse.png"
          alt=""
        />
        <div className=" scale-x-[-1] z-0 w-[422px] h-[394px] rounded-full bg-eclipse2 absolute bottom-0 right-0"></div>
        <div className=" w-[104px] h-[104px] rounded-full bg-smallEclipse absolute -left-[45px] top-[200px] z-50"></div>
      </div>
      <div>
        <div className=" flex flex-col gap-[16px]">
          <h1 className="why-text">Tentang Kami</h1>
          <p className="build-text">Membangun Indonesia Melalui Teknologi</p>
          <p className=" info-build">
            JMC adalah sebuah industri kreatif yang bergerak dalam bidang
            teknologi informasi di Indonesia. Berdiri pada penghujung tahun 2008
            di Yogyakarta, sebuah kota yang dinobatkan menjadi pusat pendidikan
            dan pusat budaya. Kota yang banyak memunculkan tokoh-tokoh dan
            inovasi yang tidak terhitung lagi jumlahnya. Letak geografis yang
            sangat strategis ini membuat JMC dengan cepat diisi oleh insan-insan
            berkualitas dan profesional. Insan-insan yang siap diajak berjibaku
            untuk berinovasi dalam menghasilkan produk tepat guna.
          </p>
        </div>
      </div>
    </div>
  );
}

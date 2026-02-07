import FAQs from "@/components/FAQs/FAQs";
import Slider from "@/components/Slider/Slider";
import React from "react";
import "@/app/(main)/midsize_businesses/midsize_businesses.css";

const MidsizeBusinesses = () => {
  const faqs = [
    {
      question: "SorsX mevcut ATS sistemimizle birlikte çalışabilir mi?",
      answer:
        "Evet. Birçok orta ölçekli şirket, SorsX’i mevcut ATS’lerinin üzerine eklenen bir AI katmanı olarak kullanıyor. SorsX; AI video mülakatlar, puanlama ve kısa listeleme süreçlerini yönetiyor ve elde edilen sonuçları mevcut iş akışlarınıza entegre ediyor.",
    },
    {
      question: "SorsX’i devreye almak için ne kadar değişim gerekiyor?",
      answer:
        "SorsX, mevcut süreçlere uyum sağlayacak şekilde tasarlanmıştır. İşe alım uzmanları ve işe alım yöneticileri adayları değerlendirmeye devam eder ve nihai kararları verir. SorsX yalnızca tekrarlayan görevleri üstlenir ve değerlendirme sürecini standartlaştırır.",
    },
    {
      question:
        "İşe alım yöneticilerimizin karmaşık yeni bir araç öğrenmesi gerekecek mi?",
      answer:
        "Hayır. İşe alım yöneticileri basit panolar, kısa listeler ve yapay zekâ mülakat özetlerini görür. İş akışlarını yönetmeleri gerekmez; yalnızca adayları inceleyip geri bildirim vermeleri yeterlidir.",
    },
    {
      question:
        "SorsX hem yüksek hacimli hem de uzmanlık gerektiren işe alımlar için uygun mu?",
      answer:
        "Evet. Yapay zekâ mülakatçısı, soruları ve puanlamayı her bir iş tanımına uyarlayarak hem yüksek hacimli saha (frontline) pozisyonlarını hem de uzman teknik veya liderlik rollerini yönetebilir.",
    },
    {
      question: "SorsX, mevzuata uyum ve adil işe alımı nasıl sağlar?",
      answer:
        "SorsX, yapılandırılmış ve tekrarlanabilir yapay zekâ mülakat süreçleri ile şeffaf değerlendirme kriterleri kullanır. Bu yaklaşım, önyargıyı azaltmaya yardımcı olur ve daha savunulabilir, tutarlı bir işe alım süreci oluşturur.",
    },
  ];

  return (
    <div>
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">Orta Ölçekli Şirketler</p>
            </div>
            <h1 className="main-heading">
              Karmaşayı Büyütmeden
              <span className="highlight"> İşe Alımı Ölçekleyin</span>
            </h1>
            <p className="sub-text">
              SorsX, orta ölçekli şirketlerin işe alım süreçlerini
              standartlaştırmasına, işe alım ekiplerinin iş yükünü azaltmasına
              ve departmanlar ile lokasyonlar genelinde kritik pozisyonları daha
              hızlı doldurmasına yardımcı olan bir yapay zeka işe alım platformu
              ve mülakat yazılımıdır.
            </p>
            <div className="btn-wrapper">
              <a href="demo_page_2.html">
                <button className="blue-border-button">
                  <p>Demo talep edin</p>
                </button>
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="../assets/midsize_businesses/hero_img.png"
              alt="hospitality hero"
            />
          </div>
        </div>
      </section>

      {/* slider */}
      <Slider bgColor="black" />

      {/* <!-- outreach section --> */}
      <section className="info-section outreach-section padding-y">
        <div className="container">
          <div className="info-content">
            <div className="page-name-text">Ürüne Genel Bakış</div>
            <h3>
              Yüksek Hacimli İşe Alıma Düzen Getiren Yapay Zeka Destekli İşe
              Alım Yazılımı
            </h3>
            <p className="section-description">
              Şirketiniz büyüdükçe işe alım süreçlerinin karmaşıklığı da artar.
              SorsX; AI destekli aday bulma, video mülakatlar ve kısa listeleme
              süreçlerini tek bir işe alım platformunda merkezileştirerek İK,
              yetenek kazanımı ekipleri ve işe alım yöneticilerinin aynı doğru
              ve güncel veri kaynağından çalışmasını sağlar.
            </p>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="../assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Yöneticilerinizi senaryoya bağlamadan mülakatları
                  standartlaştırın
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="../assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Birden fazla dağınık araç yerine tek bir AI işe alım platformu
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="../assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Tüm ekiplerde tutarlı aday deneyimi
                </span>
              </li>
            </ul>
          </div>
          <div className="info-image">
            <img
              src="../assets/TR/midsize_businesses/yuksik.png"
              alt="yuksik"
            />
          </div>
        </div>
      </section>

      {/* <!-- from job to shortlist section --> */}
      <section className="info-section shortlist-section padding-y">
        <div className="container">
          <div className="info-content">
            <div className="page-name-text">
              Orta Ölçekli Şirketler İçin Nasıl Çalışıyor?
            </div>
            <h3>Her Pozisyon Talebini Yönetilebilir Hale Getirin</h3>
            <p className="section-description">
              Her yeni rol için SorsX; role özel bir iş tanımı oluşturur, AI
              mülakat soruları önerir, tüm adayları AI video mülakatlarla
              değerlendirir ve adayları uyuma göre sıralar. İşe alım uzmanları
              ve yöneticiler aynı veriyi görür, bu da daha hızlı hizalanma ve
              daha az tekrar eden toplantı anlamına gelir.
            </p>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="../assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Her Departman için AI Destekli İş Tanımları ve Mülakat Kitleri
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="../assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Tüm adayları standart kriterlerle değerlendiren yapay zeka
                  mülakat sistemi
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="../assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Roller ve konumlar genelinde adayları karşılaştırmak için
                  yetenek analitiği
                </span>
              </li>
            </ul>
          </div>
          <div className="info-image">
            <img
              src="../assets/TR/midsize_businesses/her pozi.png"
              alt="AI Hiring"
            />
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">
              Orta Ölçekli İşe Alım Ekipleri için Gerçek Sonuçlar
            </h3>
          </div>

          <div className="hiring-grid">
            {/* <!-- time saved Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="../assets/TR/midsize_businesses/pozisiyon.png"
                  alt="time saved"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">%50</h3>
                <h6>Pozisyon Doldurma Süresinde Azalma</h6>
                <p className="text-T1">
                  SorsX gibi AI işe alım araçlarını kullanan orta ölçekli
                  şirketler, manuel ön eleme ve zamanlama gecikmeleri ortadan
                  kaldırarak pozisyon doldurma süresini %50’ye varan oranlarda
                  azaltıyor. Kısa listeler otomatik olarak oluşturulduğu için
                  ekipler doğrudan mülakat ve teklif aşamasına geçebiliyor.
                </p>
              </div>
            </div>

            {/* <!-- less time Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="../assets/TR/midsize_businesses/aday.png"
                  alt="Less time spent"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">2s 10dk</h3>
                <h6>Aday Başına Kazanılan Zaman</h6>
                <p className="text-T1">
                  Özgeçmiş ön elemesini ve ilk tur AI mülakatlarını
                  otomatikleştiren SorsX, aday başına ortalama 2 saat 10 dakika
                  zaman kazandırır. Bu da her ay, stratejik projelere ve paydaş
                  iş birliklerine ayrılabilecek onlarca işe alım uzmanı saatinin
                  geri kazanılması anlamına gelir.
                </p>
              </div>
            </div>

            {/* <!-- paltform Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="../assets/TR/midsize_businesses/isi tut.png"
                  alt="platform"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">1</h3>
                <h6>İşe tutarlı alım süreci</h6>
                <p className="text-T1">
                  Soru setleri, puanlama ve raporlamayı tek bir AI mülakat
                  yazılımıyla yönettiğinizde, tüm iş birimleri genelinde tutarlı
                  değerlendirmeler elde edilir; önyargı azalır ve işe alım
                  kararları daha kolay savunulabilir hale gelir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <FAQs faqsData={faqs} />
    </div>
  );
};

export default MidsizeBusinesses;

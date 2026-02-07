import FAQs from "@/components/FAQs/FAQs";
import React from "react";
import "@/app/(main)/sorsx_hire/sorsx_hire.css";
import Slider from "@/components/Slider/Slider";

const SorsxHire = () => {
  const faqs = [
    {
      question: "ScaleHire nedir?",
      answer:
        "Hızlı ve yapılandırılmış kısa listeler oluşturmak için tarama süreçlerini otomatikleştiren ve yapay zekâ destekli video mülakatlar sunan bir AI işe alım yazılımı.",
    },
    {
      question: "Adaylar özgeçmiş olmadan başvurabilir mi?",
      answer:
        "Evet — adaylar mülakatlar ve yapılandırılmış yanıtlar aracılığıyla değerlendirilebilir; bu özellikle saha (frontline) pozisyonları için oldukça faydalıdır.",
    },
    {
      question: "İş ilanı platformlarıyla entegre oluyor mu?",
      answer:
        "Evet — ScaleHire, başvurudan mülakata geçiş süreçlerini hızlandırmak için büyük iş ilanı platformlarına bağlanabilir.",
    },
    {
      question: "ATS/HRIS sistemleri ile entegre oluyor mu?",
      answer:
        "Evet — SorsX, mevcut iş akışınıza uyum sağlamak için ATS veya HRIS sistemlerinizle entegre olabilir.",
    },
    {
      question: "Kendi mülakat sorularımızı kullanabilir miyiz?",
      answer:
        "Evet — yapay zekâ tarafından oluşturulan soruları kullanabilir, kendi sorularınızı ekleyebilir veya her ikisini birlikte kullanabilirsiniz.",
    },
    {
      question: "Aday deneyimini nasıl destekler?",
      answer:
        "Adaylar mobil veya masaüstü cihazlarda mülakat yapabilir; bu da gecikmeleri ve planlama zorluklarını azaltır.",
    },
  ];

  return (
    <div>
      {/* <!-- hero  --> */}
      <section className="text-center hero-section">
        <div className="container">
          <div className="page-name-wrapper flex-center">
            <p className="page-name-text">ScaleHire</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="main-heading" style={{ maxWidth: "680px" }}>
              <span>Adaylar için</span>
              <span className="first-word">
                Yapay Zeka Destekli İşe Alım Yazılımı
              </span>
            </h1>
          </div>
          <p className="sub-text" style={{ maxWidth: "640px" }}>
            İş ilanı oluşturma, ön eleme ve AI video mülakat otomasyonları ile
            ekiplerin dakikalar içinde en iyi yetenekleri kısa listeye almasını
            sağlayın.
          </p>
          <div className="btn-wrapper">
            <a href="demo_page_2.html">
              <button className="blue-border-button">
                <p>Demo talep edin</p>
              </button>
            </a>
          </div>

          <div className="mobile-image">
            <img
              src="../assets/sorsx_hire/SorsXHireheroMobile.png"
              alt="hero-image"
            />
          </div>
          <div className="hero-image-wrapper desktop-image">
            {/* <!-- <img
            src="../assets/sorsx_hire/sorsx_corner_img.png"
            alt="corner-image"
            className="hero-corner-img"
          /> --> */}
            <img
              src="../assets/sorsx_hire/SorsXHirehero.png"
              alt="hero-image"
              className="hero-main-img"
            />
          </div>
        </div>
        {/* <!-- slider  --> */}
        <Slider />
      </section>

      {/* <!-- for recruiters section --> */}
      <section className="info-section feature-info-section">
        <div className="container flex">
          <div className="info-content">
            <div className="page-name-text">
              İşe Alım Uzmanları ve Yetenek Kazanımı Ekipleri için
            </div>
            <h3>İş ilanından kısa listeye kadar, otomatik</h3>
            <p className="section-description">
              ScaleHire, işe alım sürecinin; iş tanımları, mülakat soruları,
              özgeçmiş ön elemesi ve aday yönlendirme gibi erken aşamalarını
              uçtan uca otomatikleştirir. Yapay zeka tarafından oluşturulan
              soruları kullanabilir ya da mevcut sorularınızı, sürecinizi
              yeniden kurgulamak zorunda kalmadan sisteme ekleyebilirsiniz.
              Sonuç olarak, lokasyonlar ve roller genelinde ölçeklenebilen daha
              hızlı ve daha tutarlı bir değerlendirme akışı elde edersiniz.
            </p>
          </div>
          <div className="info-image">
            <img
              src="../assets/TR/sorsx_hire/is ilan.png"
              alt="for recruiters"
            />
          </div>
        </div>
      </section>

      {/* <!-- outreach section --> */}
      <section className="info-section outreach-section padding-y">
        <div className="container flex">
          <div className="info-image">
            <img
              src="../assets/TR/sorsx_hire/is ilani blue mobile.png"
              alt="For Hiring managers"
              className="mobile-image"
            />
            <img
              src="../assets/TR/sorsx_hire/is ilani blue.png"
              alt="For Hiring managers"
              className="desktop-image"
            />
          </div>
          <div className="info-content">
            <div className="page-name-text">İşe Alım Müdürleri İçin</div>
            <h3>İş ilanı platformlarından anında mülakatlara</h3>
            <p className="section-description">
              ScaleHire, halihazırda kullandığınız iş ilanı platformlarıyla
              entegre çalışarak adayların başvurudan mülakata hızla geçmesini
              sağlar. Özgeçmişlerin tek başına yeterli olmadığı roller için
              adaylar anında mülakata girebilir, bu da sürecin pürüzlerini
              ortadan kaldırırken değerlendirme kalitesini artırır. Yöneticiler
              koordinasyona daha az, görüşmeye hazır adayları incelemeye daha
              fazla zaman ayırır.
            </p>
            <div className="mt-3">
              <a href="demo_page_1.html">
                <button className="white-button">
                  ScaleHire’ı Canlı Görün
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- talent section --> */}
      <section className="info-section feature-info-section padding-y">
        <div className="container flex-between gap-10">
          <div className="info-content">
            <div className="page-name-text">Yetenek Süreçleri İçin</div>
            <h3>Adil ve tutarlı mülakatlar + yapılandırılmış puanlama</h3>
            <p className="section-description">
              ScaleHire, tutarlı bir yapı ile AI video mülakatlar yürütür ve
              yanıtları analiz ederek net bir değerlendirme özeti sunar. Şüpheli
              davranışları işaretleyebilir ve yöneticilerin zamanını boşa
              harcayan düşük değerli mülakatları azaltır. Sonuç olarak hız,
              adalet ve karşılaştırılabilirlik için tasarlanmış, karar almaya
              hazır kısa listeler elde edersiniz.
            </p>
          </div>
          <div className="info-image">
            <img src="../assets/TR/sorsx_hire/adil.png" alt="Talent" />
          </div>
        </div>
      </section>

      {/* <!-- cards section --> */}
      <section className="cards-section padding-y">
        <div className="bg-blur-circles">
          <div className="blur-circle circle-1"></div>
          <div className="blur-circle circle-2"></div>
          <div className="blur-circle circle-3"></div>
        </div>
        <div className="container grid-cards">
          {/* <!-- left large card --> */}
          <div className="card card-large">
            <div className="card-info">
              <div className="card-icon">
                <img
                  src="../assets/sorsx_hire/ai_video_icon.png"
                  alt="AI Icon"
                />
              </div>
              <h5 className="card-heading">Başvuranların %100’üyle mülakat</h5>
              <p className="card-desc">
                İşe alım sürecini yavaşlatmadan, AI video mülakatlarla büyük
                ölçekte ön eleme yapın.
              </p>
            </div>

            <div className="card-main-img">
              <img src="../assets/TR/sorsx_hire/basvu.png" alt="interview" />
            </div>
          </div>

          {/* <!-- right column with two cards --> */}
          <div className="card-stack">
            {/* <!-- top card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img
                    src="../assets/sorsx_hire/message_icon.png"
                    alt="Checklist Icon"
                  />
                </div>
                <h5 className="card-heading">~3 dakikada karar verin</h5>
                <p className="card-desc">
                  Yüzlerce mülakatı dakikalar içinde sıralı kısa listelere
                  çevirin. Yüksek hacimli işe alım için özel olarak
                  geliştirildi.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="../assets/TR/sorsx_hire/3 dakikada.png"
                  alt="Decisions"
                />
              </div>
            </div>

            {/* <!-- bottom card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img
                    src="../assets/sorsx_hire/mail_icon.png"
                    alt="User Icon"
                  />
                </div>
                <h5 className="card-heading">Çok kanallı etkileşim</h5>
                <p className="card-desc">
                  E-posta, SMS, WhatsApp ve LinkedIn üzerinden yapılan
                  iletişimle aday sürecini kesintisiz ilerletin.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="../assets/TR/sorsx_hire/cok kanali.png"
                  alt="engagement"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- feedback section --> */}
      <section className="feedback-section padding-y">
        <div className="container feedback-container">
          <div className="ceo-photo-wrapper">
            <img
              src="../assets/sorsx_hire/manager_img.png"
              alt="manager"
              className="ceo-photo"
            />
          </div>
          <div className="feedback-card">
            <span className="quote-mark">“</span>
            <p className="feedback-text">
              SorsX otomatik ön eleme ve AI video mülakatlarla işe alım
              sürecimizi hızlandırdı, tutarlı değerlendirmeler ve hızlı, karar
              almaya hazır kısa listeler sağladı.
            </p>
            <div className="feedback-footer">
              <div className="ceo-info">
                <h4 className="ceo-name">Sevda Canbaz</h4>
                <p className="ceo-title">
                  İnsan ve Kültür Müdürü, Dalgakıran Kompresör
                </p>
              </div>
              <div className="company-logo">
                <img
                  src="../assets/sorsx_hire/dalgakiran_icon.png"
                  alt="dalgakiran_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <FAQs faqsData={faqs} />

      {/* <!-- stop paying section --> */}
      <section className="stop-paying-section padding-y">
        <div className="circles-background">
          <img
            src="../assets/sorsx_hire/stop_circle_3.png"
            alt=""
            className="stop-circle circle-large"
          />
          <img
            src="../assets/sorsx_hire/stop_circle_2.png"
            alt=""
            className="stop-circle circle-medium"
          />
          <img
            src="../assets/sorsx_hire/stop_circle_1.png"
            alt=""
            className="stop-circle circle-small"
          />
        </div>
        {/* <!-- content div  --> */}
        <div className="container stop-paying-container z-10">
          <div className="stop-paying-content">
            <div className="tag-pill white-pill">Sonraki adımı atın</div>
            <h3 className="white-text-1">
              Yüksek Başvuru Hacmini Kolayca Yönetin
            </h3>
            <p className="white-text">
              Manuel ön eleme ve planlamanın yerini, kaliteyi ve aday deneyimini
              koruyan işe alım otomasyonuyla değiştirin.
            </p>
            <div className="stop-paying-logos">
              <img src="../assets/sorsx_hire/logo_4.png" alt="logo" />
              <img src="../assets/sorsx_hire/logo_5.png" alt="logo" />
              <img src="../assets/sorsx_hire/logo_6.png" alt="logo" />
              <img src="../assets/sorsx_hire/logo_7.png" alt="logo" />
              <img src="../assets/sorsx_hire/logo_3.png" alt="logo" />
              <img src="../assets/sorsx_hire/logo_2.png" alt="logo" />
            </div>
          </div>

          <div className="stop-paying-card-wrapper">
            <div className="stop-paying-card">
              <h6>Demo Talep Edin</h6>
              <p>
                Kişiselleştirilmiş bir demo planlayın ve ScaleHire’ın iş
                akışınıza nasıl uyduğunu görün. Tek bir görüşmede size uygun
                olup olmadığını netleştirin.
              </p>
              <div className="card-input-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="email-input-card"
                  id="emailInputCard"
                  required
                />
                <span className="card-error" id="emailCardError"></span>

                <button className="blue-button card-button" id="demoBtnCard">
                  Demo Planlayın
                </button>
              </div>
              <div className="trust-badges-row">
                <img
                  src="../assets/sorsx_hire/demo_logo_1.png"
                  alt="Capterra"
                />
                <img
                  src="../assets/sorsx_hire/demo_logo_2.png"
                  alt="Software Advice"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SorsxHire;

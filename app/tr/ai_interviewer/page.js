import FAQs from "@/components/FAQs/FAQs";
import Slider from "@/components/Slider/Slider";
import React from "react";
import "./ai_interviewer.css";
import Link from "next/link";

const AiInterviewer = () => {
  const faqs = [
    {
      question: "AI mülakat yazılımı nedir?",
      answer:
        "İşe alım kararlarını hızlandırmak için yapılandırılmış mülakatlar yürüten ve tutarlı değerlendirme çıktıları üreten bir yazılımdır.",
    },
    {
      question: "Teknik roller için de uygun mu?",
      answer:
        "Evet — işe alım uzmanı tarafından yapılan teknik ön elemelere olan bağımlılığı azaltmak ve erken aşamalarda doğrulamayı iyileştirmek için geliştirildi.",
    },
    {
      question: "İşe alım uzmanları mülakata katılabilir mi?",
      answer:
        "Evet — işe alım uzmanları canlı olarak katılabilir ya da sonuçları daha sonra inceleyebilir.",
    },
    {
      question: "Mobil ve masaüstünde kullanılabilir mi?",
      answer: "Evet — adaylar mülakatları her ikisinde de tamamlayabilir.",
    },
    {
      question: "Mülakat sorularını özelleştirebilir miyiz?",
      answer:
        "Evet — yapay zekâ tarafından oluşturulan soruları kullanabilir, kendi sorularınızı ekleyebilir veya her ikisini birlikte kullanabilirsiniz.",
    },
    {
      question: "ATS / HRIS sistemleriyle entegre çalışır mı?",
      answer:
        "Evet — SorsX, mevcut sistemleriniz ve iş akışlarınızla entegre olabilir.",
    },
  ];

  return (
    <div id="trAiInterviewer">
      {/* <!-- hero  --> */}
      <section className="text-center hero-section">
        <div className="container">
          <div className="page-name-wrapper flex-center">
            <p className="page-name-text">AI Mülakat</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              className="main-heading"
              style={{ maxWidth: "820px", textAlign: "center" }}
            >
              <span>Her Pozisyon İçin</span>
              <span className="first-word">
                Yapay Zeka Destekli Mülakat Yazılımı
              </span>
            </h1>
          </div>
          <p className="sub-text">
            Dinamik AI video mülakatlar, adayları derinlemesine değerlendirir ve
            tutarlı şekilde puanlayarak yöneticilerin oluşturulan kısa listelere
            güvenmesini sağlar.
          </p>
          <div className="btn-wrapper">
            <Link href="/tr/demo_page_2">
              <button className="blue-border-button">
                <p>Demo talep edin</p>
              </button>
            </Link>
          </div>
          <div className="mobile-image">
            <img
              src="../assets/ai_interviewer/Aiinterview(heromobile).png"
              alt="hero-image"
            />
          </div>
          <div className="hero-image-wrapper desktop-image">
            <img
              src="../assets/TR/ai_interviewer/hero_img.png"
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
            <div className="page-name-text">İşe Alım Yapanlar İçin</div>
            <h3>Teknik sorularda artık tahmine yer yok</h3>
            <p className="section-description">
              AI mülakat yazılımı, minimum bilgiyle role uygun mülakat soruları
              üretir; araştırma süresini ve tutarsızlığı azaltır. İlk mülakat
              turunu standartlaştırarak işe alım uzmanlarının teknik
              değerlendirmeleri tek başına “taşıma” zorunluluğunu ortadan
              kaldırır. İşe alım ekipleri, ek toplantılar eklemeden daha net ve
              güvenilir bir sinyal elde eder.
            </p>
          </div>
          <div className="info-image">
            <img
              src="../assets/TR/ai_interviewer/teknik.png"
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
              src="../assets/TR/ai_interviewer/yanitlari.png"
              alt="For Hiring managers"
            />
          </div>
          <div className="info-content">
            <div className="page-name-text">İşe Alım Yöneticileri İçin</div>
            <h3>Yanıtları doğrulayan derinlemesine mülakatlar</h3>
            <p className="section-description">
              AI destekli yapay zeka mülakat yazılımı, yanıtlar belirsiz veya
              düşük sinyalli olduğunda dinamik olarak derinleşir ve ek sorularla
              konuyu açar; böylece “iyi konuşan” ama zayıf içerikli yanıtların
              etkisini azaltır. Rol ve lokasyonlar arasında adayları
              karşılaştırmayı kolaylaştıran yapılandırılmış değerlendirmeler
              üretir. Yöneticiler ister canlı olarak katılabilir, ister
              sonuçları sonradan inceleyebilir.
            </p>
            <div className="mt-3">
              <Link href="/tr/demo_page_1">
                <button className="white-button">
                  AI Mülakat Deneyimine Tanık Olun
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- talent section --> */}
      <section className="info-section feature-info-section padding-y">
        <div className="container flex-between gap-10">
          <div className="info-content">
            <div className="page-name-text">Adaylar İçin</div>
            <h3>Mobil ve masaüstünde 7/24 mülakat</h3>
            <p className="section-description">
              Adaylar, gecikme olmadan istedikleri anda ve istedikleri yerden
              mülakata katılabilir. Bu yaklaşım mülakat tamamlama oranlarını
              artırır, pozisyon doldurma süresini kısaltır ve ölçekli şekilde
              tutarlı bir aday deneyimi yaratır. Süreç ivmesini korurken aday
              kalitesinden ödün vermezsiniz.
            </p>
          </div>
          <div className="info-image">
            <img src="../assets/TR/ai_interviewer/mobil.png" alt="Talent" />
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
                  src="../assets/ai_interviewer/profile_icon.png"
                  alt="profile_icon"
                />
              </div>
              <h5 className="card-heading">Tutarlı puanlama</h5>
              <p className="card-desc">
                Aday karşılaştırmalarını hızlandırmak ve daha az öznel hale
                getirmek için erken aşama mülakatları standartlaştırın
              </p>
            </div>

            <div className="card-main-img">
              <img
                src="../assets/TR/ai_interviewer/tutarli.png"
                alt="profile_img"
              />
            </div>
          </div>

          {/* <!-- right column with two cards --> */}
          <div className="card-stack">
            {/* <!-- top card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img
                    src="../assets/ai_interviewer/clock_icon.png"
                    alt="clock Icon"
                  />
                </div>
                <h5 className="card-heading">
                  Yöneticiler için zaman tasarrufu
                </h5>
                <p className="card-desc">
                  Yöneticiler devreye girmeden önce gereksiz el değiştirmeleri
                  ve düşük kaliteli ön elemeleri azaltın.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="../assets/TR/ai_interviewer/yunitic.png"
                  alt="clock_img"
                />
              </div>
            </div>

            {/* <!-- bottom card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img
                    src="../assets/ai_interviewer/ai_user_icon.png"
                    alt="ai_user_icon"
                  />
                </div>
                <h5 className="card-heading">İşe alım sürecinde artan güven</h5>
                <p className="card-desc">
                  Yapılandırılmış AI mülakat verileri, ekipler ve paydaşlar
                  arasında daha net kararlar alınmasını destekler.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="../assets/TR/ai_interviewer/ise alim.png"
                  alt="ai_user_img"
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
              src="../assets/ai_interviewer/ceo_img.png"
              alt="Violet Herin"
              className="ceo-photo"
            />
          </div>
          <div className="feedback-card">
            <span className="quote-mark">“</span>
            <p className="feedback-text">
              Projé, son altı aydır SorsX’in AI mülakat sürecini kullanıyor. Ön
              eleme ve ilk mülakatları hızlandırma konusunda gerçekten oyunun
              kurallarını değiştirdi. Kısa listeye ilerleteceğimiz adaylar
              hakkında bilinçli kararlar almamız için ihtiyaç duyduğumuz her
              şeyi net bir şekilde sunuyor.
            </p>
            <div className="feedback-footer">
              <div className="ceo-info">
                <h4 className="ceo-name">Violet Herin</h4>
                <p className="ceo-title">CEO, Projé Inc.</p>
              </div>
              <div className="company-logo">
                <img
                  src="../assets/ai_interviewer/company_logo_img.png"
                  alt="Projé Logo"
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
        <div className="stop-paying-bg-overlay"></div>
        {/* <!-- content div  --> */}
        <div className="container stop-paying-container z-10">
          <div className="stop-paying-content">
            <div className="page-name-text white-pill">Sonraki adımı atın</div>
            <h3 className="white-text-1">“Hissiyata” güvenmeyi bırakın</h3>
            <p className="white-text">
              Ölçeklenebilir yapılandırılmış AI video mülakatlar yürütün;
              böylece yöneticiler değerlendirme çıktısına güvenir, işe alım
              uzmanları daha hızlı ilerler.
            </p>
            <div className="stop-paying-logos">
              <img src="../assets/ai_interviewer/logo_4.png" alt="logo" />
              <img src="../assets/ai_interviewer/logo_5.png" alt="logo" />
              <img src="../assets/ai_interviewer/logo_6.png" alt="logo" />
              <img src="../assets/ai_interviewer/logo_7.png" alt="logo" />
              <img src="../assets/ai_interviewer/logo_3.png" alt="logo" />
              <img src="../assets/ai_interviewer/logo_2.png" alt="logo" />
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
                  src="../assets/ai_interviewer/demo_logo_1.png"
                  alt="Capterra"
                />
                <img
                  src="../assets/ai_interviewer/demo_logo_2.png"
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

export default AiInterviewer;

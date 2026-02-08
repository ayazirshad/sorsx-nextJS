"use client"; 

import { useState } from "react";
import Slider from "@/components/Slider/Slider";
import React from "react";
import "./homePage.css";
import Link from "next/link";

const TrHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
    const handleCardClick = (index) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
    };
  return (
    <div id="trHomePage">
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="main-heading">
              <span className="highlight">İşe Alımda Yapay Zeka.</span> Kontrol
              Hala Sizde.
            </h1>
            <p className="sub-text">
              SorsX, mevcut işe alım süreçlerinize entegre olan bir yapay zeka
              işe alım ve mülakat platformudur. Aday bulma, ön eleme ve yapay
              zeka destekli video mülakatları otomatikleştirir; ekibinizin
              yalnızca en doğru adaylara odaklanmasını sağlar.
            </p>
            <div className="btn-wrapper">
              <Link href="/tr/demo_page_1">
                <button className="blue-border-button">
                  <p>Demo talep edin</p>
                </button>
              </Link>
            </div>
            <div className="hero-trust-logos">
              <img src="../assets/index/capterra.png" alt="Capterra" />
              <img
                src="../assets/index/software-advice.png"
                alt="Software Advice"
              />
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="../assets/index/tr-dashboard.png"
              alt="hospitality hero"
            />
          </div>
        </div>
      </section>

      {/* slider */}
      <Slider bgColor="black" />

      {/* <!-- ai recruiting section --> */}
      <section className="info-section shortlist-section padding-y">
        <div className="container">
          <div className="info-content">
            <h3>Yapay Zeka Destekli İşe Alım Nedir?</h3>
            <p className="section-description">
              Yapay zeka destekli işe alım, otomasyon ve makine öğrenimini
              kullanarak işe alım ekiplerinin aday bulma, başvuruları ön
              elemeden geçirme ve yapılandırılmış mülakatları daha hızlı ve
              tutarlı şekilde yürütmesine yardımcı olur. SorsX; yapay zeka ile
              işe alım, mülakat yazılımı ve yetenek analitiğini bir araya
              getirerek, kaliteden ödün vermeden işe alım süreçlerini
              ölçeklendirmenizi sağlar.
            </p>
          </div>
          <div className="info-image">
            <img src="../assets/index/sorsx-graph.png" alt="svg" />
            <div className="svg_circle"></div>
          </div>
        </div>
      </section>

      {/* <!-- industry hiring section --> */}
      <section className="industry-hiring-section padding-y">
        <div className="container">
          <div className="industry-header">
            <div className="header-left">
              <h3 className="industry-main-title">
                Sektörünüze Uyum Sağlayan Yapay Zeka Destekli İşe Alım
              </h3>
              <p className="industry-sub-title">
                SorsX yapay zeka destekli işe alım ve AI mülakat, iş akışlarını;
                mevsimsel saha çalışanı alımından, yüksek uzmanlık gerektiren
                teknik ve klinik rollere kadar iş dünyanızın gerçeklerine göre
                uyarlar.
              </p>
            </div>
            <div className="header-right">
              <Link href="/tr/demo_page_1">
                <button className="white-button">Daha Fazlası İçin</button>
              </Link>
            </div>
          </div>

          <div className="industry-cards-container">
            <div className={`industry-card ${activeIndex === 0 ? "active" : ""}`}
              data-industry="technology"
              onClick={() => handleCardClick(0)}>
              <div
                className="card-bg"
                style={{
                  backgroundImage: "url(../assets/index/technology_pr_img.png)",
                }}
              ></div>
              <div className="card-overlay">
                <h5 className="card-title">Teknoloji</h5>
                <div className="overlay-info">
                  <div className="info">
                    <p className="hire-smarter">Daha akıllı işe alım yapın:</p>
                    <ul className="industry-bullets">
                      <li className="bullet-item">
                        <span>SaaS</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Fintech</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Startuplar</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Enterprise</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img
                        src="../assets/index/CloudAITechnologies.png"
                        alt="Cloud AI Technologies"
                        className="card-logo-1"
                      />
                      <img
                        src="../assets/index/waditek.png"
                        alt="waditek"
                        className="card-logo-1"
                      />
                    </div>
                    <p className="text-T1">
                      Mühendislik, ürün ve IT pozisyonlarını doldurması gereken
                      teknoloji ekipleri için yapay zeka destekli işe alım.
                      SorsX, her adayı yapay zeka destekli mülakatlarla
                      değerlendirir ve altyapınıza, seviye beklentinize ve
                      şirket kültürünüze uyum sağlayan yetenekleri öne çıkarır.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>

            <div  className={`industry-card ${activeIndex === 1 ? "active" : ""}`}
              data-industry="manufacturing"
              onClick={() => handleCardClick(1)}>
              <div
                className="card-bg"
                style={{
                  backgroundImage:
                    "url(../assets/index/manufacturing_pr_img.png)",
                }}
              ></div>
              <div className="card-overlay">
                <h5 className="card-title">Üretim</h5>
                <div className="overlay-info">
                  <div className="info">
                    {/* <!-- <p className="hire-smarter">Hire smarter for:</p> --> */}
                    <ul className="industry-bullets">
                      <li className="bullet-item">
                        <span>Automotive</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Food</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Electronics</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Logistics</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img
                        src="../assets/index/detail-logo-2.png"
                        alt="logo1"
                      />
                    </div>
                    <p className="text-T1">
                      AI recruiting software for manufacturing companies that
                      can’t afford empty shifts. Automatically screen operators,
                      technicians, and supervisors using recruitment automation
                      software, then deliver hire-ready candidates to managers
                      in minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>

            <div className={`industry-card ${activeIndex === 2 ? "active" : ""}`}
              data-industry="hospitality"
              onClick={() => handleCardClick(2)}>
              <div
                className="card-bg"
                style={{
                  backgroundImage:
                    "url(../assets/index/hospitality_pr_img.png)",
                }}
              ></div>
              <div className="card-overlay">
                <h5 className="card-title">Konaklama & Hizmet</h5>
                <div className="overlay-info">
                  <div className="info">
                    {/* <!-- <p className="hire-smarter">Hire smarter for:</p> --> */}
                    <ul className="industry-bullets">
                      <li className="bullet-item">
                        <span>Hotels</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Restaurants</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Resorts</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Events</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img
                        src="../assets/index/detail-logo-3.png"
                        alt="logo1"
                      />
                    </div>
                    <p className="text-T1">
                      AI hiring software for hospitality organizations facing
                      seasonal spikes and high turnover. Run AI video interviews
                      around the clock and build a ready-to-hire bench of
                      service-ready candidates before peak season begins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>

            <div  className={`industry-card ${activeIndex === 3 ? "active" : ""}`}
              data-industry="telecom"
              onClick={() => handleCardClick(3)}>
              <div
                className="card-bg"
                style={{
                  backgroundImage: "url(../assets/index/telecom_pr_img.png)",
                }}
              ></div>
              <div className="card-overlay">
                <h5 className="card-title">İletişim Teknolojileri</h5>
                <div className="overlay-info">
                  <div className="info">
                    {/* <!-- <p className="hire-smarter">Hire smarter for:</p> --> */}
                    <ul className="industry-bullets">
                      <li className="bullet-item">
                        <span>Commerical</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Residential</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Infrastructure</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Industrial</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img
                        src="../assets/index/detail-logo-4.png"
                        alt="logo1"
                        className="mimeda"
                      />
                    </div>
                    <p className="text-T1">
                      AI hiring for telecom providers needing field technicians,
                      network experts, and support staff. SorsX combines AI
                      interviews and skills-aware screening to balance technical
                      know-how, compliance, and customer experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>

            <div className={`industry-card ${activeIndex === 4 ? "active" : ""}`}
              data-industry="healthcare"
              onClick={() => handleCardClick(4)}>
              <div
                className="card-bg"
                style={{
                  backgroundImage: "url(../assets/index/healthcare_pr_img.png)",
                }}
              ></div>
              <div className="card-overlay">
                <h5 className="card-title">Sağlık</h5>
                <div className="overlay-info">
                  <div className="info">
                    {/* <!-- <p className="hire-smarter">Hire smarter for:</p> --> */}
                    <ul className="industry-bullets">
                      <li className="bullet-item">
                        <span>Hospitals</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Clinics</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Long-Term</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                      <li className="bullet-item">
                        <span>Admin</span>
                        <img
                          src="../assets/index/arrow-right-02.png"
                          alt="arrow"
                          className="arrow-icon"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img
                        src="../assets/index/detail-logo-5.png"
                        alt="logo1"
                        className="proje"
                      />
                    </div>
                    <p className="text-T1">
                      AI recruitment software and AI interview software designed
                      for healthcare compliance and patient care. SorsX
                      standardizes AI video interviews for clinical and
                      non-clinical roles, enabling clear, defensible hiring
                      decisions at scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- platform overview section --> */}
      <section className="platform-overview-section padding-y">
        <div className="container platform-container">
          <div className="platform-intro">
            <h3 className="platform-main-title">
              Tek Bir Yapay Zeka İşe Alım Platformu. Daha Akıllı İşe Alımın
              Birden Fazla Yolu.
            </h3>
            <p className="text-T1">
              SorsX, otonom aday bulma, yapay zeka destekli mülakat ve video
              mülakat çözümlerini yetenek analitiğiyle tek bir platformda
              buluşturarak modern insan kaynakları ve işe alım ekiplerinin daha
              akıllı işe alım yapmasını sağlar.
            </p>
            <div className="btn-wrapper">
              <Link href="/tr/demo_page_1">
                <button className="blue-border-button">
                  <p>Demo talep edin</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="platform-grid">
            <div className="platform-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <img
                    src="../assets/index/artificial-intelligence-04.svg"
                    alt="icon"
                  />
                </div>
                <div>
                  <h5>SorsX AI</h5>
                  <p className="card-desc text-B1">
                    Pasif yetenekler için otonom AI işe alım ajanları
                  </p>
                </div>
              </div>
              <ul className="card-features">
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Anahtar kelime aramaları ve filtrelerin ötesine geçen yapay
                    zeka destekli işe alım platformu
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Pasif adaylar için otonom aday bulma, etkileşim ve mülakat
                    süreçleri
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Kritik roller için işe hazır, sınırlı ve nitelikli aday
                    havuzu sunar
                  </span>
                </li>
              </ul>
              <Link href="/tr/demo_page_1" className="learn-more text-T1">
                Daha fazlasını keşfet
                <img src="../assets/index/arrow-right-dark.svg" alt="arrow" />
              </Link>
            </div>

            <div className="platform-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <img src="../assets/index/user-search-01.svg" alt="icon" />
                </div>
                <div>
                  <h5>Scale Hire</h5>
                  <p className="card-desc text-B2">
                    Başvuran her aday için AI işe alım yazılımı
                  </p>
                </div>
              </div>
              <ul className="card-features">
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Role özel, kapsayıcı iş ilanları ve AI mülakat sorularını
                    otomatik olarak oluşturur
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    AI mülakat yazılımı ile başvuran adayların %100’ünü standart
                    video mülakatlarla değerlendirir
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Aday iletişimi ve zamanlamayı otomatikleştirerek hızlı
                    mülakat yapılmasını sağlar
                  </span>
                </li>
              </ul>
              <Link href="/tr/sorsx_hire" className="learn-more text-T1">
                Daha fazlasını keşfet
                <img src="../assets/index/arrow-right-dark.svg" alt="arrow" />
              </Link>
            </div>

            <div className="platform-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <img src="../assets/index/ai-video.svg" alt="icon" />
                </div>
                <div>
                  <h5>AI Video Interviewer</h5>
                  <p className="card-desc text-B1">
                    Her rol, her yer için AI video mülakat yazılımı
                  </p>
                </div>
              </div>
              <ul className="card-features">
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Adaylar için masaüstü ve mobilde, 7/24 erişilebilir AI video
                    mülakatlar
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    İş tanımı ve yetkinlik profiline uygun AI mülakat soruları
                    üretir
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Önyargıyı azaltan, objektif ve tutarlı puanlama ile kısa
                    listeleri kolayca karşılaştırmanızı sağlar
                  </span>
                </li>
              </ul>
              <Link href="/tr/ai_interviewer" className="learn-more text-T1">
                Daha fazlasını keşfet
                <img src="../assets/index/arrow-right-dark.svg" alt="arrow" />
              </Link>
            </div>

            <div className="platform-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <img src="../assets/index/chat-spark-01.svg" alt="icon" />
                </div>
                <div>
                  <h5>SorsX Next</h5>
                  <p className="card-desc text-B1">
                    İşe alım ekosisteminiz için sohbet tabanlı yetenek analitiği
                  </p>
                </div>
              </div>
              <ul className="card-features">
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Adaylar, roller ve işe alım havuzları hakkında doğal dilde
                    sorular sorun
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Yetenekler, deneyim ve AI mülakat performansına göre
                    adayları anında karşılaştırın
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="../assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    AI mülakat asistanı ve işe alım süreçlerinde yardımcı bir
                    pilot olarak İK ve işe alım liderlerine destek sağlar.
                  </span>
                </li>
              </ul>
              <Link href="/tr/demo_page_1" className="learn-more text-T1">
                Daha fazlasını keşfet
                <img src="../assets/index/arrow-right-dark.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- recruitment platform --> */}
      <section className="recruitment-plaftform padding-y">
        <div className="container feedback-header">
          <div className="feedback-text-content">
            <h3 className="section-heading">
              Dünya genelinde ekiplerin güvendiği İşe Alım Platformu.
            </h3>
            <p className="text-T1">
              İnsan kaynakları liderleri ve yetenek kazanımı ekipleri, yapay
              zeka destekli işe alım platformumuz ve AI mülakat çözümlerimizle
              işe alımı nasıl dönüştürüyor?
            </p>
          </div>
          <div className="trust-logos">
            <img src="../assets/index/capterra.png" alt="Capterra" />
            <img
              src="../assets/index/software-advice.png"
              alt="Software Advice"
            />
          </div>
        </div>

        <div className="container">
          <div className="t-grid">
            {/* <!-- Card 1 --> */}
            <article className="t-card">
              <img
                src="../assets/index/ceo.png"
                alt="CEO Background"
                className="t-card-img"
              />
              <div className="t-glass">
                <p className="t-quote">
                  Ön eleme ve ilk mülakat süreçlerini ciddi şekilde hızlandıran
                  gerçek bir “oyun değiştirici” oldu. Bilinçli kararlar almamız
                  için tam olarak ihtiyacımız olan içgörüleri sağlıyor.
                </p>

                <div className="t-meta">
                  <div>
                    <div className="t-name">Violet Herin</div>
                    <div className="t-role">CEO, Projé Inc.</div>
                  </div>
                  <div className="t-logo">
                    <img src="../assets/index/proje.png" alt="proje" />
                  </div>
                </div>
              </div>
            </article>

            {/* <!-- Card 2 --> */}
            <article className="t-card">
              <img
                src="../assets/index/hod.png"
                alt="HOD Background"
                className="t-card-img"
              />
              <div className="t-glass t-glass--red">
                <p className="t-quote">
                  SorsX, yapay zeka destekli işe alım ile ön eleme ve AI mülakat
                  süreçlerini otomatikleştirdi; işe alımı hızlandırırken
                  yapılandırılmış ve savunulabilir işe alım kararlarını
                  güçlendirdi.
                </p>

                <div className="t-meta">
                  <div>
                    <div className="t-name">Canan Berkem Uzun</div>
                    <div className="t-role">
                      Head of Marketing TADO, Duracell Inc.
                    </div>
                  </div>
                  <div className="t-logo">
                    <img src="../assets/index/Duracell.png" alt="Duracell" />
                  </div>
                </div>
              </div>
            </article>

            {/* <!-- Card 3 --> */}
            <article className="t-card">
              <img
                src="../assets/index/ceo-2.png"
                alt="CEO 2 Background"
                className="t-card-img"
              />
              <div className="t-glass">
                <p className="t-quote">
                  Restoranlarımız genelinde SorsX’in yapay zeka destekli işe
                  alım çözümleri, yüksek hacimli işe alımı AI mülakatlarla
                  kolaylaştırarak yöneticilere müşterilere daha fazla zaman
                  ayırma imkânı sağladı.
                </p>

                <div className="t-meta">
                  <div>
                    <div className="t-name">Sabbir Husain</div>
                    <div className="t-role">CEO, Husain Hungry Howies</div>
                  </div>
                  <img src="../assets/index/hungry.png" alt="hungry" />
                </div>
              </div>
            </article>

            {/* <!-- Card 4 --> */}
            <article className="t-card">
              <img
                src="../assets/index/cm.png"
                alt="CM Background"
                className="t-card-img"
              />
              <div className="t-glass t-glass--light">
                <p className="t-quote">
                  SorsX’in AI işe alım yazılımı, ön eleme ve AI video mülakat
                  süreçlerini otomatikleştirerek standartlaştırılmış
                  değerlendirmeler ve hızlıca karar almaya hazır kısa listeler
                  sundu.
                </p>

                <div className="t-meta">
                  <div>
                    <div className="t-name">Sevda Canbaz</div>
                    <div className="t-role">
                      People and Culture Manager, Dalgakıran Kompresör
                    </div>
                  </div>
                  <div className="t-logo">
                    <img
                      src="../assets/index/Dalgakiran.png"
                      alt="Dalgakiran"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* <!-- proven ai recruiting --> */}
      <section className="proven-ai-recruiting padding-y">
        <div className="container">
          <div className="roi__top">
            <div className="roi__heading">
              <h2>Ölçülebilir ve Kanıtlanmış Yapay Zeka Destekli İşe Alım</h2>
              <p>
                SorsX, yapay zeka destekli işe alım ve mülakat çözümlerini
                ölçülebilir iş etkisine dönüştürür; işe alımcıların zamanını
                geri kazandırır, araç karmaşasını azaltır ve tüm departmanlarda
                pozisyonların daha hızlı doldurulmasını sağlar.
              </p>
            </div>

            <div className="btn-wrapper">
              <Link href="/tr/demo_page_1">
                <button className="blue-border-button">
                  <p>Daha fazlasını keşfet</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="roi__divider"></div>

          <div className="roi__grid">
            {/* <!-- Card 1 --> */}
            <article className="roi__card">
              <div className="roi__mini">ROI (%)</div>
              <h5>%100’e yakın</h5>
              <p className="text-T1">
                Yapay zeka destekli işe alım platformunuzun gerçek getirisini
                ölçün. İş süreçlerini sadeleştiren, kullanılan araçları
                birleştiren ve birleşik platformlarla daha hızlı ölçeklenen
                ekipler, üç yıl içinde %384’e varan ROI artışları elde etti.
                SorsX, işe alım hunisinin en zaman alan adımlarını
                otomatikleştirerek aynı bileşik etkiyi işe alım motorunuza
                taşır.
              </p>
            </article>

            {/* <!-- Card 2 --> */}
            <article className="roi__card">
              <div className="roi__mini">Kazandığınız Zaman</div>
              <h5>aday başına2s 10dk</h5>
              <p className="text-T1">
                SorsX saves an average of 2 hours and 10 minutes per candidate
                by automating resume review, first-round screening, and AI video
                interviews. Across hundreds or thousands of applicants, that’s
                hundreds of recruiter hours reclaimed each quarter for strategy,
                stakeholder partnerships, and workforce planning.
              </p>
            </article>

            {/* <!-- Card 3 --> */}
            <article className="roi__card">
              <div className="roi__mini">Tasarruf Edilen Para</div>
              <h5>Milyonlarca Dolarlık Kazanç</h5>
              <p className="text-T1">
                Pozisyon doldurma süresini kısaltarak, ajans bağımlılığını
                azaltarak ve maliyetli yanlış işe alımları önleyerek SorsX,
                verimliliği somut finansal kazanca dönüştürür. Tıpkı birleşik iş
                platformlarının operasyonları sadeleştirerek milyonlarca
                dolarlık ek gelir yaratması gibi, SorsX’in AI işe alım platformu
                da boş pozisyon maliyetlerini, fazla mesaileri ve boşa harcanan
                mülakat döngülerini azaltır.
              </p>
            </article>

            {/* <!-- Card 4 --> */}
            <article className="roi__card">
              <div className="roi__mini">İşe Alım Süresi</div>
              <h5>%50+ Azalma</h5>
              <p className="text-T1">
                Haftalar süren yazışma ve geri dönüşlerden, dakikalar içinde
                inceleyebileceğiniz işe hazır kısa listelere geçin. SorsX;
                başvuru, ön eleme ve mülakat arasındaki gecikmeleri ortadan
                kaldırarak kritik pozisyonları daha hızlı doldurmanızı ve bu
                pozisyonların yarattığı gelir, hizmet kalitesi ve verimliliği
                daha erken yakalamanızı sağlar.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrHome;

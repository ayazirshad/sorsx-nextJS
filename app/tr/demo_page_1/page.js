import React from "react";
import "./demo_page_1.css";
import Slider from "@/components/Slider/Slider";

const DemoPage1 = () => {
  return (
    <div id="trDemoPage1">
      {/* <!-- hero --> */}
      <section className="text-center hero-section">
        <div className="bg-rod-container">
          <div className="bg-rod-1"></div>
          <div className="bg-rod-2"></div>
          <div className="bg-rod-3"></div>
        </div>
        <div className="container">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="main-heading" style={{ maxWidth: "790px" }}>
              {/* <!-- Book an Ai Recruiting Demo --> */}
              <span>Yapay Zeka Destekli İşe Alım </span>
              <span className="first-word">Demo’nuzu Planlayın</span>
            </h1>
          </div>
          <p className="sub-text" style={{ maxWidth: "650px" }}>
            SorsX’in aday bulma, ön eleme ve AI mülakat süreçlerini işe alım
            ekipleri için nasıl otomatikleştirdiğini görün
          </p>

          {/* <!-- Demo Form Section --> */}
          <div className="hero-demo-form-container">
            <div className="form-info-card">
              <h2 className="form-title">Demo talep edin</h2>
              <p className="text-T1">
                SorsX’in işe alım süreçlerinize ve mevcut araçlarınıza nasıl
                uyum sağladığını görmek için ürün uzmanımızla bir demo
                planlayın.
              </p>
            </div>
            <div className="form-fields-wrapper">
              <form className="demo-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Adınız</label>
                    <input type="text" placeholder="Adınızı giriniz" required />
                  </div>
                  <div className="form-group">
                    <label>Soyadınız</label>
                    <input
                      type="text"
                      placeholder="Soyadınızı giriniz"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Kurumsal Email</label>
                    <input
                      type="email"
                      placeholder="Kurumsal iletişim adresinizi giriniz"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Şirket Adı</label>
                    <input
                      type="text"
                      placeholder="Şirket adını giriniz"
                      required
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Pozisyon</label>
                  <input
                    type="text"
                    placeholder="Pozisyonunuzu giriniz"
                    required
                  />
                </div>
                <div className="form-footer">
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className="blue-border-button zero-margin"
                    >
                      Demo talep edin
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="bottom-divider"></div>

      {/* slider */}
      <Slider />

      {/* <!-- cards section --> */}
      <section className="cards-section padding-y">
        <div className="bg-blur-circles">
          <div className="blur-circle circle-1"></div>
          <div className="blur-circle circle-2"></div>
          <div className="blur-circle circle-3"></div>
        </div>
        <div className="container grid-cards">
          {/* <!-- Card 1 --> */}
          <div className="card">
            <h5 className="card-heading">Neden demo?</h5>
            <p className="card-desc text-T1">
              AI işe alım, kendi iş akışınıza uyum sağladığında en iyi sonucu
              verir. Demo boyunca SorsX’i; rollerinize, işe alım hacminize ve
              hedeflerinize göre uyarlayarak gösteririz. Amacımız sizi genel
              slaytlarla değil, netlik ve gerçek kullanım senaryolarıyla
              uğurlamak.
            </p>
            <div className="card-main-img">
              <img src="../assets/TR/demo_page_1/neden.png" alt="Why a demo" />
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="card">
            <h5 className="card-heading">Tam otomasyonu görün</h5>
            <p className="card-desc text-T1">
              SorsX’in manuel adımları nasıl uçtan uca yönettiğini izleyin:  rol
              oluşturma, adaylara ulaşma, ön eleme, AI video mülakatlar ve kısa
              listeler. Böylece işe alım ekipleri operasyonla değil, kararlarla
              ilgilenir.
            </p>
            <div className="card-main-img">
              <img
                src="../assets/TR/demo_page_1/tam.png"
                alt="See the full automation"
              />
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="card">
            <h5 className="card-heading">Abartı değil, kalite</h5>
            <p className="card-desc text-T1">
              Yapılandırılmış AI mülakat yazılımının nasıl tutarlı
              değerlendirmeler oluşturduğunu, düşük sinyal veren yanıtları nasıl
              işaretlediğini ve adaylar ile lokasyonlar arasında güvenle
              karşılaştırma yapmanızı nasıl sağladığını gösteriyoruz.
            </p>
            <div className="card-main-img">
              <img
                src="../assets/TR/demo_page_1/abarti.png"
                alt="Prove quality"
              />
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="card">
            <h5 className="card-heading">Altyapınıza tam uyum</h5>
            <p className="card-desc text-T1">
              SorsX; ATS/HRIS sistemlerinizle entegre olur ve e-posta, SMS,
              WhatsApp ve LinkedIn üzerinden aday iletişimini destekler. Yani
              sıfırdan başlamak zorunda kalmazsınız.
            </p>
            <div className="card-main-img">
              <img
                src="../assets/TR/demo_page_1/altya.png"
                alt="Fit your existing stack"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- feedback section --> */}
      <section className="feedback-section padding-y">
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
            <img src="../assets/demo_page_1/capterra.png" alt="Capterra" />
            <img
              src="../assets/demo_page_1/software-advice.png"
              alt="Software Advice"
            />
          </div>
        </div>

        <div className="container testimonials-grid">
          {/* <!-- Testimonial 1 --> */}
          <div className="testimonial-item">
            <div className="testimonial-photo">
              <img
                src="../assets/demo_page_1/Violet-Herin.png"
                alt="Violet Herin"
                className="photo-desktop"
              />
              <img
                src="../assets/demo_page_1/Violet-Herin.png"
                alt="Violet Herin"
                className="photo-mobile"
              />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-info">
                  <h4 className="text-L1">Violet Herin</h4>
                  <p className="text-L2">CEO, Projé Inc.</p>
                </div>
                <img src="../assets/demo_page_1/quote-icon.svg" alt="qoute" />
              </div>
              <p className="text-T1">
                Ön eleme ve ilk mülakat süreçlerini ciddi şekilde hızlandıran
                gerçek bir “oyun değiştirici” oldu. Bilinçli kararlar almamız
                için tam olarak ihtiyacımız olan içgörüleri sağlıyor.
              </p>
              <div className="testimonial-company">
                <img src="../assets/demo_page_1/proje.png" alt="Proje Logo" />
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div className="testimonial-item">
            <div className="testimonial-photo">
              <img
                src="../assets/demo_page_1/Sevda-Canbaz.png"
                alt="Sevda Canbaz"
                className="photo-desktop"
              />
              <img
                src="../assets/demo_page_1/Sevda-Canbaz.png"
                alt="Sevda Canbaz"
                className="photo-mobile"
              />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-info">
                  <h4 className="text-L1">Sevda Canbaz</h4>
                  <p className="text-L2">
                    People and Culture Manager, Dalgakıran Kompresör
                  </p>
                </div>
                <img src="../assets/demo_page_1/quote-icon.svg" alt="qoute" />
              </div>
              <p className="text-T1">
                SorsX’in AI işe alım yazılımı, ön eleme ve AI video mülakat
                süreçlerini otomatikleştirerek standartlaştırılmış
                değerlendirmeler ve hızlıca karar almaya hazır kısa listeler
                sundu.
              </p>
              <div className="testimonial-company">
                <img
                  src="../assets/demo_page_1/Dalgakiran.png"
                  alt="Dalgakıran Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage1;

import Slider from "@/components/Slider/Slider";
import React from "react";
import "@/app/(main)/demo_page_2/demo_page_2.css";

const DemoPage2 = () => {
  return (
    <div id="trDemoPage2">
      {/* <!-- hero  --> */}
      <section className="hero-section">
        <div className="bg-rod-container">
          <div className="bg-rod-1"></div>
          <div className="bg-rod-2"></div>
          <div className="bg-rod-1-mobile"></div>
          <div className="bg-rod-2-mobile"></div>
          <div className="bg-rod-3-mobile"></div>
        </div>

        <div className="content-wrapper container">
          <div className="left-content">
            <h1 className="main-heading">
              <span>Yapay Zeka Destekli İşe Alım</span>
              <span className="first-word">Demo’nuzu Planlayın</span>
            </h1>

            <h4>Size nasıl yardımcı olabileceğimizi görün:</h4>

            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="../assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Ön eleme ve AI mülakatlarını otomatikleştirerek işe alım
                  süresini kısaltın
                </span>
              </li>

              <li className="bullet-item">
                <img
                  src="../assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Adayları başvurudan mülakata anında taşıyın (zamanlama
                  engelleri olmadan)
                </span>
              </li>

              <li className="bullet-item">
                <img
                  src="../assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Ek işe alım personeli eklemeden ayda 5–100+ pozisyon yönetin
                </span>
              </li>

              <li className="bullet-item">
                <img
                  src="../assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Günler değil, dakikalar içinde karar almaya hazır kısa
                  listeler elde edin
                </span>
              </li>

              <li className="bullet-item">
                <img
                  src="../assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  ATS/HRIS entegrasyonu ve otomatik takiplerle operasyonel yükü
                  ortadan kaldırın
                </span>
              </li>
            </ul>

            <div className="hero-trust-logos">
              <img src="../assets/demo_page_2/capterra.png" alt="Capterra" />
              <img
                src="../assets/demo_page_2/software-advice.png"
                alt="Software Advice"
              />
            </div>
          </div>

          {/* <!-- Demo Form Section --> */}
          <div className="hero-demo-form-container">
            <div className="form-fields-wrapper">
              <h4>Demo talep edin</h4>
              <p className="text-B1">
                SorsX’in işe alım sürecinize ve mevcut araçlarınıza nasıl uyum
                sağladığını görmek için ürün uzmanımızla bir demo planlayın.
              </p>

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
                      placeholder="Kurumsal email adresinizi giriniz"
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

      {/* slider */}
      <Slider />

      {/* <!-- cards section --> */}
      <section className="cards-section">
        <div className="bg-blur-circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="blur-circle circle-mobile-1"></div>
          <div className="blur-circle circle-mobile-2"></div>
          <div className="blur-circle circle-mobile-3"></div>
        </div>
        <div className="container grid-cards">
          {/* <!-- Card 1 --> */}
          <div className="card">
            <h5 className="card-heading">Neden demo?</h5>
            <p className="card-desc text-T1">
              Yapay zeka destekli işe alım, iş akışınıza uygun şekilde
              kurgulandığında en iyi sonucu verir. Rollerinize, hacminize ve
              hedeflerinize göre özelleştirilmiş bir demo sunarız; böylece genel
              sunumlar yerine net bir anlayışla ayrılırsınız.
            </p>
            <div className="card-main-img">
              <img
                src="../assets/demo_page_2/2x_hiring_img.png"
                alt="Neden demo"
              />
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="card">
            <h5 className="card-heading">Uçtan uca otomasyonu görün</h5>
            <p className="card-desc text-T1">
              SorsX’in iş ilanı oluşturma, adaylara ulaşma, ön eleme, AI video
              mülakatları ve kısa liste süreçlerini baştan sona nasıl
              yönettiğini izleyin; işe alım ekipleri karar almaya odaklansın.
            </p>
            <div className="card-main-img">
              <img
                src="../assets/demo_page_2/shortlist_img.png"
                alt="Uçtan uca otomasyonu görün"
              />
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="card">
            <h5 className="card-heading">Abartı değil, kaliteyi kanıtlayın</h5>
            <p className="card-desc text-T1">
              Yapılandırılmış AI mülakat yazılımının tutarlı değerlendirmeler
              nasıl oluşturduğunu, düşük sinyalli yanıtları nasıl işaretlediğini
              ve adaylar ile lokasyonlar arasında güvenli karşılaştırmaları
              nasıl desteklediğini gösteririz.
            </p>
            <div className="card-main-img">
              <img
                src="../assets/demo_page_2/quality_img.png"
                alt="Kaliteyi kanıtlayın"
              />
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="card">
            <h5 className="card-heading">
              Mevcut teknoloji altyapınıza uyum sağlar
            </h5>
            <p className="card-desc text-T1">
              SorsX, ATS/HRIS sistemlerinizle entegre çalışır; e-posta, SMS,
              WhatsApp ve LinkedIn üzerinden iletişimi destekler, böylece her
              şeye sıfırdan başlamak zorunda kalmazsınız.
            </p>
            <div className="card-main-img">
              <img
                src="../assets/demo_page_2/stack_img.png"
                alt="Mevcut teknoloji altyapınıza uyum sağlar"
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
              Dünya genelinde ekiplerin güvendiği işe alım platformu.
            </h3>
            <p className="text-T1">
              CHRO’ların ve yetenek kazanımı ekiplerinin, AI işe alım
              platformumuzu ve AI mülakat çözümlerimizi işe alımı dönüştürmek
              için nasıl kullandığını keşfedin.
            </p>
          </div>
          <div className="trust-logos">
            <img
              src="../assets/demo_page_2/capterra.png"
              className="capterra"
              alt="Capterra"
            />
            <img
              src="../assets/demo_page_2/software-advice.png"
              className="software"
              alt="Software Advice"
            />
          </div>
        </div>

        <div className="container testimonials-grid">
          {/* <!-- Testimonial 1 --> */}
          <div className="testimonial-item">
            <div className="testimonial-photo">
              <img
                src="../assets/demo_page_2/Violet-Herin.png"
                alt="Violet Herin"
                className="photo-desktop"
              />
              <img
                src="../assets/demo_page_2/Violet-Herin.png"
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
                <img src="../assets/demo_page_2/quote-icon.svg" alt="alıntı" />
              </div>
              <p className="text-T1">
                Ön eleme ve ilk mülakat süreçlerini hızlandırma konusunda
                gerçekten oyunun kurallarını değiştirdi. Bilinçli kararlar
                almamız için tam olarak ihtiyaç duyduğumuz verileri sunuyor.
              </p>
              <div className="testimonial-company">
                <img src="../assets/demo_page_2/proje.png" alt="Proje Logo" />
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div className="testimonial-item">
            <div className="testimonial-photo">
              <img
                src="../assets/demo_page_2/Sevda-Canbaz.png"
                alt="Sevda Canbaz"
                className="photo-desktop"
              />
              <img
                src="../assets/demo_page_2/Sevda-Canbaz.png"
                alt="Sevda Canbaz"
                className="photo-mobile"
              />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-info">
                  <h4 className="text-L1">Sevda Canbaz</h4>
                  <p className="text-L2">
                    İnsan ve Kültür Yöneticisi, Dalgakıran Kompresör
                  </p>
                </div>
                <img src="../assets/demo_page_2/quote-icon.svg" alt="alıntı" />
              </div>
              <p className="text-T1">
                SorsX AI işe alım yazılımı, ön eleme ve AI video mülakatlarını
                otomatikleştirerek standart değerlendirmeler ve hızlı şekilde
                karar almaya hazır kısa listeler sundu.
              </p>
              <div className="testimonial-company">
                <img
                  src="../assets/demo_page_2/Dalgakiran.png"
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

export default DemoPage2;

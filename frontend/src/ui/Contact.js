import "./Contact.css";

const Contact = () => (
  <div className="Contact">
    <div>
      <h4>Główny Urząd Statystyczny</h4>
      <p>00-925 Warszawa, Aleja Niepodległości 208</p>
      <p>Godziny pracy Urzędu:</p>
      <p>poniedziałek - piątek 8.15-16.15</p>
      <p>
        <b>REGON:</b> 000331501
      </p>
      <p>
        <b>NIP:</b> 5261040828
      </p>
      <h4>Kancelaria</h4>
      <p>tel.: +48 22 608 30 00</p>
    </div>
    <div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4888.9424560996995!2d21.006518!3d52.216656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xacc6d45c904f696d!2zR8WCw7N3bnkgVXJ6xIVkIFN0YXR5c3R5Y3pueQ!5e0!3m2!1spl!2sus!4v1619006402260!5m2!1spl!2sus"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      />
    </div>
    <div>
      <h4>Centralne Informatorium Statystyczne</h4>
      <p>Bezpośrednia obsługa interesantów (parter, blok A)</p>
      <p>poniedziałek-piątek 8.00 - 16.00</p>
    </div>
    <div>
      <h4>Wydział Współpracy z Mediami</h4>
      <p>tel.: (+48 22) 608 34 91, (+48 22) 608 38 04</p>
      <p>e-mail: <a href="mailto:obslugaprasowa@stat.gov.pl" className="Email">obslugaprasowa@stat.gov.pl</a></p>
    </div>
    <div>
      <h4>Infolinia Statystyczna: 22 279 99 99</h4>
      <p>Konsultanci są dostępni:</p>
      <h4>w dni robocze pon. - pt.: godz. 8.00 - 15.00</h4>
      <p>Automatyczny system informacji statystycznej jest dostępny:</p>
      <h4>24 godziny na dobę przez 7 dni w tygodniu</h4>
    </div>
    <div>
      <h4>Sekretariat Departamentu Edukacji i Komunikacji</h4>
      <p>tel.: (+48 22) 608 31 12</p>
      <p>e-mail: <a href="mailto:Sekretariat-DK@stat.gov.pl" className="Email">Sekretariat-DK@stat.gov.pl</a></p>
    </div>
  </div>
);

export default Contact;

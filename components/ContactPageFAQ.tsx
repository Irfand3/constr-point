'use client';

import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: 'Kako mogu zatražiti ponudu za moj projekat?',
    answer: 'Jednostavno popunite kontakt formu na ovoj stranici ili nas pozovite direktno. Potrebno nam je kratko opisati vaš projekat, lokaciju i željene rokove. Nakon toga, zakazat ćemo sastanak kako bismo detaljnije razgovarali o vašim potrebama i pripremili preciznu ponudu.',
  },
  {
    id: 2,
    question: 'Koliko traje proces dobijanja ponude?',
    answer: 'Obično pripremamo inicijalnu ponudu u roku od 3-5 radnih dana nakon prvog sastanka. Za veće i složenije projekte, proces može trajati do 2 sedmice, jer želimo osigurati da sve detalje uključimo u ponudu.',
  },
  {
    id: 3,
    question: 'Da li radite na projektima van Tuzle?',
    answer: 'Da, radimo na projektima širom Bosne i Hercegovine, kao i u regionu. Imamo iskustvo sa projektima u različitim gradovima i spremni smo putovati kako bismo osigurali kvalitetan nadzor i izvođenje.',
  },
  {
    id: 4,
    question: 'Koje usluge su uključene u vašu ponudu?',
    answer: 'Naše usluge uključuju kompletno projektno planiranje, organizaciju građenja, nadzor izvođača, upravljanje materijalom, koordinaciju svih učesnika, vođenje budžeta i rokova, kao i kontrolu kvaliteta. Nudimo fleksibilne pakete prema vašim potrebama.',
  },
  {
    id: 5,
    question: 'Kako osiguravate da projekat bude završen na vrijeme?',
    answer: 'Koristimo napredne tehnike projektnog menadžmenta, uključujući detaljne vremenske planove, redovno praćenje napretka i proaktivno rješavanje potencijalnih problema. Naš tim ima dugogodišnje iskustvo i izvrsnu stopu poštovanja rokova.',
  },
  {
    id: 6,
    question: 'Mogu li dobiti reference od vaših prethodnih klijenata?',
    answer: 'Naravno! Rado ćemo vam pružiti kontakte nekoliko naših zadovoljnih klijenata koji mogu podijeliti svoja iskustva. Također možete pogledati sekciju testimonijala na našoj početnoj stranici ili portfolio realizovanih projekata.',
  },
];

export default function ContactPageFAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-2xl mb-6">
              <FaQuestionCircle className="w-8 h-8 text-accent-600" />
            </div>
            <h2 className="section-title">Često postavljana pitanja</h2>
            <p className="section-subtitle">
              Odgovori na najčešća pitanja o našim uslugama i procesu rada
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 md:px-8 py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-primary-900 pr-4 flex-1">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-5 h-5 text-accent-500 flex-shrink-0 transform transition-transform duration-300 mt-1 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-center bg-gradient-to-br from-primary-900 to-primary-800 text-white rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold font-heading mb-4">
              Niste pronašli odgovor?
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Kontaktirajte nas direktno i rado ćemo odgovoriti na sva vaša pitanja
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+38733123456"
                className="btn-primary bg-accent-500 hover:bg-accent-600"
              >
                Pozovite nas
              </a>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary bg-white text-primary-900 border-white hover:bg-gray-100"
              >
                Pošaljite poruku
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


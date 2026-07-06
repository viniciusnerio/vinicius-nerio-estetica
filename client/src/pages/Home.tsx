/*
 * HOME PAGE — Vinícius Nério Estética Avançada
 * Design: "Atelier Noir Dorado" — Art Déco contemporâneo
 * Seções: Hero, Sobre, Serviços, Resultados, Depoimentos, Contato, Footer
 * Paleta: Verde Oliva #0D3D38 + Dourado #C9A84C + Off-White #F5F0E8
 * Tipografia: Cormorant Garamond (display) + Jost (body)
 */

import { useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Logo } from '@/components/Logo';
import minhafoto from '../Assets/images/sobremim.png';
import capa from '../Assets/images/capafundo.png';
import vinicapa from '../Assets/images/vinicapa.png'
import { openWhatsApp } from '@/lib/whatsapp';

// Asset URLs from generated images
const HERO_BG = capa;
const HERO_PHOTO = vinicapa;
const PEEL_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663678943510/6dYCSHwvqMvEiUJ7DJwmVW/treatment-facial-YmqYasK8M69JzeFKgNX7rj.webp';
const ABOUT_IMG = minhafoto;
const PRODUCTS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663678943510/6dYCSHwvqMvEiUJ7DJwmVW/products-bg-jTR5dSgYYz3BPQBQ7uzYFC.webp';
const TOX_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663678943510/6dYCSHwvqMvEiUJ7DJwmVW/procedure-botulinum-toxin-2wjqJDrpqz9S6hZNNKz8KH.webp';
const HARM_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663678943510/6dYCSHwvqMvEiUJ7DJwmVW/procedure-facial-harmonization-9EQPWEGAphKQ5Zg4hkQP4J.webp';
const MICRO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663678943510/6dYCSHwvqMvEiUJ7DJwmVW/procedure-microneedling-87xXDracKuRnaJhTPBVtk4.webp';
const FACIAL_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663678943510/6dYCSHwvqMvEiUJ7DJwmVW/procedure-skincare-planning-kzQrXDN7xcHokRMv2zLFGY.webp';
const BIO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663678943510/6dYCSHwvqMvEiUJ7DJwmVW/procedure-collagen-biostimulators-8VessBc7tnPj6a3ZokoAb8.webp';

const services = [
  {
    number: '01',
    title: 'Planejamento de Skincare',
    subtitle: 'Construção de Rotina e Consistência',
    description: 'Estruturação de uma rotina de cuidados personalizada, baseada na análise individual da pele e nos objetivos de longo prazo. O foco não é quantidade de produtos, mas consistência, estratégia e continuidade dos resultados obtidos em consultório.',
    duration: '90 min',
    img: FACIAL_IMG,
  },
  {
    number: '02',
    title: 'Toxina Botulínica',
    subtitle: 'Rejuvenescimento e Suavização de Rugas',
    description: 'Tratamento indicado para suavizar expressões marcadas e prevenir a formação de rugas dinâmicas. Mais do que reduzir sinais do tempo, sua aplicação é guiada por critério e planejamento, respeitando a naturalidade e a identidade de cada rosto. O objetivo não é mudar expressões, mas preservar a leveza da forma como o paciente se vê.',
    duration: '60 min',
    img: TOX_IMG,
  },
  {
    number: '03',
    title: 'Harmonização Facial',
    subtitle: 'Decisão Estética e Equilíbrio Facial',
    description: 'Processo de avaliação e planejamento facial que busca compreender proporções, expressões e harmonia individual. Cada indicação é feita com critério, priorizando o que realmente faz sentido para o rosto — e não a execução de procedimentos em si. O foco está na coerência estética, não no excesso.',
    duration: '90 min',
    img: HARM_IMG,
  },
  {
    number: '04',
    title: 'Microagulhamento',
    subtitle: 'Textura e Vitalidade da Pele',
    description: 'Tratamento que estimula a regeneração natural da pele por meio da indução de colágeno. Indicado para melhora de textura, cicatrizes e viço, sempre após avaliação criteriosa da real necessidade da pele. A proposta é evoluir a qualidade cutânea de forma progressiva, sem agressões desnecessárias.',
    duration: '60 min',
    img: MICRO_IMG,
  },
  {
    number: '05',
    title: 'Bioestimuladores de Colágeno',
    subtitle: 'Estrutura e Sustentação Facial',
    description: 'Melhoram a firmeza e sustentação da pele ao estimular a produção natural de colágeno ao longo do tempo. A indicação é sempre baseada em planejamento facial individualizado, respeitando o momento certo de intervir e evitando excessos.',
    duration: '90 min',
    img: BIO_IMG,
  },
  {
    number: '06',
    title: 'Peeling Químico',
    subtitle: 'Renovação e Reequilíbrio da Pele',
    description: 'Tratamento de renovação celular realizado com base em avaliação criteriosa da pele. Auxilia na melhora de manchas, textura irregular e sinais de envelhecimento, promovendo reequilíbrio progressivo da pele sem comprometer sua integridade ou naturalidade.',
    duration: '60 min',
    img: PEEL_IMG,
  },
];

const testimonials = [
  {
    name: 'Ana K.',
    role: 'Protocolo para rejuvenescimento facial',
    text: 'Nunca imaginei que cuidar da pele poderia fazer tanta diferença na minha autoestima. O Dr. Vinícius tem um olhar muito bom, o resultado ficou muito natural. As linhas suavizaram sem perder minha expressão.',
    rating: 5,
  },
  {
    name: 'Marcelo A.',
    role: 'Tratamento para melhora da textura e qualidade da pele',
    text: 'Uma sala aconchegante, e a maca é muito confortável! O atendimento é realmente personalizado! Minha pele mais ficou muito firme e com aspecto bem mais saudável. O resultado ficou incrível.',
    rating: 5,
  },
  {
    name: 'Carol P.',
    role: 'Harmonização e valorização dos contornos faciais',
    text: 'Era exatamente o que eu queria: um queixo mais definido, mas que ficasse discreto e que valorizasse meu rosto sem exagerar.',
    rating: 5,
  },
];

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const stats = [
  { value: '3+', label: 'Anos na estética' },
  { value: '1:1', label: 'Atendimentos Individualizados' },
  { value: '8+', label: 'Anos de formação' },
  { value: '400+', label: 'horas de especialização e cursos' },
];

function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div style={{ width: '30px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
      <div style={{ width: '6px', height: '6px', border: '1px solid #C9A84C', transform: 'rotate(45deg)' }} />
      <div style={{ width: '30px', height: '1px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '0.65rem',
        fontWeight: 400,
        letterSpacing: '0.4em',
        color: 'oklch(0.72 0.12 75)',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </p>
  );
}

export default function Home() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={revealRef}
      style={{
        background: 'oklch(0.22 0.06 175)',
        color: 'oklch(0.96 0.01 80)',
        minHeight: '100vh',
        fontFamily: 'Jost, sans-serif',
      }}
    >
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.35)',
          }}
        />
        {/* Foto da Hero */}
<img
  src={HERO_PHOTO}
  alt="Vinícius Nério"
  className="absolute bottom-0 right-[-60px] md:right-0 h-[95vh] w-auto scale-[1.5] md:scale-100 origin-bottom-right"
  style={{
    objectFit: 'contain',
    zIndex: 1,
  }}
/>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, oklch(0.18 0.06 175 / 80%) 0%, oklch(0.22 0.06 175 / 40%) 50%, oklch(0.18 0.06 175 / 70%) 100%)',
          }}
        />
        {/* Decorative vertical line */}
        <div
          className="absolute left-[10%] top-0 bottom-0 hidden lg:block"
          style={{ width: '1px', background: 'linear-gradient(180deg, transparent, oklch(0.72 0.12 75 / 20%), transparent)' }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl" style={{ paddingLeft: '0', paddingTop: '2rem' }}>
            {/* Section label */}
            <div className="reveal flex items-center gap-4 mb-8">
              <div style={{ width: '40px', height: '1px', background: 'oklch(0.72 0.12 75)' }} />
              <SectionLabel>Estética Avançada</SectionLabel>
            </div>

            {/* Main headline */}
            <h1
              className="reveal"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                color: 'oklch(0.96 0.01 80)',
                marginBottom: '0.5rem',
                transitionDelay: '0.1s',
              }}
            >
              Resultados
              <br />
              <em
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #9A7A2E, #C9A84C, #F0D060, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Naturais,
              </em>
              <br />
              Confiança Renovada
            </h1>

            <div className="reveal my-8" style={{ transitionDelay: '0.2s' }}>
              <GoldDivider />
            </div>

            {/* Subtitle */}
            <p
              className="reveal"
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'oklch(0.85 0.02 80)',
                maxWidth: '480px',
                transitionDelay: '0.3s',
              }}
            >
              Procedimentos estéticos personalizados, planejados para valorizar sua beleza com naturalidade, segurança e equilíbrio. Cada tratamento começa com uma avaliação cuidadosa, porque o melhor resultado é aquele que respeita quem você é.
            </p>

            {/* CTA Buttons */}
            <div className="reveal flex flex-wrap gap-4 mt-10" style={{ transitionDelay: '0.4s' }}>
              <button
                onClick={() => openWhatsApp()}
                className="px-8 py-4 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #F0D060, #C9A84C)',
                  color: 'oklch(0.18 0.06 175)',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px oklch(0.72 0.12 75 / 30%)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                Agendar Consulta
              </button>
              <button
                onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: 'oklch(0.96 0.01 80)',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  border: '1px solid oklch(0.96 0.01 80 / 30%)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.72 0.12 75 / 60%)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.72 0.12 75)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.96 0.01 80 / 30%)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.96 0.01 80)';
                }}
              >
                Ver Serviços
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal"
          style={{ transitionDelay: '0.6s' }}
        >
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'oklch(0.72 0.12 75 / 60%)', textTransform: 'uppercase' }}>
            Rolar a tela
          </p>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(180deg, oklch(0.72 0.12 75 / 60%), transparent)',
            }}
          />
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'oklch(0.20 0.06 175)',
          borderTop: '1px solid oklch(0.72 0.12 75 / 15%)',
          borderBottom: '1px solid oklch(0.72 0.12 75 / 15%)',
        }}
      >
        <div className="container py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #C9A84C, #F0D060)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'oklch(0.75 0.03 80)',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOBRE ────────────────────────────────────────────────── */}
      <section id="sobre" className="py-24 lg:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image column */}
            <div className="reveal relative order-2 lg:order-1" style={{ transitionDelay: '0.1s' }}>
              <div
                className="relative"
                style={{
                  paddingTop: '120%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={ABOUT_IMG}
                  alt="Vinícius Nério — Farmacêutico Esteta"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'brightness(0.9)' }}
                />
                {/* Gold frame overlay */}
                <div
                  className="absolute inset-4"
                  style={{ border: '1px solid oklch(0.72 0.12 75 / 25%)', pointerEvents: 'none' }}
                />
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -right-6 lg:-right-10 p-6"
                style={{
                  background: 'oklch(0.20 0.06 175)',
                  border: '1px solid oklch(0.72 0.12 75 / 30%)',
                  minWidth: '160px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #C9A84C, #F0D060)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                  }}
                >
                  3+
                </p>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'oklch(0.75 0.03 80)', textTransform: 'uppercase', marginTop: '4px' }}>
                  Anos de<br />Experiência
                </p>
              </div>
            </div>

            {/* Text column */}
            <div className="order-1 lg:order-2">
              <div className="reveal flex items-center gap-4 mb-6">
                <div style={{ width: '40px', height: '1px', background: 'oklch(0.72 0.12 75)' }} />
                <SectionLabel>Sobre Mim</SectionLabel>
              </div>

              <h2
                className="reveal"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: 'oklch(0.96 0.01 80)',
                  marginBottom: '1.5rem',
                  transitionDelay: '0.1s',
                }}
              >
                Dr. Vinícius Nério
                <br />
                <em
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: 'oklch(0.72 0.12 75)',
                  }}
                >
                  Farmacêutico Esteta
                </em>
              </h2>

              <div className="reveal my-6" style={{ transitionDelay: '0.2s' }}>
                <GoldDivider />
              </div>

              <p
                className="reveal"
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: 'oklch(0.82 0.02 80)',
                  marginBottom: '1.5rem',
                  transitionDelay: '0.3s',
                }}
              >
                Acredito que a estética vai muito além da realização de procedimentos. Meu papel é compreender suas expectativas, avaliar suas características individuais e indicar apenas o que realmente faz sentido para você.
              </p>

              <p
                className="reveal"
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: 'oklch(0.82 0.02 80)',
                  marginBottom: '2.5rem',
                  transitionDelay: '0.4s',
                }}
              >
                Como especialista em Estética, desenvolvo planos de tratamento personalizados, fundamentados em critérios técnicos, planejamento e respeito à individualidade de cada paciente.               
                
                Meu compromisso é entregar resultados naturais, seguros e elegantes, para que você continue reconhecendo a melhor versão de si mesma(o).
              </p>

              {/* Credentials */}
              <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '0.5s' }}>
                {[
                  'Pós Graduado em Estética Avançada',
                  'Naturalidade em Primeiro Lugar',
                  'Planejamento Personalizado',
                  'Segurança e Atualização Contínua',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        background: 'oklch(0.72 0.12 75)',
                        borderRadius: '50%',
                        marginTop: '0.45rem',
                        flexShrink: 0,
                      }}
                    />
                    <p style={{ fontSize: '0.8rem', fontWeight: 300, color: 'oklch(0.80 0.02 80)', lineHeight: 1.5 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVIÇOS ─────────────────────────────────────────────── */}
      <section
        id="servicos"
        className="py-24 lg:py-32 overflow-hidden"
        style={{ background: 'oklch(0.20 0.06 175)' }}
      >
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl mb-16 lg:mb-20">
            <div className="reveal flex items-center gap-4 mb-6">
              <div style={{ width: '40px', height: '1px', background: 'oklch(0.72 0.12 75)' }} />
              <SectionLabel>Nossos Serviços</SectionLabel>
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                color: 'oklch(0.96 0.01 80)',
                transitionDelay: '0.1s',
              }}
            >
              Protocolos de
              <br />
              <em style={{ fontStyle: 'italic', color: 'oklch(0.72 0.12 75)' }}>
                Alta Performance
              </em>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'oklch(0.72 0.12 75 / 10%)' }}>
            {services.map((service, i) => (
              <div
                key={service.number}
                className="reveal group relative overflow-hidden"
                style={{
                  background: 'oklch(0.22 0.06 175)',
                  padding: '2rem',
                  transitionDelay: `${i * 0.08}s`,
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.24 0.06 175)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.22 0.06 175)';
                }}
              >
                {/* Number */}
                <p
                  className="section-number"
                  style={{
                    top: '-20px',
                    right: '-10px',
                    fontSize: '5rem',
                    color: 'oklch(0.72 0.12 75 / 6%)',
                  }}
                >
                  {service.number}
                </p>

                {/* Image thumbnail */}
                <div
                  className="relative overflow-hidden mb-5"
                  style={{ height: '180px' }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'brightness(0.7) saturate(0.9)' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 40%, oklch(0.22 0.06 175 / 80%) 100%)' }}
                  />
                  {/* Duration badge */}
                  <div
                    className="absolute top-3 right-3 px-3 py-1"
                    style={{
                      background: 'oklch(0.20 0.06 175 / 90%)',
                      border: '1px solid oklch(0.72 0.12 75 / 40%)',
                    }}
                  >
                    <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'oklch(0.72 0.12 75)', textTransform: 'uppercase' }}>
                      {service.duration}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.3em',
                    color: 'oklch(0.72 0.12 75)',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  {service.subtitle}
                </p>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'oklch(0.96 0.01 80)',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'oklch(0.75 0.03 80)',
                  }}
                >
                  {service.description}
                </p>

                {/* Gold bottom border on hover */}
                <div
                  className="absolute bottom-0 left-0 h-px transition-all duration-500"
                  style={{
                    background: 'linear-gradient(90deg, #C9A84C, #F0D060)',
                    width: '0',
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.parentElement;
                    if (!parent) return;
                    parent.addEventListener('mouseenter', () => { el.style.width = '100%'; });
                    parent.addEventListener('mouseleave', () => { el.style.width = '0'; });
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal text-center mt-14" style={{ transitionDelay: '0.3s' }}>
            <button
              onClick={() => openWhatsApp()}
              className="px-10 py-4 transition-all duration-300"
              style={{
                border: '1px solid oklch(0.72 0.12 75 / 50%)',
                color: 'oklch(0.72 0.12 75)',
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.72 0.12 75 / 10%)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.72 0.12 75)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.72 0.12 75 / 50%)';
              }}
            >
              Agendar Tratamento
            </button>
          </div>
        </div>
      </section>

      {/* ─── RESULTADOS / PRODUTOS ─────────────────────────────────── */}
      <section
        id="resultados"
        className="relative py-24 lg:py-32 overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PRODUCTS_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.25)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(0.18 0.06 175 / 70%)' }}
        />

        <div className="container relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="reveal flex justify-center mb-6">
              <GoldDivider />
            </div>
            <SectionLabel>Resultados & Diferenciais</SectionLabel>
            <h2
              className="reveal mt-4"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                color: 'oklch(0.96 0.01 80)',
                transitionDelay: '0.1s',
              }}
            >
              A Técnica a Serviço
              <br />
              <em style={{ fontStyle: 'italic', color: 'oklch(0.72 0.12 75)' }}>
                da Sua Pele
              </em>
            </h2>
            <p
              className="reveal mt-6"
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'oklch(0.82 0.02 80)',
                transitionDelay: '0.2s',
              }}
            >
              Cada protocolo é construído com base em avaliação criteriosa e planejamento individual. O foco não está na quantidade de recursos utilizados, mas na precisão da indicação e na coerência de cada decisão estética.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: '◈',
                title: 'Avaliação e Critério Clínico',
                desc: 'Cada escolha é baseada em análise individual da pele e das proporções faciais, garantindo que cada tratamento tenha uma justificativa clara e real necessidade.',
              },
              {
                icon: '◇',
                title: 'Ativos de Alta Performance',
                desc: 'Utilização de ativos selecionados pela sua eficácia, segurança e respaldo científico, sempre adequados ao objetivo de cada protocolo e ao momento da pele.',
              },
              {
                icon: '◆',
                title: 'Protocolos Personalizados',
                desc: 'Cada plano de tratamento é construído de forma individual, respeitando as características da pele, o estilo de vida e os objetivos estéticos de cada paciente',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="reveal text-center p-8"
                style={{
                  background: 'oklch(0.22 0.06 175 / 80%)',
                  border: '1px solid oklch(0.72 0.12 75 / 20%)',
                  backdropFilter: 'blur(10px)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <p
                  style={{
                    fontSize: '1.8rem',
                    color: 'oklch(0.72 0.12 75)',
                    marginBottom: '1rem',
                  }}
                >
                  {item.icon}
                </p>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: 'oklch(0.96 0.01 80)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'oklch(0.75 0.03 80)',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ──────────────────────────────────────────── */}
      <section
        id="depoimentos"
        className="py-24 lg:py-32 overflow-hidden"
        style={{ background: 'oklch(0.22 0.06 175)' }}
      >
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="reveal flex items-center gap-4 mb-6">
              <div style={{ width: '40px', height: '1px', background: 'oklch(0.72 0.12 75)' }} />
              <SectionLabel>Depoimentos</SectionLabel>
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                color: 'oklch(0.96 0.01 80)',
                transitionDelay: '0.1s',
              }}
            >
              O Que Dizem
              <br />
              <em style={{ fontStyle: 'italic', color: 'oklch(0.72 0.12 75)' }}>
                Nossos Clientes
              </em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="reveal p-8"
                style={{
                  background: 'oklch(0.20 0.06 175)',
                  border: '1px solid oklch(0.72 0.12 75 / 15%)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} style={{ color: 'oklch(0.72 0.12 75)', fontSize: '0.75rem' }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: 'oklch(0.88 0.02 80)',
                    marginBottom: '1.5rem',
                  }}
                >
                  "{t.text}"
                </p>

                {/* Divider */}
                <div style={{ width: '40px', height: '1px', background: 'oklch(0.72 0.12 75 / 50%)', marginBottom: '1rem' }} />

                {/* Author */}
                <p
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    color: 'oklch(0.96 0.01 80)',
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    color: 'oklch(0.72 0.12 75 / 70%)',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                  }}
                >
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTATO ─────────────────────────────────────────────── */}
      <section
        id="contato"
        className="py-24 lg:py-32 overflow-hidden"
        style={{ background: 'oklch(0.20 0.06 175)' }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <div className="reveal flex items-center gap-4 mb-6">
                <div style={{ width: '40px', height: '1px', background: 'oklch(0.72 0.12 75)' }} />
                <SectionLabel>Contato</SectionLabel>
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: 'oklch(0.96 0.01 80)',
                  marginBottom: '1.5rem',
                  transitionDelay: '0.1s',
                }}
              >
                Agende Sua
                <br />
                <em style={{ fontStyle: 'italic', color: 'oklch(0.72 0.12 75)' }}>
                  Consulta
                </em>
              </h2>
              <div className="reveal my-6" style={{ transitionDelay: '0.2s' }}>
                <GoldDivider />
              </div>
              <p
                className="reveal"
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: 'oklch(0.82 0.02 80)',
                  marginBottom: '2.5rem',
                  transitionDelay: '0.3s',
                }}
              >
                Entre em contato para agendar sua avaliação. Juntos definiremos o melhor caminho para o seu resultado.
              </p>

              {/* Contact info */}
              <div className="reveal space-y-5" style={{ transitionDelay: '0.4s' }}>
                {[
                  { label: 'WhatsApp', value: '(35) 99932-5695', icon: '◉' },
                  { label: 'Instagram', value: '@drviniciusnerio', icon: '◎' },
                  { label: 'Localização', value: 'R. Anália Sales de Oliveira, 155 - Sala 03 - Esplanada, Pouso Alegre - MG', icon: '◈' },
                  { label: 'Horário', value: 'Seg–Sáb, sob agendamento', icon: '◇' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span style={{ color: 'oklch(0.72 0.12 75)', fontSize: '1rem', marginTop: '2px' }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'oklch(0.72 0.12 75 / 70%)', textTransform: 'uppercase', marginBottom: '2px' }}>
                        {item.label}
                      </p>
                      <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', fontWeight: 300, color: 'oklch(0.90 0.02 80)' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA Button */}
            <div
              className="reveal flex flex-col items-center justify-center p-8 lg:p-10"
              style={{
                background: 'oklch(0.22 0.06 175)',
                border: '1px solid oklch(0.72 0.12 75 / 20%)',
                transitionDelay: '0.2s',
                minHeight: '300px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'oklch(0.96 0.01 80)',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                }}
              >
                Solicitar Agendamento
              </h3>

              <p
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'oklch(0.72 0.12 75 / 80%)',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                }}
              >
                Clique no botão abaixo para entrar em contacto conosco via WhatsApp e agendar sua avaliação.
              </p>

              <button
                onClick={() => openWhatsApp()}
                className="px-12 py-4 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #F0D060, #C9A84C)',
                  color: 'oklch(0.18 0.06 175)',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = '0.9';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px oklch(0.72 0.12 75 / 30%)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = '1';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                Solicitar Agendamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer
        style={{
          background: 'oklch(0.18 0.06 175)',
          borderTop: '1px solid oklch(0.72 0.12 75 / 15%)',
        }}
      >
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <Logo variant="horizontal" size={36} />
            </div>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'oklch(0.70 0.03 80)',
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.72 0.12 75)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.70 0.03 80)'; }}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { label: 'Instagram', url: 'https://instagram.com/drviniciusnerio' },
                { label: 'WhatsApp', url: 'https://wa.me/5535999325695?text=Olá, gostaria de agendar uma avaliação.' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'oklch(0.70 0.03 80)',
                    textTransform: 'uppercase',
                    background: 'none',
                    border: '1px solid oklch(0.72 0.12 75 / 20%)',
                    padding: '0.5rem 1rem',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.72 0.12 75)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.72 0.12 75 / 50%)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.70 0.03 80)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.72 0.12 75 / 20%)';
                  }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: '1px solid oklch(0.72 0.12 75 / 10%)' }}
          >
            <p style={{ fontSize: '0.7rem', fontWeight: 300, color: 'oklch(0.55 0.02 80)', letterSpacing: '0.1em' }}>
              © 2026 Vinícius Nério Estética Avançada. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <div style={{ width: '4px', height: '4px', background: 'oklch(0.72 0.12 75)', borderRadius: '50%' }} />
              <p style={{ fontSize: '0.7rem', fontWeight: 300, color: 'oklch(0.55 0.02 80)', letterSpacing: '0.1em' }}>
                Estética com Excelência
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

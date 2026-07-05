/*
 * NAVBAR — Vinícius Nério Estética Avançada
 * Design: Navegação lateral esquerda (desktop) + hamburger (mobile)
 * Estilo: Atelier Noir Dorado — fundo verde escuro, links dourados
 */

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { openWhatsApp } from '@/lib/whatsapp';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'oklch(0.22 0.06 175 / 95%)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(0.72 0.12 75 / 15%)' : 'none',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-3 group"
              aria-label="Ir para o início"
            >
              <Logo variant="mark" size={44} />
              <div className="hidden sm:block">
                <p
                  className="text-gold-gradient font-serif leading-tight"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                  }}
                >
                  VINÍCIUS NÉRIO
                </p>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.6rem',
                    fontWeight: 400,
                    letterSpacing: '0.35em',
                    color: 'oklch(0.72 0.12 75 / 70%)',
                  }}
                >
                  ESTÉTICA AVANÇADA
                </p>
              </div>
            </button>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="gold-border-draw relative pb-1 transition-all duration-300"
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      letterSpacing: '0.2em',
                      color: activeSection === href.replace('#', '')
                        ? 'oklch(0.72 0.12 75)'
                        : 'oklch(0.85 0.02 80)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => openWhatsApp()}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: '1px solid oklch(0.72 0.12 75 / 60%)',
                color: 'oklch(0.72 0.12 75)',
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.7rem',
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
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.72 0.12 75 / 60%)';
              }}
            >
              Agendar
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span
                className="block h-px w-6 transition-all duration-300"
                style={{
                  background: 'oklch(0.72 0.12 75)',
                  transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                }}
              />
              <span
                className="block h-px w-4 transition-all duration-300"
                style={{
                  background: 'oklch(0.72 0.12 75)',
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'translateX(-4px)' : 'none',
                }}
              />
              <span
                className="block h-px w-6 transition-all duration-300"
                style={{
                  background: 'oklch(0.72 0.12 75)',
                  transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-500"
        style={{
          background: 'oklch(0.20 0.06 175 / 98%)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Logo variant="full" size={80} />
          <div className="gold-divider my-2" />
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map(({ label, href }, i) => (
              <li
                key={href}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`,
                }}
              >
                <button
                  onClick={() => handleNavClick(href)}
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.8rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: 'oklch(0.96 0.01 80)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.72 0.12 75)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.96 0.01 80)';
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => openWhatsApp()}
            className="mt-4 px-10 py-3"
            style={{
              border: '1px solid oklch(0.72 0.12 75)',
              color: 'oklch(0.72 0.12 75)',
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </>
  );
}

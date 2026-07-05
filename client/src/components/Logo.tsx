/*
 * LOGO COMPONENT — Vinícius Nério Estética Avançada
 * Design: Logo PNG oficial em variantes
 * Variantes: full (com texto), mark (só monograma), horizontal
 */

interface LogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  size?: number;
  className?: string;
}
import logo from '../Assets/images/monograma.png';

const LOGO_URL = logo;

export function Logo({ variant = 'full', size = 80, className = '' }: LogoProps ) {
  if (variant === 'mark') {
    return (
      <img
        src={LOGO_URL}
        alt="VN Logo"
        width={size}
        height={size}
        style={{
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 8px rgba(201, 168, 76, 0.15))',
        }}
        className={className}
      />
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className="flex items-center gap-3" style={{ height: size * 0.7 }}>
        <img
          src={LOGO_URL}
          alt="VN Logo"
          width={size * 0.8}
          height={size * 0.8}
          style={{
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 8px rgba(201, 168, 76, 0.15))',
          }}
        />
        <div>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'oklch(0.72 0.12 75)',
              margin: 0,
              lineHeight: 1.1,
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
              margin: 0,
              marginTop: '2px',
            }}
          >
            ESTÉTICA AVANÇADA
          </p>
        </div>
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className="flex flex-col items-center gap-3" style={{ width: size }}>
      <img
        src={LOGO_URL}
        alt="VN Logo"
        width={size}
        height={size}
        style={{
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 12px rgba(201, 168, 76, 0.2))',
        }}
      />
      <div className="text-center">
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'oklch(0.72 0.12 75)',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          VINÍCIUS NÉRIO
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.55rem',
            fontWeight: 400,
            letterSpacing: '0.35em',
            color: 'oklch(0.72 0.12 75 / 70%)',
            margin: 0,
            marginTop: '4px',
          }}
        >
          ESTÉTICA AVANÇADA
        </p>
      </div>
    </div>
  );
}
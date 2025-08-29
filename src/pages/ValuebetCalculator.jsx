import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp } from 'lucide-react'

const ValuebetCalculator = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #010440 0%, #0F1B3C 50%, #1A2B4C 100%)',
      color: '#ffffff',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link 
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: '#FF6B35',
            textDecoration: 'none',
            marginBottom: '30px',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        <div style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <TrendingUp size={80} color="#FF6B35" style={{ marginBottom: '20px' }} />
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Calculadora de Valuebets
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#B8C5D6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Identifica y calcula apuestas de valor donde las cuotas ofrecidas son superiores a la probabilidad real del evento.
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          border: '1px solid rgba(255, 107, 53, 0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '20px',
            color: '#FF6B35'
          }}>
            Próximamente
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#B8C5D6',
            lineHeight: '1.6'
          }}>
            Estamos desarrollando una calculadora inteligente de valuebets que incluirá:
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '30px 0',
            textAlign: 'left',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <li style={{ padding: '10px 0', fontSize: '1rem', color: '#B8C5D6' }}>
              ✅ Análisis de probabilidades reales vs cuotas ofrecidas
            </li>
            <li style={{ padding: '10px 0', fontSize: '1rem', color: '#B8C5D6' }}>
              ✅ Cálculo automático del valor esperado
            </li>
            <li style={{ padding: '10px 0', fontSize: '1rem', color: '#B8C5D6' }}>
              ✅ Gestión de bankroll optimizada
            </li>
            <li style={{ padding: '10px 0', fontSize: '1rem', color: '#B8C5D6' }}>
              ✅ Historial de rendimiento detallado
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ValuebetCalculator

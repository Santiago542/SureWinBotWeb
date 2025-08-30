import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react'

const PaymentFailed = () => {
  useEffect(() => {
    // You can add analytics tracking here
    console.log('Payment failed page loaded')
  }, [])

  return (
    <div className="animated-gradient" style={{ 
      minHeight: '100vh',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', maxWidth: '600px' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '30px' }}
        >
          <XCircle size={80} color="#FF6B35" />
        </motion.div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginBottom: '20px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Pago Fallido
        </h1>

        <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '20px' }}>
            No pudimos procesar tu pago. No te preocupes, no se ha realizado ningún cargo.
          </p>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
            Razones comunes para fallos de pago:
          </p>
          <ul style={{ 
            textAlign: 'left', 
            paddingLeft: '20px', 
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.6,
            marginBottom: '20px'
          }}>
            <li>Fondos insuficientes</li>
            <li>Detalles de tarjeta incorrectos</li>
            <li>Restricciones de seguridad bancaria</li>
            <li>Tarjeta vencida o bloqueada</li>
          </ul>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          marginBottom: '30px' 
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.2)',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                gap: '8px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </Link>
          </motion.div>

          <motion.a
            href="https://t.me/SureWinSportsBot"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              gap: '8px'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw size={20} />
            Intentar de Nuevo
          </motion.a>
        </div>

        <div style={{ marginTop: '40px' }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
            ¿Necesitas ayuda? Contacta a nuestro equipo de soporte:
          </p>
          <a 
            href="https://t.me/SureWinSportsBot" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#ffffff', 
              textDecoration: 'none', 
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            @SureWinBot
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentFailed

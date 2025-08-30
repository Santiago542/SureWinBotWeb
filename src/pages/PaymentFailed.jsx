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
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
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
          <motion.a
            href="https://t.me/SureWinSportsBot"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
              color: '#ffffff',
              padding: '15px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              gap: '10px'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw size={20} />
            Intentar de Nuevo
          </motion.a>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '1rem',
              gap: '5px'
            }}
          >
          ← Volver al Inicio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass"
          style={{
            textAlign: 'center',
            padding: '30px 20px',
            marginTop: '40px',
            maxWidth: '500px',
            margin: '40px auto 0 auto',
            border: '1px solid rgba(255, 107, 53, 0.2)'
          }}
        >
          <h3 style={{ 
            color: '#FF6B35', 
            fontSize: '1.3rem', 
            marginBottom: '15px',
            fontWeight: '600'
          }}>
            ¿Necesitas ayuda?
          </h3>
          <p style={{ 
            color: 'rgba(255,255,255,0.8)', 
            marginBottom: '25px',
            lineHeight: 1.6,
            fontSize: '0.95rem'
          }}>
            Nuestro equipo está aquí para ayudarte. Contáctanos directamente para resolver cualquier problema con el pago.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            justifyContent: 'center', 
            flexWrap: 'wrap'
          }}>
            <motion.a
              href="https://t.me/SureWinSportsBot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                fontSize: '0.95rem',
                padding: '12px 20px'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contactar por Telegram
            </motion.a>
            <motion.a
              href="mailto:support@surewinbot.com"
              className="btn-secondary"
              style={{
                fontSize: '0.95rem',
                padding: '12px 20px'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Email
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PaymentFailed

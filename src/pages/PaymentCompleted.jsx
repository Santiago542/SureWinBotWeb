import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Bot, ArrowRight } from 'lucide-react'

const PaymentCompleted = () => {
  useEffect(() => {
    // You can add analytics tracking here
    console.log('Payment completed page loaded')
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
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          style={{ marginBottom: '30px' }}
        >
          <CheckCircle size={80} color="#FF6B35" />
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
          ¡Pago Exitoso!
        </h1>

        <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '20px' }}>
            🎉 ¡Bienvenido a SureWinBot Premium!
          </p>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', marginBottom: '20px' }}>
            Tu suscripción está ahora activa. Puedes cerrar esta ventana y comenzar a usar SureWinBot de forma ilimitada.
          </p>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '20px', 
            borderRadius: '12px',
            marginTop: '20px'
          }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#FF6B35' }}>
              Próximos Pasos:
            </h3>
            <ul style={{ 
              textAlign: 'left', 
              paddingLeft: '20px', 
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.6
            }}>
              <li>Abre Telegram y busca @SureWinBot</li>
              <li>Inicia el bot, configura tus casas de apuestas y deportes</li>
              <li>Establece tus filtros avanzados y alertas en tiempo real</li>
              <li>Comienza a aprovechar las oportunidades de arbitraje</li>
            </ul>
          </div>
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
            <Bot size={20} />
            Comenzar a Usar SureWinBot
            <ArrowRight size={20} />
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
          ← Volver a Inicio
          </Link>
        </motion.div>        <div style={{ marginTop: '40px' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            Recibirás un email de confirmación en breve. Para cualquier pregunta, contáctanos en 
            <a 
              href="https://t.me/SureWinSportsBot" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#FF6B35', textDecoration: 'none', marginLeft: '5px' }}
            >
              @SureWinBot
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentCompleted

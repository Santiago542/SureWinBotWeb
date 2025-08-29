import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const TermsOfService = () => {
  return (
    <div className="animated-gradient" style={{ 
      minHeight: '100vh',
      color: '#ffffff',
      padding: '40px 20px'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ marginBottom: '30px' }}>
            <motion.a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                marginBottom: '20px'
              }}
              whileHover={{ scale: 1.05 }}
            >
              <ArrowLeft size={20} style={{ marginRight: '8px' }} />
              Volver al Inicio
            </motion.a>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px' }}>
              Términos de Servicio
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Descripción del Servicio
            </h2>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              SureWinBot es un bot de Telegram que proporciona oportunidades de arbitraje de apuestas en tiempo real. 
              Nuestro servicio identifica situaciones de arbitraje matemático en múltiples plataformas de apuestas 
              donde los usuarios pueden obtener ganancias potenciales independientemente del resultado.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Responsabilidades del Usuario
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px' }}>
              Al usar SureWinBot, aceptas:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, textAlign: 'left' }}>
              <li>Usar el servicio de manera responsable y de acuerdo con las leyes locales</li>
              <li>Verificar todas las oportunidades de apuesta de forma independiente</li>
              <li>Entender que las apuestas implican riesgo financiero</li>
              <li>No compartir el acceso a tu suscripción con otros</li>
              <li>Cumplir con los términos de servicio de las plataformas de apuestas que uses</li>
            </ul>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Exenciones de Responsabilidad
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px' }}>
              <strong>Importante:</strong> Aunque nos esforzamos por la precisión, SureWinBot:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, textAlign: 'left' }}>
              <li>No garantiza ganancias o retornos específicos</li>
              <li>Proporciona solo información - tú tomas todas las decisiones de apuesta</li>
              <li>No se puede responsabilizar por pérdidas u oportunidades perdidas</li>
              <li>Puede experimentar problemas técnicos o tiempo de inactividad</li>
              <li>La información puede volverse obsoleta debido a cambios rápidos del mercado</li>
            </ul>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Términos de Pago
            </h2>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              Las tarifas de suscripción se cobran mensual o anualmente según se seleccione. 
              Los pagos se procesan de forma segura a través de Stripe. Los reembolsos pueden estar disponibles 
              dentro de los 7 días de la suscripción inicial para nuevos usuarios que no hayan usado el servicio.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Limitación de Responsabilidad
            </h2>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              SureWin y sus operadores no serán responsables de ningún daño directo, indirecto, 
              incidental o consecuencial que surja del uso de este servicio. 
              Tu responsabilidad máxima se limita al monto pagado por la suscripción.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Información de Contacto
            </h2>
            <p style={{ lineHeight: 1.6 }}>
              Para preguntas sobre estos términos, por favor contáctanos:
            </p>
            <p style={{ marginTop: '10px' }}>
              <strong>Email:</strong> legal@surewin.bot<br />
              <strong>Telegram:</strong> @SureWinBot
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService

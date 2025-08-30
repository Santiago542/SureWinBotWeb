import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicy = () => {
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
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  marginBottom: '20px'
                }}
              >
                <ArrowLeft size={20} style={{ marginRight: '8px' }} />
                Volver al Inicio
              </Link>
            </motion.div>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '10px',
              background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Política de Privacidad
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Información que Recopilamos
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px' }}>
              Cuando usas SureWinBot, podemos recopilar la siguiente información:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, textAlign: 'left' }}>
              <li>Nombre de usuario e ID de usuario de Telegram</li>
              <li>ID del chat de Telegram</li>
              <li>Preferencias de casas de apuestas, deportes, filtros y alertas</li>
              <li>Estado de tu suscripción</li>
            </ul>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px', border: '2px solid #FF6B35' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Información que NO Recopilamos
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', fontWeight: '600' }}>
              SureWinBot está diseñado para proteger tu privacidad. <strong>Nunca recopilamos ni te pediremos</strong>:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)', textAlign: 'left' }}>
              <li>Direcciones de correo electrónico personales</li>
              <li>Números de teléfono móvil</li>
              <li>Información de tarjetas de crédito o débito</li>
              <li>Direcciones físicas o domicilios</li>
              <li>Documentos de identidad (DNI, pasaporte, etc.)</li>
              <li>Información bancaria personal</li>
            </ul>
            <p style={{ lineHeight: 1.6, marginTop: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              Toda la comunicación se realiza exclusivamente a través de Telegram usando solo tu nombre o ID de usuario.
            </p>
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: 'rgba(2, 6, 111, 0.1)', 
              borderRadius: '8px',
              border: '1px solid rgba(2, 6, 111, 0.3)'
            }}>
              <p style={{ lineHeight: 1.6, fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                <strong>Información de Pagos:</strong> Los datos de pago (tarjetas, información bancaria) son procesados directamente por proveedores de pago seguros como <strong>Stripe</strong>. SureWinBot nunca tiene acceso, almacena ni maneja esta información sensible.
              </p>
            </div>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Cómo Usamos tu Información
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px' }}>
              Usamos tu información para:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, textAlign: 'left' }}>
              <li>Proporcionar y mejorar nuestros servicios de bot de arbitraje</li>
              <li>Enviarte oportunidades de arbitraje y notificaciones</li>
              <li>Proporcionar atención al cliente</li>
            </ul>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Protección de Datos
            </h2>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              Implementamos medidas de seguridad apropiadas para proteger tu información personal. 
              Tus datos están encriptados y almacenados de forma segura. Nunca compartimos tu información personal 
              con terceros excepto cuando sea requerido por ley o para procesar pagos a través de nuestros 
              procesadores de pago seguros.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Tus Derechos
            </h2>
            <p style={{ lineHeight: 1.6, textAlign: 'justify'}}>
              Tienes derecho a acceder, actualizar o eliminar tu información personal. 
              Para ejercer estos derechos o si tienes alguna pregunta sobre nuestras prácticas de privacidad, 
              por favor contáctanos a través de nuestro bot de Telegram o canales de soporte.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              Contáctanos
            </h2>
            <p style={{ lineHeight: 1.6 }}>
              Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos en:
            </p>
            <p style={{ marginTop: '10px' }}>
              <strong>Email:</strong> privacy@surewin.bot<br />
              <strong>Telegram:</strong> @SureWinBot
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

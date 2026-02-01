import React from 'react'
import { Link } from 'react-router-dom'
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
              📜 Términos y Condiciones de Uso
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontWeight: '600' }}>
              SureWinBot
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
              Última actualización: 22 de noviembre de 2025
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              1. Identificación del servicio
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              SureWinBot (en adelante, "el Bot") es un bot de Telegram que proporciona información y datos sobre apuestas deportivas en tiempo real, incluyendo apuestas seguras (surebets), de valor (valuebets), gratuitas (freebets) y, para usuarios con suscripción Ultimate, apuestas al medio (middlebets), alertas personalizadas y filtros avanzados.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El Bot no pertenece a ninguna casa de apuestas ni actúa como intermediario en la realización de apuestas.
            </p>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              Por el momento, el servicio es gestionado de forma privada y no está constituido como empresa oficial.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              2. Aceptación de los Términos
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El uso del Bot implica la aceptación plena y sin reservas de los presentes Términos y Condiciones de Uso y de la Política de Privacidad.
            </p>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              Si el usuario no está de acuerdo con alguno de los términos aquí descritos, deberá abstenerse de utilizar el Bot.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              3. Requisitos de uso
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El Bot está dirigido exclusivamente a personas mayores de 18 años.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El usuario declara ser mayor de edad y cumplir con las leyes de su país en materia de juegos y apuestas.
            </p>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              El uso del Bot fuera de estos términos o con fines ilícitos está prohibido.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              4. Descripción del servicio
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              SureWinBot proporciona exclusivamente información estadística y de mercado en tiempo real relativa a eventos deportivos, recopilada de diversas fuentes públicas y privadas disponibles en Internet.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              <strong>El Bot actúa únicamente como herramienta informativa.</strong> No proporciona recomendaciones, consejos ni indicaciones sobre qué apuestas realizar o evitar. La decisión de apostar y el importe a apostar son responsabilidad exclusiva del usuario.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El servicio se ofrece en dos modalidades:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              <li><strong>Versión gratuita:</strong> acceso limitado mediante créditos obtenidos por invitaciones a otros usuarios.</li>
              <li><strong>Versión de pago:</strong> acceso a funcionalidades avanzadas, incluyendo surebets, valuebets, freebets, middlebets y activación de alertas y filtros personalizados.</li>
            </ul>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              Los datos mostrados pueden estar sujetos a ligeros retrasos o variaciones de cuotas, debido a la latencia o cambios de mercado en las casas de apuestas.
            </p>
            <p style={{ lineHeight: 1.6, textAlign: 'justify', fontWeight: '600', color: '#FF6B35' }}>
              ⚠️ Advertencia: El usuario no deberá apostar nunca más dinero del que esté dispuesto a perder. Las apuestas conllevan riesgos financieros.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              5. Condiciones económicas
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              Los pagos de las suscripciones se gestionan de forma externa y segura a través de PayPal o Stripe.
              El Bot no almacena ni tiene acceso a datos financieros o bancarios de los usuarios.
            </p>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#FF6B35' }}>
              Política de devoluciones
            </h3>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              El usuario tiene derecho a solicitar un reembolso en las primeras 24h tras la compra.
              Además, se realizará la devolución proporcional del importe en caso de cese de los servicios (por ejemplo, si le restan 15 días de una suscripción de 30, el usuario recibirá un reembolso del 50%).
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              6. Uso permitido y propiedad intelectual
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El contenido, datos y alertas generados por el Bot son propiedad de su creador.
              Se prohíbe la reventa o explotación comercial de la información proporcionada por el Bot.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              Se permite únicamente la compartición ocasional y personal de capturas individuales del Bot, siempre que se cite la fuente de forma visible (por ejemplo, "Fuente: SureWinBot"). Queda prohibida la difusión sistemática, masiva o automatizada de las alertas o información del servicio.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              Cualquier uso fraudulento, automatizado o que interfiera en el funcionamiento del servicio podrá suponer el baneo permanente del usuario, sin derecho a reembolso.
            </p>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', marginTop: '20px', color: '#FF6B35' }}>
              Prohibiciones específicas
            </h3>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              Queda estrictamente prohibido:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              <li><strong>Uso de bots de reenvío automático:</strong> El empleo de cualquier bot, script o herramienta automatizada para reenviar las alertas o información del Bot a otros usuarios o canales está terminantemente prohibido.</li>
              <li><strong>Compartir suscripción entre múltiples usuarios:</strong> Cada suscripción es personal e intransferible. No está permitido compartir el acceso, las alertas o los beneficios de una suscripción con terceros.</li>
            </ul>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              SureWinBot cuenta con sistemas de detección de estos comportamientos. El incumplimiento de estas prohibiciones resultará en el bloqueo inmediato y permanente de la cuenta, sin derecho a reembolso ni apelación.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              7. Limitación de responsabilidad
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              <strong>El Bot actúa exclusivamente como fuente informativa de datos estadísticos del mercado.</strong> No es un asesor financiero ni de apuestas. No proporciona consejos, recomendaciones ni instrucciones sobre qué apostar o evitar.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              Aunque SureWinBot se esfuerza por ofrecer información precisa y actualizada, <strong>el servicio puede contener errores, imprecisiones o datos desactualizados</strong>. No se garantiza la exactitud, disponibilidad, vigencia o integridad de las cuotas, mercados o cualquier otro dato mostrado.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El usuario es el único responsable de:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              <li>Verificar siempre las cuotas antes de realizar una apuesta.</li>
              <li>Verificar que las casas de apuestas aplican las mismas reglas.</li>
              <li>Comprobar la exactitud de toda información antes de actuar sobre ella.</li>
              <li>Decidir de forma independiente si realiza o no una apuesta.</li>
              <li>Gestionar su capital y no apostar más dinero del que esté dispuesto a perder.</li>
              <li>Cualquier pérdida económica derivada de sus decisiones de apuesta.</li>
            </ul>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              <strong>SureWinBot no se hace responsable en ningún caso de:</strong> pérdidas económicas, errores en los datos mostrados, variaciones de cuotas, apuestas canceladas, limitaciones de cuentas por parte de casas de apuestas, errores en la ejecución de apuestas, interpretaciones incorrectas por parte del usuario, o cualquier otro daño directo o indirecto derivado del uso del servicio.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              8. Naturaleza de los datos
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              Los datos mostrados (surebets, valuebets, etc.) son calculados mediante información estadística recopilada del mercado en el momento del análisis. Sin embargo, <strong>estos datos pueden contener errores, estar desactualizados o ser incorrectos</strong> debido a múltiples factores fuera del control del Bot (latencia, cambios de cuotas, errores de las fuentes, etc.).
            </p>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              El Bot muestra datos estadísticos del mercado, pero no indica, recomienda ni sugiere realizar ninguna apuesta específica. La decisión de actuar sobre la información mostrada y la coincidencia entre los datos del Bot y los datos reales en la casa de apuestas dependen exclusivamente del usuario.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              9. Suspensión o cancelación del servicio
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El responsable podrá suspender, modificar o eliminar temporal o definitivamente el Bot sin previo aviso, por motivos técnicos, legales o de mantenimiento. No se garantiza la continuidad del servicio en ningún momento.
            </p>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              El uso indebido del servicio dará lugar al baneo del identificador de usuario (user ID) y a la pérdida del acceso a todas las funciones.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              10. Legislación aplicable y resolución de conflictos
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              El presente acuerdo se rige por la legislación española y de la Unión Europea.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              Cualquier controversia que surja en relación con estos Términos podrá resolverse mediante:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.6, textAlign: 'justify' }}>
              <li>Arbitraje voluntario, conforme a las leyes españolas de arbitraje.</li>
              <li>O, en su defecto, ante los Juzgados y Tribunales del domicilio del responsable del Bot.</li>
            </ul>
          </div>

          <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              11. Modificación de los Términos
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '15px', textAlign: 'justify' }}>
              SureWinBot se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento.
            </p>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              Las modificaciones serán notificadas a través del propio Bot o mediante los canales oficiales de comunicación.
            </p>
          </div>

          <div className="glass" style={{ padding: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FF6B35' }}>
              12. Contacto
            </h2>
            <p style={{ lineHeight: 1.6, textAlign: 'justify' }}>
              Para cualquier duda o reclamación relacionada con estos Términos y Condiciones:
            </p>
            <p style={{ marginTop: '10px' }}>
              Póngase en contacto con nosotros.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService

import React, { useState, useEffect } from 'react'

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({})
  const [deviceInfo, setDeviceInfo] = useState({})

  useEffect(() => {
    // Get device information
    const getDeviceInfo = () => {
      return {
        userAgent: navigator.userAgent,
        screen: `${screen.width}x${screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        pixelRatio: window.devicePixelRatio,
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        connection: navigator.connection ? {
          effectiveType: navigator.connection.effectiveType,
          downlink: navigator.connection.downlink,
          rtt: navigator.connection.rtt
        } : 'Not available'
      }
    }

    // Get performance metrics
    const getPerformanceMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0]
        const paint = performance.getEntriesByType('paint')
        
        return {
          loadTime: navigation ? Math.round(navigation.loadEventEnd - navigation.fetchStart) : 'N/A',
          domContentLoaded: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart) : 'N/A',
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime.toFixed(2) || 'N/A',
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime.toFixed(2) || 'N/A',
          memoryUsage: performance.memory ? {
            used: (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
            total: (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
            limit: (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB'
          } : 'Not available'
        }
      }
      return {}
    }

    setDeviceInfo(getDeviceInfo())
    setMetrics(getPerformanceMetrics())

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      setMetrics(getPerformanceMetrics())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Only show on development
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: '#ffffff',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px',
      backdropFilter: 'blur(10px)'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#f093fb' }}>📊 Performance Monitor</h4>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Device:</strong>
        <div>Screen: {deviceInfo.screen}</div>
        <div>Viewport: {deviceInfo.viewport}</div>
        <div>Mobile: {deviceInfo.isMobile ? '✅' : '❌'}</div>
        <div>Pixel Ratio: {deviceInfo.pixelRatio}</div>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <strong>Performance:</strong>
        <div>Load Time: {metrics.loadTime}ms</div>
        <div>DOM Ready: {metrics.domContentLoaded}ms</div>
        <div>First Paint: {metrics.firstPaint}ms</div>
        <div>FCP: {metrics.firstContentfulPaint}ms</div>
      </div>

      {metrics.memoryUsage && typeof metrics.memoryUsage === 'object' && (
        <div>
          <strong>Memory:</strong>
          <div>Used: {metrics.memoryUsage.used}</div>
          <div>Total: {metrics.memoryUsage.total}</div>
        </div>
      )}

      {deviceInfo.connection && typeof deviceInfo.connection === 'object' && (
        <div>
          <strong>Network:</strong>
          <div>Type: {deviceInfo.connection.effectiveType}</div>
          <div>Speed: {deviceInfo.connection.downlink} Mbps</div>
        </div>
      )}
    </div>
  )
}

export default PerformanceMonitor

# Protocolo de Auditoría de Código: Pixel Lens Craft

Ejecuta un escaneo completo de este repositorio siguiendo estos pasos secuenciales. No te desvíes de este orden.

1. FASE DE RECONOCIMIENTO PROFUNDO: 
   - Lee `src/lib/security.ts` y `src/lib/validation.ts` para entender los mecanismos de defensa actuales.
   - Lee `src/integrations/supabase/client.ts` y las migraciones en `supabase/` para entender la exposición de la base de datos.
   - Analiza el flujo de autenticación en `src/contexts/AuthContext.tsx`.

2. FASE DE RASTREO Y EXPLOTACIÓN LÓGICA: 
   - Intenta encontrar una forma de manipular el estado de autenticación desde el frontend para acceder a rutas de `src/pages/Dashboard.tsx` sin privilegios.
   - Evalúa si un usuario malintencionado podría realizar peticiones a Supabase que afecten a datos de otros usuarios (fuga de datos entre inquilinos) saltándose las restricciones de la interfaz.

3. FASE DE FILTRADO: 
   - Elimina cualquier vulnerabilidad que ya esté mitigada por las funciones en `src/lib/security.ts` o por las políticas estándar de Supabase, a menos que encuentres un fallo en dicha mitigación.

4. FASE DE INFORME: Presenta los resultados finales. Para cada vulnerabilidad confirmada, detalla:
   * Archivo y línea exacta.
   * Vector de ataque detallado (cómo lo explotaría un atacante).
   * Nivel de confianza (1-10).
   * Código de remediación sugerido.

Inicia la FASE 1 ahora.

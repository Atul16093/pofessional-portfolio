import axios from 'axios'

// Environment variable for the backend API URL
// In production, this should be set in Vercel/environment
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api'

/**
 * Centralized Axios instance for client-side API calls.
 * Configured with base URL, JSON headers, and timeout.
 * 
 * DESIGN DECISION:
 * We use a centralized Axios instance in the shared layer to ensure consistent
 * configuration (Base URL, headers, timeout) across the application.
 * This bypasses Next.js API routes to hit the backend directly, which reduces
 * latency and serverless function cold starts on Vercel.
 */
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15s timeout
})

// Simple response and error logging
apiClient.interceptors.response.use(
  (response) => {
    // Minimal logging for success
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API] ${response.config.method?.toUpperCase()} ${response.url} - ${response.status}`)
    }
    return response
  },
  (error) => {
    // Consistently log errors
    console.error(
      `[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url} :`,
      error.message
    )
    return Promise.reject(error)
  }
)

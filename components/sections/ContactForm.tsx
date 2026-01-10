'use client'

import React, { useState } from 'react'
import {
  Box,
  TextField,
  Stack,
  Typography,
  Alert,
  CircularProgress,
  Container,
} from '@mui/material'
import { Button } from '@/components/ui/Button'
import { designTokens } from '@/theme/muiTheme'
import { ContactFormData, ContactResponse } from '@/lib/types'
import { contactAPI } from '@/lib/api'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  )
  const [submitMessage, setSubmitMessage] = useState('')

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus(null)
    setSubmitMessage('')

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const response: ContactResponse = await contactAPI.submit(formData)

      if (response.success) {
        setSubmitStatus('success')
        setSubmitMessage(
          response.message || 'Thank you! Your message has been sent successfully.'
        )
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(
          response.error || 'Failed to send your message. Please try again.'
        )
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again later.')
      console.error('Failed to submit form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: designTokens.colors.backgroundPrimary,
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4}>
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: designTokens.colors.primaryText,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: designTokens.colors.secondaryText,
                fontSize: '1.1rem',
              }}
            >
              Have a project in mind or want to discuss backend systems? Send me a message!
            </Typography>
          </Box>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <Alert
              severity="success"
              sx={{
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                color: '#4CAF50',
                borderColor: '#4CAF50',
              }}
            >
              {submitMessage}
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert
              severity="error"
              sx={{
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                color: '#FF6B6B',
                borderColor: '#FF6B6B',
              }}
            >
              {submitMessage}
            </Alert>
          )}

          {/* Contact Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={3}>
              {/* Name Field */}
              <TextField
                fullWidth
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
                disabled={loading}
                placeholder="Your name"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: designTokens.colors.primaryText,
                    backgroundColor: designTokens.colors.backgroundSecondary,
                    '& fieldset': {
                      borderColor: designTokens.colors.borderDivider,
                    },
                    '&:hover fieldset': {
                      borderColor: designTokens.colors.accentHighlight,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: designTokens.colors.accentHighlight,
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: designTokens.colors.secondaryText,
                    opacity: 0.7,
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#FF6B6B',
                  },
                }}
              />

              {/* Email Field */}
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                disabled={loading}
                placeholder="your@email.com"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: designTokens.colors.primaryText,
                    backgroundColor: designTokens.colors.backgroundSecondary,
                    '& fieldset': {
                      borderColor: designTokens.colors.borderDivider,
                    },
                    '&:hover fieldset': {
                      borderColor: designTokens.colors.accentHighlight,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: designTokens.colors.accentHighlight,
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: designTokens.colors.secondaryText,
                    opacity: 0.7,
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#FF6B6B',
                  },
                }}
              />

              {/* Message Field */}
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                error={!!errors.message}
                helperText={errors.message}
                disabled={loading}
                placeholder="Tell me about your project..."
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: designTokens.colors.primaryText,
                    backgroundColor: designTokens.colors.backgroundSecondary,
                    '& fieldset': {
                      borderColor: designTokens.colors.borderDivider,
                    },
                    '&:hover fieldset': {
                      borderColor: designTokens.colors.accentHighlight,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: designTokens.colors.accentHighlight,
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: designTokens.colors.secondaryText,
                    opacity: 0.7,
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#FF6B6B',
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={loading}
                isLoading={loading}
                sx={{
                  minWidth: { xs: '100%', sm: 'auto' },
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  mt: 2,
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Stack>
          </Box>

          {/* Additional Info */}
          <Box
            sx={{
              backgroundColor: designTokens.colors.cardBackground,
              border: `1px solid ${designTokens.colors.borderDivider}`,
              borderRadius: designTokens.radius.md,
              p: { xs: 3, md: 4 },
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: designTokens.colors.secondaryText,
              }}
            >
              I typically respond within 24 hours. Looking forward to connecting!
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

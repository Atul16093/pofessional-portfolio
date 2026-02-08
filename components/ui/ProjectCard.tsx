'use client'

import React from 'react'
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Stack,
  Avatar,
} from '@mui/material'
import Link from 'next/link'
import { Project } from '@/lib/types'
import { designTokens } from '@/theme/muiTheme'
import { getTechIconUrl } from '@/lib/utils/techIcons'

interface ProjectCardProps {
  project: Project
  variant?: 'compact' | 'full'
  showFeatured?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'full',
  showFeatured = false,
}) => {
  const isCompact = variant === 'compact'

  return (
    <Link 
      href={`/projects/${project.slug}`} 
      style={{ 
        textDecoration: 'none',
        height: '100%',
        display: 'block',
      }}
    >
      <Card
        className="project-card"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: designTokens.colors.cardBackground,
          borderColor: designTokens.colors.borderDivider,
          border: `1px solid ${designTokens.colors.borderDivider}`,
          borderRadius: designTokens.radius.md,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: designTokens.colors.accentHighlight,
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 3,
          },
          '&:hover': {
            borderColor: designTokens.colors.accentHighlight,
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: `0 20px 60px rgba(255, 77, 141, 0.25)`,
            '&::before': {
              transform: 'scaleX(1)',
            },
          },
        }}
      >
          <CardContent
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: isCompact ? 1.5 : 2,
              p: isCompact ? 2.5 : 3,
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
              minHeight: 0,
            }}
          >
            {/* Header with featured badge */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              {showFeatured && project.featured && (
                <Typography
                  variant="caption"
                  sx={{
                    display: 'inline-block',
                    color: designTokens.colors.accentHighlight,
                    fontWeight: 600,
                    mb: 1.5,
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  Featured
                </Typography>
              )}
              <Typography
                variant={isCompact ? 'h5' : 'h4'}
                sx={{
                  color: designTokens.colors.primaryText,
                  fontWeight: 700,
                  mb: 1,
                  fontSize: isCompact ? '1.5rem' : '1.75rem',
                  lineHeight: 1.3,
                  transition: 'color 0.3s ease',
                }}
              >
                {project.title}
              </Typography>
              
              {/* Subheading - Short Description */}
              {project.shortDescription && (
                <Typography
                  variant="body2"
                  sx={{
                    color: designTokens.colors.secondaryText,
                    fontSize: isCompact ? '0.875rem' : '0.9rem',
                    lineHeight: 1.5,
                    mb: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.shortDescription}
                </Typography>
              )}
            </Box>

            {/* Spacer to push tech stack and CTA to bottom */}
            <Box sx={{ flexGrow: 1, minHeight: 8 }} />

            {/* Tech Stack Tags with Icons */}
            {/* Tech Stack Tags with Icons */}
            {((project.techStack && project.techStack.length > 0) || (project.tags && project.tags.length > 0)) && (
              <Stack 
                direction="row" 
                spacing={1} 
                sx={{ 
                  flexWrap: 'wrap',
                  gap: 1,
                  position: 'relative',
                  zIndex: 2,
                  alignItems: 'center',
                }}
              >
                {(project.techStack && project.techStack.length > 0 
                  ? project.techStack 
                  : (project.tags || []).map(tag => ({ id: tag, name: tag, iconUrl: getTechIconUrl(tag) }))
                )
                .slice(0, isCompact ? 2 : 4)
                .map((item) => {
                  // For techStack items, use iconUrl or fallback to utility
                  // For tags, we constructed an object with iconUrl from utility
                  const techName = 'name' in item ? item.name : String(item)
                  const iconUrl = 'iconUrl' in item ? item.iconUrl : ('icon' in item ? item.icon : getTechIconUrl(techName))

                  return (
                    <Chip
                      key={'id' in item ? item.id : techName}
                      label={techName}
                      size="small"
                      avatar={
                        iconUrl ? (
                          <Avatar
                            src={iconUrl}
                            alt={techName}
                            onError={(e) => {
                              // Hide avatar if icon fails to load
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                            sx={{
                              width: 20,
                              height: 20,
                              bgcolor: 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              '& img': {
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                filter: 'none', // Keep original colors
                              },
                            }}
                          />
                        ) : undefined
                      }
                      sx={{
                        backgroundColor: designTokens.colors.backgroundSecondary,
                        color: designTokens.colors.primaryText,
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        border: `1px solid ${designTokens.colors.borderDivider}`,
                        transition: 'all 0.3s ease',
                        height: isCompact ? '28px' : '32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          backgroundColor: designTokens.colors.backgroundPrimary,
                          borderColor: designTokens.colors.accentHighlight,
                        },
                        '& .MuiChip-label': {
                          px: iconUrl ? 1.5 : 1.5,
                          pl: iconUrl ? 0.25 : 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          lineHeight: 1,
                        },
                        '& .MuiChip-avatar': {
                          ml: 0.75,
                          mr: 0.5,
                          width: 20,
                          height: 20,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      }}
                    />
                  )
                })}
              </Stack>
            )}

            {/* CTA */}
            <Typography
              sx={{
                color: designTokens.colors.accentHighlight,
                fontWeight: 600,
                mt: 1,
                fontSize: '0.9rem',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                transition: 'all 0.3s ease',
                '&::after': {
                  content: '"→"',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                },
                '&:hover::after': {
                  transform: 'translateX(4px)',
                },
              }}
            >
              View Case Study
            </Typography>
          </CardContent>
        </Card>
    </Link>
  )
}

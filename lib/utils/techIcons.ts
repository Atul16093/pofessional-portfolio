// Technology icon mapping utility
// Maps technology names to devicons (colored icons) and simple-icons slugs
// Uses devicons CDN for colored icons: https://devicon.dev/

// Devicons mapping (colored icons)
export const DEVICON_MAP: Record<string, string> = {
  // Languages & Runtimes
  'Node.js': 'nodejs',
  'Nodejs': 'nodejs',
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'Python': 'python',
  'Java': 'java',
  'Go': 'go',
  'Rust': 'rust',
  'PHP': 'php',
  'Ruby': 'ruby',

  // Frameworks
  'React': 'react',
  'Next.js': 'nextjs',
  'Vue': 'vuejs',
  'Angular': 'angularjs',
  'Express': 'express',

  // Databases
  'PostgreSQL': 'postgresql',
  'Postgres': 'postgresql',
  'MongoDB': 'mongodb',
  'MySQL': 'mysql',
  'Redis': 'redis',

  // Cloud & DevOps
  'AWS': 'amazonwebservices',
  'Amazon Web Services': 'amazonwebservices',
  'Amazon AWS': 'amazonwebservices',
  'GCP': 'googlecloud',
  'Google Cloud': 'googlecloud',
  'Azure': 'microsoftazure',
  'Microsoft Azure': 'microsoftazure',
  'Docker': 'docker',
  'Kubernetes': 'kubernetes',
  'K8s': 'kubernetes',
  'k8s': 'kubernetes',

  // Tools & Services
  'Git': 'git',
  'GitHub': 'github',
  'GitLab': 'gitlab',
  'Nginx': 'nginx',
  'Apache': 'apache',
}

// Simple-icons mapping (fallback)
export const TECH_ICON_MAP: Record<string, string> = {
  'Kafka': 'apachekafka',
  'Apache Kafka': 'apachekafka',
  'RabbitMQ': 'rabbitmq',
  'DynamoDB': 'amazondynamodb',
  'Elasticsearch': 'elasticsearch',
  'Neo4j': 'neo4j',
  'Kubernetes': 'kubernetes',
  'gRPC': 'grpc',
  'GraphQL': 'graphql',
  'WebSocket': 'socketdotio',
  'Terraform': 'terraform',
  'Ansible': 'ansible',
  'Jenkins': 'jenkins',
  'Prometheus': 'prometheus',
  'Grafana': 'grafana',
}

/**
 * Get the colored icon URL for a technology name using devicons
 * @param techName - The name of the technology
 * @returns The URL to the colored icon SVG, or null if not found
 */
export function getTechIconUrl(techName: string): string | null {
  // First try devicons (colored icons)
  const deviconSlug = DEVICON_MAP[techName] || DEVICON_MAP[techName.toLowerCase()]
  
  if (deviconSlug) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconSlug}/${deviconSlug}-original.svg`
  }
  
  // Fallback to simple-icons (with brand color)
  const simpleIconSlug = TECH_ICON_MAP[techName] || TECH_ICON_MAP[techName.toLowerCase()]
  
  if (simpleIconSlug) {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${simpleIconSlug}.svg`
  }
  
  // Try normalized simple-icons as last resort
  const normalized = techName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
  
  return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${normalized}.svg`
}

/**
 * Get the icon URL with color for a technology
 * @param techName - The name of the technology
 * @returns The icon URL with color parameter
 */
export function getTechIconUrlWithColor(techName: string): string | null {
  const baseUrl = getTechIconUrl(techName)
  return baseUrl ? `${baseUrl}?color=ffffff` : null
}

/**
 * Check if an icon exists for a technology
 * @param techName - The name of the technology
 * @returns true if icon mapping exists
 */
export function hasTechIcon(techName: string): boolean {
  return !!TECH_ICON_MAP[techName] || !!TECH_ICON_MAP[techName.toLowerCase()]
}


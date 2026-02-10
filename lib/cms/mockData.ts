import { Project, CaseStudy, Experience, TechStackItem, SiteConfig } from '@/lib/types'
import { OWNER_NAME, OWNER_TITLE, OWNER_SUMMARY } from '@/lib/constants'

// Mock Site Config
export const mockSiteConfig: SiteConfig = {
  ownerName: OWNER_NAME,
  ownerTitle: OWNER_TITLE,
  ownerSummary: OWNER_SUMMARY,
  socialLinks: [
    { platform: 'github', url: 'https://github.com/atulRaghuwanshi' },
    { platform: 'linkedin', url: 'https://linkedin.com' },
    { platform: 'instagram', url: 'https://instagram.com' },
    { platform: 'email', url: 'mailto:hello@example.com' }
  ]
}

// Mock Tech Stack Data
export const mockTechStack: TechStackItem[] = [
  // Real-Time Systems
  { id: '1', name: 'Node.js', category: 'Real-Time Systems' },
  { id: '2', name: 'WebSocket', category: 'Real-Time Systems' },
  { id: '3', name: 'Redis Streams', category: 'Real-Time Systems' },

  // Messaging & Async
  { id: '4', name: 'Kafka', category: 'Messaging & Async' },
  { id: '5', name: 'RabbitMQ', category: 'Messaging & Async' },
  { id: '6', name: 'Bull Queue', category: 'Messaging & Async' },

  // Performance & Caching
  { id: '7', name: 'Redis', category: 'Performance & Caching' },
  { id: '8', name: 'Memcached', category: 'Performance & Caching' },
  { id: '9', name: 'HTTP Caching', category: 'Performance & Caching' },

  // Data Storage
  { id: '10', name: 'PostgreSQL', category: 'Data Storage' },
  { id: '11', name: 'MongoDB', category: 'Data Storage' },
  { id: '12', name: 'DynamoDB', category: 'Data Storage' },

  // Cloud Integrations
  { id: '13', name: 'AWS', category: 'Cloud Integrations' },
  { id: '14', name: 'GCP', category: 'Cloud Integrations' },
  { id: '15', name: 'Docker', category: 'Cloud Integrations' },

  // Frontend
  { id: '16', name: 'React', category: 'Frontend' },
  { id: '17', name: 'TypeScript', category: 'Frontend' },
  { id: '18', name: 'Next.js', category: 'Frontend' },
]

// Mock Projects Data
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Real-Time Analytics Platform',
    slug: 'real-time-analytics-platform',
    description:
      'A scalable real-time analytics platform processing millions of events per second.',
    shortDescription:
      'Processing millions of events/sec with sub-second latency.',
    problemStatement:
      'Traditional analytics systems couldn\'t handle our spike in data volume (10x growth in 6 months). We needed a solution that could ingest, process, and serve analytics in real-time without losing data or sacrificing latency.',
    systemChallenge:
      'Building a distributed system to handle 1M+ events/second with <500ms latency',
    thumbnail: '/projects/analytics.jpg',
    tags: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'AWS'],
    featured: true,
    techStack: [
      mockTechStack[0], // Node.js
      mockTechStack[4], // Kafka
      mockTechStack[7], // Redis
      mockTechStack[10], // PostgreSQL
      mockTechStack[12], // AWS
    ],
  },
  {
    id: '2',
    title: 'Microservices Orchestration',
    slug: 'microservices-orchestration',
    description:
      'Architected and implemented a microservices framework handling 500K requests/day.',
    shortDescription:
      'Managing 15+ services with automatic scaling and fault tolerance.',
    problemStatement:
      'Our monolithic application was becoming a bottleneck. We needed to split it into independent services that could scale separately while maintaining consistency and reliability.',
    systemChallenge:
      'Designing distributed transactions and service-to-service communication at scale',
    thumbnail: '/projects/microservices.jpg',
    tags: ['Docker', 'Kubernetes', 'gRPC', 'PostgreSQL'],
    featured: true,
    techStack: [
      mockTechStack[14], // Docker
      mockTechStack[10], // PostgreSQL
    ],
  },
  {
    id: '3',
    title: 'High-Performance Caching Layer',
    slug: 'high-performance-caching-layer',
    description:
      'Implemented a multi-tier caching system reducing API latency by 80%.',
    shortDescription:
      'Reduced p99 latency from 500ms to 50ms with intelligent caching.',
    problemStatement:
      'Database queries were the bottleneck for our most critical APIs. We needed a caching strategy that could handle cache invalidation, consistency, and warm-up efficiently.',
    systemChallenge:
      'Designing cache coherence strategies for distributed systems',
    thumbnail: '/projects/caching.jpg',
    tags: ['Redis', 'Node.js', 'Performance', 'AWS'],
    featured: true,
    techStack: [
      mockTechStack[7], // Redis
      mockTechStack[0], // Node.js
      mockTechStack[12], // AWS
    ],
  },
]

// Mock Case Studies Data
export const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'real-time-analytics-platform',
    title: 'Real-Time Analytics Platform',
    description:
      'A scalable real-time analytics platform processing millions of events per second.',
    shortDescription:
      'Processing millions of events/sec with sub-second latency.',
    problemStatement: `Our product was experiencing exponential growth - from 100K events/day to over 10M events/day in just 6 months. Our existing analytics pipeline, built on traditional batch processing, could no longer keep up. We faced three critical challenges:

1. **Data Loss**: With the throughput spike, events were being dropped during peak hours, leading to incomplete analytics.
2. **Latency**: Batch jobs took 2-3 hours to complete, making it impossible to provide real-time insights to customers.
3. **Cost**: Running large ETL jobs was burning through our infrastructure budget with diminishing returns.

We needed a system that could ingest, process, and serve analytics in real-time without losing data or sacrificing latency.`,
    keyChallengeSolved: `We built a distributed event processing pipeline that:
- Ingests 1M+ events/second with guaranteed delivery
- Processes events within sub-second latency using stream processing
- Scales horizontally to handle traffic spikes without provisioning delays
- Maintains strong consistency for critical metrics while optimizing for availability in others
- Reduces infrastructure costs by 40% through efficient resource utilization

The solution leverages Kafka for event streaming, Redis for real-time aggregations, and PostgreSQL for time-series storage.`,
    systemArchitecture: {
      image: '/diagrams/analytics-architecture.png',
      description: `The architecture consists of four main layers:

1. **Ingestion Layer**: API Gateway + Kafka Topic shards for high-throughput event ingestion
2. **Processing Layer**: Kafka Stream applications and Flink jobs for stateful processing
3. **Storage Layer**: Redis for hot data, PostgreSQL for cold storage, TimescaleDB for metrics
4. **Query Layer**: GraphQL API with caching and materialized views

Each component is independently scalable and has built-in fault tolerance.`,
    },
    keyTechnicalDecisions: [
      'Chose Kafka over other message brokers for its high throughput and fault tolerance',
      'Implemented stream processing over batch for sub-second latency requirements',
      'Used Redis sorted sets for efficient time-series aggregations',
      'Implemented event sourcing for auditability and replay capabilities',
      'Designed idempotent consumers to handle duplicate events from Kafka',
    ],
    tradeOffs: [
      'Event ordering guarantees within partitions only (acceptable for analytics)',
      'Higher operational complexity vs. batch processing systems',
      'Need for stream processing expertise in the team',
      'Cost of running Kafka cluster 24/7 vs. on-demand batch jobs',
    ],
    improvements: [
      'Migrate to managed Kafka service (AWS MSK) to reduce operational overhead',
      'Implement automatic schema evolution for flexible event structures',
      'Add ML-based anomaly detection on streaming metrics',
      'Build self-service dashboarding on top of real-time data',
    ],
    techStack: [
      mockTechStack[0], // Node.js
      mockTechStack[4], // Kafka
      mockTechStack[7], // Redis
      mockTechStack[10], // PostgreSQL
      mockTechStack[12], // AWS
    ],
  },
  {
    id: '2',
    slug: 'microservices-orchestration',
    title: 'Microservices Orchestration',
    description:
      'Architected and implemented a microservices framework handling 500K requests/day.',
    shortDescription:
      'Managing 15+ services with automatic scaling and fault tolerance.',
    problemStatement: `Our 3-year-old monolith had become increasingly difficult to maintain and scale. Different parts of the application had different scalability needs - the user service needed to scale independently from the recommendation engine. Deployment cycles took 2 hours, and a single bug could bring down the entire system.

We decided to migrate to microservices, but faced significant architectural challenges:
- How to maintain data consistency across services
- How to handle cross-service communication efficiently
- How to deploy and manage 15+ independent services
- How to handle service failures gracefully`,
    keyChallengeSolved: `We successfully migrated from monolith to microservices:
- Identified domain boundaries and extracted 15 microservices
- Implemented event-driven architecture for loose coupling between services
- Built centralized logging and distributed tracing for observability
- Set up CI/CD pipelines for independent service deployment
- Implemented circuit breakers and bulkheads for fault isolation
- Reduced deployment time from 2 hours to 15 minutes

Each service now scales independently, and engineers can deploy without coordinating with other teams.`,
    systemArchitecture: {
      image: '/diagrams/microservices-architecture.png',
      description: `The microservices architecture uses:
- API Gateway for request routing and load balancing
- Service Registry for dynamic service discovery
- Event Bus for asynchronous communication
- Distributed Tracing for request tracking across services
- Centralized Logging for aggregating logs from all services`,
    },
    keyTechnicalDecisions: [
      'Used gRPC for synchronous service-to-service communication (low latency)',
      'Implemented Saga pattern for distributed transactions',
      'Adopted eventual consistency model for inter-service data consistency',
      'Used containerization (Docker) with Kubernetes for orchestration',
      'Implemented API versioning to manage service evolution',
    ],
    tradeOffs: [
      'Increased operational complexity (monitoring, debugging, deployment)',
      'Network latency between services vs. in-process calls',
      'Need for distributed transaction handling',
      'Harder to maintain transactions across service boundaries',
    ],
    improvements: [
      'Implement API gateway authentication and rate limiting',
      'Build service mesh (Istio) for advanced traffic management',
      'Implement automated service scaling based on metrics',
      'Create dedicated teams for each microservice',
    ],
    techStack: [
      mockTechStack[14], // Docker
      mockTechStack[10], // PostgreSQL
      mockTechStack[0], // Node.js
    ],
  },
  {
    id: '3',
    slug: 'high-performance-caching-layer',
    title: 'High-Performance Caching Layer',
    description:
      'Implemented a multi-tier caching system reducing API latency by 80%.',
    shortDescription:
      'Reduced p99 latency from 500ms to 50ms with intelligent caching.',
    problemStatement: `Our API was serving millions of requests daily, but database queries were becoming a bottleneck. During peak hours, database CPU would hit 95% utilization, and p99 latency would exceed 500ms. We had multiple options but needed to choose carefully:

1. **Scale the database** - expensive and limited by database architecture
2. **Optimize queries** - we had already done significant work here
3. **Implement caching** - could provide dramatic latency improvements if done correctly

The challenge was designing a caching strategy that would work reliably across our distributed system while handling cache invalidation and maintaining consistency.`,
    keyChallengeSolved: `We implemented a three-tier caching strategy:
- L1: HTTP browser caching for static content
- L2: Redis cache for hot data with intelligent TTLs
- L3: Application-level caching with smart invalidation

Results:
- Reduced p99 latency from 500ms to 50ms (10x improvement)
- Cut database CPU utilization by 70%
- Improved user experience and conversion rates
- Reduced infrastructure costs by 35%

The system intelligently manages cache coherence using event-driven invalidation and smart preloading.`,
    systemArchitecture: {
      image: '/diagrams/caching-architecture.png',
      description: `The caching layer architecture:
1. **CDN/Browser Cache**: Static assets cached at edge and browser
2. **Application Cache**: Redis clusters for hot data sets
3. **Query Cache**: Intelligent caching of query results
4. **Cache Invalidation**: Event-driven invalidation on data changes`,
    },
    keyTechnicalDecisions: [
      'Used Redis Lua scripts for atomic cache operations',
      'Implemented cache-aside pattern with write-through for critical data',
      'Built probabilistic early expiration to prevent thundering herd',
      'Used consistent hashing for distributed cache across multiple Redis instances',
      'Implemented cache warming on service startup',
    ],
    tradeOffs: [
      'Complexity of cache invalidation strategies',
      'Cost of maintaining Redis clusters',
      'Need to handle stale data in some scenarios',
      'Cache memory overhead',
    ],
    improvements: [
      'Implement adaptive TTLs based on access patterns',
      'Use machine learning to predict cache hits',
      'Implement cache warming based on traffic patterns',
      'Build better cache hit/miss metrics and dashboards',
    ],
    techStack: [
      mockTechStack[7], // Redis
      mockTechStack[0], // Node.js
      mockTechStack[12], // AWS
    ],
  },
]

// Mock Experience Data
export const mockExperience: Experience[] = [
  {
    id: '1',
    title: 'Senior Backend Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    startDate: '2022-01-01',
    description:
      'Led the architecture and implementation of real-time systems serving millions of events per day.',
    achievements: [
      'Designed and implemented event streaming platform handling 1M+ events/sec',
      'Led migration from monolith to microservices (15+ services)',
      'Reduced API latency by 80% through caching optimization',
      'Mentored 5 junior engineers',
    ],
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'StartupXYZ',
    location: 'Mountain View, CA',
    startDate: '2020-06-01',
    endDate: '2021-12-31',
    description:
      'Built scalable APIs and data pipelines for a growing fintech platform.',
    achievements: [
      'Built APIs serving 500K+ requests daily',
      'Implemented data warehousing solution with Redshift',
      'Reduced database query time by 60% through optimization',
    ],
  },
]

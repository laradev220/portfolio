export const projects = [
  {
    id: 1,
    name: 'Group Ticketing Module',
    shortName: 'Group Ticketing',
    description: 'Multi-tenant flight group booking system with role-based access control, seat allocation, payment proof upload, and PNR/ticket management.',
    fullDescription: `A comprehensive B2B flight booking platform enabling travel agencies to manage group bookings for airlines. Supports multiple agencies (main office + sub-agents) with hierarchical permissions, seat inventory management, payment tracking, and PNR/ticket issuance.

Built from ground up with focus on scalability and real-world airline booking workflows. Handles complex business rules like hold expiry, seat allocation locks per agency, and approval workflows.`,
    tech: ['Node.js', 'Express', 'TypeScript', 'MySQL', 'Sequelize', 'JWT', 'Redis'],
    status: 'Completed',
    github: null,
    live: null,
    features: [
      'Multi-tenant architecture with agency hierarchy (Admin, Manager, Sub-Agent)',
      'Role-based access control with agency scoping',
      'Flight group management with seat buckets (Adult/Child/Infant)',
      'Booking workflow: Request → Approve → Payment → Issue',
      'Hold expiry system with cron-based seat release',
      'Payment proof upload with bank details',
      'PNR and ticket number management (group or per-booking)',
      'Audit logging for all state changes',
      'Background job processing for hold expiry'
    ],
    architecture: {
      overview: `Full-stack Node.js application with Express API server, separate concerns for controllers/services/models, JWT authentication with agency-scoped permissions, MySQL database with Sequelize ORM, Redis for caching/sessions/rate-limiting, node-cron for background jobs.`,
      layers: [
        { name: 'Presentation', items: ['React SPA Frontend', 'REST API Client', 'Admin Dashboard'] },
        { name: 'API Gateway', items: ['Express.js Router', 'JWT Auth Middleware', 'Rate Limiter (Redis)', 'Request Validation (Joi/Zod)'] },
        { name: 'Business Logic', items: ['AuthService', 'AgencyService', 'GroupService', 'BookingService', 'SeatManagementService', 'PaymentService', 'NotificationService'] },
        { name: 'Data Access', items: ['Sequelize ORM', '11 Database Models', 'Query Builder Layer', 'Transaction Management'] },
        { name: 'Infrastructure', items: ['MySQL 8.0', 'Redis (Cache/Session/RateLimit)', 'Node Cron (Background Jobs)', 'File System (Payment Proofs)'] }
      ],
      dataFlow: `Client Request → Express Middleware (Auth/RateLimit) → Controller → Service (Business Logic) → Model (Sequelize) → MySQL → Response`,
      external: ['JWT Token Generation', 'Redis Pub/Sub', 'File Upload (Local/MinIO ready)']
    },
    database: {
      tables: [
        'agencies', 'users', 'agency_settings',
        'flight_groups', 'group_seat_buckets', 'group_agency_allocations',
        'booking_requests', 'booking_passengers', 'payment_proofs',
        'audit_logs', 'attachments'
      ],
      relationships: '11 models with 25+ associations, foreign key constraints, cascade deletes'
    },
    apiEndpoints: [
      'POST /auth/login - Agency-scoped authentication',
      'GET/POST /groups - Flight group CRUD',
      'GET/POST /bookings - Booking workflow endpoints',
      'POST /bookings/:id/approve - Approve booking request',
      'POST /bookings/:id/mark-paid - Mark payment received',
      'POST /bookings/:id/issue - Issue tickets with PNR'
    ],
    setup: {
      prerequisites: ['Node.js 18+', 'MySQL 8.0+', 'Redis'],
      steps: [
        'git clone repository',
        'npm install',
        'Configure .env with DB credentials',
        'Run npm run db:init',
        'npm run dev'
      ]
    },
    challenges: [
      'Concurrency handling for seat allocation (SELECT FOR UPDATE)',
      'Timezone handling for flight times (UTC + local)',
      'Stateless auth with agency scoping in JWT'
    ]
  },
  {
    id: 2,
    name: 'Bitcoder E-Learning API',
    shortName: 'E-Learning API',
    description: 'Full-featured e-learning backend with RESTful API for courses, lessons, enrollments, and user management with Laravel Sanctum auth.',
    fullDescription: `Production-ready REST API powering an e-learning platform. Handles complete learning workflow including course management, lesson delivery, user enrollments, and progress tracking.

Features robust authentication system with multiple user roles (Super Admin, Admin, Instructor, Student) with granular permissions. Includes async task processing for email notifications and background jobs.`,
    tech: ['Laravel 12', 'PHP 8.2', 'MySQL', 'Redis', 'OpenAPI', 'Laravel Sanctum', 'Pest PHP'],
    status: 'Completed',
    github: null,
    live: null,
    features: [
      'RESTful API with consistent JSON response format',
      'Laravel Sanctum token-based authentication',
      'Role-based access control (Super Admin, Admin, Instructor, Student)',
      'Course and lesson management',
      'Student enrollment system',
      'Progress tracking',
      'Async task queues with Redis',
      'OpenAPI/Swagger documentation via Scramble',
      'Automated testing with Pest PHP',
      'Code formatting with Laravel Pint'
    ],
    architecture: {
      overview: `Laravel 12 application using MVC pattern with Service Container, Eloquent ORM for database, Laravel Sanctum for SPA authentication, Redis for queue driver (BullMQ integration), OpenAPI auto-generated via Scramble package.`,
      layers: [
        { name: 'HTTP Layer', items: ['Laravel Router', 'Middleware Stack (Auth/CORS/Throttle)', 'Form Request Validation'] },
        { name: 'Controller', items: ['API Controllers', 'Resource Transforms', 'Exception Handler'] },
        { name: 'Service Layer', items: ['CourseService', 'LessonService', 'EnrollmentService', 'UserService', 'AuthService'] },
        { name: 'Repository', items: ['Eloquent Models', 'Query Scopes', 'Model Events'] },
        { name: 'Infrastructure', items: ['MySQL Database', 'Redis Queue', 'File Storage', 'SMTP (Mailtrap)'] }
      ],
      dataFlow: `HTTP Request → Middleware → Controller → Service → Repository (Model) → MySQL → Transformer → JSON Response`,
      external: ['Laravel Sanctum (Token Auth)', 'Scramble (OpenAPI)', 'Redis Queue Driver', 'Pest Testing Framework']
    },
    database: {
      tables: ['users', 'courses', 'lessons', 'enrollments', 'progress', 'categories'],
      relationships: 'Eloquent ORM with proper relationships'
    },
    apiEndpoints: [
      'POST /api/auth/login - User authentication',
      'GET/POST /api/courses - Course CRUD',
      'GET/POST /api/lessons - Lesson management',
      'POST /api/enrollments - Enroll student',
      'GET /docs - OpenAPI documentation'
    ],
    setup: {
      prerequisites: ['PHP 8.2+', 'Composer', 'Node.js 18+', 'MySQL/PostgreSQL', 'Redis'],
      steps: [
        'git clone repository',
        'composer install',
        'cp .env.example .env',
        'php artisan key:generate',
        'php artisan migrate',
        'composer run dev'
      ]
    },
    challenges: [
      'Complex permission system with inheritance',
      'API documentation auto-generation',
      'Task queue setup with Redis'
    ]
  },
  {
    id: 3,
    name: 'Franchise Manager',
    shortName: 'Franchise Manager',
    description: 'Comprehensive franchise accounting system with invoices, receipts, general ledger, employee management, salary processing, and cheque tracking.',
    fullDescription: `Complete accounting and management system for franchise businesses. Covers full financial cycle from invoicing to salary disbursement with comprehensive reporting.

Built on CodeIgniter 4 with structured MVC architecture. Includes multiple interconnected modules for different business operations with proper data relationships and audit trails.`,
    tech: ['CodeIgniter 4', 'PHP 8.1', 'MySQL', 'Bootstrap'],
    status: 'Completed',
    github: null,
    live: null,
    features: [
      'Invoice management with line items, pricing, payment tracking',
      'Receipt tracking with multiple payment methods',
      'Day Book - comprehensive transaction ledger',
      'General Ledger with chart of accounts',
      'Employee management with designations and bank details',
      'Monthly salary batch processing with allowances/deductions',
      'Cheque tracking (incoming/outgoing) with status management',
      'Petty cash management',
      'Recovery management for unpaid invoices',
      'Financial reports and summaries'
    ],
    architecture: {
      overview: `CodeIgniter 4 MVC application with modular structure, MySQL database with foreign key relationships, Session-based authentication, procedural views with Bootstrap, database transactions for financial operations.`,
      layers: [
        { name: 'Presentation', items: ['Bootstrap 5 Templates', 'Server-side Rendered Views', 'jQuery (Legacy)'] },
        { name: 'Controller', items: ['Admin Controller', 'Auth Controller', 'Feature Controllers (Invoice/Receipt/Ledger)'] },
        { name: 'Model', items: ['Entity Models', 'Query Builder Usage', 'Transaction Support'] },
        { name: 'Libraries', items: ['Session Library', 'Email Library', 'Form Validation'] },
        { name: 'Database', items: ['MySQL 5.7+', '13 Interconnected Tables', 'Foreign Key Constraints'] }
      ],
      dataFlow: `HTTP Request → Route → Controller → Model (Query Builder) → MySQL → View (HTML)`,
      external: ['PHP Session', 'MySQL Database', 'PHP Mail (SMTP)']
    },
    database: {
      tables: [
        'users', 'invoices', 'invoice_items', 'receipts',
        'transactions', 'ledger_accounts', 'employees',
        'salary_payments', 'salary_details', 'cheque_tracking',
        'petty_cash', 'expense_categories'
      ],
      relationships: 'Proper foreign keys, cascading updates'
    },
    apiEndpoints: [
      'GET/POST /Admin/invoices',
      'GET/POST /Admin/receipts',
      'GET/POST /Admin/day_book',
      'GET/POST /Admin/ledgers',
      'GET/POST /Admin/employees',
      'POST /Admin/salary_payment'
    ],
    setup: {
      prerequisites: ['PHP 8.1+', 'MySQL 5.7+', 'Composer'],
      steps: [
        'git clone repository',
        'composer install',
        'Configure .env with DB credentials',
        'php spark migrate',
        'php spark db:seed UserSeeder',
        'php spark serve'
      ]
    },
    challenges: [
      'Complex financial calculations',
      'Transaction integrity across modules',
      'Report generation from multiple tables'
    ]
  },
  {
    id: 4,
    name: 'Research Survey Application',
    shortName: 'Research Survey',
    description: 'Multi-tenant research survey platform optimized for cPanel deployment with role-based access, analytics, charts, and data export.',
    fullDescription: `Academic research survey platform designed for university researchers. Supports multiple surveys with proper access control and comprehensive analytics.

Zero-dependency architecture makes it perfect for cPanel/shared hosting deployment. Pure PHP with no Composer or Node.js required - just upload and run.`,
    tech: ['Pure PHP', 'MySQL', 'Chart.js', 'TailwindCSS (CDN)'],
    status: 'Completed',
    github: null,
    live: null,
    features: [
      'Multi-tenant survey platform',
      'Role-based access (Researcher, Admin, Super Admin)',
      'Survey creation and question management',
      'Participant management',
      'Response collection and storage',
      'Advanced analytics with filters',
      'Chart.js integration for visualizations',
      'Data export (CSV)',
      'Audit logging',
      'CSRF protection',
      'cPanel-ready deployment (no dependencies)'
    ],
    architecture: {
      overview: `Single entry point (index.php) routing, procedural PHP with function-based organization, MySQL database with PDO, session-based authentication, CDN for CSS/JS, server-rendered HTML pages.`,
      layers: [
        { name: 'Router', items: ['Single index.php', 'Route Parsing (GET params)', 'Action Dispatcher'] },
        { name: 'Controllers (Procedural)', items: ['Auth Functions', 'Survey Functions', 'Admin Functions', 'Researcher Functions'] },
        { name: 'Data Layer', items: ['PDO Database Wrapper', 'Prepared Statements', 'Query Functions'] },
        { name: 'Views', items: ['PHP Templates', 'TailwindCSS (CDN)', 'Chart.js (CDN)', 'Alpine.js (CDN)'] },
        { name: 'Security', items: ['CSRF Tokens', 'Session Management', 'Input Sanitization'] }
      ],
      dataFlow: `HTTP Request → index.php → Route Match → Controller Function → Model Function → PDO/MySQL → View Template → HTML Response`,
      external: ['TailwindCSS CDN', 'Chart.js CDN', 'Alpine.js CDN', 'MySQL Database']
    },
    database: {
      tables: [
        'users', 'surveys', 'questions', 'survey_questions',
        'participants', 'survey_sessions', 'responses',
        'settings', 'audit_log'
      ],
      relationships: 'Foreign key constraints with proper indexes'
    },
    apiEndpoints: [
      'GET/POST / - Public survey',
      'GET /login, /register - Auth',
      'GET /admin/* - Admin panel routes',
      'GET /researcher/* - Researcher dashboard'
    ],
    setup: {
      prerequisites: ['PHP 7.1+', 'MySQL 5.7+', 'cPanel/Apache'],
      steps: [
        'Upload all files to public_html',
        'Create MySQL database',
        'Import database.sql',
        'Run php database_migration.php',
        'Configure config.php with credentials'
      ]
    },
    challenges: [
      'Zero-dependency constraint',
      'Single-file routing implementation',
      'Security in procedural PHP'
    ]
  },
  {
    id: 5,
    name: 'Brand API',
    shortName: 'Brand API',
    description: 'Brand submission and management REST API with admin dashboard for form and submission handling.',
    fullDescription: `REST API for brand submission and management system. Handles brand registration requests with admin approval workflow and submission tracking.

Built on legacy CodeIgniter 3 - demonstrates ability to work with older codebases and maintain legacy systems.`,
    tech: ['CodeIgniter 3', 'MySQL'],
    status: 'Completed',
    github: null,
    live: null,
    features: [
      'REST API for brand form submissions',
      'Admin dashboard for management',
      'Submission tracking and status updates',
      'Brand data validation',
      'Basic authentication'
    ],
    architecture: {
      overview: `CodeIgniter 3 classic MVC pattern, RESTful API routes, MySQL database, server-side rendered admin views with Bootstrap, basic session authentication.`,
      layers: [
        { name: 'Views', items: ['Bootstrap 3/4 Admin Template', 'Form Pages', 'Dashboard'] },
        { name: 'Controllers', items: ['REST Controller (API)', 'Admin Controller', 'Public Controller'] },
        { name: 'Models', items: ['Active Record Pattern', 'Basic CRUD Operations'] },
        { name: 'Libraries', items: ['Form Validation', 'Email', 'Session'] },
        { name: 'Database', items: ['MySQL', '3 Tables', 'Simple Joins'] }
      ],
      dataFlow: `HTTP Request → Router → Controller → Model (Active Record) → MySQL → View/API Response`,
      external: ['MySQL Database', 'PHP Sessions']
    },
    database: {
      tables: ['brands', 'submissions', 'users'],
      relationships: 'Simple foreign key relationships'
    },
    apiEndpoints: [
      'GET/POST /api/brands',
      'GET/POST /api/submissions',
      'GET /admin/dashboard'
    ],
    setup: {
      prerequisites: ['PHP 5.6+', 'MySQL'],
      steps: [
        'Upload to web server',
        'Configure database.php',
        'Import database.sql',
        'Access via browser'
      ]
    },
    challenges: [
      'Working with legacy CI3 codebase',
      'Security hardening on older PHP'
    ]
  }
]

export const getProjectById = (id) => projects.find(p => p.id === id)
export const getNextProject = (id) => {
  const idx = projects.findIndex(p => p.id === id)
  return projects[(idx + 1) % projects.length]
}
export const getPrevProject = (id) => {
  const idx = projects.findIndex(p => p.id === id)
  return projects[(idx - 1 + projects.length) % projects.length]
}
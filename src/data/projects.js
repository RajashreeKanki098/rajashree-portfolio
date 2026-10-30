// Central project data source.
import dis from '../assets/dis.png'
import disAdmin from '../assets/dis_admin.png'
import metl from '../assets/metl.png'
import grobig from '../assets/grobig.png'
import devnar from '../assets/devnar.png'
import pressclub from '../assets/pressclub.png'
// import sajdhaj from '../assets/sajdhaj.png'   // add when you have the file
import bssf from '../assets/bssf.png'


export const projects = [
  {
    id: 'wrddl',
    slug: 'wrddl-portal',
    name: 'WRDDL: Western Regional Disease Diagnostic Laboratory Portal',
    shortName: 'WRDDL',
    type: 'Government Web Portal + Admin CMS (Trilingual)',
    tags: ['Government Portal', 'Admin CMS', 'Trilingual'],
    status: 'Completed, awaiting deployment',
    featured: true,
    overview:
      "A full-stack web portal for the Bharat Ratna Atal Bihari Vajpayee Western Regional Disease Diagnostic Laboratory (WRDDL), a diagnostic facility under the Ministry of Agriculture and Farmers Welfare, Government of India. The portal serves livestock and poultry farmers and veterinarians in western India, presenting the laboratory's services, research and public disclosures in English, Marathi and Hindi.",
    businessProblem:
      'The laboratory needed an official digital presence where farmers and veterinarians could find diagnostic services, recent sample information, research output and statutory disclosures in their own language. Lab staff also needed to update content without developer involvement.',
    solution:
      'A public-facing portal with a separate admin panel. Staff manage content as structured data in the admin panel, and every change is reflected on the public site, which runs in English, Marathi and Hindi.',
    myContribution: [
      'UI/UX design for the public portal and the admin panel',
      'Frontend and backend development, including APIs and data models',
      'Trilingual support (English, Marathi, Hindi) across all content',
      'Admin CMS where data entered drives the public site',
      'E-services, RTI/RTS and committee sections structured for government disclosure needs',
    ],
    features: [
      {
        group: 'Public Portal',
        items: [
          'Lab facilities and services',
          'Projects and events',
          'Recent samples',
          'Research and analysis',
          'Sidebar navigation across all sections',
        ],
      },
      {
        group: 'E-Services & Compliance',
        items: [
          'E-services for sample submission',
          'RTI (Right to Information)',
          'RTS (Right to Services)',
          'Vishakha Committee and other committees',
        ],
      },
      {
        group: 'Admin Panel',
        items: [
          'Add, edit and delete content records',
          'Changes reflect on the public site',
          'Manage projects, events, samples and research',
          'Manage committee and disclosure pages',
        ],
      },
      {
        group: 'Multilingual',
        items: ['English', 'Marathi (मराठी)', 'Hindi (हिंदी)', 'Per-language content managed from admin'],
      },
    ],
    screenshots: [
      { src: dis, caption: 'Public portal' },
      { src: disAdmin, caption: 'Admin panel: content changes reflect on the public site' },
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'REST APIs'], // replace with your actual stack
    links: { website: null, app: null, reference: null }, // no public link, by design
    note: 'Built and approved; the live URL is not shown because the site is pending deployment on the official government domain.',
    role: 'Full Stack Developer: UI/UX, frontend, backend, multilingual CMS',
  },
  {
    id: 'metl',
    slug: 'metl-erp',
    name: 'Mohammed Enterprises Tanzania (METL)',
    shortName: 'METL ERP',
    type: 'Enterprise ERP',
    tags: ['Enterprise ERP', 'Multi-Branch', 'Automotive Garage Management'],
    status: 'Production',
    featured: true,
    overview:
      'A large enterprise ERP built for an organization running automotive garage operations across multiple branches. The system manages inventory, purchasing, sales, customers, reporting and day-to-day business workflows for every branch from a single platform.',
    businessProblem:
      'A multi-branch operation needed one system to track inventory, purchases and sales consistently across locations, with staff only able to see and act on the branches and modules relevant to their role.',
    solution:
      'A role- and permission-based ERP where inventory, purchasing and sales workflows are standardized across branches, with dedicated reporting to give visibility into stock, sales and business performance at branch and organization level.',
    myContribution: [
      'Enterprise application architecture and module development',
      'Inventory workflows: stock IN/OUT, stock ledger, GRN, return orders, indent',
      'Purchasing workflows: purchase orders, GRN, supplier operations',
      'Sales workflows: sales invoicing, customer management, follow-ups',
      'Multi-branch role, permission and access control system',
      'Business reporting: stock, inventory, sales, ABC analysis, FMS analysis',
    ],
    features: [
      { group: 'Inventory', items: ['Stock management', 'Stock IN / Stock OUT', 'Stock ledger', 'GRN', 'Return orders', 'Indent'] },
      { group: 'Purchasing', items: ['Purchase orders', 'GRN', 'Supplier operations'] },
      { group: 'Sales', items: ['Sales invoicing', 'Customer management', 'Follow-ups'] },
      { group: 'Reporting', items: ['Stock reports', 'Inventory reports', 'Sales reports', 'ABC analysis', 'FMS analysis'] },
      { group: 'Access Control', items: ['Role-based access', 'Permission management', 'Branch-level access'] },
    ],
    screenshots: [
      { src: metl, caption: 'Inventory & stock management' },
    ],
    tech: ['Enterprise Web Application'],
    links: {
      website: null,
      app: null,
      // reference: {
      //   label: 'Organization reference',
      //   // url: 'https://www.legal500.com/gc-powerlist/africa-teams-2016/mohammed-enterprises-tanzania-metl-group/',
      // },
    },
    role: 'Full Stack Developer — enterprise module development, inventory & multi-branch systems',
  },
  {
    id: 'grobig',
    slug: 'grobig',
    name: 'Grobig',
    shortName: 'Grobig',
    type: 'SaaS + E-commerce + Delivery',
    tags: ['SaaS Platform', 'E-commerce', 'Delivery Management'],
    status: 'Production',
    featured: true,
    overview:
      'Grobig is a subscription-based SaaS platform where businesses sign up for monthly, quarterly or yearly plans to get their own admin panel and customer-facing application for running product and order operations end to end.',
    businessProblem:
      'Small and mid-size businesses needed an affordable, ready-to-use system to manage products, orders and deliveries without building their own software from scratch.',
    solution:
      'A multi-tenant SaaS product: businesses subscribe and manage products, stock, orders, customers and delivery from an admin panel, while their customers order through a dedicated customer application with OTP-verified order confirmation.',
    myContribution: [
      'Web application development on the admin side',
      'Backend and API integration with CodeIgniter/PHP',
      'Admin functionality for products, stock, orders and subscriptions',
    ],
    features: [
      { group: 'Admin Panel', items: ['Product management', 'Category management', 'Stock IN / Stock OUT', 'Order management', 'Customer management', 'Delivery management', 'Subscription management (monthly/quarterly/yearly)'] },
      { group: 'Customer App', items: ['Browse products', 'View product information', 'Place orders', 'Track orders'] },
      { group: 'Delivery System', items: ['Assign orders to delivery personnel', 'Accept / cancel orders', 'Complete deliveries', 'OTP-verified order confirmation'] },
    ],
    screenshots: [
      { src: grobig, caption: 'Admin panel: products, orders and subscriptions' },
    ],
    tech: ['React.js', 'CodeIgniter', 'PHP', 'MySQL', 'REST APIs'],
    links: {
      website: null,
      app: 'https://play.google.com/store/apps/details?id=com.advitsoft.customer&pcampaignid=web_share',
      reference: null,
    },
    role: 'Full Stack Developer — web application, backend/API integration, admin functionality',
  },
  {
    id: 'devnar',
    slug: 'devnar-foundation',
    name: 'Devnar Foundation for the Blind',
    shortName: 'Devnar Foundation',
    type: 'NGO Platform + PWA + Donations',
    tags: ['PWA', 'Donation Platform', 'Inventory Management'],
    status: 'Production',
    featured: true,
    overview:
      'A digital platform for Devnar Foundation for the Blind covering a public PWA/website, an online + on-site donation system, and an admin panel for managing inventory, students, staff and content.',
    businessProblem:
      'The foundation needed a way to share its work publicly, accept donations both online and from physical visitors, and keep track of food/asset inventory and student and staff records in one place.',
    solution:
      'A PWA and website for the public to learn about the organization and donate online, backed by an admin panel that manages inventory, donation records, registrations and content — including offline donation entry for on-site visitors, with receipts issued immediately.',
    myContribution: [
      'React frontend and PWA development',
      'CodeIgniter backend and admin panel development',
      'API development and business logic',
    ],
    features: [
      { group: 'Public App / Website', items: ['Organization stories', 'Events', 'Gallery (images & videos)', 'Banners', 'Organization information'] },
      { group: 'Donations', items: ['Food donations', 'Student sponsorship', 'Sponsorship donations', 'Asset donations', 'Digital receipt on successful payment', 'Offline / on-site donation entry with immediate receipt'] },
      { group: 'Admin Panel', items: ['Inventory management', 'Food IN / Food OUT', 'Stock ledger', 'Inventory reports', 'Donation summary', 'Student registration', 'Staff registration', 'Website & app content management', 'Donation entries'] },
    ],
    screenshots: [
      { src: devnar, caption: 'Donation flow & admin panel' },
    ],

    tech: ['React.js', 'CodeIgniter', 'PHP', 'PWA', 'REST APIs'],
    links: {
      website: 'https://devnarfoundationfortheblind.org/',
      app: 'https://play.google.com/store/apps/details?id=com.advitsoftware.devnar&pcampaignid=web_share',
      reference: null,
    },
    role: 'Full Stack Developer — React frontend/PWA, CodeIgniter backend/admin panel, APIs',
  },
  {
    id: 'pressclub',
    slug: 'press-club-hyderabad',
    name: 'Press Club Hyderabad',
    shortName: 'Press Club Hyderabad',
    type: 'PWA + Admin Management System',
    tags: ['PWA', 'Membership', 'Content Management'],
    status: 'Production',
    featured: false,
    overview:
      'A digital application for Press Club Hyderabad members and visitors to access club information, events, news and membership details, backed by an admin panel for content management.',
    businessProblem:
      'Club members and visitors needed a single place to check club activities, facilities and membership information instead of relying on in-person or informal channels.',
    solution:
      'A PWA covering login, gallery, events, news and hall/membership information, with an admin panel that lets club staff manage the content shown in the app.',
    myContribution: [
      'Application and web functionality development',
      'Admin-side management system development',
    ],
    features: [
      { group: 'Application', items: ['Login', 'Canteen menu', 'Photo gallery', 'Video gallery', 'Events', 'News', 'Hall information', 'Upcoming events', 'Membership information'] },
      { group: 'Admin Panel', items: ['Content management for app information'] },
    ],
    screenshots: [
      { src: pressclub, caption: 'Member app & content management' },
    ],
    tech: ['React.js', 'CodeIgniter', 'PHP', 'REST APIs'],
    links: {
      website: 'https://pressclubhyderabad.com/',
      app: 'https://play.google.com/store/apps/details?id=com.pressclub&pcampaignid=web_share',
      reference: null,
    },
    role: 'Full Stack Developer — application/web functionality, admin management system',
  },
  {
    id: 'sajdhaj',
    slug: 'sajdhaj-creations',
    name: 'Sajdhaj Creations',
    shortName: 'Sajdhaj Creations',
    type: "Women's Fashion E-commerce",
    tags: ['E-commerce', 'PWA'],
    status: 'Production',
    featured: false,
    overview:
      "An e-commerce platform for a women's clothing business, covering product browsing and ordering through both a website and a PWA, backed by store management on the backend.",
    businessProblem:
      'The business needed an online storefront where customers could browse and purchase products, accessible as both a website and an installable app-like experience.',
    solution:
      'A Laravel-backed e-commerce platform with a PWA and website for product browsing and purchases, and backend functionality for managing the store.',
    myContribution: [
      'Web/PWA development',
      'Backend functionality development',
    ],
    features: [
      { group: 'Storefront', items: ['Product browsing', 'E-commerce functionality (browsing & ordering)', 'PWA (installable, app-like experience)'] },
      { group: 'Backend', items: ['Store/backend management'] },
    ],
    tech: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'PWA'],
    links: {
      website: '[ADD WEBSITE URL]',
      app: 'https://play.google.com/store/apps/details?id=com.sajdhajcreations&pcampaignid=web_share',
      reference: null,
    },
    role: 'Full Stack Developer — web/PWA and backend functionality',
  },
  {
    id: 'bssf',
    slug: 'bssf-global',
    name: 'BSSF Global',
    shortName: 'BSSF Global',
    type: 'Website + Donation Platform + API Integration',
    tags: ['Donation Platform', 'Payment Integration', 'API Development'],
    status: 'Production',
    featured: false,
    overview:
      'A website and API integration project: a PHP website with a donation page and PhonePe payment integration, plus a set of APIs consumed by a separate Node.js application/integration.',
    businessProblem:
      'The organization needed a public website with online donation and payment capability, along with APIs so its mobile application could integrate with the same backend.',
    solution:
      'A PHP-built website with donation and PhonePe payment integration, alongside REST APIs developed for consumption by the Node.js application layer, plus admin and content management functionality.',
    myContribution: [
      'Developed the website using PHP',
      'Developed the APIs',
      'Integrated donation functionality',
      'Integrated PhonePe payment',
      'Built/administered frontend content management functionality',
    ],
    features: [
      { group: 'Website', items: ['Donation page', 'PhonePe payment integration'] },
      { group: 'APIs', items: ['API development for application/backend integration (consumed via Node.js)'] },
      { group: 'Admin', items: ['Admin management', 'Frontend content management'] },
    ],
    screenshots: [
      { src: bssf, caption: 'Donation page with PhonePe integration' },
    ],
    tech: ['PHP', 'Node.js', 'REST APIs', 'PhonePe'],
    links: {
      website: 'https://bssfglobal.org/',
      app: 'https://play.google.com/store/apps/details?id=com.bssf&pcampaignid=web_share',
      reference: null,
    },
    role: 'Full Stack Developer — website, APIs, payment integration, admin/content management',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const moreProjects = projects.filter((p) => !p.featured)
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)

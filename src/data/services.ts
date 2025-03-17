export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  technicalHighlights: string[];
  businessValue: string[];
  image: string;
}

const services: Service[] = [
  {
    id: "legacy-modernization",
    title: "AI-Enabled Legacy System Modernization",
    shortDescription: "Transform aging infrastructure into cloud-based, AI-ready ecosystem",
    fullDescription: "Outdated IT systems can hold your business back, making it difficult to adopt new AI-driven solutions. Our AI-Enabled Legacy System Modernization service helps enterprises in manufacturing, finance, and retail transform their aging infrastructure into a cloud-based, AI-ready ecosystem. We seamlessly migrate and refactor legacy applications onto modern cloud platforms, enabling you to integrate advanced AI and data analytics capabilities without disrupting your current operations.",
    icon: "server",
    image: "/images/legacy-modernization.jpg",
    technicalHighlights: [
      "Cloud Migration & Automation: We leverage leading cloud platforms (AWS, Azure, GCP) and infrastructure-as-code to re-host or refactor your legacy systems for scalability and flexibility.",
      "API Integration & Interoperability: Robust APIs and microservices bridge your legacy applications with new AI modules and external services, ensuring seamless data flow across systems.",
      "Data Pipelines & Real-Time Analytics: Modern ETL pipelines and real-time data streams allow legacy data to feed into AI models instantly, empowering smarter decision-making with up-to-the-minute insights."
    ],
    businessValue: [
      "Seamless AI Integration: Integrate new AI capabilities into your operations quickly, without a complete system overhaul or business disruption.",
      "Reduced Operational Costs: Cut maintenance expenses associated with outdated hardware and software by moving to efficient, cloud-based services.",
      "Accelerated Innovation: Free your teams from legacy constraints, enabling faster deployment of new features and AI-driven products.",
      "Improved Scalability & Efficiency: Modern cloud architecture scales on demand and optimizes resource use, so your systems handle growth and peak loads with ease."
    ]
  },
  {
    id: "applied-ml-mlops",
    title: "Applied Machine Learning and MLOps",
    shortDescription: "Build robust pipelines to deploy, monitor, and scale ML models",
    fullDescription: "Turning a promising machine learning prototype into a reliable production system is challenging. Our Applied Machine Learning and MLOps service helps companies in technology, retail, and finance build robust pipelines to deploy, monitor, and scale ML models — from predictive analytics to the latest generative AI — in real-world environments. We ensure that your data science innovations make it out of the lab and deliver value continuously, even as your data and usage grow.",
    icon: "brain",
    image: "/images/mlops.jpg",
    technicalHighlights: [
      "End-to-End MLOps Pipeline: We design CI/CD workflows tailored for ML, automating everything from model training and validation to deployment and updates.",
      "Containerization & Orchestration: Using Docker and Kubernetes, we containerize ML models and orchestrate them on scalable cloud infrastructure for consistent performance at any load.",
      "Model Monitoring & Management: Once deployed, models are continuously monitored for drift and accuracy. We implement logging, automated retraining triggers, and performance dashboards to keep models reliable.",
      "Data Engineering for ML: Our team sets up data pipelines and feature stores to ensure that production models always have access to the right, high-quality data in real time."
    ],
    businessValue: [
      "Rapid Deployment: Shrink the time from ML prototype to production, allowing your business to start reaping AI benefits sooner.",
      "High Reliability: Robust MLOps practices reduce failures and outages, so your AI-driven features work consistently for users and customers.",
      "Scalability: Systems are built to scale with growing data volumes and traffic, whether you are serving a handful of users or millions.",
      "Continuous Improvement: With automated model updates and monitoring, your AI solutions stay up-to-date and continuously improve, driving ongoing business impact."
    ]
  },
  {
    id: "cost-efficient-ai",
    title: "Cost-Efficient AI Infrastructure",
    shortDescription: "Optimize your cloud environment for large-scale AI workloads",
    fullDescription: "Managing AI workloads at scale can become costly and complex. Our Cost-Efficient AI Infrastructure service optimizes your cloud environment to run large-scale AI and data processing workloads economically. We help businesses in finance, healthcare, retail, and technology deploy AI solutions on the cloud with a focus on cost savings and resource efficiency, without sacrificing performance.",
    icon: "chart-line",
    image: "/images/cost-efficient.jpg",
    technicalHighlights: [
      "Cloud Cost Optimization: We analyze and re-architect your AI workloads for cost efficiency—using the right mix of cloud services, tiered storage, and compute options (including spot instances and reserved instances) to minimize expenses.",
      "Serverless and Auto-Scaling Architectures: By leveraging serverless computing and auto-scaling clusters, we ensure you only pay for the compute power you need. Resources automatically scale up during heavy AI processing and scale down when not needed.",
      "Resource Monitoring & Management: Continuous monitoring of resource utilization helps catch inefficiencies. We implement smart scheduling, workload distribution, and routine cleanup of unused resources to prevent waste.",
      "Performance Tuning: Our experts fine-tune AI model inference and training environments (CPU/GPU configuration, memory management, parallel processing) so you achieve maximum performance per dollar spent."
    ],
    businessValue: [
      "Lower Operational Costs: Run complex AI and data pipelines without breaking the budget. Optimized use of cloud resources significantly reduces monthly infrastructure bills.",
      "Improved Resource Efficiency: Ensure every cloud instance, function, or database is utilized effectively. No more paying for idle servers or oversized clusters.",
      "Scalable & Sustainable Growth: A cost-efficient setup lets you scale your AI initiatives freely as demand grows, maintaining a sustainable cost structure.",
      "Focus on Innovation: With infrastructure costs under control, your team can invest more time and budget in developing new AI features and innovations instead of worrying about overhead."
    ]
  },
  {
    id: "recommendation-systems",
    title: "Personalized Recommendation Systems",
    shortDescription: "Boost engagement and sales with tailored content and product suggestions",
    fullDescription: "Generic or irrelevant recommendations often lead to a poor customer experience and missed revenue opportunities. Our Personalized Recommendation Systems service uses advanced AI to deliver tailored content and product suggestions to each customer, boosting engagement and sales. Perfect for retail and e-commerce companies, this solution analyzes customer behavior in real time to present the most relevant products, content, or offers, creating a highly individualized customer experience.",
    icon: "thumbs-up",
    image: "/images/recommendation.jpg",
    technicalHighlights: [
      "Customer Behavior Analytics: We collect and analyze user data (browsing patterns, purchase history, clicks) to build a deep understanding of each customer preferences and intent.",
      "Advanced Recommendation Algorithms: Using collaborative filtering, content-based filtering, and deep learning models, we create recommendation engines that predict what each user is most likely to be interested in.",
      "Real-Time Personalization: Our engineers develop real-time data pipelines and streaming systems that update recommendations instantly as user behavior evolves - for example, reacting to the very latest clicks or purchases.",
      "A/B Testing and Optimization: We implement experimentation frameworks to continually test and refine recommendation strategies, ensuring the recommendation engine is always learning which suggestions drive the best outcomes."
    ],
    businessValue: [
      "Higher Conversion Rates: Delivering relevant, personalized recommendations increases the likelihood that customers will purchase items or consume content that fits their needs.",
      "Enhanced Customer Engagement: Shoppers and users are more engaged when they discover products or content that genuinely interest them, leading to longer sessions and more frequent returns.",
      "Increased Customer Loyalty: By showing customers you understand their preferences, you build trust and loyalty. Satisfied customers are more likely to become repeat buyers and have higher lifetime value.",
      "Maximized Revenue Opportunities: Personalized recommendations boost upselling and cross-selling opportunities that generic approaches miss, translating into additional revenue streams."
    ]
  },
  {
    id: "intelligent-process-automation",
    title: "Intelligent Process Automation (IPA)",
    shortDescription: "Streamline routine workflows with RPA and AI-driven intelligence",
    fullDescription: "Repetitive manual processes and paperwork can slow your business down and introduce errors. Our Intelligent Process Automation service streamlines routine workflows by combining robotic process automation with AI-driven intelligence. We help finance, insurance, healthcare, and manufacturing organizations automate tasks like document processing, data entry, and approvals, so you can achieve operational excellence with fewer manual hours.",
    icon: "robot",
    image: "/images/ipa.jpg",
    technicalHighlights: [
      "Robotic Process Automation (RPA): We build software bots that can replicate tedious human tasks in legacy and modern applications - from copying data between systems to performing rule-based transactions - with speed and precision.",
      "AI-Powered Document Processing: Using Optical Character Recognition (OCR) and Natural Language Processing (NLP), we enable the automation of document-heavy tasks. The system can read invoices, forms, or emails, extract key information, and input it into your databases or workflows automatically.",
      "Automated Decision Models: Our team implements AI models that make routine decisions (such as approving a loan application based on set criteria or flagging anomalies) to further automate your processes. These models learn from historical data to improve decision accuracy over time.",
      "End-to-End Workflow Orchestration: We integrate bots and AI models into cohesive workflows using orchestration tools. From start to finish, processes can run with minimal human intervention, while providing audit trails and alerts for exceptions."
    ],
    businessValue: [
      "Operational Efficiency: Tasks that once took hours or days are completed in minutes. Automation accelerates process throughput, letting your business handle more volume without additional headcount.",
      "Reduced Errors: Automated workflows perform tasks consistently and eliminate common errors caused by manual data entry or oversight, improving overall quality and compliance.",
      "Cost Savings: By automating high-volume repetitive tasks, you significantly reduce labor costs and operational overhead.",
      "Employee Productivity: Your staff is freed from drudge work and can focus on higher-value activities like strategy, creative problem-solving, and customer engagement, driving innovation and growth."
    ]
  }
];

export default services;
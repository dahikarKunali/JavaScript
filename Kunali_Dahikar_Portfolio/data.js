/* ===== EDIT YOUR CONTENT HERE — the website builds itself from this file ===== */
const DATA = {
  name: "Kunali Dahikar",
  roles: ["Full-Stack Developer", "AI & ML Enthusiast", "Cybersecurity Explorer", "Future Entrepreneur"],
  tagline: "Computer Science student at Symbiosis Institute of Technology, Nagpur — building secure, intelligent and user-friendly web experiences.",
  about: [
    "Hello! I am Kunali Dahikar, a passionate Computer Science Engineering student at Symbiosis Institute of Technology (SIT), Nagpur. I have a keen interest in software development, web technologies, and Artificial Intelligence.",
    "I enjoy exploring new technologies, solving challenging problems, and developing creative projects that combine innovation with practical applications. I am continuously improving my technical knowledge, programming skills and problem-solving abilities to prepare for a successful career in the technology industry."
  ],
  facts: [["🎓","College","Symbiosis Institute of Technology, Nagpur"],["💻","Branch","B.Tech — Computer Science & Engineering"],["📅","Semester","5th Semester"],["📍","Location","Nagpur, Maharashtra, India"]],
  links: { github: "https://github.com/dahikarKunali", linkedin: "https://www.linkedin.com/in/kunali-dahikar-906822320", hackerrank: "https://www.hackerrank.com/profile/kunalidahikar05", email: "kunalidahikar05@gmail.com", collegeEmail: "kunali.dahikar.batch2024@sitnagpur.siu.edu.in" },

  /* GPA marked calc:true = calculated from the listed subjects (credit-weighted). */
  sems: [
    { n: 1, gpa: 7.19, calc: true, rows: [
      ["Programming in C",3,"6.00","8.00","7.20","B+"],["Programming in C Lab",1,"P 7.00","—","7.00","B+"],["Tinker Lab",2,"P 8.00","—","8.00","A"],
      ["Design Thinking and Creativity",1,"P 6.00","—","6.00","B"],["Environmental Science","—","—","—","Pass","P"],["Chemistry",3,"7.00","6.00","6.40","B"],
      ["Chemistry Lab",1,"P 10.00","—","10.00","O"],["Basic Electrical and Electronics Engg.",3,"8.00","6.00","6.80","B"],["Basic Electrical and Electronics Engg. Lab",1,"P 8.00","—","8.00","A"],["Engineering Graphics Lab",2,"P 7.00","—","7.00","B+"]] },
    { n: 2, gpa: 6.60, calc: true, rows: [
      ["Programming and Problem Solving",2,"7.00","5.00","5.80","C"],["Programming and Problem Solving Lab",1,"P 7.00","—","7.00","B+"],["Data Structures",3,"7.00","5.00","5.80","C"],
      ["Data Structures Lab",1,"P 6.00","—","6.00","B"],["Project Based Learning – I",2,"P 8.00","—","8.00","A"],["Health and Wellness Module I","—","—","—","Pass","P"],
      ["Physics for Computer Engineers",3,"6.00","6.00","6.00","B"],["Physics Lab",1,"P 8.00","—","8.00","A"],["Communication Skills",2,"9.00","7.00","7.80","B+"],
      ["Communication Skills Lab",1,"P 6.00","—","6.00","B"],["Statistics and Probability",3,"6.00","7.00","6.60","B"]] },
    { n: 3, gpa: 7.08, rows: [
      ["Discrete Mathematics and Graph Theory",4,"7.00","7.00","7.00","B+"],["Computer Organization",3,"7.00","7.00","7.00","B+"],["Design and Analysis of Algorithms",3,"6.00","7.00","6.60","B"],
      ["Design and Analysis of Algorithms Lab",1,"P 7.00","—","7.00","B+"],["Digital Electronics and Logic Design",3,"7.00","7.00","7.00","B+"],["Digital Electronics and Logic Design Lab",1,"P 7.00","—","7.00","B+"],
      ["Entrepreneurship Venture",1,"9.00","—","9.00","A+"],["Project Management and Agile Methodology",3,"7.00","—","7.00","B+"],["Project Based Learning – II",2,"P 8.00","—","8.00","A"],
      ["Foundation of Ethics",1,"6.00","—","6.00","B"],["Health and Wellness Module II","—","—","—","Pass","P"]] },
    { n: 4, gpa: 7.15, rows: [
      ["Microcontrollers and Embedded Systems",3,"8.00","10.00","9.20","A+"],["Microcontrollers and Embedded Systems Lab",1,"P 8.00","—","8.00","A"],["Java",3,"7.00","—","7.00","B+"],
      ["Database Management Systems",3,"5.00","6.00","5.60","C"],["Database Management Systems Lab",2,"P 7.00","—","7.00","B+"],["Operating Systems",3,"8.00","8.00","8.00","A"],
      ["Operating Systems Lab",1,"P 8.00","—","8.00","A"],["Project Based Learning – III",2,"P 6.00","—","6.00","B"],["Theory of Computation",3,"7.00","6.00","6.40","B"],
      ["Vasudhaiva Kutumbakam",2,"7.00","—","7.00","B+"],["Basic French I","—","—","—","Pass","P"]] }
  ],

  skills: {
    bars: [["HTML / CSS",85],["Python",80],["JavaScript",75],["Git & GitHub",75],["Node.js / Express",70],["C Programming",70],["AI / Machine Learning",68],["Java",65],["MongoDB",65],["React.js",60]],
    groups: [
      ["🌐 Web Development", ["HTML5","CSS3","JavaScript","React.js","Tailwind CSS","Node.js","Express.js","REST APIs","FastAPI","Gradio"]],
      ["🤖 AI & Machine Learning", ["ModernBERT","CatBoost","SHAP (Explainable AI)","Groq API / LLMs","Plotly","Model Evaluation","Data Analysis"]],
      ["🔐 Cybersecurity", ["Phishing Detection","Malicious URL Analysis","Explainable AI","Chrome Extension (MV3)","PhishTank"]],
      ["⛓️ Blockchain", ["Solidity","Ethereum","IPFS","Web3.js","MetaMask","Smart Contracts"]],
      ["🛠️ Tools & Platforms", ["Git","GitHub","Postman","Vercel","MongoDB","Red Hat Ansible"]],
      ["🤝 Soft Skills", ["Problem-solving","Adaptability","Teamwork","Communication","Event Management","Anchoring","Continuous Learning"]]
    ],
    coursework: ["Programming in C","Java","Data Structures","Design & Analysis of Algorithms","Database Management Systems","Operating Systems","Computer Organization","Microcontrollers & Embedded Systems","Digital Electronics & Logic Design","Discrete Mathematics & Graph Theory","Theory of Computation","Statistics & Probability","Project Management & Agile","Entrepreneurship Venture","Project Based Learning I–III"]
  },

  projects: [
    { t: "Explainable AI-Based Phishing Email & Fake Website Detection", cat: ["AI / ML","Cybersecurity"], icon: "🛡️", status: "Proposed system · Research",
      d: "An AI-powered cybersecurity system to identify phishing emails, malicious URLs and fraudulent government websites. It combines ModernBERT email analysis with CatBoost URL classification, government-domain verification and SHAP-based Explainable AI to give understandable reasons behind every warning. A Chrome extension and FastAPI backend deliver risk scores, suspicious-feature explanations and safety tips.",
      f: ["Context-aware phishing email detection","Malicious URL & fake government site identification","Government-domain similarity checks + PhishTank","Combined email + URL risk assessment","Explainable predictions using SHAP","Browser alerts with risk scores and safety tips"],
      tech: ["Python","ModernBERT","CatBoost","SHAP","FastAPI","JavaScript","Chrome Extension MV3","Plasmo","PhishTank"], links: [] },
    { t: "FLEXI Student Analyzer", cat: ["AI / ML","Web"], icon: "📊", status: "Live · Deployed on Vercel",
      d: "A GUI-based, AI-powered student performance analysis agent that brings academic scores, attendance, weekly tests, internships and certifications into one interactive dashboard. It visualises performance with graphs, finds strong and weak subjects and uses an LLM through the Groq API to write personalised, readable analysis.",
      f: ["Multiple student profiles (by PRN) with save/load","Performance visualisation across six subjects","5-week GD, Aptitude & Technical trend analysis","Internship and certification tracking","AI-generated strengths, weaknesses & risk indicators","JSON-based student data storage"],
      tech: ["Python","Gradio","Groq API","gpt-oss-120b","Plotly","FastAPI","Uvicorn","Git","Vercel"], links: [["GitHub","https://github.com/dahikarKunali/FLEXI_SEM5"],["Live Demo","https://flexi-sem-5.vercel.app/"]] },
    { t: "SymbiDoc — Blockchain Academic Credential System", cat: ["Blockchain","Web"], icon: "⛓️", status: "Live demo",
      d: "A blockchain-based academic credential management system to securely issue, store and verify academic documents. Smart contracts improve integrity and transparency while IPFS provides decentralised storage for credentials.",
      f: ["Secure credential issuance & verification","Tamper-resistant blockchain records","Decentralised storage using IPFS","Smart contract integration","MetaMask wallet connectivity","User-friendly web interface"],
      tech: ["React.js","Tailwind CSS","Solidity","Ethereum","IPFS","MetaMask","Web3.js"], links: [["Live Demo","https://symbidocs-blockchain-docu-979.created.app"]] },
    { t: "Bhashini — AI-Powered Language Platform", cat: ["Web","AI / ML"], icon: "🗣️", status: "Live demo",
      d: "A web-based project focused on language technology, making language-related services accessible through a simple, interactive and responsive website.",
      f: ["User-friendly web interface","Interactive website design","Accessible language-related services","Responsive, easy-to-navigate layout"],
      tech: ["Web Development","Language Technology"], links: [["Live Demo","https://bhashini-xi.vercel.app/"]] }
  ],

  internship: {
    role: "Software Development Intern", org: "Blowhot Kitchen Appliances Pvt. Ltd.", place: "Indore, Madhya Pradesh", when: "1 June 2026 – 30 June 2026", guide: "Ms. Shikha Gade", cert: "assets/img/cert-internship.jpg",
    points: ["Developed and tested RESTful APIs using Node.js and Express.js","Implemented CRUD operations and integrated MongoDB for data management","Built user authentication, password protection and protected routes","Connected backend to HTML, CSS & JavaScript frontend components","Tested APIs with Postman; added input validation and error handling","Used Git & GitHub for version control; debugging, integration testing and documentation"],
    tech: ["HTML","CSS","JavaScript","Node.js","Express.js","MongoDB","Postman","Git","GitHub"],
    learn: "Hands-on experience with the software development lifecycle, REST API architecture, database operations, authentication, debugging and collaborative development."
  },

  certs: [
    { t: "Software Development Internship Certificate", o: "Blowhot Kitchen Appliances Pvt. Ltd.", d: "June 2026", i: "cert-internship", k: "Internship" },
    { t: "Certificate of Achievement — Event Manager, ACM", o: "Students' Representative Council, SIT Nagpur · Session 2025–26", d: "2025–26", i: "cert-acm-src", k: "Achievement" },
    { t: "Certificate of Appreciation — ACM Student Chapter", o: "ACM Student Chapter, SIT Nagpur", d: "", i: "cert-acm", k: "Achievement" },
    { t: "Certificate of Appreciation — CodeSprint 2.0", o: "Enthusia 5.0 · Symbiosis Institute of Technology, Nagpur", d: "26–28 Feb 2026", i: "cert-codesprint", k: "Achievement" },
    { t: "Certificate of Appreciation — SITank 2.0 (Boardroom Battle)", o: "Enthusia 5.0 · Symbiosis Institute of Technology, Nagpur", d: "26–28 Feb 2026", i: "cert-sitank", k: "Achievement" },
    { t: "Network Automation with Red Hat Ansible Automation Platform (DO457)", o: "Red Hat · Certificate of Attendance · 32 credit hours", d: "25 July 2026", i: "cert-redhat", k: "Course" },
    { t: "Mastering Agentic AI: From Prompt to Protocols to Production", o: "Udemy · Instructor: Vinit Singh · 38 total hours", d: "25 July 2026", i: "cert-udemy", k: "Course" },
    { t: "Rival Rumble — Sports Day", o: "Enthusia 5.0 · SIT Nagpur", d: "2026", i: "rival-day", k: "Moment" }
  ],

  contrib: [
    ["🏛️","Leadership", ["SRC Member (Event Manager – ACM, Students' Representative Council)"]],
    ["💡","Technical Events", ["ICSIT 2026","CodeSprint 2025","CodeSprint 2026","Spin the Wheel","Placement Drive","Hide & Seek","Innovation Ignition"]],
    ["🎭","Cultural Events", ["Aagman 2024","Aagman 2025","Enthusia 2025","Skit Play","Anchoring on Stage","Farewell of 2025 Batch"]],
    ["🌱","Social Service", ["Ganpati Visarjan Cleanliness Drive","NGO Visit"]],
    ["🏅","Sports", ["SportsSpectra 2.0","SportsSpectra 3.0","Rival Rumble 2026"]]
  ],

  gallery: [
    ["src","SRC — Students' Representative Council","Leadership"],["icsit1","ICSIT 2026","Technical"],["icsit2","ICSIT 2026","Technical"],["icsit3","ICSIT 2026 — the team","Technical"],["icsit4","ICSIT 2026","Technical"],
    ["cs25","CodeSprint 2025","Technical"],["cs26","CodeSprint 2026","Technical"],["spin1","Spin the Wheel","Technical"],["spin2","Spin the Wheel","Technical"],["placement","Placement Drive","Technical"],
    ["hide","Hide & Seek","Technical"],["innov","Innovation Ignition","Technical"],["aagman24","Aagman 2024","Cultural"],["aagman25","Aagman 2025","Cultural"],["enthusia25","Enthusia 2025","Cultural"],
    ["skit","Skit Play","Cultural"],["anchor","Anchoring on Stage","Cultural"],["farewell","Farewell of 2025 Batch","Cultural"],["ganpati","Ganpati Visarjan Cleanliness Drive","Social"],["ngo","NGO Visit","Social"],
    ["ss2","SportsSpectra 2.0","Sports"],["ss3","SportsSpectra 3.0","Sports"],["rr26","Rival Rumble 2026","Sports"],["rival-day","Rival Rumble — Sports Day","Sports"]
  ],

  career: {
    interests: "Software development, Artificial Intelligence, Machine Learning and Cybersecurity. I love building innovative, user-friendly and secure applications that solve real-world problems — exploring emerging technologies, developing web apps, working with data and creating AI-powered solutions.",
    goals: "To become a skilled software developer with strong expertise in full-stack development, AI/ML and cybersecurity — strengthening my knowledge through practical projects, internships and continuous learning. I also aspire to develop entrepreneurial skills and eventually build innovative products or start my own business.",
    tags: ["Full-Stack Development","AI / ML","Cybersecurity","Entrepreneurship"]
  }
};

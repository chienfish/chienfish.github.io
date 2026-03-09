export const projects = [
  {
    id: "rtb-platform",
    title: "Real-Time Bidding",
    category: "Backend / Cloud",
    desc: "A high-concurrency bidding platform built with FastAPI, PostgreSQL, Docker, and AWS.",
    image: "/projects/rtb.png",
    tags: ["FastAPI", "PostgreSQL", "Docker", "AWS", "k6"],
    highlights: [
      "Designed RESTful APIs and transaction-safe bidding logic in PostgreSQL for consistent concurrent processing.",
      "Containerized services with Docker and deployed on AWS ECS; used k6 to evaluate latency and scalability.",
    ],
    links: {
      github: "https://github.com/chienfish/real-time-bidding",
      demo: "https://www.youtube.com/watch?v=0Z4C9YdffBY&feature=youtu.be",
    },
  },
  {
    id: "distributed-storage",
    title: "Kademlia Distributed File System",
    category: "Distributed Systems",
    desc: "A distributed file storage system built on Kademlia DHT with replication and fault tolerance.",
    image: "/projects/kademlia.png",
    tags: ["Python", "AWS", "Distributed Systems"],
    highlights: [
      "Implemented Kademlia-based routing and lookup for scalable peer-to-peer file discovery.",
      "Designed chunking and replica storage to improve reliability and fault tolerance.",
    ],
    links: {
      github: "https://github.com/chienfish/kademlia-distributed-file-system",
    },
  },
  {
    id: "book-radar",
    title: "BookRadar",
    category: "Full-Stack",
    desc: "A full-stack book discovery platform with a RESTful API backend and React frontend.",
    image: "/projects/bookradar.png",
    tags: ["Django", "React", "TypeScript", "JWT"],
    highlights: [
      "Built RESTful APIs with Django REST Framework and implemented JWT authentication.",
      "Developed a React + TypeScript frontend supporting responsive and scalable access.",
    ],
    links: {
      github: "https://github.com/chienfish/BookRadar",
      demo: "https://www.youtube.com/watch?v=HyxhJ6mfm_Q&feature=youtu.be",
    },
  },
  {
    id: "epoxy-light",
    title: "EpoxyLight",
    category: "Cross-Database Transaction",
    desc: "A lightweight cross-database transaction coordinator implementing a simplified Two-Phase Commit (2PC) protocol.",
    image: "/projects/epoxylight.png",
    tags: ["Python", "Flask", "MySQL", "MongoDB"],
    highlights: [
      "Built a Flask coordinator for distributed transactions across MySQL and MongoDB.",
      "Implemented a 2PC workflow with logging and rollback to ensure atomic operations.",
    ],
    links: {
      github: "https://github.com/chienfish/EpoxyLight",
      demo: "https://www.youtube.com/watch?v=Di0-Dj4irCs",
    },
  },
  {
  id: "sign-language-translation",
  title: "Sign Language Translation System",
  category: "Computer Vision / AI",
  desc: "A deep learning system that translates sign language videos into natural language by extracting keypoints and modeling temporal gestures with LSTM.",
  image: "/projects/signlanguage.png",
  images: [
    "/projects/sign1.jpg",
    "/projects/sign2.jpg",
    "/projects/sign3.jpg"
  ],
  tags: ["Python", "Java", "MediaPipe", "OpenCV", "LSTM"],
  highlights: [
    "Extracted hand and body keypoints from sign language videos using MediaPipe and OpenCV.",
    "Trained a deep learning model to recognize sign language gestures, achieving around 85% accuracy.",
    "Integrated the trained model into a mobile application using Java for real-time translation.",
    "Generated coherent sentences from recognized sign language sequences for practical communication.",
  ],
  links: {
    github: "https://colab.research.google.com/drive/15_m1h0pvOvpN6_jL1DeoUEGSXZOOJz-S?usp=sharing",
    demo: "https://youtu.be/RPFT_uetA1Y",
  },
},
];
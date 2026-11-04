export type Lang = "fr" | "en";
type T = { fr: string; en: string };

export const links = {
  email: "maham8789@gmail.com",
  linkedin: "https://www.linkedin.com/in/maha-el-yamni/",
  github: "https://github.com/maha-yam",
  cv: "/cv/CV_Maha_El_Yamni.pdf",
};

export const ui = {
  nav: {
    about: { fr: "Profil", en: "About" },
    experience: { fr: "Expérience", en: "Experience" },
    projects: { fr: "Projets", en: "Projects" },
    skills: { fr: "Compétences", en: "Skills" },
    education: { fr: "Parcours", en: "Background" },
    contact: { fr: "Contact", en: "Contact" },
  },
  cv: { fr: "Télécharger le CV", en: "Download CV" },
  seeProjects: { fr: "Voir les projets", en: "See projects" },
  contactMe: { fr: "Me contacter", en: "Get in touch" },
  available: {
    fr: "Disponible pour un stage PFE de 6 mois à partir du 1er février 2027",
    en: "Available for a 6-month final-year internship from February 1, 2027",
  },
  role: {
    fr: "Étudiante ingénieure en Intelligence Artificielle & Data Science",
    en: "AI & Data Science engineering student",
  },
  heroText: {
    fr: "Je conçois des systèmes d'IA qui transforment des documents et des données brutes en résultats fiables : agents LLM, vision par ordinateur et pipelines de données, de la donnée brute au déploiement.",
    en: "I build AI systems that turn raw documents and data into reliable results: LLM agents, computer vision and data pipelines, from raw data to deployment.",
  },
  pipelineTitle: {
    fr: "Mon dernier stage, en une animation",
    en: "My latest internship, in one animation",
  },
  sections: {
    about: { fr: "Profil", en: "About" },
    experience: { fr: "Expérience professionnelle", en: "Work experience" },
    projects: { fr: "Projets", en: "Projects" },
    skills: { fr: "Compétences techniques", en: "Technical skills" },
    education: { fr: "Formation & engagement", en: "Education & leadership" },
    contact: { fr: "Travaillons ensemble", en: "Let's work together" },
  },
  aboutText: {
    fr: "Étudiante en 5e année du cycle ingénieur Informatique & Réseaux à l'EMSI Rabat, spécialité IA & Data Science. Mon profil est orienté IA générative et systèmes multi-agents, deep learning, NLP, vision par ordinateur, Big Data et BI. J'aime les projets concrets où l'on mesure le résultat : temps gagné, précision, taux d'automatisation.",
    en: "5th-year Computer & Network Engineering student at EMSI Rabat, majoring in AI & Data Science. My focus is generative AI and multi-agent systems, deep learning, NLP, computer vision, Big Data and BI. I enjoy concrete projects where results are measured: time saved, accuracy, automation rate.",
  },
  details: { fr: "Voir le détail", en: "Show details" },
  hide: { fr: "Masquer", en: "Hide" },
  all: { fr: "Tous", en: "All" },
  code: { fr: "Voir le code", en: "View code" },
  confidential: { fr: "Code confidentiel", en: "Confidential code" },
  problem: { fr: "Problème", en: "Problem" },
  approach: { fr: "Approche", en: "Approach" },
  results: { fr: "Résultats", en: "Results" },
  stack: { fr: "Technologies", en: "Tech stack" },
  close: { fr: "Fermer", en: "Close" },
  contactText: {
    fr: "Je recherche un stage de fin d'études de 6 mois en IA générative, data science ou vision par ordinateur, à partir de février 2027. Le meilleur moyen de me joindre est l'email ou LinkedIn.",
    en: "I am looking for a 6-month final-year internship in generative AI, data science or computer vision, starting February 2027. Email or LinkedIn is the best way to reach me.",
  },
  copy: { fr: "Copier l'email", en: "Copy email" },
  copied: { fr: "Email copié", en: "Email copied" },
  languages: { fr: "Langues", en: "Languages" },
  langList: {
    fr: "Français (C1), Anglais (C1), Arabe (langue maternelle)",
    en: "French (C1), English (C1), Arabic (native)",
  },
  interests: { fr: "Centres d'intérêt", en: "Interests" },
  interestList: {
    fr: "Cinéma, hackathons, natation, vie associative, cultures étrangères",
    en: "Cinema, hackathons, swimming, student associations, foreign cultures",
  },
  footer: { fr: "Conçu et développé par Maha El Yamni", en: "Designed and built by Maha El Yamni" },
} satisfies Record<string, T | Record<string, T>>;

export const stats: { value: number; suffix: string; label: T }[] = [
  { value: 94, suffix: " %", label: { fr: "de normalisation automatique (DGI)", en: "automatic normalisation rate (DGI)" } },
  { value: 760, suffix: "", label: { fr: "lignes réelles normalisées à 100 %", en: "real rows normalised at 100%" } },
  { value: 93, suffix: " %", label: { fr: "de précision OCR (NARSA)", en: "OCR accuracy (NARSA)" } },
  { value: 30, suffix: "+", label: { fr: "membres dirigés chez Enactus", en: "members led at Enactus" } },
];

export const pipeline: T[] = [
  { fr: "Liasse fiscale", en: "Tax return" },
  { fr: "OCR + Document AI", en: "OCR + Document AI" },
  { fr: "Agents LLM (RAG)", en: "LLM agents (RAG)" },
  { fr: "Règles CGNC/CGI", en: "CGNC/CGI rules" },
  { fr: "Données normalisées", en: "Normalised data" },
];

export const experiences = [
  {
    period: { fr: "Juillet - Août 2026", en: "July - August 2026" },
    title: {
      fr: "Agents IA pour la normalisation sémantique de liasses fiscales",
      en: "AI agents for semantic normalisation of tax returns",
    },
    org: { fr: "Direction de Gestion des Impôts, Rabat", en: "Tax Management Directorate, Rabat" },
    summary: {
      fr: "Système multi-agents LangGraph qui normalise les états d'amortissement des liasses fiscales et les contrôle selon les normes CGNC/CGI.",
      en: "LangGraph multi-agent system that normalises depreciation statements from tax returns and checks them against CGNC/CGI standards.",
    },
    bullets: [
      {
        fr: "Pipeline complet : OCR, Document AI, normalisation par LLM, contrôle par règles métier, restitution.",
        en: "End-to-end pipeline: OCR, Document AI, LLM normalisation, business-rule checks, reporting.",
      },
      {
        fr: "Modèle de données normalisé, cahiers des charges fonctionnel et technique.",
        en: "Normalised data model, functional and technical specifications.",
      },
      {
        fr: "94 % de normalisation automatique sur le jeu de test et 100 % sur 760 lignes réelles, sans erreur d'exécution.",
        en: "94% automatic normalisation on the test set and 100% on 760 real rows, with no runtime errors.",
      },
    ],
    tags: ["LangGraph", "RAG", "ChromaDB", "Gemini", "Document AI", "OCR", "Python", "Pandas"],
  },
  {
    period: { fr: "Juillet 2025", en: "July 2025" },
    title: { fr: "Stage OCR, Computer Vision & Digitalisation", en: "OCR, Computer Vision & Digitisation internship" },
    org: { fr: "NARSA, Direction de la Sécurité Routière, Rabat", en: "NARSA, Road Safety Agency, Rabat" },
    summary: {
      fr: "Pipeline de digitalisation de documents administratifs scannés, de l'image à la base SQL.",
      en: "Digitisation pipeline for scanned administrative documents, from image to SQL database.",
    },
    bullets: [
      {
        fr: "Pré-traitement d'images, extraction de texte par OCR et structuration des données en base SQL.",
        en: "Image pre-processing, OCR text extraction and structuring of the data in a SQL database.",
      },
      {
        fr: "Précision moyenne de reconnaissance de 93 %, validation automatique correcte dans 87 % des cas.",
        en: "93% average recognition accuracy, correct automatic validation in 87% of cases.",
      },
      {
        fr: "Temps de traitement réduit de 8-10 minutes à moins de 2 minutes par document.",
        en: "Processing time cut from 8-10 minutes to under 2 minutes per document.",
      },
    ],
    tags: ["Python", "Tesseract", "OpenCV", "SQL", "Streamlit", "UML"],
  },
];

export type Category = "genai" | "vision" | "data" | "ml" | "dev";
export const categories: { id: Category; label: T }[] = [
  { id: "genai", label: { fr: "IA générative", en: "Generative AI" } },
  { id: "vision", label: { fr: "Vision", en: "Vision" } },
  { id: "data", label: { fr: "Data", en: "Data" } },
  { id: "ml", label: { fr: "Machine Learning", en: "Machine Learning" } },
  { id: "dev", label: { fr: "Développement", en: "Development" } },
];

export type Project = {
  slug: string;
  year: string;
  category: Category;
  featured?: boolean;
  title: T;
  short: T;
  problem: T;
  approach: T;
  results: T;
  tags: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "chatbot",
    year: "2026",
    category: "genai",
    featured: true,
    title: { fr: "Chatbot client simulé pour le recueil des besoins", en: "Simulated-client chatbot for requirements gathering" },
    short: {
      fr: "Un agent joue un client flou et contradictoire ; l'étudiant mène l'entretien et reçoit une évaluation objective.",
      en: "An agent plays a vague, contradictory client; the student runs the interview and gets an objective evaluation.",
    },
    problem: {
      fr: "Les étudiants ingénieurs apprennent rarement à recueillir des besoins face à un vrai client, qui oublie des contraintes ou se contredit.",
      en: "Engineering students rarely practise gathering requirements from a real client who forgets constraints or contradicts themselves.",
    },
    approach: {
      fr: "Agent conversationnel avec une fiche de besoins cachée et des personas (restaurateur, directeur d'école, PME) qui changent à chaque session. La cohérence du client est maintenue sur toute la conversation.",
      en: "Conversational agent with a hidden requirements sheet and personas (restaurant owner, school director, SME) that change every session. Client consistency is kept across the whole conversation.",
    },
    results: {
      fr: "À la fin, l'IA compare l'entretien à la fiche cachée : questions pertinentes, exigences oubliées, ambiguïtés non levées, puis un retour structuré.",
      en: "At the end, the AI compares the interview to the hidden sheet: relevant questions, missed requirements, unresolved ambiguities, then structured feedback.",
    },
    tags: ["LLM", "Agents", "Prompt Engineering", "Python"],
  },
  {
    slug: "literature",
    year: "2025-2026",
    category: "genai",
    featured: true,
    title: { fr: "Assistant de revue de littérature multi-agents", en: "Multi-agent literature review assistant" },
    short: {
      fr: "Agents de collecte, d'analyse, de synthèse et de détection des lacunes de recherche.",
      en: "Agents for collection, analysis, synthesis and research-gap detection.",
    },
    problem: {
      fr: "Une revue de littérature est longue : il faut repérer les évolutions, les consensus, les contradictions et ce qui n'a pas encore été fait.",
      en: "A literature review is slow: you must spot trends, consensus, contradictions and what has not been done yet.",
    },
    approach: {
      fr: "Ingestion d'articles PDF dans une base vectorielle, synthèse par thème avec RAG, détection de gaps par chain-of-thought, rapport validé par un humain.",
      en: "PDF papers ingested into a vector store, theme synthesis with RAG, chain-of-thought gap detection, human-validated report.",
    },
    results: {
      fr: "Rapport structuré généré automatiquement, avec les lacunes de recherche identifiées et sourcées.",
      en: "Automatically generated structured report, with sourced research gaps.",
    },
    tags: ["LangGraph", "AutoGen", "RAG", "ChromaDB", "Gemini"],
    repo: "https://github.com/maha-yam/multi-agent-literature-review",
  },
  {
    slug: "neuroseg",
    year: "2026",
    category: "vision",
    featured: true,
    title: { fr: "NeuroSeg-Dermato", en: "NeuroSeg-Dermato" },
    short: {
      fr: "Segmentation de lésions cutanées : U-Net, Attention U-Net et ResU-Net comparés sur ISIC 2018.",
      en: "Skin lesion segmentation: U-Net, Attention U-Net and ResU-Net compared on ISIC 2018.",
    },
    problem: {
      fr: "Délimiter précisément une lésion cutanée aide au diagnostic du mélanome, mais les contours sont souvent flous.",
      en: "Precisely outlining a skin lesion helps melanoma diagnosis, but borders are often blurry.",
    },
    approach: {
      fr: "Entraînement et comparaison de trois architectures en PyTorch sur le dataset ISIC 2018.",
      en: "Training and comparison of three architectures in PyTorch on the ISIC 2018 dataset.",
    },
    results: {
      fr: "L'Attention U-Net obtient le meilleur score : Dice 0,874, IoU 0,776, accuracy 98,2 %.",
      en: "Attention U-Net scores best: Dice 0.874, IoU 0.776, 98.2% accuracy.",
    },
    tags: ["PyTorch", "U-Net", "Attention U-Net", "ResU-Net"],
    repo: "https://github.com/maha-yam/neuroseg-dermato",
  },
  {
    slug: "weather",
    year: "2026",
    category: "data",
    title: { fr: "Pipeline de données météo du Maroc", en: "Moroccan weather data pipeline" },
    short: {
      fr: "Architecture Medallion (Bronze, Silver, Gold) orchestrée avec Airflow, restituée dans Power BI.",
      en: "Medallion architecture (Bronze, Silver, Gold) orchestrated with Airflow, reported in Power BI.",
    },
    problem: {
      fr: "Collecter et fiabiliser des données météo de plusieurs villes (Tanger, Marrakech, Essaouira, Dakhla) pour les analyser.",
      en: "Collect and clean weather data from several cities (Tangier, Marrakech, Essaouira, Dakhla) for analysis.",
    },
    approach: {
      fr: "Ingestion avec Airbyte, stockage MinIO, transformations par couches et tests qualité, orchestration par un DAG Airflow.",
      en: "Ingestion with Airbyte, MinIO storage, layered transformations and quality tests, orchestrated by an Airflow DAG.",
    },
    results: {
      fr: "Données propres et enrichies prêtes pour l'analyse, tableau de bord Power BI.",
      en: "Clean, enriched data ready for analysis, Power BI dashboard.",
    },
    tags: ["Airflow", "Airbyte", "MinIO", "Python", "Power BI"],
    repo: "https://github.com/maha-yam/morocco-weather-data-pipeline",
  },
  {
    slug: "mask",
    year: "2025",
    category: "vision",
    title: { fr: "Détection du port du masque", en: "Face mask detection" },
    short: {
      fr: "Vision temps réel : masque correct, incorrect ou absent, déployée via Flask et Docker.",
      en: "Real-time vision: mask worn correctly, incorrectly or not at all, deployed with Flask and Docker.",
    },
    problem: {
      fr: "Vérifier automatiquement le port du masque à partir d'un flux vidéo.",
      en: "Automatically check mask wearing from a video stream.",
    },
    approach: {
      fr: "Détection du visage avec OpenCV puis classification par transfer learning sur MobileNetV2.",
      en: "Face detection with OpenCV, then classification via transfer learning on MobileNetV2.",
    },
    results: {
      fr: "Détection en temps réel sur webcam, API Flask et conteneur Docker.",
      en: "Real-time webcam detection, Flask API and Docker container.",
    },
    tags: ["TensorFlow", "MobileNetV2", "OpenCV", "Flask", "Docker"],
    repo: "https://github.com/maha-yam/face-mask-detection",
  },
  {
    slug: "fraud",
    year: "2025",
    category: "ml",
    title: { fr: "Détection de fraude bancaire", en: "Credit card fraud detection" },
    short: {
      fr: "SVM, k-NN et Random Forest comparés sur des données très déséquilibrées (0,17 % de fraudes).",
      en: "SVM, k-NN and Random Forest compared on highly imbalanced data (0.17% fraud).",
    },
    problem: {
      fr: "Avec si peu de fraudes, un modèle peut afficher 99 % d'accuracy sans rien détecter.",
      en: "With so few frauds, a model can reach 99% accuracy while catching nothing.",
    },
    approach: {
      fr: "Prétraitement, comparaison de trois modèles et évaluation par précision, rappel et F1-score.",
      en: "Pre-processing, comparison of three models, evaluation by precision, recall and F1-score.",
    },
    results: {
      fr: "Random Forest retenu : meilleur F1-score (0,681) avec un rappel de 0,838.",
      en: "Random Forest selected: best F1-score (0.681) with 0.838 recall.",
    },
    tags: ["scikit-learn", "Random Forest", "SVM", "k-NN"],
    repo: "https://github.com/maha-yam/credit-card-fraud-detection",
  },
  {
    slug: "toxic",
    year: "2026",
    category: "ml",
    title: { fr: "Détection de commentaires toxiques", en: "Toxic comment detection" },
    short: {
      fr: "Classification de textes en NLP avec TF-IDF, régression logistique et SVM.",
      en: "NLP text classification with TF-IDF, logistic regression and SVM.",
    },
    problem: {
      fr: "Repérer automatiquement les messages toxiques pour aider à la modération et à l'analyse des discours.",
      en: "Automatically flag toxic messages to support moderation and discourse analysis.",
    },
    approach: {
      fr: "Nettoyage du texte, vectorisation TF-IDF, comparaison de la régression logistique et du SVM.",
      en: "Text cleaning, TF-IDF vectorisation, logistic regression vs SVM.",
    },
    results: {
      fr: "Modèle de classification exploitable pour filtrer ou analyser des commentaires.",
      en: "Usable classifier to filter or analyse comments.",
    },
    tags: ["NLP", "TF-IDF", "scikit-learn", "SVM"],
  },
  {
    slug: "greenpulse",
    year: "2025",
    category: "data",
    title: { fr: "GreenPulse, serre connectée IoT", en: "GreenPulse, smart greenhouse IoT" },
    short: {
      fr: "Simulation de capteurs, alertes et prédiction des tendances de température et d'humidité.",
      en: "Sensor simulation, alerts and temperature and humidity trend prediction.",
    },
    problem: {
      fr: "Surveiller une serre et anticiper les conditions critiques avant qu'elles arrivent.",
      en: "Monitor a greenhouse and anticipate critical conditions before they happen.",
    },
    approach: {
      fr: "Données réalistes sur 24 h, statut OPTIMAL / ATTENTION / CRITIQUE selon des seuils, régression linéaire et polynomiale.",
      en: "Realistic 24 h data, OPTIMAL / WARNING / CRITICAL status from thresholds, linear and polynomial regression.",
    },
    results: {
      fr: "Tableau de suivi avec alertes et prévisions des mesures.",
      en: "Monitoring view with alerts and measurement forecasts.",
    },
    tags: ["Python", "IoT", "Pandas", "Regression"],
    repo: "https://github.com/maha-yam/greenpulse-iot",
  },
  {
    slug: "knn",
    year: "2025",
    category: "ml",
    title: { fr: "k-NN codé from scratch", en: "k-NN from scratch" },
    short: {
      fr: "Implémentation des k plus proches voisins avec NumPy, PCA et frontières de décision.",
      en: "k-nearest neighbours implemented with NumPy, PCA and decision boundaries.",
    },
    problem: {
      fr: "Comprendre un algorithme de classification en le codant sans bibliothèque de ML.",
      en: "Understand a classification algorithm by coding it without an ML library.",
    },
    approach: {
      fr: "Distances, vote majoritaire, choix de k, réduction PCA pour visualiser les frontières.",
      en: "Distances, majority vote, choice of k, PCA reduction to visualise boundaries.",
    },
    results: {
      fr: "Résultats comparés à scikit-learn et visualisations des frontières de décision.",
      en: "Results compared with scikit-learn and decision boundary plots.",
    },
    tags: ["NumPy", "PCA", "Matplotlib"],
    repo: "https://github.com/maha-yam/knn-from-scratch",
  },
  {
    slug: "todo",
    year: "2025",
    category: "dev",
    title: { fr: "Application To-Do en C# / .NET", en: "To-do app in C# / .NET" },
    short: {
      fr: "Application console de gestion de tâches en C#.",
      en: "Console task manager in C#.",
    },
    problem: {
      fr: "Gérer simplement des tâches : ajout, suivi, suppression.",
      en: "Manage tasks simply: add, track, delete.",
    },
    approach: {
      fr: "Programmation orientée objet en C# avec .NET.",
      en: "Object-oriented programming in C# with .NET.",
    },
    results: {
      fr: "Application fonctionnelle et code structuré.",
      en: "Working application with structured code.",
    },
    tags: ["C#", ".NET"],
    repo: "https://github.com/maha-yam/todolist-dotnet",
  },
];

export const skills: { title: T; items: string[] }[] = [
  {
    title: { fr: "IA générative & agents", en: "Generative AI & agents" },
    items: ["LangGraph", "LangChain", "AutoGen", "RAG", "ChromaDB", "Prompt Engineering", "Tool Calling", "Gemini", "GPT", "Llama"],
  },
  {
    title: { fr: "ML & Deep Learning", en: "ML & Deep Learning" },
    items: ["Python", "PyTorch", "TensorFlow", "Keras", "scikit-learn", "XGBoost", "U-Net", "MobileNetV2"],
  },
  {
    title: { fr: "NLP & Vision", en: "NLP & Vision" },
    items: ["spaCy", "NLTK", "TF-IDF", "Word2Vec", "FastText", "OpenCV", "Tesseract", "Document AI"],
  },
  {
    title: { fr: "Big Data & bases de données", en: "Big Data & databases" },
    items: ["Spark", "Hadoop", "Airflow", "Airbyte", "MinIO", "Oracle", "MySQL", "SQL Server", "MongoDB", "Redis", "Pandas"],
  },
  {
    title: { fr: "BI & MLOps", en: "BI & MLOps" },
    items: ["Power BI", "Tableau", "Streamlit", "Docker", "Kubernetes", "FastAPI", "Flask", "Git", "Linux", "AWS", "Azure"],
  },
  {
    title: { fr: "Développement", en: "Software development" },
    items: ["Java", "C/C++", "PHP", "JavaScript", "TypeScript", "React", ".NET", "Node.js", "Django"],
  },
];

export const education = [
  {
    period: "2022 - 2027",
    title: { fr: "Cycle ingénieur Informatique & Réseaux, spécialité IA & Data Science", en: "Engineering degree in Computer Science & Networks, AI & Data Science major" },
    place: { fr: "EMSI, Rabat (5e année en cours)", en: "EMSI, Rabat (currently 5th year)" },
  },
  {
    period: "2020 - 2022",
    title: { fr: "Licence Informatique", en: "Bachelor's studies in Computer Science" },
    place: { fr: "Université d'Avignon, France", en: "Avignon University, France" },
  },
  {
    period: "2020",
    title: { fr: "Baccalauréat Sciences Physiques", en: "Baccalaureate in Physical Sciences" },
    place: { fr: "Lycée Scientifique Soussi, Rabat", en: "Lycée Scientifique Soussi, Rabat" },
  },
];

export const leadership = [
  {
    period: "2023 - 2025",
    title: { fr: "Enactus EMSI Rabat", en: "Enactus EMSI Rabat" },
    role: { fr: "Présidente (2024-2025), Responsable communication (2023-2024)", en: "President (2024-2025), Head of communication (2023-2024)" },
    text: {
      fr: "Direction d'une équipe de plus de 30 membres sur des projets d'entrepreneuriat social (Medina Cycle) et représentation aux compétitions nationales.",
      en: "Led a team of 30+ members on social entrepreneurship projects (Medina Cycle) and represented the school at national competitions.",
    },
  },
  {
    period: "2022 - 2023",
    title: { fr: "GDSC EMSI Rabat", en: "GDSC EMSI Rabat" },
    role: { fr: "Membre active", en: "Active member" },
    text: { fr: "Hackathons et workshops Google Cloud.", en: "Hackathons and Google Cloud workshops." },
  },
];

import { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import {
  SiC,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiOpenjdk,
  SiPython,
  SiSqlite,
  SiTerraform,
  SiVscodium,
} from 'react-icons/si';
import { FaArrowsRotate, FaAws, FaCss3Alt, FaPeopleGroup, FaPuzzlePiece, FaMoon, FaSun } from 'react-icons/fa6';
import { MdManageAccounts } from 'react-icons/md';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const profile = {
  name: 'Ajit Kumar Yadav',
  title: 'Cloud Engineer',
  intro:
    'I am a Computer Science & Engineering student at Lovely Professional University, focused on backend engineering and cloud deployments. I design systems that stay maintainable under real-world complexity: microservices, secure APIs, and automated infrastructure.',
  email: 'yadavajitkumar324@gmail.com',
  phone: '+91 9580225821',
  linkedin: 'https://www.linkedin.com/in/ajitkumar-yadav',
  github: 'https://github.com/yadavajitkumar324',
  location: 'Phagwara, Punjab, India',
};

const stats = [
  { value: '150+', label: 'DSA problems solved' },
  { value: '5-star', label: 'HackerRank Java rating' },
  { value: '2', label: 'Cloud portfolio projects' },
  { value: 'AWS', label: 'Deployment-focused stack' },
];

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'C', icon: SiC, level: { label: 'Advanced', score: 88 } },
      { name: 'Python', icon: SiPython, level: { label: 'Advanced', score: 90 } },
      { name: 'Java', icon: SiOpenjdk, level: { label: 'Advanced', score: 86 } },
      { name: 'HTML/CSS', icon: SiHtml5, altIcon: FaCss3Alt, level: { label: 'Advanced', score: 84 } },
      { name: 'JavaScript', icon: SiJavascript, level: { label: 'Intermediate', score: 72 } },
      { name: 'SQL', icon: SiSqlite, level: { label: 'Intermediate', score: 70 } },
    ],
  },
  {
    title: 'Cloud & Tools',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Git/GitHub', icon: SiGit, altIcon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'VS Code', icon: SiVscodium },
    ],
  },
  {
    title: 'Working Style',
    items: [
      { name: 'Problem-Solving', icon: FaPuzzlePiece },
      { name: 'Team Player', icon: FaPeopleGroup },
      { name: 'Project Management', icon: MdManageAccounts },
      { name: 'Adaptability', icon: FaArrowsRotate },
    ],
  },
];

const projects = [
  {
    id: 'results',
    title: 'Cloud-Based Student Result Management System',
    date: 'Mar 2025',
    tag: 'Flask + AWS',
    image: '/projects/cloud-ai-platform.svg',
    summary:
      'A role-based academic result platform built for secure publishing and controlled student access.',
    points: [
      'Designed a web-based result management workflow for both students and administrators.',
      'Implemented separate authentication and authorization paths to protect private academic data.',
      'Deployed the application on AWS EC2 and connected AWS RDS MySQL for reliable persistence.',
    ],
    repo: 'https://github.com/yadavajitkumar324/Cloud-Based-Student-Result-Management-System',
    tech: ['Flask', 'HTML', 'CSS', 'JavaScript', 'AWS EC2', 'AWS RDS', 'Amazon S3'],
  },
  {
    id: 'drive',
    title: 'Mini Google Drive Project',
    date: 'Nov 2025',
    tag: 'MiniDrive + S3',
    image: '/projects/cloud-ai-docker.svg',
    summary:
      'A mini cloud drive experience for upload, storage, and secure download of user files.',
    points: [
      'Built secure file upload and download flows for efficient user access to stored documents.',
      'Used Amazon S3 for scalable object storage with high availability.',
      'Created RESTful APIs backed by authentication and authorization mechanisms.',
    ],
    repo: 'https://github.com/yadavajitkumar324/Cloud-Based-File-Storage-Sharing-System-Mini-Google-Drive-',
    tech: ['Python/Node.js', 'HTML', 'CSS', 'JavaScript', 'Amazon S3', 'AWS Lambda', 'Amazon Cognito'],
  },
];

const training = {
  org: 'Cipher Schools',
  period: 'Jun 2025 - Jul 2025',
  title: 'Data Structures & Algorithms using Java',
  certificateHref: '/certificates/cipher-school.pdf',
  points: [
    'Completed hands-on training across arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching.',
    'Applied time-space complexity analysis to improve algorithmic performance in Java.',
    'Built a Library Management System using core DSA concepts for efficient catalog and member operations.',
  ],
};

const certificates = [
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    date: 'May 2025',
    href: '/certificates/nptel-6th-semester-certificate.pdf',
    image: '/certificates/nptel-6th-semester-certificate.pdf',
  },
  {
    title: 'Certification of Chat GPT and Generative AI & LLM',
    issuer: 'Infosys',
    date: 'Aug 2025',
    href: '/certificates/infosys-generative-ai-certificate.pdf',
    image: '/certificates/infosys-generative-ai-certificate.pdf',
  },
  {
    title: 'AWS Academy Graduate - Cloud Architecting - Training Badge',
    issuer: 'AWS Academy',
    date: 'Dec 2025',
    href: '/certificates/aws-cloud-architecting-badge.pdf',
    image: '/certificates/aws-cloud-architecting-badge.pdf',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Coursera',
    date: 'Sep 2024',
    href: '/certificates/coursera-networking-certificate.pdf',
    image: '/certificates/coursera-networking-certificate.pdf',
  },
  {
    title: 'Oracle Certificate',
    issuer: 'Oracle',
    date: 'Mar 2026',
    href: '/certificates/oracle-merged-certificate.pdf',
    image: '/certificates/oracle-merged-certificate.pdf',
  },
];

const achievements = [
  {
    title: 'LeetCode Competitive Programmer',
    date: 'Jan 2026',
    detail:
      'Solved 150+ algorithmic problems across multiple difficulty levels with steady contest participation and a strong focus on optimization.',
  },
  {
    title: 'HackerRank Competitive Programmer',
    date: 'Jun 2025',
    detail:
      'Achieved a 5-star Java rating across problem-solving tracks including arrays, strings, linked lists, recursion, and sorting/searching.',
  },
];

const education = [
  {
    school: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    meta: 'CGPA: 6.21 | Since Aug 2023',
  },
  {
    school: 'Viga Memorial Inter College Gazipur, Tamkuhi Raj',
    location: 'Kushinagar, Uttar Pradesh',
    degree: 'Intermediate',
    meta: 'Percentage: 70% | Apr 2019 - Mar 2020',
  },
  {
    school: 'Samata Inter College Lachhia',
    location: 'Kushinagar, Uttar Pradesh',
    degree: 'Matriculation',
    meta: 'Percentage: 76% | Apr 2017 - Mar 2018',
  },
];

function CertificatePreview({ src, title }) {
  const [previewSrc, setPreviewSrc] = useState(src.endsWith('.pdf') ? '' : src);
  const [loadingFailed, setLoadingFailed] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function renderPdfPreview() {
      if (!src.endsWith('.pdf')) {
        setPreviewSrc(src);
        setLoadingFailed(false);
        return;
      }

      try {
        setLoadingFailed(false);
        const loadingTask = pdfjsLib.getDocument(src);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.35 });

        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);

        const context = canvas.getContext('2d', { alpha: false });
        await page.render({ canvasContext: context, viewport }).promise;

        if (!isCancelled) {
          setPreviewSrc(canvas.toDataURL('image/jpeg', 0.92));
        }

        await loadingTask.destroy();
      } catch {
        if (!isCancelled) {
          setLoadingFailed(true);
        }
      }
    }

    renderPdfPreview();

    return () => {
      isCancelled = true;
    };
  }, [src]);

  if (loadingFailed) {
    return <p className="certificate-preview-fallback">Preview unavailable</p>;
  }

  if (!previewSrc) {
    return <p className="certificate-preview-fallback">Loading preview...</p>;
  }

  return <img src={previewSrc} alt={title} className="certificate-image" />;
}

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitState, setSubmitState] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
  };

  // Set initial theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: '', message: '' });

    try {
      const response = await fetch('https://portfolio-website-backend-jnj3.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Could not send message.');
      }

      setSubmitState({ type: 'success', message: result.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">AK</span>
          <span className="brand-text">Ajit Kumar Yadav</span>
        </a>

        <nav className="nav-links">
          <a className="nav-highlight" href="#about">About</a>
          <a className="nav-highlight" href="#skills">Skills</a>
          <a className="nav-highlight" href="#projects">Projects</a>
          <a className="nav-highlight" href="#training">Training</a>
          <a className="nav-highlight" href="#certificates">Certificates</a>
          <a className="nav-highlight" href="#achievements">Achievements</a>
          <a className="nav-highlight" href="#education">Education</a>
          <a className="nav-highlight" href="#contact">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal rise-1">
            <p className="eyebrow">Cloud • Full-Stack • DSA</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-text">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button primary" href="/Ajit-Kumar-Yadav-Resume.pdf" download>
                Download Resume
              </a>
              <a className="button explore" href="#projects">
                Explore Projects
              </a>
            </div>

            <ul className="contact-strip">
              <li>{profile.location}</li>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              </li>
            </ul>
          </div>

          <div className="hero-panel reveal rise-2">
            <div className="identity-card">
              <div className="avatar">
                <img alt="Ajit Kumar Yadav" src="/photo34.jpg" />
              </div>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong className={['150+', '5-star', '2', 'AWS'].includes(item.value) ? 'stat-highlight' : ''}>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <div className="social-row">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="section about-grid" id="about">
          <article className="panel reveal rise-1">
            <p className="section-kicker orange-highlight">About</p>
            <h2>Building practical systems, not just interfaces</h2>
            <p>
              My work centers on cloud-backed applications that combine secure access control, structured backend logic, and user-focused delivery. I enjoy building solutions that move cleanly from development to deployment.
            </p>
          </article>

          <article className="panel checklist reveal rise-2">
            <p className="section-kicker orange-highlight">What I bring</p>
            <ul>
              <li>Backend-first thinking for secure workflows and role-based access.</li>
              <li>AWS deployment familiarity across EC2, RDS, S3, Lambda, and Cognito.</li>
              <li>Strong DSA practice that supports cleaner logic and better performance tradeoffs.</li>
            </ul>
          </article>
        </section>

        <section className="section" id="skills">
          <div className="section-heading reveal rise-1">
            <p className="section-kicker blue-highlight orange-highlight">Skills</p>
            <h2>Core stack and delivery strengths</h2>
          </div>

          <div className="skills-layout">
            {skillGroups.map((group, index) => (
              <article className={`panel reveal rise-${(index % 3) + 1}`} key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span className="chip skill-chip" key={item.name}>
                      <span className="skill-icon-wrap">
                        <item.icon className="skill-icon" />
                        {item.altIcon ? <item.altIcon className="skill-icon alt" /> : null}
                      </span>
                      <span className="skill-copy">
                        <span>{item.name}</span>
                        {item.level ? (
                          <span className="skill-level-graph">
                            <span className="skill-level-track" aria-hidden="true">
                              <span className="skill-level-fill" style={{ width: `${item.level.score}%` }} />
                            </span>
                          </span>
                        ) : null}
                      </span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-layout no-hover-highlight" id="projects">
          <div className="section-heading reveal rise-1">
            <p className="section-kicker blue-highlight">Projects</p>
            <h2>Selected work with cloud and security focus</h2>
          </div>

          <div className="horizontal-row reveal rise-2">
            {projects.map((project) => (
              <article className="panel horizontal-card project-card" key={project.id}>
                {project.image && (
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/projects/cloud-ai-platform.svg';
                      }}
                    />
                  </div>
                )}
                <div className="project-header">
                  <div>
                    <p className="section-kicker blue-highlight">{project.tag}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="badge">{project.date}</span>
                </div>

                <p>{project.summary}</p>

                <ul className="detail-list">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="chip-wrap tech-wrap">
                  {project.tech.map((item) => (
                    <span className="chip muted" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                {project.repo ? (
                  <div className="project-links">
                    <a className="button project-link-button" href={project.repo} rel="noreferrer" target="_blank">
                      View Source on GitHub
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <div className="section-heading reveal rise-1">
            <p className="section-kicker blue-highlight">Journey</p>
            <h2>Training, certifications, and achievements</h2>
          </div>

          <div className="horizontal-row reveal rise-1">
            <article className="panel horizontal-card training-card" id="training">
              <p className="section-kicker blue-highlight orange-highlight">Training</p>
              <h2>{training.title}</h2>
              <p className="meta-line">
                {training.org} • {training.period}
              </p>
              <ul className="detail-list">
                {training.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {training.certificateHref ? (
                <div className="certificate-actions">
                  <a className="button training-button" href={training.certificateHref} rel="noreferrer" target="_blank">
                    View Training Certificate
                  </a>
                </div>
              ) : null}
            </article>
          </div>

          <article className="panel certificates-panel reveal rise-2" id="certificates">
            <p className="section-kicker blue-highlight orange-highlight">Certificates</p>
            <div className="certificate-row">
              {certificates.map((certificate) => (
                <div className="stack-item certificate-card" key={certificate.title}>
                  {certificate.image && (
                    <div className="certificate-image-wrapper">
                      <CertificatePreview src={certificate.image} title={certificate.title} />
                    </div>
                  )}
                  <div>
                    <strong>{certificate.title}</strong>
                    <p className="certificate-meta">
                      {certificate.issuer} • {certificate.date}
                    </p>
                  </div>

                  {certificate.href ? (
                    <div className="certificate-actions">
                      <a className="button cert-view certificate-button" href={certificate.href} rel="noreferrer" target="_blank">
                        View
                      </a>
                      <a className="button cert-download certificate-button" download href={certificate.href}>
                        Download
                      </a>
                    </div>
                  ) : (
                    <span className="certificate-note">Added to profile. File link can be attached later.</span>
                  )}
                </div>
              ))}
            </div>
          </article>

          <article className="panel achievements-panel achievements-highlight reveal rise-3" id="achievements">
            <p className="section-kicker blue-highlight orange-highlight">Achievements</p>
            <div className="horizontal-row achievement-row">
              {achievements.map((achievement) => (
                <div className="stack-item emphasis horizontal-card achievement-card" key={achievement.title}>
                  <div className="stack-head">
                    <strong>{achievement.title}</strong>
                    <span>{achievement.date}</span>
                  </div>
                  <p>{achievement.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="section" id="education">
          <div className="section-heading reveal rise-1">
            <p className="section-kicker blue-highlight orange-highlight">Education</p>
            <h2>Academic foundation</h2>
          </div>

          <div className="education-grid">
            {education.map((item, index) => (
              <article className={`panel reveal rise-${(index % 3) + 1}`} key={item.school}>
                <h3>{item.school}</h3>
                <p className="meta-line">{item.location}</p>
                <p>{item.degree}</p>
                <strong>{item.meta}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-layout" id="contact">
          <article className="panel contact-info-panel reveal rise-1">
            <p className="section-kicker orange-highlight">Contact</p>
            <h2>Let’s build something reliable</h2>
            <p className="contact-intro">
              If you want a developer who is comfortable with backend logic, cloud deployment, and clean problem solving, send a message here.
            </p>

            <div className="contact-blocks">
              <a className="contact-card" href={`mailto:${profile.email}`}>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </a>
              <a className="contact-card" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
                <span>Phone</span>
                <strong>{profile.phone}</strong>
              </a>
              <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>Professional</span>
                <strong>LinkedIn Profile</strong>
              </a>
            </div>
          </article>

          <form className="panel contact-form contact-form-panel reveal rise-2" onSubmit={handleSubmit}>
            <p className="form-headline">Quick Message</p>

            <div className="contact-form-grid">
              <label>
                Name
                <input
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  type="text"
                  value={formData.name}
                />
              </label>

              <label>
                Email
                <input
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  type="email"
                  value={formData.email}
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and goals..."
                required
                rows="6"
                value={formData.message}
              />
            </label>

            <p className="form-hint">I usually reply within 24 hours.</p>

            <button className="button contact-send" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitState.message ? (
              <p className={submitState.type === 'success' ? 'form-status success' : 'form-status error'}>
                {submitState.message}
              </p>
            ) : null}
          </form>
        </section>
      </main>
    </div>
  );
}
import { useState } from 'react';
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
import { FaArrowsRotate, FaAws, FaCss3Alt, FaPeopleGroup, FaPuzzlePiece } from 'react-icons/fa6';
import { MdManageAccounts } from 'react-icons/md';

const profile = {
  name: 'Ajit Kumar Yadav',
  title: 'Cloud Engineer',
  intro:
    'Hi, I am Ajit Kumar Yadav, a Cloud Engineer focused on AWS infrastructure and secure full-stack solutions.',
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
      { name: 'C', icon: SiC },
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'HTML/CSS', icon: SiHtml5, altIcon: FaCss3Alt },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL', icon: SiSqlite },
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
    summary:
      'A role-based academic result platform built for secure publishing and controlled student access.',
    points: [
      'Designed a web-based result management workflow for both students and administrators.',
      'Implemented separate authentication and authorization paths to protect private academic data.',
      'Deployed the application on AWS EC2 and connected AWS RDS MySQL for reliable persistence.',
    ],
    tech: ['Flask', 'HTML', 'CSS', 'JavaScript', 'AWS EC2', 'AWS RDS', 'Amazon S3'],
  },
  {
    id: 'drive',
    title: 'Cloud-Based File Storage & Sharing System',
    date: 'Nov 2025',
    tag: 'S3 + API Security',
    summary:
      'A mini cloud drive experience for upload, storage, and secure download of user files.',
    points: [
      'Built secure file upload and download flows for efficient user access to stored documents.',
      'Used Amazon S3 for scalable object storage with high availability.',
      'Created RESTful APIs backed by authentication and authorization mechanisms.',
    ],
    tech: ['Python/Node.js', 'HTML', 'CSS', 'JavaScript', 'Amazon S3', 'AWS Lambda', 'Amazon Cognito'],
  },
];

const training = {
  org: 'Cipher Schools',
  period: 'Jun 2025 - Jul 2025',
  title: 'Data Structures & Algorithms using Java',
  points: [
    'Completed hands-on training across arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching.',
    'Applied time-space complexity analysis to improve algorithmic performance in Java.',
    'Built a Library Management System using core DSA concepts for efficient catalog and member operations.',
  ],
};

const certificates = [
  {
    title: 'Certification of Chat GPT and Generative AI & LLM',
    issuer: 'Infosys',
    date: 'Aug 2025',
    href: '/certificates/infosys-generative-ai-certificate.pdf',
  },
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    date: 'May 2025',
    href: '/certificates/nptel-privacy-security-certificate.jpg',
  },
  {
    title: 'AWS Academy Graduate - Cloud Architecting - Training Badge',
    issuer: 'AWS Academy',
    date: 'Dec 2025',
    href: '/certificates/aws-cloud-architecting-badge.pdf',
  },
  {
    title: 'Computer Architecture and Computer Networking',
    issuer: 'Coursera',
    date: 'Nov 2025',
    href: '/certificates/coursera-networking-certificate.pdf',
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

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitState, setSubmitState] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
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
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
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
                <img alt="Ajit Kumar Yadav" src="/profile.png" />
              </div>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
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
            <p className="section-kicker">About</p>
            <h2>Building practical systems, not just interfaces</h2>
            <p>
              My work centers on cloud-backed applications that combine secure access control, structured backend logic, and user-focused delivery. I enjoy building solutions that move cleanly from development to deployment.
            </p>
          </article>

          <article className="panel checklist reveal rise-2">
            <p className="section-kicker">What I bring</p>
            <ul>
              <li>Backend-first thinking for secure workflows and role-based access.</li>
              <li>AWS deployment familiarity across EC2, RDS, S3, Lambda, and Cognito.</li>
              <li>Strong DSA practice that supports cleaner logic and better performance tradeoffs.</li>
            </ul>
          </article>
        </section>

        <section className="section" id="skills">
          <div className="section-heading reveal rise-1">
            <p className="section-kicker blue-highlight">Skills</p>
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
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-layout" id="projects">
          <div className="section-heading reveal rise-1">
            <p className="section-kicker blue-highlight">Projects</p>
            <h2>Selected work with cloud and security focus</h2>
          </div>

          <div className="horizontal-row reveal rise-2">
            {projects.map((project) => (
              <article className="panel horizontal-card project-card" key={project.id}>
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
            <article className="panel horizontal-card training-card">
              <p className="section-kicker blue-highlight">Training</p>
              <h2>{training.title}</h2>
              <p className="meta-line">
                {training.org} • {training.period}
              </p>
              <ul className="detail-list">
                {training.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>

          <article className="panel certificates-panel reveal rise-2">
            <p className="section-kicker blue-highlight">Certificates</p>
            <div className="stack-list certificate-row">
              {certificates.map((certificate) => (
                <div className="stack-item certificate-card" key={certificate.title}>
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

          <article className="panel achievements-panel reveal rise-3">
            <p className="section-kicker blue-highlight">Achievements</p>
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
            <p className="section-kicker blue-highlight">Education</p>
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
          <article className="panel reveal rise-1">
            <p className="section-kicker">Contact</p>
            <h2>Let’s build something reliable</h2>
            <p>
              If you want a developer who is comfortable with backend logic, cloud deployment, and clean problem solving, send a message here.
            </p>

            <div className="contact-blocks">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </div>
          </article>

          <form className="panel contact-form reveal rise-2" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" onChange={handleChange} required type="text" value={formData.name} />
            </label>

            <label>
              Email
              <input name="email" onChange={handleChange} required type="email" value={formData.email} />
            </label>

            <label>
              Message
              <textarea
                name="message"
                onChange={handleChange}
                required
                rows="5"
                value={formData.message}
              />
            </label>

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
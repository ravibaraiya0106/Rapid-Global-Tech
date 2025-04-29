// import 'assets/css/careers.css'

// Job listings data
const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    department: 'Engineering',
    description: 'We are looking for an experienced Full Stack Developer to join our growing team.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    department: 'Operations',
    description: 'Join our DevOps team to build and maintain our cloud infrastructure.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'On-site',
    type: 'Full-time',
    experience: '2+ years',
    department: 'Design',
    description: 'Create beautiful and intuitive user interfaces for our products.',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
  }
];

// Initialize the page
function initCareerPage() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <header class="header">
      <h1>Join Our Team</h1>
      <p>Build the future of technology with us. Explore exciting opportunities and be part of our innovation journey.</p>
    </header>
    
    <main class="jobs-container">
      <div class="job-filters">
        <button class="filter-btn active" data-department="all">All Positions</button>
        <button class="filter-btn" data-department="Engineering">Engineering</button>
        <button class="filter-btn" data-department="Operations">Operations</button>
        <button class="filter-btn" data-department="Design">Design</button>
      </div>
      
      <div id="jobsList"></div>
    </main>

    <div class="modal" id="applicationModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Apply for <span id="modalJobTitle"></span></h2>
          <button class="close-modal">&times;</button>
        </div>
        <form class="application-form" id="applicationForm">
          <input type="hidden" id="jobId" name="jobId">
          <div class="form-group">
            <label for="fullName">Full Name *</label>
            <input type="text" id="fullName" name="fullName" required>
          </div>
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required>
          </div>
          <div class="form-group">
            <label for="experience">Years of Experience *</label>
            <input type="number" id="experience" name="experience" min="0" required>
          </div>
          <div class="form-group">
            <label for="portfolio">Portfolio/GitHub URL</label>
            <input type="url" id="portfolio" name="portfolio">
          </div>
          <div class="form-group">
            <label for="resume">Resume/CV (PDF, DOC, DOCX) *</label>
            <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required>
          </div>
          <div class="form-group">
            <label for="coverLetter">Cover Letter</label>
            <textarea id="coverLetter" name="coverLetter"></textarea>
          </div>
          <button type="submit" class="submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  `;

  renderJobs(jobs);
  setupFilters();
  setupModal();
}

// Render job listings
function renderJobs(jobsToRender) {
  const jobsList = document.getElementById('jobsList');
  jobsList.innerHTML = jobsToRender.map(job => `
    <div class="job-card">
      <h2 class="job-title">${job.title}</h2>
      <div class="job-details">
        <span>📍 ${job.location}</span>
        <span>⏰ ${job.type}</span>
        <span>💼 ${job.experience}</span>
        <span>🏢 ${job.department}</span>
      </div>
      <p class="job-description">${job.description}</p>
      <div class="tags">
        ${job.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
      </div>
      <button class="apply-btn" onclick="handleApply(${job.id}, '${job.title}')">Apply Now</button>
    </div>
  `).join('');
}

// Setup department filters
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter jobs
      const department = button.dataset.department;
      const filteredJobs = department === 'all' 
        ? jobs 
        : jobs.filter(job => job.department === department);
      
      renderJobs(filteredJobs);
    });
  });
}

// Setup modal functionality
function setupModal() {
  const modal = document.getElementById('applicationModal');
  const closeBtn = document.querySelector('.close-modal');
  const form = document.getElementById('applicationForm');

  // Close modal when clicking the close button
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Application submitted:', Object.fromEntries(formData));
    alert('Application submitted successfully!');
    modal.classList.remove('active');
    form.reset();
  });
}

// Handle apply button click
window.handleApply = (jobId, jobTitle) => {
  const modal = document.getElementById('applicationModal');
  const modalJobTitle = document.getElementById('modalJobTitle');
  const jobIdInput = document.getElementById('jobId');

  modalJobTitle.textContent = jobTitle;
  jobIdInput.value = jobId;
  modal.classList.add('active');
};

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCareerPage);
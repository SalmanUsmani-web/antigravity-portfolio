import './style.css'
import * as THREE from 'three'

// HTML content
document.querySelector('#app').innerHTML = `
  <canvas id="webgl"></canvas>

    <nav class="navbar">
    <h3>Salman.dev</h3>

    <div class="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#skills">Skills</a>
      <a href="#education">Education</a>
      <a href="#training">Training</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section class="hero" id="home">
    <div class="hero-content">
      <p class="tag">Anti-Gravity 3D Portfolio</p>
      <h1>Hi, I'm Salman Usmani</h1>
      <h2>Java Backend Developer</h2>
      <h3 class="typing-text"></h3>
      <p class="desc">
        I build modern backend applications using Java, Spring Boot, MySQL,
        and clean software development practices.
      </p>

      <div class="buttons">
  <a href="#projects" class="btn">View Projects</a>
  <a href="/resume.pdf" download class="btn outline">Download Resume</a>
  <a href="#contact" class="btn outline">Contact Me</a>

   </div>

</div>

 <!--<div class="hero-bg-photo"></div> -->



  </section>

  <section class="about-section" id="about">
    <h2>About Me</h2>
    <p>
      I am a Computer Science student focused on Java Backend Development.
      I am learning Core Java, Advanced Java, JDBC, Servlets, JSP, Spring Boot,
      MySQL, Git, and REST API development.
    </p>
  </section>

    <section class="services-section" id="services">
    <h2>What I Do</h2>

    <div class="service-cards">
      <div class="service-card">
        <h3>Backend Development</h3>
        <p>
          I develop backend applications using Java, JDBC, Servlets,
          JSP, and Spring Boot concepts.
        </p>
      </div>

      <div class="service-card">
        <h3>Database Design</h3>
        <p>
          I create and manage relational databases using MySQL with
          proper tables, relationships, and queries.
        </p>
      </div>

      <div class="service-card">
        <h3>REST API Development</h3>
        <p>
          I am learning to build REST APIs for connecting frontend
          applications with backend services.
        </p>
      </div>

      <div class="service-card">
        <h3>Java Web Applications</h3>
        <p>
          I build Java-based web projects such as job portals,
          student systems, and management applications.
        </p>
      </div>
    </div>
  </section>

  <section class="skills-section" id="skills">
    <h2>My Skills</h2>

    <div class="skill-cards">
      <div class="skill-card">Java</div>
      <div class="skill-card">OOPs</div>
      <div class="skill-card">JDBC</div>
      <div class="skill-card">Servlets</div>
      <div class="skill-card">JSP</div>
      <div class="skill-card">Spring Boot</div>
      <div class="skill-card">MySQL</div>
      <div class="skill-card">Git & GitHub</div>
    </div>
  </section>

    <section class="education-section" id="education">
    <h2>Education</h2>

    <div class="education-timeline">
      <div class="education-card">
        <h3>Master of Computer Applications</h3>
        <span>AKTU University | Pursuing</span>
        <p>
          Focused on Java programming, data structures, database management,
          operating systems, web development, and software engineering concepts.
        </p>
      </div>

      <div class="education-card">
        <h3>Java Backend Development</h3>
        <span>Self Learning & Practical Projects</span>
        <p>
          Learning Core Java, Advanced Java, JDBC, Servlets, JSP, Spring Boot,
          MySQL, Git, REST APIs, and building real-world backend projects.
        </p>
      </div>
    </div>
  </section>

    <section class="training-section" id="training">
    <h2>Experience & Training</h2>

    <div class="training-cards">
      <div class="training-card">
        <h3>Java Backend Development Training</h3>
        <span>Core Java | Advanced Java | Spring Boot</span>
        <p>
          Learning backend development with Java, OOPs concepts, JDBC,
          Servlets, JSP, Spring Boot, MySQL, Git, and REST API development.
          Focused on building practical backend projects and improving coding skills.
        </p>
      </div>

      <div class="training-card">
        <h3>SAP ABAP Training</h3>
        <span>ABAP Programming | SAP Basics</span>
        <p>
          Currently learning SAP ABAP concepts including basic SAP ecosystem,
          ABAP programming fundamentals, reports, internal tables, data dictionary,
          and business application development.
        </p>
      </div>

      <div class="training-card">
        <h3>Academic Project Experience</h3>
        <span>Job Portal | DBMS | Web Application</span>
        <p>
          Developed academic projects like Job Portal Management System using
          Java web technologies and database concepts. Worked on modules,
          database design, user workflow, and project documentation.
        </p>
      </div>
    </div>
  </section>

    <section class="projects-section" id="projects">
    <h2>My Projects</h2>

    <div class="project-cards">
      <div class="project-card">
        <h3>Job Portal Management System</h3>
        <p>
          A web-based job portal where users can search jobs, apply for jobs,
          and recruiters can post job openings.
        </p>
        <span>Java | JSP | Servlet | MySQL</span>
        <div class="project-links">
  <a href="#" target="_blank">Live Demo</a>
  <a href="#" target="_blank">GitHub</a>
</div>

      </div>

      <div class="project-card">
        <h3>Student Management System</h3>
        <p>
          A Java application to manage student records, courses, marks,
          and academic details.
        </p>
        <span>Java | JDBC | MySQL</span>
        <div class="project-links">
  <a href="#" target="_blank">Live Demo</a>
  <a href="#" target="_blank">GitHub</a>
</div>
        
      </div>

      <div class="project-card">
        <h3>3D Portfolio Website</h3>
        <p>
          A modern anti-gravity portfolio website with 3D objects,
          particles, animations, and responsive design.
        </p>
        <span>HTML | CSS | JavaScript | Three.js</span>
        <div class="project-links">
  <a href="#" target="_blank">Live Demo</a>
  <a href="#" target="_blank">GitHub</a>
</div>
      </div>
    </div>
  </section>

    <section class="contact-section" id="contact">
    <h2>Contact Me</h2>
    <p>
      I am open to Java Backend Developer internships, fresher roles,
      and project-based opportunities.
    </p>

    <div class="contact-box">
      <div>
        <h3>Email</h3>
        <a href="mailto:salmanusmani7830@gmail.com">salmanusmani7830@gmail.com</a>
      </div>

      <div>
        <h3>LinkedIn</h3>
        <a href="https://linkedin.com/in/your-profile" target="_blank">linkedin.com/in/your-profile</a>
      </div>

      <div>
        <h3>GitHub</h3>
        <a href="https://github.com/your-username" target="_blank">github.com/your-username</a>
      </div>
    </div>

    <footer>
      <p>© 2026 Salman Usmani | Built with JavaScript & Three.js</p>
    </footer>
  </section>
  <button class="back-to-top" id="backToTop">↑</button>
`

// Typing animation
const typingText = document.querySelector('.typing-text')

if (typingText) {
  const roles = [
    'Java Backend Developer',
    'Spring Boot Learner',
    'REST API Developer',
    'MySQL Database Designer'
  ]

  let roleIndex = 0
  let charIndex = 0
  let isDeleting = false

  function typeEffect() {
    const currentRole = roles[roleIndex]

    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex--)
    } else {
      typingText.textContent = currentRole.substring(0, charIndex++)
    }

    if (!isDeleting && charIndex === currentRole.length + 1) {
      isDeleting = true
      setTimeout(typeEffect, 1000)
      return
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100)
  }

  typeEffect()
}

// Back to top button
const backToTop = document.querySelector('#backToTop')

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)

camera.position.z = 4

// Renderer
const canvas = document.querySelector('#webgl')

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// 3D Geometry
const geometry = new THREE.IcosahedronGeometry(1.2, 1)

const material = new THREE.MeshStandardMaterial({
  color: 0x00f5ff,
  wireframe: true
})

const shape = new THREE.Mesh(geometry, material)
shape.position.x = 2
scene.add(shape)

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0x00f5ff, 2)
pointLight.position.set(2, 3, 4)
scene.add(pointLight)

// Background floating particles
const particlesGeometry = new THREE.BufferGeometry()
const particlesCount = 300

const positions = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 12
}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
)

const particlesMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.025
})

const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

// Floating 3D skill cubes
const floatingCubes = []

for (let i = 0; i < 8; i++) {
  const cubeGeometry = new THREE.BoxGeometry(0.25, 0.25, 0.25)

  const cubeMaterial = new THREE.MeshStandardMaterial({
    color: 0x9b5cff,
    wireframe: true
  })

  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

  cube.position.x = (Math.random() - 0.5) * 8
  cube.position.y = (Math.random() - 0.5) * 6
  cube.position.z = (Math.random() - 0.5) * 5

  scene.add(cube)
  floatingCubes.push(cube)
}

// Mouse movement
let mouseX = 0
let mouseY = 0

window.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 2
  mouseY = (event.clientY / window.innerHeight - 0.5) * 2
})

// Scroll movement
let scrollY = window.scrollY

window.addEventListener('scroll', () => {
  scrollY = window.scrollY
})

// Clock for floating animation
const clock = new THREE.Clock()

// Animation
function animate() {
  requestAnimationFrame(animate)

  const elapsedTime = clock.getElapsedTime()

  // Rotation
  shape.rotation.x += 0.005
  shape.rotation.y += 0.01

  particles.rotation.y += 0.0008
  particles.rotation.x += 0.0003

  floatingCubes.forEach((cube, index) => {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.008

  cube.position.y += Math.sin(elapsedTime + index) * 0.002
})

  // Floating up-down effect
  shape.position.y = Math.sin(elapsedTime) * 0.3

  // Mouse follow effect
  shape.position.x = 2 + mouseX * 0.5
  shape.rotation.z = mouseY * 0.3

  // Scroll based movement
shape.rotation.y += scrollY * 0.000002
camera.position.y = -scrollY * 0.0015

  renderer.render(scene, camera)
}

animate()

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
})
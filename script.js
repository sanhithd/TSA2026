// Data: resources, events, FAQs
const resources = [
  {
    id: "food-bank",
    name: "CATA Community Food Bank",
    category: "Food Assistance",
    tags: ["families", "low-income", "groceries"],
    description: "Weekly food distributions with fresh produce and pantry staples.",
    address: "123 Panther Way, Monroe, NC",
    contact: "(555) 201-1100",
    website: "https://example-foodbank.org",
    free: true,
    featured: true,
  },
  {
    id: "youth-center",
    name: "Panther Youth Center",
    category: "Youth Programs",
    tags: ["teens", "after-school", "tutoring"],
    description:
      "After-school tutoring, STEM clubs, and recreation for students in grades 6–12.",
    address: "45 Innovation Dr, Monroe, NC",
    contact: "(555) 201-1188",
    website: "https://example-youthcenter.org",
    free: true,
    featured: true,
  },
  {
    id: "health-clinic",
    name: "Union County Community Health Clinic",
    category: "Health Services",
    tags: ["medical", "checkups", "vaccines"],
    description:
      "Low-cost primary care, vaccinations, and wellness visits for uninsured residents.",
    address: "600 Healthy Ln, Monroe, NC",
    contact: "(555) 201-1200",
    website: "https://example-healthclinic.org",
    free: false,
    featured: true,
  },
  {
    id: "housing-coalition",
    name: "Safe Homes Housing Coalition",
    category: "Housing Support",
    tags: ["rent assistance", "shelter", "housing"],
    description:
      "Short-term rental assistance, landlord advocacy, and emergency housing referrals.",
    address: "98 Shelter Ave, Monroe, NC",
    contact: "(555) 201-2300",
    website: "https://example-safehomes.org",
    free: true,
    featured: false,
  },
  {
    id: "senior-center",
    name: "Monroe Senior Resource Center",
    category: "Senior Services",
    tags: ["seniors", "meals", "social"],
    description:
      "Daily meals, wellness classes, and social activities for older adults 60+.",
    address: "220 Golden Years Rd, Monroe, NC",
    contact: "(555) 201-3300",
    website: "https://example-seniorcenter.org",
    free: true,
    featured: false,
  },
  {
    id: "job-readiness",
    name: "Career Launch Job Readiness",
    category: "Employment & Training",
    tags: ["jobs", "resumes", "interview"],
    description:
      "Workshops on resume writing, interviewing, and career planning with 1:1 coaching.",
    address: "15 Opportunity Blvd, Monroe, NC",
    contact: "(555) 201-4100",
    website: "https://example-careerlaunch.org",
    free: true,
    featured: false,
  },
  {
    id: "mental-health",
    name: "Calm Minds Counseling Collective",
    category: "Mental Health",
    tags: ["counseling", "therapy", "support groups"],
    description:
      "Individual counseling and teen support groups with sliding-scale payment options.",
    address: "800 Balance St, Monroe, NC",
    contact: "(555) 201-5100",
    website: "https://example-calmminds.org",
    free: false,
    featured: false,
  },
  {
    id: "legal-aid",
    name: "Union County Legal Aid Clinic",
    category: "Legal & Advocacy",
    tags: ["legal", "tenants", "immigration"],
    description:
      "Free legal consultations for housing, immigration, and benefits questions.",
    address: "19 Justice Plaza, Monroe, NC",
    contact: "(555) 201-6100",
    website: "https://example-legalaid.org",
    free: true,
    featured: false,
  },
  {
    id: "family-resource",
    name: "Panther Family Resource Center",
    category: "Family Support",
    tags: ["parenting", "childcare", "families"],
    description:
      "Parent workshops, childcare referrals, and emergency family assistance funds.",
    address: "70 Unity Cir, Monroe, NC",
    contact: "(555) 201-7100",
    website: "https://example-familycenter.org",
    free: true,
    featured: false,
  },
  {
    id: "transportation",
    name: "Neighbors RideShare Program",
    category: "Transportation",
    tags: ["rides", "appointments", "volunteers"],
    description:
      "Volunteer drivers provide free rides to medical appointments and interviews.",
    address: "Virtual service within CATA area",
    contact: "(555) 201-8100",
    website: "https://example-neighborsride.org",
    free: true,
    featured: false,
  },
];

const events = [
  {
    title: "Community Food Share Day",
    date: "Saturday • 10:00 AM – 1:00 PM",
    location: "CATA Community Food Bank",
    description:
      "Fresh produce and pantry staples available for households in the CATA area. No ID required.",
  },
  {
    title: "Mental Health & Mindfulness Workshop",
    date: "Thursday • 6:30 PM – 8:00 PM",
    location: "Panther Youth Center",
    description:
      "Interactive session for teens on stress management, mindfulness, and where to ask for help.",
  },
  {
    title: "Job Interview Prep Night",
    date: "Next Tuesday • 5:30 PM – 7:00 PM",
    location: "Career Launch Job Readiness",
    description:
      "Practice interviews with volunteer professionals plus feedback on resumes and cover letters.",
  },
  {
    title: "Senior Tech Help Hour",
    date: "First Wednesday • 2:00 PM – 3:30 PM",
    location: "Monroe Senior Resource Center",
    description:
      "Students from CATA TSA help seniors set up phones, email, and access online resources.",
  },
];

const faqs = [
  {
    question: "Who maintains the CATA Community Resource Hub?",
    answer:
      "The hub is curated by students in the Central Academy of Technology & Arts TSA Chapter with guidance from local community partners.",
  },
  {
    question: "Is the information on this site guaranteed to be accurate?",
    answer:
      "We do our best to keep listings up to date, but hours and services can change. We recommend calling or visiting the organization’s website before you go.",
  },
  {
    question: "Does it cost anything to use the resources listed here?",
    answer:
      "Many resources are free or low-cost. Use the “Show only free / low-cost services” filter to see organizations that do not charge for most services.",
  },
  {
    question: "How can my organization be added to the directory?",
    answer:
      "Fill out the Suggest a New Community Resource form below. Our team will review your submission and follow up if we need more information.",
  },
];

// State
let activeCategory = "All";
let searchTerm = "";
let freeOnly = false;

// Helpers
function $(selector) {
  return document.querySelector(selector);
}

function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  if (options.className) el.className = options.className;
  if (options.text) el.textContent = options.text;
  if (options.html) el.innerHTML = options.html;
  if (options.attrs) {
    Object.entries(options.attrs).forEach(([key, value]) => el.setAttribute(key, value));
  }
  return el;
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), delay);
  };
}

// Rendering Functions
function getUniqueCategories() {
  const set = new Set(resources.map((r) => r.category));
  return ["All", ...Array.from(set)];
}

function renderCategoryFilters() {
  const container = $("#categoryFilters");
  container.innerHTML = "";

  const categories = getUniqueCategories();
  categories.forEach((category) => {
    const pill = createElement("button", {
      className: "pill",
      text: category,
      attrs: {
        type: "button",
        "data-category": category,
        "data-active": category === activeCategory ? "true" : "false",
        role: "radio",
        "aria-checked": category === activeCategory ? "true" : "false",
      },
    });

    pill.addEventListener("click", () => {
      activeCategory = category;
      applyFilters();
      renderCategoryFilters(); // re-render to update active state
    });

    container.appendChild(pill);
  });

  // Also populate the form category dropdown
  const select = $("#resourceCategory");
  if (select.options.length <= 1) {
    categories
      .filter((c) => c !== "All")
      .forEach((category) => {
        const option = createElement("option", { text: category, attrs: { value: category } });
        select.appendChild(option);
      });
  }
}

function resourceMatchesSearch(resource, term) {
  if (!term) return true;
  const t = term.toLowerCase();
  const combined =
    `${resource.name} ${resource.category} ${resource.description} ${resource.address} ${resource.tags.join(
      " "
    )}`.toLowerCase();
  return combined.includes(t);
}

function resourceMatchesCategory(resource, category) {
  if (category === "All") return true;
  return resource.category === category;
}

function resourceMatchesFree(resource) {
  if (!freeOnly) return true;
  return resource.free;
}

function applyFilters() {
  const filtered = resources.filter(
    (r) =>
      resourceMatchesCategory(r, activeCategory) &&
      resourceMatchesSearch(r, searchTerm) &&
      resourceMatchesFree(r)
  );
  renderResources(filtered);
}

function renderResources(list) {
  const container = $("#resourceList");
  const emptyMsg = $("#noResults");
  container.innerHTML = "";

  if (list.length === 0) {
    emptyMsg.hidden = false;
    return;
  }

  emptyMsg.hidden = true;

  list.forEach((r) => {
    const card = createElement("article", { className: "resource-card reveal" });

    const header = createElement("div", { className: "resource-header" });
    const nameEl = createElement("h3", { className: "resource-name", text: r.name });
    const catEl = createElement("span", {
      className: "resource-category",
      text: r.category,
    });
    header.appendChild(nameEl);
    header.appendChild(catEl);

    const desc = createElement("p", {
      className: "resource-description",
      text: r.description,
    });

    const meta = createElement("div", { className: "resource-meta" });
    meta.innerHTML = `
      <div>${r.address}</div>
      <div>${r.contact}</div>
    `;

    const tags = createElement("div", { className: "resource-tags" });
    r.tags.forEach((tag) => {
      const tagEl = createElement("span", {
        className: "tag-pill",
        text: tag,
      });
      tags.appendChild(tagEl);
    });

    const footer = createElement("div", { className: "resource-footer" });
    const linkBtn = createElement("a", {
      className: "btn btn-outline",
      text: "Visit website",
      attrs: {
        href: r.website,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    });
    footer.appendChild(linkBtn);

    if (r.free) {
      const freeBadge = createElement("span", {
        className: "badge-free",
        text: "Free / low-cost",
      });
      footer.appendChild(freeBadge);
    }

    card.appendChild(header);
    card.appendChild(desc);
    card.appendChild(meta);
    card.appendChild(tags);
    card.appendChild(footer);

    container.appendChild(card);
  });

  // Re-attach reveal observer for newly added cards
  observeRevealElements();
}

function renderHighlights() {
  const container = $("#highlightsList");
  container.innerHTML = "";

  const featuredResources = resources.filter((r) => r.featured).slice(0, 3);
  featuredResources.forEach((r) => {
    const card = createElement("article", { className: "highlight-card reveal" });
    const label = createElement("p", {
      className: "highlight-label",
      text: "Featured resource",
    });
    const title = createElement("h3", { text: r.name });
    const desc = createElement("p", {
      text: r.description,
    });
    const why = createElement("p", {
      className: "resource-meta",
      text: `Category: ${r.category} • Serving: CATA community and surrounding neighborhoods.`,
    });

    const actions = createElement("div", { className: "resource-footer" });
    const visit = createElement("a", {
      className: "btn btn-primary",
      text: "Learn more",
      attrs: {
        href: r.website,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    });

    actions.appendChild(visit);

    card.appendChild(label);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(why);
    card.appendChild(actions);

    container.appendChild(card);
  });

  observeRevealElements();
}

function renderEvents() {
  const container = $("#eventsList");
  container.innerHTML = "";

  events.forEach((event) => {
    const card = createElement("article", { className: "event-card reveal" });
    const title = createElement("h3", { text: event.title });
    const date = createElement("p", {
      className: "event-date",
      text: event.date,
    });
    const meta = createElement("p", {
      className: "event-meta",
      text: `Location: ${event.location}`,
    });
    const desc = createElement("p", {
      className: "event-meta",
      text: event.description,
    });

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(meta);
    card.appendChild(desc);
    container.appendChild(card);
  });

  observeRevealElements();
}

function renderFaqs() {
  const container = $("#faqList");
  container.innerHTML = "";

  faqs.forEach((item, index) => {
    const wrapper = createElement("div", {
      className: "faq-item reveal",
      attrs: { "data-open": "false" },
    });

    const headerBtn = createElement("button", {
      className: "faq-header",
      attrs: {
        type: "button",
        "aria-expanded": "false",
        "aria-controls": `faq-body-${index}`,
      },
    });
    const qSpan = createElement("span", { text: item.question });
    const icon = createElement("span", {
      className: "faq-toggle-icon",
      text: "›",
      attrs: { "aria-hidden": "true" },
    });
    headerBtn.appendChild(qSpan);
    headerBtn.appendChild(icon);

    const body = createElement("div", {
      className: "faq-body",
      attrs: {
        id: `faq-body-${index}`,
        role: "region",
        "aria-label": item.question,
      },
    });
    const answerP = createElement("p", { text: item.answer });
    body.appendChild(answerP);

    headerBtn.addEventListener("click", () => {
      const isOpen = wrapper.getAttribute("data-open") === "true";
      wrapper.setAttribute("data-open", String(!isOpen));
      headerBtn.setAttribute("aria-expanded", String(!isOpen));
    });

    wrapper.appendChild(headerBtn);
    wrapper.appendChild(body);
    container.appendChild(wrapper);
  });

  observeRevealElements();
}

// Form handling
function validateEmail(value) {
  if (!value) return true; // optional
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value);
}

function validateUrl(value) {
  if (!value) return true; // optional
  try {
    // Accept only http/https
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const messageEl = $("#formMessage");

  const nameInput = $("#resourceName");
  const categorySelect = $("#resourceCategory");
  const descriptionInput = $("#resourceDescription");
  const addressInput = $("#resourceAddress");
  const contactInput = $("#resourceContact");
  const websiteInput = $("#resourceWebsite");

  const errors = {};

  if (!nameInput.value.trim()) {
    errors.resourceName = "Please enter a resource name.";
  }

  if (!categorySelect.value) {
    errors.resourceCategory = "Please select a category.";
  }

  if (!descriptionInput.value.trim()) {
    errors.resourceDescription = "Please add a short description.";
  }

  if (contactInput.value && !validateEmail(contactInput.value) && !/^\+?[0-9()[\]\s-]+$/.test(contactInput.value)) {
    errors.resourceContact =
      "Enter a valid email address or phone number (digits and basic symbols only).";
  }

  if (websiteInput.value && !validateUrl(websiteInput.value.trim())) {
    errors.resourceWebsite = "Enter a valid website URL (example.org or https://example.org).";
  }

  // Clear previous error messages
  document.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));

  if (Object.keys(errors).length > 0) {
    Object.entries(errors).forEach(([field, msg]) => {
      const errEl = document.querySelector(`[data-error-for="${field}"]`);
      if (errEl) errEl.textContent = msg;
    });
    messageEl.textContent = "";
    return;
  }

  // If valid: show success & append to pending list
  messageEl.textContent =
    "Thank you! Your suggested resource has been submitted for review. (For demo purposes, it’s added to the Pending Suggestions list below.)";

  const pendingList = $("#pendingList");
  const item = document.createElement("li");
  item.className = "pending-item";
  const categoryText = categorySelect.value || "Uncategorized";
  item.textContent = `${nameInput.value.trim()} — ${categoryText}`;
  pendingList.appendChild(item);

  form.reset();
}

// Smooth scroll
function handleSmoothScrollClicks() {
  const clickableSelectors = 'a[href^="#"], [data-scroll-target]';
  document.querySelectorAll(clickableSelectors).forEach((el) => {
    el.addEventListener("click", (event) => {
      const targetSelector =
        el.getAttribute("data-scroll-target") || el.getAttribute("href");
      if (!targetSelector || targetSelector === "#") return;
      const target = document.querySelector(targetSelector);
      if (!target) return;

      event.preventDefault();
      const headerOffset = 72;
      const rect = target.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - headerOffset + 4;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Close mobile nav after click
      const navList = document.querySelector(".nav-list");
      if (navList && navList.classList.contains("open")) {
        navList.classList.remove("open");
        const navToggle = document.querySelector(".nav-toggle");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Reveal on scroll
let revealObserver;

function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal");
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
  }

  elements.forEach((el) => {
    if (!el.classList.contains("visible")) {
      revealObserver.observe(el);
    }
  });
}

// Mobile nav toggle
function setupNavToggle() {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  if (!navToggle || !navList) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Initial UI setup
  renderCategoryFilters();
  renderResources(resources);
  renderHighlights();
  renderEvents();
  renderFaqs();
  observeRevealElements();
  setupNavToggle();
  handleSmoothScrollClicks();

  // Search input (debounced)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    const onSearch = debounce((event) => {
      searchTerm = event.target.value;
      applyFilters();
    }, 220);

    searchInput.addEventListener("input", onSearch);
  }

  // Free toggle
  const freeToggle = document.getElementById("freeToggle");
  if (freeToggle) {
    freeToggle.addEventListener("change", (event) => {
      freeOnly = event.target.checked;
      applyFilters();
    });
  }

  // Form submission
  const suggestForm = document.getElementById("suggestForm");
  if (suggestForm) {
    suggestForm.addEventListener("submit", handleFormSubmit);
  }
});

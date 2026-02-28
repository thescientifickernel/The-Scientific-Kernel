import { VideoInfo, VaultItem } from "./types";

export const POP_EXPLAINERS: VideoInfo[] = [
  {
    id: "NPdbEZ3nFDY",
    title: "Drug Development",
    url: "https://youtu.be/NPdbEZ3nFDY",
    thumbnail: "https://img.youtube.com/vi/NPdbEZ3nFDY/maxresdefault.jpg",
    description: "The journey from molecule to medicine explained through the popcorn factory analogy.",
    category: "Drug Development",
    publishedAt: "2024-01-01"
  },
  {
    id: "5zIQfWedDpHs",
    title: "PQ/CMC Deep Dive",
    url: "https://youtu.be/5zIQfWedDpHs",
    thumbnail: "https://img.youtube.com/vi/5zIQfWedDpHs/maxresdefault.jpg",
    description: "Understanding Pharmaceutical Quality and Chemistry, Manufacturing & Controls.",
    category: "Quality",
    publishedAt: "2024-01-02"
  },
  {
    id: "1787oq1tkMI",
    title: "Outsourcing Universe",
    url: "https://youtu.be/1787oq1tkMI",
    thumbnail: "https://img.youtube.com/vi/1787oq1tkMI/maxresdefault.jpg",
    description: "Exploring the role of CROs, CMOs, and CDMOs in the life sciences ecosystem.",
    category: "Outsourcing",
    publishedAt: "2024-01-03"
  },
  {
    id: "Y4m9EMI5xgs",
    title: "GXP Standards",
    url: "https://youtu.be/Y4m9EMI5xgs",
    thumbnail: "https://img.youtube.com/vi/Y4m9EMI5xgs/maxresdefault.jpg",
    description: "Good Practice standards (GMP, GCP, GLP) explained.",
    category: "Standards",
    publishedAt: "2024-01-04"
  },
  {
    id: "QA-c8mrYrrs",
    title: "IDMP Overview",
    url: "https://youtu.be/QA-c8mrYrrs",
    thumbnail: "https://img.youtube.com/vi/QA-c8mrYrrs/maxresdefault.jpg",
    description: "Identification of Medicinal Products standards.",
    category: "Standards",
    publishedAt: "2024-01-05"
  },
  {
    id: "SsoJdUcJjXw",
    title: "CDISC Standards",
    url: "https://youtu.be/SsoJdUcJjXw",
    thumbnail: "https://img.youtube.com/vi/SsoJdUcJjXw/maxresdefault.jpg",
    description: "Clinical Data Interchange Standards Consortium.",
    category: "Standards",
    publishedAt: "2024-01-06"
  },
  {
    id: "IRCkizYIB-0",
    title: "ICH Guidelines",
    url: "https://youtu.be/IRCkizYIB-0",
    thumbnail: "https://img.youtube.com/vi/IRCkizYIB-0/maxresdefault.jpg",
    description: "International Council for Harmonisation of Technical Requirements.",
    category: "Standards",
    publishedAt: "2024-01-07"
  },
  {
    id: "J5WTUAOYkYM",
    title: "Pistoia Alliance",
    url: "https://youtu.be/J5WTUAOYkYM",
    thumbnail: "https://img.youtube.com/vi/J5WTUAOYkYM/maxresdefault.jpg",
    description: "Lowering barriers to innovation in life science R&D.",
    category: "Alliances",
    publishedAt: "2024-01-08"
  },
  {
    id: "QBN8f3tERDQ",
    title: "Transcelerate",
    url: "https://youtu.be/QBN8f3tERDQ",
    thumbnail: "https://img.youtube.com/vi/QBN8f3tERDQ/maxresdefault.jpg",
    description: "Accelerating and simplifying clinical R&D.",
    category: "Alliances",
    publishedAt: "2024-01-09"
  },
  {
    id: "4wIZgI7Yifs",
    title: "Pharma's Alliance Ecosystem",
    url: "https://youtu.be/4wIZgI7Yifs",
    thumbnail: "https://img.youtube.com/vi/4wIZgI7Yifs/maxresdefault.jpg",
    description: "The invisible layer of cross-industry collaboration.",
    category: "Alliances",
    publishedAt: "2024-01-10"
  },
  {
    id: "mNGs-W6guqU",
    title: "BioPhorum",
    url: "https://youtu.be/mNGs-W6guqU",
    thumbnail: "https://img.youtube.com/vi/mNGs-W6guqU/maxresdefault.jpg",
    description: "Advancing biomanufacturing and strengthening supply chains.",
    category: "Alliances",
    publishedAt: "2024-01-11"
  }
];

export const KERNEL_VAULT: VaultItem[] = [
  {
    id: "drug-development",
    title: "The Popcorn Medicine Factory",
    category: "Drug Development",
    description: "Have you ever wondered how a tiny pill gets made and reaches a patient? It's a wild, wonderful, 10–15 year journey — and we're going to explain it using popcorn!",
    difficulty: "Sprout",
    readTime: "10 min",
    publishedAt: "2024-01-01",
    content: `
      <div class="intro-section">
        <h2>🤔 First, what IS drug development?</h2>
        <p>Imagine you want to make the world's greatest popcorn — popcorn that can cure sick people. But before you can sell it, you need to prove it actually works, that it's safe, that every bag is exactly the same, and that you've written everything down in a massive, official rulebook that government inspectors can check. THAT is drug development!</p>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
          <div class="p-4 bg-amber-primary/10 rounded-xl border border-amber-primary/20">
            <div class="text-3xl mb-2">🌽</div>
            <h3 class="font-bold">Discovery</h3>
            <p class="text-sm opacity-80">Finding the right ingredient that could fight a disease</p>
          </div>
          <div class="p-4 bg-amber-primary/10 rounded-xl border border-amber-primary/20">
            <div class="text-3xl mb-2">🧪</div>
            <h3 class="font-bold">Development</h3>
            <p class="text-sm opacity-80">Testing and perfecting the recipe in the lab</p>
          </div>
          <div class="p-4 bg-amber-primary/10 rounded-xl border border-amber-primary/20">
            <div class="text-3xl mb-2">👥</div>
            <h3 class="font-bold">Trials</h3>
            <p class="text-sm opacity-80">Testing on real people — safely and carefully</p>
          </div>
          <div class="p-4 bg-amber-primary/10 rounded-xl border border-amber-primary/20">
            <div class="text-3xl mb-2">📋</div>
            <h3 class="font-bold">Approval</h3>
            <p class="text-sm opacity-80">Showing the government it's safe and works</p>
          </div>
          <div class="p-4 bg-amber-primary/10 rounded-xl border border-amber-primary/20">
            <div class="text-3xl mb-2">🏥</div>
            <h3 class="font-bold">Patient</h3>
            <p class="text-sm opacity-80">The medicine finally reaches someone who needs it!</p>
          </div>
        </div>
      </div>
      <div class="mt-12 p-6 bg-blue-primary/10 rounded-2xl border border-blue-primary/20">
        <h3 class="text-xl font-bold mb-4">🍿 What is CMC?</h3>
        <p>CMC stands for Chemistry, Manufacturing, and Controls. It's basically the science of making sure your popcorn recipe is perfect every single time — same ingredients, same size, same amount of "medicine pop" in every kernel, made the same way in the same clean factory, and proven not to go stale.</p>
      </div>
      <div class="mt-12">
        <h2 class="text-3xl font-bold mb-8">🗺️ The Full Journey — Stage by Stage</h2>
        <div class="space-y-8">
          <div class="p-6 border-l-4 border-amber-primary bg-surface rounded-r-xl">
            <div class="text-xs font-mono text-amber-primary mb-2">Stage 1 • Target Identification</div>
            <h3 class="text-xl font-bold mb-2">Finding the Right Corn Kernel</h3>
            <p class="italic mb-4">🍿 Popcorn world: You taste thousands of corn varieties to find the one that has a special "pop" that could fight your enemy (the disease!)</p>
            <p>Scientists first identify a "target" — usually a protein or gene in the body that causes disease. Then they screen thousands (sometimes millions!) of molecules to find one that could interact with that target. This is called High-Throughput Screening.</p>
          </div>
          <div class="p-6 border-l-4 border-amber-primary bg-surface rounded-r-xl">
            <div class="text-xs font-mono text-amber-primary mb-2">Stage 2 • Lead Optimisation</div>
            <h3 class="text-xl font-bold mb-2">Tweaking the Recipe</h3>
            <p class="italic mb-4">🍿 Popcorn world: You add a sprinkle of magic seasoning, change the oil, adjust the heat — until you get the PERFECT flavour profile.</p>
            <p>Chemists tweak the molecule's structure to make it work better (more potent), cause fewer side effects (more selective), survive in the body longer (better stability), and actually be absorbed by the body (better bioavailability).</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "pq-cmc",
    title: "PQ/CMC Deep Dive",
    category: "Quality",
    description: "A complete, beginner-friendly guide to Pharmaceutical Quality / Chemistry, Manufacturing & Controls — the domains, the eCTD document structure, and the FDA's FHIR digital submission initiative.",
    difficulty: "Fully Popped",
    readTime: "15 min",
    publishedAt: "2024-01-02",
    content: `
      <div class="intro-section">
        <h2 class="text-3xl font-bold mb-6">What is PQ/CMC?</h2>
        <p>Pharmaceutical Quality / Chemistry, Manufacturing & Controls is the entire body of evidence a drug company must compile to prove that their medicine is consistently made to the same standard, is safe, pure, potent, and stable. It lives in Module 3 of every drug application globally.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="p-6 bg-surface border-t-4 border-blue-primary rounded-xl">
            <h3 class="text-xl font-bold mb-2">Chemistry (C)</h3>
            <p class="text-sm opacity-80">The chemical identity, structure, and properties of the drug substance. What is the molecule? How is it synthesised?</p>
          </div>
          <div class="p-6 bg-surface border-t-4 border-red-500 rounded-xl">
            <h3 class="text-xl font-bold mb-2">Manufacturing (M)</h3>
            <p class="text-sm opacity-80">How is the drug made, at what scale, in which facility, by which process? How is quality built in at every step?</p>
          </div>
          <div class="p-6 bg-surface border-t-4 border-green-500 rounded-xl">
            <h3 class="text-xl font-bold mb-2">Controls (C)</h3>
            <p class="text-sm opacity-80">The tests, specifications, and analytical methods that verify the drug is safe, pure, potent, and properly labelled.</p>
          </div>
        </div>
      </div>
      <div class="mt-12">
        <h2 class="text-3xl font-bold mb-6">The eCTD — The Monster Document</h2>
        <p>The electronic Common Technical Document (eCTD) is the globally-agreed format for drug applications. Defined by ICH guideline M8, it organises everything into 5 modules. Module 3 is the home of all PQ/CMC data.</p>
        <div class="mt-8 p-6 bg-surface rounded-xl border border-white/5 font-mono text-sm overflow-x-auto">
          <div class="text-amber-primary">📁 Module 3 — Quality</div>
          <div class="pl-4 mt-2">📂 3.2.S — Drug Substance (Active Ingredient / API)</div>
          <div class="pl-8 text-text-muted">📄 3.2.S.1 General Information</div>
          <div class="pl-8 text-text-muted">📄 3.2.S.2 Manufacture</div>
          <div class="pl-8 text-text-muted">📄 3.2.S.3 Characterisation</div>
          <div class="pl-4 mt-2">📂 3.2.P — Drug Product (Finished Formulation)</div>
          <div class="pl-8 text-text-muted">📄 3.2.P.1 Description and Composition</div>
          <div class="pl-8 text-text-muted">📄 3.2.P.2 Pharmaceutical Development</div>
          <div class="pl-8 text-text-muted">📄 3.2.P.3 Manufacture</div>
        </div>
      </div>
    `
  },
  {
    id: "outsourcing-universe",
    title: "The Outsourcing Universe",
    category: "Outsourcing",
    description: "No pharma company builds a drug alone. Discover who the CROs, CMOs, and CDMOs really are, what they do at each stage, and how they interact with drug sponsors.",
    difficulty: "Kernel",
    readTime: "12 min",
    publishedAt: "2024-01-03",
    content: `
      <div class="intro-section">
        <h2 class="text-3xl font-bold mb-6">Three Types of Outsourcing Partner</h2>
        <p>Drug development is enormously complex and expensive. Rather than build every capability in-house, pharmaceutical and biotech companies outsource specific activities to specialists.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="p-6 bg-surface border-t-4 border-cyan-400 rounded-xl">
            <h3 class="text-xl font-bold mb-2">CRO</h3>
            <p class="text-xs text-text-muted mb-4 italic">Contract Research Organisation</p>
            <p class="text-sm opacity-80">Research & Development partner — no manufacturing. Specialise in clinical trials and data management.</p>
          </div>
          <div class="p-6 bg-surface border-t-4 border-violet-400 rounded-xl">
            <h3 class="text-xl font-bold mb-2">CMO</h3>
            <p class="text-xs text-text-muted mb-4 italic">Contract Manufacturing Organisation</p>
            <p class="text-sm opacity-80">Manufacturing partner — production only. Focus on GMP-compliant manufacturing and packaging.</p>
          </div>
          <div class="p-6 bg-surface border-t-4 border-orange-400 rounded-xl">
            <h3 class="text-xl font-bold mb-2">CDMO</h3>
            <p class="text-xs text-text-muted mb-4 italic">Contract Development & Manufacturing Organisation</p>
            <p class="text-sm opacity-80">Development + Manufacturing — end-to-end. Can take a molecule from early formulation to commercial production.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "alliance-map",
    title: "The Alliance Map",
    category: "Alliances",
    description: "Behind every drug approval is an invisible layer of cross-industry collaboration — standards bodies, data consortia, and pre-competitive alliances.",
    difficulty: "Fully Popped",
    readTime: "15 min",
    publishedAt: "2024-01-04",
    content: `
      <div class="intro-section">
        <h2 class="text-3xl font-bold mb-6">Pharma's Alliance Ecosystem</h2>
        <p>Pre-competitive alliances resolve the fundamental paradox of drug development: shared problems are best solved together. By pooling resources, industry consortia enable progress no single company could achieve alone.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="p-6 bg-surface border-l-4 border-red-800 rounded-r-xl">
            <h3 class="text-xl font-bold mb-2">ICH</h3>
            <p class="text-sm opacity-80">International Council for Harmonisation. Sets the global rules for drug registration and CMC requirements.</p>
          </div>
          <div class="p-6 bg-surface border-l-4 border-blue-800 rounded-r-xl">
            <h3 class="text-xl font-bold mb-2">CDISC</h3>
            <p class="text-sm opacity-80">Clinical Data Interchange Standards Consortium. Makes clinical research data universally interoperable.</p>
          </div>
          <div class="p-6 bg-surface border-l-4 border-green-800 rounded-r-xl">
            <h3 class="text-xl font-bold mb-2">TransCelerate</h3>
            <p class="text-sm opacity-80">Global nonprofit dedicated to accelerating and simplifying the clinical R&D process.</p>
          </div>
          <div class="p-6 bg-surface border-l-4 border-amber-800 rounded-r-xl">
            <h3 class="text-xl font-bold mb-2">Accumulus</h3>
            <p class="text-sm opacity-80">Regulatory cloud platform enabling real-time regulatory exchange across 60+ countries.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "standards-universe",
    title: "The Standards Universe",
    category: "Standards",
    description: "Every drug development activity operates inside a dense web of mandatory and voluntary standards. GxP, ICH, ISO, and digital protocols interlock here.",
    difficulty: "Fully Popped",
    readTime: "20 min",
    publishedAt: "2024-01-05",
    content: `
      <div class="intro-section">
        <h2 class="text-3xl font-bold mb-6">The Standards Universe</h2>
        <p>Every drug development activity — from first synthesis to post-marketing surveillance — operates inside a dense web of mandatory and voluntary standards.</p>
        <div class="mt-8 space-y-4">
          <div class="p-4 bg-surface rounded-xl border border-white/5 flex items-center gap-4">
            <div class="w-2 h-2 rounded-full bg-amber-500"></div>
            <div class="font-bold">GxP Practices</div>
            <div class="text-sm text-text-muted">GLP, GMP, GCP, GDP, GVP</div>
          </div>
          <div class="p-4 bg-surface rounded-xl border border-white/5 flex items-center gap-4">
            <div class="w-2 h-2 rounded-full bg-red-500"></div>
            <div class="font-bold">ICH Quality</div>
            <div class="text-sm text-text-muted">Q1–Q14 CMC Guidelines</div>
          </div>
          <div class="p-4 bg-surface rounded-xl border border-white/5 flex items-center gap-4">
            <div class="w-2 h-2 rounded-full bg-blue-500"></div>
            <div class="font-bold">Digital / FHIR</div>
            <div class="text-sm text-text-muted">HL7 FHIR, PQ/CMC FHIR IG</div>
          </div>
        </div>
      </div>
    `
  }
];

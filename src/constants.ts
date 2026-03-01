import { VideoInfo, VaultItem } from "./types";

export const POP_EXPLAINERS: VideoInfo[] = [
  {
    id: "NPdbEZ3nFDY",
    title: "Drug Development",
    url: "https://youtu.be/NPdbEZ3nFDY",
    thumbnail: "https://img.youtube.com/vi/NPdbEZ3nFDY/maxresdefault.jpg",
    description: "The journey from molecule to medicine explained through the popcorn analogy.",
    category: "Drug Development",
    publishedAt: "2024-01-01"
  },
  {
    id: "5zIQfWeDpHs",
    title: "PQ/CMC Deep Dive",
    url: "https://youtu.be/5zIQfWeDpHs",
    thumbnail: "https://img.youtube.com/vi/5zIQfWeDpHs/maxresdefault.jpg",
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
  },
  {
    id: "9Z_BOBK2Ytc",
    title: "ISA 88 and ISA 95 - Rules Behind Every Pill",
    url: "https://youtu.be/9Z_BOBK2Ytc",
    thumbnail: "https://img.youtube.com/vi/9Z_BOBK2Ytc/maxresdefault.jpg",
    description: "Why do we have so many standards? Exploring the gap between the shop floor and the boardroom.",
    category: "Alliances",
    publishedAt: "2024-01-12"
  }
];

export const KERNEL_VAULT: VaultItem[] = [
  {
    id: "drug-development",
    title: "The Drug Development Lifecycle",
    category: "Drug Development",
    description: "A comprehensive guide to the 10–15 year journey of bringing a new medicine to patients, using the popcorn analogy to explain the complex drug development lifecycle.",
    difficulty: "Sprout",
    readTime: "12 min",
    publishedAt: "2024-01-01",
    content: `
      <div class="prose prose-invert max-w-none">
        <!-- Hero Intro -->
        <div class="mb-16 p-12 rounded-[3rem] bg-gradient-to-br from-amber-primary/20 via-amber-primary/5 to-transparent border border-amber-primary/30 relative overflow-hidden shadow-2xl shadow-amber-primary/5">
          <div class="absolute -top-10 -right-10 p-8 opacity-10 text-[12rem] rotate-12">🍿</div>
          <h2 class="text-5xl font-serif font-bold text-amber-primary mb-8 italic leading-tight">The Drug Development Lifecycle:<br/><span class="text-text-main not-italic">From Molecule to Medicine</span></h2>
          <p class="text-2xl leading-relaxed mb-8 text-text-main/90">Drug development is like making the perfect batch of popcorn. It starts with a kernel, requires the right environment, and results in something that expands into a life-saving therapy.</p>
          <div class="flex flex-wrap gap-6">
            <div class="px-6 py-3 bg-amber-primary/10 rounded-2xl border border-amber-primary/20 flex items-center gap-3">
              <span class="text-amber-primary font-bold">AVG COST:</span>
              <span class="font-mono">$2.6 Billion</span>
            </div>
            <div class="px-6 py-3 bg-amber-primary/10 rounded-2xl border border-amber-primary/20 flex items-center gap-3">
              <span class="text-amber-primary font-bold">AVG TIME:</span>
              <span class="font-mono">12.5 Years</span>
            </div>
          </div>
        </div>

        <!-- The Core Philosophy -->
        <div class="my-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-3xl font-serif font-bold mb-6 italic">The Reproducibility Challenge</h3>
            <p class="text-lg leading-relaxed text-text-muted mb-6">Identifying a promising molecule in a laboratory setting is only the first step. To become a viable medicine, that molecule must be stable, deliverable in a specific dosage form (e.g., tablet, injection), and capable of being reproduced at scale with absolute consistency. If a process cannot yield millions of identical units, it is not a pharmaceutical product.</p>
            <p class="text-lg leading-relaxed text-text-muted">This is the domain of <strong>CMC (Chemistry, Manufacturing, and Controls)</strong>. CMC ensures that every unit produced meets the same rigorous quality standards as the batches used in clinical trials.</p>
          </div>
          <div class="p-10 bg-surface border border-border rounded-[2.5rem] relative">
            <div class="absolute top-4 right-6 text-xs font-mono text-amber-primary uppercase tracking-widest">The CMC Pillar</div>
            <div class="space-y-6 mt-4">
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-amber-primary/10 flex items-center justify-center text-amber-primary font-bold shrink-0 italic text-xl">C</div>
                <div>
                  <h4 class="font-bold text-lg">Chemistry</h4>
                  <p class="text-sm text-text-muted">The molecular identity. Is it pure? Is it stable? What are the impurities? We define the <strong>Drug Substance</strong>.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-amber-primary/10 flex items-center justify-center text-amber-primary font-bold shrink-0 italic text-xl">M</div>
                <div>
                  <h4 class="font-bold text-lg">Manufacturing</h4>
                  <p class="text-sm text-text-muted">The process. How do we scale from a test tube to a 20,000-liter bioreactor? We define the <strong>Drug Product</strong>.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-amber-primary/10 flex items-center justify-center text-amber-primary font-bold shrink-0 italic text-xl">C</div>
                <div>
                  <h4 class="font-bold text-lg">Controls</h4>
                  <p class="text-sm text-text-muted">The verification. How do we prove every batch meets the exact same spec? We define the <strong>Specifications</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Timeline -->
        <h2 class="text-4xl font-serif font-bold mb-16 text-center italic">The 10,000 Day Journey</h2>
        
        <div class="space-y-32 relative before:absolute before:left-[23px] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-amber-primary before:via-amber-primary/50 before:to-transparent">
          
          <!-- Discovery -->
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-amber-primary flex items-center justify-center text-bg font-bold shadow-[0_0_30px_rgba(242,125,38,0.5)] z-10 group-hover:scale-110 transition-transform duration-500">1</div>
            <div class="text-xs font-mono text-amber-primary mb-4 uppercase tracking-[0.4em] font-bold">Phase 0: Discovery (Years 1-3)</div>
            <h3 class="text-4xl font-bold mb-8">Sifting for Gold</h3>
            <div class="grid lg:grid-cols-3 gap-8">
              <div class="lg:col-span-2 space-y-6">
                <p class="text-xl leading-relaxed text-text-muted">The journey begins with <strong>Target Identification</strong>. We find a biological "lock" (a protein or receptor) that is causing a disease. Then, we look for the "key" (a molecule).</p>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="p-4 bg-surface border border-border rounded-xl">
                    <h5 class="font-bold text-amber-primary text-sm mb-2">Target Validation</h5>
                    <p class="text-xs text-text-muted">Proving that hitting the target actually affects the disease.</p>
                  </div>
                  <div class="p-4 bg-surface border border-border rounded-xl">
                    <h5 class="font-bold text-amber-primary text-sm mb-2">Lead Optimization</h5>
                    <p class="text-xs text-text-muted">Tweaking the molecule to make it more potent and less toxic.</p>
                  </div>
                </div>
                <div class="p-8 bg-surface/50 border border-border rounded-3xl border-l-8 border-l-amber-primary italic text-lg text-text-muted leading-relaxed">
                  "We screen up to 10,000 compounds just to find ONE that shows promise. This is the 'Hit-to-Lead' phase."
                </div>
                <p class="text-lg text-text-muted leading-relaxed">During this stage, we also perform <strong>High-Throughput Screening (HTS)</strong>, using robotics and sensitive detectors to rapidly conduct millions of chemical, genetic, or pharmacological tests.</p>
              </div>
              <div class="bg-surface border border-border p-8 rounded-3xl">
                <h4 class="font-bold mb-4 text-sm uppercase tracking-widest text-amber-primary">Discovery Metrics:</h4>
                <ul class="space-y-4 text-sm">
                  <li class="flex justify-between border-b border-border pb-2"><span>Compounds Screened</span> <span class="font-mono font-bold">5,000-10,000</span></li>
                  <li class="flex justify-between border-b border-border pb-2"><span>Lead Candidates</span> <span class="font-mono font-bold">10-20</span></li>
                  <li class="flex justify-between border-b border-border pb-2"><span>Pre-clinical Entry</span> <span class="font-mono font-bold">1-5</span></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Pre-Clinical -->
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-amber-primary flex items-center justify-center text-bg font-bold shadow-[0_0_30px_rgba(242,125,38,0.5)] z-10 group-hover:scale-110 transition-transform duration-500">2</div>
            <div class="text-xs font-mono text-amber-primary mb-4 uppercase tracking-[0.4em] font-bold">Phase 0.5: Pre-Clinical (Years 3-5)</div>
            <h3 class="text-4xl font-bold mb-8">The Safety Barrier</h3>
            <div class="grid lg:grid-cols-2 gap-12">
              <div class="space-y-6">
                <p class="text-xl leading-relaxed text-text-muted">Before a human ever touches the drug, we must prove it isn't toxic. This involves <strong>GLP (Good Laboratory Practice)</strong> toxicology studies.</p>
                <div class="p-6 bg-amber-primary/5 border border-amber-primary/20 rounded-2xl">
                  <h4 class="font-bold text-amber-primary mb-2">ADME Profiling:</h4>
                  <p class="text-sm text-text-muted">Absorption, Distribution, Metabolism, and Excretion. How does the body process the drug? Does it reach the target organ?</p>
                </div>
                <p class="text-lg text-text-muted leading-relaxed">We also look at <strong>Pharmacokinetics (PK)</strong> and <strong>Pharmacodynamics (PD)</strong> to understand the dose-response relationship and potential side effects in animal models.</p>
                <div class="p-4 bg-surface border border-border rounded-xl">
                  <h5 class="font-bold text-amber-primary text-sm mb-2">Safety Pharmacology</h5>
                  <p class="text-xs text-text-muted">Checking for effects on vital organs like the heart, lungs, and brain.</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="p-6 bg-surface border border-border rounded-2xl flex items-center gap-6">
                  <div class="text-3xl">🧪</div>
                  <div>
                    <h5 class="font-bold">In Vitro</h5>
                    <p class="text-xs text-text-muted">Testing in cell cultures and tissues to understand cellular response.</p>
                  </div>
                </div>
                <div class="p-6 bg-surface border border-border rounded-2xl flex items-center gap-6">
                  <div class="text-3xl">🐭</div>
                  <div>
                    <h5 class="font-bold">In Vivo</h5>
                    <p class="text-xs text-text-muted">Testing in animal models for systemic effects and toxicity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Clinical Trials -->
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-amber-primary flex items-center justify-center text-bg font-bold shadow-[0_0_30px_rgba(242,125,38,0.5)] z-10 group-hover:scale-110 transition-transform duration-500">3</div>
            <div class="text-xs font-mono text-amber-primary mb-4 uppercase tracking-[0.4em] font-bold">Phase I-III: Clinical (Years 5-11)</div>
            <h3 class="text-4xl font-bold mb-8">The Human Proof</h3>
            <div class="space-y-12">
              <div class="grid md:grid-cols-3 gap-8">
                <div class="p-8 bg-surface border border-border rounded-3xl relative overflow-hidden">
                  <div class="absolute top-0 right-0 p-4 opacity-5 text-4xl font-bold">PH I</div>
                  <h4 class="text-2xl font-bold mb-4 text-amber-primary">Safety</h4>
                  <p class="text-sm text-text-muted mb-6">20-100 healthy volunteers. Finding the maximum tolerated dose and understanding PK in humans.</p>
                  <div class="text-xs font-mono text-amber-primary uppercase font-bold">Focus: Toxicity & PK</div>
                </div>
                <div class="p-8 bg-surface border border-border rounded-3xl relative overflow-hidden">
                  <div class="absolute top-0 right-0 p-4 opacity-5 text-4xl font-bold">PH II</div>
                  <h4 class="text-2xl font-bold mb-4 text-amber-primary">Efficacy</h4>
                  <p class="text-sm text-text-muted mb-6">100-300 patients. Does it actually work for the disease? What is the optimal dose?</p>
                  <div class="text-xs font-mono text-amber-primary uppercase font-bold">Focus: Dose-Ranging</div>
                </div>
                <div class="p-8 bg-surface border border-border rounded-3xl relative overflow-hidden">
                  <div class="absolute top-0 right-0 p-4 opacity-5 text-4xl font-bold">PH III</div>
                  <h4 class="text-2xl font-bold mb-4 text-amber-primary">Confirmation</h4>
                  <p class="text-sm text-text-muted mb-6">1,000-3,000+ patients. Final proof of safety and efficacy in a large, diverse population.</p>
                  <div class="text-xs font-mono text-amber-primary uppercase font-bold">Focus: Pivotal Data</div>
                </div>
              </div>
              <div class="p-10 bg-blue-primary/5 border border-blue-primary/20 rounded-[2.5rem] flex flex-col md:flex-row gap-10 items-center">
                <div class="text-6xl">📊</div>
                <div>
                  <h4 class="text-2xl font-bold mb-4">The Valley of Death</h4>
                  <p class="text-lg text-text-muted leading-relaxed">Phase II is often called the "Valley of Death." It's where most drugs fail. Proving efficacy in a real patient population is significantly harder than showing it in a lab. Only about 30% of drugs pass this stage.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Manufacturing & Scale -->
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-blue-primary flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10 group-hover:scale-110 transition-transform duration-500">M</div>
            <div class="text-xs font-mono text-blue-primary mb-4 uppercase tracking-[0.4em] font-bold">The Manufacturing Scale-Up</div>
            <h3 class="text-4xl font-bold mb-8">Industrial Scale Production</h3>
            <div class="grid lg:grid-cols-2 gap-12">
              <div class="space-y-6">
                <p class="text-xl leading-relaxed text-text-muted">Transitioning from laboratory-scale synthesis to commercial production is a monumental task in <strong>Process Engineering</strong>. The goal is to move from small batches to massive industrial output without compromising quality.</p>
                <div class="p-8 bg-surface border border-border rounded-3xl">
                  <h4 class="font-bold mb-4 text-blue-primary">Key Challenges:</h4>
                  <ul class="space-y-2 text-sm text-text-muted">
                    <li>• Heat transfer in large vessels (Thermodynamics)</li>
                    <li>• Mixing uniformity at scale (Fluid Dynamics)</li>
                    <li>• Sterility maintenance (Aseptic Processing)</li>
                    <li>• Supply chain of raw materials (Logistics)</li>
                    <li>• Process Validation (Consistency)</li>
                  </ul>
                </div>
              </div>
              <div class="p-10 bg-surface border border-border rounded-[2.5rem] flex flex-col justify-center">
                <h4 class="text-2xl font-bold mb-4 italic font-serif text-blue-primary">Continuous Manufacturing</h4>
                <p class="text-sm text-text-muted leading-relaxed">The industry is moving from "Batch" to "Continuous" manufacturing. Instead of making big pots of medicine, the ingredients flow through a system that never stops, allowing for real-time quality monitoring and much higher efficiency. This is the future of CMC.</p>
              </div>
            </div>
          </div>

          <!-- Approval -->
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-amber-primary flex items-center justify-center text-bg font-bold shadow-[0_0_30px_rgba(242,125,38,0.5)] z-10 group-hover:scale-110 transition-transform duration-500">4</div>
            <div class="text-xs font-mono text-amber-primary mb-4 uppercase tracking-[0.4em] font-bold">Phase IV: Approval & Launch (Years 11-13)</div>
            <h3 class="text-4xl font-bold mb-8">The Finish Line</h3>
            <div class="grid lg:grid-cols-2 gap-12">
              <div class="space-y-6">
                <p class="text-xl leading-relaxed text-text-muted">After Phase III, the sponsor submits an <strong>NDA (New Drug Application)</strong> or <strong>BLA (Biologics License Application)</strong>. This is a document with hundreds of thousands of pages.</p>
                <div class="p-8 bg-surface border border-border rounded-3xl">
                  <h4 class="font-bold mb-4 text-amber-primary">The Review Process:</h4>
                  <ul class="space-y-2 text-sm text-text-muted">
                    <li>• PDUFA (Prescription Drug User Fee Act) timelines</li>
                    <li>• Advisory Committee meetings (Expert review)</li>
                    <li>• Facility inspections (GMP verification)</li>
                    <li>• Labeling negotiations</li>
                  </ul>
                </div>
              </div>
              <div class="p-10 bg-surface border border-border rounded-[2.5rem] flex flex-col justify-center">
                <h4 class="text-2xl font-bold mb-4 italic font-serif text-amber-primary">Post-Market Surveillance</h4>
                <p class="text-sm text-text-muted leading-relaxed">Even after approval, the drug is monitored in the real world. This is Phase IV. Any rare side effects that didn't show up in the 3,000-person trial might show up in a 3,000,000-person population. This is critical for long-term safety.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="mt-40 p-16 rounded-[3.5rem] bg-surface border border-border text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-primary to-transparent"></div>
          <h2 class="text-4xl font-serif font-bold mb-8 italic">The Scientific Pursuit</h2>
          <p class="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-12">Drug development is a high-stakes endeavor requiring immense investment and scientific rigor. However, successful development results in life-changing therapies. Every pharmaceutical product is a testament to years of dedicated research and engineering excellence.</p>
          <div class="inline-flex items-center gap-3 px-8 py-4 bg-amber-primary text-bg font-bold rounded-2xl shadow-xl shadow-amber-primary/20 hover:scale-105 transition-transform cursor-pointer">
            Explore the CMC Deep Dive →
          </div>
        </div>
      </div>
    `
  },
  {
    id: "pq-cmc",
    title: "PQ/CMC Deep Dive",
    category: "Quality",
    description: "A complete, beginner-friendly guide to Pharmaceutical Quality / Chemistry, Manufacturing & Controls — the domains, the eCTD document structure, and why it's like popping corn.",
    difficulty: "Fully Popped",
    readTime: "15 min",
    publishedAt: "2024-01-02",
    content: `
      <div class="prose prose-invert max-w-none">
        <!-- Hero Section -->
        <div class="mb-16 p-12 rounded-[3rem] bg-gradient-to-br from-blue-primary/20 via-blue-primary/5 to-transparent border border-blue-primary/30 relative overflow-hidden shadow-2xl shadow-blue-primary/5">
          <div class="absolute -top-10 -right-10 p-8 opacity-10 text-[12rem] font-serif rotate-12">Q</div>
          <h2 class="text-5xl font-serif font-bold mb-8 leading-tight">PQ/CMC Deep Dive:<br/><span class="text-blue-primary italic">The Art of the Perfect Pop</span></h2>
          <p class="text-2xl leading-relaxed text-text-muted mb-8">Pharmaceutical Quality / Chemistry, Manufacturing & Controls (PQ/CMC) is the secret to the perfect pop. It is the proof that every kernel is consistently pure, potent, and stable from the first batch to the millionth.</p>
          <div class="flex flex-wrap gap-4">
            <div class="px-6 py-3 bg-blue-primary/10 rounded-2xl border border-blue-primary/20 flex items-center gap-3">
              <span class="text-blue-primary font-bold">CORE GUIDELINE:</span>
              <span class="font-mono">ICH Q8, Q9, Q10, Q11</span>
            </div>
          </div>
        </div>

        <!-- The Quality Triangle -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
          <div class="group p-10 bg-surface border-t-8 border-blue-primary rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="text-5xl mb-8 group-hover:scale-110 transition-transform">🧪</div>
            <h3 class="text-3xl font-bold mb-4">Chemistry</h3>
            <p class="leading-relaxed text-text-muted mb-8">The molecular blueprint. We define the <strong>Drug Substance (API)</strong> — its chemical structure, synthesis pathway, and impurity profile. We ensure stability through rigorous testing.</p>
            <div class="pt-6 border-t border-border text-xs font-mono text-blue-primary uppercase tracking-[0.3em] font-bold">Identity & Purity</div>
          </div>
          <div class="group p-10 bg-surface border-t-8 border-red-500 rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="text-5xl mb-8 group-hover:scale-110 transition-transform">🏭</div>
            <h3 class="text-3xl font-bold mb-4">Manufacturing</h3>
            <p class="leading-relaxed text-text-muted mb-8">The industrial process. We document the <strong>Drug Product</strong> formulation, the equipment used, and the scale-up strategy. This includes process validation and environmental controls.</p>
            <div class="pt-6 border-t border-border text-xs font-mono text-red-500 uppercase tracking-[0.3em] font-bold">Process & Scale</div>
          </div>
          <div class="group p-10 bg-surface border-t-8 border-green-500 rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="text-5xl mb-8 group-hover:scale-110 transition-transform">🔬</div>
            <h3 class="text-3xl font-bold mb-4">Controls</h3>
            <p class="leading-relaxed text-text-muted mb-8">The verification layer. Analytical methods, specifications, and stability data that prove the drug remains effective over its entire shelf life.</p>
            <div class="pt-6 border-t border-border text-xs font-mono text-green-500 uppercase tracking-[0.3em] font-bold">Verification & Testing</div>
          </div>
        </div>

        <!-- The eCTD Module 3 -->
        <div class="my-32">
          <div class="flex items-center gap-6 mb-12">
            <div class="w-20 h-20 rounded-3xl bg-amber-primary/10 flex items-center justify-center text-amber-primary text-4xl shadow-lg shadow-amber-primary/5">📁</div>
            <div>
              <h2 class="text-4xl font-serif font-bold italic">The eCTD Module 3</h2>
              <p class="text-xl text-text-muted">The global standard for pharmaceutical quality documentation.</p>
            </div>
          </div>
          
          <div class="p-12 bg-surface rounded-[3rem] border border-border font-mono text-sm overflow-x-auto shadow-2xl relative">
            <div class="absolute top-0 right-0 p-12 opacity-5 text-8xl">FILE_SYS</div>
            <div class="flex items-center gap-4 text-amber-primary mb-12">
              <span class="text-4xl">📁</span>
              <span class="font-bold text-3xl tracking-tight">m3-quality</span>
            </div>
            <div class="pl-16 space-y-12 border-l-2 border-border/30 ml-5">
              <!-- Drug Substance -->
              <div class="relative">
                <div class="absolute -left-[53px] top-2 w-5 h-5 rounded-full bg-blue-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div class="flex items-center gap-4 text-blue-primary mb-6">
                  <span class="text-2xl">📂</span>
                  <span class="font-bold text-xl">3.2.S — Drug Substance (API)</span>
                </div>
                <div class="pl-12 grid md:grid-cols-2 gap-x-12 gap-y-4 text-text-muted text-base">
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.S.1 General Information (Nomenclature, Structure)
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.S.2 Manufacture (Process, Materials, Controls)
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.S.3 Characterisation (Elucidation of Structure)
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.S.4 Control of Drug Substance (Specs, Methods)
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.S.5 Reference Standards
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.S.6 Container Closure System
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.S.7 Stability (Summary, Post-approval Protocol)
                  </div>
                </div>
              </div>
              <!-- Drug Product -->
              <div class="relative">
                <div class="absolute -left-[53px] top-2 w-5 h-5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                <div class="flex items-center gap-4 text-green-500 mb-6">
                  <span class="text-2xl">📂</span>
                  <span class="font-bold text-xl">3.2.P — Drug Product (Formulation)</span>
                </div>
                <div class="pl-12 grid md:grid-cols-2 gap-x-12 gap-y-4 text-text-muted text-base">
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.P.1 Description and Composition
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.P.2 Pharmaceutical Development (QbD)
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.P.3 Manufacture (Process, Batch Formula)
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.P.4 Control of Excipients
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.P.5 Control of Drug Product (Specs, Methods)
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.P.7 Container Closure System
                  </div>
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> 3.2.P.8 Stability (Data, Shelf-life)
                  </div>
                </div>
              </div>
              <!-- Regional Information -->
              <div class="relative">
                <div class="absolute -left-[53px] top-2 w-5 h-5 rounded-full bg-amber-primary shadow-[0_0_15px_rgba(242,125,38,0.5)]"></div>
                <div class="flex items-center gap-4 text-amber-primary mb-6">
                  <span class="text-2xl">📂</span>
                  <span class="font-bold text-xl">3.2.R — Regional Information</span>
                </div>
                <div class="pl-12 text-text-muted text-base">
                  <div class="flex items-center gap-3 hover:text-text-main transition-colors cursor-default group">
                    <span class="opacity-50 group-hover:opacity-100">📄</span> Country-specific requirements (e.g., Process Validation for EU)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Digital Transformation: FHIR -->
        <div class="my-32 p-16 rounded-[4rem] bg-surface border border-border relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-primary/5 rounded-full blur-[100px] -z-10 group-hover:bg-blue-primary/10 transition-all duration-1000"></div>
          <h2 class="text-5xl font-serif font-bold mb-10 italic">The FHIR Revolution</h2>
          <p class="text-2xl leading-relaxed mb-12 text-text-muted">The FDA and other regulators are moving from static PDF documents to <strong>Structured Data</strong>. The PQ/CMC FHIR Implementation Guide is the map for this transition, enabling real-time data exchange.</p>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="space-y-8">
              <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-blue-primary/40 transition-all group/card">
                <h4 class="text-2xl font-bold mb-4 text-blue-primary flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-blue-primary/10 flex items-center justify-center text-sm">01</span>
                  Interoperability
                </h4>
                <p class="text-lg text-text-muted leading-relaxed">Data flows seamlessly between sponsors, CDMOs, and regulators. No more manual data entry or PDF scraping. This reduces errors and accelerates timelines.</p>
              </div>
              <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-blue-primary/40 transition-all group/card">
                <h4 class="text-2xl font-bold mb-4 text-blue-primary flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-blue-primary/10 flex items-center justify-center text-sm">02</span>
                  Data Integrity
                </h4>
                <p class="text-lg text-text-muted leading-relaxed">Machine-readable data allows for automated validation of specifications, stability limits, and manufacturing changes. This ensures a higher level of compliance.</p>
              </div>
            </div>
            <div class="bg-bg border border-border rounded-[3rem] p-12 flex flex-col justify-center relative overflow-hidden">
              <div class="absolute top-4 right-6 font-mono text-[10px] text-text-muted uppercase tracking-widest">FHIR Resource Example</div>
              <pre class="text-xs font-mono text-blue-primary/80 leading-relaxed">
{
  "resourceType": "SubstanceDefinition",
  "id": "api-001",
  "name": [
    { "name": "Popcorn-A-Cillin" }
  ],
  "structure": {
    "molecularFormula": "C12H16N2O3",
    "purity": "99.9%",
    "opticalActivity": "dextrorotatory"
  },
  "property": [
    { "type": "melting-point", "value": "156 C" }
  ]
}
              </pre>
              <div class="mt-8 pt-8 border-t border-border">
                <p class="text-sm text-text-muted italic">"Computers don't read PDFs. They read FHIR. This is how we accelerate the review of life-saving medicines and ensure patient safety through data."</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Quality by Design (QbD) -->
        <div class="my-32">
          <h2 class="text-4xl font-serif font-bold mb-12 text-center italic">Quality by Design (QbD)</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="p-12 bg-surface border border-border rounded-[3rem]">
              <h4 class="text-2xl font-bold mb-6 text-amber-primary">The Old Way: Testing Quality In</h4>
              <p class="text-lg text-text-muted leading-relaxed">Make a batch, test it at the end. If it fails, throw it away. High waste, high risk, low understanding of the process. Quality is an afterthought.</p>
            </div>
            <div class="p-12 bg-amber-primary/5 border border-amber-primary/30 rounded-[3rem]">
              <h4 class="text-2xl font-bold mb-6 text-amber-primary">The QbD Way: Building Quality In</h4>
              <p class="text-lg text-text-muted leading-relaxed">Define the <strong>Quality Target Product Profile (QTPP)</strong>. Identify <strong>Critical Quality Attributes (CQAs)</strong>. Understand how process parameters (CPPs) affect those attributes. Control the process through a <strong>Design Space</strong>.</p>
            </div>
          </div>
          <div class="mt-12 p-8 bg-surface border border-border rounded-3xl">
            <h4 class="font-bold mb-4">The QbD Workflow:</h4>
            <div class="flex flex-wrap gap-4">
              <div class="px-4 py-2 bg-bg border border-border rounded-xl text-xs">QTPP Definition</div>
              <div class="px-4 py-2 bg-bg border border-border rounded-xl text-xs">CQA Identification</div>
              <div class="px-4 py-2 bg-bg border border-border rounded-xl text-xs">Risk Assessment</div>
              <div class="px-4 py-2 bg-bg border border-border rounded-xl text-xs">Design of Experiments (DoE)</div>
              <div class="px-4 py-2 bg-bg border border-border rounded-xl text-xs">Control Strategy</div>
            </div>
          </div>
        </div>

        <!-- Footer Call to Action -->
        <div class="mt-40 text-center">
          <div class="inline-block p-1 rounded-3xl bg-gradient-to-r from-blue-primary via-amber-primary to-blue-primary animate-gradient-x">
            <div class="px-12 py-6 bg-bg rounded-[1.4rem] hover:bg-transparent transition-colors group">
              <h3 class="text-2xl font-bold group-hover:text-bg transition-colors">Master the Kernel. Shape the Future of Quality.</h3>
            </div>
          </div>
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
      <div class="prose prose-invert max-w-none">
        <!-- Hero Section -->
        <div class="mb-16 p-12 rounded-[3rem] bg-gradient-to-br from-blue-primary/20 via-blue-primary/5 to-transparent border border-blue-primary/30 relative overflow-hidden shadow-2xl shadow-blue-primary/5">
          <div class="absolute -top-10 -right-10 p-8 opacity-10 text-[12rem] font-serif rotate-12 text-blue-primary">O</div>
          <h2 class="text-5xl font-serif font-bold mb-8 leading-tight text-blue-primary italic">The Outsourcing Universe:<br/><span class="text-text-main not-italic">CROs, CMOs, and the CDMO Revolution</span></h2>
          <p class="text-2xl leading-relaxed text-text-muted mb-8">No pharma company builds a drug alone. The Outsourcing Universe is a vast network of specialized partners that provide the expertise, equipment, and scale needed to bring a molecule to market.</p>
          <div class="flex flex-wrap gap-4">
            <div class="px-6 py-3 bg-blue-primary/10 rounded-2xl border border-blue-primary/20 flex items-center gap-3">
              <span class="text-blue-primary font-bold">MARKET SIZE:</span>
              <span class="font-mono">$150B+ (2024)</span>
            </div>
            <div class="px-6 py-3 bg-blue-primary/10 rounded-2xl border border-blue-primary/20 flex items-center gap-3">
              <span class="text-blue-primary font-bold">ECOSYSTEM:</span>
              <span class="font-mono">CRO, CMO, CDMO</span>
            </div>
          </div>
        </div>

        <!-- The Three Pillars of Outsourcing -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
          <div class="group p-10 bg-surface border-t-8 border-blue-primary rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="text-5xl mb-8 group-hover:scale-110 transition-transform">🧪</div>
            <h3 class="text-3xl font-bold mb-2">CRO</h3>
            <p class="text-xs text-blue-primary font-mono mb-6 uppercase tracking-widest font-bold">Contract Research Organisation</p>
            <p class="leading-relaxed text-text-muted mb-8">Focused on the "R" in R&D. They run clinical trials, manage data, and handle regulatory submissions. They are the masters of the clinic.</p>
            <div class="space-y-3 pt-6 border-t border-border">
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-blue-primary"></span> Clinical Trial Design</div>
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-blue-primary"></span> Site Monitoring</div>
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-blue-primary"></span> Biostatistics</div>
            </div>
          </div>
          <div class="group p-10 bg-surface border-t-8 border-violet-400 rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="text-5xl mb-8 group-hover:scale-110 transition-transform">🏭</div>
            <h3 class="text-3xl font-bold mb-2">CMO</h3>
            <p class="text-xs text-violet-400 font-mono mb-6 uppercase tracking-widest font-bold">Contract Manufacturing Organisation</p>
            <p class="leading-relaxed text-text-muted mb-8">Focused on the "M" in CMC. They provide the factory floor, the bioreactors, and the cleanrooms to produce the drug at scale.</p>
            <div class="space-y-3 pt-6 border-t border-border">
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Bulk Production</div>
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Sterile Fill-Finish</div>
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Secondary Packaging</div>
            </div>
          </div>
          <div class="group p-10 bg-surface border-t-8 border-orange-400 rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="text-5xl mb-8 group-hover:scale-110 transition-transform">🧬</div>
            <h3 class="text-3xl font-bold mb-2">CDMO</h3>
            <p class="text-xs text-orange-400 font-mono mb-6 uppercase tracking-widest font-bold">Contract Development & Manufacturing</p>
            <p class="leading-relaxed text-text-muted mb-8">The hybrid model. They handle both the development (process optimization) and the manufacturing. The "one-stop shop."</p>
            <div class="space-y-3 pt-6 border-t border-border">
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Formulation Dev</div>
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Analytical Method Dev</div>
              <div class="flex items-center gap-3 text-sm font-bold"><span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Commercial Supply</div>
            </div>
          </div>
        </div>

        <!-- Why Outsource? -->
        <div class="my-32 p-16 rounded-[4rem] bg-surface border border-border relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-primary/5 rounded-full blur-[100px] -z-10 group-hover:bg-blue-primary/10 transition-all duration-1000"></div>
          <h2 class="text-5xl font-serif font-bold mb-10 italic">The Strategic Advantage</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="space-y-8">
              <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-blue-primary/40 transition-all group/card">
                <h4 class="text-2xl font-bold mb-4 text-blue-primary flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-blue-primary/10 flex items-center justify-center text-sm">01</span>
                  Speed to Market
                </h4>
                <p class="text-lg text-text-muted leading-relaxed">Outsourcing allows pharma companies to bypass the years needed to build their own manufacturing facilities. CDMOs already have the validated equipment and trained staff ready to go.</p>
              </div>
              <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-blue-primary/40 transition-all group/card">
                <h4 class="text-2xl font-bold mb-4 text-blue-primary flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-blue-primary/10 flex items-center justify-center text-sm">02</span>
                  Specialized Expertise
                </h4>
                <p class="text-lg text-text-muted leading-relaxed">Many modern drugs (like cell and gene therapies) require highly specialized manufacturing techniques. Outsourcing provides access to niche expertise that is difficult to build in-house.</p>
              </div>
            </div>
            <div class="space-y-8">
              <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-blue-primary/40 transition-all group/card">
                <h4 class="text-2xl font-bold mb-4 text-blue-primary flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-blue-primary/10 flex items-center justify-center text-sm">03</span>
                  Cost Flexibility
                </h4>
                <p class="text-lg text-text-muted leading-relaxed">Pharma companies can shift fixed costs (factories, staff) to variable costs (contracts). This is especially critical for small biotechs with limited capital.</p>
              </div>
              <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-blue-primary/40 transition-all group/card">
                <h4 class="text-2xl font-bold mb-4 text-blue-primary flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-blue-primary/10 flex items-center justify-center text-sm">04</span>
                  Risk Mitigation
                </h4>
                <p class="text-lg text-text-muted leading-relaxed">By spreading production across multiple CDMOs, companies can protect themselves against facility-specific failures or regional supply chain disruptions.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- The Outsourcing Lifecycle -->
        <h2 class="text-4xl font-serif font-bold mb-16 text-center italic">The Outsourcing Lifecycle</h2>
        <div class="space-y-12 relative before:absolute before:left-[23px] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-primary before:to-transparent">
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-blue-primary flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10">1</div>
            <h4 class="text-2xl font-bold mb-2">Selection & Due Diligence</h4>
            <p class="text-lg text-text-muted leading-relaxed">Auditing the facility's quality systems, regulatory history, and technical capabilities. Does their "Quality Culture" match yours?</p>
          </div>
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-blue-primary flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10">2</div>
            <h4 class="text-2xl font-bold mb-2">Tech Transfer</h4>
            <p class="text-lg text-text-muted leading-relaxed">The most critical phase. Moving the "recipe" from the lab to the CDMO's equipment. This involves detailed documentation and pilot batches.</p>
          </div>
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-blue-primary flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10">3</div>
            <h4 class="text-2xl font-bold mb-2">Validation & Scale-Up</h4>
            <p class="text-lg text-text-muted leading-relaxed">Proving the process works consistently on the CDMO's equipment at the required scale. This includes Process Performance Qualification (PPQ).</p>
          </div>
          <div class="relative pl-20 group">
            <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-blue-primary flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10">4</div>
            <h4 class="text-2xl font-bold mb-2">Commercial Supply</h4>
            <p class="text-lg text-text-muted leading-relaxed">Ongoing production, quality monitoring, and lifecycle management. The CDMO becomes a long-term strategic partner.</p>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="mt-40 p-16 rounded-[3.5rem] bg-surface border border-border text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-primary to-transparent"></div>
          <h2 class="text-4xl font-serif font-bold mb-8 italic">The Collaborative Future</h2>
          <p class="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-12">The Outsourcing Universe is no longer just about "hiring a factory." It is about building deep, integrated partnerships that leverage global expertise to solve the world's toughest medical challenges.</p>
          <div class="inline-flex items-center gap-3 px-8 py-4 bg-blue-primary text-white font-bold rounded-2xl shadow-xl shadow-blue-primary/20 hover:scale-105 transition-transform cursor-pointer">
            Explore the Alliance Map →
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
      <div class="prose prose-invert max-w-none">
        <!-- Hero Section -->
        <div class="mb-16 p-12 rounded-[3rem] bg-gradient-to-br from-amber-primary/20 via-amber-primary/5 to-transparent border border-amber-primary/30 relative overflow-hidden shadow-2xl shadow-amber-primary/5">
          <div class="absolute -top-10 -right-10 p-8 opacity-10 text-[12rem] font-serif rotate-12 text-amber-primary">A</div>
          <h2 class="text-5xl font-serif font-bold mb-8 text-amber-primary italic leading-tight">The Alliance Map:<br/><span class="text-text-main not-italic">The Invisible Layer of Collaboration</span></h2>
          <p class="text-2xl leading-relaxed text-text-muted mb-8">Behind every drug approval is an invisible layer of cross-industry collaboration. Pre-competitive alliances resolve the fundamental paradox of drug development: shared problems are best solved together.</p>
          <div class="flex items-center gap-4 p-4 bg-surface/50 rounded-2xl border border-border w-fit">
            <span class="text-amber-primary font-mono font-bold">MODE:</span>
            <span class="text-text-main font-bold">Pre-Competitive Collaboration</span>
          </div>
        </div>

        <!-- The Major Alliances -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
          <div class="group p-12 bg-surface border-l-8 border-red-800 rounded-3xl shadow-2xl hover:bg-surface-hover transition-all hover:-translate-y-1">
            <h3 class="text-3xl font-bold mb-4">ICH</h3>
            <p class="text-sm text-red-400 font-mono mb-6 uppercase tracking-widest font-bold">Int. Council for Harmonisation</p>
            <p class="leading-relaxed text-text-muted text-lg mb-8">The "Supreme Court" of pharma. Sets the global rules for drug registration, CMC requirements, and safety standards. Without ICH, every country would have different rules.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-lg bg-red-800/10 text-red-400 text-xs font-bold">Global Standards</span>
              <span class="px-3 py-1 rounded-lg bg-red-800/10 text-red-400 text-xs font-bold">Regulatory Unity</span>
            </div>
          </div>
          <div class="group p-12 bg-surface border-l-8 border-blue-800 rounded-3xl shadow-2xl hover:bg-surface-hover transition-all hover:-translate-y-1">
            <h3 class="text-3xl font-bold mb-4">CDISC</h3>
            <p class="text-sm text-blue-400 font-mono mb-6 uppercase tracking-widest font-bold">Clinical Data Standards</p>
            <p class="leading-relaxed text-text-muted text-lg mb-8">The language of clinical research. Makes clinical data universally interoperable across sponsors and regulators. SDTM and ADaM are the core dialects.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-lg bg-blue-800/10 text-blue-400 text-xs font-bold">Data Interoperability</span>
              <span class="px-3 py-1 rounded-lg bg-blue-800/10 text-blue-400 text-xs font-bold">FDA/PMDA Required</span>
            </div>
          </div>
          <div class="group p-12 bg-surface border-l-8 border-green-800 rounded-3xl shadow-2xl hover:bg-surface-hover transition-all hover:-translate-y-1">
            <h3 class="text-3xl font-bold mb-4">TransCelerate</h3>
            <p class="text-sm text-green-400 font-mono mb-6 uppercase tracking-widest font-bold">R&D Acceleration</p>
            <p class="leading-relaxed text-text-muted text-lg mb-8">A global nonprofit dedicated to simplifying clinical R&D through shared tools, templates, and processes. They build the "common plumbing" of R&D.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-lg bg-green-800/10 text-green-400 text-xs font-bold">Shared Templates</span>
              <span class="px-3 py-1 rounded-lg bg-green-800/10 text-green-400 text-xs font-bold">Process Efficiency</span>
            </div>
          </div>
          <div class="group p-12 bg-surface border-l-8 border-amber-800 rounded-3xl shadow-2xl hover:bg-surface-hover transition-all hover:-translate-y-1">
            <h3 class="text-3xl font-bold mb-4">Accumulus</h3>
            <p class="text-sm text-amber-400 font-mono mb-6 uppercase tracking-widest font-bold">Regulatory Cloud</p>
            <p class="leading-relaxed text-text-muted text-lg mb-8">Building the digital bridge between industry and health authorities for real-time regulatory exchange. Moving from PDF submissions to cloud-native data.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-lg bg-amber-800/10 text-amber-400 text-xs font-bold">Cloud Native</span>
              <span class="px-3 py-1 rounded-lg bg-amber-800/10 text-amber-400 text-xs font-bold">Real-time Exchange</span>
            </div>
          </div>
        </div>

        <!-- The Power of Pre-Competitive Collaboration -->
        <div class="my-32 p-16 rounded-[4rem] bg-surface border border-border relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-primary/5 rounded-full blur-[100px] -z-10 group-hover:bg-amber-primary/10 transition-all duration-1000"></div>
          <h2 class="text-5xl font-serif font-bold mb-10 italic">The Power of Pre-Competitive Collaboration</h2>
          <p class="text-2xl leading-relaxed text-text-muted mb-12">Why do competitors work together? Because some problems are too big for any one company to solve. By standardizing data formats (CDISC) or harmonizing regulations (ICH), the entire industry moves faster, reducing the cost and time to bring medicines to patients.</p>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-amber-primary/40 transition-all group/card">
              <h4 class="text-2xl font-bold mb-4 text-amber-primary">Shared Risk</h4>
              <p class="text-lg text-text-muted leading-relaxed">Companies share the cost and risk of developing new standards and methodologies. This allows for innovation that wouldn't be possible individually.</p>
            </div>
            <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-amber-primary/40 transition-all group/card">
              <h4 class="text-2xl font-bold mb-4 text-amber-primary">Standardized Data</h4>
              <p class="text-lg text-text-muted leading-relaxed">Uniform data formats allow for faster review and better cross-study analysis. This is critical for understanding long-term safety and efficacy.</p>
            </div>
            <div class="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-amber-primary/40 transition-all group/card">
              <h4 class="text-2xl font-bold mb-4 text-amber-primary">Global Reach</h4>
              <p class="text-lg text-text-muted leading-relaxed">Alliances ensure that standards are adopted globally, not just in one region. This simplifies the global supply chain and regulatory landscape.</p>
            </div>
          </div>
        </div>

        <!-- Other Key Alliances -->
        <div class="my-32">
          <h2 class="text-4xl font-serif font-bold mb-12 text-center italic">Other Key Alliances</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-8 bg-surface border border-border rounded-3xl hover:border-amber-primary/30 transition-all">
              <h4 class="text-xl font-bold mb-3 text-amber-primary">Pistoia Alliance</h4>
              <p class="text-sm text-text-muted leading-relaxed">Focuses on lowering barriers to innovation in life science R&D through collaborative projects, particularly in pre-clinical research and data science.</p>
            </div>
            <div class="p-8 bg-surface border border-border rounded-3xl hover:border-amber-primary/30 transition-all">
              <h4 class="text-xl font-bold mb-3 text-amber-primary">BioPhorum</h4>
              <p class="text-sm text-text-muted leading-relaxed">Advancing biomanufacturing and strengthening supply chains through industry-wide collaboration. They focus on the "how" of making biologics.</p>
            </div>
            <div class="p-8 bg-surface border border-border rounded-3xl hover:border-amber-primary/30 transition-all">
              <h4 class="text-xl font-bold mb-3 text-amber-primary">Critical Path Institute</h4>
              <p class="text-sm text-text-muted leading-relaxed">Accelerating the development of medical products through data sharing and innovative methodologies, often working closely with the FDA and EMA.</p>
            </div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="mt-40 p-16 rounded-[3.5rem] bg-surface border border-border text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-primary to-transparent"></div>
          <h2 class="text-4xl font-serif font-bold mb-8 italic">The Collaborative Future</h2>
          <p class="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-12">The Alliance Map is a testament to the industry's ability to come together for the greater good. By collaborating on the "common plumbing," pharma companies can focus their competition on what truly matters: the science of the cure.</p>
          <div class="inline-flex items-center gap-3 px-8 py-4 bg-amber-primary text-bg font-bold rounded-2xl shadow-xl shadow-amber-primary/20 hover:scale-105 transition-transform cursor-pointer">
            Explore the Standards Universe →
          </div>
        </div>
      </div>
    `
  },
  {
    id: "standards-universe",
    title: "The Standards Universe",
    category: "Standards",
    description: "Every drug development activity operates inside a dense web of mandatory and voluntary standards. Think of it as the 'pop' in the popcorn process.",
    difficulty: "Fully Popped",
    readTime: "20 min",
    publishedAt: "2024-01-05",
    content: `
      <div class="prose prose-invert max-w-none">
        <!-- Hero Section -->
        <div class="mb-16 p-12 rounded-[3rem] bg-gradient-to-br from-amber-primary/20 via-amber-primary/5 to-transparent border border-amber-primary/30 relative overflow-hidden shadow-2xl shadow-amber-primary/5">
          <div class="absolute -top-10 -right-10 p-8 opacity-10 text-[12rem] font-serif rotate-12 text-amber-primary">S</div>
          <h2 class="text-5xl font-serif font-bold mb-8 text-amber-primary italic leading-tight">The Standards Universe:<br/><span class="text-text-main not-italic">The Rules of the Game</span></h2>
          <p class="text-2xl leading-relaxed text-text-muted mb-8">Every drug development activity operates inside a dense web of mandatory and voluntary standards. These standards ensure that every product is safe, consistent, and documented.</p>
          <div class="flex flex-wrap gap-4">
            <div class="px-6 py-3 bg-amber-primary/10 rounded-2xl border border-amber-primary/20 flex items-center gap-3">
              <span class="text-amber-primary font-bold">CORE:</span>
              <span class="font-mono">GxP, ICH, ISO, HL7</span>
            </div>
          </div>
        </div>

        <!-- The Standards Pillars -->
        <div class="space-y-12 my-20">
          <div class="group p-10 bg-surface rounded-[2.5rem] border border-border flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-10 items-center hover:border-amber-primary/40 transition-all hover:shadow-2xl hover:shadow-amber-primary/5">
            <div class="w-full h-full min-h-[200px] rounded-3xl bg-amber-primary/10 flex items-center justify-center text-8xl shadow-xl shadow-amber-primary/5 group-hover:scale-110 transition-transform">⚖️</div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold mb-4">GxP Practices</h3>
              <p class="text-xl text-text-muted leading-relaxed mb-6">The foundational quality standards for the industry. These are not just guidelines; they are legal requirements enforced by health authorities.</p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="p-4 bg-bg rounded-xl border border-border text-center hover:border-amber-primary/30 transition-colors">
                  <div class="font-bold text-amber-primary">GMP</div>
                  <div class="text-[10px] text-text-muted uppercase tracking-widest">Manufacturing</div>
                </div>
                <div class="p-4 bg-bg rounded-xl border border-border text-center hover:border-amber-primary/30 transition-colors">
                  <div class="font-bold text-amber-primary">GCP</div>
                  <div class="text-[10px] text-text-muted uppercase tracking-widest">Clinical</div>
                </div>
                <div class="p-4 bg-bg rounded-xl border border-border text-center hover:border-amber-primary/30 transition-colors">
                  <div class="font-bold text-amber-primary">GLP</div>
                  <div class="text-[10px] text-text-muted uppercase tracking-widest">Laboratory</div>
                </div>
                <div class="p-4 bg-bg rounded-xl border border-border text-center hover:border-amber-primary/30 transition-colors">
                  <div class="font-bold text-amber-primary">GDP</div>
                  <div class="text-[10px] text-text-muted uppercase tracking-widest">Distribution</div>
                </div>
              </div>
            </div>
          </div>

          <div class="group p-10 bg-surface rounded-[2.5rem] border border-border flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-10 items-center hover:border-red-500/40 transition-all hover:shadow-2xl hover:shadow-red-500/5">
            <div class="w-full h-full min-h-[200px] rounded-3xl bg-red-500/10 flex items-center justify-center text-8xl shadow-xl shadow-red-500/5 group-hover:scale-110 transition-transform">📋</div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold mb-4">ICH Quality Guidelines</h3>
              <p class="text-xl text-text-muted leading-relaxed mb-6">The <strong>Q1 to Q14</strong> guidelines define the technical requirements for drug registration. They are the blueprint for Module 3 of the eCTD.</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div class="p-4 bg-bg rounded-xl border border-border hover:border-red-500/30 transition-colors">
                  <div class="font-bold text-red-500">Q1: Stability</div>
                  <p class="text-xs text-text-muted">How long does the drug last under various conditions?</p>
                </div>
                <div class="p-4 bg-bg rounded-xl border border-border hover:border-red-500/30 transition-colors">
                  <div class="font-bold text-red-500">Q3: Impurities</div>
                  <p class="text-xs text-text-muted">What are the safety limits for degradation products?</p>
                </div>
                <div class="p-4 bg-bg rounded-xl border border-border hover:border-red-500/30 transition-colors">
                  <div class="font-bold text-red-500">Q8: Development</div>
                  <p class="text-xs text-text-muted">The principles of Quality by Design (QbD).</p>
                </div>
                <div class="p-4 bg-bg rounded-xl border border-border hover:border-red-500/30 transition-colors">
                  <div class="font-bold text-red-500">Q9: Risk Mgmt</div>
                  <p class="text-xs text-text-muted">How to assess and control quality risks.</p>
                </div>
                <div class="p-4 bg-bg rounded-xl border border-border hover:border-red-500/30 transition-colors">
                  <div class="font-bold text-red-500">Q10: Quality Sys</div>
                  <p class="text-xs text-text-muted">The pharmaceutical quality system lifecycle.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="group p-10 bg-surface rounded-[2.5rem] border border-border flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-10 items-center hover:border-blue-500/40 transition-all hover:shadow-2xl hover:shadow-blue-500/5">
            <div class="w-full h-full min-h-[200px] rounded-3xl bg-blue-500/10 flex items-center justify-center text-8xl shadow-xl shadow-blue-500/5 group-hover:scale-110 transition-transform">🌐</div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold mb-4">Digital Standards (FHIR)</h3>
              <p class="text-xl text-text-muted leading-relaxed mb-6">The next frontier. Moving from paper-based standards to machine-readable data using <strong>HL7 FHIR</strong>. This allows for real-time quality monitoring.</p>
              <div class="p-8 bg-bg rounded-[2rem] border border-border hover:border-blue-500/30 transition-all">
                <h5 class="font-bold mb-4 text-blue-500 text-xl">PQ/CMC FHIR IG</h5>
                <p class="text-lg text-text-muted leading-relaxed mb-6">The specific implementation guide for pharmaceutical quality data, enabling automated regulatory review and data exchange. It maps eCTD Module 3 to FHIR resources.</p>
                <div class="flex flex-wrap gap-3">
                  <span class="px-4 py-2 bg-surface rounded-xl border border-border text-xs font-mono">SubstanceDefinition</span>
                  <span class="px-4 py-2 bg-surface rounded-xl border border-border text-xs font-mono">MedicinalProductDefinition</span>
                  <span class="px-4 py-2 bg-surface rounded-xl border border-border text-xs font-mono">ManufacturedItemDefinition</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Interlocking Web -->
        <div class="my-32 p-16 rounded-[4rem] bg-bg border-4 border-dashed border-border text-center relative overflow-hidden group">
          <div class="absolute -top-10 -left-10 w-96 h-96 bg-amber-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-primary/10 transition-all duration-1000"></div>
          <h2 class="text-5xl font-serif font-bold mb-10 italic">The Interlocking Web</h2>
          <p class="text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-12">Standards don't exist in isolation. A GMP process (Standard) might be defined by an ICH guideline (Alliance), documented in an eCTD (Document), and eventually submitted via FHIR (Digital). Understanding the connections is the key to mastering the kernel.</p>
          <div class="flex flex-wrap justify-center gap-6">
            <div class="px-10 py-5 bg-surface rounded-[2rem] border border-border font-bold text-xl hover:border-amber-primary/40 transition-all hover:scale-105">Safety</div>
            <div class="px-10 py-5 bg-surface rounded-[2rem] border border-border font-bold text-xl hover:border-amber-primary/40 transition-all hover:scale-105">Quality</div>
            <div class="px-10 py-5 bg-surface rounded-[2rem] border border-border font-bold text-xl hover:border-amber-primary/40 transition-all hover:scale-105">Efficacy</div>
            <div class="px-10 py-5 bg-surface rounded-[2rem] border border-border font-bold text-xl hover:border-amber-primary/40 transition-all hover:scale-105">Consistency</div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="mt-40 p-16 rounded-[3.5rem] bg-surface border border-border text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-primary to-transparent"></div>
          <h2 class="text-4xl font-serif font-bold mb-8 italic">The Standard of Truth</h2>
          <p class="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-12">Standards are the foundation of trust in medicine. They are what allow a patient to take a pill with the absolute confidence that it will do exactly what it says on the label.</p>
          <div class="inline-flex items-center gap-3 px-8 py-4 bg-amber-primary text-bg font-bold rounded-2xl shadow-xl shadow-amber-primary/20 hover:scale-105 transition-transform cursor-pointer">
            Explore ISA 88 & 95 →
          </div>
        </div>
      </div>
    `
  },
  {
    id: "isa-88-95",
    title: "ISA 88 & ISA 95 — The Pharma Playbook",
    category: "Standards",
    description: "ISA 88 & ISA 95 are the foundational standards that ensure pharmaceutical manufacturing is safe, consistent, and scalable. Think of them as the rules for popping the perfect kernel.",
    difficulty: "Kernel",
    readTime: "15 min",
    publishedAt: "2024-01-06",
    content: `
      <div class="prose prose-invert max-w-none">
        <!-- Hero Section -->
        <div class="mb-16 p-12 rounded-[3rem] bg-gradient-to-br from-amber-primary/20 via-amber-primary/5 to-transparent border border-amber-primary/30 relative overflow-hidden shadow-2xl shadow-amber-primary/5 text-center">
          <div class="absolute -top-10 -right-10 p-8 opacity-10 text-[12rem] rotate-12">⚙️</div>
          <span class="inline-block px-4 py-1 rounded-full bg-amber-primary/10 border border-amber-primary/20 text-amber-primary text-xs font-bold uppercase tracking-widest mb-6">Pharma Standards Series</span>
          <h2 class="text-5xl font-serif font-bold mb-8 leading-tight">ISA 88 & ISA 95:<br/><span class="text-amber-primary italic">The Rules for Popping the Perfect Kernel</span></h2>
          <p class="text-2xl leading-relaxed text-text-muted mb-8 max-w-3xl mx-auto">ISA 88 and ISA 95 are the invisible rules that ensure every kernel pops exactly the same way, every time, ensuring every dose is safe and consistent.</p>
        </div>

        <!-- Intro -->
        <div class="my-24 max-w-3xl mx-auto text-center">
          <p class="text-xl leading-relaxed text-text-muted mb-8">In pharmaceutical manufacturing, consistency is paramount. Whether producing a small batch for a clinical trial or millions of units for global distribution, the process must remain identical. ISA 88 and ISA 95 provide the structural integrity required to achieve this level of precision.</p>
          <div class="w-24 h-1 bg-amber-primary/30 mx-auto rounded-full"></div>
        </div>

        <!-- Who is ISA -->
        <div class="my-32">
          <div class="flex items-center gap-6 mb-12">
            <div class="w-20 h-20 rounded-3xl bg-amber-primary/10 flex items-center justify-center text-amber-primary text-4xl shadow-lg shadow-amber-primary/5">🛠️</div>
            <div>
              <h2 class="text-4xl font-serif font-bold italic">Who on earth is ISA?</h2>
              <p class="text-xl text-text-muted">The International Society of Automation.</p>
            </div>
          </div>
          
          <div class="space-y-8">
            <div class="p-10 bg-surface border border-border rounded-[2.5rem] relative overflow-hidden group">
              <div class="absolute top-0 right-0 p-8 opacity-5 text-6xl font-bold">1945</div>
              <h3 class="text-2xl font-bold mb-4 text-amber-primary">Founded as the Instrument Society of America</h3>
              <p class="text-lg text-text-muted leading-relaxed">A group of engineers in Pittsburgh came together to share knowledge and create common standards for measuring and controlling industrial processes. Before this, every factory was a mess of incompatible instruments.</p>
            </div>
            <div class="p-10 bg-surface border border-border rounded-[2.5rem] relative overflow-hidden group">
              <div class="absolute top-0 right-0 p-8 opacity-5 text-6xl font-bold">1990s</div>
              <h3 class="text-2xl font-bold mb-4 text-amber-primary">The Automation Standard</h3>
              <p class="text-lg text-text-muted leading-relaxed">As automation grew into software and robotics, the society rebranded. Today, ISA is a globally recognized non-profit with members in over 100 countries, setting the standards for everything from oil & gas to pharmaceuticals.</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div class="p-6 bg-surface border border-border rounded-2xl text-center">
              <div class="text-3xl font-bold text-amber-primary mb-1">1945</div>
              <div class="text-[10px] text-text-muted uppercase tracking-widest">Founded</div>
            </div>
            <div class="p-6 bg-surface border border-border rounded-2xl text-center">
              <div class="text-3xl font-bold text-amber-primary mb-1">100+</div>
              <div class="text-[10px] text-text-muted uppercase tracking-widest">Countries</div>
            </div>
            <div class="p-6 bg-surface border border-border rounded-2xl text-center">
              <div class="text-3xl font-bold text-amber-primary mb-1">200+</div>
              <div class="text-[10px] text-text-muted uppercase tracking-widest">Standards</div>
            </div>
            <div class="p-6 bg-surface border border-border rounded-2xl text-center">
              <div class="text-3xl font-bold text-amber-primary mb-1">40k+</div>
              <div class="text-[10px] text-text-muted uppercase tracking-widest">Members</div>
            </div>
          </div>
        </div>

        <!-- ISA 88 -->
        <div class="my-32">
          <div class="flex items-center gap-6 mb-12">
            <div class="w-20 h-20 rounded-3xl bg-blue-primary/10 flex items-center justify-center text-blue-primary text-4xl shadow-lg shadow-blue-primary/5">📋</div>
            <div>
              <h2 class="text-4xl font-serif font-bold italic">ISA 88: The Recipe Standard</h2>
              <p class="text-xl text-text-muted">How to write a recipe that a machine can follow perfectly.</p>
            </div>
          </div>

          <div class="p-10 bg-blue-primary/5 border border-blue-primary/20 rounded-[3rem] mb-12">
            <h3 class="text-2xl font-bold mb-6 italic font-serif">The Big Idea: Separate Recipe from Equipment</h3>
            <p class="text-lg text-text-muted leading-relaxed mb-8">ISA 88 separates <strong>what you want to make</strong> (the recipe) from <strong>the equipment you use</strong>. This means you can run the same recipe on different machines without rewriting it from scratch.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="p-8 bg-surface border border-border rounded-3xl">
                <div class="text-3xl mb-4">📋</div>
                <h4 class="font-bold mb-2">Procedure</h4>
                <p class="text-sm text-text-muted">The ordered steps: heat, mix, cool, fill. Plain language logic for machines.</p>
              </div>
              <div class="p-8 bg-surface border border-border rounded-3xl">
                <div class="text-3xl mb-4">⚗️</div>
                <h4 class="font-bold mb-2">Formula</h4>
                <p class="text-sm text-text-muted">The quantities, temperatures, and times. The numbers you tune.</p>
              </div>
              <div class="p-8 bg-surface border border-border rounded-3xl">
                <div class="text-3xl mb-4">🏭</div>
                <h4 class="font-bold mb-2">Equipment</h4>
                <p class="text-sm text-text-muted">The actual machines. ISA 88 maps recipes to equipment dynamically.</p>
              </div>
            </div>
          </div>

          <!-- Hierarchy Visual -->
          <div class="p-12 bg-surface rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-12 opacity-5 text-8xl font-serif">S88</div>
            <h4 class="text-xl font-bold mb-10 text-center uppercase tracking-widest text-text-muted">Physical & Procedural Hierarchy</h4>
            
            <div class="space-y-4 max-w-2xl mx-auto">
              <div class="flex items-center gap-4 p-4 bg-blue-primary/10 rounded-2xl border border-blue-primary/20">
                <div class="w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center text-white font-bold text-xs">E</div>
                <div class="flex-1">
                  <div class="font-bold">Enterprise / Site</div>
                  <div class="text-xs text-text-muted italic">Global manufacturing network</div>
                </div>
              </div>
              <div class="flex items-center gap-4 p-4 bg-blue-primary/10 rounded-2xl border border-blue-primary/20 ml-8">
                <div class="w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center text-white font-bold text-xs">A</div>
                <div class="flex-1">
                  <div class="font-bold">Process Cell</div>
                  <div class="text-xs text-text-muted italic">Specific production facility or suite</div>
                </div>
              </div>
              <div class="flex items-center gap-4 p-4 bg-blue-primary/10 rounded-2xl border border-blue-primary/20 ml-16">
                <div class="w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center text-white font-bold text-xs">B</div>
                <div class="flex-1">
                  <div class="font-bold">Unit</div>
                  <div class="text-xs text-text-muted italic">Individual production machine (e.g., bioreactor)</div>
                </div>
              </div>
              <div class="flex items-center gap-4 p-4 bg-blue-primary/10 rounded-2xl border border-blue-primary/20 ml-24">
                <div class="w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center text-white font-bold text-xs">C</div>
                <div class="flex-1">
                  <div class="font-bold">Equipment Module</div>
                  <div class="text-xs text-text-muted italic">Heating element + sensor</div>
                </div>
              </div>
              <div class="flex items-center gap-4 p-4 bg-blue-primary/10 rounded-2xl border border-blue-primary/20 ml-32">
                <div class="w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center text-white font-bold text-xs">D</div>
                <div class="flex-1">
                  <div class="font-bold">Control Module</div>
                  <div class="text-xs text-text-muted italic">One valve or motor</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ISA 95 -->
        <div class="my-32">
          <div class="flex items-center gap-6 mb-12">
            <div class="w-20 h-20 rounded-3xl bg-amber-primary/10 flex items-center justify-center text-amber-primary text-4xl shadow-lg shadow-amber-primary/5">🌐</div>
            <div>
              <h2 class="text-4xl font-serif font-bold italic">ISA 95: The Business Bridge</h2>
              <p class="text-xl text-text-muted">Connecting the business systems to the factory floor.</p>
            </div>
          </div>

          <p class="text-xl leading-relaxed text-text-muted mb-12">ISA 95 makes sure that when Sales says "make 500,000 packs of aspirin," the factory floor actually knows what to do — and reports back when it's done.</p>

          <!-- Purdue Model -->
          <div class="p-12 bg-surface rounded-[3rem] border border-border shadow-2xl relative overflow-hidden mb-16">
            <div class="absolute top-0 right-0 p-12 opacity-5 text-8xl font-serif">S95</div>
            <h4 class="text-xl font-bold mb-10 text-center uppercase tracking-widest text-text-muted">The 5-Level Purdue Model</h4>
            
            <div class="space-y-4 max-w-2xl mx-auto">
              <div class="p-6 bg-amber-primary/10 rounded-2xl border border-amber-primary/20 text-center">
                <div class="text-xs font-mono text-amber-primary mb-1">LEVEL 4</div>
                <div class="font-bold text-xl">Business Planning & Logistics</div>
                <div class="text-sm text-text-muted italic">ERP / SAP — orders, finances, supply chain</div>
              </div>
              <div class="p-6 bg-amber-primary/10 rounded-2xl border border-amber-primary/20 text-center">
                <div class="text-xs font-mono text-amber-primary mb-1">LEVEL 3</div>
                <div class="font-bold text-xl">Manufacturing Operations</div>
                <div class="text-sm text-text-muted italic">MES — scheduling, quality, production tracking</div>
              </div>
              <div class="p-6 bg-amber-primary/10 rounded-2xl border border-amber-primary/20 text-center">
                <div class="text-xs font-mono text-amber-primary mb-1">LEVEL 2</div>
                <div class="font-bold text-xl">Supervisory Control</div>
                <div class="text-sm text-text-muted italic">SCADA / HMI — operator screens, alarms</div>
              </div>
              <div class="p-6 bg-amber-primary/10 rounded-2xl border border-amber-primary/20 text-center">
                <div class="text-xs font-mono text-amber-primary mb-1">LEVEL 1</div>
                <div class="font-bold text-xl">Control Systems</div>
                <div class="text-sm text-text-muted italic">PLCs / DCS — automated machine control</div>
              </div>
              <div class="p-6 bg-amber-primary/10 rounded-2xl border border-amber-primary/20 text-center">
                <div class="text-xs font-mono text-amber-primary mb-1">LEVEL 0</div>
                <div class="font-bold text-xl">Physical Process</div>
                <div class="text-sm text-text-muted italic">Actual sensors, valves, machines on the floor</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comparison Table -->
        <div class="my-32">
          <h2 class="text-4xl font-serif font-bold mb-12 text-center italic">ISA 88 vs ISA 95</h2>
          <div class="overflow-x-auto rounded-[2rem] border border-border shadow-2xl">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-surface">
                  <th class="p-6 font-bold text-amber-primary border-b border-border">Topic</th>
                  <th class="p-6 font-bold text-amber-primary border-b border-border">ISA 88</th>
                  <th class="p-6 font-bold text-amber-primary border-b border-border">ISA 95</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td class="p-6 font-bold">Core Question</td>
                  <td class="p-6 text-text-muted">How do we run a batch?</td>
                  <td class="p-6 text-text-muted">How does business talk to factory?</td>
                </tr>
                <tr class="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td class="p-6 font-bold">Focus Area</td>
                  <td class="p-6 text-text-muted">Recipe structure & equipment</td>
                  <td class="p-6 text-text-muted">Information flows & interfaces</td>
                </tr>
                <tr class="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td class="p-6 font-bold">Manufacturing Context</td>
                  <td class="p-6 text-text-muted">The procedural execution of a batch</td>
                  <td class="p-6 text-text-muted">The operational management of the facility</td>
                </tr>
                <tr class="bg-amber-primary/5">
                  <td class="p-6 font-bold italic" colspan="3">ISA 88 tells you how to pop. ISA 95 tells you why, how many kernels, and when.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Pharma & CMC -->
        <div class="my-32">
          <div class="flex items-center gap-6 mb-12">
            <div class="w-20 h-20 rounded-3xl bg-blue-primary/10 flex items-center justify-center text-blue-primary text-4xl shadow-lg shadow-blue-primary/5">💊</div>
            <div>
              <h2 class="text-4xl font-serif font-bold italic">Why it matters for Pharma & CMC</h2>
              <p class="text-xl text-text-muted">The digital backbone of drug manufacturing.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="p-10 bg-surface border border-border rounded-[3rem] border-t-8 border-t-blue-primary">
              <h4 class="text-2xl font-bold mb-4">Process Consistency</h4>
              <p class="text-lg text-text-muted leading-relaxed">ISA 88 ensures every batch of API is made identically. Regulators can inspect the exact parameters used in every historical batch.</p>
            </div>
            <div class="p-10 bg-surface border border-border rounded-[3rem] border-t-8 border-t-amber-primary">
              <h4 class="text-2xl font-bold mb-4">Supply Chain Traceability</h4>
              <p class="text-lg text-text-muted leading-relaxed">ISA 95 tracks raw materials from supplier to finished product lot number, ensuring end-to-end transparency.</p>
            </div>
          </div>
        </div>

        <!-- Summary Takeaways -->
        <div class="mt-40 p-16 rounded-[3.5rem] bg-surface border border-border text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-primary to-transparent"></div>
          <h2 class="text-4xl font-serif font-bold mb-8 italic">The Big Picture</h2>
          <div class="grid md:grid-cols-3 gap-8 text-left">
            <div class="p-8 bg-bg border border-border rounded-3xl">
              <h4 class="font-bold mb-2 text-blue-primary">ISA 88</h4>
              <p class="text-sm text-text-muted">Machine-readable recipes for identical execution anywhere.</p>
            </div>
            <div class="p-8 bg-bg border border-border rounded-3xl">
              <h4 class="font-bold mb-2 text-amber-primary">ISA 95</h4>
              <p class="text-sm text-text-muted">Connecting business orders to factory work orders seamlessly.</p>
            </div>
            <div class="p-8 bg-bg border border-border rounded-3xl">
              <h4 class="font-bold mb-2 text-blue-primary">Together</h4>
              <p class="text-sm text-text-muted">The foundation of reproducibility, traceability, and patient safety.</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];

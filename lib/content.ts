export const company = {
 name: `Galaxy Imaging Technologies`,
 short: `Galaxy`,
 tagline: `Modern. Business-focused. Solution-led.`,
 phone: `080 - 40935778`,
 mobile: `+91 9845240947`,
 email: `git@gitblr.in`,
 address: `#3160, Indiranagar Double Road, HAL 2nd Stage, Bengaluru - 560008, Karnataka, India`,
 addressShort: `#3160, Indiranagar Double Road, HAL 2nd Stage, Bengaluru.`,
 pan: `AAKFG5676L`,
 gst: `29AAKFG5676L1ZL`,
 msme: `KR03D0073628`,
 md: {
 name: `Mr. Babu VB`,
 role: `Managing Director`,
 note: `More than three decades of business and product management experience in office automation, with deep knowledge of multifunction printers, projectors and workplace technology.`,
 },
} as const;

export const nav = [
  {
    label: `Solutions`,
    href: `/solutions`,
    children: [
      { label: `Audio Video System Integration`, href: `/solutions#av` },
      { label: `Secured Printing Solutions`, href: `/solutions#secure-printing` },
      { label: `Managed Print`, href: `/solutions#managed-print` },
      { label: `Document Digitisation`, href: `/solutions#digitisation` },
      { label: `Workplace Collaboration`, href: `/solutions#collaboration` },
    ],
  },
  {
    label: `Products`,
    href: `/products`,
    children: [
      {
        label: `Konica Minolta MFD`,
        href: `/products/multifunction-printers`,
        children: [
          { label: `Mono Models`, href: `/products/multifunction-printers` },
          { label: `Color Models`, href: `/products/multifunction-printers` },
          { label: `Production Models`, href: `/products/production-printing` },
        ],
      },
      {
        label: `Toshiba MFD`,
        href: `/products/multifunction-printers`,
        children: [
          { label: `Mono Models`, href: `/products/multifunction-printers` },
          { label: `Color Models`, href: `/products/multifunction-printers` },
        ],
      },
      {
        label: `Kodak Scanners`,
        href: `/products/document-scanners`,
        children: [
          { label: `Production Document Scanners`, href: `/products/document-scanners` },
          { label: `Departmental Document Scanners`, href: `/products/document-scanners` },
          { label: `Desktop Document Scanners`, href: `/products/document-scanners` },
        ],
      },
      { label: `Duplo Digital Duplicator`, href: `/products/digital-duplicators` },
      { label: `Lg Display`, href: `/products/professional-displays` },
      { label: `Samsung Display`, href: `/products/professional-displays` },
      { label: `Peoplelink`, href: `/products/interactive-panels` },
      { label: `HP`, href: `/products/it-workplace` },
      { label: `Wireless Presentation Device`, href: `/products/wireless-presentation` },
      { label: `IT Products`, href: `/products/it-workplace` },
    ],
  },
  {
    label: `Services`,
    href: `/services`,
    children: [
      { label: `Breakfix Services`, href: `/services#break-fix` },
      { label: `Managed Print Services`, href: `/services#mps` },
      { label: `AVSI`, href: `/services#avsi` },
      { label: `Rentals`, href: `/services#rentals` },
      { label: `Amc-Service`, href: `/services#amc` },
      { label: `Consumables & Spares`, href: `/services#consumables` },
    ],
  },
  {
    label: `Industries`,
    href: `/industries`,
    children: [
      { label: `Corporate & Enterprise`, href: `/industries#corporate` },
      { label: `Healthcare`, href: `/industries#healthcare` },
      { label: `Education`, href: `/industries#education` },
      { label: `Hospitality`, href: `/industries#hospitality` },
      { label: `Government & Institutions`, href: `/industries#government` },
      { label: `Print & Production`, href: `/industries#print-production` },
    ],
  },
  { label: `About Us`, href: `/about` },
  {
    label: `Resources`,
    href: `/blogs`,
    children: [
      { label: `News`, href: `/news` },
      { label: `Blogs`, href: `/blogs` },
      { label: `Careers`, href: `/careers` },
      { label: `Support`, href: `/support` },
    ],
  },
] as const;

export const newsIntro =
 "Galaxy Imaging Technologies have won many awards consecutively for 10 years from their OEMs for the performances in the following areas.";

export const newsAwards = [
 "Absolute Perfect Partner in India for the Overall Business.",
 "Absolute Perfect Partner in India for the Customer Support.",
 "Highest Hardware Revenue Achievement.",
 "Highest number of Color MFD Sales.",
 "Highest number of Mono MFD Sales.",
 "Highest Revenue in Services.",
 "Highest Year on Year Business Growth.",
] as const;

export const certificates = [
 {
 id: "authorisation",
 year: "Authorization Certificate",
 title: "Konica Minolta India",
 detail: "Valid 1 April 2023 - 31 March 2024",
 image: "/images/certificates/latest.jpg",
 },
 {
 id: "2013-14",
 year: "Year 2013-2014",
 title: "Year 2013-2014",
 detail: "Konica Minolta",
 image: "/images/certificates/2013-14.jpg",
 },
 {
 id: "2014-15",
 year: "Year 2014-2015",
 title: "Year 2014-2015",
 detail: "Konica Minolta",
 image: "/images/certificates/2014-15.jpg",
 },
 {
 id: "2015-16",
 year: "Year 2015-2016",
 title: "Year 2015-2016",
 detail: "Konica Minolta",
 image: "/images/certificates/2015-16.jpg",
 },
 {
 id: "2016-17",
 year: "Year 2016-2017",
 title: "Year 2016-2017",
 detail: "Konica Minolta",
 image: "/images/certificates/2016-17.jpg",
 },
 {
 id: "2017-18",
 year: "Year 2017-2018",
 title: "Year 2017-2018",
 detail: "Konica Minolta",
 image: "/images/certificates/2017-18.jpg",
 },
 {
 id: "2018-19",
 year: "Year 2018-2019",
 title: "Year 2018-2019",
 detail: "Konica Minolta",
 image: "/images/certificates/2018-19.jpg",
 },
 {
 id: "2019-20",
 year: "Year 2019-2020",
 title: "Year 2019-2020",
 detail: "Konica Minolta",
 image: "/images/certificates/2019-20.jpg",
 },
 {
 id: "2020-21",
 year: "Year 2020-2021",
 title: "Excellent Performance Award",
 detail: "Production Printing Business · Absolute Perfect Partner · FY 2020-21",
 image: "/images/certificates/fy-2020-21.jpg",
 },
 {
 id: "2021-22",
 year: "Year 2021-2022",
 title: "Top Performer in Overall Business",
 detail: "Konica Minolta · FY 2021-22",
 image: "/images/certificates/2021-22.jpg",
 },
 {
 id: "2022-23-hardware",
 year: "Year 2022-2023",
 title: "Highest Revenue in Hardware",
 detail: "Konica Minolta · FY 2022-23",
 image: "/images/certificates/2022-23-a.jpg",
 },
 {
 id: "2022-23-overall",
 year: "Year 2022-2023",
 title: "Top Performer in Overall Business",
 detail: "Konica Minolta · FY 2022-23",
 image: "/images/certificates/2022-23-b.jpg",
 },
 {
 id: "2023-24-mono",
 year: "Year 2023-2024",
 title: "No. 1 in Mono MFD Placement",
 detail: "Konica Minolta · FY 2023-24",
 image: "/images/certificates/2023.jpg",
 },
] as const;

export const careerIntro =
 "We offer energizing & challenging opportunities. We believe and respect the fact that the passion that you bring to your work, naturally extends to your personal life as well. At Galtech, we believe that integrating the two in a way that works uniquely for you enable a happy and productive lifestyle.";

export const supportPortal = "https://support.gitonline.biz";

export const blogPosts = [
 {
 title: "How Does Konica Minolta Deliver Fast and Efficient Printing With Its Speed Advantage?",
 date: "26 November 2024",
 excerpt:
 "For printer suppliers in Kerala, Konica Minolta’s fast and efficient printing solutions powered by cutting-edge technologies and advanced workflow automation ensure exceptional results. By incorporating innovative elements like Simitri HD E toner and S.E.A.D. IV image processing, Konica Minolta delivers unmatched precision and speed.",
 },
 {
 title: "What Are the Benefits of Purchasing Toshiba Digital Printers for Your Business?",
 date: "26 November 2024",
 excerpt:
 "When considering the optimal digital printing solution for your business, the advantages of Toshiba digital printers stand out prominently. From their impeccable print quality to the array of advanced features they offer, Toshiba printers are designed to elevate your business’s printing capabilities.",
 },
 {
 title: "What Are the Advantages of Using Konica Minolta Color Printers?",
 date: "26 November 2024",
 excerpt:
 "Konica Minolta color printers offer a multitude of advantages that cater to the needs of various industries. From their unparalleled color accuracy to swift printing speeds and cost-effective solutions, these printers are designed to optimize productivity and deliver top-notch quality.",
 },
 {
 title: "How Do Konica Minolta’s Advanced Scanning Capabilities Improve Workflow Efficiency?",
 date: "6 November 2024",
 excerpt:
 "Konica Minolta’s advanced scanning capabilities have transformed document management and information processing. By integrating technologies like OCR and automated workflows, Konica Minolta scanners optimize operations in today’s fast-paced business environment.",
 },
 {
 title: "What Should You Consider When Purchasing a Fax Machine for Your Office?",
 date: "",
 excerpt:
 "When it comes to acquiring a fax machine or multifunction printers for your office, numerous factors demand careful consideration to ensure optimal functionality and efficiency. From assessing the size of your office space to evaluating the volume of faxes you handle, each aspect plays a vital role in selecting the right machine.",
 },
 {
 title: "How Can Galaxy Imaging Technology Help You Choose the Right Printer for Your Needs?",
 date: "",
 excerpt:
 "Galaxy imaging technology offers a cutting-edge approach to selecting the most suitable printer for individual needs. By harnessing the power of advanced imaging capabilities, users can ensure unparalleled precision and color accuracy in their printouts.",
 },
] as const;

export const interestOptions = [
 `Products`,
 `Managed Print Services`,
 `AMC`,
 `Rentals`,
 `Break-Fix Service`,
 `AV Solutions`,
 `Secure Printing`,
 `Scanners`,
 `Displays`,
 `Other`,
] as const;

export const brands = [
 {
 name: `Konica Minolta`,
 category: `multifunction-printers`,
 note: `Multifunction printers and production devices.`,
 },
 {
 name: `Toshiba`,
 category: `multifunction-printers`,
 note: `Smart, secure MFPs for organisations of every size.`,
 },
 {
 name: `Duplo`,
 category: `digital-duplicators`,
 note: `Digital duplicating technology for high-volume reproduction.`,
 },
 {
 name: `Fujitsu`,
 category: `document-scanners`,
 note: `Workgroup, departmental and production scanners.`,
 },
 {
 name: `LG Display`,
 category: `professional-displays`,
 note: `Professional signage for commercial environments.`,
 },
 {
 name: `Samsung Display`,
 category: `professional-displays`,
 note: `Professional display screens for realistic images.`,
 },
 {
 name: `Galtech`,
 category: `interactive-panels`,
 note: `Interactive touch panels for learning and presentations.`,
 },
 {
 name: `Cloudwalker Airstream`,
 category: `wireless-presentation`,
 note: `Wireless presentation from any device to the main screen.`,
 },
 {
 name: `HP`,
 category: `it-workplace`,
 note: `Computers, printers and workplace productivity technology.`,
 },
 {
 name: `Peoplelink`,
 category: `it-workplace`,
 note: `Collaboration and communication technology.`,
 },
] as const;

export const productCategories = [
 {
 slug: `multifunction-printers`,
 title: `Multifunction Printers`,
 kicker: `Print. Scan. Copy. Connect.`,
 summary: `Multifunction devices designed to bring everyday document workflows together in a single workplace solution.`,
 image: `/images/mfp-detail.jpg`,
 brands: [`Konica Minolta`, `Toshiba`],
 products: [
 { name: `bizhub 165en`, brand: `Konica Minolta`, meta: `16 ppm · A3 · Mono` },
 { name: `bizhub 205i / 225i`, brand: `Konica Minolta`, meta: `20/22 ppm · A3 · Mono` },
 {
 name: `bizhub 226i / 266i / 306i`,
 brand: `Konica Minolta`,
 meta: `22/26/30 ppm · A3 · Mono`,
 },
 { name: `bizhub 227 / 287 / 367`, brand: `Konica Minolta`, meta: `22/28/36 ppm · A3 · Mono` },
 { name: `bizhub 451i / 551i / 651i`, brand: `Konica Minolta`, meta: `45-65 ppm · A3 · Mono` },
 { name: `bizhub 751i / 950i`, brand: `Konica Minolta`, meta: `Up to 95 ppm · A3 · Mono` },
 {
 name: `Toshiba Digital Copiers`,
 brand: `Toshiba`,
 meta: `Secure MFPs for any company size`,
 },
 ],
 },
 {
 slug: `production-printing`,
 title: `Production Printing`,
 kicker: `Built for high-volume workflows.`,
 summary: `Production printing solutions for organisations and print environments that demand speed, consistency and reliable output.`,
 image: `/images/production-print.jpg`,
 brands: [`Konica Minolta`],
 products: [
 {
 name: `bizhub 751i / 950i`,
 brand: `Konica Minolta`,
 meta: `High-volume production output`,
 },
 ],
 },
 {
 slug: `document-scanners`,
 title: `Document Scanners`,
 kicker: `Turn documents into digital workflows.`,
 summary: `From desktop scanning to departmental and high-volume production environments, choose scanning technology designed around your document volume and workflow.`,
 image: `/images/scanner.jpg`,
 brands: [`Fujitsu`],
 products: [
 {
 name: `Fujitsu Workgroup Scanners`,
 brand: `Fujitsu`,
 meta: `Desktop and workgroup capture`,
 },
 {
 name: `Fujitsu Departmental Scanners`,
 brand: `Fujitsu`,
 meta: `Shared departmental volume`,
 },
 {
 name: `Fujitsu Production Scanners`,
 brand: `Fujitsu`,
 meta: `High-volume production capture`,
 },
 ],
 },
 {
 slug: `digital-duplicators`,
 title: `Digital Duplicators`,
 kicker: `Simple. Fast. Practical.`,
 summary: `Digital duplicating technology for environments where reliable, economical high-volume reproduction is required.`,
 image: `/images/unique/duplicator.jpg`,
 brands: [`Duplo`],
 products: [
 {
 name: `DUPRINTER DP-A120II / A125II`,
 brand: `Duplo`,
 meta: `500-sheet feed · 300×360 dpi`,
 },
 ],
 },
 {
 slug: `professional-displays`,
 title: `Professional Displays`,
 kicker: `Make every screen count.`,
 summary: `Professional display solutions for communication, digital signage, presentations and customer-facing environments.`,
 image: `/images/unique/display-wall.jpg`,
 brands: [`LG Display`, `Samsung Display`],
 products: [
 { name: `LG Professional Signage`, brand: `LG Display`, meta: `Commercial environments` },
 {
 name: `Samsung Professional Displays`,
 brand: `Samsung Display`,
 meta: `High-fidelity commercial screens`,
 },
 ],
 },
 {
 slug: `interactive-panels`,
 title: `Interactive Panels`,
 kicker: `Make collaboration more interactive.`,
 summary: `Touch-enabled display solutions designed for presentations, learning, meetings and collaborative environments.`,
 image: `/images/interactive-panel.jpg`,
 brands: [`Galtech`],
 products: [
 {
 name: `Galtech Interactive Touch Panels`,
 brand: `Galtech`,
 meta: `Learning and presentation`,
 },
 ],
 },
 {
 slug: `wireless-presentation`,
 title: `Wireless Presentation`,
 kicker: `Present without the cables.`,
 summary: `Connect devices and share content seamlessly in meeting and presentation environments.`,
 image: `/images/wireless.jpg`,
 brands: [`Cloudwalker Airstream`],
 products: [
 {
 name: `Cloudwalker Airstream`,
 brand: `Cloudwalker`,
 meta: `Wireless share from any device`,
 },
 ],
 },
 {
 slug: `it-workplace`,
 title: `IT & Workplace Products`,
 kicker: `Technology that connects the workplace.`,
 summary: `Explore computers, printers, collaboration tools and other workplace technology requirements.`,
 image: `/images/unique/it-desk.jpg`,
 brands: [`HP`, `Peoplelink`],
 products: [
 { name: `HP Computers & Printers`, brand: `HP`, meta: `Workplace computing and print` },
 {
 name: `Peoplelink Collaboration`,
 brand: `Peoplelink`,
 meta: `Connectivity and communication`,
 },
 ],
 },
] as const;

export const whatWeDo = [
 {
 title: `Print & Document Solutions`,
 body: `Printers, multifunction devices and document solutions designed for everyday business requirements.`,
 href: `/products`,
 image: `/images/slides/brand.jpg`,
 featured: true,
 },
 {
 title: `Scanning & Digitisation`,
 body: `Document scanners and capture solutions for faster, more organised information management.`,
 href: `/solutions#digitisation`,
 image: `/images/scanning.jpg`,
 },
 {
 title: `Workplace & AV Technology`,
 body: `Displays, interactive panels, wireless presentation and audiovisual solutions for modern workspaces.`,
 href: `/solutions#av`,
 image: `/images/boardroom.jpg`,
 },
 {
 title: `Managed Print`,
 body: `Understand, control and optimise your organisation's printing environment.`,
 href: `/solutions#managed-print`,
 image: `/images/unique/print-reports.jpg`,
 },
 {
 title: `Service & Support`,
 body: `Maintenance, break-fix support, AMC, consumables and technical assistance to keep your technology running.`,
 href: `/services`,
 image: `/images/reception.jpg`,
 },
] as const;

export const homeSolutions = [
 { title: `Secure Printing`, href: `/solutions#secure-printing` },
 { title: `Managed Print Services`, href: `/solutions#managed-print` },
 { title: `Audio Visual Integration`, href: `/solutions#av` },
 { title: `Workplace Technology`, href: `/solutions#collaboration` },
] as const;

export const homeSlides = [
 {
 id: "brand",
 kicker: "Galaxy Imaging Technologies",
 title: "Technology That Keeps Business Moving.",
 lede: "Smarter printing. Better workplaces. Reliable support.",
 image: "/images/slides/brand.jpg",
 alt: "Multifunction printers in a bright office print area",
 position: "72% center",
 primary: { label: "Explore Our Solutions", href: "/solutions" },
 secondary: { label: "Talk to an Expert", href: "/contact" },
 },
 {
 id: "products",
 kicker: "Products",
 title: "The Right Technology for the Way You Work.",
 lede: "Printers, multifunction devices, scanners, displays and workplace technology from established brands.",
 image: "/images/slides/products.jpg",
 alt: "A range of office multifunction printers",
 position: "68% center",
 primary: { label: "Browse Products", href: "/products" },
 secondary: { label: "Enquire Now", href: "/contact" },
 },
 {
 id: "solutions",
 kicker: "Solutions",
 title: "Solutions Designed Around Your Business.",
 lede: "Secure printing, managed print, digitisation and audiovisual technology, matched to how your organisation works.",
 image: "/images/slides/solutions.jpg",
 alt: "Shared printers and scanners in an open office",
 position: "62% center",
 primary: { label: "View Solutions", href: "/solutions" },
 secondary: { label: "Talk to a Solutions Expert", href: "/contact" },
 },
 {
 id: "services",
 kicker: "Services",
 title: "Technology Needs Support. We're Here for It.",
 lede: "Installation, maintenance, AMC and break-fix support that keep your workplace technology running.",
 image: "/images/slides/services.jpg",
 alt: "A technician servicing an office multifunction printer",
 position: "68% center",
 primary: { label: "Explore Services", href: "/services" },
 secondary: { label: "Request Service", href: "/contact#enquiry" },
 },
 {
 id: "workplace",
 kicker: "Workplace Technology",
 title: "Meetings, Displays and Collaboration.",
 lede: "Interactive panels, professional displays and wireless presentation for modern meeting spaces.",
 image: "/images/slides/workplace.jpg",
 alt: "A meeting room with a professional display",
 position: "68% center",
 primary: { label: "View AV Solutions", href: "/solutions#av" },
 secondary: { label: "Browse Displays", href: "/products" },
 },
] as const;

export const whyGalaxy = [
 {
 title: `Experience`,
 body: `Industry experience to understand different workplace requirements.`,
 },
 {
 title: `Right-Fit Recommendations`,
 body: `Solutions selected around your actual workflow and requirements.`,
 },
 {
 title: `Technical Support`,
 body: `Ongoing service and technical assistance when you need it.`,
 },
 {
 title: `End-to-End Approach`,
 body: `From product selection and installation to maintenance and support.`,
 },
 {
 title: `Long-Term Partnerships`,
 body: `A relationship built around continuity, service and business needs.`,
 },
] as const;

export const approach = [
 {
 n: `01`,
 title: `Understand`,
 body: `We start by understanding your workplace, workflow and technology requirements.`,
 },
 {
 n: `02`,
 title: `Recommend`,
 body: `We identify products and solutions that align with your operational needs.`,
 },
 {
 n: `03`,
 title: `Implement`,
 body: `Our team supports installation, configuration and deployment.`,
 },
 {
 n: `04`,
 title: `Support`,
 body: `We continue to support the technology through maintenance and service.`,
 },
 {
 n: `05`,
 title: `Optimise`,
 body: `As your requirements change, we help you review and improve your technology environment.`,
 },
] as const;

export const solutions = [
 {
 id: `secure-printing`,
 title: `Secure Printing`,
 headline: `Print With More Control.`,
 body: `Documents can contain sensitive business information. Secure printing solutions help organisations control access to confidential print jobs and connect printing more effectively with their IT environment.`,
 image: `/images/unique/secure-print.jpg`,
 points: [
 `User authentication`,
 `Controlled document release`,
 `Confidential printing`,
 `Print tracking`,
 `Better visibility of print activity`,
 ],
 },
 {
 id: `managed-print`,
 title: `Managed Print`,
 headline: `Know Where Your Printing Goes.`,
 body: `Printing costs can be difficult to track when devices, departments and users operate independently. Managed Print Services help organisations understand their printing environment and manage it more systematically.`,
 image: `/images/industry-corporate.jpg`,
 process: [`Assess`, `Analyse`, `Optimise`, `Manage`, `Support`],
 points: [
 `Understand print usage`,
 `Manage devices`,
 `Monitor print activity`,
 `Improve workflow efficiency`,
 `Control unnecessary printing`,
 `Plan future requirements`,
 ],
 },
 {
 id: `av`,
 title: `Audio Visual Integration`,
 headline: `Meetings That Work Better.`,
 body: `Modern meeting spaces need more than a screen and a conference table. We help bring together displays, presentation systems, audio, video and collaboration technology into a connected workplace environment.`,
 image: `/images/unique/av-install.jpg`,
 points: [
 `Meeting-room displays`,
 `Interactive panels`,
 `Wireless presentation`,
 `Video conferencing`,
 `Audio systems`,
 `Boardroom integration`,
 `Digital signage`,
 ],
 },
 {
 id: `collaboration`,
 title: `Workplace Collaboration`,
 headline: `Connect People. Share Ideas. Keep Work Moving.`,
 body: `Technology should make collaboration easier - whether people are in the same room, across offices or working remotely.`,
 image: `/images/unique/collab-panel.jpg`,
 points: [
 `Interactive displays`,
 `Wireless presentation`,
 `Meeting-room systems`,
 `Connected workplace tools`,
 ],
 },
 {
 id: `digitisation`,
 title: `Document Digitisation`,
 headline: `Move From Paper to Digital.`,
 body: `Scanning is more than converting paper into files. The right scanning technology can help organisations capture, organise and access information more efficiently.`,
 image: `/images/unique/scan-close.jpg`,
 points: [
 `Desktop scanning`,
 `Departmental capture`,
 `High-volume production scanning`,
 `Organised digital workflows`,
 ],
 },
] as const;

export const solutionProcess = [`Understand`, `Assess`, `Design`, `Implement`, `Support`] as const;

export const services = [
 {
 id: `amc`,
 title: `Annual Maintenance Contracts`,
 kicker: `AMC`,
 body: `Planned support for your critical equipment. An AMC provides structured maintenance and service support for your office automation equipment.`,
 points: [
 `Planned maintenance`,
 `Technical service support`,
 `Equipment health checks`,
 `Support for supported office automation equipment`,
 ],
 },
 {
 id: `break-fix`,
 title: `Break-Fix Services`,
 kicker: `When Something Goes Wrong, Get It Fixed.`,
 body: `Equipment downtime can interrupt everyday work. Our break-fix service helps businesses get their supported printers, copiers and workplace technology back into operation.`,
 points: [
 `Technical troubleshooting`,
 `Equipment inspection`,
 `Fault diagnosis`,
 `Repairs`,
 `Replacement of required parts`,
 `Service assistance`,
 ],
 },
 {
 id: `mps`,
 title: `Managed Print Services`,
 kicker: `Take Control of Your Print Environment.`,
 body: `Managed Print Services help organisations understand their printing requirements, identify inefficiencies and manage their print infrastructure more effectively.`,
 points: [
 `Understand print usage`,
 `Manage devices`,
 `Monitor print activity`,
 `Improve workflow efficiency`,
 `Control unnecessary printing`,
 `Plan future requirements`,
 ],
 },
 {
 id: `rentals`,
 title: `Rentals`,
 kicker: `Get the Technology You Need. Without the Large Upfront Investment.`,
 body: `Rent or lease supported photocopiers and multifunction devices based on your business requirements.`,
 points: [`Flexible tenure`, `Supported MFDs and photocopiers`, `Service-backed rental models`],
 },
 {
 id: `consumables`,
 title: `Consumables & Spares`,
 kicker: `Keep Your Equipment Ready.`,
 body: `From essential consumables to replacement components, access the supplies required to maintain supported equipment.`,
 points: [`Genuine consumables`, `Replacement components`, `Supported equipment supplies`],
 },
 {
 id: `avsi`,
 title: `AVSI Support`,
 kicker: `Support Beyond the Screen.`,
 body: `Our audiovisual integration services cover the technology that powers modern meeting and collaboration spaces.`,
 points: [`Meeting-room systems`, `Displays and panels`, `Ongoing AV support`],
 },
] as const;

export const serviceJourney = [
 `Raise a Request`,
 `Diagnose the Issue`,
 `Technical Support`,
 `Resolution`,
 `Follow-Up`,
] as const;

export const industries = [
 {
 slug: `corporate`,
 title: `Corporate & Enterprise`,
 headline: `Keep Business Moving.`,
 body: `Support everyday printing, scanning, document management and collaboration requirements across departments and offices.`,
 solutions: [
 `Multifunction Printing`,
 `Managed Print`,
 `Secure Printing`,
 `Document Scanning`,
 `Meeting Room Technology`,
 ],
 image: `/images/industry-corporate.jpg`,
 },
 {
 slug: `healthcare`,
 title: `Healthcare`,
 headline: `When Documents Matter, Reliability Matters.`,
 body: `Support administrative, operational and document workflows with reliable printing, scanning and workplace technology.`,
 solutions: [
 `Document Printing`,
 `Scanning`,
 `Secure Printing`,
 `Displays`,
 `Workplace Technology`,
 ],
 image: `/images/industry-healthcare.jpg`,
 },
 {
 slug: `education`,
 title: `Education`,
 headline: `Make Learning More Connected.`,
 body: `Support classrooms, campuses, administration and collaboration with printing, displays and interactive technology.`,
 solutions: [
 `Interactive Displays`,
 `Printing`,
 `Scanning`,
 `Wireless Presentation`,
 `AV Integration`,
 ],
 image: `/images/industry-education.jpg`,
 },
 {
 slug: `hospitality`,
 title: `Hospitality`,
 headline: `Technology Behind Better Experiences.`,
 body: `Support guest-facing communication and back-office operations with reliable printing, displays and workplace technology.`,
 solutions: [`Professional Displays`, `Digital Signage`, `Printing`, `Scanning`, `AV Solutions`],
 image: `/images/industry-hospitality.jpg`,
 },
 {
 slug: `government`,
 title: `Government & Institutions`,
 headline: `Reliable Technology for Everyday Operations.`,
 body: `Support high-volume document workflows and administrative requirements with dependable printing, scanning and secure document solutions.`,
 solutions: [`MFDs`, `Document Scanning`, `Secure Printing`, `Managed Print`, `Service Support`],
 image: `/images/industry-government.jpg`,
 },
 {
 slug: `print-production`,
 title: `Print & Production`,
 headline: `Built Around Output.`,
 body: `For print-intensive environments, choose technology designed around volume, speed, workflow and output requirements.`,
 solutions: [
 `Production Printing`,
 `Digital Duplicating`,
 `Document Scanning`,
 `Finishing & Workflow Solutions`,
 ],
 image: `/images/unique/print-plant.jpg`,
 },
] as const;


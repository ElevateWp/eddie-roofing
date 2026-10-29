export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail { slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[]; procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[]; recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[]; costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string }; beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string }; assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[]; }
export interface ClinicInformation { name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } }; contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[]; verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[]; }
const phone = '+61 431 721 599';
const businessId = 'eddies-roofing';
const roofPhoto = '/images/roofing-hero.png';
export const CLINIC_INFO: ClinicInformation = {
  name: "Eddie’s Roofing", legalName: "Eddie’s Roofing", tagline: 'Roof repairs, restoration and whirlybird installation in Shell Cove.',
  primaryLocation: { street: '11 Windjammer Cres', suite: '', city: 'Shell Cove', state: 'NSW', postalCode: '2529', country: 'AU', directions: '11 Windjammer Cres, Shell Cove NSW 2529, Australia', landmarks: 'Serving Shell Cove, Shellharbour and surrounding areas.' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone },
  identityHighlights: ['Whirlybird installation', 'Roof repairs and leak repairs', 'Roof restoration and maintenance'],
  schedule: [
    { day: 'Monday', hours: '8 AM–4 PM' }, { day: 'Tuesday', hours: '8 AM–4 PM' }, { day: 'Wednesday', hours: '8 AM–4 PM' },
    { day: 'Thursday', hours: '8 AM–4 PM' }, { day: 'Friday', hours: '8 AM–4 PM' }, { day: 'Saturday', hours: 'Closed' }, { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [
    { value: 5, suffix: '/5', label: 'Google rating', description: 'Based on 21 customer reviews.' },
    { value: 21, suffix: '', label: 'Google reviews', description: "Customer feedback for Eddie’s Roofing." },
  ],
  accreditations: [],
};
export const DENTISTS: TeamProfile[] = [{
  id: businessId, slug: businessId, name: 'Eddie', title: 'Owner and roofing contractor',
  qualifications: 'Roofing contractor', specialization: 'Roof repairs, restoration and maintenance', experienceYears: 0,
  bio: "Eddie’s Roofing serves Shell Cove, Shellharbour and surrounding areas. Customer reviews describe professional roof cleaning, painting, repointing and tile and leak repairs, with clear communication and competitive quotes.",
  philosophy: 'Explain the work clearly, agree on the scope and carry it out with care.',
  education: [], memberships: [], specialties: ['Whirlybird installation', 'Roof repairs', 'Roof restoration', 'Roof cleaning', 'Roof painting', 'Repointing', 'Tile repairs', 'Roof maintenance'],
  image: roofPhoto, warmImage: '/images/roof-repair.png',
}];
const serviceEntries = [
  { slug: 'roof-restoration', name: 'Roof restoration', description: "Refresh and protect a tiled roof with restoration work tailored to its condition. Eddie’s Roofing can discuss cleaning, repairs, repointing and repainting as part of the project.", focus: ['Your tiled roof is weathered or due for attention', 'You want to discuss restoration options for your roof', 'You would like to understand the work before requesting a quote'] },
  { slug: 'roof-repairs', name: 'Roof repairs', description: 'Discuss damaged tiles, leaks and other roofing concerns with Eddie. Get a clear explanation of the repair options and a quote for the agreed work.', focus: ['You have noticed a leak or damaged roof area', 'Tiles appear cracked, loose or missing', 'You want to arrange repairs before further roof work'] },
  { slug: 'roof-cleaning', name: 'Roof cleaning', description: 'Roof cleaning can remove dirt and surface build-up and prepare a roof for restoration. Ask about the approach for your property and roof.', focus: ['Your roof has visible dirt or surface build-up', 'You are preparing for roof painting or restoration', 'You want to discuss safe cleaning for your roof'] },
  { slug: 'roof-painting', name: 'Roof painting', description: 'Roof painting can refresh the appearance of a tiled roof. Discuss preparation, repairs and repainting options before requesting a quote.', focus: ['Your roof coating looks worn', 'You are considering a new roof finish', 'You want painting included in a restoration project'] },
  { slug: 'roof-repointing', name: 'Roof repointing', description: 'Repointing renews the mortar or flexible pointing around ridge capping. Discuss the condition of the roof and repair options with Eddie.', focus: ['You have noticed cracked or deteriorated ridge pointing', 'You want to include repointing in roof restoration', 'You are arranging repairs to a tiled roof'] },
  { slug: 'roof-tile-repairs', name: 'Roof tile repairs', description: 'Broken or damaged tiles can leave a roof exposed to the weather. Contact Eddie to discuss the tiles, roof access and the repairs required.', focus: ['You have noticed broken or damaged tiles', 'Your roof needs tile repairs before repainting', 'You want to discuss repair options for a tiled roof'] },
  { slug: 'whirlybird-installation', name: 'Whirlybird installation', description: "Improve roof-space airflow with a whirlybird installation. Eddie’s Roofing installs whirlybirds for residential properties across Shell Cove, Shellharbour and surrounding areas.", focus: ['You want to improve ventilation in a roof space', 'Heat appears to be trapped beneath the roof', 'You are considering a whirlybird for your home'] },
  { slug: 'roof-maintenance', name: 'Roof maintenance', description: 'Regular roof maintenance can help identify visible wear and repair needs. Discuss your roof condition and suitable maintenance work with Eddie.', focus: ['You want to arrange routine roof maintenance', 'Your roof has not been checked for some time', 'You want to address minor issues before they grow'] },
];
function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
 const overview = "Eddie’s Roofing serves Shell Cove, Shellharbour and surrounding areas. Contact Eddie to describe your roof, discuss the work you need and request a quote.";
 const steps = [
  ['Discuss your roof', 'First contact', 'Tell Eddie about your property and the roofing work you have in mind.', 'Share what you have noticed, the roof type if known and any access details.'],
  ['Review the work', 'By arrangement', 'Discuss your roof and the service options that may suit it.', 'Eddie can explain the proposed scope and answer your questions.'],
  ['Receive a quote', 'After discussing the scope', 'Review the quote and agree on the work before it begins.', 'Pricing and timing depend on the property and agreed work.'],
  ['Complete the agreed work', 'As arranged', 'Eddie carries out the agreed roofing work.', 'Ask about the work completed and any next steps.'],
 ];
 return {
  ...entry, shortDescription: entry.description, navLabel: entry.name, tagline: entry.name + ' in Shell Cove and surrounding areas.', clinicalExplanation: overview,
  whoNeeds: entry.focus,
  benefits: ['Clear communication from enquiry to completion', 'Work discussed and agreed before it begins', 'Roofing services for residential properties'],
  indications: entry.focus.map(condition => ({ condition, explanation: 'Contact Eddie to describe your roof and discuss whether this service may suit your property.' })),
  procedureSteps: steps.map(([title,duration,description,clinicalDetails], index) => ({ stepNumber:index+1,title,duration,description,clinicalDetails })),
  recoveryTimeline: [
   { period: 'Before work begins', expectedSensations: 'Talk through your roof and the work you have in mind.', careProtocol: 'Confirm the scope, quote, access and timing with Eddie.' },
   { period: 'During the work', expectedSensations: 'The agreed roof work is carried out.', careProtocol: 'Follow any access or safety guidance provided.' },
   { period: 'After the work', expectedSensations: 'Review the completed work.', careProtocol: "Contact Eddie’s Roofing if you have questions about the job." },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Roof type and condition', 'Property access and preparation', 'The agreed work scope'], whatIsIncluded: ['Discussion of the roof and requested work', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on your property and the agreed scope. Contact Eddie for a quote.' },
  beforeAfterCase: { category: entry.name, clinicalContext: 'Roofing project imagery. Contact Eddie to discuss comparable work.', beforeLabel: 'Roof before work', afterLabel: 'Roof after work', beforeImage: roofPhoto, afterImage: '/images/roof-repair.png', timeframe: 'Timing depends on the agreed project.' },
  assignedDentistId: businessId,
  faqs: [
   { question: 'How do I arrange ' + entry.name.toLowerCase() + '?', answer: 'Call ' + phone + ' to discuss your property, the work required and availability.' },
   { question: 'What areas do you service?', answer: "Eddie’s Roofing serves Shell Cove, Shellharbour and surrounding areas. Call to discuss service availability for your property." },
   { question: 'How do I request a quote?', answer: 'Call ' + phone + ' to describe your roof and request a quote.' },
   { question: 'When can the work be done?', answer: 'Call Eddie to discuss current availability and a suitable time.' },
  ],
 };
}
export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition {id:string;title:string;urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)';symptoms:string[];immediateAction:string[];clinicTreatment:string;}
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export interface BlogPost {slug:string;title:string;category:string;readTime:string;publishDate:string;lastUpdated:string;authorId:string;excerpt:string;leadImage:string;relatedServiceSlug:string;content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]};}
export const BLOG_POSTS: BlogPost[] = [
 { slug:'roof-restoration-planning-guide', title:'Planning a roof restoration', category:'Roof restoration', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'What to discuss when considering roof cleaning, repairs, repointing or painting.', leadImage:roofPhoto, relatedServiceSlug:'roof-restoration', content:{ intro:'Every roof and property is different. A conversation about the roof condition and the work you have in mind is a useful first step.', sections:[{heading:'Describe what you have noticed',body:'From a safe position, note visible changes such as damaged tiles or worn areas. Avoid climbing onto the roof.'},{heading:'Discuss the proposed work',body:'Ask about the scope, preparation, timing and quote for the services you are considering.'}] } },
 { slug:'roof-cleaning-and-pressure-washing', title:'Roof cleaning and pressure washing', category:'Roof cleaning', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'Questions to ask when discussing roof cleaning for a tiled roof.', leadImage:'/images/roof-repair.png', relatedServiceSlug:'roof-cleaning', content:{ intro:'Roof cleaning can be part of a broader restoration. Talk with a roofing professional about your roof and the approach suited to your property.', sections:[{heading:'Share the roof details',body:'Mention your roof type, any visible concerns and what you would like the finished roof to look like.'},{heading:'Agree on the scope',body:'Before work begins, discuss preparation, access, timing and the quote.'}] } },
 { slug:'roof-repointing-and-tile-repairs', title:'Roof repointing and tile repairs', category:'Roof repairs', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'Discuss broken tiles and ridge capping as part of your roof project.', leadImage:roofPhoto, relatedServiceSlug:'roof-repointing', content:{ intro:'If you notice damaged tiles or changes around ridge capping, share what you can see with a roofing professional and ask about next steps.', sections:[{heading:'Note visible concerns safely',body:'Describe the location of the concern without climbing onto the roof.'},{heading:'Ask what the quote covers',body:'Discuss tile repairs, repointing and any other work included in the proposed scope.'}] } },
];
export const CUSTOMER_REVIEWS: {name:string;date:string;text:string;rating:number}[] = [
 { name:"Adam & Mel Briggs", date:'a month ago', rating:5, text:"Would highly recommend Eddie’s Roofing! He did a fantastic job cleaning, painting, repointing, repairing leaks and damaged tiles on our roof. His knowledge and experience were clear from the start, and he explained everything in a friendly, …" },
 { name:'Amanda Cumming', date:'2 months ago', rating:5, text:'Eddie did a great job on our roof. Repairs to our 38 year old roof were carried out professionally and we could not be happier with the repainting. Eddie kept in contact throughout the whole process and we consider the amount charged was very reasonable.' },
 { name:'Pierre ABD', date:'6 months ago', rating:5, text:'Eddie’s Roofing did a fantastic job on our tiled roof. Eddie provided a very detailed and competitive quote, was great to deal with, and extremely friendly throughout the process. He repaired a large number of broken and damaged tiles, then …' },
 { name:'brendo mac', date:'7 months ago', rating:5, text:"I highly recommend Eddie's Roofing. Eddie was polite, courteous and explained the issues that I was having and how it was going to be fixed. He kept in communication with me to let me know when he was going to be able to work on the job. And everything was cleaned up afterwards. Yeah, Highly Recommended !!!" },
 { name:'Karen Barrett', date:'11 months ago', rating:5, text:'Eddie’s Roofing have just completed cleaning, re-pointing, repairing and spray-painting our roof. They have done an excellent job and we are so happy to highly recommend them to others. They are highly professional and hardworking, and …' },
 { name:'James Goodlet', date:'a year ago', rating:5, text:'Eddie did a restoration and repaint of our 25 year old roof. He did an outstanding job and has brought our place back to life! He was very knowledgeable, transparent and timely. You can trust him to do a proper job! Highly recommend 👌 …' },
 { name:'Pauline Ea', date:'a year ago', rating:5, text:'We are extremely pleased with our roof repairs, repointing, cleaning and painting. Eddie is such a nice guy, very professional, easy to deal with and uses quality products at competitive prices. This is the second roof Eddie has worked on …' },
 { name:'Michael Hugill', date:'3 months ago', rating:5, text:'Highly recommend Eddie. Great communication and great result. Even made some suggestions and helped me get them done.' },
 { name:'David Hicks', date:'a year ago', rating:5, text:'Had Eddie and his team, fix and repaired our roof. They were on time, polite and did a wonderful job, no leaks after a week of rain, highly recommended them. Thanks Eddie, David & Diane.' },
 { name:'Kelly Chandler', date:'a year ago', rating:5, text:'Had our roof inspected and maintained before Christmas just after we bought it. Eddie fit us in so that it was done before Christmas. Lovely to deal with and no issue too big. Highly recommend!' },
 { name:'Helen Wilkins', date:'a year ago', rating:5, text:'I couldn’t be happier with the work done by Eddie’s Roofing. From start to finish, the team was professional, punctual, and clearly took pride in their work. They restored my roof to its former glory - it looks as good as new! …' },
 { name:'David Behrens', date:'11 months ago', rating:5, text:'Outstanding service and very efficient. I would definitely recommend as its hard finding trades you can trust.' },
 { name:'Nathan Moore', date:'a year ago', rating:5, text:'Highly recommended Eddie’s Roofing. Very professional, reliable, excellent workmanship at are reasonable price.' },
 { name:'Philip Mason', date:'2 years ago', rating:5, text:'Great job, no mucking around, even did repairs outside the square, eg made sure any loose tiles located whilst cleaning, were all secured correctly, and we had a few! Thanks Eddie and team, highly recommend.' },
 { name:'Stephanie Wilmott', date:'a year ago', rating:5, text:'Reliable, professional and did a great job on our roof. Would highly recommend using Eddie and team.' },
 { name:'Glenda Muehlbauer', date:'3 years ago', rating:5, text:"Can highly recommend Eddie's Roofing. Very professional and excellent work explained all the repairs and gave us a great quote. Very happy customer." },
 { name:'JUBY THOMAS', date:'a year ago', rating:5, text:'Did the job quickly and has shown great professionalism. Very easy to deal with and within the budget. Thank you' },
 { name:'Adam King', date:'2 years ago', rating:5, text:'Eddie was absolutely amazing, delivered a fantastic service that was faster and cheaper than expected with assurance and updates the entire time.' },
 { name:'Emma', date:'11 months ago', rating:5, text:'Great service and very professional. Would highly recommend Eddie and his team.' },
 { name:'E Woods', date:'3 years ago', rating:5, text:'Eddie is reliable, does a great job and has great customer service. Thanks again Eddie much appreciated.' },
 { name:'David Chresby', date:'a year ago', rating:5, text:'Highly recommend, very professional and reliable team.' },
];
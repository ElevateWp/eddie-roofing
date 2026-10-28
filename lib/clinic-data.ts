export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail { slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[]; procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[]; recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[]; costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string }; beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string }; assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[]; }
export interface ClinicInformation { name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } }; contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[]; verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[]; }
const phone = '+61 404 026 017';
const businessId = 'jmk-roofing';
const roofPhoto = '/images/roofing-hero.png';
export const CLINIC_INFO: ClinicInformation = {
  name: 'J.M.K Roofing', legalName: 'J.M.K Roofing', tagline: 'Roofing made easy.',
  primaryLocation: { street: '', suite: '', city: '', state: '', postalCode: '', country: 'AU', directions: 'Call to confirm service coverage.', landmarks: '' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone },
  identityHighlights: ['Roofing contractor', 'Reliable, professional workmanship', 'Call to confirm service coverage'],
  schedule: [],
  verifiedStats: [{ value: 6, suffix: '', label: 'Google reviews', description: 'Feedback on roofing, communication and workmanship.' }],
  accreditations: [],
};
export const DENTISTS: TeamProfile[] = [{
  id: businessId, slug: businessId, name: 'J.M.K Roofing', title: 'Roofing contractor',
  qualifications: 'Roofing contractor', specialization: 'Roof repairs, maintenance and gutter services', experienceYears: 0,
  bio: 'J.M.K Roofing is a roofing contractor. Jordan and the team handle full re-roofs, roof maintenance and repairs, leak detection, gutter cleaning and leaf guard installation. Customers mention the team’s communication, reliability, tidy workmanship and fair pricing.',
  philosophy: 'Reliable, professional service with care taken to complete every agreed job to a high standard.',
  education: [], memberships: [], specialties: ['Roof repairs', 'Full re-roofing', 'Roof maintenance', 'Gutter cleaning', 'Leak detection', 'Leaf guard installation'],
  image: roofPhoto, warmImage: '/images/roof-repair.png',
}];
const serviceEntries = [
  { slug: 'roof-repairs', name: 'Roof repairs', description: 'Roof repair work for issues such as visible damage or a leak. Call Jordan and the team to explain what you have noticed and request a quote.', focus: ['You have noticed damaged roofing', 'A leak or roof issue needs attention', 'You want to discuss repair options for your property'] },
  { slug: 'full-re-roofing', name: 'Full re-roofing', description: 'Discuss a full re-roof with J.M.K Roofing. The team can talk through your property, the work involved and a quote.', focus: ['You are considering a full re-roof', 'You want to discuss the condition of an existing roof', 'You need to plan roofing work for your property'] },
  { slug: 'roof-maintenance', name: 'Roof maintenance', description: 'Roof maintenance to help address issues around your roof. Contact the team to discuss the work your property needs.', focus: ['You want to arrange roof maintenance', 'You have noticed changes or wear on your roof', 'You would like to discuss ongoing roof care'] },
  { slug: 'gutter-cleaning', name: 'Gutter cleaning', description: 'Gutter cleaning for your property. Ask about availability, access and a quote for the job.', focus: ['Your gutters need cleaning', 'You have noticed leaves or debris in the gutters', 'You want to include gutter cleaning with other roofing work'] },
  { slug: 'leak-detection', name: 'Roof leak detection', description: 'Help identifying the source of a roof leak. Describe where you have noticed water and arrange a discussion with the team.', focus: ['You have noticed water entering your home', 'A damp patch or leak appears after rain', 'You need help locating a roof leak'] },
  { slug: 'leaf-guard-installation', name: 'Leaf guard installation', description: 'Leaf guard installation to help keep leaves out of your gutters. Call to discuss your roof, gutter type and a quote.', focus: ['Leaves regularly build up in your gutters', 'You want to discuss installing leaf guards', 'You are planning gutter work for your property'] },
  { slug: 'roof-inspections', name: 'Roof inspections', description: 'Arrange a roof inspection to discuss visible concerns and the condition of your roof. Contact J.M.K Roofing to confirm availability.', focus: ['You would like a roofing professional to look over your roof', 'You are planning a roofing project', 'You have noticed a change and want to discuss next steps'] },
  { slug: 'gutter-maintenance', name: 'Gutter maintenance', description: 'Gutter maintenance for your property, including a conversation about cleaning and leaf guard options.', focus: ['Your gutters need attention', 'You want to discuss gutter cleaning or leaf guards', 'You are planning roof and gutter maintenance'] },
];
function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
 const general = 'J.M.K Roofing provides professional roofing services. Call to describe your property and discuss the work required, availability and a quote.';
 const steps = [
  ['Tell us about the job', 'First contact', 'Describe the property and the roofing work you need.', 'Share what you have noticed and any relevant access details.'],
  ['Discuss the work', 'After your enquiry', 'Talk through your project with Jordan and the team.', 'The team can discuss the likely scope based on the information available.'],
  ['Confirm a quote', 'By arrangement', 'Request a quote and discuss a suitable time.', 'Pricing and timing depend on your property and the agreed scope.'],
  ['Complete the agreed work', 'As arranged', 'The team carries out the agreed roofing work.', 'The job is completed to the agreed scope.'],
 ];
 return {
  ...entry, shortDescription: entry.description, navLabel: entry.name, tagline: entry.name + ' from J.M.K Roofing.', clinicalExplanation: general,
  whoNeeds: entry.focus,
  benefits: ['Professional, reliable service', 'Careful, tidy workmanship', 'Clear communication and fair pricing'],
  indications: entry.focus.map(condition => ({ condition, explanation: 'Call to describe the issue and discuss the work that may be suitable for your property.' })),
  procedureSteps: steps.map(([title,duration,description,clinicalDetails], index) => ({ stepNumber:index+1,title,duration,description,clinicalDetails })),
  recoveryTimeline: [
   { period: 'Before the work', expectedSensations: 'Explain what you have noticed and what you would like done.', careProtocol: 'Discuss access, scope, quote and timing with the team.' },
   { period: 'During the work', expectedSensations: 'The team completes the agreed roofing work.', careProtocol: 'Follow any access or safety guidance provided by the team.' },
   { period: 'After the work', expectedSensations: 'Review the completed work with the team.', careProtocol: 'Contact J.M.K Roofing with any questions about the job.' },
  ],
  costTransparency: { baseRange: 'Call to discuss your property and request a quote.', factors: ['The condition and type of roof or gutters', 'Property access and job requirements', 'The agreed scope of work'], whatIsIncluded: ['Discussion of your project', 'Agreement on the work scope', 'Quote and timing information'], note: 'Pricing depends on the property and the agreed scope. Call J.M.K Roofing to request a quote.' },
  beforeAfterCase: { category: entry.name, clinicalContext: 'Illustrative roofing imagery; ask the team about relevant work.', beforeLabel: 'Illustrative image', afterLabel: 'Illustrative image', beforeImage: roofPhoto, afterImage: '/images/roof-repair.png', timeframe: 'Project timing confirmed when you enquire.' },
  assignedDentistId: businessId,
  faqs: [
   { question: 'How do I arrange ' + entry.name.toLowerCase() + '?', answer: 'Call ' + phone + ' to discuss your property, the work required and availability.' },
   { question: 'What areas do you service?', answer: 'Call J.M.K Roofing to confirm service coverage for your property.' },
   { question: 'How do I request a quote?', answer: 'Call ' + phone + ' to describe the job and request a quote.' },
   { question: 'When can the work be done?', answer: 'Call to discuss current availability and a suitable time.' },
  ],
 };
}
export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition {id:string;title:string;urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)';symptoms:string[];immediateAction:string[];clinicTreatment:string;}
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export interface BlogPost {slug:string;title:string;category:string;readTime:string;publishDate:string;lastUpdated:string;authorId:string;excerpt:string;leadImage:string;relatedServiceSlug:string;content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]};}
export const BLOG_POSTS: BlogPost[] = [
 { slug:'signs-your-roof-needs-repair', title:'Signs your roof may need repairs', category:'Roof repairs', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'Visible changes around your home may be a reason to ask a roofing professional about repairs.', leadImage:roofPhoto, relatedServiceSlug:'roof-repairs', content:{ intro:'Roof damage can be difficult to see from the ground. If you notice a change, contact a roofing professional to discuss it.', sections:[{heading:'Look for visible changes',body:'From a safe position, note any visible damage or changes to the roof. Avoid climbing onto a roof; contact a professional if access is unsafe.'},{heading:'Discuss what you noticed',body:'Share where you saw the change and ask about the repair work required and a quote.'}] } },
 { slug:'what-to-do-about-roof-damage', title:'What to do when you notice roof damage', category:'Roof repairs', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'A few practical details can help explain a roof repair enquiry.', leadImage:'/images/roof-repair.png', relatedServiceSlug:'roof-repairs', content:{ intro:'If your roof appears damaged, avoid unsafe access and contact a roofing professional to discuss the issue.', sections:[{heading:'Describe what you can see',body:'Share the location of the damage and when you first noticed it.'},{heading:'Ask about next steps',body:'Call to discuss the repair, availability and a quote for your property.'}] } },
 { slug:'planning-roof-maintenance', title:'Planning roof maintenance for your property', category:'Roof maintenance', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'Share a few details about your property when arranging roofing work.', leadImage:'/images/roofb3-1.jpg', relatedServiceSlug:'roof-maintenance', content:{ intro:'Property type, access and what you have noticed can help explain the roofing work you need.', sections:[{heading:'Describe the property',body:'Mention the property type, roof access and any visible areas of concern.'},{heading:'Discuss timing and scope',body:'Call to talk through the work and confirm a suitable time and quote.'}] } },
];
export const CUSTOMER_REVIEWS: {name:string;date:string;text:string}[] = [
 { name:'Noah Hayes', date:'3 months ago', text:'We’ve used Jordan and the team at JMK many times and they’ve always exceeded our expectations. Whether it’s a full re-roof or a gutter clean, every job is done to the highest standard. They’re reliable, professional and great to deal with.' },
 { name:'Ash B', date:'3 months ago', text:'I highly recommend Jordan and his team! They did a great job and I’ll definitely be using them again.' },
 { name:'Nathan James', date:'8 months ago', text:'We used Jordan and his crew for roof maintenance. They were very professional, and the work was clean and neat. Our roof looks better than ever. Extremely happy with their work and would highly recommend them.' },
 { name:'Sandra Mirabile', date:'8 months ago', text:'J.M.K Roofing have completed many jobs at my home, from leak detection and repairs to gutter cleans and leaf guard installation. Great communication and fair pricing.' },
 { name:'Darren Heathb D', date:'4 months ago', text:'Great communication and workmanship.' },
 { name:'Amanda Blair', date:'3 months ago', text:'Reasonable price.' },
];

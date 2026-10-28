export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail { slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[]; procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[]; recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[]; costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string }; beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string }; assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[]; }
export interface ClinicInformation { name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } }; contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[]; verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[]; }
const phone = '+61 449 615 054';
const businessId = 'vipin-and-kiran';
const roofPhoto = '/images/roofing-hero.png';
export const CLINIC_INFO: ClinicInformation = {
  name: 'Reliance Roof Restoration Greater Western Sydney', legalName: 'Reliance Roof Restoration Greater Western Sydney', tagline: 'Roof restoration for Greater Western Sydney.',
  primaryLocation: { street: '8 Tully Pl', suite: '', city: 'Quakers Hill', state: 'NSW', postalCode: '2763', country: 'AU', directions: '8 Tully Pl, Quakers Hill NSW 2763, Australia', landmarks: 'Serving Greater Western Sydney.' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone, website: 'https://relianceroofwesternsydney.com.au/' },
  identityHighlights: ['Roof restoration', 'Roof cleaning and painting', 'Roof repointing and tile repairs'],
  schedule: [
    { day: 'Monday', hours: '7 AM–5 PM' }, { day: 'Tuesday', hours: '7 AM–5 PM' }, { day: 'Wednesday', hours: '7 AM–5 PM' },
    { day: 'Thursday', hours: '7 AM–5 PM' }, { day: 'Friday', hours: '7 AM–5 PM' }, { day: 'Saturday', hours: '7 AM–5 PM' }, { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [
    { value: 4.8, suffix: '/5', label: 'Google rating', description: 'Based on 81 customer reviews.' },
    { value: 81, suffix: '', label: 'Google reviews', description: 'Customer feedback for Reliance Roof Restoration Greater Western Sydney.' },
  ],
  accreditations: [],
};
export const DENTISTS: TeamProfile[] = [{
  id: businessId, slug: businessId, name: 'Vipin and Kiran', title: 'Roof restoration team',
  qualifications: 'Roof restoration team', specialization: 'Roof restoration, cleaning, painting and repointing', experienceYears: 0,
  bio: 'Vipin and Kiran lead Reliance Roof Restoration Greater Western Sydney. Customers highlight their clear communication, professional service and care in completing roof restoration work.',
  philosophy: 'Listen carefully, communicate clearly and complete the agreed work with care.',
  education: [], memberships: [], specialties: ['Roof restoration', 'Roof cleaning', 'Roof painting', 'Roof repointing', 'Roof tile repairs'],
  image: roofPhoto, warmImage: '/images/roof-repair.png',
}];
const serviceEntries = [
  { slug: 'roof-restoration', name: 'Roof restoration', description: 'Refresh the appearance and condition of your tiled roof. Discuss cleaning, repairs, repointing and painting options for your property with the Reliance team.', focus: ['Your tiled roof is weathered or due for attention', 'You want to discuss restoring the look of your roof', 'You would like to understand the work involved before requesting a quote'] },
  { slug: 'roof-cleaning', name: 'Roof cleaning', description: 'Discuss roof cleaning and pressure washing for your property. The team can talk through the roof, access and suitable next steps.', focus: ['Your roof needs cleaning', 'You have noticed a build-up of dirt or surface growth', 'You want to discuss cleaning as part of a roof restoration'] },
  { slug: 'roof-painting', name: 'Roof painting', description: 'Talk through roof painting options and finishes for your property. Ask Reliance Roof Restoration about preparation, scope and a quote.', focus: ['You are considering a new finish for your roof', 'Your roof coating looks worn', 'You want to discuss painting as part of a roof restoration'] },
  { slug: 'roof-repointing', name: 'Roof repointing', description: 'Discuss roof repointing and ridge capping work with the team. Share what you have noticed and request advice on the work your roof may need.', focus: ['You have noticed deterioration around ridge capping', 'You want to include repointing in a roof restoration', 'You would like to discuss the condition of your tiled roof'] },
  { slug: 'roof-tile-repairs', name: 'Roof tile repairs', description: 'Ask about replacing broken roof tiles and related repair work. Contact the team to discuss your roof and request a quote.', focus: ['You have noticed broken or damaged tiles', 'You are planning roof restoration and want to discuss tile repairs', 'You want to ask about roof repair options'] },
];
function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
 const overview = 'Reliance Roof Restoration Greater Western Sydney works with homeowners across Greater Western Sydney. Contact the team to describe your tiled roof, discuss the work required and request a quote.';
 const steps = [
  ['Discuss your roof', 'First contact', 'Tell the team about your property and what you would like done.', 'Share any visible concerns, the roof type if known and access details.'],
  ['Review the work', 'By arrangement', 'Discuss the roof and the service options that may suit it.', 'The team can explain the proposed scope and answer your questions.'],
  ['Receive a quote', 'After discussing the scope', 'Review the quote and agree on the work before it begins.', 'Timing and pricing depend on the property and agreed work.'],
  ['Complete the agreed work', 'As arranged', 'The team carries out the agreed roof work.', 'Ask the team about the work completed and any next steps.'],
 ];
 return {
  ...entry, shortDescription: entry.description, navLabel: entry.name, tagline: entry.name + ' in Greater Western Sydney.', clinicalExplanation: overview,
  whoNeeds: entry.focus,
  benefits: ['Clear communication from enquiry to completion', 'Work discussed and agreed before it begins', 'Roofing services for tiled roofs'],
  indications: entry.focus.map(condition => ({ condition, explanation: 'Contact the team to describe your roof and discuss whether this service may suit your property.' })),
  procedureSteps: steps.map(([title,duration,description,clinicalDetails], index) => ({ stepNumber:index+1,title,duration,description,clinicalDetails })),
  recoveryTimeline: [
   { period: 'Before work begins', expectedSensations: 'Talk through your roof and the work you have in mind.', careProtocol: 'Confirm the scope, quote, access and timing with the team.' },
   { period: 'During the work', expectedSensations: 'The team carries out the agreed roof work.', careProtocol: 'Follow any access or safety guidance from the team.' },
   { period: 'After the work', expectedSensations: 'Review the completed work with the team.', careProtocol: 'Contact Reliance Roof Restoration if you have questions about the job.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Roof type and condition', 'Property access and preparation', 'The agreed work scope'], whatIsIncluded: ['Discussion of the roof and requested work', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on your property and the agreed scope. Contact the team for a quote.' },
  beforeAfterCase: { category: entry.name, clinicalContext: 'Roofing project imagery. Contact the team to discuss comparable work.', beforeLabel: 'Roof before work', afterLabel: 'Restored roof', beforeImage: roofPhoto, afterImage: '/images/roof-repair.png', timeframe: 'Timing depends on the agreed project.' },
  assignedDentistId: businessId,
  faqs: [
   { question: 'How do I arrange ' + entry.name.toLowerCase() + '?', answer: 'Call ' + phone + ' to discuss your property, the work required and availability.' },
   { question: 'What areas do you service?', answer: 'Reliance Roof Restoration Greater Western Sydney is based in Quakers Hill. Call to discuss your property and service availability.' },
   { question: 'How do I request a quote?', answer: 'Call ' + phone + ' to describe your roof and request a quote.' },
   { question: 'When can the work be done?', answer: 'Call the team to discuss current availability and a suitable time.' },
  ],
 };
}
export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition {id:string;title:string;urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)';symptoms:string[];immediateAction:string[];clinicTreatment:string;}
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export interface BlogPost {slug:string;title:string;category:string;readTime:string;publishDate:string;lastUpdated:string;authorId:string;excerpt:string;leadImage:string;relatedServiceSlug:string;content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]};}
export const BLOG_POSTS: BlogPost[] = [
 { slug:'roof-restoration-planning-guide', title:'Planning a roof restoration', category:'Roof restoration', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'What to discuss when you are considering roof cleaning, repairs, repointing or painting.', leadImage:roofPhoto, relatedServiceSlug:'roof-restoration', content:{ intro:'Every roof and property is different. A conversation about the roof condition and the work you have in mind is a useful first step.', sections:[{heading:'Describe what you have noticed',body:'From a safe position, note visible changes such as damaged tiles or worn areas. Avoid climbing onto the roof.'},{heading:'Discuss the proposed work',body:'Ask about the scope, preparation, timing and quote for the services you are considering.'}] } },
 { slug:'roof-cleaning-and-pressure-washing', title:'Roof cleaning and pressure washing', category:'Roof cleaning', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'Questions to ask when discussing roof cleaning for a tiled roof.', leadImage:'/images/roof-repair.png', relatedServiceSlug:'roof-cleaning', content:{ intro:'Roof cleaning can be part of a broader restoration. Talk with a roofing professional about your roof and the approach suited to your property.', sections:[{heading:'Share the roof details',body:'Mention your roof type, any visible concerns and what you would like the finished roof to look like.'},{heading:'Agree on the scope',body:'Before work begins, discuss preparation, access, timing and the quote.'}] } },
 { slug:'roof-repointing-and-tile-repairs', title:'Roof repointing and tile repairs', category:'Roof repairs', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'Discuss broken tiles and ridge capping as part of your roof project.', leadImage:'/images/roofb3-1.jpg', relatedServiceSlug:'roof-repointing', content:{ intro:'If you notice damaged tiles or changes around ridge capping, share what you can see with a roofing professional and ask about next steps.', sections:[{heading:'Note visible concerns safely',body:'Describe the location of the concern without climbing onto the roof.'},{heading:'Ask what the quote covers',body:'Discuss tile repairs, repointing and any other work included in the proposed scope.'}] } },
];
export const CUSTOMER_REVIEWS: {name:string;date:string;text:string}[] = [
 { name:'Rahul Singh', date:'a year ago', text:'I recently had my roof restoration done and I’m extremely happy with the results. Vipin was professional, dedicated, and went above and beyond to make sure everything was completed to the highest standard. The service was quick and efficient.' },
 { name:'Arwyn', date:'7 months ago', text:'I am a very happy customer. Vipin and his wife Kiran are amazing. The communications with them are so easy and comfortable! They understand exactly what I need.' },
 { name:'Ankur Chauhan', date:'5 years ago', text:'Vipin Ji and his team are professional, reliable, honest, flexible, punctual and trustworthy! I have had roof repointing, pressure wash and painted! Excellent result.' },
];

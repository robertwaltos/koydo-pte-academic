export const pte_academicConfig = {
  examId: 'EXAM009',
  slug: 'pte-academic',
  name: 'PTE Academic',
  fullName: 'Pearson Test of English Academic',
  sections: ['Speaking & Writing', 'Reading', 'Listening'] as const,
  themeColor: '#6A1B9A',
  themeColorDark: '#38006B',
  country: 'AU',
  language: 'en',
  pricing: '$4.99/mo',
  ipDisclaimer: `PTE Academic™ is a registered trademark of Pearson. Koydo is not affiliated with or endorsed by Pearson.`,
} as const;
export type PteAcademicSection = | 'Speaking & Writing'
  | 'Reading'
  | 'Listening';

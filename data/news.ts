export interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "January 20, 2027",
    category: "Campaign Update",
    title: "Hon. Eloke Launches 'Fresh Ideas 2027' Campaign in Igueben",
    excerpt:
      "The campaign officially kicks off with a massive rally, drawing supporters from across the constituency.",
    readTime: "3 min read",
  },
  {
    date: "January 15, 2027",
    category: "Press Release",
    title: "Education Reform Plan Unveiled for Esan Land",
    excerpt:
      "A comprehensive education initiative promising scholarships and infrastructure improvements announced.",
    readTime: "5 min read",
  },
  {
    date: "January 10, 2027",
    category: "Community",
    title: "Youth Empowerment Summit Attracts Over 500 Participants",
    excerpt:
      "Young people from all three LGAs gather to discuss skills development and entrepreneurship.",
    readTime: "4 min read",
  },
];

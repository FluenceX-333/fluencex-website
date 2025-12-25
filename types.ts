
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export interface Creator {
  name: string;
  handle: string;
  niche: string;
  followers: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

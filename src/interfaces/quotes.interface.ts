export interface Quotee {
  id?: number;
  name: string;
}

export interface Quote {
  id?: number;
  quoteeId: number;
  quote: string;
}

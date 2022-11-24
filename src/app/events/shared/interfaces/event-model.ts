export interface IEvent {
  _id: string;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location: {
    address: string;
    city: string;
    country: string;
  };
  onlineUrl: string;
  sessions: ISession[];
}

export interface ISession {
  _id: string;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
  owner: string;
}

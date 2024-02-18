export enum Currency {
  USD = "USD",
  EUR = "EUR",
}

export type DeleteNewEventParams = {
  eventId: string;
  path: string;
};

export type GetAllNewEventsParams = {
  query: string;
  category: string;
  limit: number;
  page: number;
};

export type GetNewEventsByUserParams = {
  userId: string;
  limit?: number;
  page: number;
};

export type GetRelatedNewEventsByCategoryParams = {
  categoryId: string;
  eventId: string;
  limit?: number;
  page: number | string;
};

export type UpdateNewEventParams = {
  userId: string;
  event: CreateNewEventParams["event"] & { _id: string };
  path: string;
};

export type CreateNewEventParams = {
  userId: string;
  event: {
    title: string;
    subtitle?: string;
    description?: string;
    descriptionDetail?: string;
    location?: string; // replace w/ google API later
    createdAt: Date;
    imageUrl: string;
    imagesUrl?: string[];
    startDateTime: Date;
    endDateTime: Date;
    price: number;
    isFree?: boolean;
    currency: Currency;
    url?: string;
    categoryId: string;
    isOnline?: boolean;
    typeTicket: string[];
    tags: { _id: string; name: string }[]; // can be added by user
    ticketsVariant?: {
      name: string;
      price: number;
      description?: string;
    };
    contactInfo?: {
      phone?: string;
      other?: string;
    };
    sponsors?: {
      name: string;
      logoUrl: string;
      websiteUrl?: string;
    }[];
    termsAndConditions?: string;
    refundPolicy?: string;
    ageRestriction?: [number, number];
    capacity: number;
    frequentQuestions?: Record<string, string>[];
  };
  path: string;
};

export type NewEvent = {
  _id: string;
  title: string;
  subtitle?: string;
  description?: string;
  descriptionDetail?: string;
  location?: string; // replace w/ google API later
  createdAt: Date;
  imageUrl: string;
  imagesUrl?: string[];
  startDateTime: Date;
  endDateTime: Date;
  price: number;
  isFree?: boolean;
  currency: Currency;
  url?: string;
  category: { _id: string; name: string }; // can be added by user
  organiser: {
    _id: string;
    firstName: string;
    lastName: string;
    organisationName?: string;
    followers?: string[]; // user IDs
    percentageOfRepeatCustomers?: number; // computed
  };
  isOnline?: boolean;
  typeTicket: string[];
  tags: { _id: string; name: string }[]; // can be added by user
  ticketsVariant?: {
    name: string;
    price: number;
    description?: string;
  };
  contactInfo?: {
    phone?: string;
    other?: string;
  };
  sponsors?: {
    name: string;
    logoUrl: string;
    websiteUrl?: string;
  }[];
  termsAndConditions?: string;
  refundPolicy?: string;
  ageRestriction?: [number, number];
  capacity: number;
  frequentQuestions?: Record<string, string>[];
};

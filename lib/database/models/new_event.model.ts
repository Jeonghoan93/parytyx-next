import { Currency } from "@/types/new_event.type";
import { Document, Schema, model, models } from "mongoose";

export interface INewEvent extends Document {
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
}

const NewEventSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String },
    descriptionDetail: { type: String },
    location: { type: String }, // replace with Google API later
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    imagesUrl: [String],
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    price: { type: Number },
    isFree: { type: Boolean, default: false },
    currency: { type: String, enum: Object.values(Currency), required: true },
    url: { type: String },
    category: {
      _id: { type: Schema.Types.ObjectId, required: true },
      name: { type: String, required: true },
    },
    organiser: {
      _id: { type: Schema.Types.ObjectId, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      organisationName: { type: String },
      followers: [String],
      percentageOfRepeatCustomers: { type: Number }, // computed
    },
    isOnline: { type: Boolean, default: false },
    typeTicket: [String],
    tags: [
      {
        _id: { type: Schema.Types.ObjectId, required: true },
        name: { type: String, required: true },
      },
    ],
    ticketsVariant: {
      name: { type: String },
      price: { type: Number },
      description: { type: String },
    },
    contactInfo: {
      phone: { type: String },
      other: { type: String },
    },
    sponsors: [
      {
        name: { type: String },
        logoUrl: { type: String },
        websiteUrl: { type: String },
      },
    ],
    termsAndConditions: { type: String },
    refundPolicy: { type: String },
    ageRestriction: [Number], // no support tuple, handle logic in code.
    capacity: { type: Number, required: true },
    frequentQuestions: [Schema.Types.Mixed], // flexible key/value pairs
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const NewEvent = models.NewEvent || model("NewEvent", NewEventSchema);

export default NewEvent;

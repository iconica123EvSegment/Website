import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema(
  {
    originalName: String,
    mimeType: String,
    filename: String,
    path: String,
    size: Number
  },
  { _id: false }
);

const createSchema = (payloadDefinition = {}, options = {}) =>
  new mongoose.Schema(
    {
      ...payloadDefinition,
      file: fileSchema
    },
    {
      timestamps: true,
      ...options
    }
  );

export const ContactSubmission = mongoose.model(
  'ContactSubmission',
  createSchema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      phone: { type: String, trim: true, default: '' },
      subject: { type: String, required: true, trim: true },
      message: { type: String, required: true, trim: true }
    },
    { collection: 'contacts' }
  )
);

export const DealerSubmission = mongoose.model(
  'DealerSubmission',
  createSchema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      company: { type: String, trim: true, default: '' },
      city: { type: String, required: true, trim: true },
      experience: { type: String, trim: true, default: '' },
      investment: { type: String, required: true, trim: true },
      message: { type: String, trim: true, default: '' }
    },
    { collection: 'dealers' }
  )
);

export const TestRideSubmission = mongoose.model(
  'TestRideSubmission',
  createSchema(
    {
      name: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      model: { type: String, required: true, trim: true },
      date: { type: String, required: true, trim: true },
      message: { type: String, trim: true, default: '' }
    },
    { collection: 'testrides' }
  )
);

export const CareerSubmission = mongoose.model(
  'CareerSubmission',
  createSchema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      position: { type: String, required: true, trim: true }
    },
    { collection: 'careers' }
  )
);

export const BuyNowSubmission = mongoose.model(
  'BuyNowSubmission',
  createSchema(
    {
      fullName: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      address: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      pincode: { type: String, required: true, trim: true },
      paymentMethod: { type: String, required: true, trim: true },
      preferredDate: { type: String, trim: true, default: '' },
      message: { type: String, trim: true, default: '' },
      productId: { type: String, trim: true, default: '' },
      productName: { type: String, trim: true, default: '' },
      productType: { type: String, trim: true, default: '' },
      productPrice: { type: String, trim: true, default: '' },
      bookingDate: { type: String, trim: true, default: '' }
    },
    { collection: 'buynow' }
  )
);

export const QuickBuySubmission = mongoose.model(
  'QuickBuySubmission',
  createSchema(
    {
      name: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      place: { type: String, required: true, trim: true },
      model: { type: String, trim: true, default: '' },
      timestamp: { type: String, trim: true, default: '' }
    },
    { collection: 'quickbuys' }
  )
);

export const NewsletterSubmission = mongoose.model(
  'NewsletterSubmission',
  createSchema(
    {
      email: { type: String, required: true, trim: true }
    },
    { collection: 'newsletters' }
  )
);

export const formModelMap = {
  contact: ContactSubmission,
  dealers: DealerSubmission,
  'test-ride': TestRideSubmission,
  careers: CareerSubmission,
  'buy-now': BuyNowSubmission,
  'quick-buy': QuickBuySubmission,
  newsletter: NewsletterSubmission
};

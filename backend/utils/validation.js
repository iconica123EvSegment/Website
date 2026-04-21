const requiredFieldsByForm = {
  contact: ['name', 'email', 'subject', 'message'],
  dealers: ['name', 'email', 'phone', 'city', 'investment'],
  'test-ride': ['name', 'phone', 'email', 'city', 'model', 'date'],
  careers: ['name', 'email', 'position'],
  'buy-now': ['fullName', 'email', 'phone', 'address', 'city', 'state', 'pincode', 'paymentMethod'],
  'quick-buy': ['name', 'phone', 'place'],
  newsletter: ['email']
};

export function validateSubmission(formType, payload) {
  const requiredFields = requiredFieldsByForm[formType];

  if (!requiredFields) {
    return { valid: false, message: 'Unsupported form type.' };
  }

  for (const field of requiredFields) {
    const value = payload[field];
    if (typeof value !== 'string' || !value.trim()) {
      return {
        valid: false,
        message: `${field} is required.`
      };
    }
  }

  return { valid: true };
}

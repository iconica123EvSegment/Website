const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

type PayloadValue = string | Blob | File | undefined | null;
type Payload = Record<string, PayloadValue>;

function buildFormData(payload: Payload) {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  return formData;
}

export async function submitForm(formType: string, payload: Payload) {
  const hasBinaryValue = Object.values(payload).some(
    (value) => value instanceof File || value instanceof Blob
  );

  const response = await fetch(`${API_BASE_URL}/forms/${formType}`, {
    method: 'POST',
    headers: hasBinaryValue ? undefined : { 'Content-Type': 'application/json' },
    body: hasBinaryValue ? buildFormData(payload) : JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Failed to submit form.');
  }

  return data;
}

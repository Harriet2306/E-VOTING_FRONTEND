// API Configuration
// Use localhost for development
function getBackendBaseUrl(): string {
  // Runtime override
  const storedUrl = typeof localStorage !== 'undefined' ? localStorage.getItem('VITE_API_URL') : null;
  if (storedUrl) {
    return storedUrl.replace('/api', '');
  }

  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace('/api', '');
  }

  // Default to localhost
  return 'http://localhost:5000';
}

export const BACKEND_BASE_URL = getBackendBaseUrl();



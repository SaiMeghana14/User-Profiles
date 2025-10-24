const STORAGE_KEY = "user_profiles";

export function getProfiles() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveProfiles(profiles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

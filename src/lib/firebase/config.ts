import aiStudioConfig from '../../../firebase-applet-config.json';

type AiStudioConfig = typeof aiStudioConfig & {
  firestoreDatabaseId?: string;
};

const config = aiStudioConfig as AiStudioConfig;

// Firebase configuration centralized here.
// To switch to a different project (e.g., Tokyo region production project),
// you can replace this object with your production config, or use environment variables.
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || config.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || config.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || config.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || config.storageBucket || `${config.projectId}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || config.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || config.appId,
  // AI Studio specific (can be undefined in standard Firebase projects)
  firestoreDatabaseId: config.firestoreDatabaseId
};

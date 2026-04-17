import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoG3cCVagED6RcQyy_noijvVibaf1AKwA",
  authDomain: "accountshop-a94e8.firebaseapp.com",
  projectId: "accountshop-a94e8",
  appId: "1:396312062190:web:c4ac936bd7f5bc11f0ebff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
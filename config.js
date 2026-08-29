const firebaseConfig = {
    apiKey: "AIzaSyA7A_WUnqgyJsmG-FH6Oo3a4w2p4rOn__s",
    authDomain: "ai-project-fase1.firebaseapp.com",
    databaseURL: "https://ai-project-fase1-default-rtdb.firebaseio.com",
    projectId: "ai-project-fase1",
    storageBucket: "ai-project-fase1.firebasestorage.app",
    messagingSenderId: "842443540765",
    appId: "1:842443540765:web:3d0c746d99af",
    measurementId: "G-4MEP3EFDXY"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Tempelkan ke window supaya dibaca secara global oleh HTML
window.database = firebase.database();

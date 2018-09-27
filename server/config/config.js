// =================================
// Puerto
//==================================
process.env.PORT = process.env.PORT || 3000;

// =================================
// Entorno
//==================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// =================================
// Base de datos
//==================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:tomy4111@ds115963.mlab.com:15963/cafe';
}

process.env.URLDB = urlDB;
import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div id='container'>
    <div class="content">
        <h2>404</h2>
        <h4>Oops! Page not found</h4>
        <p>Page Yang Anda Masukkan Tidak Ada, Silahkan Menggunakan Alamat URL Yang Tersedia Saja</p>
        <Link to="/">Back To Home</Link>
    </div>
    </div>
  );
}

export default Notfound;
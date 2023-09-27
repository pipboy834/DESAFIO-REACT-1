import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Prueba</h1>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="/">Inicio</a></li>
        <li style={styles.navItem}><a href="/acerca-de">Acerca de</a></li>
        <li style={styles.navItem}><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    width: '100%',
    background: '#333',
    padding: '10px 0',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navItem: {
    marginRight: '20px',
  },
};

export default Navbar;

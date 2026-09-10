import { NavLink } from 'react-router-dom';

export default function Navigation({ user }) {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 700 : 400,
    textDecoration: isActive ? 'underline' : 'none',
    padding: '2px 6px',
    borderRadius: 6,
    backgroundColor: isActive ? '#eee' : 'transparent',
    color: 'black',
  });

  return (
    <nav style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/checkout" style={linkStyle}>
        Checkout
      </NavLink>

      {user.isLoggedIn && (
        <NavLink to="/account" style={linkStyle}>
          Account
        </NavLink>
      )}
    </nav>
  );
}

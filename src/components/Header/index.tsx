import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={logo} className="logo" alt="Logo ANEEL" />
        </Link>
      </nav>
      <h1 id="intro">SicNet Mobile - Download</h1>
    </Container>
  );
}

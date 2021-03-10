import React from 'react';
import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo ANEEL" />
        </Link>
        <Link to="/upload">
          <FiUpload />
        </Link>
      </nav>
      <h1 id="intro">
        SicNet Mobile <span>Download</span>
      </h1>
    </Container>
  );
}

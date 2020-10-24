import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

const Home:React.FC = () => {
  return (
    <>
      <PageHeader />
      <div id="page-home">
        <div id="page-home-content" className="animated fadeIn">
          <h2 className="">Selecione o tipo de sistema do seu smartphone</h2>
          <div className="section-select">
              <div className="section-select-os">
                <Link to='/android'>
                  <FontAwesomeIcon icon={['fab', 'android']} />
                  <p className="android">Android</p>
                </Link>
              </div>
              <hr/>
              <div className="section-select-os">
                <Link to="/ios">
                  <FontAwesomeIcon icon={['fab', 'apple']} />
                  <p className="ios">iOS <i>(iPhone, iPad)</i> </p>
                </Link>
              </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  )
}

export default Home;

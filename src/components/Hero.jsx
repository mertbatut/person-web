import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../style.css';
import '../dark.scss';
import ToggleButton from '../components/ToggleButton';
import githubSvg from '../assets/github.svg';
import linkedinSvg from '../assets/linkedin.svg';

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: this.props.i18n.language
    };
  }

  changeLanguage = (lng) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
    this.setState({ currentLanguage: lng });
  };

  render() {
    const { t } = this.props;
    const { currentLanguage } = this.state;

    return (
      <div className='container-fluid'>
        <div className='row' style={{ height: '671px' }}>
          <div className='Blue col'>
            <div className='col-12 text-end BlueChangeLang'>
              <button
                className='ChangeLang'
                onClick={() => this.changeLanguage(currentLanguage === 'en' ? 'tr' : 'en')}
              >
                {currentLanguage === 'en' ? t('use_turkish') : t('use_english')}
              </button>
            </div>
            <div className='offset-md-3 col-6 justify-content-center BlueContentHeader mb-5'>
              almila
            </div>
            <br />
            <div className='offset-md-3 col-6 BlueContent1 mb-5'>
              {t('i_am_a_frontend_developer')}
            </div>
            <div className='offset-md-3 col-6 BlueContent2 mb-5'>
              {t('frontend_description')}
            </div>
            <div className='offset-md-3 col-6 ButtonRow'>
              <button className='CustomGitBtn'>
                <img src={githubSvg} alt='Github' />
                Github
              </button>
              <button className='CustomLinkBtn'>
                <img src={linkedinSvg} alt='Linkedin' />
                Linkedin
              </button>
            </div>
          </div>
          <div className='Yellow col-4'>
            <ToggleButton />
            <div className='ImageDiv'>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(HeroSection);

import { Component } from 'react';
import { withTranslation } from 'react-i18next'; // Çeviri desteği

import PropTypes from 'prop-types'; // Props doğrulama

class Footer extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <div className='Footer1 flex flex-col items-center py-8 md:py-16 bg-[#F9F9F9] gap-4 md:gap-8'>
          <p id='contact' className='text-2xl md:text-5xl font-bold text-[#4731D3] text-center'>
            {t('footer.title')}
          </p>
          <p className='text-base md:text-2xl font-normal text-[#120B39] text-center'>
            {t('footer.description')}
          </p>
          <a className='no-underline' href='mailto:mertbatut@gmail.com'>
            <p className='text-sm md:text-xl font-medium text-[#4731D3] text-center'>
              {t('footer.email')}
            </p>
          </a>
          <div className='FooterIcon flex gap-2 md:gap-4'>
            <a href="https://www.facebook.com/mert.batut.3/" target='blank'>
              <i className="fa-brands fa-facebook fa-xl md:fa-2xl"></i>
            </a>
            <a href="https://github.com/mertbatut" target='blank'>
              <i className="fa-brands fa-github fa-xl md:fa-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/mert-batut-066b96248/" target='blank'>
              <i className="fa-brands fa-linkedin fa-xl md:fa-2xl"></i>
            </a>
            <a href="https://www.instagram.com/mertbatut/" target='blank'>
              <i className="fa-brands fa-square-instagram fa-xl md:fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

// withTranslation ile sarmalanmış Footer bileşenini export edin
const TranslatedFooter = withTranslation()(Footer);
export default TranslatedFooter;
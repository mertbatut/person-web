import { Component } from 'react';
import { withTranslation } from 'react-i18next'; // Çeviri desteği
import '../style.css';
import PropTypes from 'prop-types'; // Props doğrulama

class Profilecontent extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className='bg-[#160F44] p-4'>
        <span className='text-[36px] md:text-[48px] font-bold text-[#D6E9B3] justify-center flex'>
          {t('profile.header')}
        </span>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 justify-center items-center'>
          <div className='w-full lg:w-auto'></div>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
            <div className='w-full lg:w-[300px] h-auto lg:h-[290px] flex gap-[24px] flex-col'>
              <div className='font-semibold text-[24px] lg:text-[30px] text-[#FFFFFF]'>
                {t('profile.basicInfo')}
              </div>
              <div className='flex flex-col gap-4 lg:gap-8'>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#D6E9B3]'>
                    {t('profile.birthDate')} :
                  </div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                    11.08.1993
                  </div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#D6E9B3]'>
                    {t('profile.residence')} :
                  </div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF] pl-2'>
                    Bursa
                  </div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#D6E9B3]'>
                    {t('profile.education')}
                  </div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                    Beykent Üniversitesi İngilizce İşletme
                  </div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#D6E9B3]'>
                    {t('profile.preferredRole')}
                  </div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                    Frontend Developer
                  </div>
                </div>
              </div>
            </div>
            <div className='ProImage py-12'>
              <img
                className='rounded-xl w-full lg:w-[300px] h-auto lg:h-[290px]'
                src='/images/notification.jpg'
                alt='Profile'
              />
            </div>
            <div className='w-full lg:w-[300px] h-auto lg:h-[290px] flex flex-col gap-4 lg:gap-8'>
              <div className='font-normal text-[24px] lg:text-[30px] text-[#FFFFFF]'>
                {t('profile.aboutMe')}
              </div>
              <div className='max-w-[700px] max-h-[290px] overflow-auto scrollbar-custom'>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  {t('profile.frontend')}
                </p>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  {t('profile.backend')}
                </p>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  {t('profile.spa')}
                </p>
                <ul className='list-disc pl-6 font-normal text-[14px] lg:text-[16px] text-[#FFFFFF] max-w-[700px]'>
                  <li>{t('profile.uiux')}</li>
                  <li>{t('profile.performance')}</li>
                </ul>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>{t('profile.strengths')}</p>
                <ul className='list-disc pl-6 font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  <li>{t('profile.teamwork')}</li>
                  <li>{t('profile.adaptation')}</li>
                  <li>{t('profile.codeQuality')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profilecontent.propTypes = {
  t: PropTypes.func.isRequired,
};

const TranslatedProfilecontent = withTranslation()(Profilecontent);
export default TranslatedProfilecontent;

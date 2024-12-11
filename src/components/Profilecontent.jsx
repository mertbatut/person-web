import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import '../style.css'; // Stil dosyası

const ProfileCardContent = ({ t }) => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col items-center justify-center p-6">
      {/* Profile Header */}
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#160f44]">{t('profile.header')}</h1>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="p-8 bg-[#160f44] text-white rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold border-b-2 border-[#d6e9b3] pb-4 mb-6">
            {t('profile.basicInfo')}
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="font-medium">{t('profile.birthDate')}:</span>
              <span>11.08.1993</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">{t('profile.residence')}:</span>
              <span>Bursa</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">{t('profile.education')}:</span>
              <span>Beykent Üniversitesi İşletme</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">{t('profile.preferredRole')}:</span>
              <span>Frontend Developer</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="p-8 bg-[#160f44] text-white rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold border-b-2 border-[#d6e9b3] pb-4 mb-6">
            {t('profile.aboutMe')}
          </h2>
          <p className="mb-4">{t('profile.frontend')}</p>
          <p className="mb-4">{t('profile.backend')}</p>
          <p className="mb-4">{t('profile.spa')}</p>
          <ul className="list-disc pl-5 mb-4">
            <li>{t('profile.uiux')}</li>
            <li>{t('profile.performance')}</li>
          </ul>
          <p className="mb-4">{t('profile.strengths')}</p>
          <ul className="list-disc pl-5">
            <li>{t('profile.teamwork')}</li>
            <li>{t('profile.adaptation')}</li>
            <li>{t('profile.codeQuality')}</li>
          </ul>
        </div>

     
      </div>
    </div>
  );
};

ProfileCardContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const ProfileCard = withTranslation()(ProfileCardContent);

export default ProfileCard;

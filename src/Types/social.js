import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import github from '../Images/github.png';
import linkedIn from '../Images/linkedin.png';
import mail from '../Images/telegram.png';

export const SOCIAL_NAV = {
  linked_in: 'linked_in',
  github: 'github',
  mail: 'mail',
  facebook: 'facebook',
  instagram: 'instagram',
};

export const SOCIAL_NAV_TYPE = {
  [SOCIAL_NAV.facebook]: {
    type: '01',
    label: 'Facebook',
    url_path: 'https://www.facebook.com/DusanRasic1995',
    icon: facebook,
  },
  [SOCIAL_NAV.instagram]: {
    type: '02',
    label: 'Instagram',
    url_path: 'https://www.instagram.com/_dusan_rasic_/',
    icon: instagram,
  },
  [SOCIAL_NAV.github]: {
    type: '03',
    label: 'Github',
    url_path: 'https://www.gitshowcase.com/dusanrasic',
    icon: github,
  },
  [SOCIAL_NAV.linked_in]: {
    type: '04',
    label: 'LinkedIn',
    url_path:
      'https://www.linkedin.com/in/du%C5%A1an-ra%C5%A1i%C4%87-73183665/',
    icon: linkedIn,
  },
  [SOCIAL_NAV.mail]: {
    type: '05',
    label: 'Mail',
    url_path: 'dusan_rasic@outlook.com',
    icon: mail,
  },
};

import Home from './pages/home';
import Iamcoding from './pages/iamcoding/iamcoding';
import AstroCamp from './pages/astro_camp/astro_camp';
import Shortcourse from './pages/shortcourse/shortcourse';
import ProjectDevelop from './pages/projectdevelop/projectdevelop';
import CompanyTraining from './pages/companytraining/companytraining';
import SpaceLease from './pages/spacelease/spacelease';
import LatestNews from './pages/latestnews/latestnews';
import Contacts from './pages/contacts/contacts';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/iamcoding',
    component: Iamcoding,
  },
  {
    path: '/astro_camp',
    component: AstroCamp,
  },
  {
    path: '/shortcourse',
    component: Shortcourse,
  },
  {
    path: '/projectDevelop',
    component: ProjectDevelop,
  },
  {
    path: '/companytraining',
    component: CompanyTraining,
  },
  {
    path: '/spacelease',
    component: SpaceLease,
  },
  {
    path: '/latestnews',
    component: LatestNews,
  },
  {
    path: '/contacts',
    component: Contacts,
  },
];

import './normalize.css';
import './global.css';
import styles from './index.less';
import logo from './assets/logo.png';

const app = document.getElementById('app');

const indexpage = `
  <div class=${styles.indexpage}>
    <div class=${styles.logo_wrapper}>
      <img src=${logo} alt="logo" />
    </div>
    <h1 class=${styles.title}>Frontend Base Environment</h1>
  </div>
`;

app.innerHTML = indexpage;
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from '../locales/ru';
import en from '../locales/en'

Vuetify.config.silent = true;

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ru, en },
    current: 'en',
  },
  theme: {
    themes: {
      light: {
        background: "#f2f2f2"
      },
      dark: {
        
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  },
});

import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      fetchMeetupById: null,
      meetupTitle: '',
    };
  },

  watch: {
    fetchMeetupById: 
      function(selectedValue) {
        this.fetchMeetupTitle(selectedValue);
    },
  },
  methods: {
    fetchMeetupTitle(meetupId) {
      fetch(`${API_URL}/meetups/${meetupId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then((error) => {
              throw error;
            });
          }
        })
        .then((data) => {
          this.meetupTitle = data.title;
        })
        .catch((error) => {
          console.error('Error while getting meetup data:', error);
        });
    },
  },
});

const app = createApp(App);

app.mount('#app');
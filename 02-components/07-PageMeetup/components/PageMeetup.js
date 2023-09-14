import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  props: {
    meetupId: {
      type: Number,
      required: true,
    }
  },

  data() {
    return {
      meetup: null,
      isLoading: false,
      error: null,
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  watch: {
    meetupId: {
      handler() {
        this.fetchMeetups();
      },
      immediate: true,
    },
  },

  methods: {
    async fetchMeetups() {
      this.isLoading = true;
      this.meetup = null;
      this.error = null;

      await fetchMeetupById(this.meetupId)
        .then((data) => (this.meetup = data))
        .catch((error) => (this.error = error.message)); {
      }

      this.isLoading = false;
    }
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup" :meetup="meetup" />

      <UiContainer v-if="isLoading">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="error">
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
    </div>`,
});

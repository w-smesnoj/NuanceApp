import moment from 'moment';

export default {
  methods: {
    // generate tokens
    formatDate(dateString) {
      return moment(String(dateString)).fromNow();
    },
    formatDateProject(dateString) {
      return moment(String(dateString)).format('MMMM Do YYYY');
    },
    formatK(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num);
    },
  },
};

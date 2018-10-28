Vue.component('achievements-tab', {
  props: {
    view: Object
  },
  data: function() {
    return {
      tabs: [
        {
          name: "Achievements",
          id: "Achievements",
          component: "statistics-stats-tab"
        },
        {
          name: "Secret Achievements",
          id: "Secret Achievements",
          component: "statistics-challenges"
        }
      ]
    };
  },
  template:
    `<tab-container id="achievements">
      <subtabbed-container
        class="tab-content"
        :tabs="tabs"
        v-model="view.tabs.achievements.subtab">
      </subtabbed-container>
    </tab-container>`
});
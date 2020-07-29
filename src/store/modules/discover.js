const state = {
  server_projects: [
    {
      title: 'The Merry Moore - BrandingThe Merry Moore - Branding1',
      likes: 13541,
      views: 3254,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e3baf296037563.Y3JvcCw0MzU0LDM0MDYsMCww.jpg',
      author: 'Alex Valentina',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/4358ea4675269.5d900e7db497e.jpg',
    },
    {
      title: 'The Merry Moore - BrandingThe Merry Moore - Branding2',
      likes: 13542,
      views: 3254,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e3baf296037563.Y3JvcCw0MzU0LDM0MDYsMCww.jpg',
      author: 'Alex Valentina',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/4358ea4675269.5d900e7db497e.jpg',
    },
    {
      title: 'The Merry Moore - BrandingThe Merry Moore - Branding3',
      likes: 13534,
      views: 3254,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e3baf296037563.Y3JvcCw0MzU0LDM0MDYsMCww.jpg',
      author: 'Alex Valentina',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/4358ea4675269.5d900e7db497e.jpg',
    },
    {
      title: 'The Merry Moore - BrandingThe Merry Moore - Branding4',
      likes: 13544,
      views: 3254,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e3baf296037563.Y3JvcCw0MzU0LDM0MDYsMCww.jpg',
      author: 'Alex Valentina',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/4358ea4675269.5d900e7db497e.jpg',
    },
    {
      title: 'The Merry Moore - BrandingThe Merry Moore - Branding5',
      likes: 13545,
      views: 3254,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e3baf296037563.Y3JvcCw0MzU0LDM0MDYsMCww.jpg',
      author: 'Alex Valentina',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/4358ea4675269.5d900e7db497e.jpg',
    },
    {
      title: 'The Merry Moore - BrandingThe Merry Moore - Branding6',
      likes: 13546,
      views: 3254,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e3baf296037563.Y3JvcCw0MzU0LDM0MDYsMCww.jpg',
      author: 'Alex Valentina',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/4358ea4675269.5d900e7db497e.jpg',
    },
    {
      title: 'The Merry Moore - BrandingThe Merry Moore - Branding7',
      likes: 13547,
      views: 3254,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e3baf296037563.Y3JvcCw0MzU0LDM0MDYsMCww.jpg',
      author: 'Alex Valentina',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/4358ea4675269.5d900e7db497e.jpg',
    },
    {
      title: 'The Merry Moore - BrandingThe Merry Moore - Branding8',
      likes: 13548,
      views: 3254,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e3baf296037563.Y3JvcCw0MzU0LDM0MDYsMCww.jpg',
      author: 'Alex Valentina',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/4358ea4675269.5d900e7db497e.jpg',
    },
  ],
  projects: [],
};
const getters = {
  projects: (state) => state.projects,
};
const actions = {
  async getProjects({ commit }) {
    commit('projects_loading');
    await new Promise((r) => setTimeout(r, 1400));
    commit('projects_loaded');
  },
};

const mutations = {
  projects_loading(state) {
    for (let i = 0; i < 8; i++) {
      state.projects.push({
        title: '#',
      });
    }
  },
  projects_loaded(state) {
    state.server_projects.forEach(function(project) {
      var firstEmpty = state.projects.findIndex((i) => i.title === '#');
      state.projects.splice(firstEmpty, 1, project);
    });
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};

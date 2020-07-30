const state = {
  server_projects: [
    {
      title: 'underwater dance',
      likes: 983,
      views: 10479,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/d11b8999382187.Y3JvcCw0NDgwLDM1MDQsMCwxNDg1.jpg',
      author: 'Tavo Montañez',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/2189c8140107.5ef9517b0ebbd.jpg',
      categories: ['comic', 'after-effects', 'industrial-design'],
    },
    {
      title: 'Greta’s — Brand/Corporate Identity',
      likes: 1582,
      views: 10919,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c44ce697693659.Y3JvcCwzMzU0LDI2MjQsMjkwLDA.jpg',
      author: 'Lucas Wakamatsu',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/fe483b7658369.5ed65bf4068cf.png',
      categories: ['poster', 'ipad', 'discover'],
    },
    {
      title: 'Volkswagen campaign',
      likes: 2170,
      views: 16152,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/2b0de999317455.Y3JvcCwxOTkwLDE1NTYsMCwxOQ.jpg',
      author: 'Kim Salt',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/452bf2104836.57fbc44c5a6ed.jpeg',
      categories: ['game-design', 'motion-graphics', 'icon-design'],
    },
    {
      title: "Location d'outils Simplex",
      likes: 1765,
      views: 14904,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/7ba7f499330137.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
      author: 'Macarena Luzi',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/276bca486575867.5f04b13497703.jpg',
      categories: ['ui-ux', 'retouching', 'street-art'],
    },
    {
      title: 'Durable Nature — Acer ConceptD',
      likes: 607,
      views: 7615,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/5e077998007685.Y3JvcCw2NTUsNTEyLDM5MiwxMTA.jpg',
      author: 'Henrique de França',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/1948467.53b6f0f46d597.jpg',
      categories: ['dimension', 'character-design', 'branding'],
    },
    {
      title: 'Zambrano Ortega Contemporary',
      likes: 685,
      views: 7161,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/fbf0ba99069803.Y3JvcCwxMTMxLDg4NSwxNDAsNzA.jpg',
      author: 'Guud Studio',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/1a308f5791029.5d248514f2c8e.png',
      categories: ['photography', 'desktop', 'typography'],
    },
    {
      title: 'STUFF x bloom bloom FLEUR | Flower Got Rhythm Part 1',
      likes: 787,
      views: 7131,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/bf56bf99152035.Y3JvcCwxMzQyLDEwNTAsMjksMA.jpg',
      author: 'Bernardo Henning',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/ffbaa957543.5cc2f8f1dccf8.jpg',
      categories: ['photojournalism', 'automotive-photography', 'capture'],
    },
    {
      title: 'Jager Typeface',
      likes: 3413,
      views: 21005,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/db529d98941431.Y3JvcCwyMzc2LDE4NTgsMCww.png',
      author: 'Xingye Jin',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/89fca37410435.58f0b01f71d5c.jpg',
      categories: ['fashion', 'illustrator', 'sketching'],
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

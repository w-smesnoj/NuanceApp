<template>
  <div id="project">
    <div id="header">
      <img :src="profile_image" alt="" />
      <div>
        <span class="title">{{ title }}</span>
        <br />
        <span>{{ author }}</span>
      </div>
      <CButton round white class="btn"><fa fas="folder-open"/></CButton>
      <CButton round white><fa fas="plus"/></CButton>
    </div>
    <div id="content">
      Content
    </div>
    <div id="voucher">
      <div class="head">
        <img :src="profile_image" alt="" />
        <div>
          <span>{{ author }}</span>
          <CButton rounded> Follow</CButton>
        </div>
      </div>
      <br />
      <CardA :project="preview_project" simple></CardA>
    </div>
  </div>
</template>

<script>
import CardA from '@/components/base/CardA.vue';

export default {
  data: () => ({
    author: 'Tavo Montañez',
    title: 'underwater dance',
    profile_image:
      'https://mir-s3-cdn-cf.behance.net/user/50/2189c8140107.5ef9517b0ebbd.jpg',
    likes: 983,
    views: 10479,
    preview_project: {
      title:
        'Totam et qui modi nostrum corrupti perferendis corrupti perferendis.',
      likes: 983,
      views: 10479,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/d11b8999382187.Y3JvcCw0NDgwLDM1MDQsMCwxNDg1.jpg',
      author: 'Tavo Montañez',
      profile_image:
        'https://mir-s3-cdn-cf.behance.net/user/50/2189c8140107.5ef9517b0ebbd.jpg',
      categories: ['comic', 'after-effects', 'industrial-design'],
    },
  }),
  components: { CardA },
};
</script>

<style scoped>
/* VOUCHER */
#voucher {
  padding: 20px;
  background: #191919;
}
.head {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
  color: var(--txt-main-od);
  align-items: center;
}
.head img {
  width: 70px;
  border-radius: 100px;
}
.head div span {
  padding-bottom: 10px;
  font-weight: bold;
  display: block;
}
</style>

<style scoped>
/* CONTENT */
#content {
  padding: 20px;
}
</style>

<style scoped>
/* HEADER */
#header button {
  font-size: 0.7em;
  color: inherit;
}
#header {
  padding: 20px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto 1fr auto auto;
  gap: 1em;
  color: var(--txt-main);
}
#header div {
  justify-self: start;
  max-width: -webkit-fill-available;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title {
  font-weight: bold;
}
#header img {
  border-radius: 100px;
  width: 45px;
}
</style>

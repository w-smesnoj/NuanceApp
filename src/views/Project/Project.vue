<template>
  <div id="project">
    <div id="header">
      <img :src="profile_image" alt="" />
      <div>
        <span class="title">{{ title }}</span>
        <span>{{ author }}</span>
      </div>
      <CButton round white><fa fas="folder-open"/></CButton>
      <CButton round white><fa fas="plus"/></CButton>
    </div>
    <div id="content">
      Content
    </div>
    <div id="final">
      <CButton round><fa fas="thumbs-up"/></CButton>
      <h2>{{ title }}</h2>
      <div>
        <span><fa fas="thumbs-up" /> {{ formatK(likes) }}</span>
        <span><fa fas="eye" /> {{ formatK(views) }}</span>
        <span><fa fas="comment-alt" /> {{ formatK(comments) }}</span>
      </div>
      <span> Published: {{ formatDateProject(published) }} </span>
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
      <br />
    </div>
    <div id="details">
      <div class="comments">
        <CButton rounded link>
          Signin to comment <fa fas="sign-in-alt" />
        </CButton>
        <div class="seperator"></div>
      </div>
      <div class="owners">
        <span class="minortitle">Owners</span>
        <div>
          <img :src="profile_image" alt="" />
          <div>
            <span class="title">{{ author }}</span>
            <span class="loc"><fa fas="map-marker-alt" /> {{ location }}</span>
          </div>
          <CButton rounded class="btn">Follow</CButton>
        </div>
      </div>
      <div class="categories">
        <span class="minortitle">Tools</span>
        <div>
          <span v-for="tool in tools" :key="tool">
            {{ tool }}
          </span>
        </div>
        <br />
        <span class="minortitle">Creative Fields</span>
        <div>
          <span v-for="category in categories" :key="category">
            {{ category }}
          </span>
        </div>
      </div>
      <div class="tags">
        <span v-for="tag in tags" :key="tag">
          {{ tag }}
        </span>
      </div>
      <span class="legals">
        <a>© All Rights Reserved</a>
        <a><fa fas="flag" /> Mark as spam</a>
        <a><fa fas="exclamation-triangle" /> Report</a>
      </span>
    </div>
  </div>
</template>

<script>
import CardA from '@/components/base/CardA.vue';
import mixinFunctions from '@/store/modules/misc.js';

export default {
  mixins: [mixinFunctions],
  data: () => ({
    author: 'Tavo Montañez',
    title: 'Durable Nature — Acer ConceptD',
    profile_image:
      'https://mir-s3-cdn-cf.behance.net/user/50/2189c8140107.5ef9517b0ebbd.jpg',
    location: 'Vancouver, British Columbia, Canada',
    likes: 983,
    views: 10479,
    comments: 261,
    published: '2020-07-30T20:32:01.921Z',
    tools: ['Adobe Photoshop', 'Autodesk 3dx Max', 'Nikon D3100'],
    categories: [
      'cartooning',
      'digital-art',
      'novel',
      'illustration',
      'photoshop',
    ],
    tags: [
      'abstract',
      'surreal',
      'color',
      'gradients',
      'clouds',
      'water',
      'liquid',
      'characters',
      'space',
      'fantasy',
    ],
    preview_project: {
      title: 'Audi Photography',
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
// DETAILS
<style scoped>
i {
  font-size: 0.75em;
}
#details {
  background: var(--bg-third);
  padding: 1.3em 1.5em;
}
#details > div {
  background: var(--bg-main);
  border: 1px solid #0000001c;
  padding: 1.3em 1.5em;
  border-radius: 4px;
  margin-bottom: 1em;
}
.minortitle {
  text-transform: uppercase;
  font-weight: 600;
  font-size: x-small;
  color: var(--txt-accent);
  margin-bottom: 1.5em;
  display: block;
}
.owners > div {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto 1fr auto;
  gap: 1em;
  margin-bottom: 1em;
}
.owners button {
  padding: 0.5em 1.5em;
  font-weight: 600;
  margin-left: 1em;
}
.owners > div > img {
  border-radius: 100px;
}
.owners > div > div {
  justify-self: start;
  max-width: -webkit-fill-available;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.loc {
  color: var(--txt-accent);
}
.categories > div {
  line-break: anywhere;
  line-height: 1.7em;
}
.categories > div > span {
  font-weight: 600;
  display: block;
  text-transform: capitalize;
}
.tags > span {
  text-transform: uppercase;
  font-size: x-small;
  font-weight: 600;
  border: 1px solid #c5c5c5;
  padding: 7px 14px;
  background-color: white;
  display: inline-grid;
  margin: 4px 8px 4px 0px;
  border-radius: 3px;
  cursor: pointer;
  color: #404040;
  letter-spacing: normal;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}
.tags > span:hover {
  background-color: #f3f3f3;
}
.legals > a {
  padding: 1em 1em;
  display: inline-table;
  cursor: pointer;
  color: gray;
  font-size: 0.75em;
}
.seperator {
  width: 100%;
  height: 1px;
  background-color: hsla(0, 0%, 93%, 1);
  margin: 1em 0em 2em 0em;
}
</style>
// VOUCHER
<style scoped>
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
// FINAL
<style scoped>
#final {
  background: black;
  color: white;
  padding: 3.5em 1em;
  display: grid;
  justify-items: center;
  gap: 1.2em;
}
#final > button {
  font-size: 1.7em;
}
#final > button > i {
  font-size: 0.9em;
}
#final > div,
#final > span {
  color: gray;
  gap: 1em;
  display: grid;
  grid-auto-flow: column;
}
#final > span {
  margin-top: 1.5em;
  font-size: 0.8em;
}
#final > h2 {
  margin: 0px;
  text-align: center;
}
</style>
// CONTENT
<style scoped>
#content {
  padding: 20px;
}
</style>
// HEADER
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
  display: block;
  margin-bottom: 0.1em;
  overflow: hidden;
  text-overflow: ellipsis;
}
#header img {
  border-radius: 100px;
  width: 45px;
}
</style>

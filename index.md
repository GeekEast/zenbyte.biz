---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ZenByte"
  text: "Technical Knowledge Base"
  logo:
  image:
    src: /img/logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: Start Reading
      link: /notes/

features:
  - icon:
      src: /img/essence.svg
    title: Essence
    details: Learning is not just about memorizing facts, but rather delving into the essence of things. 
  - icon:
      src: /img/search.svg
    title: Searchable
    details: Taking notes is crucial, but it's best if the notes are searchable, allowing for future refinement. 
  - icon:
      src: /img/sharing.svg
    title: Share
    details: Sharing knowledge enables the continuous improvement of the knowledge itself.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
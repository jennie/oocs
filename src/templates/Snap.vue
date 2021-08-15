<template>
  <Layout>
    <div class="pt-20 mx-auto max-w-prose">
      <h1 class="text-3xl mb-2">{{ $page.snap.title }}</h1>
      <img :src="$page.snap.imagePath" :alt="$page.snap.title" />
      <article class="prose" v-html="$page.snap.content" />
      <p class="article-date">
        {{ $page.snap.date }}
      </p>
    </div>
  </Layout>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<page-query>
query Post ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
   snap: snap (path: $path) {
    id
    title
    content
    imagePath
    date (format: "D MMMM YYYY")
  }
}
</page-query>

<style></style>

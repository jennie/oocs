<template>
  <Layout>
    <div class="pt-20 mx-auto max-w-prose">
      <h1 class="text-3xl mb-2">{{ $page.post.title }}</h1>
      <article class="prose" v-html="$page.post.content" />
      <p class="article-date">
        {{ $page.post.date }}
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
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style></style>

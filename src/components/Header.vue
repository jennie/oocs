<template>
  <header class="header">
    <g-link to="/"
      ><h1>👨‍💻 {{ siteName }}</h1></g-link
    >
    <ClientOnly>
      <ThemeToggle />
    </ClientOnly>
  </header>
</template>

<script>
export default {
  props: ["siteName"],
};
</script>

<style lang="postcss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: inherit;
    border-bottom: none;
  }
}
</style>

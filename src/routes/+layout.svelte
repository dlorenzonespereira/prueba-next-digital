<script lang="ts">
  import '../global.css';
</script>

<header>
  <a href="/">Prueba técnica Next Digital</a>
</header>

<main>
  <slot></slot>
</main>

<footer>Copyright Diego Lorenzo Nespereira © 2025</footer>

<style lang="postcss">
  header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: var(--header-height);
    box-shadow: var(--shadow);

    & a {
      color: var(--color-main);
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  main {
    display: flow-root;
    min-height: calc(
      100vh - 10px - var(--header-height) - var(--footer-height)
    );
  }

  footer {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: var(--footer-height);
    border-top: 1px solid var(--color-border);
  }
</style>

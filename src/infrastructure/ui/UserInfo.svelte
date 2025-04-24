<script lang="ts">
  import { type User } from '$domain/models/User';

  export let user: User;
</script>

<section class="user">
  {#if user}
    <h1 class="name">{user?.name}</h1>
    <p class="username">@{user?.username}</p>
    <a href="mailto:{user?.email}" class="email">{user?.email}</a>
    <section class="section">
      <h3 class="title">Dirección:</h3>
      <p class="address-street">{user?.address?.street}</p>
      <p class="address-text">{user?.address?.suite}</p>
      <p class="address-text">{user?.address?.city}</p>
      <p class="address-text">{user?.address?.zipcode}</p>
      <p class="address-text">
        Lat: {user?.address?.geo?.lat}, Long: {user?.address?.geo?.lat}
      </p>
    </section>
    <section class="section">
      <h3 class="title">Empresa:</h3>
      <p class="company-name">{user?.company?.name}</p>
      <p class="company-phrase">{user?.company?.catchPhrase}</p>
      <p class="company-bs">{user?.company?.bs}</p>
    </section>
  {:else}
    <p class="error">No se ha encontrado el usuario</p>
  {/if}
  <a class="button" href="/">Volver al listado</a>
</section>

<style lang="postcss">
  .user {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    height: 100%;
    width: auto;

    & .name {
      font-size: 1.5rem;
      font-weight: bold;
    }

    & .username {
      font-size: 1.2rem;
      color: var(--color-secondary);
      margin-bottom: 4px;
    }

    & .email {
      display: inline-block;
      font-size: 0.75rem;
      color: var(--color-primary);
      margin-bottom: 12px;
    }

    & .section {
      margin-bottom: 20px;
    }

    & .title {
      font-size: 1rem;
      font-weight: bold;
    }

    & .address-street {
      font-size: 0.9rem;
      font-weight: bold;
      font-style: italic;
    }

    & .address-text {
      font-size: 0.8rem;
    }

    & .company-name {
      font-size: 0.9rem;
    }

    & .company-phrase {
      font-size: 0.8rem;
      font-style: italic;
    }

    & .button {
      width: auto;
      margin: 40px auto;
    }

    & .error {
      color: var(--color-error);
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
    }
  }
</style>

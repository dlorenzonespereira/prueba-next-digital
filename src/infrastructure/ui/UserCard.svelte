<script lang="ts">
  import { type User } from '$domain/models/User';

  export let user: User;
</script>

<article class="user-card">
  <div>
    <h2 class="name">{user.name}</h2>
    <p class="username">@{user.username}</p>
    <a href="mailto:{user.email}" class="email">{user.email}</a>
    <section class="company">
      <h3 class="company">Empresa</h3>
      <p class="company-name">{user.company.name}</p>
      <p class="company-phrase">{user.company.catchPhrase}</p>
    </section>
  </div>
  <a class="details" href="/user/{user.id}">Ver detalles</a>
</article>

<style lang="postcss">
  .user-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--border-color);
    padding: 16px;
    border-radius: 8px;
    box-shadow: var(--shadow);
    height: 100%;

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

    & .company {
      font-size: 1rem;
      font-weight: bold;
    }

    & .company-name {
      font-size: 0.9rem;
    }

    & .company-phrase {
      font-size: 0.8rem;
      font-style: italic;
    }

    & .details {
      display: inline-block;
      margin-top: 12px;
      padding: 8px 16px;
      background-color: var(--color-primary);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      width: 100%;
      text-align: center;

      &:hover {
        background-color: var(--color-primary-dark);
      }
    }
  }
</style>

<script lang="ts">
  import { type User } from '$domain/models/User';
  import UserCard from '$components/UserCard.svelte';

  export let users: User[];
</script>

{#if users.length === 0}
  <li>Sin resultados</li>
{:else}
  <ul class="user-list">
    {#each users as user}
      <li>
        <UserCard {user} />
      </li>
    {/each}
  </ul>
{/if}

<style lang="postcss">
  .user-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .user-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .user-list {
      grid-template-columns: 1fr;
    }
  }
</style>

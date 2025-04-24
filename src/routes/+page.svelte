<script lang="ts">
  import UsersList from '$components/UsersList.svelte';
  import { type User } from '$domain/models/User';

  export let data: { users: User[] };
</script>

<svelte:head>
  <title>Listado de usuarios</title>
</svelte:head>

<UsersList users={data.users} />

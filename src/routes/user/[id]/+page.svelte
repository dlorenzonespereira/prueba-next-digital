<script lang="ts">
  import UserInfo from '$components/UserInfo.svelte';
  import { type User } from '$domain/models/User';

  export let data: { user: User };
</script>

<svelte:head>
  <title>Detalles del usuario {data?.user?.name}</title>
</svelte:head>

<UserInfo user={data?.user} />

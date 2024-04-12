<script>
	import { db } from '$lib';

	async function wipeData() {
		const confirmed = confirm('Are you sure you want to delete all data?');

		if (confirmed) {
			await db.transaction('rw', db.quotes, db.authors, async () => {
				await db.quotes.clear();
				await db.authors.clear();
			});
		}
	}
</script>

<button on:click={wipeData}>Wipe Data</button>

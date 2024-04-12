<script>
	import { db } from '$lib';

	async function exportData() {
		const quotes = await db.quotes.toArray();
		const authors = await db.authors.toArray();

		const data = {
			quotes,
			authors
		};

		const jsonData = JSON.stringify(data);
		const timestamp = new Date().toISOString();
		const filename = `common_book_export-${timestamp}.json`;

		const blob = new Blob([jsonData], { type: 'application/json' });
		const url = URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.href = url;
		link.download = filename;
		link.click();
	}
</script>

<button on:click={exportData}>Export Data</button>

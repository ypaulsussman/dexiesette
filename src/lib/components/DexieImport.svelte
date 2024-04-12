<script>
	import { db } from '$lib';

	let status = '';

	/**
	 * @param {Event} event
	 */
	async function handleFileUpload(event) {
		// @ts-ignore
		const file = event.target?.files[0];
		const reader = new FileReader();

		reader.onload = async (e) => {
			// @ts-ignore
			const data = JSON.parse(e.target.result);

			try {
				await db.transaction('rw', db.quotes, db.authors, async () => {
					await db.quotes.bulkAdd(data.quotes);
					await db.authors.bulkAdd(data.authors);
				});

				status = 'Data successfully imported';
			} catch (error) {
				status = `Failed to import data: ${error}`;
			}
		};

		reader.readAsText(file);
	}
</script>

<div>
	<p>{status}</p>
	<input type="file" accept=".json" on:change={handleFileUpload} />
</div>

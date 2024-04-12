import Dexie, { type Table } from 'dexie';

export interface Quote {
	passage: string;
	slug: string;
	author_id: number;
	id: number;
}

export interface Author {
	name: string;
	slug: string;
	id: number;
	total_quotes: number;
	extract: string;
	thumbnail: string;
	content_urls: string;
}

export class CommonBookDexie extends Dexie {
	// 'quotes'/'authors' is added by dexie when declaring the `stores()` below;
	// these lines just tell TS that this is the case
	quotes!: Table<Quote>;
	authors!: Table<Author>;

	constructor() {
		super('commonBookDatabase');
		this.version(1).stores({
			// Primary key and indexed props
			quotes: '++id, slug, author_id',
			authors: '++id, slug, total_quotes'
		});
	}
}

const db = new CommonBookDexie();
export default db;

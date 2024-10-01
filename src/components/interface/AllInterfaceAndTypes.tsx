export interface MarkdownParserProps {
    content: string; // Markdown content as a string
}

// Cards
export interface BaseCardProps {
    size: string;
    src?: string;
    alt?: string;
    onClick?: () => void;
    singkatan?: string;
    kepanjangan?: string;
    penjelasan?: string;
    customEl?: any;
}

export type BaseCardVariable = "penjelasan" | "singkatan" | "kepanjangan"

export interface BaseCardMainProps {
    singkatan: string;
    kepanjangan: string;
    penjelasan: string;
}

export interface BSO extends BaseCardMainProps { }

export interface BSOCardProps extends Omit<BaseCardProps, BaseCardVariable> {
    bso?: BSO;
    initialContent?: { [key: string]: string };
}

export interface HMJCardProps extends Omit<BaseCardProps, BaseCardVariable> {
    hmj?: HMJ
}

export interface LinkCardProps {
    href: string;
    image_url: string;
    text: string;
    image_alt?: string;
    className?: string;
}

export interface UKM extends BaseCardMainProps { }

export interface UKMCardProps extends Omit<BaseCardProps, BaseCardVariable> {
    ukm?: UKM;
    initialContent?: { [key: string]: string };
}

export type Markdown = string;

export interface CardState {
    opened: boolean;
    content: {[key:string]: Markdown}
}

export type CardAction =
    | { type: 'OPEN' }
    | { type: 'CLOSE' }
    | {type: 'TOGGLE'}
    | { type: 'SET_CONTENT'; payload: { [key: string]: Markdown} };

// Slider item
export interface SliderItem {
	title: string;
	image_url: string;
	redirect_url: string;
	image_alt?: string;
  }

export type PageLink = { name: string, url: string }

export interface LinkListProps {
	links: PageLink[];
}

export enum TipeLembaga {
    // Placeholder
    Himpunan,
  }

export interface Lembaga {
    nama: string;
    namaPanjangLembaga: string;
    tipe: TipeLembaga;
  }
  
export enum Fakultas {
	// Placeholder
	DummyFakultas,
}

export interface Himpunan extends Lembaga {
	namaHimpunan: string;
	asasHimpunan: string;
	logoHimpunan: string;
	deskripsi: string;
	video: string;
	fakultas: Fakultas;
	sejarah: string;
	budaya: string;
	hariJadi: Date;
	visi: string;
	misi: string;
	alamatSekre: string;
	aboutUs: string;
	wajahHimpunan: Person[];
	socialMedia: Socmed;
}

export interface Person {
	nama: string;
	jabatan: string;
	programStudi: string;
	nim: string;
	foto: string;
}

export interface Socmed {
	instagram: string;
	twitter: string;
	website: string;
	oaLine: string;
	tiktok: string;
	youtube: string;
}

export interface LayananInterface {
	nama: string,
	deskripsi: string,
}

export interface MagangInterface {
	nama: string,
	deskripsi: string,
}

export interface KementrianInterface {
	nama: string,
	logo: string,
	layanan?: LayananInterface[],
	magang?: MagangInterface[],
}

export interface HMJ {
    singkatan: string;
    kepanjangan: string;
    penjelasan: string;
}
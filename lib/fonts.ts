import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import {
	Architects_Daughter,
	DM_Sans,
	Fira_Code,
	Geist,
	IBM_Plex_Sans,
	Inter,
	Lato,
	Libre_Baskerville,
	Manrope,
	Montserrat,
	Nunito_Sans,
	Open_Sans,
	Outfit,
	Poppins,
	Roboto,
	Source_Sans_3,
	Space_Grotesk,
	Work_Sans,
} from "next/font/google";

// Font configurations
const firaCode = Fira_Code({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-fira-code",
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	display: "swap",
	variable: "--font-roboto",
});

const openSans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-open-sans",
});

const sourceSans = Source_Sans_3({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-source-sans",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	variable: "--font-poppins",
});

const workSans = Work_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-work-sans",
});

const dmSans = DM_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-dm-sans",
});

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-manrope",
});

const ibmPlexSans = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	variable: "--font-ibm-plex-sans",
});

const geist = Geist({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-geist",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nunito-sans",
});

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
	display: "swap",
	variable: "--font-lato",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});
const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
	variable: "--font-architects-daughter",
});

const libreBaskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
	variable: "--font-libre-baskerville",
});

export const fontMap: Record<string, NextFontWithVariable> = {
	"Fira Code": firaCode,
	Inter: inter,
	Roboto: roboto,
	"Open Sans": openSans,
	"Source Sans": sourceSans,
	Poppins: poppins,
	"Work Sans": workSans,
	"DM Sans": dmSans,
	Manrope: manrope,
	"IBM Plex Sans": ibmPlexSans,
	Geist: geist,
	"Space Grotesk": spaceGrotesk,
	"Nunito Sans": nunitoSans,
	Lato: lato,
	Montserrat: montserrat,
	"Architects Daughter": architectsDaughter,
	"Libre Baskerville": libreBaskerville,
	Outfit: outfit,
};

export const fontOptions = Object.keys(fontMap) as Array<keyof typeof fontMap>;

export const fontConfig: Record<
	string,
	{
		description: string;
		fontClass: string;
		category: string;
	}
> = {
	"Fira Code": {
		description: "Monospace font with programming ligatures",
		fontClass: firaCode.className,
		category: "Monospace",
	},
	Inter: {
		description: "Modern sans-serif designed for UI",
		fontClass: inter.className,
		category: "Sans-serif",
	},
	Roboto: {
		description: "Google's signature family of fonts",
		fontClass: roboto.className,
		category: "Sans-serif",
	},
	"Open Sans": {
		description: "Humanist sans-serif typeface",
		fontClass: openSans.className,
		category: "Sans-serif",
	},
	"Source Sans": {
		description: "Clean and readable sans-serif",
		fontClass: sourceSans.className,
		category: "Sans-serif",
	},
	Poppins: {
		description: "Geometric sans-serif with rounded edges",
		fontClass: poppins.className,
		category: "Sans-serif",
	},
	"Work Sans": {
		description: "Optimized for on-screen text",
		fontClass: workSans.className,
		category: "Sans-serif",
	},
	"DM Sans": {
		description: "Low-contrast geometric sans-serif",
		fontClass: dmSans.className,
		category: "Sans-serif",
	},
	Manrope: {
		description: "Modern geometric sans-serif",
		fontClass: manrope.className,
		category: "Sans-serif",
	},
	"IBM Plex Sans": {
		description: "Corporate typeface by IBM",
		fontClass: ibmPlexSans.className,
		category: "Sans-serif",
	},
	Geist: {
		description: "Vercel's design system font",
		fontClass: geist.className,
		category: "Sans-serif",
	},
	"Space Grotesk": {
		description: "Proportional variant of Space Mono",
		fontClass: spaceGrotesk.className,
		category: "Sans-serif",
	},
	"Nunito Sans": {
		description: "Rounded sans-serif for screens",
		fontClass: nunitoSans.className,
		category: "Sans-serif",
	},
	Lato: {
		description: "Humanist sans-serif family",
		fontClass: lato.className,
		category: "Sans-serif",
	},
	Montserrat: {
		description: "Geometric sans inspired by urban typography",
		fontClass: montserrat.className,
		category: "Sans-serif",
	},
	"Architects Daughter": {
		description: "Handwritten-style font for casual designs",
		fontClass: architectsDaughter.className,
		category: "Handwriting",
	},
	"Libre Baskerville": {
		description: "Classic serif font for elegant reading",
		fontClass: libreBaskerville.className,
		category: "Serif",
	},
	Outfit: {
		description: "Modern geometric sans-serif by Google",
		fontClass: outfit.className,
		category: "Sans-serif",
	},
};

// Helper to get all font variables as a string
export const getAllFontVariables = () =>
	Object.values(fontMap)
		.map((font) => font.variable)
		.join(" ");

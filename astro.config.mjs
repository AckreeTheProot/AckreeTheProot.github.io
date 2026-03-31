// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ackreetheproot.github.io',
	integrations: [
		starlight({
			title: "Ackree / Mithun's Portfolio",
			
			customCss: [
       		// Relative path to your custom CSS file
        	'./src/test.css',
     		],


			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AckreeTheProot' },
			{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mr.mitroy/' }],
			
			sidebar: [
				{
					label: 'About Me - Mithun Roy',
					autogenerate: { directory: 'Mithun Roy' },
					
				},
				{
					label: 'About Me - Ackree',
					autogenerate: { directory: 'Ackree' },
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'Projects' },
				},
				{
					label: 'Protogens',
					autogenerate: { directory: 'Protogen' },
				},
				{
					label: 'Resume',
					autogenerate: { directory: 'Resume' },
				},
				{
					label: 'Thanks',
					autogenerate: { directory: 'Thanks' },
				},
				{
					label: 'Changelogs',
					autogenerate: { directory: 'Changelogs' },
				},


			],
		}),
	],
});

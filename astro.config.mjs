// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ackree.dev',
	integrations: [
		starlight({
			title: "Ackree / Mithun's Portfolio",
			logo: {
        	src: './src/assets/thinemblem.png',
      		},
			favicon: './src/assets/emblem.png', 
			customCss: [
       		// Relative path to your custom CSS file
        	'./src/test.css',
     		],


			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AckreeTheProot' },
			{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mr.mitroy/' }],
			
			sidebar: [
				{
					label: 'Professional - Mithun Roy',
					autogenerate: { directory: 'Mithun' },
				},
				{
					label: 'About Me - Ackree',
					autogenerate: { directory: 'Ackree' },
				},
				{
					label: 'Credits',
					autogenerate: { directory: 'Credits' },
				},
			],
		}),
	],
});

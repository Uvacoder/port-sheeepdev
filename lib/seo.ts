import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'sheep ─ a software developer from zagreb, croatia';
	const description = "a software developer from zagreb, croatia";

	return {
		title,
		description,
		canonical: `https://sheepdev.xyz/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nuro',
			url: `https://sheepdev.xyz/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://sheepdev.xyz/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}

import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { formatDate, getPosts } from '@/app/utils'
import { AvatarGroup, Button, Flex, Heading, SmartImage, Text } from '@/once-ui/components'
import { baseURL, renderContent } from '@/app/resources';
import { routing } from '@/i18n/routing';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

interface WorkParams {
	params: {
		slug: string;
		locale: string;
	};
}

export async function generateStaticParams() {
	const locales = routing.locales;

	// Create an array to store all posts from all locales
	const allPosts = [];

	// Fetch posts for each locale
	for (const locale of locales) {
		const posts = getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]);
		allPosts.push(...posts.map(post => ({
			slug: post.slug,
			locale: locale,
		})));
	}

	return allPosts;
}

export function generateMetadata({ params: { slug, locale } }: WorkParams) {
	let post = getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]).find((post) => post.slug === slug)

	if (!post) {
		return
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		images,
		image,
		team,
	} = post.metadata
	let ogImage = image
		? `https://${baseURL}${image}`
		: `https://${baseURL}/og?title=${title}`;

	return {
		title,
		description,
		images,
		team,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://${baseURL}/${locale}/work/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default function Project({ params }: WorkParams) {
	unstable_setRequestLocale(params.locale);
	let post = getPosts(['src', 'app', '[locale]', 'work', 'projects', params.locale]).find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	const t = useTranslations();
	const { person } = renderContent(t);

	const avatars = post.metadata.team?.map((person) => ({
		src: person.avatar,
	})) || [];

	return (
		<Flex as="section"
			fillWidth maxWidth="m"
			direction="column" alignItems="center"
			gap="l">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `https://${baseURL}${post.metadata.image}`
							: `https://${baseURL}/og?title=${post.metadata.title}`,
						url: `https://${baseURL}/${params.locale}/work/${post.slug}`,
						author: {
							'@type': 'Person',
							name: person.name,
						},
					}),
				}}
			/>
			<Flex
				fillWidth maxWidth="xs" gap="16"
				direction="column">				<Button
					href={`/${params.locale}/work`}
					variant="tertiary"
					size="s"
					prefixIcon="chevronLeft">
					Projects
				</Button>
				<Flex direction="column" gap="8">
					<Heading
						variant="display-strong-s">
						{post.metadata.title}
					</Heading>					<Flex gap="12" alignItems="center">
						<Button
							href="https://wakatime.com/projects/ai-saas"
							target="_blank"
							rel="noopener noreferrer"
							variant="secondary"
							size="s"
							prefixIcon="clock">
							<Flex alignItems="center" gap="8">
								<Text variant="body-strong-s">Time spent:</Text>
								<img
									src="https://wakatime.com/badge/user/2fd52bd6-cfc8-47c2-8b52-89b7ff01ba29/project/bad71e8f-5a5a-4321-be3c-11798300b21b.svg"
									alt="Time spent coding"
									height="20"
								/>
							</Flex>
						</Button>
					</Flex>
				</Flex>
			</Flex>


			{post.metadata.images.length > 0 && (
				<SmartImage
					aspectRatio="16 / 9"
					radius="m"
					alt="image"
					src={post.metadata.images[0]} />
			)}
			<Flex style={{ margin: 'auto' }}
				as="article"
				maxWidth="xs" fillWidth
				direction="column">
				<Flex
					gap="12" marginBottom="24"
					alignItems="center">
					{post.metadata.team && (
						<AvatarGroup
							reverseOrder
							avatars={avatars}
							size="m" />
					)}
					<Text
						variant="body-default-s"
						onBackground="neutral-weak">
						{formatDate(post.metadata.publishedAt)}
					</Text>
				</Flex>
				<CustomMDX source={post.content} />
			</Flex>
		</Flex>
	)
}
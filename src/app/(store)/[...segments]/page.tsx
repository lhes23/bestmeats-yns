import { MDXRemote } from "next-mdx-remote/rsc";
import Link, { type LinkProps } from "next/link";
import { notFound } from "next/navigation";

const pages: Record<string, { content: string }> = {
	"/about-me": {
		content: ``,
	},
};

export default async function Page(props: {
	params: Promise<{ segments?: string[] }>;
}) {
	const params = await props.params;
	if (!params.segments) {
		return notFound();
	}

	const path = `/${params.segments.join("/")}`;
	const page = pages[path];

	if (!page) {
		return notFound();
	}

	return (
		<div className="prose pb-8 pt-4 lg:prose-lg xl:prose-xl">
			<MDXRemote
				source={page.content}
				components={{
					a: (props) => <Link {...(props as LinkProps)} />,
				}}
			/>
		</div>
	);
}

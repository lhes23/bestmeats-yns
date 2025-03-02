import { MDXRemote } from "next-mdx-remote/rsc";
import Link, { type LinkProps } from "next/link";
import { notFound } from "next/navigation";

const pages: Record<string, { content: string }> = {
	"/about": {
		content: `
# About Me


## Passion for Wagyu, Delivered to Your Doorstep


Hello! I am a simple meat enthusiast dedicated to bringing the highest-quality Wagyu beef to the people of San Diego, California. My journey started with a love for exceptional cuts of meat and the desire to make premium Wagyu accessible to everyone, from home cooks to grill masters.


## Fresh, Premium, and Hand-Selected


I personally source only the finest Wagyu beef, ensuring that every cut meets the highest standards of marbling, tenderness, and flavor. Whether you're looking for rich ribeye, melt-in-your-mouth filet, or premium ground Wagyu, I provide the best selections at competitive prices.


## Convenient Delivery in San Diego


Enjoy restaurant-quality Wagyu without leaving your home. I offer reliable delivery services throughout San Diego, making it easy to savor top-tier beef at your convenience. Just place an order, and I’ll make sure it reaches you fresh and ready to cook.


## Let's Connect


If you have any questions about cuts, cooking tips, or special requests, feel free to reach out. I believe that great food brings people together, and I’m here to help you enjoy the best Wagyu experience possible.


Thank you for supporting a local business and sharing in my passion for premium beef!


**Contact:**
📧 [Your Email]  
📞 [Your Phone]  
📍 Serving all of San Diego, CA

`,
	},
	"/contact": {
		content: `
	# Contact Us
	
	Contact us
	`,
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

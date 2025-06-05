import { styles } from "@/app/(store)/layout";
import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
import StoreConfig from "@/store.config";
import { CategoryBox } from "@/ui/category-box";
import { ProductList } from "@/ui/products/product-list";
import { YnsLink } from "@/ui/yns-link";
import * as Commerce from "commerce-kit";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });
	const t = await getTranslations("/");

	return (
		<main>
			<section className="relative rounded bg-neutral-100 py-8 sm:py-12 overflow-hidden md:h-130">
				<video
					className="absolute inset-0 w-full h-full object-cover"
					src="/videos/meat-header.mp4"
					autoPlay
					loop
					muted
					playsInline
				/>
				{/* Dark Overlay (Optional) */}
				<div className="absolute inset-0 bg-black/40"></div>

				<div className="relative mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="max-w-md space-y-4 text-white">
						<h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("hero.title")}</h2>
						<p className="text-pretty">{t("hero.description")}</p>
						<YnsLink className={styles.button} href={t("hero.link")}>
							{t("hero.action")}
						</YnsLink>
					</div>
				</div>
			</section>
			<ProductList products={products} />
			<section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{StoreConfig.categories.map(({ slug, image: src }) => (
						<CategoryBox key={slug} categorySlug={slug} src={src} />
					))}
				</div>
			</section>
		</main>
	);
}

import { FC } from "react";
import Head from "next/head";

interface SEOProps {
    title: string;
    description: string;
    url: string;
    image?: string; // og:image
    type?: "website" | "article";
}

const SEO: FC<SEOProps> = ({ title, description, url, image, type = "website" }) => {
    return (
        <Head>
            {/* Основные мета-теги */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            <meta property="og:url" content={url} />
            <meta property="og:locale" content="ru_RU" />


        </Head>
    );
};

export default SEO;

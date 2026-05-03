import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Variant Profit Optimizer",
  description: "Find your most profitable product variants. Analyze Shopify sales data to identify which product variants have the highest profit margins and conversion rates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="52f8cc69-6639-496e-96e8-396025306b93"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

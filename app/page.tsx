export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Your Most{" "}
          <span className="text-[#58a6ff]">Profitable</span>{" "}
          Product Variants
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing which variants drive profit. Connect your Shopify store and instantly see margin, conversion, and revenue data broken down by every variant — so you can double down on what works.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Feature highlights */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-1">Variant-Level Margins</h3>
            <p className="text-sm text-[#8b949e]">See exact profit margins per SKU using your cost data and Shopify order history.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🔄</div>
            <h3 className="text-white font-semibold mb-1">Conversion Rates</h3>
            <p className="text-sm text-[#8b949e]">Identify which variants convert best so you can prioritize inventory and ads.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-1">Instant Sync</h3>
            <p className="text-sm text-[#8b949e]">Connects to Shopify API in minutes. Data refreshes automatically every day.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited Shopify stores</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Full variant profit analytics</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Conversion rate tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily data sync</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CSV export</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does it connect to my Shopify store?</h3>
            <p className="text-sm text-[#8b949e]">After subscribing, you'll enter your Shopify store URL and API credentials. We use the Shopify Admin API to securely read your orders and product data — read-only access, no changes made to your store.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Where does cost data come from?</h3>
            <p className="text-sm text-[#8b949e]">We pull cost-per-item data directly from your Shopify product variants (the "Cost per item" field). You can also manually override costs in the dashboard for full accuracy.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel your subscription at any time from your billing portal. You'll retain access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Shopify Variant Profit Optimizer. All rights reserved.
      </footer>
    </main>
  );
}

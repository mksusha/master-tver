"use client";

export default function MapSection() {
    return (
        <section className="mt-20 mb-20 w-full">
            <div className="w-full max-w-[1600px] mx-auto px-4">


                <div className="relative overflow-hidden rounded-2xl" style={{ paddingTop: "56.25%" }}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=35.896193%2C56.839325&mode=search&oid=199673139492&ol=biz&sctx=ZAAAAAgBEAAaKAoSCUSKARJN8kFAESY5YFeTa0xAEhIJvajdrwJ8hz8RrTQpBd1ecj8iBgABAgMEBSgKOABAgqANSAFqAnJ1nQHNzMw9oAEAqAEAvQGxnKAuwgEGpKLJ6%2BcFggIf0LMg0YLQstC10YDRjCDRgdC6INCz0LXRgNC80LXRgYoCAJICAjE0mgIMZGVza3RvcC1tYXBzqgIHNjAwMjIzOA%3D%3D&sll=35.896193%2C56.839325&sspn=0.010335%2C0.004043&text=%D0%B3%20%D1%82%D0%B2%D0%B5%D1%80%D1%8C%20%D1%81%D0%BA%20%D0%B3%D0%B5%D1%80%D0%BC%D0%B5%D1%81&z=16.98"
                        frameBorder="1"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-[700px]"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

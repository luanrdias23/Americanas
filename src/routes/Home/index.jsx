export default function Home() {
    const handlePromoClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <main>
            <h1>Home</h1>
            <div className="promo-container">
                <div className="promo" onClick={() => handlePromoClick("https://www.netshoes.com.br/?gclid=CjwKCAjwjOunBhB4EiwA94JWsM56IzjzCZ55xRUpo8ETSjP_IgopvwVxqmQgTYELc7MmP2wxPgoTdBoCHZEQAvD_BwE&gclsrc=aw.dsnk-para-promo-1")}>
                    <h2>Promoção 1</h2>
                    <img src="./img/Netshoes.png" alt="Site da Netshoes" />
                    <p>Promoção de tênis.</p>
                </div>
                <div className="promo" onClick={() => handlePromoClick("https://www.terabyteshop.com.br/?gclid=CjwKCAjwjOunBhB4EiwA94JWsI7Dx-p0ovjG7AINglH12GrgFiLL3PotzWKbBDdYgiTMy1p0A9NNWhoCpa0QAvD_BwE-para-promo-2")}>
                    <h2>Promoção 2</h2>
                    <img src="./img/Terabyte.png" alt="Site da Terabyte" />
                    <p>Promoção para ter o seu computador do sonho só na Terabyte.</p>
                </div>
            </div>
        </main>
    );
}
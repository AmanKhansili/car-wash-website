
const products = [
  ["Dashboard Polish","https://www.speedcarwash.com/images/web-product/1.JPG"],
  ["Tyre Tonic","https://www.speedcarwash.com/images/web-product/2.JPG"],
  ["Glass Gloss","https://www.speedcarwash.com/images/web-product/3.JPG"],
  ["Car Shampoo","https://www.speedcarwash.com/images/web-product/4.JPG"],
  ["Microfiber Cloth","https://www.speedcarwash.com/images/web-product/5.JPG"],
  ["Micro Fiber Glove","https://www.speedcarwash.com/images/web-product/6.JPG"],
  ["Micro Fiber Towel","https://www.speedcarwash.com/images/web-product/7.JPG"],
  ["Green Apple Form","https://www.speedcarwash.com/images/web-product/8.JPG"],
];

export default function ProductsSection() {
  const loop = [...products, ...products];
  return <section className="products-section">
    <div className="scw-container">
      <div className="section-head centered"><div className="eyebrow">SCW PRODUCT RANGE</div><h2>Professional products<br /><span>for a professional finish.</span></h2></div>
    </div>
    <div className="products-marquee"><div className="products-track">
      {loop.map(([name,img],i)=><div className="product-card" key={name+i}><div className="product-img"><img src={img} alt={name}/><span>SCW</span></div><strong>{name}</strong><small>View product ↗</small></div>)}
    </div></div>
  </section>
}

import categoryImg from '@/assets/img/category-item/item-2.png'

export default function CategoryCard() {
  return (
    <div>
      <div className="col">
        <a href="">
          <article className="cate-item">
            <img src={categoryImg} alt="" className="cate-item__thumb" />
            <section className="cate-item__info">
              <h3 className="cate-item__title">$37 - $160</h3>
              <p className="cate-item__desc">Espresso arabica and robusta beans</p>
            </section>
          </article>
        </a>
      </div>
    </div>
  )
}

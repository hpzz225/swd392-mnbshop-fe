import categoryImg from '@/assets/img/category-item/brand1.jpg'

export default function CategoryCard() {
  return (
    <div>
      <div className="col">
        <a href="">
          <article className="cate-item">
            <img src={categoryImg} alt="" className="cate-item__thumb" />
            <section className="cate-item__info">
              <h3 className="cate-item__title">Organic milk</h3>
              <p className="cate-item__desc">Fresh From the Farm</p>
            </section>
          </article>
        </a>
      </div>
    </div>
  )
}

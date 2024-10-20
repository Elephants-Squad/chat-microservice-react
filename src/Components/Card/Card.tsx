import "./Card.css"
import {useState} from "react";

export default function Card() {

    const [countToCart, setAddToCart] = useState(0)


    return (
        <>
            <div className="container__card">
                <div className="card__image">
                    <img src="src/assets/Goods/orange.webp" alt="good"/>
                </div>
                <div className="card__info">
                    <div className="card__title ft24">
                        <h2>Мандарины</h2>
                    </div>

                    <div className="card__price ft24 ftbold">
                        <h1>27,90 ₽</h1>
                    </div>

                    <div className="card__weight ft14">
                        <h3>100 г</h3>
                    </div>

                    <div className="card__description ft16">
                        <h3>Сочные, вкусные, свежие мандарины, которые порадуют вас и ваших близких, вы можете
                            приобрести их прямо у нас и поесть вкусные мандарины на круглый год</h3>
                    </div>
                </div>

                <div className="card__button__add ftbold ft20">
                    <button className="buy__button">Купить</button>
                    {countToCart === 0 &&
                        <button className="buy__button" onClick={() => {
                            setAddToCart(countToCart + 1)
                        }}>В корзину</button>
                    }
                    {countToCart > 0 &&
                        <div className="to__cart">
                            <button className="to__cart__button ft24" onClick={() => {
                                setAddToCart(countToCart - 1)
                            }}>–</button>
                            <span className="ft24">{ countToCart }</span>
                            <button className="to__cart__button ft24" onClick={() => {
                                setAddToCart(countToCart + 1)
                            }}>+</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
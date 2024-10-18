import "./FilterBar.css"

export default function FilterBar() {
    return (
        <>
            <div className="container__filter__bar">
                <div className="container__categories">
                    <button>Мясо</button>
                    <button>Молоко</button>
                    <button>Рыба</button>
                    <button>Овощи</button>
                    <button>Фрукты</button>
                    <button>Орехи</button>
                </div>
                <div className="container__discount">
                    <p className="ft18">Скидка</p>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="container__count">
                    <p className="ft18">Количество</p>
                    <span className="count__input">
                        От
                        <input/>
                    </span>
                </div>
            </div>
        </>
    )
}
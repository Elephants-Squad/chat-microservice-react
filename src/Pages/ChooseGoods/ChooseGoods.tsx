import Card from "../../Components/Card/Card.tsx";
import "./ChooseGoods.css"
import FilterBar from "../../Components/FilterBar/FilterBar.tsx";


export default function ChooseGoods() {
    return (
        <>
            <div className="container__choose__goods">
                <div className="container__filter__bar">
                    <FilterBar />
                </div>
                <div className="container__cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}
import Test from "./Test";

function Welcome() {

    const username = "Ram";
    const price = 2587;
    const discount = 33;

    return(
        <div>
            <h3>Price:Rs.{price}</h3>
            <h3>Discount: {discount}%</h3>
            <h3>Total Amount: {price - (price*discount / 100)}</h3>
            <h1>This is Welcome component</h1>
            <h2>Welcome {username.toLocaleUpperCase()}</h2>
            <p>10+10+10</p>
            <p>{10+10+10}</p>
            <h4>{new Date().toLocaleDateString()}</h4>
            <h4>{document.URL}</h4>
            <h4>{window.screen.availHeight}</h4>
            <Test />
        </div>
    )
}

export default Welcome;

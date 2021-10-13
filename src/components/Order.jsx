
export default function Order (props) {

    const {basket, total} = props;

    return (
        <>
            <table className="table">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map(card => {
                    const {id, qnty, name, price} = card
                    return (
                        <tr key={id.toString()}>
                            <td>{qnty}x</td>
                            <td>{name}</td>
                            <td>{(price * qnty).toFixed(2)}</td>
                        </tr>
                    )
                  })}
                <tr>
                    <td colSpan="2"><b>Total:</b></td>
                    <td>{total}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

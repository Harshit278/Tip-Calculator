import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
    // setting dark background and white text
    document.body.classList.add("bg-dark", "text-white");
    // declaring state values and setting initital values
    const [values, setValues] = useState({ bill: 0, tip: 5, people: 1 });
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [billPerPerson, setBillPerPerson] = useState(0);

    // change state whenever an input field is updated
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    // calculate tip and bill per person when form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();

        const tipValue = (values.tip / 100) * values.bill;
        setTipPerPerson(tipValue / values.people);
        setBillPerPerson((Number(values.bill) + tipValue) / values.people);
    };

    return (
        <>
            <h1 className="text-center mt-5">Tip Calculator</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 text-center">
                        <form className="" onSubmit={handleSubmit}>
                            <div className="my-3">
                                <label htmlFor="bill" className="form-label">
                                    Bill
                                </label>
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    id="bill"
                                    name="bill"
                                    min="0"
                                    max="1000000"
                                    step=".01"
                                    value={values.bill}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="tip" className="form-label">
                                    Tip %
                                </label>
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    id="tip"
                                    name="tip"
                                    min="0"
                                    max="100"
                                    value={values.tip}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="people" className="form-label">
                                    Numer of people
                                </label>
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    id="people"
                                    name="people"
                                    min="1"
                                    max="50"
                                    value={values.people}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary my-3"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-6 text-center">
                        <h1 className="display-3 my-5">
                            Tip <span className="lead">per person</span>
                            {"  ->  $"}
                            {tipPerPerson.toFixed(2)}
                        </h1>
                        <h1 className="display-3 mt-5 font-weight-bold">
                            Bill <span className="lead">per person</span>
                            {"  ->  $"}
                            {billPerPerson.toFixed(2)}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

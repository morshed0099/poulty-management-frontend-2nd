import { useState } from "react";
import LabelWithInput from "../components/LabelWithInput";
import SaleCustomerDetails from "../components/SaleCustomerDetails";

import { SingleValue } from "react-select";
import FeedSles from "../components/FeedSles";

type Item = {
  name: string;
  unitPrice: number;
  quantity: number;
  price: number;
};
const Sales = () => {
  const [salestype, setSelectedValue] = useState<string>("Feed");
  const [item, setItem] = useState<Item | null>();
  const [billitem, setBillItem] = useState<Item[]>([]);
  //   const [price, setPrice] = useState<number>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  const handelChange = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
      price: number;
      quantity: number;
    }>
  ) => {
    if (!selectedOption) {
      return;
    }
    const newItem = {
      name: selectedOption.value,
      unitPrice: selectedOption.price,
      quantity: selectedOption.quantity,
      price: 0,
    };

    setItem(newItem);

    console.log(item);
  };

  const priceCalculate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) <= 0) {
      alert("you cant make it less then 0");
    }

    if (item) {
      item.quantity = parseInt(e.target.value);

      item.price = (item?.unitPrice as number) * item.quantity;
      setItem(item);
    }
  };

  const hadelsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBillItem([...billitem, item!]);
    setItem(null);
  };

  return (
    <div className="p-2">
      <div className="border-amber-200 shadow rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-yellow-800 text-center p-2 ">
          Crete Sales Order
        </h1>
        <LabelWithInput name="date" label="Select Date" type="date" />

        <div>
          <label>Slect Brance</label>
        </div>
        <select defaultValue="Select Brance" className="select">
          <option disabled={true}>Sales Order Type</option>
          <option>CFRAJ</option>
          <option>CFTNG</option>
          <option>CFRNG</option>
        </select>

        <LabelWithInput
          label="Customer Number"
          name="customerName"
          type="input"
        />

        <SaleCustomerDetails />

        {/* sales order type and component */}
        <div>
          <div>
            <label>Slecet Type</label>
          </div>
          <select
            onChange={handleChange}
            defaultValue="Feed"
            className="select"
          >
            <option selected disabled={true}>
              Sales Order Type
            </option>
            <option>Feed</option>
            <option>Medicine</option>
            <option>Bird</option>
            <option>Chick</option>
          </select>
        </div>
        {salestype === "Feed" && <FeedSles handelChange={handelChange} />}
        {salestype === "Medicine" && <h1>hello</h1>}
        {salestype === "Bird" && <h1>hello</h1>}
        {salestype === "Chick" && <h1>Chick</h1>}
      </div>
      {item ? (
        <form onSubmit={(e) => hadelsubmit(e)}>
          <div className="flex border border-gray-600 p-4 justify-between items-center">
            <p>{item.name} </p>
            <p>{item.unitPrice} </p>
            <input
              name={item.name}
              defaultValue={0}
              onBlur={priceCalculate}
              type="number"
              className="input"
            />
            <p>Price:{item.price}</p>
            <button className="btn btn-ghost  border-rose-400">Add</button>
          </div>
        </form>
      ) :<></> }
       {<>
          {billitem &&
            billitem.map((el, idx) => (
              <>
                <div className="flex border border-gray-600 p-4 justify-between items-center">
                  <p key={idx}>{el.name} </p>
                  <p>{el.unitPrice} </p>
                  <input
                    name={el.name}
                    value={el.quantity}
                    onBlur={priceCalculate}
                    type="number"
                    className="input"
                  />
                  <p>Price:{el.price}</p>
                  <button className="btn btn-ghost  border-rose-400">
                    delete
                  </button>
                  <button className="btn btn-ghost  border-rose-400">
                    edit
                  </button>
                </div>
              </>
            ))}
        </>
      }
    </div>
  );
};

export default Sales;

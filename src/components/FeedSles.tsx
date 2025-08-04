
import Select, { SingleValue } from "react-select";

const options = [
  { value: "Broiler Grower", label: "Broiler Grower" ,price:67 ,quantity:0},
  { value: "Broiler Finsher", label: "Broiler Finsher" ,price:67,quantity:0},
  { value: "Broiler Pres Starter", label: "Broiler Pres Starter" ,price:67,quantity:0},
  { value: "Color Starter Super", label: "Color Starter Super" ,price:67,quantity:0},
  { value: "Color Grower Super", label:"Color Grower Super" ,price:67,quantity:0},

];

 type ItemType = {
 

   handelChange: (selectedOption: SingleValue<{
    value: string;
    label: string;
    price:number
    quantity:number
}>) => void
};

const FeedSles = ({handelChange}: ItemType) => {

  return (
    <div>
      <Select onChange={(e) => handelChange(e)} options={options} />
    </div>
  );
};

export default FeedSles;

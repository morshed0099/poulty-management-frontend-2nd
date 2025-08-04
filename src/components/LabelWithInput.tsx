
type Lavel={
    label :string,
    type:string,
    name:string
}


const LabelWithInput = ({label,type,name}:Lavel) => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <div>
          <label>{label}</label>
        </div>
        <div>
          <input name={name} type={type} className="input" />
        </div>
      </div>
    </div>
  );
};

export default LabelWithInput;

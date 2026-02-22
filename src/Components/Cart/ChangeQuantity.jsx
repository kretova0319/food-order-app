export default function ChangeQuantity({ quantity, setQuantity }) {
  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  //   const reduceQuantity = () => {
  //     if (quantity <= 1) return;
  //     const newQuantity = quantity - 1;
  //     setQuantity(newQuantity);
  //   };

  const reduceQuantity = () => {
    if (quantity <= 1) {
      quantity = 1;
    } else {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
      <button className="changeQuantity" onClick={addQuantity}>
        {" "}
        +{" "}
      </button>
      <span>{quantity}</span>
      <button className="changeQuantity" onClick={reduceQuantity}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}

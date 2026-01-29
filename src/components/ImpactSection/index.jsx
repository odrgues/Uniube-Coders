const ImpactSection = ({ data }) => {
  return (
    <>
      <div>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
      </div>

      <div>
        {data.numbers.map((number) => (
          <div key={number.label}>
            <p>{number.value}</p>
            <p>{number.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImpactSection;

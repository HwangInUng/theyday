const TestForm = () => {
  const fieldData = ["상품명", "지름", "높이", "가격", "옵션1", "옵션2"];
  return (
    <div className="flex flex-col gap-y-2 border border-orange-100 shadow-md rounded-md w-1/3 p-2">
      {fieldData.map((field) => (
        <div key={field} className="flex items-center justify-between">
          <label className="w-[100px]" htmlFor="name">
            {field}
          </label>
          <input
            type="text"
            className="flex-grow outline-none border p-1 rounded-md"
            id="name"
          />
        </div>
      ))}
    </div>
  );
};

export default TestForm;

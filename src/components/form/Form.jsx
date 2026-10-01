const form = () => {
  const word = (e) => {
    console.log(e.target.value);
  };

  const itemChange = (e) => {
    console.log(e.target.value);
  };

  const itemChangeMultiple = (e) => {
    // const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value,
    );

    console.log(selectedOptions);
  };

  let checkItems = [];
  const handleChange = (e) => {
    // code
    const item = checkItems.find((item) => item === e.target.value);
    if (item) {
      checkItems = checkItems.filter((item) => item !== e.target.value);
    } else {
      checkItems.push(e.target.value);
    }
    console.log(checkItems);
  };

  const handleChange2 = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="mb-3 w-25">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ali"
          onKeyUp={word}
        />
      </div>

      <br />

      <select
        className="form-select form-select-sm w-25"
        aria-label="Small select example"
        onChange={itemChange}
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <br />

      <select
        className="form-select w-25"
        multiple
        aria-label="Multiple select example"
        onChange={itemChangeMultiple}
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <br />

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="red"
          id="checkDefault"
          onChange={handleChange}
        />
        <label className="form-check-label" for="checkDefault">
          red
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="green"
          id="checkChecked"
          onChange={handleChange}
        />
        <label className="form-check-label" for="checkChecked">
          green
        </label>

        <br />
        <br />

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
            value="famale"
            onChange={handleChange2}
          />
          <label className="form-check-label" for="radioDefault1">
            famale
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            value="male"
            onChange={handleChange2}
          />
          <label className="form-check-label" for="radioDefault2">
            male
          </label>
        </div>
      </div>
    </>
  );
};

export default form;

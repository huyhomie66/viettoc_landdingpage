import { Fragment } from "react";

const FormInput = ({ className, label, error, children }) => {
  return (
    <div
      className={`col  ${className} `}
      style={{ width: "100%", marginBottom: "3vh" }}
    >
      <span style={{ paddingBottom: "10px" }}>{label} </span>
      {children}
    </div>
  );
};

const Fields = ({ fields = [] }) => {
  return (
    <Fragment>
      {fields.map((e) => (
        <FormInput label={e.label}>
          {e.type === "select" ? (
            <select name={e.name} placeholder="" className="select">
              {e.selectData.map((o) => (
                <option value={o.value}>{o.text}</option>
              ))}
            </select>
          ) : (
            <input
              name={e.name}
              className="select"
              style={{ borderWidth: "1px" }}
            />
          )}
        </FormInput>
      ))}
    </Fragment>
  );
};

export default Fields;

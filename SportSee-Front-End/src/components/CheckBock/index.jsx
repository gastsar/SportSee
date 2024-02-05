import { useId } from "react";
import PropTypes from "prop-types";

/**
 * @param {Object} props
 * @param {boolean} props.checked
 * @param {(v: boolean) => void} props.onChange
 * @param {string} props.label
 * @returns {JSX.Element}
 */
export function Checkbox({ checked, onChange, label }) {
  const id = useId();

  return (
    <div className="form-check">
      <input
        id={id}
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

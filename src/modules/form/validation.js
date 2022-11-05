/**
 * This is a simplified logic.
 * Consider using `import isEmail from 'validator/lib/isEmail'` from
 * https://github.com/validatorjs/validator.js/blob/7376945b4ce028b65955ae57b8fccbbf3fe58467/src/lib/isEmail.js
 * for a more robust version.
 */
function isEmail(string) {
  const re =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return re.test(string);
}

export function email(value) {
  let message = "";
  // return value && !isEmail(value.trim()) ? 'Invalid email' : null;
  if (value && !isEmail(value.trim())) {
    message = "Invalid email";
  } else if (!value.trim().includes(".edu")) {
    message = ".edu email required";
  } else message = null;

  return message;
}

function isDirty(value) {
  return value || value === 0;
}

export function required(requiredFields, values) {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: "Required" }),
    }),
    {}
  );
}

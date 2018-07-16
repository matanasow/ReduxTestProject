const compose = (fn, ...rest) => (p) => rest.reduce((acc, curr) => curr(acc), fn(p));

export default compose;

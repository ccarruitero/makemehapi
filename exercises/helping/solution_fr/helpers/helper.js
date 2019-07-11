module.exports = function (context) {
  const { query } = context.data.root;
  return query.name + query.suffix;
};

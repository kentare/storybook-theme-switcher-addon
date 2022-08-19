function config(entry = []) {
  return [...entry, require.resolve("./preset/preview")];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("./preset/manager")];
}

module.exports = {
  managerEntries,
  config,
};

function getIcon(name) {
  return import(`./${name}.js`).then(
    module => (module.default ? module.default : module)
  );
}

export default getIcon;

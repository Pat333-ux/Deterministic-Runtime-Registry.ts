export const DeterministicRuntimeRegistry = {
  registry: {},

  register(name, ref) {
    this.registry[name] = {
      ref,
      timestamp: Date.now()
    };
    return { name, registered: true };
  },

  get(name) {
    return this.registry[name] ? this.registry[name].ref : null;
  },

  has(name) {
    return Object.prototype.hasOwnProperty.call(this.registry, name);
  },

  unregister(name) {
    if (!this.has(name)) return false;
    delete this.registry[name];
    return true;
  },

  all() {
    const ordered = {};
    const keys = Object.keys(this.registry).sort();
    for (const k of keys) {
      ordered[k] = this.registry[k];
    }
    return ordered;
  }
};

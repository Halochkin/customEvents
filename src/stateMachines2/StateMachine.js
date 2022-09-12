export class NodeStateMachine {
  #meta;

  constructor(meta) {
    this.#meta = meta;
    Object.defineProperty(meta, "reset", {
      value: function () {
        return this;
      }.bind(this)
    });
  }

  get prefix() {
    return this.constructor.prefix;
  }

  get meta() {
    return this.#meta;
  }

  get hosts() {
    return this.#meta.targets;
  }

  get owner() {
    return this.#meta.target;
  }

  get state() {
    return this.#meta.state;
  }

  get stateValue() {
    return this.#meta.value;
  }

  enterState(state, value) {
    this.#meta.setState(state, value);
  }

  leaveState() {
  }

  reset() {
    //todo
  }

  destructor() {
    //remember that super.destructor() calls should run in the reverse sequence of constructor calls.
    //ie.: build up processes (such as constructor and enterState) should run inside out (superclass before subclass)
    //     tear down processes (such as destructor and leaveState) should run outside in (subclass before superclass)
  }
}
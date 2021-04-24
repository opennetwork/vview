import { createNode, createToken, TokenVNode } from "@opennetwork/vnode";


export interface ViewOptions {

}
const ViewSymbol = Symbol("View");
export type ViewNode = TokenVNode<typeof ViewSymbol, ViewOptions>;
export const View: ViewNode = createToken(ViewSymbol);

export interface InputOptions<V> extends ViewOptions {
  value?: V;
  onValue?(value: V): void;
}

export type TextInputOptions = InputOptions<string>;
const TextInputSymbol = Symbol("Text Input");
export type TextInputNode = TokenVNode<typeof TextInputSymbol, TextInputOptions>;
export const TextInput: TextInputNode = createToken(TextInputSymbol);

export type NumberInputOptions = InputOptions<number>;
const NumberInputSymbol = Symbol("Number Input");
export type NumberInputNode = TokenVNode<typeof NumberInputSymbol, NumberInputOptions>;
export const NumberInput: NumberInputNode = createToken(NumberInputSymbol);

export type BooleanInputOptions = InputOptions<boolean>;
const BooleanInputSymbol = Symbol("Boolean Input");
export type BooleanInputNode = TokenVNode<typeof BooleanInputSymbol, BooleanInputOptions>;
export const BooleanInput: BooleanInputNode = createToken(BooleanInputSymbol);

export type DateInputOptions = InputOptions<Date>;
const DateInputSymbol = Symbol("Date Input");
export type DateInputNode = TokenVNode<typeof DateInputSymbol, DateInputOptions>;
export const DateInput = createToken(DateInputSymbol);

export interface ActionOptions<A = unknown> extends ViewOptions {
  type?: "button" | "submit" | string;
  onAction?(action: unknown extends A ? never : A): void;
}
const ActionSymbol = Symbol("Action");
export type ActionNode<A = void> = TokenVNode<typeof ActionSymbol, ActionOptions<A>>;
export const Action: ActionNode = createToken(ActionSymbol);



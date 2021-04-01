export type InputTypes = string | boolean | number | Date

type Validator = (input: InputTypes) => boolean

export type FormFields = {
  value?: string | number | readonly string[],
  checked?: boolean,
  type: 'string' | 'bool' | 'number' | 'date',
  validator?: Validator[]
}

export type Form<T> = Record<keyof T, FormFields>
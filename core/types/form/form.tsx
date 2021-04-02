export type InputTypes = string | boolean | number | Date

interface Validator {
  rule: (input: InputTypes) => boolean | string
  message: string
}

export type Error = {
  state: boolean,
  messages: string[]
}

interface FormFields {
  type: 'string' | 'bool' | 'number' | 'date',
  value?: string | number | readonly string[],
  checked?: boolean,
  validator?: Validator[]
  error?: Error
}

export type Form<T> = Record<keyof T, FormFields>
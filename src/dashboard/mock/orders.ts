import { Order } from 'core/models/orders'

const orders: Order[] = [
  {
    code: '12930',
    customer: {
      fullname: 'Sumayyah Goulding',
      address: {
        street: 'Rua teste',
        number: '123',
        zipcode: '80888-000',
        state: 'PR',
        city: 'Curitiba'
      }
    },
    total: 278.10,
    freight: 'Sedex',
    status: 'Em andamento'
  },
  {
    code: '98732',
    customer: {
      fullname: 'Chelsea Booth',
      address: {
        street: 'Rua teste 2',
        number: '1233',
        zipcode: '19828-039',
        state: 'SP',
        city: 'São Paulo'
      }
    },
    total: 678.90,
    freight: 'Jadlog',
    status: 'Em andamento'
  },
  {
    code: '34521',
    customer: {
      fullname: 'Olivia-Mae Pittman',
      address: {
        street: 'Rua teste 3',
        number: '987',
        zipcode: '43828-029',
        state: 'SP',
        city: 'Campinas'
      }
    },
    total: 78.90,
    freight: 'Sedex',
    status: 'Em andamento'
  },
  {
    code: '98231',
    customer: {
      fullname: 'Hal Robinson',
      address: {
        street: 'Rua teste 4',
        number: '782',
        zipcode: '06228-089',
        state: 'CE',
        city: 'Fortaleza'
      }
    },
    total: 178.90,
    freight: 'Sedex',
    status: 'Em andamento'
  },
  {
    code: '7821',
    customer: {
      fullname: 'Margie Park',
      address: {
        street: 'Rua teste 5',
        number: '12',
        zipcode: '96542-089',
        state: 'DF',
        city: 'Brasília'
      }
    },
    total: 1098.90,
    freight: 'Sedex',
    status: 'Em andamento'
  },
  {
    code: '3762',
    customer: {
      fullname: 'Arran Sharpe',
      address: {
        street: 'Rua teste 6',
        number: '129',
        zipcode: '50978-234',
        state: 'RS',
        city: 'Rio Grande do Sul'
      }
    },
    total: 2398.90,
    freight: 'Sedex',
    status: 'Em andamento'
  },
  {
    code: '476322',
    customer: {
      fullname: 'Claire Rosas',
      address: {
        street: 'Rua teste 7',
        number: '5872',
        zipcode: '90978-234',
        state: 'SC',
        city: 'Florianópolis'
      }
    },
    total: 398.90,
    freight: 'Sedex',
    status: 'Em andamento'
  }
]

export default orders
export const INITIAL_STATE = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
};

export const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6,
};

export const CONTROLS = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

export const ORDER_FORM = {
  name: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Name',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  street: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Street',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  zipCode: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'ZIP Code',
    },
    value: '',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 5,
      isNumeric: true,
    },
    valid: false,
    touched: false,
  },
  country: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Country',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  email: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Your E-Mail',
    },
    value: '',
    validation: {
      required: true,
      isEmail: true,
    },
    valid: false,
    touched: false,
  },
  deliveryMethod: {
    elementType: 'select',
    elementConfig: {
      options: [
        { value: 'fastest', displayValue: 'Fastest' },
        { value: 'cheapest', displayValue: 'Cheapest' },
      ],
    },
    value: 'fastest',
    validation: {},
    valid: true,
  },
};

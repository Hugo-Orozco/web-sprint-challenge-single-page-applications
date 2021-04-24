import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';

import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import Nav from './components/Nav';
import Confirmation from './pages/Confirmation';
import Form from './pages/Form';
import Home from './pages/Home';

const Data = {
  size: '',
  sauce: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  topping7: false,
  topping8: false,
  topping9: false,
  topping10: false,
  topping11: false,
  topping12: false,
  topping13: false,
  topping14: false,
  substitute: false,
  special: '',
  quantity: 1
};

const Schema = yup.object().shape({
  size: yup.string().required('A pizza size is required in order to place an order.'),
  sauce: yup.string().required('A pizza sauce is required in order to place an order.')
});

const App = () => {

  const [pizzas, setPizzas] = useState([]);

  const [values, setValues] = useState(Data);

  const [errors, setErrors] = useState({ size: '', sauce: '' });

  const [disabled, setDisabled] = useState(true);

  const [pizza, setPizza] = useState({});

  const history = useHistory();

  const update = (name, value) => {

    if (name === 'size' || name === 'sauce') {

      yup
        .reach(Schema, name)
        .validate(value)
        .then(valid => {
          setErrors({ ...errors, [name]: '' });
        }).catch(err => {
          setErrors({ ...errors, [name]: err.errors[0] });
        });

    }

    setValues({ ...values, [name]: value });

  };

  const submit = () => {

    const Pizza = {
      id: uuidv4(),
      size: values.size,
      sauce: values.sauce,
      topping1: values.topping1,
      topping2: values.topping2,
      topping3: values.topping3,
      topping4: values.topping4,
      topping5: values.topping5,
      topping6: values.topping6,
      topping7: values.topping7,
      topping8: values.topping8,
      topping9: values.topping9,
      topping10: values.topping10,
      topping11: values.topping11,
      topping12: values.topping12,
      topping13: values.topping13,
      topping14: values.topping14,
      substitute: values.substitute,
      special: values.special,
      quantity: values.quantity,
      total: values.substitute ? `$${(values.quantity * (16.99 + 1)).toFixed(2)}` : `$${(values.quantity * (16.99)).toFixed(2)}`
    };

    const temp = pizzas;
    temp.push(Pizza);

    setPizzas([...temp]);
    setValues(Data);

    setPizza(Pizza);

    history.push('/confirmation');

  };

  const increment = () => {
    if (values.quantity < 100) {
      setValues({ ...values, ['quantity']: values.quantity + 1 });
    }
  };

  const decrement = () => {
    if (values.quantity > 1) {
      setValues({ ...values, ['quantity']: values.quantity - 1 });
    }
  };

  useEffect(() => {
    Schema.isValid(values).then(valid => {
      setDisabled(!valid);
    });
  }, [values]);

  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <Form
            values={values}
            errors={errors}
            update={update}
            submit={submit}
            disabled={disabled}
            increment={increment}
            decrement={decrement}
          />
        </Route>
        <Route path='/confirmation'>
          <Confirmation
            pizza={pizza}
          />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;

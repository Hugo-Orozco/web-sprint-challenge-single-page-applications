import React from 'react';

import './Form.css';

const Flavor = {
  [1]: 'Original Red',
  [2]: 'Garlic Ranch',
  [3]: 'BBQ Sauce',
  [4]: 'Spinach Alfredo'
};

export default function Form(props) {

  const { values, errors, update, submit, disabled, increment, decrement } = props;

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    update(name, type === 'checkbox' ? checked : value);
  };

  const onClick = evt => {
    const { name, value, id } = evt.target;
    switch (id) {
      case ('First'): {
        value === Flavor[1] ? update(name, '') : update(name, Flavor[1]);
        break;
      }
      case ('Second'): {
        value === Flavor[2] ? update(name, '') : update(name, Flavor[2]);
        break;
      }
      case ('Third'): {
        value === Flavor[3] ? update(name, '') : update(name, Flavor[3]);
        break;
      }
      case ('Fourth'): {
        value === Flavor[4] ? update(name, '') : update(name, Flavor[4]);
        break;
      }
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  };

  const onIncrement = evt => {
    increment();
  };

  const onDecrement = evt => {
    decrement();
  };

  return (
    <form className='Form' onSubmit={onSubmit}>
      <div className='Container'>

        <h2>Build Your Own Pizza!</h2>

        <label className='Label'>Choice of Size{errors.size.length > 0 ? ` - ${errors.size}` : ` - Required.`}</label>

        <div id='Selection'>
          <select name='size' value={values.size} onChange={onChange}>
            <option value=''>Select</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
        </div>

        <label className='Label'>Choice of Sauce{errors.sauce.length > 0 ? ` - ${errors.sauce}` : ' - Required.'}</label>

        <div id='Multiple'>
          <label for='First'>
            <input type='radio' id='First' name='sauce' value={values.sauce} checked={values.sauce === Flavor[1] ? true : false} onClick={onClick} />
            <span className='Text'>{Flavor[1]}</span>
          </label>
          <label for='Second'>
            <input type='radio' id='Second' name='sauce' value={values.sauce} checked={values.sauce === Flavor[2] ? true : false} onClick={onClick} />
            <span className='Text'>{Flavor[2]}</span>
          </label>
          <label for='Third'>
            <input type='radio' id='Third' name='sauce' value={values.sauce} checked={values.sauce === Flavor[3] ? true : false} onClick={onClick} />
            <span className='Text'>{Flavor[3]}</span>
          </label>
          <label for='Fourth'>
            <input type='radio' id='Fourth' name='sauce' value={values.sauce} checked={values.sauce === Flavor[4] ? true : false} onClick={onClick} />
            <span className='Text'>{Flavor[4]}</span>
          </label>
        </div>

        <label className='Label'>Add Toppings - Choose up to 10.</label>

        <div id='Toppings'>
          <label>
            <input type='checkbox' name='topping1' value={values.topping1} onChange={onChange} />
            <span className='Text'>Pepperoni</span>
          </label>
          <label>
            <input type='checkbox' name='topping2' value={values.topping2} onChange={onChange} />
            <span className='Text'>Diced Tomatoes</span>
          </label>
          <label>
            <input type='checkbox' name='topping3' value={values.topping2} onChange={onChange} />
            <span className='Text'>Sausage</span>
          </label>
          <label>
            <input type='checkbox' name='topping4' value={values.topping2} onChange={onChange} />
            <span className='Text'>Black Olives</span>
          </label>
          <label>
            <input type='checkbox' name='topping5' value={values.topping2} onChange={onChange} />
            <span className='Text'>Canadian Bacon</span>
          </label>
          <label>
            <input type='checkbox' name='topping6' value={values.topping2} onChange={onChange} />
            <span className='Text'>Roasted Garlic</span>
          </label>
          <label>
            <input type='checkbox' name='topping7' value={values.topping2} onChange={onChange} />
            <span className='Text'>Spicy Italian Sausage</span>
          </label>
          <label>
            <input type='checkbox' name='topping8' value={values.topping2} onChange={onChange} />
            <span className='Text'>Artichoke Hearts</span>
          </label>
          <label>
            <input type='checkbox' name='topping9' value={values.topping2} onChange={onChange} />
            <span className='Text'>Grilled Chicken</span>
          </label>
          <label>
            <input type='checkbox' name='topping10' value={values.topping2} onChange={onChange} />
            <span className='Text'>Three Cheese</span>
          </label>
          <label>
            <input type='checkbox' name='topping11' value={values.topping2} onChange={onChange} />
            <span className='Text'>Onions</span>
          </label>
          <label>
            <input type='checkbox' name='topping12' value={values.topping2} onChange={onChange} />
            <span className='Text'>Pineapple</span>
          </label>
          <label>
            <input type='checkbox' name='topping13' value={values.topping2} onChange={onChange} />
            <span className='Text'>Green Pepper</span>
          </label>
          <label>
            <input type='checkbox' name='topping14' value={values.topping2} onChange={onChange} />
            <span className='Text'>Extra Cheese</span>
          </label>
        </div>

        <label className='Label'>Choice of Substitute - Choose up to 1.</label>

        <div id='Toggle'>
          <label className='Toggle'>
            <input type='checkbox' name='substitute' value={values.substitute} onChange={onChange} />
            <span className='Slider'></span>
          </label>
          <span className='Text'>{'\u200B'} Gluten Free Crust (+ $1.00)</span>
        </div>

        <label className='Label'>Special Instructions</label>

        <div id='Special'>
          <input
            type='text'
            value={values.special}
            onChange={onChange}
            name='special'
            placeholder="Anything else you'd like to add?"
          />
        </div>


        <div id='Order'>
          <button id='Submit' type='submit' className={disabled ? 'Not-Allowed' : 'Allowed'} disabled={disabled}>Place Order</button>
          <div>
            <span className='Total'>{values.substitute ? `$${(values.quantity * (16.99 + 1)).toFixed(2)}` : `$${(values.quantity * (16.99)).toFixed(2)}`}</span>
            <div id='Quantity'>
              <button id='Negative' type='button' onClick={onDecrement}>-</button>
              <span className='Total'>{values.quantity}</span>
              <button id='Positive' type='button' onClick={onIncrement}>+</button>
            </div>
          </div>
        </div>

      </div>
    </form>
  )

}

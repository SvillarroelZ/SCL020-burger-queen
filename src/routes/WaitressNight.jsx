const WaitressNight = () => {
  return (
    <>
      <form>
        <input type='range' name='' id='' min='0' max='5' />
        <label class='switch'>
          <input type='checkbox' />
          <span class='slider round'></span>
        </label>
      </form>
      <div>
        <div id='menu'>
          <p>Drinks</p>
          <input type='checkbox' name='coffee' id='' />
          <input type='checkbox' name='tea' id='' />
        </div>
        <div>
          <p>Food</p>
          <input type='checkbox' name='sandwich' id='' />
        </div>
        <div>
          <p>Dessert</p>
          <input type='checkbox' name='donut' id='' />
        </div>
      </div>
      <div class='product-size'>
        <p>Tamaño</p>
        <div>
          <input type='button' value='S' />
          <input type='button' value='M' />
          <input type='button' value='L' />
        </div>
      </div>
      <div>
        <input type='button' value='Logout' />
        <input type='button' value='Send Order' />
        <input type='button' value='Panic Button' />
      </div>
      <div>
        <div>
          <div class='order'>
            <input type='button' value='+' />
            <p>3</p>
            <input type='button' value='-' />
            <p>Juguito de uwu</p>
            <input type='button' value='x' />
          </div>
          <div>
            <input type='button' value='+' />
            <p>3</p>
            <input type='button' value='-' />
            <p>Juguito de uwu</p>
            <input type='button' value='x' />
          </div>
          <div>
            <input type='button' value='+' />
            <p>3</p>
            <input type='button' value='-' />
            <p>Juguito de uwu</p>
            <input type='button' value='x' />
          </div>
        </div>
        <div>
          <p>Mesero:Pepito</p>
          <p>Total: $25.000</p>
        </div>
      </div>
    </>
  );
};

export default WaitressNight;

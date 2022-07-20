import { Sizes } from '../components/waitress/Sizes';
import Menu from '../components/waitress/Menu';
import menudataJson from '../menudata.json';

const Waitress = () => {
	const data = menudataJson.menuOptions;

	return (
		<>
			<Menu data={data} />
			{/* <form>
				<input type='range' name='' id='' min='0' max='5' />
				<input type='radio' />
			</form>
			<div>
				<div id='menu'>
					<p>Drinks</p>
					<input type='checkbox' name='coffee' id='' />
					<input type='checkbox' name='juice' id='' />
				</div>
				<div>
					<p>Food</p>
					<input type='checkbox' name='sandwich' id='' />
					<input type='checkbox' name='salad' id='' />
				</div>
				<div>
					<p>Dessert</p>
					<input type='checkbox' name='cake' id='' />
					<input type='checkbox' name='churro' id='' />
				</div>
			</div> */}
			<Sizes></Sizes>
			<div>
				<input type='button' value='Logout' />
				<input type='button' value='Send Order' />
				<input type='button' value='Panic Button' />
			</div>
			<div>
				<div>
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

export default Waitress;

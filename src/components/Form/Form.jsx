import { useCartContext } from "../../Context/CartContext";

const UserForm = ({ createOrder }) => {
  const { handleForm, userData } = useCartContext();

  return (
    <form
      onChange={handleForm}
      onSubmit={(e) => {
        e.preventDefault();

        userData.email === userData.emailvalidation
          ? createOrder()
          : alert("Los E-mail deben ser iguales");
      }}
    >
      <legend className="form-legend">Ingresá tus datos</legend>
      <div>
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input type="text" name="name" defaultValue={userData.name} required />
      </div>
      <div>
        <label htmlFor="lastName" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          name="lastName"
          defaultValue={userData.lastName}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          name="phone"
          defaultValue={userData.phone}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={userData.email}
          required
        />
      </div>
      <div>
        <label htmlFor="emailvalidation" className="form-label">
          Confirmar Email
        </label>
        <input
          type="email"
          name="emailvalidation"
          defaultValue={userData.emailvalidation}
          required
        />
      </div>
      <button className="buy-buttom">Comprar</button>
    </form>
  );
};

export default UserForm;

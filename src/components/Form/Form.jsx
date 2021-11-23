import { useCartContext } from "../../Context/CartContext";

const UserForm = ({ createOrder }) => {
  const { handleForm, userData } = useCartContext();

  return (
    <form onChange={handleForm} onSubmit={createOrder}>
      <legend className="form-legend">Ingresá tus datos</legend>
      <div>
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          defaultValue={userData.name}
        />
      </div>
      <div>
        <label htmlFor="lastName" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          name="lastName"
          defaultValue={userData.lastName}
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
        />
      </div>
      <button className="buy-buttom">¡Comprar!</button>
    </form>
  );
};

export default UserForm;

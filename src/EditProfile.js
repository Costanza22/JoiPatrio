import React from 'react';
import './EditProfile.css';

const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <h2>Editar Perfil</h2>
      <form>
        <label>
          Nome:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Senha:
          <input type="password" />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditProfile;

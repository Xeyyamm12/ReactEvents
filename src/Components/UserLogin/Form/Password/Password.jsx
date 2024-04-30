import "./Password.css";
export const Password = () => {
  return (
    <div className="input-group">
      <input className="input" type="password" required autoComplete="off" />
      <label className="user-label">Passsword</label>
    </div>
  );
};
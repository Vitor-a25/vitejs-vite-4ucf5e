function Header({ texto, image }) {
  return (
    <>
      <h1>{texto}</h1>
      <img src={image} />
    </>
  );
}
export default Header;
